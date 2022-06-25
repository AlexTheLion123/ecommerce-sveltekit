<script lang="ts">
	import { page } from '$app/stores';

	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';
	import ProductPath from '$lib/components/productFull/path/ProductPath.svelte';

	export let product;
	product = JSON.parse(product)

	const path = $page.url.pathname.split('/');

	function checkProductExists(_product) {
		return !(
			_product &&
			Object.keys(_product).length === 0 &&
			Object.getPrototypeOf(_product) === Object.prototype
		);
	}
</script>

{#if checkProductExists(product)}
	<header>
		<div class="back-button">Back</div>
		<ProductPath {path} />
	</header>
	<ProductDetailed {...product} />
{/if}
