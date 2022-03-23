import { greenhouse } from "$lib/assets/products/greenhouse";

export async function get() {
    const items = JSON.stringify(greenhouse)

    return {
        body: items
    }
}