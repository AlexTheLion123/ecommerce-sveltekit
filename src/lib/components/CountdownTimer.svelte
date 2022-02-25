<script lang="ts">
	import { onDestroy } from 'svelte';
	import CountdownUnit from './CountdownUnit.svelte';
	import { intervalToDuration } from 'date-fns';

	export let deadline;

	let years, months, days, hours, minutes, seconds;
	const myInterval = setInterval(() => {
		({ years, months, days, hours, minutes, seconds } = intervalToDuration({
			start: new Date(),
			end: deadline
		}));

        if(years || months) {
            throw new Error("deadline to far in advance")
        }

	}, 1000);

	onDestroy(() => clearInterval(myInterval));
</script>

{#if hours && minutes && seconds && !months && !years}
	<main>
		{#if days}
			<div class="days">
				<CountdownUnit value={days} />
			</div>
			<div class="days-word">days</div>
		{/if}
		<div class="hours">
			<CountdownUnit value={hours} />
		</div>
		<div>:</div>
		<div class="minutes">
			<CountdownUnit value={minutes} />
		</div>
		<div>:</div>
		<div class="seconds">
			<CountdownUnit value={seconds} />
		</div>
	</main>
{/if}

<style>
	main {
		display: flex;
	}

    .days-word {
        margin: 0 8px 0 3px;
    }
</style>
