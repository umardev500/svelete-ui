<script lang="ts">
	import EditIcon from '@components/atoms/icons/custom/EditIcon.svelte';
	import MoreIcon from '@components/atoms/icons/custom/MoreIcon.svelte';
	import DeleteIcon from '@components/atoms/icons/DeleteIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import DropdownMenu from '@components/molecules/dropdown/DropdownMenu.svelte';
	import DeleteConfirm from '@components/organisms/modals/DeleteConfirm.svelte';
	import type { Menu } from '@typed/menu';

	export let item: Menu;
	export let prefix: string;
	export let currentRouteId: string;

	const confirmDeleting = (e: CustomEvent<() => void>) => {
		console.log('do deleting');
		e.detail(); // toggle modal
	};
</script>

<li class="h-full group flex relative">
	<DropdownMenu>
		<svelte:fragment slot="trigger" let:toggleDropdown>
			<div class="flex h-full">
				<a
					class={`item text-gray-500 text-base relative h-full flex items-center px-2 ${currentRouteId === prefix + item.slug ? 'font-medium' : ''}`}
					href="{prefix}/{item.slug}"
				>
					<ListIcon classList="!size-4 absolute opacity-0 dragging-icon" />
					{item.title}
				</a>
				<button class="opacity-0 group-hover:opacity-100" on:click={toggleDropdown}>
					<MoreIcon classList="rotate-90" />
				</button>
			</div>
		</svelte:fragment>

		<svelte:fragment slot="menu">
			<button class="w-full flex text-left px-4 py-2 justify-between hover:bg-gray-50 rounded-lg">
				<span>Edit</span>
				<EditIcon classList="!size-5" />
			</button>
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
