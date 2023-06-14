---
title: 'Archivos (CSS/JS) no se actualizan en la página después de subir nueva versión en el CMS'
id: 4qNIpSPGo8a8ugyemwYAuK
status: PUBLISHED
createdAt: 2018-02-09T19:04:53.387Z
updatedAt: 2022-12-22T20:45:29.669Z
publishedAt: 2022-12-22T20:45:29.669Z
firstPublishedAt: 2018-02-09T21:44:00.676Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: archivos-cssjs-no-se-actualizan-en-la-pagina-despues-de-subir-nueva-version-en-el-cms
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Después de cargar la versión actualizada de algún archivo pertinente al layout de su sitio (CSS, JS o incluso imágenes), la versión presentada en el front-end puede no ser la última.

Esto ocurre mientras el template está en caché. El request a estos archivos se realiza con un parámetro de versión, en el cual su valor es un *timestamp* del archivo original - por ejemplo, `/arquivos/style.css?v=636492689128330000`. Mientras que el *timestamp* es el mismo, el archivo será el mismo.

La principal causa de este escenario es que el template no sabe que un archivo ha cambiado, entonces la actualización de los archivos no es suficiente para que su caché expire.

## Simulación

En ciert template, actualizar un archivo de CSS o Javascript, haciendo nueva carga con el mismo nombre, para que sobrescriba el antiguo.

Observe que el parámetro *timestamp* en el request no se cambiará, y el contenido del archivo será el mismo.

## Workaround

Cambiar los templates que llaman los archivos actualizados es suficiente para revisar el *timestamp*, que entonces traerá la última versión de los archivos.

Una sugerencia, para facilitar el workaround cada vez que se cambie un archivo del layout, es crear un subtemplate de control de versión, que esté presente en todos los templates usados en la tienda. Para el contenido de este subtemplate será suficiente un comentario HTML, con informaciones que serán actualizadas a cada nueva versión de archivos.

Al cambiar el subtemplate, todos los templates que hacen su lectura serán actualizados, y junto, los archivos.

