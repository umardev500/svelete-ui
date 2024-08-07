<script>
	import { page } from '$app/stores';

	let items = [
		{ id: 1, title: 'Golang', href: '/golang' },
		{ id: 2, title: 'React', href: '/react' },
		{ id: 3, title: 'Tailwind', href: '/tailwind' },
		{ id: 4, title: 'Bootstrap', href: '/bootstrap' }
	];

	$: currentRouteId = $page.url.pathname;
	const prefix = '/post';
</script>

<ul class="flex items-center gap-8">
	{#each items as item (item.title)}
		<li>
			<a
				class={`text-gray-800 text-base ${currentRouteId === prefix + item.href ? 'font-medium' : ''}`}
				href="/post/golang/installation">{item.title}</a
			>
		</li>
	{/each}
</ul>
