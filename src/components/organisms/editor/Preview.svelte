<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github.css';
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { onMount } from 'svelte';

	export let mdValue = '';
	let isLoaded: boolean = false;

	const marked = new Marked(
		markedHighlight({
			langPrefix: 'hljs language-',
			highlight(code, lang, info) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);
	const html = marked.parse(mdValue);

	onMount(() => {
		isLoaded = true;
	});
</script>

<div class="markdown-content py-4">
	<div class="px-6">{@html html}</div>
</div>

{#if isLoaded}
	<style lang="scss">
		.markdown-content {
			h1 {
				font-size: 2.5rem; // Typically 40px if the root font size is 16px
				margin-bottom: 1rem;
				margin-top: 1rem;
			}

			h2 {
				font-size: 2rem; // Typically 32px
				margin-bottom: 1rem;
				margin-top: 1rem;
			}

			h3 {
				font-size: 1.75rem; // Typically 28px
				margin-bottom: 0.5rem;
				margin-top: 0.5rem;
			}

			h4 {
				font-size: 1.5rem; // Typically 24px
				margin-bottom: 0.5rem;
				margin-top: 0.5rem;
			}

			h5 {
				font-size: 1.25rem; // Typically 20px
				margin-bottom: 0.5rem;
				margin-top: 0.5rem;
			}

			h6 {
				font-size: 1rem; // Typically 16px
				margin-bottom: 0.5rem;
				margin-top: 0.5rem;
			}

			p {
				line-height: 1.75;
			}

			a {
				@apply font-medium underline text-sky-700;
			}

			ul {
				list-style-type: disc;
				margin-left: 1.5rem;

				li {
					margin-bottom: 0.5rem;
					padding-left: 0.5rem;
				}
			}

			code {
				font-family: 'Fira Code', monospace;
			}

			code:not([class]) {
				font-family: 'Ubuntu Mono', monospace;
				@apply font-medium bg-gray-100 px-2 py-1 rounded-lg mx-1 text-gray-800;
			}
		}
	</style>
{/if}
