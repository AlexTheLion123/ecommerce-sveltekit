<script lang="ts">
	import Filter from './Filter.svelte'

	export let filters: { name: string; filterName: string; categories: string[] }[];

</script>

{#each filters as filter}
	<Filter {...filter} on:filterClick/>
{/each}


