<script context="module">
	export const load = async function ({ fetch, params }) {
		const res = await fetch(`/api/greenhouse/${params.title}`);
		const product = await res.json();

		return {
			props: {
				product
			}
		};
	};
</script>

<script>
	import FullImagePanel from '$lib/components/productFull/images/FullImagePanel.svelte';

	export let product;

	const imgSrcArray = [product.imgSrc, product.imgSrc1, product.imgSrc2, product.imgSrc3];
</script>

<main>
	<FullImagePanel {imgSrcArray}/>
</main>

<style>
	main {
		padding: 2rem;
		display: grid;

		grid-template: 2fr 1fr;
		grid-gap: 1rem;
	}

</style>
