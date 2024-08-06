<script lang="ts">
	import SidebarMenuList from '@components/molecules/sidebar/SidebarMenuList.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';
	import { onMount } from 'svelte';

	export let menus: SidebarMenuType[] = [];
	let menuElement: HTMLElement;

	onMount(() => {});
</script>

<ul bind:this={menuElement}>
	{#each menus as menu}
		<SidebarMenuList {menu} hasSubmenu={!!menu.submenu} />
	{/each}
</ul>
