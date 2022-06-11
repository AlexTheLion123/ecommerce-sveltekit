<script>
	import Nav from '$lib/components/layout/Nav.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { supabase, signIn, signOut } from '$lib/scripts/supabase';
	//import { pages, loadPages } from '$lib/stores/pages';

	supabase.auth.onAuthStateChange(async (event, sesh) => {
		if (event === 'SIGNED_IN') {
			// set cookie

			/*
			 ** https://developer.mozilla.org/en-US/docs/web/api/document/cookie
			 ** For non-HttpOnly cookies, you can set the cookie like this, instead of calling a .js endpoint
			 ** document.cookie = `session=${JSON.stringify(sesh)}; Path=/; Secure; SameSite=Strict; Expires=${new Date(sesh.expires_at * 1000).toUTCString()};`
			 */

			fetch('/api/cookie', {
				method: 'POST',
				body: JSON.stringify(sesh)
			}).then(async (res) => {
				if (res.status === 200) {
					/*
					 ** hydrate our page array.
					 ** only needed if we're staying on the current page.
					 ** example, we logged in from `/`, and after login we're staying on `/`
					 */
					//loadPages();

					/*
					 ** hydrate the sveltekit session store with non-sensitive data returned from the supabase session.
					 ** note that `$session = sesh` would dangerously save the user's access_token in the session store.
					 ** this is used for immediate post-login reactivity, because the `goto('/')` navigation below is client-side,
					 ** therefore we can't get user data from the freshly stored cookie.
					 ** for example, we show the user's avatar, and the Logout button instead of Login
					 */
					//$session = sesh.user;

					/*
					 ** fixes navigation issue with trailing hash.
					 ** if removed, once you login there will be a `#` at the end of your url
					 ** then if you click to another route, say /app, everything works
					 ** but if you then click the browser's back button, the url changes but /app's content is still visible
					 */
					// goto('/', {
					// 	// replaceState is optional here. it removes the `/#` page visit from your browser history
					// 	replaceState: true
					// });

					window.location.replace('/')
				} else {
					console.error('Failed to set cookie', res);
					// optional, but might as well logout of supabase at this point
					signOut();
				}
			});
		} else if (event === 'SIGNED_OUT') {
			// clear data from the pages and session store.
			//$pages = [];
			//$session = null; // shouldn't need to do this

			// expire cookie
			/*
			 ** https://developer.mozilla.org/en-US/docs/web/api/document/cookie
			 ** For non-HttpOnly cookies, you can expire the cookie like this, instead of calling a .js endpoint
			 ** document.cookie = `session=; Path=/; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 UTC;`
			 */

			fetch('/api/cookie', {
				method: 'DELETE'
			}).then((res) => {
				if (res.status !== 204) {
					console.error('failed to expire cookie', res);
				}
				//goto('/');
				window.location.replace('/');
			});
		}
	});
</script>

<svelte:head
	><script src="https://kit.fontawesome.com/30f595e84f.js" crossorigin="anonymous"></script>
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Header />
</header>

<div class="container">
	<div class="main-wrapper">
		<Nav />
		<!-- <div class="img-wrapper">
			<img src="src/images/weed_symbol.svg" alt="" id="weed-nav-symbol" />
		</div> -->
		<main>
			<slot />
		</main>
	</div>
</div>

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
