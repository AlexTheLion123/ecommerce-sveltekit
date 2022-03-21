<script lang="ts">
	import { onDestroy } from 'svelte';

	export let deadline: Date;

	function secondsToHMS(secs) {
		function z(n) {
			return (n < 10 ? '0' : '') + n;
		}
		var sign = secs < 0 ? '-' : '';
		secs = Math.round(Math.abs(secs));
		// TODO throw error when too large
		return sign + z((secs / 3600) | 0) + ':' + z(((secs % 3600) / 60) | 0) + ':' + z(secs % 60);
	}

	const deadlineMilli = deadline.getTime();



	let hms = gethmsFromDeadlineMilli(deadlineMilli);

	const timer = setInterval(() => {
		hms = gethmsFromDeadlineMilli(deadlineMilli)
	});

    function gethmsFromDeadlineMilli(_deadlineMilli) {
        const diffMilli = deadlineMilli - Date.now();
		const diffSeconds = diffMilli / 1000;
		return secondsToHMS(diffSeconds);
    }

    onDestroy(() => {
		clearInterval(timer);
	});

</script>

{hms}

<style>
</style>
