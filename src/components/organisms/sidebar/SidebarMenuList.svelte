<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenuListing from '@components/molecules/sidebarMenuListing/SidebarMenuListing.svelte';
	import type { params } from '@typed/page';
	import type { Post } from '@typed/post';
	import Sortable from 'sortablejs';
	import { onDestroy, onMount } from 'svelte';

	$: parameters = $page.params as params;
	let sortableEl: HTMLElement;

	export let posts: Post[] = [];
	export let isSubmenu: boolean;

	let instance: Sortable;

	onMount(() => {
		instance = Sortable.create(sortableEl, {
			group: 'nested',
			animation: 150
		});
	});

	onDestroy(() => {
		instance?.destroy();
	});
</script>

<ul bind:this={sortableEl}>
	{#each posts as post}
		<SidebarMenuListing childrenOfSubMenu={isSubmenu} category={parameters.category} {post} />
	{/each}
</ul>
