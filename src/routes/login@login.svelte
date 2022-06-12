<script>
	import Auth from 'supabase-ui-svelte';
	import { error, isLoading } from '@supabase/auth-helpers-svelte';
	import { supabaseClient } from '$lib/scripts/db';
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';

	async function signOut() {
		supabaseClient.auth.signOut();
		const headers = new Headers({ 'Content-Type': 'application/json' });

		await fetch('/api/cookie', {
			method: 'DELETE',
			headers,
			credentials: 'same-origin'
		})
		.then(({status}) => {
			if(status !== 204) {
				alert('error in logging out')
			}
		})
		goto('/');
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
