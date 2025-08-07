---
title: "Las traducciones del catálogo no se reflejan en el frontend"
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2025-05-30T18:25:13.598Z
publishedAt: 2025-05-30T18:25:13.598Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: las-traducciones-del-catalogo-no-se-reflejan-en-el-frontend
locale: es
kiStatus: Backlog
internalReference: 861892
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el comerciante realiza una acción en la aplicación Mensajes para que se traduzcan algunos datos del producto en el frontend, esta acción no se refleja realmente en el escaparate.



## Simulación



1. Realiza un cambio en la aplicación Mensajes;
2. Observa en el `IndexedInfo` que el campo `GenerateAndSaveTranslationsDocument` está configurado como `false`;
3. 3. No vuelva a indexar el producto;
4. 4. Compruebe que el cambio no se ha reflejado en el sitio web traducido.



## Workaround


Para forzar la reindexación de las traducciones de un producto, utilice la siguiente solicitud API:

    curl --request POST 'https://.vtexcommercestable.com.br/api/notificator/changenotification//translation' \--header 'VtexIdclientAutCookie: '





