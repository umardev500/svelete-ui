<script lang="ts">
	import SidebarMenuItem from '@components/atoms/menu/SidebarMenuItem.svelte';
	import type { SidebarMenuType } from '@typed/sidebarMenu';
	import { onMount } from 'svelte';

	export let hasSubmenu = false;
	export let menu: SidebarMenuType;
	let isLoading = true;
	let offset = 0;
	let subMenuElement: HTMLElement;
	let subMenuWrapperElement: HTMLElement;

	onMount(() => {
		isLoading = false;

		if (!hasSubmenu) {
			return;
		}
		setTimeout(() => {
			offset = subMenuElement.offsetHeight;
		}, 200);
	});

	const toggle = () => {
		subMenuWrapperElement.classList.toggle('show');
	};
</script>

{#if !isLoading}
	<li class="submenu-wrapper" style="--offset: {offset}px" bind:this={subMenuWrapperElement}>
		{#if hasSubmenu}
			<button
				on:click={toggle}
				class="h-[44px] flex relative items-center bg-white w-full z-50 mb-2"
			>
				<SidebarMenuItem {menu} {hasSubmenu} />
			</button>
		{:else}
			<div class="h-[44px] flex relative items-center bg-white w-full z-50 mb-2">
				<SidebarMenuItem {menu} {hasSubmenu} />
			</div>
		{/if}

		<!-- Sub menu -->
		{#if hasSubmenu}
			<ul class="submenu border-l ml-4" bind:this={subMenuElement}>
				{#if menu.submenu}
					{#each menu.submenu as submenu}
						<SidebarMenuItem menu={submenu} hasSubmenu={false} />
					{/each}
				{/if}
			</ul>
		{/if}
		<!-- End of Sub menu -->
	</li>
	<style>
		.submenu-wrapper {
			height: 44px;
			overflow: hidden;
			transition: height 0.3s ease;
		}
		.submenu-wrapper.show {
			height: calc(44px + var(--offset));
		}

		.submenu-wrapper .submenu {
			transform: translateY(-25px);
			transition: transform 0.3s ease;
		}
		.submenu-wrapper.show .submenu {
			transform: translateY(0px);
		}

		.submenu-wrapper .icon {
			transition: transform 0.3s ease;
		}
		.submenu-wrapper.show .icon {
			transform: rotate(90deg);
		}
	</style>
{/if}
