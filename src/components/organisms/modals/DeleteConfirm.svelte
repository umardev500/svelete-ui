<script>
	import Button from '@components/atoms/button/Button.svelte';
	import ModalHost from '../modal/ModalHost.svelte';
	export let text = '';
	export let subText = '';
</script>

<ModalHost>
	<svelte:fragment slot="inner">
		<div class="bg-white rounded-lg overflow-hidden lg:w-[447px] mx-auto">
			<div class="py-6 px-4">
				<h3 class="text-xl mb-1">{text}</h3>
				<p class="text-gray-400 mb-2">
					{subText}
				</p>

				<div class="flex gap-2">
					<Button variant="secondary" classList="mt-4">Delete</Button>
					<Button classList="mt-4">Cancel</Button>
				</div>
			</div>
		</div>
	</svelte:fragment>
</ModalHost>
