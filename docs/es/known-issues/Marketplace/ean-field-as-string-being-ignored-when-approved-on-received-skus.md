---
title: 'El campo Ean como cadena se ignora cuando se aprueba en Skus recibidos'
id: 3ubVdtlt8ElWzQGFM9OTTq
status: PUBLISHED
createdAt: 2023-09-11T16:37:06.258Z
updatedAt: 2023-11-28T16:54:04.790Z
publishedAt: 2023-11-28T16:54:04.790Z
firstPublishedAt: 2023-09-11T16:37:07.098Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: el-campo-ean-como-cadena-se-ignora-cuando-se-aprueba-en-skus-recibidos
locale: es
kiStatus: Backlog
internalReference: 897301
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El vendedor envía el sku con todos los campos declarados en este artículo (https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/-sellerId-/-sellerSkuId-) para que el marketplace lo apruebe en el módulo Skus Recibidos.

El campo ean está declarado como tipo string en el artículo anterior. Sin embargo, a pesar de aparecer en la interfaz de usuario de Skus Recibidos, está siendo ignorado por el sistema de matcher backend y también por el módulo de catálogo, lo que significa que el sku se está creando con este campo vacío.


##

## Simulación


1. Enviar un sku al marketplace con el campo ean configurado como cadena: `"ean": "123456"`
2. Aprobar el sku como nuevo producto en el módulo Skus Recibidos del marketplace;
3. 3. Compruebe que en el catálogo este campo está vacío.


## Workaround


**Antes de que este problema se solucione y el sistema funcione de acuerdo con nuestros documentos**, el formato que funciona actualmente es enviar el campo ean como un array:
`"ean": ["123456"]`

Otra forma es establecer este campo manualmente en el catálogo una vez que el sku es aprobado.


