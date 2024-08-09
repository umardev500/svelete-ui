<script>
	export let placeholder = '';
	export let label = '';
	export let classList = '';

	let id = Math.random().toString();
</script>

<div class="flex flex-col gap-1">
	{#if label}
		<label for={id} class="text-sm">{label}</label>
	{/if}

	<input
		class="border border-gray-300 bg-white rounded-lg outline-none p-4 text-base focus:ring-1 focus:ring-blue-500 focus:border-blue-500 {classList}"
		{id}
		type="text"
		{placeholder}
	/>
</div>
