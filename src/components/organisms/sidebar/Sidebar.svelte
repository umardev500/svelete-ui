<script>
	import SidebarMenu from '@components/molecules/sidebar/SidebarMenu.svelte';
</script>

<aside class="bg-white w-[250px] bottom-0 top-0 left-0 pb-6 border-r">
	<div class="flex items-center justify-between border-b h-16 px-4">
		<div class="flex items-center justify-center gap-2">
			<span>ar</span>
			<span class="font-bold text-black">API Saga</span>
		</div>
		<button>Tog</button>
	</div>
	<div class="px-4 py-6">
		<SidebarMenu />
	</div>
</aside>

<style>
	aside {
		position: fixed;
		font-family: 'Roboto';
	}
</style>
