<script lang="ts">
	import { writable } from 'svelte/store';

	let userInput = ''; // Holds the current user input
	const messages = writable([]); // Holds the conversation messages
	const typing = writable(false); // Holds the typing state
	const typingMessage = writable('Model is loading, this may take some time...');

	messages.subscribe((value) => {
		console.log(value.length);
		if (value.length > 1) {
			typingMessage.set('Bot is Typing...');
		}
	});

	const apiEndpoint = 'https://scott12355-dockettest.hf.space/chat';

	// Function to send a GET request to the API
	async function sendMessage() {
		if (!userInput.trim()) return;

		// Add user message to the messages array
		messages.update((msgs) => [...msgs, { role: 'user', content: userInput }]);
		userInput = '';
		typing.set(true); // Set typing to true while waiting for the response
		console.log(JSON.stringify({ conversationHistory: $messages }));
		try {
			// Make the POST request
			const response = await fetch(apiEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ conversationHistory: $messages }) // Send the text as JSON
			});

			if (!response.ok) {
				throw new Error('Failed to fetch response from API.');
			}

			const data = await response.json();

			// Add API response to the messages array
			messages.update((msgs) => [...msgs, { role: 'api', content: data.output }]);
		} catch (error) {
			console.error('Error:', error);
			messages.update((msgs) => [
				...msgs,
				{ role: 'error', content: 'Failed to communicate with the server.' }
			]);
		} finally {
			typing.set(false); // Reset typing state
		}
	}
</script>

<div class="chat-container">
	<div>
		{#each $messages as msg (msg)}
			<div class="message {msg.role}">
				{msg.role === 'user' ? 'You' : msg.role === 'api' ? 'Bot' : 'Error'}: {msg.content}
			</div>
		{/each}
		{#if $typing}
			<div class="message typing">{$typingMessage}</div>
		{/if}
	</div>
	<div class="input-container">
		<input
			type="text"
			placeholder="Type your message..."
			bind:value={userInput}
			on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		/>
		<button on:click={sendMessage} disabled={!userInput.trim()}>Send</button>
	</div>
</div>

<style>
	.chat-container {
		max-width: 97%;
		margin: auto;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		background: #f9f9f9;
	}
	.message {
		margin-bottom: 1rem;
	}
	.user {
		text-align: right;
		color: #007aff;
	}
	.api {
		text-align: left;
		color: #333;
	}
	.error {
		text-align: left;
		color: red;
	}
	.typing {
		text-align: left;
		font-style: italic;
		color: gray;
	}
	.input-container {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}
	input[type='text'] {
		flex: 1;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		background: #007aff;
		color: white;
		cursor: pointer;
	}
	button:disabled {
		background: #bbb;
	}
</style>
