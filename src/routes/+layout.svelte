<script lang="ts">
	import Footer from '@components/organisms/footer/Footer.svelte';
	import Header from '@components/organisms/header/Header.svelte';
	import Sidebar from '@components/organisms/sidebar/Sidebar.svelte';
	import '../styles/app.scss';

	let sidebarOpen: boolean = true;

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

<Sidebar {sidebarOpen} on:toggle={toggleSidebar} />
<Header {sidebarOpen} />
<main style="--sidebar-width: {sidebarOpen ? '16.625rem' : '4.5rem'}">
	<slot></slot>
</main>
<Footer />

<style>
	main {
		margin-left: var(--sidebar-width);
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);
	}
</style>
