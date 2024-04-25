// Light and Dark Mode switch

const toggleTheme = () => {
    if (mode === 'dark' || mode === null) {
        mode = 'light';
    }
    else {
        mode = 'dark';
    }
    localStorage.setItem('themeMode', mode)
}
const setTheme = (theme) => {
    body.setAttribute('class', theme);
}

const themeSwitcher = document.querySelector('#theme-switcher');
const body = document.querySelector('body');

let mode = localStorage.getItem('themeMode') || 'dark';
setTheme(mode);
themeSwitcher.addEventListener('click', () => {
    toggleTheme()
    setTheme(mode)
});