<script lang="ts">
	import { page } from '$app/stores';
	import { capFirstLetter } from '$lib/scripts/utils';
	import { isOnSpecial } from '$lib/scripts/utils';

	import FullImagePanel from '$lib/components/productFull/images/FullImagePanel.svelte';
	import Price from '$lib/components/productFull/Price.svelte';
	import Quantity from '$lib/components/productFull/Quantity.svelte';
	import AddToCartButton from '$lib/components/productFull/AddToCartButton.svelte';

    export let imgSrc: string
    export let imgSrc1: string
    export let imgSrc2: string
    export let imgSrc3: string
    export let discountDeadline: any
    export let title: string
    export let price: number
    export let discount: number
    export let description: string
    export let numReviews: number;
    export let aveReviews: number;
    export let strain: string;

	const imgSrcArray = [imgSrc, imgSrc1, imgSrc2, imgSrc3];

	const deadline = new Date(discountDeadline);
	const isSpecial = isOnSpecial(discountDeadline);

</script>

<div class="container">
	<main>
		<section class="image-panel">
			<FullImagePanel {imgSrcArray} />
		</section>
		<section class="title">
			<h1>{capFirstLetter(title)}</h1>
		</section>
		<section class="description">
			{description}
		</section>
		<section class="price">
			<Price {isSpecial} price={price} discount={discount} />
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
