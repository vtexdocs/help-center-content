---
title: "Error de Builder-hub al intentar publicar una aplicación"
id: 5qBBBft0fcEZF2OxA3SCib
status: PUBLISHED
createdAt: 2025-07-18T12:49:09.655Z
updatedAt: 2025-07-24T17:44:11.902Z
publishedAt: 2025-07-24T17:44:11.902Z
firstPublishedAt: 2025-07-18T12:49:10.828Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: error-de-builderhub-al-intentar-publicar-una-aplicacion
locale: es
kiStatus: Backlog
internalReference: 1262332
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar publicar una app, es posible que te encuentres con un error builder-hub. Esta intermitencia ocurre normalmente en apps con autodependencia. Verás un error como:


    error: node@4.x builder failed to install dependencies through yarn (retries=3)yarn errors:Se ha producido un error inesperado: "http://.vtexassets.com/_v/public/typings/v1//public/@types/: Request failed \"500 Internal Server Error\"". vtex.builder-hub@0.309.0



##

## Simulación


No es un problema sencillo de reproducir, es intermitente.



## Workaround


Puede solucionarse tras algunos reintentos, pero si persiste, abre un ticket a Soporte de Producto para solucionarlo





