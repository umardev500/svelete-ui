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

<header style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}">
	<nav class="px-4 h-16 border-b flex items-center justify-between">
		<!-- Left menus -->
		<HeaderMenuLeftList {items} />
		<!-- End of left menus -->
		<!-- Right Menus -->
		<HeaderRightMenuList />
		<!-- End of Right Menus -->
	</nav>
</header>

<style>
	header {
		font-family: 'Roboto';
		margin-left: var(--sidebar-width);
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);
	}
</style>
