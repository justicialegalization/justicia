// translate.js
document.addEventListener('DOMContentLoaded', () => {

    // Funkcija za promjenu jezika
    function changeLang(lang) {
        document.querySelectorAll('.lang').forEach(el => {
            el.style.display = (el.dataset.lang === lang) ? 'inline' : 'none';
        });
        // Spremi odabrani jezik u localStorage
        localStorage.setItem('siteLang', lang);
    }

    // Ako postoji dropdown na stranici, poveži dugmad
    const dropdownLinks = document.querySelectorAll('.translate-dropdown a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('onclick').match(/'(\w+)'/)[1];
            changeLang(lang);
        });
    });

    // Učitaj jezik iz localStorage pri svakom učitavanju stranice
    const savedLang = localStorage.getItem('siteLang') || 'ME';
    changeLang(savedLang);
});