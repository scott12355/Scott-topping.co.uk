<script>
    export const prerender = true
	import NavBar from "$lib/navBar.svelte";
	import Home from "$lib/home.svelte";

	import Experiences from "$lib/experiences.svelte";
	import Contact from "$lib/contact.svelte";
  
	let currentView = "Home";
  
   
  
	/**
	 * @param {{ detail: string; }} e
	 */
	function updateView(e) {
	  console.log(e.detail)
	  currentView = e.detail;
	}
  </script>
  
  <header>
	  <NavBar on:viewChange={updateView}></NavBar>
  </header>
  <body>
	{#if currentView == "Home"}
	  <Home></Home>
	{:else if currentView == "Experiences"}
	<Experiences></Experiences>
	{:else if currentView == "Contact"}
	<Contact></Contact>
	{:else}
	<p>Page not found</p>
	{/if}
  </body>


  <style>
  body {
	text-align: center;
	color: #333;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}


  

  </style>
  