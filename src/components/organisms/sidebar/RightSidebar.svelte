<aside class="post-right-sidebar border-l h-full bg-white px-4 py-4 fixed right-0 w-[250px]">
	<ul>
		<li>
			<a class="text-black flex py-2 text-base font-medium" href="/post/requirements"
				>Requirements</a
			>
		</li>
		<li>
			<a class="text-gray-700 flex py-2 text-base" href="/post/requirements">Project structure</a>
			<!-- Sub menu -->
			<ul class="border-l">
				<li>
					<a class="text-gray-700 flex pl-4 py-2 text-base" href="/post/requirements"
						>Introduction</a
					>
				</li>
				<li>
					<a class="text-gray-700 flex pl-4 py-2 text-base" href="/post/requirements">Lorem ipsum</a
					>
				</li>
			</ul>
		</li>
		<li>
			<a class="text-gray-700 flex py-2 text-base" href="/post/requirements">Update</a>
		</li>
		<li>
			<a class="text-gray-700 flex py-2 text-base" href="/post/requirements">Build</a>
		</li>
	</ul>
</aside>

<style lang="scss">
	.post-right-sidebar {
		right: -100%;
		transition: right var(--margin-transition-duration) var(--margin-timing-function);

		@media screen and (min-width: 1024px) {
			right: 0;
		}
	}
</style>
