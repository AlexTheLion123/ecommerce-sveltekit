import {derived, writable} from 'svelte/store'

const cart = writable({numItems: 0, totalAmount: 0})
export const numItems = derived(cart, $cart => $cart.numItems)
export const totalAmount = derived(cart, $cart => $cart.totalAmount)

export const user = writable({});
