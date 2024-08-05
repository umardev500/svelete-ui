<script lang="ts">
	import LeftMenu from '@components/molecules/header/LeftMenu.svelte';
	import RightMenu from '@components/molecules/header/RightMenu.svelte';
	export let sidebarOpen: boolean;
</script>

<header style="--sidebar-width: {sidebarOpen ? '16.625rem' : '4.5rem'}">
	<nav class="px-4 h-16 border-b flex items-center justify-between">
		<!-- Left menus -->
		<LeftMenu />
		<!-- End of left menus -->
		<!-- Right Menus -->
		<RightMenu />
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
