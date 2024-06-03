document.addEventListener('DOMContentLoaded', ()=>{
    showIframesRecursive(0);
    copiarTexto();
    scrollNav();
});



//Scroll smooth
function scrollNav() {
    const enlaces = document.querySelectorAll('.nav ul li a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" })
        
        })
    });
}

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

    texto.addEventListener('click', ()=>{
        window.location.href = `proyects/proyecto${i + 1}/index.html`
    })

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

function copiarTexto(){
    copiarTelefono();
    copiarEmail();
}

function copiarTelefono(){
    const telefono = document.querySelector('#telefono-copiar');
    let phone = document.querySelector('.phone-number');

    textoCopiar(telefono, phone.textContent, `Copied Phone Number: ${phone.textContent}`);
    textoCopiar(phone, phone.textContent, `Copied Phone Number: ${phone.textContent}`);
}

function copiarEmail(){
    const email = document.querySelector('#email-copiar');
    let mail = document.querySelector('.gmail-copiar');

    textoCopiar(email, mail.textContent, `Copied Email: ${mail.textContent}`);
    textoCopiar(mail, mail.textContent, `Copied Email: ${mail.textContent}`);

}

function textoCopiar(evento, textoParaCopiar, alerta){
    evento.addEventListener('click', () => {
        var tempTextArea = document.createElement('textarea');
        tempTextArea.value = textoParaCopiar;
        document.body.appendChild(tempTextArea);
        // Selecciona el texto dentro del elemento de texto temporal
        tempTextArea.select();
        // Copia el texto seleccionado al portapapeles
        document.execCommand('copy');
        // Elimina el elemento de texto temporal
        document.body.removeChild(tempTextArea);
        // Muestra un mensaje o realiza alguna acción después de copiar
        alert(alerta);
    })
}