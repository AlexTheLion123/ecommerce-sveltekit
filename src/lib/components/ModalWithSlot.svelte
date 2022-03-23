<script>
	export let showModal;

	function closeModal() {
		showModal = false;
	}
</script>

{#if showModal}
	<div class="modal">
		<div class="container">
			<header>
				<div class="exit-cross-container" on:click={closeModal}>
					<span class="exit-cross"> X </span>
				</div>
			</header>
			<main>
				<slot />
			</main>
		</div>
	</div>
{/if}

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
    
    .container {
        border-radius: 3px;
        overflow: hidden;

    }

	header {
		height: 2.5rem;
		padding: 0 1rem;
		background: rgba(86, 89, 92);

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
		background: #414449ff;
	}
</style>
