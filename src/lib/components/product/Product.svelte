<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { capFirstLetter } from '$lib/scripts/utils';
	import { isOnSpecial } from '$lib/scripts/utils';

	import Price from './Price.svelte';
	import Timer from './Timer.svelte';
	import ModalWithSlot from '$lib/components/ModalWithSlot.svelte';
	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';

	export let product: greenhouse;
	console.log('my product')
	console.log(product)


	let showModal = false;
	let isSpecial;
	let expiry: Date

	if(product.discount_percent && product.discount_expiry)  {
		expiry = new Date(product.discount_expiry);
		isSpecial = new Date < expiry;
	}

	function gotoProduct() {
		//goto(`${$page.url.pathname}/${title}`)
		showModal = true;
	}

	$: if (browser && showModal) {
		history.pushState({}, null, `${$page.url.pathname}/${product.title.toLowerCase()}`);
	} else if (browser && !showModal) {
		history.pushState({}, null, `${$page.url.pathname}`);
	}
</script>

<ModalWithSlot bind:showModal>
	<ProductDetailed {...product} />
</ModalWithSlot>

<main class:isSpecial on:click={gotoProduct}>
	<img src={product.imgSrc} alt={product.name} />

	<content>
		<section class="title-timer">
			<section class="title">{capFirstLetter(product.name)}</section>
			{#if isSpecial}
				<section class="timer"><Timer deadline={expiry} /></section>
			{/if}
		</section>
		<section class="description">{product.desc}</section>

		<footer>
			<div class="price">
				<Price price={product.price} discount={product.discount_percent} {isSpecial} />
			</div>
			<div class="reviews-container">
				<div class="num-reviews">Reviews: {product.numReviews}</div>
				<div class="ave-reviews">{product.aveReviews}</div>
			</div>
		</footer>
	</content>
</main>

<style>
	main {
		background: #414449ff;
		width: 15rem;

		display: flex;
		flex-direction: column;

		border: 1px solid transparent;
		box-shadow: 0 0 5px rgb(143, 145, 148);

		border-radius: 5px;
		overflow: hidden;
	}

	main:hover {
		border: 1px solid rgb(165, 167, 172);
		cursor: pointer;
	}

	.isSpecial {
		border: 1px solid rgba(221, 69, 221, 0.507);
		box-shadow: 0 0 5px #dc45ddff;
	}

	.isSpecial:hover {
		border: 1px solid #dc45ddff;
	}
	img {
		height: 100%;
		width: 100%;
	}

	content {
		padding: 0.5rem;

		display: grid;
		grid-template-rows: 1.5fr 5fr 3fr;
		align-items: center;
	}

	.title-timer {
		display: flex;
		justify-content: space-between;
	}

	.description {
		font-size: 0.7rem;
		color: rgb(133, 133, 133);
	}

	footer {
		display: flex;
		justify-content: space-between;
	}

	.price {
		align-self: flex-end;
	}

	.num-reviews {
		padding: 0.5rem 0;
	}
	.ave-reviews {
		padding: 0.5rem 1rem;
		background: #2f2f2fff;
		text-align: center;
		border-radius: 5px;
	}
</style>
