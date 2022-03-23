<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';

	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';

	export let product: greenhouse;
	export let showModal;

	function handleClick() {
		showModal = false;
	}
</script>

<div class="modal">
	<main on:click={handleClick}>
		<ProductDetailed {...product} />
	</main>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(2, 2, 2, 0.329);
		z-index: 9999;

		display: grid;
		place-items: center;
	}

	main {
		border: 1px solid white;
	}
</style>
