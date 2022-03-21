<script context="module">
	import { writable } from "svelte/store"; 
	const currentIcon = writable(undefined);
</script>

<script>
	import { onMount } from 'svelte';

	export let imgSrc;
	export let isCurrent = false;

	let element;
	function handleClick() {
		$currentIcon = element;
	}

	onMount(() => {
		if (isCurrent) {
			console.log(element);
			$currentIcon = element;
		}
	});
</script>

<main bind:this={element} on:click={handleClick} >
	<img class:selected={$currentIcon === element} src={imgSrc} alt="" />
</main>

<style>

	img {
		width: 5rem;
        border-radius: 5px;
	}

	img:hover {
		cursor: pointer;
	}

	.selected {
		border: 2px solid rgb(72, 175, 25);
	}
</style>
