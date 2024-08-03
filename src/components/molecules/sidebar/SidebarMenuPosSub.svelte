<script lang="ts">
	import SidebarMenuItem from '@components/atoms/menu/SidebarMenuItem.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';

	export let hasSubmenu = false;
	export let menu: SidebarMenuType;
</script>

<li>
	<SidebarMenuItem {menu} {hasSubmenu} />

	<!-- Sub menu -->
	{#if hasSubmenu}
		<ul class="border-l ml-4">
			{#if menu.submenu}
				{#each menu.submenu as submenu}
					<SidebarMenuItem menu={submenu} hasSubmenu={false} />
				{/each}
			{/if}
		</ul>
	{/if}
	<!-- End of Sub menu -->
</li>
