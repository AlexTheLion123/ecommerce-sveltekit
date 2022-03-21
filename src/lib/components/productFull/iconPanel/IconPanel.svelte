<script lang="ts">
	import Icon from './Icon.svelte';

	export let imgSrcArray: string[];
</script>

<main>
	{#each imgSrcArray as imgSrc, i}
		{#if i === 0}
			<div class="icon">
				<Icon {imgSrc} isCurrent={true} />
			</div>
		{:else}
			<div class="icon">
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
</style>
