<script>
	import LeftMenu from '@components/molecules/header/LeftMenu.svelte';
	import RightMenu from '@components/molecules/header/RightMenu.svelte';
</script>

<header class="">
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
		margin-left: 250px;
	}
</style>
