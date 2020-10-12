import {ProductInterface} from '../interfaces/product';

export class Product implements ProductInterface {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;

    constructor(id: number, name: string, description: string, rating: number, image: string, promo: boolean, active: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.image = image;
        this.promo = promo;
        this.active = active;
    }

}
