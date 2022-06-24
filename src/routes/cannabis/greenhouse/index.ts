import { greenhouse } from "$lib/assets/products/greenhouse";

export async function get() {
    const products = JSON.stringify(greenhouse)

    return {
        body: { products }
    }
}