export function initializeFooter() {
  const footer = `
    <footer class="footer mt-auto py-3" style="background-color: var(--footer-background)">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8 offset-md-2 text-center">
            <p class="mb-0 text-light">Copyright &copy;2025 <span style="color: var(--brand-color)">Fleet Mucky Mayhem</span></p>
            <p class="mb-0 text-light">v2.0.0 Designed & Built by <span style="color: var(--brand-color)">The Spanish Mucky</span> and his Agentic Friends</p>
          </div>
          <div class="col-md-2 text-end">
            <button 
              class="btn btn-link p-0" 
              id="backToTop" 
              aria-label="Back to top"
              style="color: var(--brand-color); text-decoration: none;"
            >
              <i class="bi bi-arrow-up-circle-fill" style="font-size: 2rem;"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footer);

  // Add scroll to top functionality
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}