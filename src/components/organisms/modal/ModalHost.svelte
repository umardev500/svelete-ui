<script>
	let open = false;
	const toggle = () => {
		open = !open;
	};
</script>

<slot name="trigger" {toggle}></slot>

<div
	class="modal-host {open
		? 'show'
		: ''} fixed top-0 right-0 bottom-0 left-0 z-50 px-4 lg:px-6 py-4 lg:py-6"
>
	<slot name="inner"></slot>
</div>

<style lang="scss">
	.modal-host {
		background-color: rgba(0, 0, 0, 0.4);
		display: none;

		&.show {
			display: block;
		}
	}
</style>
