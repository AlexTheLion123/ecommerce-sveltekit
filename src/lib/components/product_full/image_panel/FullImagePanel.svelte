<script lang="ts">
	import MainImage from './MainImage.svelte';
	import IconPanel from './IconPanel.svelte';

	export let images: string[];

	let mainImg = images[0];

	function iconClick(event) {
		mainImg = images[event.detail.current];
	}

    // TODO remove this to full component
</script>

<main>
	<MainImage imgSrc={mainImg} />
</main>
<aside>
	<IconPanel {images} on:iconClick={iconClick} />
</aside>

<style>
</style>
