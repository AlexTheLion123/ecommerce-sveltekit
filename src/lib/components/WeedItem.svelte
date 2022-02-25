<script lang="ts">
	export let strain;
	export let description;
	export let stars: number;
	export let price;

	let randomColorGenerator = (function () {
		let i = 0;
		let val = Math.floor(Math.random() * 16777215).toString(16);
		return i % 2 ? val : Math.floor(Math.random() * 16777215).toString(16);
	})();
</script>

<main>
	<header>
		{strain}
	</header>
	<div class="image">
		<img src="/src/lib/assets/images/Cannabis_leaf.svg.png" alt="" />
	</div>
	<div class="starsi">
		{#each new Array(stars) as stars}
			<div class="star" />
		{/each}
	</div>
	<div class="price">
		R {price}
	</div>
	<div class="description">
		{description}
	</div>
</main>

<style lang="scss">
	$item-border: 1px solid grey;
	$background: #202224ff;
	$price-color: #beb24fff;
	$description-color: rgba(155, 155, 155, 0.658);
    $star-color: rgb(197, 246, 82);

	.star {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 100%;
        background: $star-color;
        box-shadow: 0 0 15px $star-color;
	}

	.starsi {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	header {
		color: grey;
	}

	.image {
		display: grid;
		place-items: center;
		width: 100%;
	}

	.stars {
		display: grid;
		place-items: center;
	}

	.price {
		color: $price-color;
		font-size: 1.5rem;
	}

	.description {
		color: $description-color;
		font-size: 0.8rem;
	}

	img {
		height: 10rem;
	}

	main {
		width: 15rem;
		padding: 1rem;
		border-radius: 5px;
		text-align: center;
		background: $background;

		display: grid;
		grid-template-rows: 1fr 4fr 1fr 1fr;
	}
</style>
