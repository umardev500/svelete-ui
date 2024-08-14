<script lang="ts">
	import XMarkFilled from '@components/atoms/icons/custom/XMarkFilled.svelte';
	import GithubIcon from '@components/atoms/icons/GithubIcon.svelte';
	import SunIcon from '@components/atoms/icons/SunIcon.svelte';
	import { leftMenuStore, rightMenuStore } from '@store/leftMenu';
	import type { Menu } from '@typed/menu';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import SidebarMenuList from './SidebarMenuList.svelte';

	export let sidebarOpen: boolean;

	const dispatch = createEventDispatcher();

	const toggle = () => {
		dispatch('toggle');
	};

	let menus: Menu[] = [];
	let menus2: Menu[] = [];
	const unsubscribe = leftMenuStore.subscribe((data) => {
		menus = data;
	});
	const unsubscribe2 = rightMenuStore.subscribe((data) => {
		menus2 = [...menus2, ...data];
	});

	onDestroy(() => {
		unsubscribe();
		unsubscribe2();
	});
</script>

<aside id="menu-sidebar" class="{sidebarOpen ? 'show' : ''} bg-white border-l">
	<div class="flex items-center h-16 px-4 justify-between">
		<span class="font-bold text-black">API Saga</span>

		<div class="flex items-center gap-2">
			<button>
				<SunIcon />
			</button>
			<a href="https://github.com/umardev500">
				<GithubIcon />
			</a>
			<button on:click={toggle}>
				<XMarkFilled />
			</button>
		</div>
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
			<SidebarMenuList isMobileNav={true} isSubmenu={false} posts={menus} />
			<SidebarMenuList isMobileNav={true} isSubmenu={false} posts={menus2} />
		</div>
	</div>
	<!-- End of Content -->
</aside>

<style lang="scss">
	#menu-sidebar {
		position: fixed;
		font-family: 'Roboto';
		right: calc(-1 * var(--menu-sidebar-width));
		top: 0;
		bottom: 0;
		z-index: 1050;
		width: var(--menu-sidebar-width);
		transition: right var(--margin-transition-duration) var(--margin-timing-function);

		@media screen and (min-width: 1024px) {
			right: calc(-1 * var(--menu-sidebar-width));
		}

		&.show {
			right: 0;

			@media screen and (min-width: 1024px) {
				right: calc(-1 * var(--menu-sidebar-width));
			}
		}
	}
</style>
