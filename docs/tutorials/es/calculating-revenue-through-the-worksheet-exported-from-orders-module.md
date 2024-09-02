---
title: 'Calcular los ingresos a partir de la planilla exportada del módulo Pedidos'
id: 51KTkEqie4UC46qO8KgGGE
status: PUBLISHED
createdAt: 2018-02-21T13:17:33.632Z
updatedAt: 2023-03-31T13:22:08.224Z
publishedAt: 2023-03-31T13:22:08.224Z
firstPublishedAt: 2018-02-21T13:37:37.839Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: calcular-ingresos-a-partir-de-la-planilla-exportada-del-modulo-pedidos
locale: es
legacySlug: calcular--ingresos-a-partir-de-la-planilla-del-oms
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

La pantalla inicial del módulo **Pedidos** muestra los ingresos totales obtenidos por su tienda de acuerdo con los criterios definidos en los [filtros](https://help.vtex.com/es/tutorial/filtrar-todos-pedidos--tutorials_192) de búsqueda.

Sin embargo, es posible que desee calcular los ingresos en un período determinado a partir de la planilla de pedidos exportada de Gestión de pedidos.

Esto es porque, como en esta planilla se enumeran decenas de atributos de los pedidos, se obtiene flexibilidad para filtrarlos de acuerdo con más criterios.

Para calcular los ingresos totales de la planilla, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. [Exporte la planilla de pedidos](https://help.vtex.com/es/tutorial/exportacao-de-pedidos-no-modulo-pedidos--tutorials_6417), eligiendo en los filtros de búsqueda el intervalo de tiempo deseado.
3. Abra su email y descargue el enlace dentro de las 72 horas, que es la fecha de vencimiento del enlace.
4. Quite todos los valores duplicados de la segunda columna (__Order__). Esto debe hacerse porque, en los casos de compras de más de un SKU, se generan varias líneas para el mismo pedido - una para cada SKU.
5. Agregue los valores de la columna __Total Value__. En esta columna queda el valor total del pedido (es decir, ya considerando todos los SKUs del carrito).

<div class = "alert alert-info">
La suma de los valores de la columna Total Value (después de la eliminación de los pedidos duplicados) es el ingreso total obtenido con los pedidos seleccionados en la planilla.
</div>

Para entender todas las columnas de la planilla, vea el artículo [Informe de pedidos](https://help.vtex.com/es/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY).
