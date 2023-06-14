---
title: La actualización del banner de búsqueda inteligente a través de la URL de la imagen no funciona correctamente
id: bMFrVUmfbjvTWs4Ag6U57
status: PUBLISHED
createdAt: 2023-01-17T14:34:02.195Z
updatedAt: 2023-01-17T14:34:10.348Z
publishedAt: 2023-01-17T14:34:10.348Z
firstPublishedAt: 2023-01-17T14:34:02.912Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: la-actualizacion-del-banner-de-busqueda-inteligente-a-traves-de-la-url-de-la-imagen-no-funciona-correctamente
kiStatus: Backlog
internalReference: 734833
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En Admin V4, en el módulo Banners, el usuario tiene la posibilidad de crear o actualizar banners ya creados. Al seleccionar un banner para actualizar, puede elegir entre utilizar un campo HTML o insertar un enlace de imagen directo con una URL externa. Al seleccionar insertar el banner mediante un enlace de imagen directo, se lanza la consulta GraphQL `setBanner`, que actualmente no funciona correctamente, devolviendo `syntaxError`, en consecuencia, error 500.


##

## Simulación


En una tienda con Admin V4, acceda al módulo Banners, dentro de Buscar;
Seleccione un banner creado anteriormente;
En Tipo, seleccione Imagen;
Rellene los campos del enlace;
Al hacer clic en Guardar, la pantalla mostrará un error GraphQL;


##

## Workaround


Crear un nuevo banner con las mismas especificaciones (la consulta de creación del banner es `createBanner` y funciona correctamente);




