---
title: "GIFs animados no funcionan en Google Chrome"
id: 62tEP9HJo4e4i202mmi0W0
status: PUBLISHED
createdAt: 2017-08-16T21:33:58.098Z
updatedAt: 2022-12-22T14:55:57.949Z
publishedAt: 2022-12-22T14:55:57.949Z
firstPublishedAt: 2017-08-16T21:49:12.726Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal
slugEN: gifs-animados-no-funcionan-en-google-chrome
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

En los navegadores compatibles, las imágenes del sitio se convierten al formato WEBP. El formato permite más compactación sin pérdida expresiva de calidad, mejorando la velocidad de carga de las páginas. La conversión se realiza antes de la entrega de los archivos (server side).

Los archivos GIF que tienen animación están teniendo problemas en la conversión, donde sólo se muestra el primero frame, perdiendo la animación.

## Simulación

1. Hacer upload de un GIF;
2. Acceder a través del Google Chrome.

## Workaround

Con el fin de evitar la pérdida de contexto cuando no hay animación, sugerimos que el primero cuadro (frame) del GIF sea una imagen completa, sirviendo de fallback al escenario anterior.

Un GIF en loop, por ejemplo, puede tener un cuadro del medio de la animación como el primero de la secuencia, para iniciar la presentación de la animación por el medio, pero sin afectar la idea a la que se propone.

### Actualización: Problema Resuelto

Como medida inmediata, no hay más conversión de GIF a WEBP, evitando así los problemas expuestos arriba. El formato WEBP animado existe y es soportado, pudiendo estar disponible en el futuro.

Por ser archivos estáticos, las imágenes tienen un cache de tiempo indefinido mientras no se cambian. Por este comportamiento, los GIF existentes en el sistema se entregarán en WEBP mientras haya el caché.

Para forzar la actualización, es necesario volver a enviar el archivo de imagen a través del CMS (subir imágenes). Hecho el upload, en hasta 1 hora el cache expirará y el GIF dejará de ser proporcionado como WEBP.

