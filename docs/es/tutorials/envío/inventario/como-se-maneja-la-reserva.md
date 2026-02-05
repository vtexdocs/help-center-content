---
title: 'Cómo se maneja la reserva'
id: tutorials_92
status: PUBLISHED
createdAt: 2017-04-27T22:19:56.753Z
updatedAt: 2024-09-03T17:29:38.830Z
publishedAt: 2024-09-03T17:29:38.830Z
firstPublishedAt: 2017-04-27T23:00:42.751Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-does-reservation-work
legacySlug: como-se-maneja-la-reserva, analizar-las-reservas-de-un-producto
locale: es
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

La reserva es una solución VTEX que impide que el mismo ítem se venda más de una vez. Una vez finalizada la compra, el ítem comprado se resta del _stock_ disponible y pasa internamente al status **Reservado**.

> ℹ️ En VTEX, Almacén es el lugar físico donde se almacenan los ítems. Para que se pueda identificar de qué almacén recogerán los ítems las transportadoras, los almacenes deben estar registrados en la plataforma. Consulta el artículo [Almacén](/es/docs/tutorials/almacen) para obtener más información. El stock es una lista de los ítems que tu tienda tiene en stock. Puedes añadir y hacer un seguimiento de los ítems disponibles en tu tienda a través de la Gestión del stock. Consulta el artículo [Gestión del stock](/es/docs/tutorials/gestionar-items-en-inventario) para obtener más información.

Después de ser vendido, un ítem pasa por los siguientes status en el_ stock _de tu tienda:

1. **[Reserva autorizada](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-autorizada)** tras la finalización de la compra.
2. **[Reserva confirmada](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-confirmada)**: tras la aprobación del pago.
3. **[Reserva reconocida](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-reconocida)**: cuando el status del pedido cambia a **Preparando entrega **en el módulo **Pedidos**.
4. **[Dado de baja en el stock:](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#dado-de-baja-en-el-stock)** pedido en transporte para entrega.

Puedes seguir el status de la reserva de los ítems a través del Admin VTEX, [como se describe al final de este artículo. ](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#como-seguir-el-status-de-la-reserva)

> ⚠️ El hecho de añadir productos al carrito no genera reserva ni prioridad. Un ítem solo pasa al status Reserva autorizada tras el cliente finalizar el pedido.

## Reserva autorizada

El ítem comprado pasará al status **Reserva autorizada** en el stock de tu tienda después de que el cliente finalice el pedido. Este status indica internamente que la unidad de stock está reservada y no se puede volver a vender. En esta etapa, el ítem aún no ha salido del almacén y el pago aún no ha sido aprobado.

El ítem permanece en este status durante un tiempo determinado, y si no se confirma el pago, vuelve a estar disponible para la venta. La validez de la reserva se calcula a través de la siguiente fórmula:

_plazo de vencimiento del pago + plazo de reserva en el stock_

* **Plazo de vencimiento del pago:** el tiempo (en días) establecido para realizar el pago. Para los pagos con boleto (Brasil) o [pagaré](/es/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ#configurar-pagare), este plazo se puede configurar en el módulo **[Pagos](/es/docs/tracks/como-funciona-el-modulo-de-pagos)**. En cambio, para los demás medios de pago, como tarjeta de crédito y _wallet_, no se puede configurar un plazo de vencimiento de pago. El flujo de pago se inicia justo después del _checkout_ y la aprobación o denegación se realizará en distintos momentos, según el medio de pago seleccionado.
* **Plazo de reserva en el stock:** se establece automáticamente, siguiendo las reglas que se indican a continuación.
    * **cuatro días consecutivos**: cuando el día de vencimiento del pago sea domingo, lunes o martes.
    * **cinco días consecutivos:** cuando el día de vencimiento del pago sea miércoles, jueves o viernes.
    * **seis días consecutivos:** cuando el día de vencimiento del pago sea sábado.

> ❗ Los pedidos incompletos pueden tener un plazo de reserva de 11 días consecutivos. Para saber más, consulta el artículo [Cómo funcionan los pedidos incompletos.](/es/docs/tutorials/como-encontrar-un-pedido)

Para el markeplace externo, si la información del tiempo de reserva se envía por el campo `lockTTL`, el tiempo de reserva no será calculado por la plataforma VTEX, es si determinado por la fecha límite en el campo. Esto se hace mediante el llamado [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders).

## Reserva confirmada

El ítem pasa al status **Reserva confirmada** tras la aprobación del pago del pedido, lo que significa que la reserva ya no estará sujeta al periodo de caducidad. 

Si se cancela el pedido, también se cancelará la reserva y el ítem volverá a aparecer como disponible en el _stock_.

## Reserva reconocida

El status **Reserva reconocida** se produce cuando el status del pedido que generó la reserva cambia de **Iniciar manipulación** a **Preparando entrega** en la **Gestión de pedidos**, es decir, la manipulación de este ítem ya ha tenido lugar. El ítem ya no existe en el stock físico, ya que está con la transportadora. 

La plataforma VTEX no resta automáticamente los ítems del _stock_. Los ítems vendidos seguirán teniendo el status **Reserva reconocida** hasta que el administrador de la tienda o el ERP
[actualicen la cantidad de ítems en el](#dado-de-baja-en-el-stock) _stock_.

## Reducción del stock

Al dar de baja un ítem del _stock_ se actualiza la cantidad de ítems disponibles para la venta. Esta acción la debe realizar exclusivamente el administrador de la tienda o el ERP a través de la [gestión del inventario](/es/docs/tutorials/gestionar-items-en-inventario) o de la [API de actualización de inventario](https://developers.vtex.com/vtex-rest-api/reference/updateinventorybyskuandwarehouse).

VTEX no actualiza la cantidad de ítems que un SKU tiene a partir del historial de sus movimientos.

Cuidados para tener en cuenta al momento de dar de baja un ítem del _stock_:

- Para dar de baja un ítem del _stock_, se debe actualizar la cantidad total de los ítems en el inventario de acuerdo con el _stock_ físico disponible para la venta.
- Cuando la tienda actualiza la cantidad de ítems que un SKU tiene, las reservas reconocidas de ese SKU vuelven a cero. 
- A la vez, debes prestar atención al momento de actualizar el inventario. Es posible que las reservas de los pedidos con SKU reservados no se tengan en cuenta si el inventario se actualizó después de que se preparó el pedido (es decir, después de que el pedido pasó por el status `Comenzar preparación`). Esto ocurre porque VTEX no controla los ítems que la tienda tomó para preparar.  Se recomienda actualizar la cantidad de ítems en el inventario luego de facturar el pedido.

### Ejemplo

El inventario de una tienda tiene tres unidades de un ítem. Un cliente realiza una compra y, una vez finalizado el pedido, una unidad del ítem cambia al status “Reservado”. A partir de ese momento, habrá dos ítems disponibles y un ítem reservado. Luego de la confirmación de pago, el status del ítem cambia a **Reserva confirmada**. Después de iniciada la preparación, el pedido tiene el status de **Reserva reconocida**. 

Cuando el administrador de la tienda o el ERP actualice la cantidad de ese ítem en el inventario, restando la cantidad vendida, la plataforma actualizará la cantidad de ítems disponibles a 2 unidades, lo cual puede interpretarse como una reducción del _stock_. En este caso, la plataforma tiene solo dos unidades de ese ítem en el inventario y ninguna unidad reservada.

> ❗ Al confirmar el inicio de la preparación, el seller pasa a ser el responsable de la reserva de los ítems del pedido. A partir de ese momento, si hay alguna actualización en el inventario, la plataforma de VTEX desestima la reserva de estos SKU. Por lo tanto, actualiza el inventario de los SKU de un pedido determinado únicamente al momento de la facturación. De este modo, se evitan las diferencias de inventario que dependen de la interacción con la [integración del backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) de la tienda.

## Cómo seguir el status de la reserva

1. En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, o escribe **Gestión del stock** en la barra de búsqueda en la parte superior de la página.
2. Se mostrará una lista con los ítems de la tienda. Elige el ítem que quieres consultar.
3. En la columna `Reservado`, haz clic en el número de color azul. Si no hay ningún número azul en esta columna, significa que este ítem no tiene unidades reservadas.
4. Se abrirá una nueva ventana con el seguimiento de la reserva de los ítems del mismo SKU. En la columna `Status` puedes ver el status de la reserva.

Como se ha descrito anteriormente, el status dado de baja en el stock resulta de la actualización del stock por parte del administrador de la tienda. Por lo tanto, no es posible ver este status en la plataforma. Solo puedes consultar la cantidad de ítems disponibles para la venta y el movimiento de los ítems a través de la [Gestión del stock](/es/docs/tutorials/gestionar-items-en-inventario).

> ℹ️ Todos los status aquí descritos son internos y exclusivos de VTEX para el control de la venta de los ítems. El status de la reserva es una consecuencia del status del pedido. Algunos cambios dependen de acciones de los compradores, y otros de actualizaciones manuales o del ERP.

