<script lang="ts">
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
	class={sidebarOpen ? 'show' : ''}
	style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}"
>
	<nav class="px-4 h-16 border-b flex items-center justify-between">
		<!-- Left menus -->
		<HeaderMenuLeftList {items} />
		<!-- End of left menus -->
		<!-- Right Menus -->
		<HeaderRightMenuList />
		<!-- End of Right Menus -->
	</nav>
</header>

<style lang="scss">
	header {
		font-family: 'Roboto';
		margin-left: 4.5rem;
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);

		@media screen and (min-width: 1024px) {
			&.show {
				margin-left: 22.125rem;
			}
		}
	}
</style>
