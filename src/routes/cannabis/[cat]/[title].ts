import { supabaseServerClient } from '@supabase/auth-helpers-sveltekit';

import type { greenhouse } from '$lib/assets/products/d.greenhouse';

export async function get({request, url}) {
    let { data: product, error} = await supabaseServerClient(request)
    .from('product')
    .select('*')
    .eq('id',parseInt(url.searchParams.get('id')))
    console.log(product);
    
    return {
        status: 200,
        headers: {
            'cache-control': 'public, max-age=3600'
        },
        body: { product }
    };
}