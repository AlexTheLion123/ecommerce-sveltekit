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
	import SearchBar from '$lib/components/layout/SearchBar.svelte';
	import Filters from '$lib/components/filter/Filters.svelte';

	export let products;

	const filters = [
		{
			name: 'All strains',
			filterName: 'strain',
			categories: ['sativa', 'indica', 'afghan', 'house']
		}
	];
</script>

<main>
	<div class="search-bar">
		<SearchBar />
	</div>

	<div class="filter">
		<Filters {filters} />
	</div>

	<content>
		{#each products as product}
			<Product {...product} />
		{/each}
	</content>
</main>

<style>
	main {
		padding: 2rem;
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
