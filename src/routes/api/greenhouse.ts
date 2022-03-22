import { greenhouse } from "$lib/assets/products/greenhouse";

export async function get() {
    const filtered = greenhouse.map(item => {
        return {
            title: item.title,
            imgSrc: item.imgSrc,
            price: item.price,
            discount: item.discount,
            discountDeadline: item.discountDeadline,
            description: item.description,
            numReviews: item.numReviews,
            aveReviews: item.aveReviews,
            strain: item.strain
        }
    })

    console.log(filtered)

    const items = JSON.stringify(filtered)

    return {
        body: items
    }
}