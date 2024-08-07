<script lang="ts">
	import AngleRight from '@components/atoms/icons/AngleRight.svelte';
	import SidebarMenuList from '@components/organisms/sidebar/SidebarMenuList.svelte';
	import type { Post } from '@typed/post';

	export let post: Post;
	export let category: string;

	const handleClick = (e: Event) => {
		if (!post.slug) e.preventDefault();
	};
</script>

<li>
	<a
		class="py-2.5 flex text-base rounded-lg px-4 hover:bg-gray-50 bg-red-100 items-center justify-between mb-2"
		on:click={handleClick}
		href="/post/{category}/{post.slug}"
	>
		<span>{post.title}</span>

		{#if post.submenu}
			<AngleRight classList="!size-5" />
		{/if}
	</a>

	{#if post.submenu}
		<div class="submenu-container">
			<SidebarMenuList posts={post.submenu} />
		</div>
	{/if}
</li>
