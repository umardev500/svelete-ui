<script lang="ts">
	import MoreIcon from '@components/atoms/icons/custom/MoreIcon.svelte';
	import SearchIcon from '@components/atoms/icons/custom/SearchIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import HeaderMenuLeftList from '@components/organisms/header/HeaderMenuLeftList.svelte';
	import HeaderRightMenuList from '@components/organisms/header/HeaderRightMenuList.svelte';
	import type { Menu } from '@typed/menu';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { leftMenuStore } from '../../../stores/leftMenu';
	export let sidebarOpen: boolean;

	let items: Menu[] = [];
	const unsubscribe = leftMenuStore.subscribe((value) => {
		items = value;
	});

	onDestroy(() => {
		unsubscribe();
	});

	const dispatch = createEventDispatcher();
	const toggle = () => {
		dispatch('toggle');
	};

	const toggleMobileNav = () => {
		dispatch('toggleMobileNav');
	};
</script>

<header
	class="bg-white fixed top-0 {sidebarOpen ? 'show' : ''}"
	style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}"
>
	<nav class="px-4 h-16 border-b relative">
		<div class="h-full flex items-center justify-between lg:hidden w-full px-2">
			<div class="flex items-center gap-2">
				<button on:click={toggle}>
					<ListIcon />
				</button>
				<span class="font-bold text-base">API Saga</span>
			</div>

			<div class="flex items-center gap-2">
				<button>
					<SearchIcon />
				</button>
				<button on:click={toggleMobileNav}>
					<MoreIcon />
				</button>
			</div>
		</div>
		<div class="h-full items-center justify-between hidden lg:flex">
			<!-- Left menus -->
			<HeaderMenuLeftList {items} />
			<!-- End of left menus -->
			<!-- Right Menus -->
			<HeaderRightMenuList />
			<!-- End of Right Menus -->
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		font-family: 'Roboto';
		left: 0rem;
		transition: left var(--margin-transition-duration) var(--margin-timing-function);
		@media screen and (min-width: 1024px) {
			left: 4.5rem;
			right: 0;

			&.show {
				left: 22.125rem;
			}
		}
	}
</style>
