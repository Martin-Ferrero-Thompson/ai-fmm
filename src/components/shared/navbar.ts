// navbar.ts
export function initializeNavbar() {
  const currentPath = window.location.pathname;

  const navbarHtml = `
    <nav class="navbar navbar-expand-custom navbar-dark" style="background-color: var(--navbar-background)">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav justify-content-center flex-grow-1">
            <li class="nav-item">
              <a class="nav-link${currentPath === '/' ? ' active' : ''}" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/about/') ? ' active' : ''}" href="/src/pages/about/">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/where-to-next/') ? ' active' : ''}" href="/src/pages/where-to-next/">Where To Next</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/sponsors/') ? ' active' : ''}" href="/src/pages/sponsors/">Sponsors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/ride-diary/') ? ' active' : ''}" href="/src/pages/ride-diary/">Ride Diary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/photos/') ? ' active' : ''}" href="/src/pages/photos/">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/faq/') ? ' active' : ''}" href="/src/pages/faq/">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/contact/') ? ' active' : ''}" href="/src/pages/contact/">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${currentPath.includes('/disclaimer/') ? ' active' : ''}" href="/src/pages/disclaimer/">Disclaimer</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <button class="btn ms-2" id="themeToggle" aria-label="Toggle theme" style="color: var(--brand-color); border: none; background: none; padding: 0.5rem;">
                <i class="bi bi-moon-stars"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHtml);

  // Theme toggle functionality with persistence
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = savedTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
    }
  }
  
  // Add toggle behavior for custom navbar
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarElement = document.querySelector('.navbar') as HTMLElement;
  
  navbarToggler?.addEventListener('click', () => {
    navbarElement?.classList.toggle('show');
  });
  
  themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = newTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
    }
  });
}