<script lang="ts">
	import Markdoc from '@markdoc/markdoc';
	import { onMount } from 'svelte';

	let previeEl: HTMLElement;

	export let mdValue = '';
	onMount(() => {
		const ast = Markdoc.parse(mdValue);
		const content = Markdoc.transform(ast);
		const html = Markdoc.renderers.html(content);
		previeEl.innerHTML = html;
	});
</script>

<div class="px-6 py-4">
	<div bind:this={previeEl} class="preview"></div>
</div>
