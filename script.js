document.getElementById('donForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const amount = this.querySelector('input[type="number"]').value;
    const message = `Merci ${name} pour votre don de ${amount} € ! 🙏`;
    document.getElementById('merciMessage').textContent = message;
    this.reset();
  });

<script>
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
      const fullImg = img.dataset.full;
      lightboxImg.src = fullImg;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
</script>
