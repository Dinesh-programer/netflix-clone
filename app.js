document.addEventListener('DOMContentLoaded', function() {
    const myListButton = document.querySelector('.banner__buttons button:last-child'); // Select the "My List" button

    if (myListButton) {
        myListButton.addEventListener('click', function() {
            window.location.href = 'carousel.html'; // Navigate to carousel.html
        });
    }
});
