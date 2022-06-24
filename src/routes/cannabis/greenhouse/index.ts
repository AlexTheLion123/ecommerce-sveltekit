import { greenhouse } from "$lib/assets/products/greenhouse";

import {
    supabaseServerClient,
    withApiAuth,
} from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';

export async function get<RequestHandler>({ request }) {
    // Run queries with RLS on the server
    const { data, error } = await supabaseServerClient(request)
        .rpc('getproductsbycat6', { p_category: 'indoor' })

    return {
        status: 200,
        body: { products: JSON.stringify(data) }
    };

}