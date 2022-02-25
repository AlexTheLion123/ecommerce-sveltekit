<script> 
	import {fly} from 'svelte/transition';
	
	export let value;
	
</script>

<main>
	{#if value}
	
		{#key value}
				<div in:fly={{y:-5}} out:fly={{y:100}}>
					{value}
				</div>
		{/key}
	{/if}
</main>
