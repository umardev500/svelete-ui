<script lang="ts">
	import AngleRight from '@components/atoms/icons/AngleRight.svelte';
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
</script>

<li>
	<a
		class="py-2.5 flex text-base rounded-lg px-4 hover:bg-gray-50 items-center justify-between mb-2 {childrenOfSubMenu
			? 'bg-red-100'
			: 'bg-green-100'}"
		on:click={handleClick}
		href="/post/{category}/{post.slug}"
	>
		<span>{post.title}</span>

		{#if post.submenu}
			<AngleRight classList="!size-5 angle {isOpen ? 'show' : ''}" />
		{/if}
	</a>

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
			transition: height var(--base-transision-duration) var(--base-transitionn-timing-function);
		}
		.submenu-container.show {
			height: var(--offset);
		}

		.angle {
			transition: transform var(--base-transision-duration) var(--base-transitionn-timing-function);
		}

		.angle.show {
			transform: rotate(90deg);
		}
	</style>
{/if}
