<script>
	import XCircle from '@components/atoms/icons/phospor/XCircle.svelte';
	export let title;
</script>

<div class="px-4 py-4 flex items-center justify-between gap-2 border-b">
	<div class="text-xl">{title}</div>
	<button>
		<XCircle />
	</button>
</div>
