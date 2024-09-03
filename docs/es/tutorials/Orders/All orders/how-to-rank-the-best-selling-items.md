---
title: 'Cómo ver un ranking de los productos más vendidos'
id: 64LG0uAOysee0YceiSiO66
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.694Z
updatedAt: 2023-03-30T17:21:26.307Z
publishedAt: 2023-03-30T17:21:26.307Z
firstPublishedAt: 2019-01-24T22:09:25.396Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: como-ver-un-ranking-de-los-productos-mas-vendidos
locale: es
legacySlug: como-ver-un-ranking-de-los-productos-mas-vendidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>⚠️ El módulo **Pedidos** no fue creado con el objetivo de servir como herramienta de BI (Business Inteligence). Normalmente, es en el ERP que la tienda tiene acceso a informes de ventas.

Aunque el objetivo principal del módulo **Pedidos** es gestionar el flujo de pedidos, es posible manipular los datos del [informe de pedidos](https://help.vtex.com/es/tutorial/planilha-de-pedidos) para extraer algunas informaciones que pueden ser útiles a su negocio.

Para tener una lista de SKUs vendidos en un determinado período por orden de más vendidos, siga los pasos abajo:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Utilizando los [filtros](https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192), seleccione el período de pedidos que quiera considerar.
3. Haz clic en el botón `Exportar` para hacer la [exportación de pedidos](https://help.vtex.com/es/tutorial/exportacao-de-pedidos-gerenciamento-de-pedidos--tutorials_6417).
4. Abra su email y descargue el enlace dentro de las 72 horas, que es la fecha de vencimiento del enlace.

Cada línea corresponde a un SKU comprado en un determinado pedido. En la columna `Quantity_SKU`, usted tiene la cantidad de SKUs para ese pedido. Y en la columna `ID_SKU`, tiene el ID del SKU.

Por lo tanto, puede utilizar Excel para contar cuántas veces aparece cada SKU (`ID_SKU`), teniendo en cuenta los casos en que la cantidad de SKUs para el mismo pedido es mayor que 1.

Por ejemplo, en el caso siguiente, el SKU de ID 009 aparece dos veces, en ambas con cantidad 1. Por lo tanto, la cantidad total para él es 2. El SKU de ID 034 aparece sólo una vez, pero con cantidad 2, entonces su cantidad total también es 2. Los demás SKUs (001 y 050) aparecen sólo una vez, con cantidad 1. Por eso la cantidad total de cada uno de ellos es 1.

| Quantity_SKU | ID_SKU |
| ---------- | ---------- |
| 1 | 001 |
| 1 | 009 |
| 2 | 034 |
| 1 | 050 |
| 1 | 009 |
