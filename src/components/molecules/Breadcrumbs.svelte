<script lang="ts">
	import type { ReadPost } from '@typed/post';

	export let data: ReadPost;
</script>

<ol class="flex items-start gap-2.5 text-gray-600">
	<li>
		<a href="/post/{data.category}">{data.parent}</a>
	</li>
	<li>/</li>
	<li>
		<a class="text-black font-medium" href="/post/{data.category}/{data.slug}">{data.title}</a>
	</li>
</ol>
