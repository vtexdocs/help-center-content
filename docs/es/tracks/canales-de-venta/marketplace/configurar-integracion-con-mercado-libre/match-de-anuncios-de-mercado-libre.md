---
title: 'Publicación de productos Mercado Libre'
id: 43uD4LPU5PLUWe11IaWwyR
status: PUBLISHED
createdAt: 2024-09-09T15:11:51.966Z
updatedAt: 2026-10-08T13:45:03.913Z
publishedAt: 2024-09-26T13:38:29.627Z
firstPublishedAt: 2024-09-09T15:16:41.777Z
contentType: trackArticle
productTeam: Channels
slugEN: match-offers-mercado-livre
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracion-con-mercado-libre
order: 10
---

Antes de iniciar la lectura de este artículo consulta la tabla a continuación para familiarizarte con los términos específicos de la funcionalidad **Publicación de productos Mercado Libre**.

| Término                                       | Significado                                                                                                                                                                                                                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Producto**                                  | El [SKU](/es/docs/tracks/sku-definicion-de-concepto) de un seller que se envía a un marketplace y tiene el precio y el stock configurados.                                                                                                |
| **Sugerencia de vinculación del marketplace** | Producto preexistente en el catálogo de Mercado Libre, sugerido por el marketplace, al que el seller puede vincular su propio producto para mejorar la visibilidad.                                                                                            |
| **Oportunidad de vinculación**                | Acción de asociar un producto del seller a una sugerencia de vinculación del marketplace.                                                                                                                                                                      |
| **Método de vinculación**                     | Indica cómo se creó la asociación entre el producto del seller y la sugerencia de vinculación: **Manual**, cuando el propio seller realiza el vínculo, o **Automático**, cuando Mercado Libre identifica y asocia el producto automáticamente. |

Al configurar la [integración con Mercado Libre](/es/docs/tutorials/como-funciona-la-integracion-del-mercado-libre) el seller envía al marketplace los anuncios que desea vender en la plataforma. Con los anuncios enviados, Mercado Libre ofrece oportunidades de vinculación con productos del catálogo del marketplace.

En este artículo puedes consultar los siguientes temas:

- [**Estructura de la página**](#estructura-de-la-pagina)
- [**Tipos de oportunidades**](#tipos-de-oportunidades)
- [**Detalles de la oportunidad**](#detalles-de-la-oportunidad)
- [**Oportunidad no válida**](#oportunidad-no-valida)

Para acceder a la página en el Admin VTEX haz clic en **Marketplace > Mercado Libre > Publicación de productos**, o ingresa **Publicación de productos** en la barra de búsqueda de la parte superior de la página.

## Estructura de la página

La página **Publicación de productos** tiene dos pestañas: [Oportunidades de vinculación](#oportunidades-de-vinculacion) y [Productos activos](#productos-activos). A continuación se describen la información y los datos disponibles en cada una.

### Oportunidades de vinculación

En esta pestaña el seller visualiza la lista de los anuncios elegibles para el catálogo de Mercado Libre. Puedes filtrar oportunidades por **Canal** (si usas la integración de **Mercado Libre Classic** y **Mercado Libre Premium**) y por **Tipo**, y también buscar por nombre del producto o **ID de SKU** en el campo **Buscar SKU o producto**.

El contador junto al nombre de la pestaña muestra el número de oportunidades pendientes de vincular.

![Pestaña Oportunidades de vinculación](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/canales-de-venta/marketplace/configurar-integracion-con-mercado-libre/match-de-anuncios-de-mercado-libre_1.png)

Cada fila de la lista representa un producto y contiene la siguiente información en columnas:

- **Casilla de verificación:** casilla utilizada para seleccionar los anuncios deseados y realizar la [vinculación en masa](#vinculacion-en-masa).
- **SKU de VTEX:** producto configurado por el seller en el catálogo y enviado al marketplace.
- **Sugerencia de vinculación del marketplace:** producto sugerido por Mercado Libre.
- **Canal:** la integración asociada a la oportunidad (**Mercado Libre Classic** o **Mercado Libre Premium**).
- **Tipo:** la acción recomendada por Mercado Libre para el anuncio del seller. Más información en [Tipos de oportunidades](#tipos-de-oportunidades).

> ℹ️ Los productos disponibles en la pestaña **Oportunidades de vinculación** pueden devolver un error en el menú Pedidos hasta que se complete la vinculación.

### Pestaña Productos activos

En esta pestaña, los sellers pueden ver la lista de productos ya vinculados al catálogo de Mercado Libre, filtrar anuncios por **Canal** y por **Status** de relevancia, y buscar anuncios por nombre del producto o **ID de SKU**.

En la lista de productos activos, cada fila representa un anuncio y presenta la siguiente información en columnas:

- **Productos:** muestra la imagen, el nombre y el ID de SKU del producto.
- **Método de vinculación:** indica si la asociación realizada por Mercado Libre fue **Manual** o **Automático**. Al pasar el cursor sobre cada valor, un tooltip explica el origen de la vinculación:
  - **Manual:** vínculo creado manualmente por el seller, asociando la publicación a un producto del catálogo.
  - **Automático:** el vínculo se creó automáticamente después de que Mercado Libre identificara que el producto es elegible y coincide con un producto del catálogo.
- **Canal:** la integración a la que pertenece el producto (**Mercado Libre Classic** o **Mercado Libre Premium**).
- **Status:** relevancia de ese anuncio en el catálogo de Mercado Libre.

En la parte superior de la pantalla, puedes hacer seguimiento del número de productos activos para cada status de relevancia. Los mismos valores también están en el filtro **Status**, que se puede combinar con el filtro de **Canal**.

La relevancia de un anuncio indica si el anuncio del seller aparece como el primero en el anuncio de catálogo del marketplace. Los posibles status para un anuncio son:

- **Ganando relevancia:** cuando el anuncio del seller está en primer lugar o empatado con el primero.
- **Perdiendo relevancia:** cuando el anuncio del seller no está en primer lugar en la búsqueda de ese producto.
- **Procesando:** cuando Mercado Libre está evaluando la información del anuncio.

> ℹ️ Los anuncios ganan relevancia cuando tienen los mejores precios y condiciones logísticas.

Al hacer clic en un producto de la lista, el seller abre el panel lateral **Status del producto**. El panel reúne el status de relevancia actual del anuncio y, cuando corresponde, los motivos que lo afectan, los detalles de la publicación y el botón `Ver producto en Mercado Libre`, que abre el anuncio en el marketplace.

## Tipos de oportunidades

En todas las oportunidades que lista Mercado Libre el seller debe vincular el producto a un producto del catálogo. Si no hay correspondencia entre el anuncio del seller y un producto del catálogo es posible publicar el anuncio sin vincular haciendo clic en el botón `Publicar sin vincular`. Hay cuatro tipos de oportunidades disponibles para los anuncios de un seller, como se describe a continuación:

- **Tiene fecha límite:** las oportunidades de este tipo son obligatorias y deben vincularse antes de una fecha límite especificada. El seller debe vincular el producto a un producto del catálogo de Mercado Libre. Si la vinculación no se completa dentro de la fecha límite establecida por el marketplace, el anuncio puede quedar sujeto a moderación. La fecha límite se muestra en una alerta en la parte superior de la pantalla [detalles de la oportunidad](#detalles-de-la-oportunidad).
- **Obligatorio:** las oportunidades de este tipo son obligatorias pero no tienen fecha límite para la vinculación. Si no se vincula el anuncio, Mercado Libre puede moderar el anuncio del seller en el marketplace.
- **Opcional:** las oportunidades de este tipo no son obligatorias. Si no se realiza la vinculación, el anuncio del seller no pierde relevancia ni es bloqueado por el marketplace.
- **Restringido:** las oportunidades de este tipo son obligatorias y el producto solo se puede vender a través del catálogo de Mercado Libre. Si no se realiza la vinculación, el anuncio del seller no se publicará en Mercado Libre. Una alerta en la parte superior de la pantalla de detalles informa esta restricción.

Cuando el tipo de oportunidad es **Tiene fecha límite** o **Restringido**, se muestra una alerta en la parte superior de la pantalla que indica la fecha límite de publicación o la restricción, con un link **Saber más** para obtener más detalles.

## Detalles de la oportunidad

En la pestaña **Oportunidades de vinculación** se pueden analizar y vincular las oportunidades, sea cual sea el tipo. La vinculación se puede hacer de forma [individual](#vinculacion-individual) o [en masa](#vinculacion-en-masa).

La pantalla **Detalles de la oportunidad** se muestra cuando el seller hace clic en uno de los anuncios de la pestaña **Oportunidades de vinculación**. En esta página el seller puede ver:

- A la izquierda, la tarjeta **SKU de VTEX**, con el producto registrado en el catálogo de VTEX y el botón `Ver SKU`, que abre la página del producto en el catálogo.
- En el centro, la tarjeta **Producto a vincular**, con el producto sugerido por Mercado Libre y el acceso directo para ver el anuncio en el marketplace.
- A la derecha, el panel **Producto sugerido por Mercado Libre**, con el campo **Buscar otro producto para vincular**, en caso de que la sugerencia no coincida con el SKU del seller.
- En la parte superior derecha, los botones `Publicar sin vincular` y `Confirmar y publicar`.

Los atributos del producto, como marca, línea, modelo, color, voltaje y potencia de refrigeración, se muestran uno al lado del otro, ya completados con los datos de los dos productos, para facilitar la comprobación.

### Vinculación individual

Para vincular oportunidades individualmente después de acceder a la página **Publicación de productos** sigue estos pasos:

1. En el Admin VTEX haz clic en **Marketplace > Mercado Libre > Publicación de productos**, o ingresa **Publicación de productos** en la barra de búsqueda en la parte superior de la página.
2. En la oportunidad deseada haz clic en la fila del anuncio para abrir la pantalla **Detalles de la oportunidad**.
3. Comprueba que los datos del anuncio sugerido por Mercado Libre sean compatibles con los datos de tu producto.
4. Haz clic en `Confirmar y publicar` para los anuncios con correspondencia, o en `Publicar sin vincular` para los anuncios sin correspondencia.
5. Confirma la acción en la ventana emergente que se muestra haciendo clic en el botón `Confirmar`.

Al vincular, el anuncio se publica en el catálogo de Mercado Libre y se envía a la pestaña **Productos activos** con el status **Procesando**.

Si los productos no coinciden el seller debe buscar en el catálogo de Mercado Libre un anuncio que corresponda a su producto para realizar la vinculación. Para hacerlo, debe ingresarse el nombre del producto o el EAN en el campo **Buscar otro producto para vincular**, en la parte derecha de la pantalla. Los resultados de búsqueda están paginados.

### Vinculación en masa

Para vincular oportunidades en masa después de acceder a la página **Publicación de productos** sigue estos pasos:

1. En el Admin VTEX haz clic en **Marketplace > Mercado Libre > Publicación de productos**, o ingresa **Publicación de productos** en la barra de búsqueda en la parte superior de la página.
2. Selecciona la casilla de las oportunidades que deseas vincular. En la parte inferior de la pantalla se muestra una barra que indica cuántas oportunidades se seleccionaron.
3. Haz clic en el botón `Publicar`.
4. Confirma la acción en la ventana emergente haciendo clic en el botón `Confirmar`.

Después de vincular los anuncios se publican en el catálogo de Mercado Libre y se envían a la pestaña **Productos activos** con el status **Procesando**.

## Oportunidad no válida

Cuando un seller abre la pantalla de detalles de una oportunidad que ya no está disponible, por ejemplo porque ya se publicó por otro camino o dejó de ser válida, el seller ve el status **Oportunidad no válida**, con un aviso y el botón `Atrás` para volver a la lista.
