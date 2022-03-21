<script lang="ts">
	export let price: number;
	export let isSpecial: boolean;
	export let discount: number;
</script>

<main>
	{#if !isSpecial}
		R {price}
	{:else}
        <div class="top">
            <s>R {price}</s> 
            <div class="percent-off">-{discount}%</div>
        </div>
        <div class="bottom">
            R {Math.round(price*(1-discount/100))}

        </div>
    {/if}
</main>

<style>
    main {
        font-size: 1.5rem;
        color: #d7ccccff;
    }

    .top {
        font-size: 0.8rem;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    }

    .percent-off {
        color: yellow;
    }
</style>
