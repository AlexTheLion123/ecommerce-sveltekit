<script>
    import Carousel from '$lib/components/Carousel/Carousel.svelte'

    let images = [
        {title: 'Blunicorn', src: '/src/lib/assets/images/greenhouse/Blunicorn.jpg'},
        {title: 'Frosted Apricot', src: '/src/lib/assets/images/greenhouse/FrostedApricots.jpg'},
        {title: 'Lions Bread', src: '/src/lib/assets/images/greenhouse/LionsBread.jpg'},
        {title: 'Perps Express', src: '/src/lib/assets/images/greenhouse/PerpsExpress.jpg'},
        {title: 'Watermelon Punch', src: '/src/lib/assets/images/greenhouse/WatermelonPunch.jpg'}
    ]
</script>

<svelte:head>
    <title>Svelte Carousel</title>
</svelte:head>

<main>
    <Carousel {images}/>

    <section>
        For queries contact 123-456-78912
    </section>

</main>