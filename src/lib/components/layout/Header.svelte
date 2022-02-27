<script>
    import Cart from './Cart.svelte';
</script>

<header class="header-container">
	<h1>Top Shelf</h1>
    <div class="cart-container">
        <Cart/>
    </div>
</header>

<style lang="scss">
	$header-background: rgb(50, 53, 58);

	header {
        height: 100%;
		background: $header-background;
		display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;
	}
    
    h1 {

        font-size: 1.5rem;
    }
    
</style>
