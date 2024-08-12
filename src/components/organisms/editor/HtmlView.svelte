<script lang="ts">
	import Markdoc from '@markdoc/markdoc';
	import toDiffableHtml from 'diffable-html';
	import he from 'he';
	import { codeToHtml } from 'shiki';
	import { onMount } from 'svelte';

	export let mdValue = '';
	let prettyHtml = '';
	let htmlDecoded = '';

	onMount(() => {
		const ast = Markdoc.parse(mdValue);
		const content = Markdoc.transform(ast);
		const html = Markdoc.renderers.html(content);
		htmlDecoded = he.decode(html);

		codeToHtml(toDiffableHtml(htmlDecoded), {
			lang: 'html',
			theme: 'vitesse-light'
		}).then((html) => {
			prettyHtml = html;
		});
	});
</script>

<div class="px-6">{@html prettyHtml}</div>
