<script lang="ts">
	import WeedItem from '$lib/components/WeedItem.svelte';
	import SearchBar from '$lib/components/layout/subLayout/SearchBar.svelte';

	const items = [
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('2/26/22'),
			special: 10
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('2/29/22'),
			special: 15
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/bud2.jpeg',
			deadline: new Date('1/26/22'),
			special: 0
		}
	];
</script>

<div class="wrapper">
	<header>
		<SearchBar />
	</header>
	<main>
		{#each items as item, i}
			<div class="item">
				<WeedItem {...item} />
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

	header {
		justify-self: start;
	}

	main {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

</style>
