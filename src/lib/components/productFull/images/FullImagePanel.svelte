<script lang="ts">
	import MainImage from '$lib/components/productFull/images/MainImage.svelte';
	import IconPanel from '$lib/components/productFull/images/IconPanel.svelte';

	export let imgSrcArray: string[];

	let mainImgSrc = imgSrcArray[0];

	function iconClick(event) {
		mainImgSrc = imgSrcArray[event.detail.current];
	}
</script>

<main>
	<MainImage imgSrc={mainImgSrc} />
</main>
<aside>
	<IconPanel {imgSrcArray} on:iconClick={iconClick} />
</aside>

<style>
</style>
