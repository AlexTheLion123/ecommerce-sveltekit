<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Icon from './Icon.svelte';

	export let imgSrcArray: string[];

	let current = 0;

	const dispatch = createEventDispatcher();
	function handleClick(num) {
		current = num;
		dispatch('iconClick', {current: num})
	}
</script>

<main>
	{#each imgSrcArray as imgSrc, i}
		{#if i === 0}
			<div class="icon" on:click={() => handleClick(i)} class:selected={current === i}>
				<Icon {imgSrc} />
			</div>
		{:else}
			<div class="icon" on:click={() => handleClick(i)} class:selected={current === i}>
				<Icon {imgSrc} />
			</div>
		{/if}
	{/each}
</main>

<style>
	main {
		display: flex;
		gap: 1rem;
	}
	
	.selected {
		overflow: hidden;
		border: 2px solid rgba(76, 231, 76, 0.74);
	}

	.icon {
		border-radius: 5px;
	}
</style>
