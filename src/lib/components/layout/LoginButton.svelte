<script>
    function login() {
        console.log('login')
    }

</script>

<button on:click={login}>Login</button>

<style>
    button {
        all: unset;
        padding: 0.7rem 3rem;
        background: rgb(121, 3, 255);
        color: white;
        border-radius: 10px;
    }

    button:hover {
        cursor: pointer;
        box-shadow: 0 3px 10px rgb(121, 3, 255);
    }
</style>