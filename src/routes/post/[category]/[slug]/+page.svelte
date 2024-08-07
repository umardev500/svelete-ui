<script lang="ts">
	import RightSidebar from '@components/organisms/sidebar/RightSidebar.svelte';
	export let data;
</script>

<main class="px-6 flex justify-between">
	<!-- Breadcrumb -->
	<ol class="flex items-start gap-2.5 text-gray-600 mt-4">
		<li>
			<a href="/post/slug">Getting Started</a>
		</li>
		<li>/</li>
		<li>
			<a class="text-black font-medium" href="/post/slug">Getting Started</a>
		</li>
	</ol>
	<!-- End of Breadcrumb -->

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
