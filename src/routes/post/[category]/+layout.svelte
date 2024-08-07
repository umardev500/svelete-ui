<script lang="ts">
	import { page } from '$app/stores';
	import type { params } from '@typed/page';
	// dummy post data
	import { posts } from '@components/organisms/sidebar/menuData';
	import { postStore } from '../../../stores/postData';

	$: parameters = $page.params as params;

	// @ Todo
	// Do fetch post data and pass it to store
	postStore.set(posts);
</script>

<slot></slot>
