<script lang="ts">
	import {capFirstLetter} from '$lib/scripts/utils'
    import { createEventDispatcher } from 'svelte';
	import Category from './Category.svelte'

    export let name: string;
    export let categories: string[];

    const selectedArr = new Array(categories.length).fill(false)
    let nameSelected = true;

    const dispatch = createEventDispatcher();

    function nameClick() {
        nameSelected = true;
        for(let i=0; i<selectedArr.length; i++){
            selectedArr[i] = false
        }
    }

    function filterClick(index: number) {
        nameSelected = false;

        for(let i=0;i<selectedArr.length; i++) {
            selectedArr[i] = false;
        }

        selectedArr[index] = true
    }

</script>

<div class="filter">
    <span class="name category" on:click={nameClick}><Category category={capFirstLetter(name)} selected={nameSelected} /></span>
    <span class="categories">
        {#each categories as category, i}
            <span class="category" on:click={() => filterClick(i)}>
                <Category {category} selected={selectedArr[i]} />
            </span>
        {/each}
    </span>
</div>

<style lang="scss">
	$border-radius: 10px;

	.filter {
		border: 1px dashed rgb(128, 96, 247);
		border-radius: $border-radius;
		width: max-content;
		font-size: 0.9rem;
		padding: 1.2rem 0.5rem;

		display: flex;
	}

	.name {
		padding: 0.5rem;
	}

	span {
		padding: 0.5rem 0.3rem;
	}

	

</style>