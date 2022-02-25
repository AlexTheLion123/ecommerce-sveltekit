<script>
	import WeedItem from '$lib/components/WeedItem.svelte';

	const items = [
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
		{ strain: 'Title', description: 'This is the item description bla bla bla bla bla', price: Math.round(Math.random()*1000), stars: Math.ceil(Math.random()*5), imgSrc: "/src/lib/assets/images/greenhouse/bud2.jpeg"},
	];
</script>

<div class="wrapper">
	<main>
		{#each items as item, i}
			<div class="item">
				<WeedItem strain={item.strain + ' ' + i} description={item.description} price={item.price} stars={item.stars} imgSrc={item.imgSrc}/>
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