<script lang="ts">
	import CountdownTimer from './CountdownTimer.svelte';

	export let strain;
	export let description;
	export let stars: number;
	export let numReviews: number;
	export let price;
	export let imgSrc;
	export let deadline: Date;
	export let special: number;

	const isSpecial = deadline > new Date() && special;
</script>

<main class:special={isSpecial}>
	<section class="image">
		<img src={imgSrc} alt="" />
	</section>
	<section class="content">
		<header>
			<div class="strain">
				{strain}
			</div>
			{#if isSpecial}
				<div class="countdown">
					<CountdownTimer {deadline}/>
				</div>
			{/if}
		</header>
		<div class="description">
			{description}
		</div>
		<footer>
			<div class="price-container">
				{#if deadline > new Date() && special}
					<div class="on-special">
						<div class="old-price-container">
							<s><span class="old-price">R {price}</span></s> <span class="percentage-off">-{special}%</span>
						</div>
						<div class="new-price">R {Math.round(price * (1 - special / 100))}</div>
					</div>
				{:else}
					<div class="no-special">
						R {price}
					</div>
				{/if}
			</div>
			<div class="reviews">
				<div class="numReviews">Reviews: {numReviews}</div>
				<div class="numStars">{stars}</div>
			</div>
		</footer>
	</section>
</main>

<style lang="scss">
	$item-border: 1px solid grey;
	$background: rgb(65, 68, 73);
	$description-color: rgba(155, 155, 155, 0.658);
	$star-color: rgb(234, 1, 255);
	$special-border-color: rgb(255, 73, 255);
	$stars-background: rgb(47, 47, 47);

	$header-color: rgba(218, 207, 207, 0.979);
	$price-color: rgba(218, 207, 207, 0.979);
	.star {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 100%;
		background: $star-color;
		box-shadow: 0 0 15px $star-color;
	}

	.reviews {
		justify-content: center;
		align-items: center;
		text-align: right;

		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;
	}

	.numReviews {
		font-size: 0.8rem;
	}

	.percentage-off {
		margin-left: 0.3rem;
		color: rgba(255, 255, 0, 0.835);
	}

	header {
		color: $header-color;
		display: flex;
		justify-content: space-between;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 100%;
	}

	.numStars {
		display: grid;
		place-items: center;
		padding: 0.5rem;
		border-radius: 0.3rem;
		background: $stars-background;
	}

	.price-container {
		color: $price-color;
		align-self: end;
	}

	.description {
		color: $description-color;
		font-size: 0.8rem;
	}

	.no-special, .new-price {
		font-size: 1.5rem;
	}


	img {
		height: 10rem;
	}

	main {
		overflow: hidden;
		width: 15rem;
		border-radius: 5px;
		background: $background;
		border: 1px solid rgba(255, 255, 255, 0);

		box-shadow: 0 0 8px grey;
	}

	main:hover {
		cursor: pointer;
		border: 1px solid rgba(255, 255, 255, 0.233);
	}

	.content {
		padding: 1rem;

		display: grid;
		grid-template-rows: 2fr 4fr 2fr;
	}

	.special {
		box-shadow: 0 0 10px $special-border-color;
		border: 1px solid $special-border-color;

		&:hover {
			border: 1px solid lighten($special-border-color, 5%);
			box-shadow: 0 0 10px lighten($special-border-color, 5%);
		}
	}
</style>
