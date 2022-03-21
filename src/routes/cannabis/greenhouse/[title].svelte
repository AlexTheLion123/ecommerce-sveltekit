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
	import Icon from '$lib/components/productFull/Icon.svelte';

	export let product;
</script>

<main>
	<section class="main-img">
		<img src={product.imgSrc} alt={product.title} />
	</section>
	<section class="img-panel">
		<div class="icon">
			<Icon imgSrc={product.imgSrc} isCurrent={true} />
		</div>

		<div class="icon">
			<Icon imgSrc={product.imgSrc1} />
		</div>

		<div class="icon">
			<Icon imgSrc={product.imgSrc2} />
		</div>
		<div class="icon">
			<Icon imgSrc={product.imgSrc3} />
		</div>
	</section>
</main>

<style>
	main {
		padding: 2rem;
		display: grid;

		grid-template: 2fr 1fr;
		grid-gap: 1rem;
	}

	.img-panel {
		display: flex;
		gap: 1rem;
	}

	.main-img {
		width: 30rem;
	}

	.main-img img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
