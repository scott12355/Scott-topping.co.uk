<script>
	export const prerender = true;
	import NavBar from '$lib/navBar.svelte';
	import Home from '$lib/home.svelte';
	import '../main.css';
	import Experiences from '$lib/experiences.svelte';
	import Contact from '$lib/contact.svelte';
	import { goto } from '$app/navigation';
	import { inject } from '@vercel/analytics';
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

<header class="pt-1 pb-1">
	<NavBar on:viewChange={updateView}></NavBar>
</header>
<slot></slot>
