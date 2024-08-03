<script>
	import ArrowLeft from '@components/atoms/icons/ArrowLeft.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import SidebarMenu from '@components/molecules/sidebar/SidebarMenu.svelte';
</script>

<aside class="bg-white w-[250px] bottom-0 top-0 left-0 pb-6 border-r">
	<div class="flex items-center justify-between border-b h-16 px-4">
		<div class="flex items-center justify-center gap-2">
			<span class="text-gray-900">
				<ArrowLeft classList="fill-current" />
			</span>
			<span class="font-bold text-black">API Saga</span>
		</div>
		<button class="hover:text-gray-800"><ListIcon classList="!size-5 fill-current" /></button>
	</div>
	<div class="px-4 py-6">
		<SidebarMenu slug="golang" />
	</div>
</aside>

<style>
	aside {
		position: fixed;
		font-family: 'Roboto';
	}
</style>
