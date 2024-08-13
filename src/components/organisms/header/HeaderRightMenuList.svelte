<script lang="ts">
	import AngleDownIcon from '@components/atoms/icons/AngleDownIcon.svelte';
	import DeleteIcon from '@components/atoms/icons/DeleteIcon.svelte';
	import GithubIcon from '@components/atoms/icons/GithubIcon.svelte';
	import LangIcon from '@components/atoms/icons/LangIcon.svelte';
	import PenIcon from '@components/atoms/icons/PenIcon.svelte';
	import PlusIcon from '@components/atoms/icons/PlusIcon.svelte';
	import SunIcon from '@components/atoms/icons/SunIcon.svelte';
	import DropdownMenu from '@components/molecules/dropdown/DropdownMenu.svelte';
	import AddNewVersionModal from '@components/organisms/modals/AddNewVersionModal.svelte';
	import DeleteConfirm from '@components/organisms/modals/DeleteConfirm.svelte';
	import SearchModal from '@components/organisms/modals/SearchModal.svelte';
	import { useActiveSegment } from '@lib/useActiveSegment';
	import Sortable from 'sortablejs';
	import { onDestroy, onMount } from 'svelte';

	let versions = ['1.0.0', '2.0.0', '3.0.0', '4.0.0', '5.0.0'];
	let versionSortableMenu: HTMLElement;

	let sortableInstance: Sortable;
	const isEditor = useActiveSegment('editor');

	onMount(() => {
		isEditor.subscribe((isEditor) => {
			if (!isEditor) return;

			sortableInstance = Sortable.create(versionSortableMenu, {
				animation: 150,
				filter: '.not-sortable'
			});
		});
	});

	onDestroy(() => {
		sortableInstance?.destroy();
	});

	const confirmDeleting = (e: CustomEvent<() => void>) => {
		console.log('do deleting');
		e.detail(); // toggle modal
	};
</script>

<ul class="flex items-center gap-4">
	<li class="relative cursor-pointer">
		<SearchModal />
	</li>
	<li class="relative cursor-pointer">
		<button class="flex">
			<SunIcon />
		</button>
	</li>
	<li class="relative">
		<!-- Dropdown menu -->
		<DropdownMenu>
			<!-- Trigger button -->
			<svelte:fragment slot="trigger" let:toggleDropdown>
				<button
					on:click={toggleDropdown}
					class="text-black text-base font-medium flex items-center gap-1"
				>
					<span>
						<LangIcon />
					</span>
					<span>English </span>
					<AngleDownIcon classList="size-5" />
				</button>
			</svelte:fragment>

			<svelte:fragment slot="menu">
				<a class="text-base text-nowrap hover:bg-gray-50 rounded-md px-4 py-1" href="/#">
					English
				</a>
				<a class="text-base text-nowrap hover:bg-gray-50 rounded-md px-4 py-1" href="/#"
					>Bahasa Indonesia</a
				>
			</svelte:fragment>
		</DropdownMenu>
	</li>
	<li class="relative">
		<DropdownMenu bind:menuElement={versionSortableMenu}>
			<!-- Trigger button -->
			<svelte:fragment slot="trigger" let:toggleDropdown>
				<button
					on:click={toggleDropdown}
					class="text-black text-base font-medium flex items-center gap-1 not-sortable"
				>
					<span>1.0.0 </span>
					<AngleDownIcon classList="!size-5" />
				</button>
			</svelte:fragment>

			<svelte:fragment slot="menu">
				<div class="px-4 text-base pb-1 not-sortable">Versions</div>
				{#each versions as version}
					<div
						class="flex mb-2 items-center group hover:bg-gray-50 rounded-md px-4 py-1 cursor-pointer"
					>
						<a class="text-base flex-1 flex items-center text-nowrap" href="/#">
							{version}
						</a>
						<!-- Right icon for editable menu -->
						{#if $isEditor}
							<div class="hidden group-hover:flex items-center justify-center gap-1">
								<AddNewVersionModal>
									<svelte:fragment slot="trigger" let:toggle>
										<button class="" on:click={toggle}>
											<PenIcon classList="!size-5 fill-current" />
										</button>
									</svelte:fragment>
								</AddNewVersionModal>
								<DeleteConfirm
									text="Are you sure you want to delete this version?"
									subText="This action cannot be undone."
									on:confirm={confirmDeleting}
								>
									<svelte:fragment slot="trigger" let:toggle>
										<button class="" on:click={toggle}>
											<DeleteIcon classList="!size-5 fill-red-500" />
										</button>
									</svelte:fragment>
								</DeleteConfirm>
							</div>
						{/if}
					</div>
				{/each}
				{#if $isEditor}
					<div class="flex justify-center not-sortable">
						<AddNewVersionModal>
							<svelte:fragment slot="trigger" let:toggle>
								<button on:click={toggle}>
									<PlusIcon classList="fill-green-500 size-5" />
								</button>
							</svelte:fragment>
						</AddNewVersionModal>
					</div>
				{/if}
			</svelte:fragment>
		</DropdownMenu>
	</li>
	<li>
		<a href="github.com/umardev500" class="flex">
			<GithubIcon />
		</a>
	</li>
</ul>
