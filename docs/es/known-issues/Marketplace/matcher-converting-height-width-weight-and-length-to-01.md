---
title: 'Igualador que convierte Altura, Anchura, Peso y Longitud a 0,1'
id: j3rz875eWVHFMLYxcYsDL
status: PUBLISHED
createdAt: 2023-08-23T13:38:55.976Z
updatedAt: 2023-08-23T20:01:37.842Z
publishedAt: 2023-08-23T20:01:37.842Z
firstPublishedAt: 2023-08-23T13:38:58.327Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: igualador-que-convierte-altura-anchura-peso-y-longitud-a-01
locale: es
kiStatus: Fixed
internalReference: 886168
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el Matcher procesa los skus en el módulo de sugerencias del marketplace las infos de Altura, Anchura, Peso y Longitud se están poniendo a 0.1 en lugar de respetar los valores enviados por el vendedor.


##

## Simulación



1. El vendedor envía el sku a marketplace con Altura, Anchura, Peso y Longitud con valores normales;
2. El sku llega al marketplace y es procesado por el matcher;
3. Compruebe en la siguiente API si el objeto Matcher tiene los campos Height, Width, Weight y Length configurados como 0.1
https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#get-/suggestions/-sellerId-/-sellerSkuId-
 ![](https://vtexhelp.zendesk.com/attachments/token/vCdMBFKEJ0243C9Ew7PPFDgp3/?name=image.png)


##

## Workaround


N/A





