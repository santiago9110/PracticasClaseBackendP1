const { Product, ProductManager } = require("./ProductManager.js");

const productManager = new ProductManager();

const product1 = new Product("Producto 1", 100, "https://www.google.com", null, 10);
const product2 = new Product("Producto 2", 200, "https://www.google.com", null, 20);
const product3 = new Product("Producto 3", 300, "https://www.google.com", null, 30);

try {
    productManager.addProduct(product1);
    productManager.addProduct(product2);
    productManager.addProduct(product3);

    console.log("Productos agregados correctamente:", productManager.getProducts());



    console.log("Producto por código:", productManager.getProductByCode(product1.code));    
} catch (error) {
    console.error("Error:", error.message);
}
