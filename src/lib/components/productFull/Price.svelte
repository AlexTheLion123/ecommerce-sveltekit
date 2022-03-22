<script lang="ts">
	export let price: number;
	export let isSpecial: boolean;
	export let discount: number;

</script>

{#if !isSpecial}
	<div class="price">
		<h3>R {price}</h3>
	</div>
{:else}
	<section class="no-special">
		<div class="price">
			<h3>R {Math.round((price * (100 - discount)) / 100)}</h3>
		</div>
        <s>R {price}</s>
	</section>
{/if}

<style>
    .price {
        color: yellow;
        font-size: 1.5rem;
    }

    .no-special {
        display: flex;
        align-items: end;
        gap: 0.5rem;
    }

    s {
        color: grey;
        font-size: 1.3rem;
    }
</style>
