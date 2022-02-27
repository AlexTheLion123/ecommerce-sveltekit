<script lang="ts">
	export let filters: { name: string; categories: string[] }[];
</script>

{#each filters as filter}
	<div class="filter">
		<span class="name">{filter.name}</span>
		<span class="categories">
			{#each filter.categories as category}
				{category}
			{/each}
		</span>
	</div>
{/each}

<style>
</style>
