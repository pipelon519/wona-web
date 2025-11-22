document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption-text');
    const lightboxLink = document.getElementById('lightbox-link');
    const closeBtn = document.querySelector('.lightbox-close');

    // Open Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const caption = item.getAttribute('data-caption');
            const productId = item.getAttribute('data-id');

            // Set Image
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

            // Set Caption
            lightboxCaption.textContent = caption;

            // Set Link
            if (productId) {
                lightboxLink.href = `detalle.html?id=${productId}`;
                lightboxLink.style.display = 'inline-block';
            } else {
                lightboxLink.style.display = 'none';
            }

            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close Lightbox Function
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close on Button Click
    closeBtn.addEventListener('click', closeLightbox);

    // Close on Outside Click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
