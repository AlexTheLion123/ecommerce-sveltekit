import { supabaseServerClient } from '@supabase/auth-helpers-sveltekit';

export async function get({ request, url }) {
    let { data, error } = await supabaseServerClient(request)
        .rpc('getproductbyid', { p_id: url.searchParams.get('id') })
    
    const product = data[0]
    const images = product.images.substring(1).substring(-1)
    product.images = images.split(",")
    
    return {
        status: 200,
        headers: {
            'cache-control': 'public, max-age=3600'
        },
        body: { product }
    };
}