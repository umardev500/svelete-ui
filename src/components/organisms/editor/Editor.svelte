<script lang="ts">
	import { attachment } from '@cartamd/plugin-attachment';
	import { code } from '@cartamd/plugin-code';
	import { emoji } from '@cartamd/plugin-emoji';
	import { slash } from '@cartamd/plugin-slash';
	import { Carta, MarkdownEditor } from 'carta-md';

	import '$lib/styles/github.scss';
	import Button from '@components/atoms/button/Button.svelte';

	const carta = new Carta({
		sanitizer: false,
		theme: 'github-light',
		extensions: [
			attachment({
				async upload() {
					return 'some-url-from-server.xyz';
				}
			}),
			emoji(),
			slash(),
			code()
		]
	});

	export let value = `This is an example inspired by [GitHub](https://github.com)
\`\`\`go
package main
import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
\`\`\``;

	$: console.log(value);
</script>

<div class="border md-editor-container rounded-lg overflow-hidden">
	<div class="flex items-center py-4 px-4 justify-between">
		<div class="flex tab items-center gap-4">
			<button class="active text-nowrap text-gray-500">Write</button>
			<button class="text-nowrap text-gray-500">HTML</button>
			<button class="text-nowrap text-gray-500">Preview</button>
		</div>
		<div class="flex items-center gap-2">
			<Button variant="secondary">Cancel</Button>
			<Button>Save Changes</Button>
		</div>
	</div>

	<MarkdownEditor bind:value mode="tabs" theme="github" {carta} />
</div>

<style>
	.tab .active {
		@apply border;
		@apply px-4;
		@apply py-1;
		@apply font-medium;
		@apply rounded-xl;
		@apply border-gray-300;
		@apply bg-white;
		@apply text-gray-800;
	}
</style>
