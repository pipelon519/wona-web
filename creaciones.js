// Lightbox functionality with navigation
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaptionText = document.getElementById('lightbox-caption-text');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxBtn = document.getElementById('lightbox-btn');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    let galleryItems = [];

    // Wait for gallery to load, then attach click events
    setTimeout(() => {
        galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                openLightbox(item);
            });
        });
    }, 500);

    function openLightbox(item) {
        const img = item.querySelector('img');
        const caption = item.getAttribute('data-caption') || 'Creación Wona';
        const productId = item.getAttribute('data-id');
        const description = item.getAttribute('data-description') || 'Una creación única hecha con amor.';

        lightboxImg.src = img.src;
        lightboxCaptionText.textContent = caption;
        lightboxDescription.textContent = description;

        // Show or hide product button
        if (productId) {
            lightboxBtn.style.display = 'inline-block';
            lightboxBtn.href = `detalle.html?id=${productId}`;
        } else {
            lightboxBtn.style.display = 'none';
        }

        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openLightbox(galleryItems[currentIndex]);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openLightbox(galleryItems[currentIndex]);
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
});
