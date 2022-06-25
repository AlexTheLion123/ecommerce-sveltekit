import {
    supabaseServerClient,
} from '@supabase/auth-helpers-sveltekit';

export async function get({ request, url }) {
    // Run queries with RLS on the server
    const strain = getStrain(url)

    const { data: products, error } = await supabaseServerClient(request)
        .rpc('getproductsbycat6', { p_category: strain })

    return {
        status: 200,
        headers: {
            'cache-control': 'public, max-age=3600'
        },
        body: { products }
    };

}

function getStrain(url) {
    const path = url.pathname
    const arr = path.split('/')
    return arr[arr.length - 1]
}    