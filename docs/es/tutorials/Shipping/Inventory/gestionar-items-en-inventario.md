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
locale: es
legacySlug: gestionar-items-en-inventario
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

En VTEX, [almacén](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) es la identificación de las ubicaciones físicas de almacenamiento de productos de la tienda y _stock_ es la relación entre los almacenes y los SKU disponibles para la venta. Para visualizar los SKU registrados en el [catálogo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) y los respectivos almacenes, accede al Admin VTEX y haz clic en **Catálogo > Stock > Gestión del stock**.

Este artículo detalla la información de la página **Gestión del stock**. Aprende cómo:

* [Los datos del _stock_ están divididos](#datos-del-stock).
* [Los filtros de búsqueda están dispuestos para facilitar la búsqueda de SKU específicos](#filtros).

<div class="alert alert-info"> 
Para acceder al <i>stock</i> utilizando SKU, muelles o almacenes a través de API, utiliza la <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-"> Inventory API</a>.
</div>

Otras acciones disponibles en la página **Gestión del stock** son:

* [Hacer seguimiento del historial de movimientos del stock](/es/tutorial/historial-de-movimientos-del-stock--5AM7xbmMzmKSEQewakamc2).
* [Comprobar que los SKU tienen unidades reservadas](/es/tutorial/como-se-maneja-la-reserva--tutorials_92).
* [Actualizar la cantidad de SKU que están disponibles para la venta](/es/tutorial/actualization-de-la-cantidad-de-items-en-stock--2MDwYV1COA6YuoiY22AyGo). 

## Datos del stock

En el Admin VTEX, accede a **Catálogo > Stock > Gestión de stock**, o escribe **Gestión de stock** en la barra de búsqueda en la parte superior de la página. Aparecerá una tabla con los SKU y sus respectivos almacenes. La tabla está organizada de la siguiente manera:

* **Filas**: cada fila contiene la información de un SKU y un almacén. Esto te permite comprobar los detalles de cada SKU por almacén. 
* **Columnas**: identifican diferentes aspectos del SKU en un almacén y se dividen en:
    * **Productos**: el nombre del producto.
    * **Almacén**: indica el almacén de la tienda en el que se encuentra el SKU.
    * **ID del SKU**: código que identifica el SKU.
    * **Última actualización**: número de unidades del SKU más reciente registrado en la plataforma VTEX.<p><div class = "alert alert-info">Al hacer clic en cualquier valor en la columna <b>Última actualización</b>, se abrirá la ventana <a href="https://help.vtex.com/es/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2">Registro de actualizaciones</a> con datos de cambios. Cada fila corresponde a una actualización, y las columnas contienen el usuario que realizó el cambio, la fecha de la última actualización y la cantidad de ítems antes y después de la actualización. Solo puedes consultar las últimas 50 actualizaciones en el registro de un SKU.</div></p>
    * **Reservado**: unidades de ítems del SKU reservadas. Los pedidos de las reservas aún no tienen el pago aprobado. 
    Haz clic en los valores de esta columna para ver los detalles de los datos de las reservas del SKU y se te redirigirá a la gestión de pedidos. Para saber más sobre cómo consultar una reserva, consulta [Cómo seguir el status de la reserva](/es/tutorial/how-does-reservation-work--tutorials_92#como-seguir-el-status-de-la-reserva).
    * **Enviados**: unidades del SKU enviadas. Los ítems de esta columna provienen de pedidos con status `Pago aprobado`, `Preparando entrega` o `Facturado`. <p>Al hacer clic en los ítems de la columna para ver los detalles de los SKU enviados, se te redirigirá a la gestión de pedidos.</p>
    * **Disponibles**: unidades del SKU disponibles para la venta.
    * **Actualizar recuento**: campo para actualizar manualmente la cantidad disponible de ítems del SKU. Para saber más sobre cómo actualizar el recuento, consulta el artículo [Cómo actualizar stock](/es/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo).
    * **stock ilimitado**: permite registrar unidades ilimitadas del SKU para que siempre esté disponible en el _checkout_ de tu tienda. Esto elimina la necesidad de actualizar el recuento del SKU.
    * **Lead time (días):** configuración opcional del tiempo de envío al nivel de SKU. Al definir un tiempo para el SKU de un almacén, él se agregará al [cálculo de tiempo total de envío](/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) del pedido. Por defecto, el [lead time](/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B) está definido como zero días y su contaje se realiza en días laborables. Puedes [alterarlo para días naturales](/es/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B#configurar-el-contaje-del-lead-time-en-dias-naturales-opcional) y, si quieres configurar periodos en horas, minutos y segundos, puedes utilizar el endpoint [Update inventory by SKU and warehouse endpoint](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

<div class="alert alert-danger">
Para garantizar que los ítems agregados al stock estén disponibles para venta en la tienda, el <a href="url">ID del SKU</a> no debe contener <b>el número cero a la izquierda</b>. Por ejemplo, el sistema no reconoce ID con el formato <code>01</code>, <code>02</code> , <code>021</code>, ya que espera el formato <code>1</code>, <code>2</code>, <code>21</code>.
</div>

La cantidad total de ítems en la página **Gestión de stock** se actualiza en tiempo real, pero puede haber un retraso de hasta 1 hora para que la información aparezca en el [historial de movimientos](/pt/tutorial/historico-de-movimentacoes-do-inventario--5AM7xbmMzmKSEQewakamc2).

### Filtros

En la página **Gestión del stock**, para realizar una búsqueda en la barra, simplemente escribe el nombre o el ID de SKU y haz clic en <i class="fa-solid fa-magnifying-glass"></i> la lupa. Para utilizar los filtros, consulta los filtros disponibles:

*   **Última actualización**: devuelve la cantidad actualizada de ítems en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Reservado**: devuelve la cantidad de ítems reservados en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Disponible**: devuelve la cantidad de ítems disponibles en _stock_. Puedes ingresar un valor `Mayor o igual que`, `Menor o igual que` o `Entre` un rango de ítems. Si no ingresas ningún valor, `Todos` los ítems se muestran en la tabla.

*   **Almacén**: selecciona uno o más almacenes deseados para devolver todos los ítems presentes.

<div class="alert alert-danger">
La lista de <i>stock</i> está limitada a diez mil filas. Esto significa que incluso si un SKU no está disponible en la lista, se puede encontrar o acceder utilizando los filtros. El límite de filas del <i>stock</i> mejora el rendimiento de las consultas. Para acceder a un SKU que no está disponible en la página, busca o utiliza los filtros para obtener una búsqueda más precisa.
</div>

## Artículos relacionados

* [Actualización de la cantidad de ítems en stock](/es/tutorial/actualization-de-la-cantidad-de-items-en-stock--2MDwYV1COA6YuoiY22AyGo)
* [Como se maneja la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92)
* [El SKU tiene unidades positivas en el stock, pero no está disponible para la venta](/es/faq/sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda--6HIEgJSYM8S05IyWHnIcOn)
* [¿Por qué mi stock está negativo?](/es/faq/por-que-meu-estoque-esta-negativo--frequentlyAskedQuestions_159)
