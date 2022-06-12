<script>
	import Auth from 'supabase-ui-svelte';
	import { error, isLoading } from '@supabase/auth-helpers-svelte';
	import { supabaseClient } from '$lib/scripts/db';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	function signOut() {
		supabaseClient.auth.signOut();
		const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
			const body = JSON.stringify({ event, session });
			const headers = new Headers({ 'Content-Type': 'application/json' });

			await fetch('/api/login', {
				method: 'post',
				body,
				headers,
				credentials: 'same-origin'
			});
		});
		return () => {
			authListener.unsubscribe();
		};
		goto('/');
		console.log('should be signed out');
	}
</script>

{#if !$session.user}
	{#if $error}
		<p>{$error.message}</p>
	{/if}
	<h1>{$isLoading ? `Loading...` : `Loaded!`}</h1>
	<Auth {supabaseClient} providers={['google', 'github']} />
{:else}
	<button on:click={signOut}>Sign out</button>
	<p>user:</p>
	<pre>{JSON.stringify($session.user, null, 2)}</pre>
	<p>client-side data fetching with RLS</p>
	<!-- <pre>{JSON.stringify(loadedData, null, 2)}</pre> -->
{/if}

<style>
	/* main {
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
	} */
</style>
