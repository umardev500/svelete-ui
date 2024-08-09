<script>
	const toggle = () => {};
</script>

<div class="modal-host fixed top-0 right-0 bottom-0 left-0 z-50 px-4 lg:px-6 py-4 lg:py-6">
	<slot name="trigger1" {toggle}></slot>

	<slot name="inner"></slot>
</div>

<style>
	.modal-host {
		background-color: rgba(0, 0, 0, 0.4);
	}
</style>
