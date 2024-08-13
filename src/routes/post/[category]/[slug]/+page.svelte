<script lang="ts">
	import CopyIcon from '@components/atoms/icons/CopyIcon.svelte';
	import InformationIcon from '@components/atoms/icons/custom/InformationIcon.svelte';
	import LampIcon from '@components/atoms/icons/custom/LampIcon.svelte';
	import PlayIcon from '@components/atoms/icons/custom/PlayIcon.svelte';
	import Breadcrumbs from '@components/molecules/Breadcrumbs.svelte';
	import PostInfo from '@components/molecules/PostInfo.svelte';
	import OnThisPage from '@components/organisms/OnThisPage.svelte';
	import RightSidebar from '@components/organisms/sidebar/RightSidebar.svelte';
	import Tab from '@components/organisms/tab/Tab.svelte';
	import { onMount } from 'svelte';
	export let data;

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});
</script>

<main class="px-6 flex">
	<div class="w-full lg:mr-[250px]">
		<div class="w-full">
			<!-- Breadcrumb -->
			<div class="mt-6">
				<Breadcrumbs {data} />
			</div>
			<!-- End of Breadcrumb -->

			<!-- Post Info -->
			<div class="mt-6">
				<PostInfo />
			</div>
			<!-- End of Post Info -->

			<!-- On This Page -->
			<div class="mt-6">
				<OnThisPage />
			</div>
			<!-- End of On This Page -->

			<!-- Content -->
			<section class="mt-6 mb-40">
				<article>
					<h1 class="text-4xl font-semibold">Installation</h1>

					<!-- Quotes -->
					<div class="flex items-center gap-3 mt-4 bg-gray-50 p-4 rounded-lg text-gray-800">
						<InformationIcon />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>

					<h3 class="text-2xl font-semibold">Requirements</h3>
					<ul class="list-disc ml-6 mt-4">
						<li class="leading-7 text-gray-800">
							<a href="http://nodejs.org" class="underline">Node.js</a> version 18.0 or above (which
							can be checked by running node -v). You can use nvm for managing multiple Node versions
							on a single machine installed
						</li>
						<li class="mt-2 leading-7 text-gray-800">
							When installing Node.js, you are recommended to check all checkboxes related to
							dependencies.
						</li>
					</ul>

					<h3 class="text-2xl font-semibold mt-6 text-gray-800">Project Structure</h3>

					<div class="border rounded-3xl mt-4 overflow-hidden">
						<Tab
							tabs={[
								{ name: 'npm', active: true },
								{ name: 'yarn', active: false },
								{ name: 'pnmp', active: false }
							]}
						>
							<svelte:fragment slot="tab" let:tabs let:toggle let:activeTab>
								<div class="flex items-center py-4 px-4 justify-between border-b">
									<div class="flex tab items-center">
										{#each tabs as tab, i}
											<button
												on:click={() => toggle(i)}
												class="{activeTab === i ? 'active' : ''} text-nowrap text-gray-500"
												>{tab.name}</button
											>
										{/each}
									</div>
									<div class="flex items-center gap-2">
										<button><CopyIcon classList="text-gray-400" /></button>
										<button><PlayIcon classList="text-gray-400" /></button>
									</div>
								</div>
							</svelte:fragment>

							<!-- Tabs -->
							<svelte:fragment slot="content" let:activeTab>
								{#if activeTab === 0}
									<div class="py-6 px-6">
										<div class="font-firaCode">
											<span class="text-green-800">npm</span> install tailwindcss@latest
										</div>
									</div>
								{/if}

								{#if activeTab === 1}
									<div class="py-6 px-6">
										<div class="font-firaCode">
											<span class="text-green-800">yarn</span> add tailwindcss@latest
										</div>
									</div>
								{/if}

								{#if activeTab === 2}
									<div class="py-6 px-6">
										<div class="font-firaCode">
											<span class="text-green-800">pnpm</span> add tailwindcss@latest
										</div>
									</div>
								{/if}
							</svelte:fragment>
						</Tab>
					</div>
					<div class="border rounded-3xl mt-4 overflow-hidden">
						<Tab tabs={[{ name: 'inter.css', active: true }]}>
							<svelte:fragment slot="tab" let:tabs let:toggle let:activeTab>
								<div class="flex items-center py-4 px-4 justify-between border-b">
									<div class="flex tab items-center">
										{#each tabs as tab, i}
											<button
												on:click={() => toggle(i)}
												class="{activeTab === i ? 'active' : ''} text-nowrap text-gray-500"
												>{tab.name}</button
											>
										{/each}
									</div>
									<div class="flex items-center gap-2">
										<button><CopyIcon classList="text-gray-400" /></button>
										<button><PlayIcon classList="text-gray-400" /></button>
									</div>
								</div>
							</svelte:fragment>

							<!-- Tabs -->
							<svelte:fragment slot="content" let:activeTab>
								{#if activeTab === 0}
									<div class="py-6">
										<p class="px-4 font-firaCode text-base py-0.5">
											&lt;link rel=&quot;<span class="text-blue-600">stylesheet</span>&quot;
											href=&quot;<span class="text-blue-600">https://github.com/svelte</span
											>&quot;&gt;
										</p>
										<p class="text-green-600 line-with-border px-4 font-firaCode py-0.5 text-base">
											const defaultTheme = require('tailwindcss/defaultTheme')
										</p>
										<p class="px-4 font-firaCode text-base py-0.5">
											:class=&quot;&#123;&apos;translate-x-5&apos;: isOn, &apos;translate-x-0&apos;:
											!isOn &#125;&quot;
										</p>
									</div>
								{/if}
							</svelte:fragment>
						</Tab>
					</div>
					<div class="flex gap-2 bg-green-50 rounded-lg px-4 py-4 mt-6 text-green-800 text-base">
						<div class="w-6 h-">
							<LampIcon classList="text-gren-800" />
						</div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed voluptates minima
						illum debitis sit veritatis maxime. Maiores beatae facere quos, blanditiis, mollitia reiciendis
						aspernatur tempora esse assumenda libero voluptates!
					</div>
					<p class="mt-4 text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed voluptates
						minima illum debitis sit veritatis maxime. Maiores beatae facere quos, blanditiis,
						mollitia reiciendis aspernatur tempora esse assumenda libero voluptates!
					</p>
					<p class="mt-4 text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed voluptates
						minima illum debitis sit veritatis maxime. Maiores beatae facere quos, blanditiis,
						mollitia reiciendis aspernatur tempora esse assumenda libero voluptates!
					</p>
					<p class="mt-4 text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa explicabo
						tempore earum blanditiis consequuntur! Hic veniam, praesentium, amet vero commodi cum,
						saepe cupiditate accusamus accusantium et optio. Veritatis, tempore.
					</p>
				</article>
			</section>
			<!-- End of Content -->
		</div>

		<!-- Content -->
		<section></section>
		<!-- End of contet -->

		<!-- Content link -->
		<!-- Content link -->
	</div>
	<RightSidebar classList="fixed" />
</main>

{#if isLoaded}
	<style lang="scss">
		main {
			font-family: 'Roboto';
		}

		.line-with-border {
			position: relative;
			@apply bg-green-50;
		}
		.line-with-border::before {
			content: '';
			width: 2px;
			height: 100%;
			left: 0;
			top: 0;
			position: absolute;
			bottom: 0;
			@apply bg-green-600;
			z-index: 1;
		}

		.tab > button {
			@apply px-4 py-1 rounded-xl border border-white;
		}
		.tab .active {
			@apply font-medium;
			@apply border-gray-300;
			@apply bg-white;
			@apply text-gray-800;
		}

		.post-right-sidebar {
			right: -100%;
			transition: right var(--margin-transition-duration) var(--margin-timing-function);

			@media screen and (min-width: 1024px) {
				right: 0;
			}
		}
	</style>
{/if}
