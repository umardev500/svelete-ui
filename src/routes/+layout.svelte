<script lang="ts">
	import Footer from '@components/organisms/footer/Footer.svelte';
	import Header from '@components/organisms/header/Header.svelte';
	import MenuSidebar from '@components/organisms/sidebar/MenuSidebar.svelte';
	import Sidebar from '@components/organisms/sidebar/Sidebar.svelte';
	import { leftMenuStore } from '../stores/leftMenu';
	import '../styles/app.scss';

	let sidebarOpen: boolean = true;
	let mobileNavOpen: boolean = false;

	export let data;

	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}

	// Initialize left menu of header
	leftMenuStore.set(data.categories);
</script>

<Sidebar {sidebarOpen} on:toggle={toggleSidebar} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={sidebarOpen ? toggleSidebar : toggleMobileNav}
	class="backdrop {sidebarOpen || mobileNavOpen ? 'show' : ''}"
></div>

<Header {sidebarOpen} on:toggleMobileNav={toggleMobileNav} on:toggle={toggleSidebar} />

<main class="main-content-wrapper" style="--sidebar-width: {sidebarOpen ? '22.125rem' : '4.5rem'}">
	<slot></slot>
</main>

<MenuSidebar on:toggle={toggleMobileNav} sidebarOpen={mobileNavOpen} />

<Footer />

<style lang="scss">
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0);
		pointer-events: none;
		z-index: 10;
		transition: background-color var(--margin-transition-duration) var(--margin-timing-function);

		&.show {
			pointer-events: all;
			background-color: rgba(0, 0, 0, 0.4);
		}

		/* Middle */
		@media screen and (min-width: 768px) {
		}

		/* Large */
		@media screen and (min-width: 1024px) {
			background-color: transparent;
			pointer-events: none;

			&.show {
				pointer-events: none;
				background-color: transparent;
			}
		}

		/* XLarge */
		@media screen and (min-width: 1280px) {
		}

		/* XXLarge */
		@media screen and (min-width: 1536px) {
		}
	}

	main.main-content-wrapper {
		transition: margin-left var(--margin-transition-duration) var(--margin-timing-function);
		margin-left: 0rem;

		/* Middle */
		@media screen and (min-width: 768px) {
		}

		/* Large */
		@media screen and (min-width: 1024px) {
			margin-left: var(--sidebar-width);
		}

		/* XLarge */
		@media screen and (min-width: 1280px) {
		}

		/* XXLarge */
		@media screen and (min-width: 1536px) {
		}
	}
</style>
