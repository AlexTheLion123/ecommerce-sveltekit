<script lang="ts">
	export let strain;
	export let description;
	export let stars: number;
	export let price;
	export let imgSrc;

	let randomColorGenerator = (function () {
		let i = 0;
		let val = Math.floor(Math.random() * 16777215).toString(16);
		return i % 2 ? val : Math.floor(Math.random() * 16777215).toString(16);
	})();
</script>

<main>
	<section class="image">
		<img src={imgSrc} alt="" />
	</section>
	<section class="content">
		<header>
			{strain}
		</header>
		<div class="description">
			{description}
		</div>
		<footer>
			<div class="price">
				R {price}
			</div>
			<div class="reviews">
				{#each new Array(stars) as stars}
					<div class="star" />
				{/each}
			</div>
		</footer>
	</section>
</main>

<style lang="scss">
	$item-border: 1px solid grey;
	$background: rgb(39, 42, 44);
	$price-color: rgba(192, 178, 178, 0.979);
	$description-color: rgba(155, 155, 155, 0.658);
    $star-color: rgb(234, 1, 255);

	.star {
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 100%;
        background: $star-color;
        box-shadow: 0 0 15px $star-color;
	}

	.reviews {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	header {
		color: grey;
	}

	footer {
		display: flex;
		justify-content: space-between;
	}

	img {
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
		overflow: hidden;
		width: 15rem;
		border-radius: 5px;
		background: $background;
		border: 1px solid rgba(255, 255, 255, 0);
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
</style>
