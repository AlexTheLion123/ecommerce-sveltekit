<script>
	function login() {
		console.log('login');
	}
</script>

<button on:click={login}>Login</button>

<style>
	button {
		all: unset;
		padding: 0.7rem 3rem;
		background: rgb(0, 182, 55);
		color: white;
		border-radius: 10px;
	}

	button:hover {
		background: rgb(0, 148, 44);
		cursor: pointer;
	}
</style>
