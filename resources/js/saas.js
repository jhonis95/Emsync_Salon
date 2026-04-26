import htmx from 'htmx.org'
import Alpine from 'alpinejs'
import { animate, stagger } from 'motion'

document.addEventListener('alpine:init',()=>{
    Alpine.store('portal',{
        portalPage:'Home',

        setPortalPage(title, link){
            this.portalPage = title;

            // 2. Dispara a requisição HTMX via JS
            // htmx.ajax(método, URL, contexto)
            htmx.ajax('GET', link, {
                target: '#main-content',
                swap: 'innerHTML'
            });
        }
    })
})

window.Alpine = Alpine
window.Animate = animate
window.htmx = htmx

Alpine.start()