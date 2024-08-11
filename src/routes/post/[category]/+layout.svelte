<script lang="ts">
	import { page } from '$app/stores';
	import type { Params } from '@typed/page';
	// dummy post data
	import { posts } from '@components/organisms/sidebar/menuData';
	import { postStore } from '../../../stores/postData';

	$: parameters = $page.params as Params;

	// @ Todo
	// Do fetch post data and pass it to store
	postStore.set(posts);
</script>

<slot></slot>
