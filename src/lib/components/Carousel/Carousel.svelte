<script lang="ts">
	import Card from '$lib/components/Carousel/Card.svelte';
	import { scrollIntoView } from '$lib/scripts/utils';

	type ImageType = {
		title: string;
		src: string;
	};

	export let images: ImageType[];

	let currentIndex = 0;
	function scrollRight() {
		if (currentIndex === images.length - 1) {
			currentIndex = 0;
		} else {
			currentIndex++;
		}

		scrollIntoView(`#${getId(currentIndex)}`);
	}
	function scrollLeft() {
		if (currentIndex === 0) {
			currentIndex = images.length - 1;
		} else {
			currentIndex--;
		}

		scrollIntoView(`#${getId(currentIndex)}`);
	}

	function getId(index: number): string {
		if (index === images.length) {
			index = 0;
		}
		const title = images[index].title;
		const id = `carousel-${title.replace(/ /g, '')}-${index}`;
		return id; // remove white spaces
	}
</script>

<div class="relative carousel-container">
	<svg
		on:click|preventDefault={scrollLeft}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		style="transform: scale(-1,1)"
		class="cursor-pointer absolute left-0 inset-y-1/2 z-50"
		><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" /></svg
	>
	<ul class="max-w-lg flex overflow-x-hidden gap-6 snap-x snap-mandatory">
		{#each images as image, i}
			<Card {...image} id={getId(i)} />
		{/each}
	</ul>
	<svg
		on:click|preventDefault={scrollRight}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		class="cursor-pointer absolute right-0 inset-y-1/2"
		><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" /></svg
	>
</div>
