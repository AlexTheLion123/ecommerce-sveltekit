<script>
    let value;

    // TODO fix errors

    function handleMinus() {
        if(value<3){
            value = 2; 
            console.log('cannot order less than two grams')
            return;
        }
        value--;
        
    }

    function handlePlus() {
        value++;
        console.log(value);
        
    }

    function handleChange() {
        if(value < 2) {
            console.log('cannot order less than two grams')
        }
    }
</script>

<main>
	<div class="minus symbol" on:click={handleMinus}>
		<h1>-</h1>
	</div>
	<input type="number" min="2" placeholder="2" bind:value on:change={handleChange}/>
	<div class="plus symbol" on:click={handlePlus}>
		<h1>+</h1>
	</div>
</main>

<style>
	main {
		display: flex;
        justify-content: space-between;
        padding: 0.6rem 1rem;

		border-radius: 100vh;
		border: 1px solid rgba(158, 158, 158, 0.514);
        min-width: 7rem;
        width: 100%;

        color:rgb(190, 190, 190);
	}

    .symbol:hover {
        cursor: pointer;
    }

	input {
		all: unset;
        font-size: 1.5rem;
        text-align: center;
        max-width: 50%;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
