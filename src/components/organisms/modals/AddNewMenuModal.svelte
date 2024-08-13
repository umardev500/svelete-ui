<script>
	import ModalHeader from '@components/molecules/modal/ModalHeader.svelte';

	import Button from '@components/atoms/button/Button.svelte';
	import SidebarAddNewMenu from '@components/atoms/button/SidebarAddNewMenu.svelte';
	import SelectInput from '@components/atoms/form/SelectInput.svelte';
	import TextInput from '@components/atoms/form/TextInput.svelte';
	import ModalHost from '../modal/ModalHost.svelte';

	let parents = [
		{ label: 'Installation', value: '1' },
		{ label: 'Getting Started', value: '2' },
		{ label: 'Guide', value: '3' }
	];
</script>

<ModalHost open>
	<svelte:fragment slot="trigger" let:toggle>
		<SidebarAddNewMenu on:toggle={toggle} />
	</svelte:fragment>

	<svelte:fragment slot="inner">
		<div class="bg-white rounded-lg overflow-hidden lg:w-[447px] mx-auto">
			<ModalHeader title="Add a New Menu" />
			<div class="py-6 px-6">
				<SelectInput classList="mb-4" placeholder="Parent Menu" options={parents} />
				<TextInput classList="mb-4" label="Name" placeholder="Enter the page name" />
				<TextInput classList="" label="Slug" placeholder="Enter the page slug" />
				<Button classList="mt-4" size="large">Save Changes</Button>
			</div>
		</div>
	</svelte:fragment>
</ModalHost>
