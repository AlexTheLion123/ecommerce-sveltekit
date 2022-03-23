<script>
	export let supabase;

	async function signInWithEmail() {
		const { user, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
	}

	async function signInWithGoogle(){

	}

	async function signInWithPhone() {

	}

</script>

<main>
	<button on:click={signInWithEmail}>Login with email</button>
	<button on:click={signInWithGoogle}>Login with google</button>
	<button on:click={signInWithPhone}>Login with phone</button>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
	}

	button {
		all: unset;
		padding: 0.7rem 3rem;
		color: rgb(226, 213, 213);
		background: rgba(141, 69, 64, 0.911);
		border: 2px solid rgba(153, 72, 66, 0.911);
		border-radius: 5px;
	}

	button:hover {
		background: rgba(128, 60, 55, 0.911);
		cursor: pointer;
	}
</style>
