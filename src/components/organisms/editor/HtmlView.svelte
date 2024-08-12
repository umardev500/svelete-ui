<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('destroyed');
	});
</script>

<div>Hteml tab</div>
