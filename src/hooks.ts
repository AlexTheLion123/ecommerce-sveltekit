// src/hooks.ts
import { handleUser, handleCallback } from '@supabase/auth-helpers-sveltekit';
import type { GetSession, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { supabaseClient } from "$lib/scripts/db";

export const handle: Handle = sequence(handleCallback(), handleUser());

export const getSession: GetSession = async (event) => {
  const { user, accessToken, error } = event.locals as any;
  return {
    user,
    accessToken,
    error
  };
};


// only called on logout
// /** @type {import('@sveltejs/kit').Handle} */
// async function logout({event, resolve}) {
//     const response = await resolve(event)
//     console.log(response)
//     console.log('request')
//     console.log(event.request)
//     await supabaseClient.auth.api.setAuthCookie(event.request, response)

//     return response
// }