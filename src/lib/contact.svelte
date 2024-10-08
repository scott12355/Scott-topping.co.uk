<script lang="ts">
	const handleInput = (event: Event) => {
		const target = event.target as HTMLTextAreaElement;
		target.style.height = 'auto'; // Reset height to recalculate
		target.style.height = `${target.scrollHeight}px`; // Set new height based on scroll height
	};
</script>

<div class="w-[90%] max-w-2xl">
	<form
		action="https://formsubmit.co/scott@scott-topping.co.uk"
		method="POST"
		class="flex flex-col space-y-4"
	>
		<input
			type="text"
			name="name"
			required
			class="border-2 border-gray-300 p-2 rounded-md"
			placeholder="Name"
		/>
		<textarea
			name="message"
			required
			class="border-2 border-gray-300 p-2 rounded-md h-[100px]"
			placeholder="Message"
			rows="4"
			on:input={handleInput}
		></textarea>
		<input
			type="email"
			name="email"
			required
			class="border-2 border-gray-300 p-2 rounded-md"
			placeholder="Email"
		/>
		<input type="hidden" name="_captcha" value="false" />
		<button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
			>Send</button
		>
	</form>
</div>
