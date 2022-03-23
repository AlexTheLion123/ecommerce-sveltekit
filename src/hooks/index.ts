import supabase from '$lib/scripts/db'

// https://www.reddit.com/r/sveltejs/comments/ql710f/how_to_connect_to_postgres_with_sveltekit/

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.supabase = supabase

    const response = await resolve(event);
    return response;
}