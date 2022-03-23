<script context="module" lang="ts">
	import type { greenhouse } from "$lib/assets/products/d.greenhouse";

	export const load = async function ({ fetch, params }) {
		const res = await fetch(`/api/greenhouse/${params.title}`);
		const product: greenhouse = await res.json();

		return {
			props: {
				product
			}
		};
	};
</script>

<script lang="ts">
	import ProductDetailed from "$lib/components/productFull/ProductDetailed.svelte"

	export let product
</script>


<ProductDetailed {...product}/>