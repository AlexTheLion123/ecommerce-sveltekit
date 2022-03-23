<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';
	//import {goto} from '$app/navigation'
	import { page } from '$app/stores';
	import { capFirstLetter } from '$lib/scripts/utils';
	import { isOnSpecial } from '$lib/scripts/utils';

	import Price from './Price.svelte';
	import Timer from './Timer.svelte';
	import Modal from './Modal.svelte';
	import { onMount } from 'svelte';

	export let product: greenhouse;

	let showModal = false;
	let isSpecial;
	const deadline = new Date(product.discountDeadline);

	$: isSpecial = isOnSpecial(product.discountDeadline);

	function gotoProduct() {
		//goto(`${$page.url.pathname}/${title}`)
		showModal = true;
	}

	onMount(() => {
		$: if (showModal) {
			history.pushState({}, null, `${$page.url.pathname}/${product.title}`);
		} else {
			history.pushState({}, null, `${$page.url.pathname}`);
		}
	});
</script>

<main class:isSpecial on:click={gotoProduct}>
	<img src={product.imgSrc} alt={product.title} />

	<content>
		<section class="title-timer">
			<section class="title">{capFirstLetter(product.title)}</section>
			{#if isSpecial}
				<section class="timer"><Timer {deadline} /></section>
			{/if}
		</section>
		<section class="description">{product.description}</section>

		<footer>
			<div class="price">
				<Price price={product.price} discount={product.discount} {isSpecial} />
			</div>
			<div class="reviews-container">
				<div class="num-reviews">Reviews: {product.numReviews}</div>
				<div class="ave-reviews">{product.aveReviews}</div>
			</div>
		</footer>
	</content>
</main>

{#if showModal}
	<Modal bind:showModal {product} />
{/if}

<style>
	main {
		background: #414449ff;
		width: 15rem;

		display: flex;
		flex-direction: column;

		border: 1px solid transparent;
		box-shadow: 0 0 8px rgb(143, 145, 148);

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
