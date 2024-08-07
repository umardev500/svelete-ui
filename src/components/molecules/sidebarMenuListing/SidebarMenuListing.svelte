<script lang="ts">
	import type { Post } from '@typed/post';

	export let post: Post;
	export let category: string;

	const handleClick = (e: Event) => {
		if (!post.slug) e.preventDefault();
	};
</script>

<li>
	<a on:click={handleClick} href="/post/{category}/{post.slug}">{post.title}</a>
</li>
