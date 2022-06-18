<script lang="ts">
	import Card from '$lib/components/Carousel/Card.svelte';
	import { scrollIntoView } from '$lib/scripts/utils';

	type ImageType = {
		title: string;
		src: string;
	};

	export let images: ImageType[];
	console.log(images);
	function getId(index: number): string {
		if (index === images.length) {
			index = 0;
		}
		const title = images[index].title;
		const id = `carousel-${title.replace(/ /g, '')}-${index}`;
		return id; // remove white spaces
	}

</script>

<ul class="max-w-lg flex overflow-x-auto gap-6 snap-x snap-mandatory">
	{#each images as image, i}
		<div class="absolute">
			<Card {...image} id={getId(i)}>
				<a href={`#${getId(i + 1)}`} on:click|preventDefault={scrollIntoView}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="cursor-pointer"
						><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" /></svg
					>
				</a>
			</Card>
		</div>
	{/each}
</ul>
