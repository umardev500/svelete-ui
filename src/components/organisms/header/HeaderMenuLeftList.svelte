<script lang="ts">
	import PlusIcon from '@components/atoms/icons/PlusIcon.svelte';
	import HeaderLeftMenuListing from '@components/molecules/header/HeaderLeftMenuListing.svelte';
	import AddNewPageModal from '@components/organisms/modals/AddNewPageModal.svelte';
	import { useActiveSegment } from '@lib/useActiveSegment';
	import type { Menu } from '@typed/menu';
	import Sortable from 'sortablejs';
	import { onDestroy, onMount } from 'svelte';

	export let items: Menu[] = [];

	const prefix = '/post'; // Prefix for links

	let sortableEl: HTMLElement;
	let sortable: Sortable;
	let isLoaded: boolean = false;

	let isEditorActive = useActiveSegment('editor');

	onMount(() => {
		isEditorActive.subscribe((isEditor) => {
			if (!isEditor) return;
			let currentMoveRelatedEl: HTMLElement | null = null;
			sortable = Sortable.create(sortableEl, {
				animation: 150,
				onStart: (e) => {
					const item = e.item;
					item.classList.add('dragging');
				},
				onEnd: (e) => {
					const item = e.item;
					item.classList.remove('dragging');
					const target = e.target;
					const listActiveWithBorder = target.querySelectorAll(
						'li.will-insert-after, li.will-insert-before'
					)[0];

					if (listActiveWithBorder) {
						listActiveWithBorder.classList.remove('will-insert-after');
						listActiveWithBorder.classList.remove('will-insert-before');
					}
				},
				onMove: (e) => {
					const willInsertAfter = e.willInsertAfter;
					const relatedEl = e.related as HTMLElement;

					// Remove class 'will-insert-after' and 'will-insert-before'
					// from the 'currentMoveRelatedEl'
					if (currentMoveRelatedEl) {
						currentMoveRelatedEl.classList.remove('will-insert-after');
						currentMoveRelatedEl.classList.remove('will-insert-before');
					}

					// Add class 'will-insert-after' and 'will-insert-before'
					// depending on the 'willInsertAfter'
					if (willInsertAfter) {
						relatedEl.classList.add('will-insert-after');
						relatedEl.classList.remove('will-insert-before');
					} else {
						relatedEl.classList.remove('will-insert-after');
						relatedEl.classList.add('will-insert-before');
					}

					// Set the 'currentMoveRelatedEl' to the 'relatedEl'
					currentMoveRelatedEl = relatedEl;
				}
			});
		});

		isLoaded = true;
	});

	onDestroy(() => {
		sortable?.destroy();
	});
</script>

<ul class="flex items-center h-full header-left-menu" bind:this={sortableEl}>
	{#each items as item (item.title)}
		<HeaderLeftMenuListing {item} {prefix} />
	{/each}

	<!-- Extend the left menu -->

	{#if $isEditorActive}
		<AddNewPageModal>
			<svelte:fragment slot="trigger" let:toggle>
				<button on:click={toggle}>
					<PlusIcon classList="text-green-600" />
				</button>
			</svelte:fragment>
		</AddNewPageModal>
	{/if}
</ul>

{#if isLoaded}
	<style lang="scss">
		.header-left-menu {
			.will-insert-after {
				position: relative;
			}

			.will-insert-after::after {
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 0;
				width: 2px;
				height: 40%;
				border-radius: 2px;
				background-color: #d1d5db;
				z-index: 1050;
			}

			.will-insert-before {
				position: relative;
			}
			.will-insert-before::before {
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				width: 2px;
				height: 40%;
				border-radius: 2px;
				background-color: #d1d5db;
				z-index: 1050;
			}

			.dragging-icon {
				left: 0;
				opacity: 0;
				transition:
					left var(--base-transision-duration) var(--base-transitionn-timing-function),
					opacity var(--base-transision-duration) var(--base-transitionn-timing-function);
			}

			li {
				.item {
					transition: padding-left var(--base-transision-duration)
						var(--base-transitionn-timing-function);
				}

				&.dragging {
					.dragging-icon {
						opacity: 1;
						left: 1rem;
					}

					.item {
						padding-left: calc(1rem + 24px);
					}
				}
			}
		}
	</style>
{/if}
