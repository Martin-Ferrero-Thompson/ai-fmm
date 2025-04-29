(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=localStorage.getItem("theme")||"light";document.documentElement.setAttribute("data-bs-theme",d);function u(){const a=window.location.pathname,s=`
    <nav class="navbar navbar-expand-custom navbar-dark" style="background-color: var(--navbar-background)">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMain">
          <ul class="navbar-nav justify-content-center flex-grow-1">
            <li class="nav-item">
              <a class="nav-link${a==="/"?" active":""}" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/about/")?" active":""}" href="/src/pages/about/">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/where-to-next/")?" active":""}" href="/src/pages/where-to-next/">Where To Next</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/sponsors/")?" active":""}" href="/src/pages/sponsors/">Sponsors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/ride-diary/")?" active":""}" href="/src/pages/ride-diary/">Ride Diary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/photos/")?" active":""}" href="/src/pages/photos/">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/faq/")?" active":""}" href="/src/pages/faq/">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/contact/")?" active":""}" href="/src/pages/contact/">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link${a.includes("/disclaimer/")?" active":""}" href="/src/pages/disclaimer/">Disclaimer</a>
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
  `;document.body.insertAdjacentHTML("afterbegin",s);const n=document.getElementById("themeToggle"),i=document.documentElement,e=localStorage.getItem("theme")||"light";if(i.setAttribute("data-bs-theme",e),n){const r=n.querySelector("i");r&&(r.className=e==="dark"?"bi bi-sun":"bi bi-moon-stars")}const t=document.querySelector(".navbar-toggler"),o=document.querySelector(".navbar");t==null||t.addEventListener("click",()=>{o==null||o.classList.toggle("show")}),n==null||n.addEventListener("click",()=>{const c=i.getAttribute("data-bs-theme")==="dark"?"light":"dark";i.setAttribute("data-bs-theme",c),localStorage.setItem("theme",c);const l=n.querySelector("i");l&&(l.className=c==="dark"?"bi bi-sun":"bi bi-moon-stars")})}function m(){document.body.insertAdjacentHTML("beforeend",`
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
  `);const s=document.getElementById("backToTop");s&&s.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",()=>{u(),m()});
