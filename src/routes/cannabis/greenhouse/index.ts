import { greenhouse } from "$lib/assets/products/greenhouse";

import {
    supabaseServerClient,
    withApiAuth,
} from '@supabase/auth-helpers-sveltekit';
import type { RequestHandler } from '@sveltejs/kit';

export async function get<RequestHandler>({  request }) {
        // Run queries with RLS on the server
        
        const { data, error } = await supabaseServerClient(request)
            .from('product')
            .select()

        console.log(data)
        const products = JSON.stringify(greenhouse)
        return {
            status: 200,
            body: { products }
        };

}