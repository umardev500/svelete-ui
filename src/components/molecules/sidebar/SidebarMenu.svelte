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
					href: `/post/get-started/installation`
				},
				{
					title: 'Configuration',
					href: `/post/get-started/configuration`
				},
				{
					title: 'Usage',
					href: `/post/get-started/usage`
				},
				{
					title: 'Playground',
					href: `/post/get-started/playground`
				}
			]
		},
		{
			title: 'Guides',
			submenu: [
				{
					title: 'Beginner Guide',
					href: `/post/guides/beginner`
				},
				{
					title: 'Intermediate Tips',
					href: `/post/guides/intermediate`
				},
				{
					title: 'Advanced Techniques',
					href: `/post/guides/advanced`
				},
				{
					title: 'Troubleshooting',
					href: `/post/guides/troubleshooting`
				}
			]
		},
		{
			title: 'API Reference',
			href: `/post/api-reference`
		},
		{
			title: 'Community Hub',
			href: `/post/community-hub`
		}
	];
</script>

<ul>
	{#each menus as menu}
		<SidebarMenuPosSub {menu} hasSubmenu={!!menu.submenu} />
	{/each}
</ul>
