// Immediately set theme from localStorage to prevent flash of wrong theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', savedTheme);