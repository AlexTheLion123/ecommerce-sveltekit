<script>
    let value;

    function search() {
        console.log(value)
    }
</script>

<main>
    <input type="text" placeholder="Search" bind:value on:keyup={search}/>
    <select name="sort" id="sort">Sort</select>
</main>

<style lang="scss">
    $border-radius: 5px;
    $select-background: rgb(228, 227, 227);
    main {
        display: flex;
    }
    
    input {
        all:unset;
        width: 30rem;
        height: 2rem;
        background: white;
        color: black;
        border-radius: $border-radius 0 0 $border-radius;
        border: 1px solid black;
        padding-left: 1rem;
    }

    select {
        all:unset;
        height: 2rem;
        width: 5rem;
        background: white;
        color: black;
        border-radius: 0 $border-radius $border-radius 0;
        background: $select-background;
    }
    
</style>