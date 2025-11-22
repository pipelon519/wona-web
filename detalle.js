// Product Database
const productsDB = {
    'ds01': {
        name: 'Desayuno Mini',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Un detalle pequeño pero lleno de sabor y elegancia. Perfecto para recordar a alguien especial que estás pensando en él/ella.',
        image: 'assets/ds01.jpeg',
        includes: [
            'Crepes de jamón y queso',
            'Jugo de naranja o Milo',
            'Yogurt',
            'Fruta picada',
            'Chocolatina o gomitas',
            'Tarjeta personalizada',
            'Globos',
            'Caja de madera decorada'
        ]
    },

    'ds03': {
        name: 'Desayuno Star',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Para quienes merecen brillar desde el primer momento del día. Nuestro desayuno estrella con los mejores ingredientes.',
        image: 'assets/ds03.jpeg',
        includes: [
            'Crepes de jamón y queso',
            'Milo o Jugo de naranja',
            'Torta personal',
            'Huevos rancheros',
            'Yogurt',
            'Fruta picada',
            'Chocolatina',
            '3 Globos con helio',
            'Globo metalizado',
            'Caja de madera decorada'
        ]
    },
    'ds04': {
        name: 'Desayuno Mix',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Variedad de sabores para los gustos más exigentes. Una mezcla perfecta de dulce y salado.',
        image: 'assets/ds04.jpeg',
        includes: [
            'Crepes o Sándwich',
            'Milo frío o caliente',
            'Chocolates',
            'Mix de frutas',
            'Mini Nutella',
            'Yogurt y Cereal',
            'Maní La Especial grande (200gr)',
            'Chocolatina',
            'Maní Moto',
            '1 Globo burbuja personalizado',
            'Tarjeta',
            'Caja de madera',
            'Decoración'
        ]
    },
    'ds05': {
        name: 'Desayuno Fiesta',
        category: 'Desayunos',
        price: '$ Consultar',
        description: '¡Celebra la vida! Ideal para cumpleaños y fechas especiales. Todo lo necesario para una mini fiesta en la cama.',
        image: 'assets/ds05.jpeg',
        includes: [
            'Crepes o Sándwich',
            'Jugo de naranja o Milo',
            'Torta personal',
            'Fruta picada',
            'Chocolatina',
            'Yogurt y cereal',
            '3 Globos con helio',
            'Globo metalizado',
            'Caja de madera',
            'Decoración'
        ]
    },
    'ds06': {
        name: 'Desayuno Love',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Romance en cada bocado. Perfecto para aniversarios o simplemente para decir "Te Amo".',
        image: 'assets/ds06.jpeg',
        includes: [
            'Crepes de jamón y queso',
            'Jugo de naranja',
            'Brownie',
            'Mix de frutos secos',
            'Torta personal',
            'Mix de Frutas',
            'Milo',
            'Gomitas o papas',
            '8 Globos con helio',
            '1 Globo personalizado',
            'Tarjeta',
            'Caja de madera hexagonal',
            'Decoración'
        ]
    },

    'ds08': {
        name: 'Desayuno Feliz Día',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'La mejor manera de desear un gran día a esa persona especial. Energía positiva y buen gusto.',
        image: 'assets/ds08.jpeg',
        includes: [
            'Crepes de jamón y queso',
            'Arreglo con Flores pequeño',
            'Torta personal',
            'Huevos rancheros',
            'Jugo de naranja',
            'Chocolates M&M',
            'Yogurt y cereal',
            'Mix de Frutos secos',
            'Fruta picada',
            'Milo',
            '6 Globos con helio',
            '1 globo burbuja',
            'Bandeja de madera',
            'Decoración',
            'Tarjeta'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && productsDB[productId]) {
        const product = productsDB[productId];

        // Update DOM elements
        document.title = `${product.name} | Wona`;
        document.getElementById('product-img').src = product.image;
        document.getElementById('product-img').alt = product.name;
        document.getElementById('product-category').textContent = product.category;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        // Populate Includes List
        const includesList = document.getElementById('product-includes');
        product.includes.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            includesList.appendChild(li);
        });

        // Update WhatsApp Link
        const whatsappMsg = `Hola Wona, me interesa el ${product.name} que vi en su página web.`;
        const whatsappUrl = `https://wa.me/573009798063?text=${encodeURIComponent(whatsappMsg)}`; // Updated number
        document.getElementById('whatsapp-btn').href = whatsappUrl;

    } else {
        // Product not found handling
        document.querySelector('.product-detail-section .container').innerHTML = `
            <div class="text-center">
                <h2>Producto no encontrado</h2>
                <p>Lo sentimos, el producto que buscas no existe.</p>
                <a href="productos.html" class="btn-primary" style="margin-top: 1rem;">Volver al catálogo</a>
            </div>
        `;
    }
});
