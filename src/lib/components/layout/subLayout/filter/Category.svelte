<script>
	import { capFirstLetter } from '$lib/scripts/utils';

	export let category;
	export let selected;
	
</script>

<span class="category" class:selected>
	{capFirstLetter(category)}
</span>

<style lang="scss">
	$border-radius: 10px;

	.category:hover {
		cursor: pointer;
	}

	.category {
		padding: 0.5rem;
	}

	.selected {
		border: 2px solid rgba(2, 253, 232, 0.788);
		border-radius: $border-radius;
		background: rgba(109, 113, 138, 0.301);
	}

</style>
