<script context="module">
	export const load = async function ({ fetch, params }) {
		const res = await fetch(`/api/greenhouse/${params.title}`);
		const product = await res.json();

		return {
			props: {
				product
			}
		};
	};
</script>

<script>
	export let product;
</script>

{product}

This is a product

<style>
</style>
