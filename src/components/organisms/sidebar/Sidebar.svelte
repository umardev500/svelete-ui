<script lang="ts">
	import SidebarAddNewMenu from '@components/atoms/button/SidebarAddNewMenu.svelte';
	import ArrowLeft from '@components/atoms/icons/ArrowLeft.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import SidebarMenu from '@components/molecules/sidebar/SidebarMenu.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';
	import 'simplebar';
	import 'simplebar/dist/simplebar.min.css';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let sidebarOpen: boolean;
	const toggle = () => {
		dispatch('toggle');
	};

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

	// @Todo
	// Fetch Menus data from server
</script>

<aside class="sidebar {sidebarOpen ? 'show' : ''} bottom-0 top-0 left-0 pb-6 border-r">
	<div class="flex items-center border-b h-16 px-4 heading relative">
		<div class="flex items-center gap-2 text-nowrap text w-full">
			<span class="text-gray-900">
				<ArrowLeft classList="fill-current" />
			</span>
			<span class="font-bold text-black">API Saga</span>
		</div>
		<button on:click={toggle} class="hover:text-gray-800 absolute right-4 toggler"
			><ListIcon classList="!size-5 fill-current" /></button
		>
	</div>

	<!-- Content -->
	<div class="bottom-[4.5rem] pb-4 absolute top-16 right-0 left-0" data-simplebar>
		<!-- Banner -->
		<enhanced:img
			class="mx-auto px-6 mt-6 banner w-full"
			src="$lib/images/go-sidebar-banner.png"
			alt="banner"
		/>
		<!-- End of Banner -->

		<div class="px-4 py-6 text-nowrap menus">
			<SidebarMenu {menus} />
		</div>
	</div>
	<div class="border-t absolute h-[4.5rem] bg-white bottom-0 right-0 left-0 flex add-menu-button">
		<SidebarAddNewMenu />
	</div>
</aside>

<style lang="scss">
	aside {
		position: fixed;
		font-family: 'Roboto';
	}

	.sidebar.show {
		width: 22.125rem;
	}

	.sidebar {
		width: 4.5rem;
		transition: width var(--margin-transition-duration) var(--margin-timing-function);

		.banner {
			opacity: 0;
			transition: opacity var(--margin-transition-duration) var(--margin-timing-function);
			height: 71px;
			object-fit: cover;
		}

		.heading {
			justify-content: center;

			.text {
				opacity: 0;
				pointer-events: none;
				transform: translateX(-30px);
				transition:
					opacity var(--margin-transition-duration) var(--margin-timing-function),
					transform var(--margin-transition-duration) var(--margin-timing-function);
			}

			.toggler {
				right: 50%;
				transform: translateX(50%);
				transition:
					right var(--margin-transition-duration) var(--margin-timing-function),
					transform var(--margin-transition-duration) var(--margin-timing-function);
			}
		}

		.menus {
			opacity: 0;
			transform: translateX(-30px);
			transition:
				opacity var(--margin-transition-duration) var(--margin-timing-function),
				transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		.add-menu-button {
			opacity: 0;
			transform: translateX(-30px);
			transition:
				opacity var(--margin-transition-duration) var(--margin-timing-function),
				transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		&.show {
			.banner {
				opacity: 1;
			}

			.menus {
				opacity: 1;
				transform: translateX(0);
			}

			.heading {
				justify-content: space-between;

				.text {
					opacity: 1;
					pointer-events: unset;
					transform: translateX(0);
				}

				.toggler {
					right: 1.25rem;
				}
			}

			.add-menu-button {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}
</style>
