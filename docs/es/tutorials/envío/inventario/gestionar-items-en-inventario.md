---
title: 'Gestión del stock'
id: tutorials_139
status: PUBLISHED
createdAt: 2017-04-27T22:17:21.085Z
updatedAt: 2024-11-04T21:16:13.814Z
publishedAt: 2024-11-04T21:16:13.814Z
firstPublishedAt: 2017-04-27T23:00:44.889Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-stock-items
legacySlug: gestionar-items-en-inventario
locale: es
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

En VTEX, [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) es la identificación de las ubicaciones físicas de almacenamiento de productos de la tienda y _stock_ es la relación entre los almacenes y los SKU disponibles para la venta. Para visualizar los SKU registrados en el [catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) y los respectivos almacenes, accede al Admin VTEX y haz clic en **Catálogo > Stock > Gestión del stock**.

Este artículo detalla la información de la página **Gestión del stock**. Aprende cómo:

* [Los datos del _stock_ están divididos](#datos-del-stock).
* [Los filtros de búsqueda están dispuestos para facilitar la búsqueda de SKU específicos](#filtros).

> ℹ️ Para acceder al *stock* utilizando SKU, muelles o almacenes a través de API, utiliza la [ Inventory API](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

Otras acciones disponibles en la página **Gestión del stock** son:

* [Hacer seguimiento del historial de movimientos del stock](https://help.vtex.com/es/tutorial/historial-de-movimientos-del-stock--5AM7xbmMzmKSEQewakamc2).
* [Comprobar que los SKU tienen unidades reservadas](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva--tutorials_92).
* [Actualizar la cantidad de SKU que están disponibles para la venta](https://help.vtex.com/es/tutorial/actualization-de-la-cantidad-de-items-en-stock--2MDwYV1COA6YuoiY22AyGo). 

## Datos del stock

En el Admin VTEX, accede a **Catálogo > Stock > Gestión de stock**, o escribe **Gestión de stock** en la barra de búsqueda en la parte superior de la página. Aparecerá una tabla con los SKU y sus respectivos almacenes. La tabla está organizada de la siguiente manera:

* **Filas**: cada fila contiene la información de un SKU y un almacén. Esto te permite comprobar los detalles de cada SKU por almacén. 
* **Columnas**: identifican diferentes aspectos del SKU en un almacén y se dividen en:
    * **Productos**: el nombre del producto.
    * **Almacén**: indica el almacén de la tienda en el que se encuentra el SKU.
    * **ID del SKU**: código que identifica el SKU.
    * **Última actualización**: número de unidades del SKU más reciente registrado en la plataforma VTEX.> ℹ️ Al hacer clic en cualquier valor en la columna **Última actualización**, se abrirá la ventana [Registro de actualizaciones](https://help.vtex.com/es/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2) con datos de cambios. Cada fila corresponde a una actualización, y las columnas contienen el usuario que realizó el cambio, la fecha de la última actualización y la cantidad de ítems antes y después de la actualización. Solo puedes consultar las últimas 50 actualizaciones en el registro de un SKU.
    * **Reservado**: unidades de ítems del SKU reservadas. Los pedidos de las reservas aún no tienen el pago aprobado. 
    Haz clic en los valores de esta columna para ver los detalles de los datos de las reservas del SKU y se te redirigirá a la gestión de pedidos. Para saber más sobre cómo consultar una reserva, consulta [Cómo seguir el status de la reserva](https://help.vtex.com/es/tutorial/how-does-reservation-work--tutorials_92#como-seguir-el-status-de-la-reserva).
    * **Enviados**: unidades del SKU enviadas. Los ítems de esta columna provienen de pedidos con status `Pago aprobado`, `Preparando entrega` o `Facturado`. Al hacer clic en los ítems de la columna para ver los detalles de los SKU enviados, se te redirigirá a la gestión de pedidos.
    * **Disponibles**: unidades del SKU disponibles para la venta.
    * **Actualizar recuento**: campo para actualizar manualmente la cantidad disponible de ítems del SKU. Para saber más sobre cómo actualizar el recuento, consulta el artículo [Cómo actualizar stock](https://help.vtex.com/es/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
    * **stock ilimitado**: permite registrar unidades ilimitadas del SKU para que siempre esté disponible en el _checkout_ de tu tienda. Esto elimina la necesidad de actualizar el recuento del SKU.
    * **Lead time (días):** configuración opcional del tiempo de envío al nivel de SKU. Al definir un tiempo para el SKU de un almacén, él se agregará al [cálculo de tiempo total de envío](https://help.vtex.com/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) del pedido. Por defecto, el [lead time](https://help.vtex.com/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B) está definido como zero días y su contaje se realiza en días laborables. Puedes [alterarlo para días naturales](https://help.vtex.com/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#configurar-el-contaje-del-lead-time-en-dias-naturales-opcional) y, si quieres configurar periodos en horas, minutos y segundos, puedes utilizar el endpoint [Update inventory by SKU and warehouse endpoint](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

> ❗ Para garantizar que los ítems agregados al stock estén disponibles para venta en la tienda, el [ID del SKU](url) no debe contener **el número cero a la izquierda**. Por ejemplo, el sistema no reconoce ID con el formato `01`, `02` , `021`, ya que espera el formato `1`, `2`, `21`.

La cantidad total de ítems en la página **Gestión de stock** se actualiza en tiempo real, pero puede haber un retraso de hasta 1 hora para que la información aparezca en el [historial de movimientos](https://help.vtex.com/pt/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2).

### Filtros

En la página **Gestión del stock**, para realizar una búsqueda en la barra, simplemente escribe el nombre o el ID de SKU y haz clic en <i class="fa-solid fa-magnifying-glass"></i> la lupa. Para utilizar los filtros, consulta los filtros disponibles:

*   **Última actualización**: devuelve la cantidad actualizada de ítems en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Reservado**: devuelve la cantidad de ítems reservados en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Disponible**: devuelve la cantidad de ítems disponibles en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Almacén**: selecciona uno o más almacenes deseados para devolver todos los ítems presentes.

> ❗ La lista de *stock* está limitada a diez mil filas. Esto significa que incluso si un SKU no está disponible en la lista, se puede encontrar o acceder utilizando los filtros. El límite de filas del *stock* mejora el rendimiento de las consultas. Para acceder a un SKU que no está disponible en la página, busca o utiliza los filtros para obtener una búsqueda más precisa.

## Artículos relacionados

* [Actualización de la cantidad de ítems en stock](https://help.vtex.com/es/tutorial/actualization-de-la-cantidad-de-items-en-stock--2MDwYV1COA6YuoiY22AyGo)
* [Como se maneja la reserva](https://help.vtex.com/es/tutorial/como-se-maneja-la-reserva--tutorials_92)
* [El SKU tiene unidades positivas en el stock, pero no está disponible para la venta](https://help.vtex.com/es/faq/sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda--6HIEgJSYM8S05IyWHnIcOn)
* [¿Por qué mi stock está negativo?](https://help.vtex.com/es/faq/por-que-meu-estoque-esta-negativo--frequentlyAskedQuestions_159)
