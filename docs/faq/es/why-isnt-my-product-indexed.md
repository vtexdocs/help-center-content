---
title: ¿Por qué el producto no indexa?
id: frequentlyAskedQuestions_1608
status: PUBLISHED
createdAt: 2017-04-27T22:27:09.727Z
updatedAt: 2022-05-24T22:36:40.718Z
publishedAt: 2022-05-24T22:36:40.718Z
firstPublishedAt: 2017-04-27T23:02:35.077Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_3
slug: por-que-el-producto-no-indexa
legacySlug: por-que-el-producto-no-indexa
---

### Tiempo límite

Si un producto tiene varias ocurrencias en la indexación, como explica nuestro artículo [Cómo funciona la indexación](https://help.vtex.com/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion--tutorials_256), éste puede salir de la fila de indexación por atingir el tempo límite de espera.

Para ilustrar, vea el ejemplo abajo.

Producto A con 5 SKUs y activo en 5 políticas comerciales.

En este escenario, el producto A sufrirá 25 validaciones a cada modificación, eso porque para cada SKU serán verificadas las disponibilidades de stock y las reglas de precio y promociones, dentro de cada política comercial. Para evitar tantas validaciones, la mejor salida es el ajuste y disminución del número de políticas comerciales.

Como se explica en el artículo [Configurar política comercial para marketplace
](https://help.vtex.com/es/tutorial/configurar-politica-comercial-para-marketplace--tutorials_404), es posible que una misma política sea utilizada para más de un marktplace, siempre que ellos usen el mismo catálogo, precio y stock.

También está la posibilidad de reducir el número de SKUs por producto, en este caso, se debe dividir uno de los productos en más de uno, buscando aumentar la especificidad del producto. Ej.:

Antes:
Producto: Camisa a Rayas. SKUs: Amarilla P, Amarilla M, Amarilla G, Azul P, Azul M, Azul G.

Después:
Producto: Camisa Amarilla. SKUs: P, M, G.
Producto: Camisa Azul. SKUs: P, M, G.

Para verificar si su producto realmente no ha sido indexado, verifique en el informe de indexación, en **Productos que no han sido indexados**. Para más detalles, verifique en el botón **Log** el motivo de la no indexación.

### Política comercial

Además, es necesario que la política comercial del producto esté asociada a un Website válido.

Si en el CMS algún Website tiene configuraciones o una estructura de directorios incorrecta, hay riesgos de que el producto no se pueda indizar.
