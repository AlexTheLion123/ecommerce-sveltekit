<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
import { assign } from 'svelte/internal';

</script>

<button on:click={() => window.location.assign('http://localhost:3000/login')}>
	{#if $session?.user}
		{$session.user.email}<br />
	{:else}
		Login
	{/if}
</button>

<style>
	button {
		all: unset;
		padding: 0.7rem 3rem;
		background: rgb(0, 124, 182);
		color: white;
		border-radius: 5px;
	}

	button:hover {
		background: rgb(0, 109, 182);
		cursor: pointer;
	}
</style>
