<script>
	import { fly } from 'svelte/transition';

	export let value;
	export let transform = true;

	function transformValue(_value) {
		if (!transform) {
			return _value;
		}
		return _value < 10 ? `0${_value}` : _value;
	}
</script>

<main>
	{#if value}
		<!-- {#key value}
			<div in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
				{transformValue(value)}
			</div>
		{/key} -->

		<div>
			{transformValue(value)}
		</div>
	{/if}
</main>
