---
title: 'Imagens enviadas por API com protocolo HTTP não renderizam no módulo SKUs Recebidos'
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
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

As imagens enviadas com protocolo HTTP pela API [Send SKU Suggestion](https://developers.vtex.com/vtex-rest-api/reference/manage-suggestions-1#send-sku-suggestion) não são renderizadas no módulo SKUs Recebidos. Apesar disso, se a imagem funcionar corretamente no link HTTP enviado, ela será renderizada no Catálogo da VTEX e no Storefront do marketplace, uma vez que o SKU for aprovado. Em breve, passaremos a aceitar somente imagens enviadas com o protocolo HTTPS, como uma medida de segurança. 


## Simulação

Quando sellers chamam a API e enviam no campo `imageUrl` um link com protocolo  HTTP, ao invés de  HTTPS, a imagem enviada não aparece no módulo SKUs Recebidos do Admin VTEX.

```
 "Images": [
          {
               "imageName": "Principal",
               "imageUrl": "http://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }

```

## Workaround

Sellers devem enviar imagens pelo campo `imageUrl` utilizando o protocolo  HTTPS. Essa medida aumenta a segurança da chamada e também garante que a imagem será renderizada em todos os módulos da VTEX.

```
 "Images": [
          {
               "imageName": "Principal",
               "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
          }

```


