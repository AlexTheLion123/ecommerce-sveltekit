<script lang="ts">

	export let id: string;
	export let title: string;
	export let src: string;
</script>

<li {id} class="relative shrink-0 snap-center max-w-lg list-none">
	<img {title} {src} alt={title} class="rounded" />
	<button class="bg-red-500 semibold absolute inset-x-2 bottom-2 rounded bg-primary px-4 py-2 text-white shadow shadow-primary">{title}</button>
    <div class="absolute inset-y-1/2 right-0">
        <slot/>
    </div>
</li>
