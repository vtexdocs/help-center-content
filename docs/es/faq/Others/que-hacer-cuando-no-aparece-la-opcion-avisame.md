---
title: 'Qué hacer cuando no aparece la opción Avísame'
id: oNb6JK1LPMOQwYsecKKCs
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.175Z
updatedAt: 2022-04-04T16:36:16.943Z
publishedAt: 2022-04-04T16:36:16.943Z
firstPublishedAt: 2019-01-24T20:30:45.618Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: what-to-do-when-the-notify-me-option-is-not-displayed
locale: es
legacySlug: que-hacer-cuando-el-aviseme-no-es-exhibido
---

Existe un caso en que, aun con la [configuración del Avíseme](/es/tutorial/configurar-el-aviseme) hecha, el Avíseme no aparece. Es **cuando el tipo de exhibición de la categoría está seleccionado como Lista de SKUs**.

![categoria-lista-de-skus ES](//images.ctfassets.net/alneenqid6w5/2doqFhClnKAsqisO6qUeqA/fb3df652f2b63be1b27609322b4956bd/lista_de_skus_ES.png)

En este caso, además de las configuraciones estándar, es necesario usar el control `vtex.cmc:SkuSelection`, aunque no exista más de un SKU por página.

Luego, cuando la categoría del producto deseado esté flechada para Lista de SKUs, como en la imagen arriba, es necesario que sea insertado el control `vtex.cmc:SkuSelection` en el template de página para que el *Avíseme* sea exhibido.
