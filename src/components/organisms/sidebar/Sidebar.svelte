<script lang="ts">
	import ArrowLeft from '@components/atoms/icons/ArrowLeft.svelte';
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import SidebarMenu from '@components/molecules/sidebar/SidebarMenu.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let sidebarOpen: boolean;
	const toggle = () => {
		dispatch('toggle');
	};
</script>

<aside class="sidebar {sidebarOpen ? 'show' : ''} bottom-0 top-0 left-0 pb-6 border-r">
	<div class="flex items-center border-b h-16 px-4 heading relative">
		<div class="flex items-center gap-2 text-nowrap text w-full">
			<span class="text-gray-900">
				<ArrowLeft classList="fill-current" />
			</span>
			<span class="font-bold text-black">API Saga</span>
		</div>
		<button on:click={toggle} class="hover:text-gray-800 absolute right-4 toggler"
			><ListIcon classList="!size-5 fill-current" /></button
		>
	</div>
	<div class="px-4 py-6 text-nowrap menus">
		<SidebarMenu slug="golang" />
	</div>
</aside>

<style lang="scss">
	aside {
		position: fixed;
		font-family: 'Roboto';
	}

	.sidebar.show {
		width: 16.625rem;
	}

	.sidebar {
		width: 4.5rem;
		transition: width var(--margin-transition-duration) var(--margin-timing-function);

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

		&.show {
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
					@apply right-5;
				}
			}
		}
	}
</style>
