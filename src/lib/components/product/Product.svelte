<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import {goto} from '$app/navigation'
	import { capFirstLetter } from '$lib/scripts/utils';
	import { isOnSpecial } from '$lib/scripts/utils';

	import Price from './Price.svelte';
	import Timer from './Timer.svelte';
	import ModalWithSlot from '$lib/components/ModalWithSlot.svelte';
	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';

	export let name: string;
	export let discount_expiry: number;
	export let price: number;
	export let description: string;
	export let discount_percent: number | null;
	export let num_reviews: number;
	export let average_rating: number | null;
	export let img_src: string;
	export let id: string;

	let showModal = false;
	let isSpecial;
	let expiry: Date;

	if(discount_percent && discount_expiry)  {
		expiry = new Date(discount_expiry);
		isSpecial = new Date() < expiry;
	} else {
		isSpecial = false
	}

	function gotoProduct() {
		goto(`${$page.url.pathname}/${name}?id=${id}`)
		//showModal = true;
	}

	$: if (browser && showModal) {
		history.pushState({}, null, `${$page.url.pathname}/${name.toLowerCase()}`);
	} else if (browser && !showModal) {
		history.pushState({}, null, `${$page.url.pathname}`);
	}
</script>

<!-- <ModalWithSlot bind:showModal>
	<ProductDetailed {...product} />
</ModalWithSlot>
 -->
 
<main class:isSpecial on:click={gotoProduct}>
	<img src={img_src} alt={name} />

	<content>
		<section class="title-timer">
			<section class="title">{capFirstLetter(name)}</section>
			{#if isSpecial}
				<section class="timer"><Timer deadline={expiry} /></section>
			{/if}
		</section>
		<section class="description">{description}</section>

		<footer>
			<div class="price">
				<Price {price} {discount_percent} {isSpecial} />
			</div>
			<div class="reviews-container">
				<div class="num-reviews">Reviews: {num_reviews}</div>
				<div class="ave-reviews">{Math.round(average_rating*100)/100}</div>
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
