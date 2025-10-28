---
title: '¿Por qué mi producto fue categorizado equivocadamente en Mercado Livre?'
id: frequentlyAskedQuestions_4462
status: PUBLISHED
createdAt: 2017-04-27T22:24:19.119Z
updatedAt: 2019-12-31T14:23:48.805Z
publishedAt: 2019-12-31T14:23:48.805Z
firstPublishedAt: 2017-04-27T23:02:43.888Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: why-has-my-product-been-wrongly-categorized-on-mercado-livre
locale: es
legacySlug: por-que-mi-producto-fue-categorizado-equivocadamente-en-mercado-livre
---

Si no desea categorizar sus anuncios en Mercado Libre a través de la Planilla de Mapeo, la integración da la opción de categorizar automáticamente a través de una herramienta del propio Mercado Libre. [Más información aquí sobre el proceso de categorización en la integración del Mercado Libre.](/es/tracks/configurar-integracion-con-mercado-libre?step=5)

Esta definición de la categoría de destino se realiza sobre la base del __nombre__ y del __precio__ del producto.

Sin embargo, hay casos en que esta configuración automática no asocia el producto a la categoría correcta. Para corregir este escenario, es necesario realizar el cambio directamente en el panel del Mercado Libre o seguir el camino detallado abajo:

1. [Descargue esta hoja de trabajo](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/es/faq/channels/Mercado_Libre_-__Recategorizacion.xlsx) y rellene sus respectivas columnas.
2. __ID de anuncio:__ se debe rellenar con el ID de su anuncio en Mercado Libre, sacando el guión que separa el sufijo del número.
_`Ex:` el ID se puede encontrar en la URL del anuncio. En el siguiente enlace por ejemplo, el ID sería "MLA713224614"._
https://articulo.mercadolibre.com.ar/MLA-713224614-cafetera-de-filtro-electrolux-cmb31-jarra-de-vidrio-_JM

3. __Descripción del anuncio:__ rellene con la descripción del producto en cuestión. El contenido de esta columna es exactamente lo que queda en la "Descripción" en el anuncio del Mercado Libre.
4. __ID de la categoría actual:__ rellene con el ID de categoría en el que su anuncio está categorizado incorrectamente. Usted puede encontrar el ID de la categoría de acuerdo con el ID de su anuncio usando esta API de Mercado Libre: ```https://api.mercadolibre.com/items/{ID_anuncio}```<br />
_`Ex:` si desea buscar por la categoría del anuncio MLA713224614, usará la API de esta manera:_<br /> https://api.mercadolibre.com/items/__MLB875426061__<br />
_De esta forma, encontrará en el campo `"category_id"` el ID __MLA119699__._

5. __ID de categoría destino:__ este es el ID de categoría para el que desea mover su anuncio. Acceda a la API de Mercado Libre de acuerdo con __su país__ para consultar los ID de las categorías.
<br/>- [Argentina](https://api.mercadolibre.com/sites/MLA/categories)
<br/>- [México](https://api.mercadolibre.com/sites/MLM/categories)
<br/>- [Colombia](https://api.mercadolibre.com/sites/MCO/categories)

Al finalizar la planilla, envía al asesor de tu cuenta __en Mercado Libre__ para que él siga con el proceso internamente.

En caso de que usted __no__ tenga un asesor de cuenta en Mercado Libre, sólo será posible cambiar las categorías de los anuncios a través del MyML (frente del MELI) y sólo en casos de productos que __no__ tengan ninguna venta.

> ⚠️ **OBS:** vale resaltar que este proceso no tiene ninguna relación con la VTEX y debe ser intermediado directamente en el Mercado Libre.
