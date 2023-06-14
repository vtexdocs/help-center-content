---
title: ¿Por qué no consigo abrir imágenes que descargué directamente de mi sitio?
id: 5ngrYfggZaWWimyA8OE0Uo
status: PUBLISHED
createdAt: 2017-08-17T21:13:03.926Z
updatedAt: 2019-12-31T14:24:18.707Z
publishedAt: 2019-12-31T14:24:18.707Z
firstPublishedAt: 2017-08-17T22:37:34.372Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_4
slug: por-que-no-consigo-abrir-imagenes-que-descargue-directamente-de-mi-sitio
legacySlug: por-que-no-consigo-abrir-imagenes-que-descargue-directamente-de-mi-sitio
---

Debido a la [compactación de imágenes para WebP](/es/tutorial/como-funciona-la-compactacion-automatica-de-imagenes), es posible que haya dificultades en abrir archivos que se guardaron directamente de la tienda. Esto ocurre porque los sistemas operativos (Windows, Mac, Linux) no son compatibles nativamente con este formato. 

Incluso si el nombre del archivo es algo como “banner.jpg”, esto no significa que se trata de una imagen en formato JPG, pues el navegador no se vale de la extensión del archivo para indicar formato, sino de su contenido.

### Recuperando imágenes en el formato original

Actualmente, la mejor manera de recuperar una imagen en JPG o PNG sin que ésta se convierta a WebP es guardar el archivo por medio de Firefox, que no es un browser compatible con el formato – no habiendo conversión.

En Google Chrome, que es compatible, todas las imágenes (excepto GIF) se suministrarán en WebP.

### Abrindo imágenes WebP

Es posible abrir imágenes en WebP en tu computadora por medio de programas compatibles o instalando un codec para WebP.

En la página de Google de [soporte al WebP](https://developers.google.com/speed/webp/download), encontramos bibliotecas para diversos fines, así como un [codec para Windows](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/WebpCodecSetup.exe). Su instalación es suficiente para que sea posible abrirlas con el visualizador de imágenes del Windows y ver sus miniaturas en la carpeta. 

Para Photoshop, es posible usar el plugin creado por [Telegraphics](http://telegraphics.com.au/sw/product/webpformat).
