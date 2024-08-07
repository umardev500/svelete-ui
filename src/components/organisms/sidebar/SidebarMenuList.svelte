<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenuListing from '@components/molecules/sidebarMenuListing/SidebarMenuListing.svelte';
	import type { params } from '@typed/page';
	import type { Post } from '@typed/post';

	$: parameters = $page.params as params;

	export let posts: Post[] = [];
</script>

<ul>
	{#each posts as post}
		<SidebarMenuListing category={parameters.category} {post} />
	{/each}
</ul>
