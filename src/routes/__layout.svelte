<script>
    import Nav from '$lib/components/layout/Nav.svelte';
	
</script>

<svelte:head
	><script src="https://kit.fontawesome.com/30f595e84f.js" crossorigin="anonymous"></script>
</svelte:head>

<header>
    <div class="header-container">
        <div class="title">Name of biz</div>
    </div>
</header>

<div class="container">
	<div class="main-wrapper">
		<Nav/>
		<!-- <div class="img-wrapper">
			<img src="src/images/weed_symbol.svg" alt="" id="weed-nav-symbol" />
		</div> -->
		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	$border: 0.5px solid rgba(128, 128, 128, 0.3);
    $max-width: 1500px;

	header {
		height: 3rem;
		width: 100%;
		border-bottom: $border;

		display: grid;
		align-items: center;
        place-items: center;
	}

    .header-container {
        justify-self: left;
    }

	.img-wrapper {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 0.2rem;

		#weed-nav-symbol {
			width: 5rem;
		}
	}

	

	.container {
		display: flex;
		justify-content: center;

		.main-wrapper {
			position: absolute;
			width: 100%;
			display: grid;
			grid-template-columns: 13rem 1fr;
		}
	}

	:root {
		font-family: 'Inter', sans-serif;
		font-weight: 500;
		color: white;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: Ubuntu, Arial, sans-serif;
		background: #181a1cff;
	}
</style>
