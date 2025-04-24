document.getElementById('donForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const amount = this.querySelector('input[type="number"]').value;
    const message = `Merci ${name} pour votre don de ${amount} € ! 🙏`;
    document.getElementById('merciMessage').textContent = message;
    this.reset();
  });
  