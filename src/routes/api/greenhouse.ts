import { greenhouseItems } from "$lib/assets/greenhouseItems";

export async function get() {
    const items = JSON.stringify(greenhouseItems)

    return {
        body: items
    }
}