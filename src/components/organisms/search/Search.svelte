<script lang="ts">
	import SearchInput from '@components/atoms/form/SearchInput.svelte';
	import SearchListing from '@components/molecules/search/SearchListing.svelte';

	let contentEl: HTMLElement;
	const handleSearch = (e: CustomEvent<string>) => {
		const value = e.detail;

		if (value !== '') {
			// do search
			contentEl.classList.remove('hidden');
		} else {
			contentEl.classList.add('hidden');
		}
	};
</script>

<div class="flex flex-col">
	<SearchInput on:search={handleSearch} />

	<div class="result hidden" bind:this={contentEl}>
		<SearchListing />
	</div>
</div>
