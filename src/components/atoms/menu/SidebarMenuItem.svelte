<script lang="ts">
	import type { SidebarMenuType } from '@typed/sidebarMenu';
	import AngleDownIcon from '../icons/AngleDownIcon.svelte';

	export let hasSubmenu = false;
	export let menu: SidebarMenuType;
</script>

<li>
	<a
		class="rounded-xl cursor-pointer mb-2 px-4 py-2.5 flex items-center text-base relative justify-between {hasSubmenu
			? 'hover:bg-gray-50 font-medium text-black'
			: 'text-gray-800'} "
		href={menu.href}
	>
		<span class="text">{menu.title}</span>
		{#if hasSubmenu}
			<span class="icon"><AngleDownIcon classList="!size-5 fill-current" /></span>
		{/if}
	</a>
</li>
