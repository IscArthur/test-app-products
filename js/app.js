class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
			<div class="card text-center mb-4">
				<div class="card-body">
					<strong>Producto: </strong> ${product.name}
					<strong>Precio: </strong> ${product.price}
					<strong>Año: </strong> ${product.year}
					<a href="#" class="btn btn-danger" name="borrar"> Borrar</a>
				</div>
			</div>
		`;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'borrar') {
            console.log(element.parentElement);
        }
    }

    showMessage() {}
}
//Eventos DOM(Document Objet Mode)
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault(); // se utiliza para evitar que se realice el refresh despues del post que es la accion a realizar
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    // console.log(name, price, year);
    // console.log(new Product(name, price, year));
    const product = new Product(name, price, year);
    const uI = new UI();
    uI.addProduct(product);
    uI.resetForm();
});
document.getElementById('product-list').addEventListener('click', function(e) {
    // alert('Eliminando Producto');
    // console.log(e.target);
    const ui = new UI();
    ui.deleteProduct(e.target);
});
