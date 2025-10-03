export class Product {
    productName: string;
    price: number;
    image: string;
    isChecked: boolean;

    constructor(productName: string, price: number, image: string, isChecked: boolean = false) {
        this.productName = productName;
        this.price = price;
        this.image = image;
        this.isChecked = isChecked;
    }
}