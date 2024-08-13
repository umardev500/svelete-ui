<script>
	import ModalHeader from '@components/molecules/modal/ModalHeader.svelte';

	import Button from '@components/atoms/button/Button.svelte';
	import TextInput from '@components/atoms/form/TextInput.svelte';
	import PlusIcon from '@components/atoms/icons/PlusIcon.svelte';
	import ModalHost from '../modal/ModalHost.svelte';
</script>

<ModalHost>
	<svelte:fragment slot="trigger" let:toggle>
		<button on:click={toggle}>
			<PlusIcon classList="text-green-600" />
		</button>
	</svelte:fragment>

	<svelte:fragment slot="inner">
		<div class="bg-white rounded-lg overflow-hidden lg:w-[447px] mx-auto">
			<ModalHeader />
			<div class="py-6 px-6">
				<TextInput classList="mb-4" label="Name" placeholder="Enter the page name" />
				<TextInput classList="" label="Slug" placeholder="Enter the page slug" />
				<Button classList="mt-4" size="large">Save Changes</Button>
			</div>
		</div>
	</svelte:fragment>
</ModalHost>
