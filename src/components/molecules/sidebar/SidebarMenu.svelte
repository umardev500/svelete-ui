<script lang="ts">
	import SidebarMenuPosSub from '@components/molecules/sidebar/SidebarMenuPosSub.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';
	import Sortable from 'sortablejs';
	import { onMount } from 'svelte';

	export let menus: SidebarMenuType[] = [];
	let menuElement: HTMLElement;

	onMount(() => {
		Sortable.create(menuElement, {
			animation: 150,
			onEnd: (e) => {
				const item = e.item;
				item.classList.remove('border-t');
			},
			onMove: (e) => {
				const dragged = e.dragged;
				const trigger = dragged.firstElementChild;
				dragged.classList.add('border-t');
			}
		});
	});
</script>

<ul bind:this={menuElement}>
	{#each menus as menu}
		<SidebarMenuPosSub {menu} hasSubmenu={!!menu.submenu} />
	{/each}
</ul>
