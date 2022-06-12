<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { supabaseClient } from '$lib/scripts/db';
	import { SupaAuthHelper } from '@supabase/auth-helpers-svelte';

	const onUserUpdate = async (user) => {
		if (user) await goto('/');
	};
</script>

<svelte:head
	><script src="https://kit.fontawesome.com/30f595e84f.js" crossorigin="anonymous"></script>
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<SupaAuthHelper {supabaseClient} {session} {onUserUpdate}>
	<div class="all">
		<header>
			<Header />
		</header>

		<div class="container">
			<div class="main-wrapper">
				<Nav />
				<main>
					<slot />
				</main>
			</div>
		</div>
	</div>
</SupaAuthHelper>

<style lang="scss">
	$border: 0.5px solid rgba(128, 128, 128, 0.3);
	$max-width: 1500px;
	$main-background: rgb(50, 53, 56);
	header {
		height: 4rem;
		border-bottom: $border;
	}

	.container {
		display: flex;
		justify-content: center;

		.main-wrapper {
			position: absolute;
			width: 100%;
			display: grid;
			grid-template-columns: 13rem 1fr;
		}
	}

	:root {
		font-family: 'Nunito', sans-serif;
		font-weight: 500;
		color: white;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: Ubuntu, Arial, sans-serif;
		background: $main-background;
	}
</style>
