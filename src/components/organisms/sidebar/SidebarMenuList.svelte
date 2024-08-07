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
		let options: Sortable.Options = {};
		if (isSubmenu) {
			options = {
				onRemove: (e) => {
					const targetEl = e.target;
					const targetRect = targetEl.getBoundingClientRect();

					const containerEl = targetEl.parentElement;

					containerEl?.style.setProperty('--offset', `${targetRect.height}px`);
				},
				onAdd: (e) => {
					const targetEl = e.target;
					const targetRect = targetEl.getBoundingClientRect();

					const containerEl = targetEl.parentElement;

					containerEl?.style.setProperty('--offset', `${targetRect.height}px`);
				}
			};
		}

		instance = Sortable.create(sortableEl, {
			group: 'nested',
			animation: 150,
			onStart: (e) => {
				const item = e.item;
				item.classList.toggle('dragging');
			},
			onEnd: (e) => {
				const item = e.item;
				item.classList.toggle('dragging');
			},
			...options
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
