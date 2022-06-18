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

<script lang="ts">
	import type {greenhouse} from '$lib/assets/products/d.greenhouse'

	import Product from '$lib/components/product/Product.svelte';
	import SearchBar from '$lib/components/layout/SearchBar.svelte';
	import Filters from '$lib/components/filter/Filters.svelte';

	export let products: greenhouse[];

    let filtered = products;

	const filters = [
		{
			name: 'All strains',
			filterName: 'strain',
			categories: ['sativa', 'indica', 'afghan', 'house']
		}
	];

    function filterClick(event) {
        if(event.detail.category === 'all') {
            filtered = products
            return
        }

        filtered = products.filter(item => {
            return item[event.detail.filterName] === event.detail.category
        })

    }
</script>

<main>
	<div class="search-bar">
		<SearchBar />
	</div>

	<div class="filter">
		<Filters {filters} on:filterClick={filterClick}/>
	</div>

	<content>
		{#each filtered as product}
			<Product {product} />
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
