<script lang="ts">
	import Filter from './Filter.svelte'

	export let filters: { name: string; categories: string[] }[];

</script>

{#each filters as filter}
	<Filter name={filter.name} categories={filter.categories}/>
{/each}


