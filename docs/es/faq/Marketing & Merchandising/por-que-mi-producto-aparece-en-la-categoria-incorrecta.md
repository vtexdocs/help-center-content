---
title: '¿Por qué mi producto aparece en la categoría incorrecta?'
id: 189ijTfdJkcy2gg2MWkuEE
status: PUBLISHED
createdAt: 2018-01-23T13:35:06.489Z
updatedAt: 2022-08-24T21:09:00.452Z
publishedAt: 2022-08-24T21:09:00.452Z
firstPublishedAt: 2018-01-23T14:36:56.218Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_59
slugEN: why-is-my-product-appearing-in-the-wrong-category
locale: es
legacySlug: por-que-mi-producto-aparece-en-la-categoria-incorrecta
---

Si usted cree que un producto se está mostrando en una categoría incorrecta, hay algunos procedimientos que podemos realizar para probar esta hipótesis. Siga los pasos abajo para analizar este escenario.

## Verificación vía API

El primer paso es realizar un request GET con nuestra [API de Product by Id](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product).

La respuesta de esta llamada trae la información de `DepartmentId` y `CategoryId`, como podemos ver en la siguiente imagen:

![department-id-category-id](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Marketing%20&%20Merchandising/por-que-mi-producto-aparece-en-la-categoria-incorrecta_1.png)

Después, usted debe comparar esta respuesta con los Ids que aparecen en su árbol de categoría. Para acceder a su árbol de categorías, siga los pasos abajo:

1. Acceda al módulo __Catálogo__.
2. Haga clic en __Categorías__.
3. Haga clic en el botón `+` para ver su árbol de categorías.

Listo! Ahora es sólo comparar los valores y comprobar si los datos son coincidentes. Si el producto está registrado en una categoría incorrecta, basta con cambiar el producto de categoría. [Haga clic aquí](/es/tutorial/registrando-producto) para saber cómo registrar la categoría en un producto.

## Categoría Similar

En VTEX, es posible registrar los productos en categorías similares. Así, productos que tengan categorías similares registradas serán exhibidos en las vitrinas de las páginas de esas categorías.

Esto puede causar la impresión de que el producto se muestra en la categoría incorrecta. Para comprobar si su producto tiene una categoría similar registrada, acceda a nuestro artículo sobre [cómo configurar categorías similares](/es/tutorial/configurando-categoria-similar).
