const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const directorioProyectos = path.join(__dirname, 'proyects');

app.get('/proyectos', (req, res) => {
    fs.readdir(directorioProyectos, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio de proyectos:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        const proyectos = files.filter(file => fs.statSync(path.join(directorioProyectos, file)).isDirectory());
        res.json(proyectos);
    });
});

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});
