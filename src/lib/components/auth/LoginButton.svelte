<script>
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { supabase, signOut } from '$lib/scripts/supabase';
	//import { pages, loadPages } from '$lib/stores/pages';

	let isSignedIn

	supabase.auth.onAuthStateChange(async (event, sesh) => {
		if (event === 'SIGNED_IN') {
			console.log('trying to sign in')

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
					console.log('signed in')
					isSignedIn = true

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
					$session = sesh.user;

					/*
					 ** fixes navigation issue with trailing hash.
					 ** if removed, once you login there will be a `#` at the end of your url
					 ** then if you click to another route, say /app, everything works
					 ** but if you then click the browser's back button, the url changes but /app's content is still visible
					 */
					goto('/', {
						// replaceState is optional here. it removes the `/#` page visit from your browser history
						replaceState: true
					});
					
					//window.location.replace('/')
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
					console.log('session after trying to sign out: ', $session)
					console.error('failed to expire cookie', res);
				} else {
					isSignedIn = false
					console.log('signed out')
					goto('/');
				}
				//window.location.replace('/');
			});
		}
	});

	function handleClick() {
		if(isSignedIn) {
			// then log out
			signOut()
		} else {
			goto('login');
			// then go to log in page
		}
	}

	$: console.log('session: ', $session)
</script>

<button on:click={handleClick}>
	{#if isSignedIn}
		{$session.email}<br>
	{:else}
		Login 
	{/if}
</button>

<style>
	button {
		all: unset;
		padding: 0.7rem 3rem;
		background: rgb(0, 124, 182);
		color: white;
		border-radius: 5px;
	}

	button:hover {
		background: rgb(0, 109, 182);
		cursor: pointer;
	}
</style>
