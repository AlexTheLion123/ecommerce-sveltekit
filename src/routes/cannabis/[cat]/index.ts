import {
    supabaseServerClient,
} from '@supabase/auth-helpers-sveltekit';

export async function get({ request, url }) {
    // Run queries with RLS on the server
    const strain = getStrain(url)

    let { data: products, error } = await supabaseServerClient(request)
        .rpc('getproductsbycategory2', { p_category: strain })


	products = products.map(item => {
        const images = item.images.substring(1).substring(-1)
        const imagesArr = images.split(",")
	    item.img_src = imagesArr[0]
        return item
    })

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