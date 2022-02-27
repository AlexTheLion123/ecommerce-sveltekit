<script lang="ts">
	export let filters: { name: string; categories: string[] }[];

	function capFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}


</script>

{#each filters as filter}
	<div class="filter">
		<span class="name selected">All {capFirstLetter(filter.name)}s</span>
		<span class="categories">
			{#each filter.categories as category}
				<span class="category">
                    {capFirstLetter(category)}
                </span>
			{/each}
		</span>
	</div>
{/each}

<style lang="scss">
    $border-radius: 10px;

    .filter {
        border: 1px dashed rgb(128, 96, 247);
        border-radius: $border-radius;
        width: max-content;
        font-size: 0.9rem;
        padding: 1rem 0.5rem;
    }

    .name {
        border: 1px solid rgba(137, 138, 132, 0.972);
        border-radius: $border-radius;
        padding: 0.5rem;
	}
    
    span {
        padding: 0.5rem 0.3rem;
    }

    .selected {
    }

</style>
