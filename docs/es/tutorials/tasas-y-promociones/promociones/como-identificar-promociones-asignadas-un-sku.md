---
title: 'Cómo identificar promociones asignadas a un SKU?'
id: frequentlyAskedQuestions_4813
status: PUBLISHED
createdAt: 2019-01-24T20:46:01.523Z
updatedAt: 2022-08-31T22:33:34.388Z
publishedAt: 2022-08-31T22:33:34.388Z
firstPublishedAt: 2019-01-24T22:06:21.209Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-identify-promotions-attributed-to-an-sku
legacySlug: como-identificar-promociones-asignadas-un-sku
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

> ⚠️ Las etapas documentadas en este artículo utilizan Google Chrome. Debido a que es una herramienta externa de VTEX, puede actualizarse sin previo aviso.

Hemos escrito este artículo para responder a una pregunta recurrente de los usuários de la plataforma VTEX: cual es el motivo de una promoción ser aplicada a un SKU cuando aparentemente no debería?

Para descubrir qué promociones están siendo asignadas a un SKU, hay que analizar sus `priceTags`.

1. Acceder al carrito con el producto.
2. En Google Chrome, acceder a las **Herramientas de Desarolladores** (`Ctrl+Shift+I`).![ferramentas-do-desenvolvedor](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_1.png)
3. Seleccione **Network** y presione `F5` para registrar la carga de la página.![network-f5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_2.png)
4. Después de la carga, presione `Ctrl+F` para hacer búsqueda en la ventana de Herramientas de Desarolladores y busque por `orderForm`.![order-form](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_3.png)
5. Hacer click en `orderForm` y ir a `items`. Después de hacer click en `items`, hacer click en los números (0, 1, 2 etc.) para ver las características del producto deseado. En nuestro ejemplo, ya que tenemos sólo un elemento, este se representa por el número `0` en el array.![items-0](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_4.png)
6. Después de hacer click en el número, hacia abajo el scroll hasta `priceTags`. Haga click en `priceTags` y luego haga click en los números (`0`, `1`, `2` etc.) para ver las características de la promocion deseada. En nuestro ejemplo, ya que tenemos solamente una promoción, esta se representa por el número `0` en el array. Después de eso, búsqueda por `identifier` de la promoción.![priceTags-0-identifier](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_5.png)
7. En otra pestaña, acceder a la URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{numero-del-identifier}`. Esta es la promoción que se aplica efectivamente al producto en el carrito. Comprueba la configuración de la promoción y vea si las condiciones son aplicables al SKU en cuestión.![promo-debug-help](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/como-identificar-promociones-asignadas-un-sku_6.png)

## Más información

- [Cómo funcionan las promociones](/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
- [Identificar las promociones aplicadas en el carrito](/es/docs/tutorials/como-identificar-las-promociones-aplicadas-en-el-carrito)

