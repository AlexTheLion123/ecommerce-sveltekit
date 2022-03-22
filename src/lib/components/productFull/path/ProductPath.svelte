<script lang="ts">
	import { goto } from '$app/navigation';

	import PathItem from './PathItem.svelte';

	export let path: string[];

	function pathClick(event) {
		let gotoPath: string;

		if (event.detail.path === 'home') {
			gotoPath = '/';
			goto(gotoPath)
			return;
		}

		for (let i = 0; i < path.length; i++) {
			if (i === 0) {
				gotoPath = '/';
				continue;
			}

			gotoPath = gotoPath + path[i];

			if (event.detail.path === path[i]) {
				break;
			} else {
				gotoPath = gotoPath + '/';
			}
		}

		goto(gotoPath)
	}
</script>

<main>
	{#each path as item, i}
		{#if i === path.length - 1}
			<span class="item">
				<PathItem {item} on:pathClick={pathClick} />
			</span>
		{:else if i === 0}
			<span class="item">
				<PathItem item={'home'} on:pathClick={pathClick} />
			</span>
			<span class="arrow"> > </span>
		{:else}
			<span class="item">
				<PathItem {item} on:pathClick={pathClick} />
			</span>
			<span class="arrow"> > </span>
		{/if}
	{/each}
</main>

<style>
	main {
		color: rgb(165, 163, 163);
	}
</style>
