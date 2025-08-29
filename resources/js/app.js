import 'htmx.org'
import 'flowbite'

import Alpine from 'alpinejs'
import { animate } from "motion"
import { createIcons, PanelTopOpen, PanelBottomClose } from 'lucide';

//carrega os icones do lucide icons depois da chamada do elemento htmx
document.addEventListener('htmx:afterSwap', () => {
    createIcons({
    icons: {
      PanelTopOpen
    }
    });
})
createIcons({
  icons: {
    PanelTopOpen,
    PanelBottomClose
  }
});
window.animate = animate
window.Alpine = Alpine
Alpine.start()

