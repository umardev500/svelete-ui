<script lang="ts">
	import AngleRight from '@components/atoms/icons/AngleRight.svelte';
	import DeleteIcon from '@components/atoms/icons/DeleteIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import PenIcon from '@components/atoms/icons/PenIcon.svelte';
	import SidebarMenuList from '@components/organisms/sidebar/SidebarMenuList.svelte';
	import type { Post } from '@typed/post';
	import { onMount } from 'svelte';

	export let post: Post;
	export let category: string;
	export let childrenOfSubMenu: boolean;

	// Elements
	let submenuContainerEl: HTMLElement;

	// Local states
	let loaded: boolean;
	let isOpen: boolean;

	const notSubmenu = post.slug || !post.submenu;

	const handleClick = (e: Event) => {
		if (notSubmenu) {
			return;
		}

		// Prevent navigation if its is the trigger for the submenu
		e.preventDefault();

		// Toggle state
		submenuContainerEl.classList.toggle('show');
		isOpen = !isOpen;
	};

	// Initialize default submenu height
	onMount(() => {
		if (notSubmenu) {
			return;
		}

		const submenuEl = submenuContainerEl.children[0];
		const submenuElRect = submenuEl.getBoundingClientRect();

		submenuContainerEl.style.setProperty('--offset', `${submenuElRect.height}px`);
		loaded = true;
	});

	const toggleOpacityActions = (e: Event) => {
		if (!childrenOfSubMenu) return;

		const target = e.target as HTMLElement;
		const isAnchor = target.tagName === 'A';
		let parentEl: HTMLElement | null = target;
		if (isAnchor) {
			parentEl = target.closest('li');
		}

		if (parentEl === null) return;

		const actionsEl = parentEl.querySelector('.actions');
		actionsEl?.classList.toggle('opacity-0');
	};
</script>

<li class="sortable-item relative">
	<a
		on:mouseenter={toggleOpacityActions}
		on:mouseleave={toggleOpacityActions}
		class="item py-2.5 flex z-10 relative text-base rounded-lg px-4 hover:bg-gray-50 items-center justify-between mb-2 {childrenOfSubMenu
			? 'bg-red-100'
			: 'bg-green-100'}"
		on:click={handleClick}
		href="/post/{category}/{post.slug}"
	>
		<ListIcon classList="!size-4 absolute opacity-0 dragging-icon" />

		<span>{post.title}</span>

		{#if post.submenu}
			<AngleRight classList="!size-5 angle {isOpen ? 'show' : ''}" />
		{/if}
	</a>
	<!-- Hover action -->
	{#if childrenOfSubMenu}
		<div
			class="absolute opacity-0 pointer-events-none group-hover:pointer-events-auto h-full flex items-center gap-2 px-2 right-0 actions"
		>
			<button>
				<PenIcon classList="!size-5 fill-gray-900" />
			</button>
			<button>
				<DeleteIcon classList="!size-5 fill-red-500" />
			</button>
		</div>
	{/if}

	{#if post.submenu}
		<div class="submenu-container" bind:this={submenuContainerEl}>
			<SidebarMenuList isSubmenu={true} posts={post.submenu} />
		</div>
	{/if}
</li>
{#if loaded}
	<style>
		.submenu-container {
			overflow: hidden;
			height: 0px;
			transform: translateY(-10px);
			transition:
				transform var(--base-transision-duration) var(--base-transitionn-timing-function),
				height var(--base-transision-duration) var(--base-transitionn-timing-function);
		}
		.submenu-container.show {
			height: var(--offset);
			transform: translateY(0);
		}

		.angle {
			transition: transform var(--base-transision-duration) var(--base-transitionn-timing-function);
		}

		.angle.show {
			transform: rotate(90deg);
		}

		.sortable-item {
			.item {
				transition: padding-left var(--base-transision-duration)
					var(--base-transitionn-timing-function);
			}

			.actions {
				top: 50%;
				transform: translateY(-50%);
			}

			.dragging-icon {
				left: 0;
				opacity: 0;
				transition:
					left var(--base-transision-duration) var(--base-transitionn-timing-function),
					opacity var(--base-transision-duration) var(--base-transitionn-timing-function);
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
	</style>
{/if}
