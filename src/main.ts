// Import styles
import './style.css'

// Import custom components
import { initializeNavbar } from './components/shared/navbar'
import { initializeFooter } from './components/shared/footer'

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  initializeNavbar()
  initializeFooter()
})
