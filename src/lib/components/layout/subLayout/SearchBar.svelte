<script>
    let value;

    function search() {
        console.log(value)
    }
</script>

<main>
    <input type="text" placeholder="Search" bind:value on:keyup={search}/>
    <select name="sort" id="sort">
        <option value="" disabled selected>Sort</option>
    </select>
</main>

<style lang="scss">
    $border-radius: 5px;
    $select-background: rgb(228, 227, 227);
    main {
        display: flex;
        align-items: center;
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
        height: 2rem;
        width: 7rem;
        background: white;
        color: black;
        border-radius: 0 $border-radius $border-radius 0;
        background: $select-background;
        font-family: 'Nunito';
        font-weight: 700;
        text-align: center;
        color: rgb(59, 59, 59);
    }

    select:hover {
        cursor: pointer;
    }
    
</style>