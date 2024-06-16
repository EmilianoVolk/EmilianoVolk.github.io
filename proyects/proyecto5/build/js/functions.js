function showMoreInfo(){document.querySelectorAll(".image-container img").forEach(e=>{e.addEventListener("click",async()=>{const t=document.body;t.classList.add("fixed");const a=createDiv("overlay");t.appendChild(a);const n=createDiv("details-movie");e.id.includes("movie-")||(e.id="movie-"+e.id);let i=e.id;i=i.split("-")[1],n.id=i,a.appendChild(n);const o=e.cloneNode(!0);n.appendChild(o);const d=createDiv("buttons-container");n.appendChild(d);let s=playButton();d.appendChild(s);let c=likeButton(i);d.appendChild(c);let l=closeButton();n.appendChild(l),setupOverlay(".close-button");const r=createDiv("metadata-container"),m=createDiv("metadata-info");try{const e=await getMetadata(i),t=movieData(e.percentage,e.year,e.duration,e.rating),a=createSynopsis("metadata-synopsis",e.synopsis),o=e.cast,d=e.genre,s=createRightSide(o,d,e.category);m.appendChild(t),m.appendChild(a),r.appendChild(m),r.appendChild(s),n.appendChild(r)}catch(e){}setupOverlay(".overlay",".details-movie")})})}function movieData(e,t,a,n){const i=document.createElement("DIV");i.classList.add("metadata-info-time");const o=document.createElement("SPAN");o.classList.add("metadata-percent"),o.textContent=e+"% for you",i.appendChild(o);const d=document.createElement("SPAN");d.classList.add("metadata-year"),d.textContent=""+t,i.appendChild(d);const s=document.createElement("SPAN");s.classList.add("metadata-duration"),s.textContent=""+a,i.appendChild(s);const c=document.createElement("SPAN");return c.classList.add("metadata-maturity"),c.textContent=""+n,i.appendChild(c),i}function toggleAnimation(e,t,a,n,i,o){e.classList.contains(t)?(e.classList.remove(a),e.classList.add(n),e.classList.remove(t,n),e.innerHTML=o):(e.classList.remove(n),e.classList.add(t,"animate__animated",a),e.innerHTML=i)}function setupOverlay(e,t=null){const a=document.querySelector(".overlay");if(document.querySelector(e).addEventListener("click",()=>{document.body.classList.remove("fixed"),a.remove()}),null!=t){document.querySelector(t).addEventListener("click",e=>{e.stopPropagation()})}}function createSynopsis(e,t){if("string"!=typeof e||""===e.trim())throw new Error("className must be a non-empty string");if("string"!=typeof t||""===t.trim())throw new Error("textContent must be a non-empty string");const a=document.createElement("div");a.classList.add("metadata-info-synopsis");const n=document.createElement("p");return n.classList.add(e),n.textContent=t,a.appendChild(n),a}function createRightSide(e,t,a){const n=document.createElement("div");n.classList.add("metadata-info-right");let i=[...e].join(", ");i+=", More";let o=[...t].join(", "),d=[...a].join(", "),s=createMetadataSection("Cast",i);const c=createMetadataSection("Genre",o),l=createMetadataSection("This title is",d);return n.appendChild(s),n.appendChild(c),n.appendChild(l),n}function createMetadataSection(e,t){const a=document.createElement("div");a.classList.add("metadata-info-section");const n=document.createElement("p");return n.classList.add("metadata-info-text"),n.innerHTML=`<span class="tag-metadata">${e}: </span>${t}`,a.appendChild(n),a}function playButton(){const e=document.createElement("BUTTON");e.classList.add("play-button");const t=document.createElement("DIV");t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="PlayStandard" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>',t.classList.add("play-icon"),e.appendChild(t);const a=document.createElement("SPAN");return a.textContent="Play",a.classList.add("play-text"),e.appendChild(a),e}function closeButton(){const e=document.createElement("DIV");e.classList.add("close-button");const t=document.createElement("DIV");return t.classList.add("x-icon"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="XStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg>',e.appendChild(t),e}function likeButton(e){const t=document.createElement("BUTTON");t.classList.add("like-button");const a=document.createElement("DIV"),n='<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path></svg>',i='<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ThumbsUpFillStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.407 6.25579L13.313 5.50407C13.1342 4.07353 11.9181 3 10.4764 3C10.2133 3 10 3.21331 10 3.47644V6.7132C10 6.90062 9.94733 7.08427 9.848 7.2432L7.90742 10.3481C7.64516 10.7677 7.23665 11.0752 6.76086 11.2112L4.72528 11.7928C4.29598 11.9154 4 12.3078 4 12.7543V18.3161C4 18.6938 4.30618 19 4.68387 19C5.874 19 7.04352 19.3106 8.07684 19.9011L8.25 20C9.39679 20.6553 10.6947 21 12.0156 21H13H16H16.5C17.3284 21 18 20.3284 18 19.5C18 19.1158 17.8556 18.7654 17.6181 18.5H18C18.8284 18.5 19.5 17.8284 19.5 17C19.5 16.4601 19.2147 15.9868 18.7867 15.7226C19.478 15.5888 20 14.9804 20 14.25C20 13.4216 19.3284 12.75 18.5 12.75H18.3294C18.7336 12.4813 19 12.0217 19 11.5C19 10.6716 18.3284 10 17.5 10H13.125L13.407 7.74421C13.4688 7.24999 13.4688 6.75001 13.407 6.25579Z" fill="currentColor"></path></svg>';a.innerHTML=n,a.classList.add("like-icon");let o=JSON.parse(localStorage.getItem("likedMovies"))||[];const d=document.querySelector(".active");return(o.some(t=>t.movieId==e)||d)&&(a.classList.add("like-on"),a.innerHTML=i),t.appendChild(a),t.addEventListener("click",()=>{a.classList.contains("like-on")?(clearLikedMovies(e),addClass(e)):(addToLiked(e),addClass(e)),toggleAnimation(a,"like-on","animate__bounceIn","animate__bounceOut",i,n)}),t}function addClass(e){const t=document.querySelector("#movie-"+e);document.querySelector(".like-icon").classList.contains("like-on")?t.classList.remove("active"):t.classList.add("active")}function addToLiked(e){const t=document.querySelector("#movie-"+e).src,a=document.querySelector(".metadata-percent").textContent,n=document.querySelector(".metadata-year").textContent,i=document.querySelector(".metadata-duration").textContent,o=document.querySelector(".metadata-maturity").textContent,d=e;let s=JSON.parse(localStorage.getItem("likedMovies"))||[];s.some(t=>t.movieId==e)||s.push({imageSrc:t,metadataPercent:a,metadataYear:n,metadataDuration:i,metadataMaturity:o,movieId:d}),localStorage.setItem("likedMovies",JSON.stringify(s))}function clearLikedMovies(e){let t=JSON.parse(localStorage.getItem("likedMovies"))||[];t=t.filter(t=>t.movieId!==e),localStorage.setItem("likedMovies",JSON.stringify(t))}function createDiv(e){const t=document.createElement("DIV");return t.classList.add(e),t}async function getMetadata(e){try{const t=await fetch("movies.json"),a=await t.json(),n=a.peliculas.find(t=>t.id===parseInt(e)+1);return n?n.metadata:null}catch(e){}}document.addEventListener("DOMContentLoaded",()=>{showMoreInfo()}),document.addEventListener("imagenesCargadas",showMoreInfo);
//# sourceMappingURL=functions.js.map