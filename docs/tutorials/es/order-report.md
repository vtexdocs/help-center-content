---
title: 'Informe de pedidos'
id: 31m1ewsmsEe0WS4So2aGMY
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.311Z
updatedAt: 2023-05-31T15:43:26.524Z
publishedAt: 2023-05-31T15:43:26.524Z
firstPublishedAt: 2019-01-24T22:03:18.967Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: informe-de-pedidos
legacySlug: planilla-de-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

La exportación de pedidos en la página [Todos los pedidos](https://help.vtex.com/en/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) genera un informe en formato .csv que contiene una serie de detalles sobre los pedidos de su tienda.

Cada fila de la plantilla se refiere a un [SKU](https://help.vtex.com/es/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u). Por ejemplo, si en un pedido hay 3 SKUs, este será referenciado en 3 filas en el informe. Cada fila mostrará los datos de un SKU del pedido.

<div class = "alert alert-info">
El link del informe de pedidos está disponible para descargar durante seis horas.
</div>

Las columnas corresponden a información específica sobre el pedido, conforme se describe a continuación.

*   **Origin**: indica si el origen del pedido es [_marketplace o fulfillment_](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).
*   **Order**: es el ID del pedido, aparece en la pantalla de atributos del pedido, en el módulo «Gestión de pedidos».
*   **Sequence**: es la secuencia numérica de la transacción del pedido.
*   **Creation Date**: es la fecha y hora en que el cliente realizó el pedido.
*   **Client Name**: es el nombre del cliente que realizó el pedido.
*   **Client Last Name**: es el apellido del cliente que realizó el pedido.
*   **Client Document**: es el número de identificación fiscal del cliente que realizó el pedido.
*   **Email**: es el correo electrónico del cliente que realizó el pedido.
*   **Phone**: es el número de teléfono del cliente que realizó el pedido.
*   **UF**: es el estado, provincia, región o departamento desde el que el cliente realizó el pedido.
*   **City**: es la ciudad desde la que el cliente realizó el pedido.
*   **Address Identification**: es el ID de la dirección de entrega.
*   **Address Type**: es el tipo de dirección de entrega (domicilio o recogida).
*   **Receiver Name**: es el nombre de la persona que recibirá la entrega del pedido.
*   **Street**: calle de la dirección de entrega.
*   **Number**: número de la dirección de entrega.
*   **Complement**: es el complemento de la dirección de entrega.
*   **Neighborhood**: barrio de la dirección de entrega.
*   **Reference**: referencia de la dirección de entrega.
*   **Postal Code**: es el código postal de la dirección de entrega.
*   **SLA Type**: es el tipo de entrega (convencional, recogida en la tienda, entrega rápida).
*   **Courier**: es la transportadora responsable de la entrega.
*   **Estimate Delivery Date**: es el plazo de entrega.
*   **Delivery Deadline**: es el tiempo total de entrega del pedido en días hábiles (5bd = 5 business days o días hábiles).
*   **Status**: es el _status_ del pedido en el momento de exportación la plantilla.
*   **Last Change Date**: es la fecha y hora de la última alteración en el _status _del pedido. 
*   **UtmMedium**: es el utm_medium del pedido, si lo hay.
*   **UtmSource**: es el utm_source del pedido, si lo hay.
*   **UtmCampaign**: es el utm_campaign del pedido, si lo hay.
*   **Coupon**: es el ID del cupón del pedido, si lo hay.
*   **Payment System Name**: es el medio de pago usado en el pedido.
*   **Installments**: es el número de cuotas de pago del pedido.
*   **Payment Value**: es el valor que el cliente pagó por el pedido, ya con los descuentos o promociones aplicados.
*   **Quantity_SKU**: es la cantidad de ítems del mismo SKU.
*   **ID_SKU**: es el ID del SKU.
*   **Category Ids Sku**: son los ID de las categorías en los que se encuentra el SKU. Esta información se presenta siguiendo el árbol de departamento/categoría/subcategoría. Por ejemplo, si el valor es /1000003/1000016/, eso significa que el SKU está en la categoría 1000016, que a su vez forma parte del departamento 1000003.
*   **Reference Code**: es el código de referencia del SKU.
*   **SKU Name**: es el nombre del SKU registrado en el catálogo.
*   **SKU Value**: es el precio registrado para el SKU.
*   **SKU Selling Price**: es el precio al que se vendió el SKU realmente, ya con los descuentos o promociones aplicados.
*   **SKU Total Price**: es el valor total del SKU en el pedido, considerando todos os ítems del SKU.
*   **SKU Path**: es la URL donde se almacena el SKU en el sistema VTEX.
*   **Item Attachments**: son los anexos del SKU.
*   **List Id**: es el ID de la lista, si el SKU está incluido en alguna. 
*   **List Type Name**: es el nombre del tipo de lista en el que se encuentra el SKU, si está incluido en alguna.
*   **Service (Price/ Selling Price)**: es el servicio vinculado al SKU en el pedido, si lo hay. 
*   **Shipping List Price**: es el valor del flete por SKU.
*   **Shipping Value**: es el valor del flete por SKU que realmente se aplica al pedido.
*   **Total Value**: es el valor total del pedido. Atención: no es el valor del SKU, sino el valor total del pedido. Si hay otros SKUs en el mismo pedido, el valor de estos también se considerará en ese total.
*   **Discounts Totals**: es el valor total de los descuentos aplicados al pedido.
*   **Discounts Names**: son las promociones aplicadas al pedido. 
*   **Call Center Email**: es el _email_ del operador de televentas que realizó el pedido, si es el caso.
*   **Call Center Code**: es el ID del operador de televentas que realizó el pedido, si es el caso.
*   **Tracking Number**: es el número de rastreo del pedido.
*   **Host**: es el _host_, configurado en el License Manager, que recibió el pedido.
*   **GiftRegistry ID**: es el ID de la tarjeta de regalos del pedido, si la hay. 
*   **Seller Name**: es el nombre del _seller_ del pedido.
*   **Status TimeLine**: es la línea de tiempo de los _status _del pedido, desde su creación y hasta el momento de exportación de la plantilla. 
*   **Obs**: es la observación que el cliente incluye en el pedido, si la hay.
*   **UtmiPart**: es la UTM utmi_pc, para el rastreo interno del tráfico en el sitio web. Por ejemplo, para rastrear el origen de un clic específico en un _banner_ de la propia tienda.
*   **UtmiCampaign**: es la UTM utmi_cp, para el rastreo interno del tráfico en el sitio web. Por ejemplo, para rastrear el origen de un clic específico en un _banner_ de la propia tienda.
*   **UtmiPage**: es la UTM utmi_p, para el rastreo interno del tráfico en el sitio web. Por ejemplo, para rastrear el origen de un clic específico en un _banner_ de la propia tienda.
*   **Seller Order Id**: es el ID del pedido en el _seller_, si se trata de una venta como _marketplace_.
*   **Acquirer**: es el adquirente que intervino en la transacción.
*   **Authorization Id**: es la ID de la autorización.
*   **TID**: [es el Transaction ID](https://app.contentful.com/pt/faq/como-achar-nsu-e-tid-do-pedido) del pedido.
*   **NSU**: [es el número secuencial único](https://app.contentful.com/pt/faq/como-achar-nsu-e-tid-do-pedido) del pedido.
*   **Card First Digits**: son los seis primeros dígitos de la tarjeta utilizada en la compra.
*   **Card Last Digits**: son los cuatro últimos dígitos de la tarjeta utilizada en la compra.
*   **Payment Approved By**: es el _email_ de la persona que aprobó el pago (aplicado cuando la aprobación se realiza manualmente).
*   **Canceled By**: es el _email_ del usuario que realizó la cancelación del pedido. 
*   **Cancellation Reason**: corresponde al campo `cancelReason` exhibido en la [API de Orders](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). Esta columna solo muestra valores nulos. Recomendamos que consulte la columna **Cancellation Data** para obtener más información sobre la cancelación.
*   **Gift Card Name**: es el nombre de la tarjeta de regalo usada en el pedido, si se utilizó una.
*   **Gift Card Caption**: descripción de la tarjeta de regalo, si se utilizó una.
*   **Authorized Date**: es la fecha y hora en que la transacción del pedido es autorizada. 
*   **Corporate Name**: es la razón social, cuando el pedido es realizado por una empresa.
*   **Corporate Document**: es el número de registro de persona jurídica, cuando el pedido es realizado por una empresa.
*   **TransactionId**: es la ID de la transacción.
*   **PaymentId**: es el ID del pago.
*   **SalesChannel**: es el ID de la política comercial del pedido. 
*   **marketingTags**: campo que puede ser utilizado por el sistema de la tienda para hacer el seguimiento de acciones distintas. El sistema de reclamos de VTEX completa este campo con el valor vtexrecurrence.
*   **Delivered**: indica si el pedido ya se entregó (true) o si aún no se entregó (false), en el caso de las tiendas que envían esta información al sistema de VTEX.
*   **SKU RewardValue**: número de puntos del SKU en el programa de fidelidad de la tienda. 
*   **Is Marketplace certified**: señala si el pedido fue realizado a través de un _marketplace_ certificado (true) o no (false).
*   **Is checked in**: señala si el pedido se realizó en una tienda física a través de VTEX Sales App (true) o no (false).
*   **Currency Code**: es el código que representa la moneda en la que se realizó la venta (por ejemplo: BRL o USD).
*   **Taxes**: es el resultado de la suma entre Tax y CustomTax, las tarifas asignadas al SKU. Si ambos valores no existen, la columna estará vacía.
*   **Invoice Number**: es el número de factura del pedido.
*   **Country**: es el país en el que se realizó el pedido.
*   **Input Invoices Numbers:** son los números de la factura de entrada, referente a una devolución.
*   **Output Invoices Numbers:** son los números de la factura referente a una compra.
*   **Status raw value (temporary)**: es el valor del _status_ de un pedido sin ningún tratamiento específico, es decir, el _status_ de un pedido como una _string_ que no ha sido tratada. Por ejemplo: el _status_ de un pedido puede aparecer en la interfaz como `preparando` y en este campo sería `handling`.
*   **Cancellation Data**: motivo de la cancelación del pedido indicado por el cliente final, de acuerdo con lo que se muestra en el campo `Reason` del objeto `cancellationData` exhibido en la [API de Orders](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). En caso de que el usuario no complete este campo cuando realice la cancelación, dicha columna estará vacía en el informe.
