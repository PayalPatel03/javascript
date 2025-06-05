const swiper = new Swiper('.trending-swiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    grabCursor: true,
    breakpoints: {
      0: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 }
    }
  });

  //modal
  document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.addEventListener('click', () => {
    const title = slide.getAttribute('data-title');
    const description = slide.getAttribute('data-description');
    const image = slide.getAttribute('data-image');

    document.getElementById('trendingModalLabel').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = image;

    // Show Bootstrap Modal
    const modal = new bootstrap.Modal(document.getElementById('trendingModal'));
    modal.show();
  });
});
