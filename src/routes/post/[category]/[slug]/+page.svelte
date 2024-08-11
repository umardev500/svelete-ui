<script lang="ts">
	import Breadcrumbs from '@components/molecules/Breadcrumbs.svelte';
	import PostInfo from '@components/molecules/PostInfo.svelte';
	import OnThisPage from '@components/organisms/OnThisPage.svelte';
	import RightSidebar from '@components/organisms/sidebar/RightSidebar.svelte';
	import { onMount } from 'svelte';
	export let data;

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});
</script>

<main class="px-6 flex">
	<div class="w-full mr-[250px]">
		<div class="w-full">
			<!-- Breadcrumb -->
			<div class="mt-6">
				<Breadcrumbs {data} />
			</div>
			<!-- End of Breadcrumb -->

			<!-- Post Info -->
			<div class="mt-6">
				<PostInfo />
			</div>
			<!-- End of Post Info -->

			<!-- On This Page -->
			<div class="mt-6">
				<OnThisPage />
			</div>
			<!-- End of On This Page -->
		</div>

		<!-- Content -->
		<section></section>
		<!-- End of contet -->

		<!-- Content link -->
		<!-- Content link -->
	</div>
	<RightSidebar classList="fixed" />
</main>

{#if isLoaded}
	<style lang="scss">
		main {
			font-family: 'Roboto';
		}

		.post-right-sidebar {
			right: -100%;
			transition: right var(--margin-transition-duration) var(--margin-timing-function);

			@media screen and (min-width: 1024px) {
				right: 0;
			}
		}
	</style>
{/if}
