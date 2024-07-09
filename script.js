function toggleMenu() {
    const hamburgerMenu = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerMenu.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

function toggleYear(index) {

    // Remove selected-year class from all years
    // Each year has class 'year-0', 'year-1', 'year-2', 'year-3', 'year-4', 'year-5'
    const years = document.querySelectorAll('li[class^="year-"]');
    years.forEach((year) => {
        if (!year.classList.contains(`year-${index}`)) {
            year.classList.remove('selected-year');
        }
    });

    const year = document.querySelector(`.year-${index}`);
    year.classList.toggle('selected-year');
}