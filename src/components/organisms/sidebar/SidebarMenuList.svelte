<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenuListing from '@components/molecules/sidebarMenuListing/SidebarMenuListing.svelte';
	import type { params } from '@typed/page';
	import type { Post } from '@typed/post';
	import { onDestroy } from 'svelte';
	import { postStore } from '../../../stores/postData';

	$: parameters = $page.params as params;

	let posts: Post[] = [];

	const unsubscribe = postStore.subscribe((data) => {
		posts = data;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<ul>
	{#each posts as post}
		<SidebarMenuListing category={parameters.category} {post} />
	{/each}
</ul>
