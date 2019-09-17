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
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto Eliminado', 'warning');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        // div.className = 'alert alert-' + cssClass; forma antigua en JS
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        document.querySelector('#app');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
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
    if (name === '' || price === '' || year === '') {
        return uI.showMessage('Faltan datos en el Formulario', 'danger');
    }
    uI.addProduct(product);
    uI.resetForm();
    uI.showMessage('Producto Agregado', 'success');
});
document.getElementById('product-list').addEventListener('click', function(e) {
    // alert('Eliminando Producto');
    // console.log(e.target);
    const ui = new UI();
    ui.deleteProduct(e.target);
});
