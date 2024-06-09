function toggleMenu() {
    const hamburgerMenu = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerMenu.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}