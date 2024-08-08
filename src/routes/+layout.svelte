<script lang="ts">
	import Footer from '@components/organisms/footer/Footer.svelte';
	import Header from '@components/organisms/header/Header.svelte';
	import Sidebar from '@components/organisms/sidebar/Sidebar.svelte';
	import { leftMenuStore } from '../stores/leftMenu';
	import '../styles/app.scss';

	let sidebarOpen: boolean = true;
	export let data;

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	// Initialize left menu of header
	leftMenuStore.set(data.categories);
</script>

<Sidebar {sidebarOpen} on:toggle={toggleSidebar} />
<Header {sidebarOpen} />
<main style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}">
	<slot></slot>
</main>
<Footer />

<style>
	main {
		margin-left: var(--sidebar-width);
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);
	}
</style>
