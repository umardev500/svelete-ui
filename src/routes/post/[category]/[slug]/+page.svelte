<script lang="ts">
	import Breadcrumbs from '@components/molecules/Breadcrumbs.svelte';
	import PostInfo from '@components/molecules/PostInfo.svelte';
	import RightSidebar from '@components/organisms/sidebar/RightSidebar.svelte';
	export let data;
</script>

<main class="px-6 flex justify-between">
	<div>
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
	</div>

	<!-- Content -->
	<section></section>
	<!-- End of contet -->

	<!-- Content link -->
	<RightSidebar />
	<!-- Content link -->
</main>

<style>
	main {
		font-family: 'Roboto';
	}
</style>
