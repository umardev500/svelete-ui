<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let classList = '';
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'small' | 'medium' | 'large' = 'medium';

	let backgroundColor = 'bg-emerald-700';
	let hoverBackgroundColor = 'hover:bg-emerald-800';
	let textColor = 'text-white';
	let borderColor = 'border-emerald-700';

	let additionalClasses = '';
	if (variant === 'secondary') {
		backgroundColor = 'bg-white';
		hoverBackgroundColor = 'hover:bg-gray-50';
		textColor = 'text-gray-900';
		borderColor = 'border-gray-300';
	}

	let h = 'h-[54px]';

	if (size === 'small') {
		h = 'h-[40px]';
	}
</script>

<button
	on:click={() => {
		dispatch('click');
	}}
	class="w-full border {borderColor} {backgroundColor} {hoverBackgroundColor} {textColor} rounded-xl text-base {h} font-medium px-4 py-2 {additionalClasses} {classList}"
>
	<slot></slot>
</button>
