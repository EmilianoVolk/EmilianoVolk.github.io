document.addEventListener('DOMContentLoaded', ()=>{
    showIframesRecursive(0);
})

function showIframesRecursive(i) {
    const proyectos = document.querySelector('.proyectos');

    // Crear div de proyecto
    const proyectoDiv = document.createElement('DIV');
    proyectoDiv.classList.add('proyecto');

    // Agregar div de proyecto al padre
    proyectos.appendChild(proyectoDiv);

    // Crear link
    const link = document.createElement('A');
    link.href = `proyects/proyecto${i + 1}/index.html`;
    proyectoDiv.appendChild(link);
    
    //Crea overlay cuando se pasa el mouse 
    const proyectoOverlay = document.createElement('DIV');
    link.appendChild(proyectoOverlay);

    //Elemento P
    const texto = document.createElement('P');

    //Cuando se pasa el mouse al link
    proyectoDiv.addEventListener('mouseover', ()=>{

        //Clase para que tenga un fondo gris
        proyectoOverlay.classList.add('proyecto-overlay');

        //Titulo del Iframe
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const pageTitle = iframeDocument.title;

        //Contenido del P
        texto.textContent = `${pageTitle}`
        // proyectoOverlay.style.display = 'block';
        proyectoOverlay.appendChild(texto)
    })

    //Cuando este fuera
    proyectoDiv.addEventListener('mouseleave', ()=>{
        proyectoOverlay.classList.remove('proyecto-overlay');
        proyectoOverlay.removeChild(proyectoOverlay.firstChild);


    })

    // Crear Iframe
    const iframe = document.createElement('IFRAME');
    iframe.src = `proyects/proyecto${i + 1}/index.html`;
    iframe.scrolling = 'no';

    proyectoDiv.appendChild(iframe);

    iframe.onload = function () {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        const pageTitle = iframeDocument.title.toLowerCase();

        if (pageTitle.includes('error') || pageTitle.includes('page not found')) {
            console.error('Error al cargar el iframe:', iframe.src);
            // Detener la recursión si hay un error
            proyectos.removeChild(proyectoDiv);
            return;
        }

        // Incrementar el contador y continuar recursivamente
        showIframesRecursive(i + 1);
    };
}



// function showIframesRecursive(i) {
//     const proyectos = document.querySelector('.proyectos');

//     // Crear div de proyecto
//     const proyectoDiv = document.createElement('div');
//     proyectoDiv.classList.add('proyecto');

//     // Agregar div de proyecto al padre
//     proyectos.appendChild(proyectoDiv);

//     // Crear link
//     const link = document.createElement('a');
//     link.href = `proyects/proyecto${i + 1}/index.html`;
//     proyectoDiv.appendChild(link);

//     // Crear Iframe
//     const iframe = document.createElement('iframe');
//     iframe.src = `proyects/proyecto${i + 1}/index.html`;
//     iframe.scrolling = 'no';

//     proyectoDiv.appendChild(iframe);

//     // Agregar overlay
//     const proyectoOverlay = document.createElement('div');
//     proyectoOverlay.classList.add('proyecto-overlay');
//     proyectoDiv.appendChild(proyectoOverlay);

//     // Mostrar u ocultar overlay en eventos mouseover y mouseout
//     link.addEventListener('mouseover', () => {
//         proyectoOverlay.style.display = 'block';
//     });

//     link.addEventListener('mouseout', () => {
//         proyectoOverlay.style.display = 'none';
//     });

//     iframe.onload = function () {
//         const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//         const pageTitle = iframeDocument.title.toLowerCase();

//         if (pageTitle.includes('error')) {
//             console.error('Error al cargar el iframe:', iframe.src);
//             // Detener la recursión si hay un error
//             proyectos.removeChild(proyectoDiv);
//             return;
//         }

//         // Incrementar el contador y continuar recursivamente
//         showIframesRecursive(i + 1);
//     };
// }
