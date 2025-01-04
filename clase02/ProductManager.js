class Product {
    constructor(name, price, thumbnail, code, stock) {
        this.name = name;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code || this.autamticId(); // Usar código único si no se proporciona
        this.stock = stock;
    }

    autamticId() {
        return Math.random().toString(36).substr(2, 9);
    }
}



class ProductManager {
    
    constructor() {
        this.products = [];
    }


    addProduct(product) {
        if(this.products.some(p=>(p.code == product.code)))
        {
            throw new Error("El producto ya existe");
        }
        else
        {
            this.products.push(product);
        }
    }
    getProducts() {
        return this.products;
    }


    getProductByCode(code){
       const index= this.products.findIndex(p=>p.code==code);
       return this.products[index];
    }
}
module.exports =
{
    Product,
    ProductManager
} 