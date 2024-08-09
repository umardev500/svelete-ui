<script lang="ts">
	import MoreIcon from '@components/atoms/icons/custom/MoreIcon.svelte';
	import SearchIcon from '@components/atoms/icons/custom/SearchIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import HeaderMenuLeftList from '@components/organisms/header/HeaderMenuLeftList.svelte';
	import HeaderRightMenuList from '@components/organisms/header/HeaderRightMenuList.svelte';
	import type { CategoryMenu } from '@typed/category';
	import { onDestroy } from 'svelte';
	import { leftMenuStore } from '../../../stores/leftMenu';
	export let sidebarOpen: boolean;

	let items: CategoryMenu[] = [];
	const unsubscribe = leftMenuStore.subscribe((value) => {
		items = value;
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<header
	class="{sidebarOpen ? 'show' : ''} overflow-hidden"
	style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}"
>
	<nav class="px-4 h-16 border-b relative">
		<div class="h-full flex items-center justify-between mobile-menu lg:hidden w-full">
			<div class="flex items-center gap-2">
				<ListIcon />
				<span class="font-bold text-base">API Saga</span>
			</div>

			<div class="flex items-center gap-2">
				<button>
					<SearchIcon />
				</button>
				<button>
					<MoreIcon />
				</button>
			</div>
		</div>
		<div class="h-full flex items-center justify-between desktop-menu">
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
		margin-left: 0rem;
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);

		.desktop-menu {
			transform: translateY(-8rem);
			transition: transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		.mobile-menu {
			transform: translateY(0);
			transition: transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		@media screen and (min-width: 1024px) {
			margin-left: 4.5rem;

			.desktop-menu {
				transform: translateY(-4rem);
			}

			.mobile-menu {
				transform: translateY(-4rem);
			}

			&.show {
				margin-left: 22.125rem;
			}
		}
	}
</style>
