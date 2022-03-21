<script context="module">
	export const load = async function ({ fetch }) {
		const res = await fetch('/api/greenhouse');
		const products = await res.json();

		return {
			props: {
				products
			}
		};
	};
</script>

<script>
import Product from '$lib/components/product/Product.svelte';

	export let products;
</script>

{#each products as product}
	<Product {...product}/>
{/each}
