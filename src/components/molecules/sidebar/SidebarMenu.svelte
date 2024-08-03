<script lang="ts">
	import SidebarMenuPosSub from '@components/molecules/sidebar/SidebarMenuPosSub.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';

	export let slug: string = '';

	let menus: SidebarMenuType[] = [
		{
			title: 'Get Started',
			submenu: [
				{
					title: 'Installation',
					href: `/post/${slug}`
				},
				{
					title: 'Configuration',
					href: `/post/${slug}`
				},
				{
					title: 'Usage',
					href: `/post/${slug}`
				},
				{
					title: 'Playground',
					href: `/post/${slug}`
				}
			]
		},
		{
			title: 'Guides',
			submenu: [
				{
					title: 'Installation',
					href: `/post/${slug}`
				},
				{
					title: 'Configuration',
					href: `/post/${slug}`
				},
				{
					title: 'Usage',
					href: `/post/${slug}`
				},
				{
					title: 'Playground',
					href: `/post/${slug}`
				}
			]
		},
		{
			title: 'API',
			href: `/post/${slug}`
		},
		{
			title: 'Community',
			href: `/post/${slug}`
		}
	];
</script>

<ul>
	{#each menus as menu}
		<SidebarMenuPosSub {menu} hasSubmenu={!!menu.submenu} />
	{/each}
</ul>
