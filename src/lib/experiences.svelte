<script lang="ts">
	import type { BlogTile, Image } from '$lib/types/BlogTile.ts';
	import Tile from './postTile.svelte';
	import postsData from '$lib/posts.json';
	
	const AllPosts: BlogTile[] = postsData;
</script>

<div>
	{#each AllPosts as post}
		<Tile content={post}></Tile>
	{/each}
</div>
