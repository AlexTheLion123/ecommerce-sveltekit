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
	import IconPanel from '$lib/components/productFull/iconPanel/IconPanel.svelte';

	export let product;

	const imgSrcArray = [product.imgSrc, product.imgSrc1, product.imgSrc2, product.imgSrc3];
</script>

<main>
	<section class="main-img">
		<img src={product.imgSrc} alt={product.title} />
	</section>
	<section class="img-panel">
		<IconPanel {imgSrcArray}/>
	</section>
</main>

<style>
	main {
		padding: 2rem;
		display: grid;

		grid-template: 2fr 1fr;
		grid-gap: 1rem;
	}

	.main-img {
		width: 30rem;
	}

	.main-img img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
