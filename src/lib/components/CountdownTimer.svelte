<script lang="ts">
	export let deadline;
	import { fly } from 'svelte/transition';

	let hours, minutes, tens, units;
	setInterval(() => ([hours, minutes, tens, units] = countdownWrapper(deadline, new Date())), 1000);

	function diffDateSeconds(date1: Date, date2: Date) {
		return (date1.getTime() - date2.getTime()) / 1000;
	}

	function convertTimeLeft(seconds: number) {
		return new Date(seconds * 1000).toISOString().substring(11, 19);
	}

	function countdownWrapper(date1: Date, date2: Date) {
		const _timeLeft = convertTimeLeft(diffDateSeconds(date1, date2));
		const units = _timeLeft.substring(7, 8);
		const tens = _timeLeft.substring(6, 7);
		const minutes = _timeLeft.substring(3, 5);
		const hours = _timeLeft.substring(0, 2);

		return [hours, minutes, tens, units];
	}
</script>

<main>
	{#if hours && minutes && tens && units}
		{#key hours}
			<div in:fly={{ y: -20 }} out:fly={{ y: 20 }}>{hours}</div>
			:
		{/key}
		{#key minutes}
			<div in:fly={{ y: -20 }} out:fly={{ y: +20 }}>{minutes}</div>
			:
		{/key}
		{#key tens}
			<div in:fly={{ x: 0, y: -20 }} out:fly={{ y: +20 }}>{tens}</div>
		{/key}
		{#key units}
			<div in:fly={{ x: 0, y: -20 }} out:fly={{ x: 0, y: +20 }}>{units}</div>
		{/key}
	{/if}
</main>

<style>
	main {
		display: flex;
	}
</style>
