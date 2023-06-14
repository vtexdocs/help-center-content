---
title: '¿Por qué mi inventario está negativo?'
id: frequentlyAskedQuestions_159
status: PUBLISHED
createdAt: 2017-04-27T22:39:51.880Z
updatedAt: 2023-03-22T20:34:48.834Z
publishedAt: 2023-03-22T20:34:48.834Z
firstPublishedAt: 2017-04-27T23:01:42.612Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-mi-inventario-esta-negativo
locale: es
legacySlug: por-que-mi-inventario-esta-negativo
---

El cálculo de la cantidad disponible de un item se realiza de la siguiente manera:

`en stock - reserva = disponible`

La cantidad en inventario de un artículo puede ser editada por la tienda.

Cuando la cantidad disponible es negativa, esto significa que __existen más items reservados que la cantidad total insertada en el inventario__. De esta forma, vemos que el stock se ha actualizado a cero o a una cantidad menor que cero después de que se hayan efectuado reservas.

La cantidad en inventario de un artículo puede ser editada por la tienda. La cantidad disponible se dará por el resultado del cálculo anteriormente descrito.

El escenario de inventario negativo se produce cuando se intenta dar baja en el item de un pedido cuando este item sigue estando reservado por el sistema. Este escenario se produce cuando se intenta disminuir la cantidad de un item despues que ya se compró, pero el item sigue siendo reservado por el sistema y no puede tener su stock disminuído.

## Baja en el inventario

El flujo correcto prevé que la baja en el inventario sólo ocurra después del status __Preparando Entrega__. Después de este status, la reserva ya está reconocida. Antes de eso, el sistema entenderá que el item que se está disminuyendo no es lo que está en reserva, actualizando el inventario incorrectamente.

Para ajustar este escenario, el stock del elemento se debe actualizar con la cantidad de elementos físicos en inventario. De esta manera, el valor de los items en inventario debe ser la suma de los items disponibles más los items que están reservados y que aún no están en el status __Preparando Entrega__. La corrección se puede realizar siguiendo los pasos abajo:

1. En el Admin VTEX, accede a __Catalogo > Stock__, o escribe __Stock__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en __Gestión del stock__.
3. Busque el SKU deseado y haga clic en el resultado de la búsqueda.
4. En la columna __Actualizar recuento__, rellene el valor indicado en la descripción anterior.
5. Haga clic en __Guardar__.

<div class="alert alert-warning">
Cuando dos o más stocks utilizan la misma <a href="https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV">política comercial</a> y uno de estos stocks tiene una cantidad negativa de unidades, el SKU pasa a no estar disponible para la venta, aunque haya una cantidad disponible en uno de los stocks.  
</div>
