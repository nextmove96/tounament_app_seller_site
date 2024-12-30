function redirectToWhatsApp() {
    const phone = "9226418410";
    const message = "I want to make a tournament application";
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
function redirectToEmail() {
    const email = "mailto:tournamentappseller@gmail.com?subject=Tournament Application&body=I want to make a tournament application.";
    window.location.href = email;
}
function redirectToPhone() {
    const phone = "tel:9226418410";
    window.location.href = phone;
}
function toggleMenu() {
    const menuButtons = document.getElementById('menu-buttons');
    if (menuButtons.style.display === 'none' || menuButtons.style.display === '') {
        menuButtons.style.display = 'flex';
    } else {
        menuButtons.style.display = 'none';
    }
}