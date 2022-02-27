<script lang="ts">
	import WeedItem from '$lib/components/WeedItem.svelte';
	import SearchBar from '$lib/components/layout/subLayout/SearchBar.svelte';
	import Filter from '$lib/components/layout/subLayout/Filter.svelte';
import { startOfMinute } from 'date-fns';

	const items = [
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('2/26/22'),
			special: 10
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('2/29/22'),
			special: 15
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		},
		{
			strain: 'Title',
			description: 'This is the item description bla bla bla bla bla',
			price: Math.round(Math.random() * 1000),
			stars: Math.round(Math.random() * 100) / 10,
			numReviews: Math.round(Math.random() * 1000),
			imgSrc: '/src/lib/assets/images/greenhouse/Blunicorn.jpg',
			deadline: new Date('1/26/22'),
			special: 0
		}
	];

	const filters = [{name: 'strain', categories: ['sativa','indica','bazooka', 'house']}]
</script>

<div class="wrapper">
	<header>
		<div class="search-bar">
			<SearchBar />
		</div>
		<div class="filter">
			<Filter {filters}/>
		</div>
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

		display: flex;
		flex-direction: column;
	}

	.filter {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	main {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

</style>
