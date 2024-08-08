<script lang="ts">
	import ListIcon from '@components/atoms/icons/ListIcon.svelte';
	import type { CategoryMenu } from '@typed/category';

	export let item: CategoryMenu;
	export let prefix: string;
	export let currentRouteId: string;
</script>

<li class="h-full">
	<a
		class={`item text-gray-800 text-base relative h-full flex items-center px-4 ${currentRouteId === prefix + item.slug ? 'font-medium' : ''}`}
		href="{prefix}/{item.slug}"
	>
		<ListIcon classList="!size-4 absolute opacity-0 dragging-icon" />

		{item.title}</a
	>
</li>
