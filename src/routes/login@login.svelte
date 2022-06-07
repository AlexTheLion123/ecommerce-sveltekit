<script>
	async function signInWithEmail() {
		const { user, error } = await supabase.auth.signIn({
			email: 'example@email.com',
			password: 'example-password'
		});
	}

	async function signInWithGoogle() {}

	async function signInWithPhone() {}
</script>

<main>
	<button on:click={signInWithEmail}>Login with email</button>
	<button on:click={signInWithGoogle}>Login with google</button>
	<button on:click={signInWithPhone}>Login with phone</button>
	<button class="sign-up">Sign Up</button>
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
		background: rgba(40, 173, 69, 0.911);
		border-radius: 5px;
		text-align: center;
	}

	button:hover {
		background: rgba(63, 212, 95, 0.911);
		cursor: pointer;
	}
	
</style>