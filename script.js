// Funkcja zmieniająca tło strony po kliknięciu przycisku
document.getElementById('change-background').addEventListener('click', function() {
    const colors = ['#FFEB3B', '#2196F3', '#F44336', '#9C27B0', '#4CAF50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Obsługa formularza kontaktowego
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Dziękujemy za kontakt, ${name}! Formularz został wysłany.`);
    } else {
        alert('Proszę uzupełnić wszystkie pola!');
    }
});
