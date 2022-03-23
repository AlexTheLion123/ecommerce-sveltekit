<script lang="ts">
	import type { greenhouse } from '$lib/assets/products/d.greenhouse';

	import ProductDetailed from '$lib/components/productFull/ProductDetailed.svelte';

	export let product: greenhouse;
	export let showModal;

	function closeModal() {
		showModal = false;
	}
</script>

<div class="modal">
	<main>
		<header>
			<div class="exit-cross-container" on:click={closeModal}>
				<span class="exit-cross"> X </span>
			</div>
		</header>
		<ProductDetailed {...product} />
	</main>
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(2, 2, 2, 0.329);
		z-index: 9999;

		display: grid;
		place-items: center;
	}

	header {
		height: 2.5rem;
		padding: 0 1rem;
		background: rgba(86, 89, 92, 0.801);

		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}

	.exit-cross-container {
		padding: 2px;
		border-radius: 3px;
		font-size: 1.3rem;
	}

	.exit-cross-container:hover {
		cursor: pointer;
	}
	
	.exit-cross {
		color: white;
	}

	main {
		overflow: hidden;
		border-radius: 5px;
		background: #414449ff;
	}
</style>
