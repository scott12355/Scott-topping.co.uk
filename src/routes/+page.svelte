<script lang="ts">
	import Home from '$lib/home.svelte';

	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';

	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	export let data;
</script>

<body>
	<!-- <ul>
		{#each data.countries as country}
			<li>{country.name}</li>
		{/each}
	</ul> -->
	<div>
		<header>
			<h1 class="text-7xl text-center">Scott Topping</h1>
			<h4 class=" text-center">Junior Software Engineer</h4>
		</header>
	</div>
	<Home></Home>

	<div class="flex flex-row gap-5 place-content-center">
		<div>
			<a
				class="w-1 h-1"
				href="https://github.com/scott12355"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaGithub />
				</div>
			</a>
		</div>

		<div>
			<a
				href="https://www.linkedin.com/in/scotttopping/"
				aria-label="Linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div class="icon">
					<FaLinkedin />
				</div>
			</a>
		</div>
	</div>
</body>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #4c25b6;
	}
</style>
