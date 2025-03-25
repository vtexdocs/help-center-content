---
title: 'Las imágenes enviadas por API con el protocolo HTTP no se renderizan en la página SKU Recibidos'
id: 2mi0Nyznh9NHnc7P5zLghn
status: PUBLISHED
createdAt: 2021-08-31T18:09:37.181Z
updatedAt: 2022-12-22T20:41:18.067Z
publishedAt: 2022-12-22T20:41:18.067Z
firstPublishedAt: 2021-08-31T18:15:01.326Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: images-uploaded-via-api-using-an-http-protocol-do-not-render-on-the-received-skus-page
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Las imágenes enviadas con el protocolo HTTP por la API [Send SKU Suggestion](https://developers.vtex.com/vtex-rest-api/reference/manage-suggestions-1#send-sku-suggestion) no se renderizan en la página SKU Recibidos. No obstante, si la imagen funciona correctamente en el enlace HTTP enviado, se renderizará en el Catálogo de VTEX y en el Storefront del marketplace una vez aprobado el SKU. Próximamente, solo aceptaremos imágenes enviadas con el protocolo HTTPS, como medida de seguridad. 


## Simulación

Cuando los sellers llaman a la API y envían en el campo `imageUrl` un enlace con protocolo HTTP, en lugar de HTTPS, la imagen enviada no aparece en la página SKU Recibidos del Admin VTEX.

```
 "Images": [
          {
               "imageName": "Principal",
               "imageUrl": "http://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }

```

## Workaround

Los sellers deben enviar las imágenes a través del campo `imageUrl` utilizando el protocolo HTTPS. Esta medida aumenta la seguridad de la llamada y garantiza que la imagen se renderizará en todos los módulos de VTEX.

```
 "Images": [
          {
               "imageName": "Principal",
               "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }

```


