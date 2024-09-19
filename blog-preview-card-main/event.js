
    const card = document.getElementById('myCard');
    const cardTitle = card.querySelector('.card-title');

    card.addEventListener('mouseenter', () => {
        cardTitle.style.color = 'hsl(47, 88%, 63%)'; // Cambia el color al pasar el ratón
    });

    card.addEventListener('mouseleave', () => {
        cardTitle.style.color = ''; // Restablece el color al salir
    });
