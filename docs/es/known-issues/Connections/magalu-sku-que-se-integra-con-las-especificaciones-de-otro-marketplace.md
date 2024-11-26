---
title: '[Magalu] Sku que se integra con las especificaciones de otro marketplace'
id: 4AYsfMTB2HVmp2PnOG2plY
status: PUBLISHED
createdAt: 2022-10-31T19:29:16.911Z
updatedAt: 2024-03-19T20:33:58.929Z
publishedAt: 2024-03-19T20:33:58.929Z
firstPublishedAt: 2022-10-31T19:29:18.080Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: magalu-sku-being-integrated-with-specifications-from-another-marketplace
locale: es
kiStatus: Fixed
internalReference: 689151
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos skus se están integrando con especificaciones de otro Marketplace.



## Simulación


Por ejemplo, al integrar nuestro catálogo en magalu, enviamos todo lo que tiene especificación, cuando magalu en su mecanismo interno entiende que hay un error desactiva el anuncio.

Ejemplo de especificación que se envía a Magalu

 ![](https://vtexhelp.zendesk.com/attachments/token/22vLwpFtB3XtuJPNFA2aDpqvf/?name=image.png)


## Workaround


Manualmente el cliente puede borrar la especificación, pero nuestra integración en un reindexado sobrescribe el cambio realizado

