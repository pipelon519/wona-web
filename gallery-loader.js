// Configuración de la galería automática
const galleryConfig = {
    // Lista de todas las imágenes - MEZCLADAS para apariencia dinámica
    images: [
        { src: 'assets/Desayunos/ds01.jpeg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Pequeño pero especial, ideal para comenzar el día con una sonrisa.' },
        { src: 'assets/flores/fl01.jpeg', caption: 'Flores #01', productId: 'fl01', description: 'Rosas frescas que expresan amor y admiración.' },
        { src: 'assets/Peluches/pl01.jpg', caption: 'Peluche #01', productId: 'pl01', description: 'Compañero suave y tierno para regalar cariño.' },
        { src: 'assets/Desayunos/ds02.jpeg', caption: 'Desayuno Star', productId: 'ds02', description: 'Para quienes brillan con luz propia cada mañana.' },
        { src: 'assets/flores/fl07.jpg', caption: 'Flores #07', productId: 'fl07', description: 'Colores vibrantes que alegran cualquier espacio.' },
        { src: 'assets/Desayunos/ds01-02.jpeg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Detalle perfecto para sorprender en cualquier ocasión.' },
        { src: 'assets/Cajas/cj01.jpeg', caption: 'Caja #01', productId: 'cj01', description: 'Sorpresa dulce llena de amor y detalles especiales.' },
        { src: 'assets/flores/fl02.jpeg', caption: 'Flores #02', productId: 'fl02', description: 'Elegancia natural que nunca pasa de moda.' },
        { src: 'assets/Desayunos/ds03.jpeg', caption: 'Desayuno Mix', productId: 'ds03', description: 'Variedad deliciosa para los paladares más exigentes.' },
        { src: 'assets/Peluches/pl02.jpg', caption: 'Peluche #02', productId: 'pl02', description: 'Abrazo eterno en forma de peluche adorable.' },
        { src: 'assets/Desayunos/ds02-02.jpg', caption: 'Desayuno Star', productId: 'ds02', description: 'Energía y sabor para empezar el día brillando.' },
        { src: 'assets/flores/fl08.jpg', caption: 'Flores #08', productId: 'fl08', description: 'Belleza natural que cautiva a primera vista.' },
        { src: 'assets/Desayunos/ds04.jpeg', caption: 'Desayuno Fiesta', productId: 'ds04', description: '¡Celebración desde la primera mordida del día!' },
        { src: 'assets/flores/fl03.jpeg', caption: 'Flores #03', productId: 'fl03', description: 'Clásico atemporal que siempre enamora.' },
        { src: 'assets/Desayunos/ds01-03.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Amor en cada detalle, perfección en cada bocado.' },
        { src: 'assets/Anchetas/af01.jpg', caption: 'Ancheta #01', productId: 'af01', description: 'Selección especial de productos para consentir.' },
        { src: 'assets/Desayunos/ds05.jpeg', caption: 'Desayuno Love', productId: 'ds05', description: 'Puro amor servido en una bandeja especial.' },
        { src: 'assets/flores/fl09.jpg', caption: 'Flores #09', productId: 'fl09', description: 'Frescura y elegancia en perfecta armonía.' },
        { src: 'assets/Peluches/pl03.jpg', caption: 'Peluche #03', productId: 'pl03', description: 'Dulzura infinita para regalar sonrisas.' },
        { src: 'assets/Desayunos/ds02-03.jpg', caption: 'Desayuno Star', productId: 'ds02', description: 'Brilla con este desayuno lleno de estrellas.' },
        { src: 'assets/flores/fl05.jpg', caption: 'Flores #05', productId: 'fl05', description: 'Arreglo colorido que ilumina cualquier momento.' },
        { src: 'assets/Desayunos/ds06.jpeg', caption: 'Desayuno Feliz Día', productId: 'ds06', description: 'La mejor forma de desear un día maravilloso.' },
        { src: 'assets/Cajas/cj02.jpg', caption: 'Caja #02', productId: 'cj02', description: 'Caja mágica llena de sorpresas dulces.' },
        { src: 'assets/Desayunos/ds01-04.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Pequeño gesto, gran impacto en el corazón.' },
        { src: 'assets/flores/fl10.jpg', caption: 'Flores #10', productId: 'fl10', description: 'Delicadeza y sofisticación en cada pétalo.' },
        { src: 'assets/Desayunos/ds07.jpg', caption: 'Desayuno Premium', productId: 'ds07', description: 'Experiencia gourmet para paladares especiales.' },
        { src: 'assets/flores/fl06.jpg', caption: 'Flores #06', productId: 'fl06', description: 'El lenguaje perfecto del amor en flores.' },
        { src: 'assets/Desayunos/ds04-02.jpg', caption: 'Desayuno Fiesta', productId: 'ds04', description: 'Celebra cada momento con este desayuno festivo.' },
        { src: 'assets/flores/fl11.jpg', caption: 'Flores #11', productId: 'fl11', description: 'Arreglo único para momentos inolvidables.' },
        { src: 'assets/Desayunos/ds05-02.jpg', caption: 'Desayuno Love', productId: 'ds05', description: 'Amor verdadero en cada detalle romántico.' },
        { src: 'assets/flores/fl12.jpg', caption: 'Flores #12', productId: 'fl12', description: 'Suavidad y belleza en un solo arreglo.' },
        { src: 'assets/Desayunos/ds01-05.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Sorpresa matutina que alegra el corazón.' },
        { src: 'assets/Desayunos/ds08.jpg', caption: 'Desayuno Especial', productId: 'ds08', description: 'Único y especial, como la persona que lo recibe.' },
        { src: 'assets/flores/fl13.jpg', caption: 'Flores #13', productId: 'fl13', description: 'Expresa tus sentimientos con este hermoso arreglo.' },
        { src: 'assets/Desayunos/ds02-04.jpg', caption: 'Desayuno Star', productId: 'ds02', description: 'Desayuno estelar para personas extraordinarias.' },
        { src: 'assets/flores/fl10-02.jpg', caption: 'Flores #10', productId: 'fl10', description: 'Elegancia refinada en cada detalle floral.' },
        { src: 'assets/Desayunos/ds07-02.jpg', caption: 'Desayuno Premium', productId: 'ds07', description: 'Lujo y sabor en una experiencia única.' },
        { src: 'assets/flores/fl14.jpg', caption: 'Flores #14', productId: 'fl14', description: 'Armonía perfecta de color y elegancia.' },
        { src: 'assets/Desayunos/ds05-03.jpg', caption: 'Desayuno Love', productId: 'ds05', description: 'Demuestra tu amor con este regalo perfecto.' },
        { src: 'assets/Desayunos/ds01-06.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Detalle encantador para comenzar bien el día.' },
        { src: 'assets/Desayunos/ds09.jpg', caption: 'Desayuno Deluxe', productId: 'ds09', description: 'Lujo absoluto en cada bocado delicioso.' },
        { src: 'assets/Desayunos/ds02-05.jpg', caption: 'Desayuno Star', productId: 'ds02', description: 'Brilla intensamente con este desayuno especial.' },
        { src: 'assets/Desayunos/ds07-03.jpg', caption: 'Desayuno Premium', productId: 'ds07', description: 'Calidad premium para momentos premium.' },
        { src: 'assets/Desayunos/ds05-04.jpg', caption: 'Desayuno Love', productId: 'ds05', description: 'Amor servido con dedicación y cariño.' },
        { src: 'assets/Desayunos/ds01-07.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Pequeña muestra de gran afecto.' },
        { src: 'assets/Desayunos/ds07-04.jpg', caption: 'Desayuno Premium', productId: 'ds07', description: 'Excelencia en cada elemento del desayuno.' },
        { src: 'assets/Desayunos/ds01-08.jpg', caption: 'Desayuno Mini', productId: 'ds01', description: 'Detalle perfecto para recordar que piensas en alguien especial.' }
    ]
};

// Función para cargar la galería automáticamente
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');

    if (!galleryGrid) {
        console.error('No se encontró el contenedor de la galería');
        return;
    }

    // Limpiar galería existente (opcional)
    // galleryGrid.innerHTML = '';

    // Crear elementos de galería para cada imagen
    galleryConfig.images.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-caption', image.caption);

        // Agregar data-id si existe
        if (image.productId) {
            galleryItem.setAttribute('data-id', image.productId);
        }

        // Agregar descripción personalizada
        if (image.description) {
            galleryItem.setAttribute('data-description', image.description);
        }

        // Crear estructura HTML
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fa-solid fa-heart"></i>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });

    console.log(`✅ Galería cargada: ${galleryConfig.images.length} imágenes`);
}

// Cargar galería cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadGallery);
