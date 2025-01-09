const products = { 
    1: { name: "Laptop" , price: 1000, stock: 5 }, 
    2: { name: "Mouse" , price: 20, stock: 10 }, 
    3: { name: "Keyboard" , price: 50, stock: 0 }, };

function checkStock (productId, quantity) {
    return new Promise ((resolve, reject) => {
        let product = products[productId];

        if (quantity <= product.stock) {
                resolve(`Stock disponible para el producto ${productId}`);
            } else {
                reject(`Stock insuficiente para el producto ${productId}`)
            }
    });
}

function calculateTotal (productId, quantity) {
    return new Promise ((resolve) => {
        let product = products[productId];

        total = product.price * quantity;

        resolve(`Total para ${quantity} unidades de ${productId}: ${total}`)
    });
}

function confirmOrder (productId) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(`Pedido confirmado para el producto ${productId}`);
        }, 2000);
    });
}


let id = 2;
let quantity = 5;

checkStock(id, quantity)
    .then((mensaje) => {
        console.log(mensaje);
        return calculateTotal(id, quantity);
    })
    .then((mensaje) => {
        console.log(mensaje);
        return confirmOrder(id);
    })
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));