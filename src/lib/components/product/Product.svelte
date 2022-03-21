<script lang="ts">
    export let title;
    export let imgSrc;
    export let price;
    export let discount: number;
    export let discountDeadline: Date;
    export let description;
    export let numReviews;
    export let aveReviews;


    const isSpecial = (new Date()) < discountDeadline
</script>

<main class:isSpecial>
    <header class="img">
        <img src={imgSrc} alt={title}>
    </header>

    <section class="title">{title}</section>
    <section class="description">{description}</section>

    <footer>
        <div class="price">R {price}</div>
        <div class="reviews-container">
            <div class="reviews">Reviews: {numReviews}</div>
            <div class="aveReviews">{aveReviews}</div>
        </div>
    </footer>
</main>


<style>
    main {
        background: #414449ff;
        height: 5rem;
        width: 3rem;

        display: flex;
        flex-direction: column;

        border: 1px solid transparent;
        box-shadow: 0 0 8px #505153ff;
    }

    main:hover {
        border: 1px solid #505153ff;
    }


    footer {
        display: flex;
        justify-content: space-between;
    }



    .aveReviews {
        padding: 0.5rem 1rem;
        background: #2f2f2fff;
    }   

</style>