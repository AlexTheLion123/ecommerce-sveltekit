<script lang="ts">
	import { page } from '$app/stores';

	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';
	import ProductPath from '$lib/components/productFull/path/ProductPath.svelte';

	export let product;

	const path = $page.url.pathname.split('/');
</script>

<header>
	<div class="back-button">Back</div>
	<ProductPath {path} />
</header>
<ProductDetailed {...product} />
