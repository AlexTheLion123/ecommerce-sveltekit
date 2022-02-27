<script lang="ts">
	export let filters: { name: string; categories: string[] }[];

	function capFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

{#each filters as filter}
	<div class="filter">
		<span class="name">{capFirstLetter(filter.name)}</span>
		<span class="categories">
			{#each filter.categories as category}
				{capFirstLetter(category)}
			{/each}
		</span>
	</div>
{/each}

<style>
	.name {
        border: 1px solid rgb(85, 34, 226);
        border-radius: 20%;
	}

	span {
		padding: 0.5rem 1rem;
	}
</style>
