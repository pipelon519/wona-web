// Product Database
const productsDB = {
    // DESAYUNOS
    'ds01': {
        name: 'Desayuno Mini',
        category: 'Desayunos',
        price: '$ 52.000',
        description: 'Un detalle pequeño pero lleno de sabor y elegancia. Perfecto para recordar a alguien especial que estás pensando en él/ella.',
        folder: 'Desayunos',
        images: ['ds01.jpeg', 'ds01-02.jpeg', 'ds01-03.jpg', 'ds01-04.jpg', 'ds01-05.jpg', 'ds01-06.jpg', 'ds01-07.jpg', 'ds01-08.jpg'],
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
    'ds02': {
        name: 'Desayuno Star',
        category: 'Desayunos',
        price: '$ 75.000',
        description: 'Para quienes merecen brillar desde el primer momento del día. Nuestro desayuno estrella con los mejores ingredientes.',
        folder: 'Desayunos',
        images: ['ds02.jpeg', 'ds02-02.jpg', 'ds02-03.jpg', 'ds02-04.jpg', 'ds02-05.jpg'],
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
    'ds03': {
        name: 'Desayuno Mix',
        category: 'Desayunos',
        price: '$ 85.000',
        description: 'Variedad de sabores para los gustos más exigentes. Una mezcla perfecta de dulce y salado.',
        folder: 'Desayunos',
        images: ['ds03.jpeg'],
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
    'ds04': {
        name: 'Desayuno Fiesta',
        category: 'Desayunos',
        price: '$ Consultar',
        description: '¡Celebra la vida! Ideal para cumpleaños y fechas especiales. Todo lo necesario para una mini fiesta en la cama.',
        folder: 'Desayunos',
        images: ['ds04.jpeg', 'ds04-02.jpg'],
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
    'ds05': {
        name: 'Desayuno Love',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Romance en cada bocado. Perfecto para aniversarios o simplemente para decir "Te Amo".',
        folder: 'Desayunos',
        images: ['ds05.jpeg', 'ds05-02.jpg', 'ds05-03.jpg', 'ds05-04.jpg'],
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
    'ds06': {
        name: 'Desayuno Feliz Día',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'La mejor manera de desear un gran día a esa persona especial. Energía positiva y buen gusto.',
        folder: 'Desayunos',
        images: ['ds06.jpeg'],
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
    },
    'ds07': {
        name: 'Desayuno Premium',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'La experiencia de desayuno más completa. Ideal para ocasiones muy especiales.',
        folder: 'Desayunos',
        images: ['ds07.jpg', 'ds07-02.jpg', 'ds07-03.jpg', 'ds07-04.jpg'],
        includes: [
            'Crepes de jamón y queso',
            'Arreglo con Flores',
            'Torta personal',
            'Huevos rancheros',
            'Jugo de naranja',
            'Chocolates',
            'Yogurt y cereal',
            'Mix de Frutos secos',
            'Fruta picada',
            'Milo',
            'Globos con helio',
            'Globo personalizado',
            'Bandeja de madera',
            'Decoración',
            'Tarjeta'
        ]
    },
    'ds08': {
        name: 'Desayuno Especial',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Un desayuno único para momentos únicos.',
        folder: 'Desayunos',
        images: ['ds08.jpg'],
        includes: [
            'Crepes de jamón y queso',
            'Jugo de naranja o Milo',
            'Torta personal',
            'Fruta picada',
            'Chocolatina',
            'Yogurt',
            'Globos',
            'Decoración',
            'Tarjeta'
        ]
    },
    'ds09': {
        name: 'Desayuno Deluxe',
        category: 'Desayunos',
        price: '$ Consultar',
        description: 'Lujo y sabor en una sola experiencia.',
        folder: 'Desayunos',
        images: ['ds09.jpg'],
        includes: [
            'Crepes de jamón y queso',
            'Jugo de naranja o Milo',
            'Torta personal',
            'Fruta picada',
            'Chocolates',
            'Yogurt y cereal',
            'Globos',
            'Decoración',
            'Tarjeta'
        ]
    },

    // FLORES
    'fl01': {
        name: 'Flores #01',
        category: 'Flores',
        price: '$ 100.000',
        description: 'Hermoso arreglo de 20 rosas frescas para ocasiones especiales.',
        folder: 'flores',
        images: ['fl01.jpeg'],
        includes: [
            '20 rosas frescas',
            'Tarjeta personalizada'
        ]
    },
    'fl02': {
        name: 'Flores #02',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Alegre girasol acompañado de dulces detalles y globos con helio.',
        folder: 'flores',
        images: ['fl02.jpeg'],
        includes: [
            '1 girasol fresco',
            'Paquete de gomitas',
            'Ferrero Rocher x4',
            '2 globos con helio'
        ]
    },
    'fl03': {
        name: 'Flores #03',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Hermoso arreglo de 10 flores frescas con tarjeta personalizada.',
        folder: 'flores',
        images: ['fl03.jpeg'],
        includes: [
            '10 flores frescas',
            'Tarjeta personalizada'
        ]
    },

    'fl06': {
        name: 'Flores #06',
        category: 'Flores',
        price: '$ 38.000',
        description: 'Detalle divertido y duradero con rosas eternas y carritos Hot Wheels.',
        folder: 'flores',
        images: ['fl06.jpg'],
        includes: [
            '3 carritos Hot Wheels',
            '3 rosas eternas de tela',
            'Tarjeta personalizada'
        ]
    },
    'fl10': {
        name: 'Flores #10',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Elegante arreglo de rosas con chocolates.',
        folder: 'flores',
        images: ['fl10.jpg', 'fl10-02.jpg'],
        includes: [
            '10 rosas frescas',
            'Ferrero Rocher x4',
            'Tarjeta personalizada'
        ]
    },
    'fl07': {
        name: 'Flores #07',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Detalle sencillo y especial con rosa eterna y Hot Wheels.',
        folder: 'flores',
        images: ['fl07.jpg'],
        includes: [
            '1 carro Hot Wheels',
            '1 rosa eterna',
            'Tarjeta personalizada'
        ]
    },
    'fl08': {
        name: 'Flores #08',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Radiantes girasoles con chocolates para alegrar el día.',
        folder: 'flores',
        images: ['fl08.jpg'],
        includes: [
            '3 girasoles frescos',
            'Ferrero Rocher x4',
            'Tarjeta personalizada'
        ]
    },
    'fl09': {
        name: 'Flores #09',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Dúo de girasoles con chocolates, el detalle perfecto.',
        folder: 'flores',
        images: ['fl09.jpg'],
        includes: [
            '2 girasoles frescos',
            'Ferrero Rocher x4',
            'Tarjeta personalizada'
        ]
    },
    'fl11': {
        name: 'Flores #11',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Detalle especial con rosas, chocolates y globo.',
        folder: 'flores',
        images: ['fl11.jpg'],
        includes: [
            '4 rosas frescas',
            '1 globo metalizado',
            '5 Ferrero Rocher',
            'Tarjeta personalizada'
        ]
    },
    'fl12': {
        name: 'Flores #12',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Hermosa combinación de rosas y girasol en caja rústica.',
        folder: 'flores',
        images: ['fl12.jpg'],
        includes: [
            'Caja de madera',
            '7 rosas frescas',
            '1 girasol fresco',
            'Mensaje personalizado'
        ]
    },
    'fl13': {
        name: 'Flores #13',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Elegancia duradera con rosas eternas.',
        folder: 'flores',
        images: ['fl13.jpg'],
        includes: [
            '6 rosas eternas',
            'Mensaje personalizado'
        ]
    },
    'fl14': {
        name: 'Flores #14',
        category: 'Flores',
        price: '$ Consultar',
        description: 'Detalle radiante con girasol y chocolates.',
        folder: 'flores',
        images: ['fl14.jpg'],
        includes: [
            '1 girasol fresco',
            'Ferrero Rocher x4',
            'Tarjeta personalizada'
        ]
    },

    // CAJAS
    'cj01': {
        name: 'Caja #01',
        category: 'Cajas',
        price: '$ Consultar',
        description: 'Caja sorpresa con dulces detalles.',
        folder: 'Cajas',
        images: ['cj01.jpeg'],
        includes: [
            'Caja decorada',
            'Dulces y snacks',
            'Tarjeta personalizada',
            'Decoración especial'
        ]
    },
    'cj02': {
        name: 'Caja #02',
        category: 'Cajas',
        price: '$ Consultar',
        description: 'Caja especial para sorprender.',
        folder: 'Cajas',
        images: ['cj02.jpg'],
        includes: [
            'Caja decorada',
            'Dulces y snacks',
            'Tarjeta personalizada',
            'Decoración especial'
        ]
    },

    // PELUCHES
    'pl01': {
        name: 'Peluche #01',
        category: 'Peluches',
        price: '$ Consultar',
        description: 'Tierno peluche para regalar.',
        folder: 'Peluches',
        images: ['pl01.jpg'],
        includes: [
            'Peluche de alta calidad',
            'Tarjeta personalizada',
            'Empaque especial'
        ]
    },
    'pl02': {
        name: 'Peluche #02',
        category: 'Peluches',
        price: '$ Consultar',
        description: 'Compañero perfecto para regalar amor.',
        folder: 'Peluches',
        images: ['pl02.jpg'],
        includes: [
            'Peluche de alta calidad',
            'Tarjeta personalizada',
            'Empaque especial'
        ]
    },
    'pl03': {
        name: 'Peluche #03',
        category: 'Peluches',
        price: '$ Consultar',
        description: 'Dulzura en forma de peluche.',
        folder: 'Peluches',
        images: ['pl03.jpg'],
        includes: [
            'Peluche de alta calidad',
            'Tarjeta personalizada',
            'Empaque especial'
        ]
    },

    // ANCHETAS
    'af01': {
        name: 'Ancheta #01',
        category: 'Anchetas',
        price: '$ Consultar',
        description: 'Ancheta especial con productos seleccionados.',
        folder: 'Anchetas',
        images: ['af01.jpg'],
        includes: [
            'Canasta decorada',
            'Productos seleccionados',
            'Tarjeta personalizada',
            'Decoración especial'
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
        document.getElementById('product-category').textContent = product.category;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        // Load images
        const mainImg = document.getElementById('product-img');
        const thumbnailGallery = document.getElementById('thumbnail-gallery');

        if (product.images && product.images.length > 0) {
            // Set main image
            const mainImagePath = `assets/${product.folder}/${product.images[0]}`;
            mainImg.src = mainImagePath;
            mainImg.alt = product.name;

            // Create thumbnails if there are multiple images
            if (product.images.length > 1) {
                product.images.forEach((imageName, index) => {
                    const imagePath = `assets/${product.folder}/${imageName}`;
                    const thumb = document.createElement('img');
                    thumb.src = imagePath;
                    thumb.alt = `${product.name} - Vista ${index + 1}`;
                    thumb.classList.add('thumbnail');
                    if (index === 0) thumb.classList.add('active');

                    thumb.addEventListener('click', () => {
                        mainImg.src = imagePath;
                        // Update active thumbnail
                        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });

                    thumbnailGallery.appendChild(thumb);
                });
            }
        }

        // Populate Includes List
        const includesList = document.getElementById('product-includes');
        product.includes.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            includesList.appendChild(li);
        });

        // Update WhatsApp Link
        const whatsappMsg = `Hola Wona, me interesa el ${product.name} que vi en su página web.`;
        const whatsappUrl = `https://wa.me/573009798063?text=${encodeURIComponent(whatsappMsg)}`;
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
