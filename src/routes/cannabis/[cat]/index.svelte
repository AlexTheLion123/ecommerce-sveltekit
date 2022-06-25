<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';

	import Product from '$lib/components/product/Product.svelte';
	import SearchBar from '$lib/components/layout/SearchBar.svelte';
	import Filters from '$lib/components/filter/Filters.svelte';

	type Products = greenhouse & {img_src: string}

	export let products: Products[];
	$: filtered = products;

	$: console.log(products)

	const filters = [
		{
			name: 'All strains',
			filterName: 'strain',
			categories: ['sativa', 'indica', 'afghan', 'house']
		}
	];

	function filterClick(event) {
		if (event.detail.category === 'all') {
			filtered = products;
			return;
		}

		filtered = products.filter((item) => {
			return item[event.detail.filterName] === event.detail.category;
		});
	}
</script>

<main>
	<div class="search-bar">
		<SearchBar />
	</div>

	<div class="filter">
		<Filters {filters} on:filterClick={filterClick} />
	</div>

	<content>
		{#each filtered as {name,discount_expiry,price,description,discount_percent,num_reviews,average_rating,img_src}}
			<Product {name} {discount_expiry} {price} {description} {discount_percent} {num_reviews} {average_rating} {img_src}/>
		{/each}
	</content>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	content {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
</style>
