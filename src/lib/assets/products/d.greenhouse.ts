export type greenhouse = {
    name: string;
    desc: string;
    price: number;
    discount_percent: number | null;
    discount_expiry: number | null;
    category: string;
    sub_category: string;
    inventory: number;
}