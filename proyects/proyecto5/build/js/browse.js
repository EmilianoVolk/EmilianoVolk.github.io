function mostarImagenes(){document.querySelectorAll(".browse-images-container").forEach(e=>{for(let t=0;t<15;t++)if(t%2==0){const t=document.createElement("LI");t.classList.add("image-container");const o=document.createElement("IMG");o.src="https://occ-0-1479-1480.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbXUZU9H2TsbvPUx5cxVbmk0i-VlaFWske3mQtmHIZCHntBroi2H1ioacsslOAGmEeYVsUCdwMAfwHEE_Hmy0FDeVXN12s2TmJGRuFsyU-3LZgrOOkKs9DhD5-jsqJWI_tJEWbBNXB8WAeYbPTHX46NjORelm4zp9aKguzaz9lmFbMBNVZgJskBFPXQUthNlyyeZj-obPwg6rStE9dR57A80C1Ipgow6SeFc0gs8Rn4kL2t3PVHgaG6M9J8GRcU9VJ56yHAlkQ8jqAXWuQT7xB0lVdLvk8zTmfJiXWffehRQm18EE-zvlgl00F6fFpYJMoJrkvvpeAAeQJCWpISkGaYDUC0PPlX1wvofphUKTqMs-UQyhFgoOfQ.jpg?r=b43",o.alt="Tittle image",o.loading="lazy",o.classList.add("imagen-portada"),t.appendChild(o),e.appendChild(t),t.addEventListener("mouseover",()=>{t.classList.add("prueba")}),t.addEventListener("mouseout",()=>{t.classList.remove("prueba")})}else{const t=document.createElement("LI");t.classList.add("image-container");const o=document.createElement("IMG");o.src="https://occ-0-1479-1480.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTeXjMB7Lazb4UDTHLR6EfYaU1Qx0mMqdAeja0OhZQzvf_8FmWl8Z0yNRFCMlJ96F8h-WMlaBTJEsNgsaLOGTmriEVJ7p6GXANTirYp-BNjz2OlE-xAOlOdxqo9xVF1WwslQWg.jpg?r=4ca",o.alt="Tittle image",o.loading="lazy",o.classList.add("imagen-portada"),t.appendChild(o),e.appendChild(t),t.addEventListener("mouseover",()=>{t.classList.add("prueba")}),t.addEventListener("mouseout",()=>{t.classList.remove("prueba")})}})}function hoverImage(){document.querySelectorAll(".image-container").forEach(e=>{const t=document.createElement("DIV");t.classList.add("div-info"),t.textContent="Texto de ejemplo",t.role="dialog",e.addEventListener("mouseover",()=>{e.appendChild(t),t.classList.add("show")}),e.addEventListener("mouseout",()=>{e.classList.remove("big-info"),e.removeChild(t),t.classList.remove("show")})})}function ocultarBarraDesplazamiento(){var e=document.querySelector(".browse-images-container"),t=document.querySelector(".browse-images-container li").scrollWidth,o=e.clientWidth;if(t>o){var s=t-o;e.style.paddingRight=s+"px"}else e.style.paddingRight="0"}function boton(){document.querySelectorAll(".browse-images-container").forEach(e=>{const t=e.nextElementSibling,o=e.previousElementSibling;t.addEventListener("click",()=>{const t=e.offsetWidth;e.scrollBy({left:t,behavior:"smooth"}),e.scrollLeft+t>=e.scrollWidth&&e.scrollBy({left:-e.scrollWidth,behavior:"smooth"})}),o.addEventListener("click",()=>{const t=e.offsetWidth;e.scrollBy({left:-t,behavior:"smooth"}),e.scrollLeft<=0&&(console.log("scrollContainer.scrollLeft"),e.scrollBy({left:e.scrollWidth,behavior:"smooth"}))})})}function fixedNav(){const e=document.querySelector(".browse-nav");window.addEventListener("scroll",()=>{const t=e.scrollHeight,o=window.scrollY;t>157?e.classList.remove("fixed"):o>t?e.classList.add("fixed"):e.classList.remove("fixed")})}function animations(){const e=document.querySelector(".notification-icon");e.classList.remove("animate__animated","animate__fadeIn"),setTimeout(()=>{e.classList.add("animate__animated","animate__fadeIn")},100)}document.addEventListener("DOMContentLoaded",()=>{mostarImagenes(),boton(),fixedNav(),animations()});
//# sourceMappingURL=browse.js.map
