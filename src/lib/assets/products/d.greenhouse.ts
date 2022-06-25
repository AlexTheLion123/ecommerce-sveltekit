export type greenhouse = {
    name: string;
    desc: string;
    price: number;
    inventory: number;
    discount_percent: number | null;
    discount_expiry: number | null;
    category: string;
    strain: string;
    average_rating: number | null;
    num_reviews: number;
}