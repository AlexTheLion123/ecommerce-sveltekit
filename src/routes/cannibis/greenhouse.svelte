<script>
	import WeedItem from '$lib/components/WeedItem.svelte';

	const items = [
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' },
		{ strain: 'Hello', description: 'sdklfjslf sfj sdlkfjs flksjdf slkfj sdlfk', price: '1000' }
	];
</script>

<div class="wrapper">
	<main>
		{#each items as item, i}
			<div class="item">
				<WeedItem strain={item.strain + ' ' + i} description={item.description} price={Math.round(Math.random()*1000)} stars={Math.ceil(Math.random()*5)} imgSrc={"/src/lib/assets/images/greenhouse/bigstock-Marijuana.jpg"}/>
			</div>
		{/each}
	
	</main>
</div>


<style>
	.wrapper {
		display: grid;
		place-items: center;
		padding: 2rem;
	}

    main {
		display: flex;
		flex-wrap: wrap;
	}
	.item {
		padding: 1rem;
	}
</style>