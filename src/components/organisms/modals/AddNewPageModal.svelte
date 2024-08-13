<script>
	import ModalHeader from '@components/molecules/modal/ModalHeader.svelte';

	import Button from '@components/atoms/button/Button.svelte';
	import TextInput from '@components/atoms/form/TextInput.svelte';
	import ModalHost from '../modal/ModalHost.svelte';
</script>

<ModalHost>
	<svelte:fragment slot="trigger" let:toggle>
		<slot name="trigger" {toggle} />
	</svelte:fragment>

	<svelte:fragment slot="inner" let:toggle>
		<div class="bg-white rounded-lg overflow-hidden lg:w-[447px] mx-auto">
			<ModalHeader on:toggle={toggle} title="Add New Page" />
			<div class="py-6 px-6">
				<TextInput classList="mb-4" label="Name" placeholder="Enter the page name" />
				<TextInput classList="" label="Slug" placeholder="Enter the page slug" />
				<Button classList="mt-4" size="large">Save Changes</Button>
			</div>
		</div>
	</svelte:fragment>
</ModalHost>
