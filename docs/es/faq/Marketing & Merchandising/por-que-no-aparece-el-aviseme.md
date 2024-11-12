---
title: "¿Por qué no aparece el 'Avíseme'?"
id: frequentlyAskedQuestions_628
status: PUBLISHED
createdAt: 2017-04-27T22:31:23.053Z
updatedAt: 2019-12-31T14:24:27.768Z
publishedAt: 2019-12-31T14:24:27.768Z
firstPublishedAt: 2017-04-27T23:02:25.457Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slugEN: why-is-let-me-know-not-showing
locale: es
legacySlug: por-que-no-aparece-el-aviseme
---

Las configuraciones básicas para exhibir **avíseme** cuando el producto está indisponible son:

- Módulo del **CMS** > Configuraciones > Generales > Flag "Exhibe 'avisame' cuando los productos salen de la venta".
- Configuración del template - Uso del control `vtex.cmc:BuyButton` en el template de página.

Pero existe un caso en que, aun con los ítems arriba configurados, el avíseme no aparece, que es **cuando el tipo de exhibición de la Categoría está seleccionado como Lista de SKUs**.

![categoria-lista-de-skus ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

En este caso, además de las configuraciones estándar, es necesario usar el control `vtex.cmc:SkuSelection`, aunque no exista más de un SKU por página.
Luego, cuando la Categoría del producto deseado esté flechada para Lista de SKUs, como en la imagen arriba, es necesario que sea insertado el control `vtex.cmc:SkuSelection` en el template de página para que el avíseme sea exhibido.
