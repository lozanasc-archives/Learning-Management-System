/**
 * ? What this index.js file is for:
 * * Mao ni mubuhi sa inyo project
 * * Mu gama ni siyag local development server
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const path = require('path');
/*
    ? Para asa ni:
    * Ga serve ni siya ug mga static files
    * Ug muingon kag ga serve pasabot gina make available niya ag mga static files through a router
    ? Example ug static file:
    * index.html
    * index.css
    * assets like images
    * js files
    ? Example ug router/route:
    * http://localhost/router_name <- Mao nay router
    * For example ug mukuha kog asset
    * Inganion nako pag access ag asset localhost/asset/picture_nako.png
*/
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));
app.use('/backend', express.static(path.join(__dirname, 'backend')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
    console.log(`Development server is available at http://localhost:${port}`);
})