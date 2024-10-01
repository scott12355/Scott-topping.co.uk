<script>
	export const prerender = true;
	import NavBar from '$lib/navBar.svelte';
	import Home from '$lib/home.svelte';
	import '../main.css';
	import Experiences from '$lib/experiences.svelte';
	import Contact from '$lib/contact.svelte';
	import { goto } from '$app/navigation';

	let currentView = 'Home';

	/**
	 * @param {{ detail: string; }} e
	 */
	function updateView(e) {
		console.log(e.detail);
		currentView = e.detail;
		goto(e.detail);
	}
</script>

<div>
	<header>
		<br class="hidden-mobile" />
		<h1 class="text-[100px]">Scott Topping</h1>
		<h4 class="p-1">Junior Software Engineer</h4>
	</header>
</div>

<header class="p-5">
	<NavBar on:viewChange={updateView}></NavBar>
</header>
<slot></slot>
