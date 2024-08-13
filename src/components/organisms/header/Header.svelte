<script lang="ts">
	import MoreIcon from '@components/atoms/icons/custom/MoreIcon.svelte';
	import SearchIcon from '@components/atoms/icons/custom/SearchIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import HeaderMenuLeftList from '@components/organisms/header/HeaderMenuLeftList.svelte';
	import HeaderRightMenuList from '@components/organisms/header/HeaderRightMenuList.svelte';
	import ModalHost from '@components/organisms/modal/ModalHost.svelte';
	import Search from '@components/organisms/search/Search.svelte';
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
				<ModalHost>
					<svelte:fragment slot="trigger" let:toggle>
						<button class="flex" on:click={toggle}>
							<SearchIcon classList="!size-5" />
						</button>
					</svelte:fragment>

					<svelte:fragment slot="inner" let:toggle>
						<div class="bg-white rounded-lg overflow-hidden w-full lg:w-[447px] mx-auto p-4">
							<Search />
						</div>
					</svelte:fragment>
				</ModalHost>
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
		right: 0;
		transition: left var(--margin-transition-duration) var(--margin-timing-function);
		z-index: 50;
		@media screen and (min-width: 1024px) {
			left: 4.5rem;

			&.show {
				left: 22.125rem;
			}
		}
	}
</style>
