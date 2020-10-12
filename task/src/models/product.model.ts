import {ProductInterface} from '../interfaces/product';

export class Product implements ProductInterface {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
}
