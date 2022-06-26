<script lang="ts">

	import ProductFullBox from '$lib/components/product_full/ProductFullBox.svelte';
	import ProductPath from '$lib/components/product_full/path/ProductPath.svelte';

	export let product;
	const {images, discount_expiry, name, price, discount_percent, description, sub_category, average_rating, num_reviews} = product
	console.log(product)
</script>

<header>
	<div class="back-button">Back</div>
	<ProductPath/>
</header>
<ProductFullBox {images} {discount_expiry} {name} {price} {discount_percent} {description} {sub_category} {average_rating} {num_reviews} />
