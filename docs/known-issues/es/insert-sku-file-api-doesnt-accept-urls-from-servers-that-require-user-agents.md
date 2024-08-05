---
title: "La API Insertar Archivo SKU no acepta URLs de servidores que requieren 'Agentes de Usuario'."
id: 5Z1PmRXyW78mohsKTMQfzj
status: PUBLISHED
createdAt: 2024-07-22T19:49:14.140Z
updatedAt: 2024-07-22T19:49:15.319Z
publishedAt: 2024-07-22T19:49:15.319Z
firstPublishedAt: 2024-07-22T19:49:15.319Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-insertar-archivo-sku-no-acepta-urls-de-servidores-que-requieren-agentes-de-usuario
locale: es
kiStatus: Backlog
internalReference: 1069222
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Un **user-agent** es una cadena de texto que un navegador web u otro cliente envía a un servidor web en una cabecera de petición HTTP para identificarse. Esta cadena contiene información sobre el tipo de navegador, sistema operativo, y a veces detalles adicionales como la versión del navegador y el motor de renderizado utilizado.

A menudo se solicita como medida de seguridad por parte de servidores, como los que alojan imágenes, que pueden pasarse a través de una URL en el cuerpo de la solicitud de la API de inserción de archivos SKU.

Este tipo de autenticación, sin embargo, no está soportada actualmente por las APIs VTEX.



## Simulación


1 - Utilizar la API de creación o actualización (métodos de escritura) de archivos SKU pasando una URL que tenga requisitos de agente de usuario del lado del servidor para obtener datos https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file

2 - Se mostrará una respuesta de tipo 40x, ya sea un 400 genérico o un 403 más específico dependiendo del tipo de respuesta implementada.




## Workaround


O bien optar por la carga de archivos va hoja de cálculo, formulario de datos (utilizando las API) o desactivar los requisitos de agente de usuario en el lado del servidor.





