<script lang="ts">
	export let tabs: any[] = [];
	let activeTab = 0;

	const toggle = (i: number) => {
		activeTab = i;
	};
</script>

<slot name="tab" {activeTab} {toggle} {tabs}></slot>

<slot name="content" {activeTab}></slot>
