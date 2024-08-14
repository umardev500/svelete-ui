<script lang="ts">
	import { page } from '$app/stores';
	import EditIcon from '@components/atoms/icons/custom/EditIcon.svelte';
	import MoreIcon from '@components/atoms/icons/custom/MoreIcon.svelte';
	import DeleteIcon from '@components/atoms/icons/DeleteIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import DropdownMenu from '@components/molecules/dropdown/DropdownMenu.svelte';
	import AddNewPageModal from '@components/organisms/modals/AddNewPageModal.svelte';
	import DeleteConfirm from '@components/organisms/modals/DeleteConfirm.svelte';
	import { useActiveSegment } from '@lib/useActiveSegment';
	import type { Menu } from '@typed/menu';
	import type { Params } from '@typed/page';

	export let item: Menu;
	export let prefix: string;
	$: params = $page.params as Params;
	$: isMatchedRoute = params.category === item.slug;

	const confirmDeleting = (e: CustomEvent<() => void>) => {
		console.log('do deleting');
		e.detail(); // toggle modal
	};

	let isEditor = useActiveSegment('editor');
</script>

<li class="h-full group flex relative">
	<DropdownMenu>
		<svelte:fragment slot="trigger" let:toggleDropdown>
			<div class="flex h-full">
				<a
					class={`item text-gray-500 text-base relative h-full flex items-center ${$isEditor ? 'px-2' : 'px-4'} ${isMatchedRoute ? 'font-medium text-gray-800' : ''}`}
					href="{prefix}/{item.slug}"
				>
					<ListIcon classList="!size-4 absolute opacity-0 dragging-icon" />
					{item.title}
				</a>
				{#if $isEditor}
					<button class="opacity-0 group-hover:opacity-100" on:click={toggleDropdown}>
						<MoreIcon classList="rotate-90" />
					</button>
				{/if}
			</div>
		</svelte:fragment>

		<svelte:fragment slot="menu">
			<AddNewPageModal title="Edit Page">
				<svelte:fragment slot="trigger" let:toggle>
					<button
						on:click={toggle}
						class="w-full flex text-left px-4 py-2 justify-between hover:bg-gray-50 rounded-lg"
					>
						<span>Edit</span>
						<EditIcon classList="!size-5" />
					</button>
				</svelte:fragment>
			</AddNewPageModal>
			<DeleteConfirm
				text="Are you sure you want to delete this menu?"
				subText="This action cannot be undone."
				on:confirm={confirmDeleting}
			>
				<svelte:fragment slot="trigger" let:toggle>
					<button
						on:click={toggle}
						class="w-full flex text-left px-4 py-2 justify-between hover:bg-gray-50 rounded-lg"
					>
						<span>Delete</span>
						<DeleteIcon classList="!size-5 fill-red-500" />
					</button>
				</svelte:fragment>
			</DeleteConfirm>
		</svelte:fragment>
	</DropdownMenu>
</li>
