<script>
	import ModalWithSlot from '$lib/components/ModalWithSlot.svelte'
	import {goto} from '$app/navigation'

	let showModal = false;

	function login() {
		goto('login')
	}
</script>


<button on:click={login}>Login</button>

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
