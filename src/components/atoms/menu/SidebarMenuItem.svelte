<script lang="ts">
	import AngleRight from '@components/atoms/icons/AngleRight.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';

	export let hasSubmenu = false;
	export let menu: SidebarMenuType;
</script>

<li class="w-full">
	<a
		class="rounded-xl cursor-pointer px-4 py-2.5 flex items-center text-base relative justify-between {hasSubmenu
			? 'hover:bg-gray-50 font-medium text-black'
			: 'text-gray-800'} "
		href={menu.href}
	>
		<span class="text">{menu.title}</span>
		{#if hasSubmenu}
			<span class="icon"><AngleRight classList="!size-5 fill-current" /></span>
		{/if}
	</a>
</li>
