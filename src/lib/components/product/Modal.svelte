<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';

	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';

	export let product: greenhouse;
	export let showModal;

	function handleClick() {
		showModal = false;
	}
</script>

<main on:click={handleClick}>
	<ProductDetailed {...product} />
</main>

<style>
	main {
		width: 500px;
		height: 500px;
		border: 1px solid white;
	}
</style>
