<script lang="ts">
	import SidebarAddNewMenu from '@components/atoms/button/SidebarAddNewMenu.svelte';
	import ArrowLeft from '@components/atoms/icons/ArrowLeft.svelte';
	import GithubIcon from '@components/atoms/icons/GithubIcon.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import SunIcon from '@components/atoms/icons/SunIcon.svelte';
	import AddNewMenuModal from '@components/organisms/modals/AddNewMenuModal.svelte';
	import SidebarMenuList from '@components/organisms/sidebar/SidebarMenuList.svelte';
	import { useActiveSegment } from '@lib/useActiveSegment';
	import type { Menu } from '@typed/menu';
	import 'simplebar';
	import 'simplebar/dist/simplebar.min.css';
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { postStore } from '../../../stores/postData';

	const dispatch = createEventDispatcher();

	export let sidebarOpen: boolean;
	const toggle = () => {
		dispatch('toggle');
	};

	let posts: Menu[] = [];
	const unsubscribe = postStore.subscribe((data) => {
		posts = data;
	});

	onDestroy(() => {
		unsubscribe();
	});

	// @Todo
	// Fetch Menus data from server

	let isEditorActive = useActiveSegment('editor');
</script>

<aside
	class="sidebar {sidebarOpen ? 'show' : ''} bottom-0 top-0 left-0 pb-6 border-r bg-white z-50"
>
	<div class="flex items-center border-b h-16 px-4 heading relative">
		<!-- Top Desktop -->
		<div class="lg:flex items-center gap-2 text-nowrap text w-full sidebar-top-desktop hidden">
			<span class="text-gray-900">
				<ArrowLeft classList="fill-current" />
			</span>
			<span class="font-bold text-black">API Saga</span>
		</div>

		<button
			on:click={toggle}
			class="hover:text-gray-800 absolute right-4 toggler hidden lg:inline-flex"
		>
			<ListIcon classList="!size-5 fill-current" />
		</button>
		<!-- End of Top Desktop -->

		<div class="h-full px-2 flex items-center justify-between mobile-menu lg:hidden w-full">
			<div class="flex items-center gap-2">
				<button on:click={toggle}>
					<ListIcon />
				</button>
				<span class="font-bold text-base">API Saga</span>
			</div>

			<div class="flex items-center gap-2">
				<button>
					<SunIcon />
				</button>
				<a href="https://github.com/umardev500">
					<GithubIcon />
				</a>
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="bottom-[4.5rem] pb-4 absolute top-16 right-0 left-0" data-simplebar>
		<!-- Banner -->
		<enhanced:img
			class="mx-auto px-6 mt-6 banner w-full"
			src="$lib/images/go-sidebar-banner.png"
			alt="banner"
		/>
		<!-- End of Banner -->

		<div class="px-4 py-6 text-nowrap menus">
			<SidebarMenuList isSubmenu={false} {posts} />
		</div>
	</div>
	{#if $isEditorActive}
		<div class="border-t absolute h-[4.5rem] bg-white bottom-0 right-0 left-0 flex add-menu-button">
			<AddNewMenuModal>
				<svelte:fragment slot="trigger" let:toggle>
					<SidebarAddNewMenu on:toggle={toggle} />
				</svelte:fragment>
			</AddNewMenuModal>
		</div>
	{/if}
	<!-- End of Content -->
</aside>

<style lang="scss">
	aside {
		position: fixed;
		font-family: 'Roboto';
	}

	.sidebar.show {
		width: 22.125rem;
	}

	.sidebar {
		width: 4.5rem;
		left: -22.125rem;
		transition:
			left var(--margin-transition-duration) var(--margin-timing-function),
			width var(--margin-transition-duration) var(--margin-timing-function);

		@media screen and (min-width: 1024px) {
			left: 0;
		}

		.banner {
			opacity: 0;
			transition: opacity var(--margin-transition-duration) var(--margin-timing-function);
			height: 71px;
			object-fit: cover;
		}

		.heading {
			justify-content: center;

			.text {
				opacity: 0;
				pointer-events: none;
				transform: translateX(-30px);
				transition:
					opacity var(--margin-transition-duration) var(--margin-timing-function),
					transform var(--margin-transition-duration) var(--margin-timing-function);
			}

			.toggler {
				right: 50%;
				transform: translateX(50%);
				transition:
					right var(--margin-transition-duration) var(--margin-timing-function),
					transform var(--margin-transition-duration) var(--margin-timing-function);
			}
		}

		.menus {
			opacity: 0;
			transform: translateX(-30px);
			transition:
				opacity var(--margin-transition-duration) var(--margin-timing-function),
				transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		.add-menu-button {
			opacity: 0;
			transform: translateX(-30px);
			transition:
				opacity var(--margin-transition-duration) var(--margin-timing-function),
				transform var(--margin-transition-duration) var(--margin-timing-function);
		}

		&.show {
			left: 0rem;

			.banner {
				opacity: 1;
			}

			.menus {
				opacity: 1;
				transform: translateX(0);
			}

			.heading {
				justify-content: space-between;

				.text {
					opacity: 1;
					pointer-events: unset;
					transform: translateX(0);
				}

				.toggler {
					right: 1.25rem;
				}
			}

			.add-menu-button {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}
</style>
