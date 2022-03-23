<script>
    import Cart from './Cart.svelte';
    import LoginButton from '../auth/LoginButton.svelte';
</script>

<header class="header-container">
	<h1>TopShelf</h1>
    <div class="right">
        <div class="cart-container">
            <Cart/>
        </div>
        <div class="login-button">
            <LoginButton/>
        </div>
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
        padding: 0 1rem;
	}
    
    h1 {

        font-size: 1.5rem;
    }

    .right {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    
</style>
