import { greenhouse } from "$lib/assets/products/greenhouse";

export async function get({params}) {
    let item;

    console.log(params.title)

    for(let i=0; i<greenhouse.length; i++) {
        if(greenhouse[i].title === params.title) {
            item = greenhouse[i]
            break;
        }
    }
    
    const product = JSON.stringify(item)

    return {
        body: product
    }
}