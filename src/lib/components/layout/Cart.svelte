<script>
	export let totalAmount = 654;
	export let numItems = 3;
</script>

<main>
	<div class="trolley-num-items">
		<img src="/src/lib/assets/icons/shopping-cart.svg" alt="" />
		<div class="num-items">
			{numItems}
		</div>
	</div>
	{#if totalAmount}
		<div class="total">
			<div class="total-amount">
				R {totalAmount}
			</div>
		</div>
	{/if}
</main>

<style lang="scss">
	$cart-background: #25db25;

	img {
		height: 2.3rem;
		transform: scale(-1, 1);
	}

	main {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.total {
		display: flex;
		gap: 0.3rem;
	}

	.total-amount {
		color: #25db25;
		font-size: 1.5rem;
	}

	.num-items {
		background: #25db25;
		border-radius: 50%;
		height: 1.3rem;
		width: 1.3rem;

		display: flex;
		align-items: center;
		justify-content: center;

		color: black;
		font-size: 1rem;
		font-weight: 300;

		position: absolute;
		top: -5px;
		right: -10px;
	}

	.trolley-num-items {
		position: relative;
	}
</style>
