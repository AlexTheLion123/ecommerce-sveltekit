import { greenhouse } from "$lib/assets/products/greenhouse";

export async function get() {
    const items = JSON.stringify(greenhouse)

    // TODO only get certain rows

    return {
        body: items
    }
}