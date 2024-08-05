<script lang="ts">
	import SidebarMenuPosSub from '@components/molecules/sidebar/SidebarMenuPosSub.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';

	export let menus: SidebarMenuType[] = [];
</script>

<ul>
	{#each menus as menu}
		<SidebarMenuPosSub {menu} hasSubmenu={!!menu.submenu} />
	{/each}
</ul>
