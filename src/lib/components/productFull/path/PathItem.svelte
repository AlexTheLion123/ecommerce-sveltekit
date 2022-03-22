<script>
	import { createEventDispatcher } from 'svelte';

	export let item;

	const dispatch = createEventDispatcher();

	function format(str) {
		return str.replace('%20', ' ');
	}

	function pathClick() {
        dispatch('pathClick', {path: item})
    }
</script>

<main on:click={pathClick}>
	{format(item)}
</main>

<style>
	main {
		display: inline;
		font-weight: 400;
	}

	main:hover {
		cursor: pointer;
		color: lightblue;
	}
</style>
