document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption-text');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Abrir Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const caption = this.getAttribute('data-caption');
            const productId = this.getAttribute('data-id');
            const lightboxDesc = document.getElementById('lightbox-description');
            const lightboxBtn = document.getElementById('lightbox-btn');

            if (img) {
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption ? caption.split(' - ')[0] : 'Creación Wona';

                // Set description based on caption or default
                if (caption && caption.includes(' - ')) {
                    lightboxDesc.textContent = caption.split(' - ')[1];
                } else {
                    lightboxDesc.textContent = 'Una creación única hecha con amor para sorprender.';
                }

                // Configure button
                if (productId) {
                    lightboxBtn.style.display = 'inline-block';
                    lightboxBtn.href = `detalle.html?id=${productId}`;
                } else {
                    lightboxBtn.style.display = 'none';
                }

                lightbox.classList.add('active');
                lightbox.style.display = 'flex';
            }
        });
    });

    // Cerrar Lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.style.display = 'none';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
