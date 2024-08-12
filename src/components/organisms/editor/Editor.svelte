<script lang="ts">
	import { attachment } from '@cartamd/plugin-attachment';
	import { code } from '@cartamd/plugin-code';
	import { emoji } from '@cartamd/plugin-emoji';
	import { slash } from '@cartamd/plugin-slash';
	import { Carta, MarkdownEditor } from 'carta-md';

	import '$lib/styles/github.scss';
	import Button from '@components/atoms/button/Button.svelte';
	import HtmlView from '@components/organisms/editor/HtmlView.svelte';
	import Preview from '@components/organisms/editor/Preview.svelte';
	import Tab from '@components/organisms/tab/Tab.svelte';

	const carta = new Carta({
		sanitizer: false,
		theme: 'vitesse-light',
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

<div class="border md-editor-container rounded-2xl overflow-hidden">
	<Tab
		tabs={[
			{ name: 'Editor', active: false },
			{ name: 'HTML', active: false },
			{ name: 'Preview', active: false }
		]}
	>
		<svelte:fragment slot="tab" let:tabs let:toggle let:activeTab>
			<div class="flex items-center py-4 px-4 justify-between border-b">
				<div class="flex tab items-center">
					{#each tabs as tab, i}
						<button
							on:click={() => toggle(i)}
							class="{activeTab === i ? 'active' : ''} text-nowrap text-gray-500">{tab.name}</button
						>
					{/each}
				</div>
				<div class="flex items-center gap-2">
					<Button variant="secondary">Cancel</Button>
					<Button>Save Changes</Button>
				</div>
			</div>
		</svelte:fragment>

		<svelte:fragment slot="content" let:activeTab>
			{#if activeTab === 0}
				<MarkdownEditor bind:value mode="tabs" theme="github" {carta} />
			{/if}

			{#if activeTab === 1}
				<HtmlView mdValue={value} />
			{/if}

			{#if activeTab === 2}
				<Preview mdValue={value} />
			{/if}
		</svelte:fragment>
	</Tab>
</div>

<style>
	.tab > button {
		@apply px-4 py-1 rounded-xl border border-white;
	}
	.tab .active {
		@apply font-medium;
		@apply border-gray-300;
		@apply bg-white;
		@apply text-gray-800;
	}
</style>
