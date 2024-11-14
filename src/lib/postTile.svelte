<script lang="ts">
	import type { BlogTile, Image } from '$lib/types/BlogTile.ts';
	export let content: BlogTile;
</script>

<div class="tile">
	<h4>{content.title}</h4>
	<div class="images">
		{#each content.images as image, i}
			{#if i < 3}
				<img class="column" src={image.src} alt={image.alt} />
			{/if}
		{/each}
	</div>

	{#each content.body as pg}
		<p>{pg}</p>
	{/each}
</div>

<style>
	.images {
		margin: auto;
		content: '';
		clear: both;
		display: table;
	}

	img {
		display: inline-block;
		width: 100%;
		max-width: 300px;
		margin-bottom: 10px;
		margin: 2%;
		padding: auto;
		vertical-align: center;
	}

	.tile {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.55);
		padding: 10px;
		max-width: 100%;
		margin: 5%;
		border-radius: 5px;
	}

	p {
		margin-left: 9%;
		margin-right: 9%;
		color: aliceblue;
	}

	h4 {
		color: white;
		font-weight: bold;
		margin-bottom: 10px;
		margin-top: 10px;
	}
</style>
