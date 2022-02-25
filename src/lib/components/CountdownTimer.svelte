<script lang="ts">
	import { onDestroy } from 'svelte';
	import CountdownUnit from './CountdownUnit.svelte';

	export let deadline;

	let hours, minutes, seconds;
	const myInterval = setInterval(() => {
		console.log('hi');
		return ([hours, minutes, seconds] = countdownWrapper(deadline, new Date()));
	}, 1000);

	function diffDateSeconds(date1: Date, date2: Date) {
		return (date1.getTime() - date2.getTime()) / 1000;
	}

	function convertTimeLeft(seconds: number) {
		return new Date(seconds * 1000).toISOString().substring(11, 19);
	}

	function countdownWrapper(date1: Date, date2: Date) {
		const _timeLeft = convertTimeLeft(diffDateSeconds(date1, date2));
		const seconds = _timeLeft.substring(6, 8);
		const minutes = _timeLeft.substring(3, 5);
		const hours = _timeLeft.substring(0, 2);

		return [hours, minutes, seconds];
	}

	onDestroy(() => clearInterval(myInterval));
</script>

{#if hours && minutes && seconds}
	<main>
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
		flex-direction: space-between;
	}
</style>
