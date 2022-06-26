<script lang="ts">
	import { capFirstLetter } from '$lib/scripts/utils';
	import { isOnSpecial } from '$lib/scripts/utils';

	import FullImagePanel from './image_panel/FullImagePanel.svelte';
	import Price from './Price.svelte';
	import Quantity from './Quantity.svelte';
	import AddToCartButton from './AddToCartButton.svelte';

	export let images: string[];
	export let discount_expiry: number | null;
	export let name: string;
	export let price: number;
	export let discount_percent: number | null;
	export let description: string;
	export let sub_category: string;
	export let average_rating: number | null;
	export let num_reviews: number;

	const isSpecial = new Date() < new Date(discount_expiry);
</script>

<div class="container">
	<main>
		<section class="image-panel">
			<FullImagePanel {images} />
		</section>
		<section class="title">
			<h1>{capFirstLetter(name)}</h1>
		</section>
		<section class="description">
			{description}
		</section>
		<section class="price">
			<Price {isSpecial} {price} discount={discount_percent} />
		</section>
		<section class="quantity-and-cart">
			<div class="quantity">
				<Quantity />
			</div>
			<div class="add-to-cart">
				<AddToCartButton />
			</div>
		</section>
	</main>
</div>

<div>
	num reviews: {num_reviews}
</div>
<div>
	average rating: {average_rating}
</div>
<div>
	strain: {sub_category}
</div>

<style>
	.container {
		max-width: 1000px;
	}

	header {
		display: flex;
		gap: 2rem;
		height: 3rem;
	}
	main {
		display: grid;

		grid-template:
			'images title' 2rem
			'images descrip' auto
			'images price' 2rem
			'images quantCart' 3rem
			/ 1fr minmax(auto, 500px);

		grid-row-gap: 1rem;
		grid-column-gap: 2rem;
	}

	.image-panel {
		grid-area: images;
		align-self: start;
	}

	.title {
		grid-area: title;
	}

	.description {
		grid-area: descrip;
		color: rgb(172, 172, 172);
	}

	.price {
		grid-area: price;
	}

	.quantity-and-cart {
		display: grid;
		grid-template-columns: minmax(auto, 8rem) 1fr;
		grid-column-gap: 1rem;
	}
</style>
