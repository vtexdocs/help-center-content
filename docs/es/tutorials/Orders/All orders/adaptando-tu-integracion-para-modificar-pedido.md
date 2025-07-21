---
title: 'Adaptando tu integración para Modificar pedido'
id: 6kGQWs0IvpwIZoyeoLMjlp
status: PUBLISHED
createdAt: 2024-06-03T18:54:30.094Z
updatedAt: 2025-01-29T19:46:02.897Z
publishedAt: 2025-01-29T19:46:02.897Z
firstPublishedAt: 2024-06-03T20:02:10.248Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: adapting-your-integration-for-order-modifications
locale: es
legacySlug: adaptando-tu-integracion-para-modificar-pedido-beta
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Para evolucionar las modificaciones de pedidos en la plataforma VTEX, estamos lanzando [Modificar pedido](/es/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ), una solución mucho más completa, versátil y que proporciona una [nueva experiencia en el Admin VTEX](/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

Después de las interacciones entre nuestro equipo de ingenieros y los clientes y partners, hemos creado este contenido que incluye buenas prácticas de implementación y dudas frecuentes. Nuestro objetivo es que los próximos clientes y partners que comiencen a utilizar **Modificar pedido** tengan este material de apoyo a su disposición.

El artículo se organiza de la siguiente manera:

* [Adaptación en distintos casos de uso](#adaptacion-en-distintos-casos-de-uso)
* [Modificaciones en el cuerpo de los requests](#modificaciones-en-el-cuerpo-de-los-requests)
* [Requests con errores y fallos](#requests-con-errores-y-fallos)
* [Preguntas frecuentes](#preguntas-frecuentes)

## Adaptación en distintos casos de uso

Las siguientes secciones presentan los principales casos de uso de **Modificar pedido** y sus respectivas recomendaciones.

### Comunicación con el cliente por email transaccional

**Modificar pedido** utiliza nuevas plantillas para los [emails transaccionales](/es/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my) (Message Center) que se ajustan a las funcionalidades innovadoras de la solución.

Para personalizar una plantilla de email en el Admin VTEX, copia y pega el siguiente link en tu navegador sustituyendo `{nombreDeCuenta}` por el [nombre de cuenta](/es/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) de tu tienda, y luego pulsa `Enter`:

`https://{nombreDeCuenta}.myvtex.com/admin/message-center/#/templates/vtexcommerce-order-changed-v2`

### Gestión de la modificación de pedidos en el Admin VTEX

Las tiendas que utilizan la versión actual de la funcionalidad de modificación de pedidos tendrán acceso inmediato a las interfaces actualizadas de **Modificar pedido** en el Admin VTEX una vez que el equipo de VTEX instale la nueva solución. Esto incluye una nueva gestión y comunicación de [Mi cuenta](/es/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#pedidos) y de [plantillas de emails transaccionales](/es/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my).

### Gestión de la modificación de pedidos vía API

Las tiendas que utilizan nuestras API deben asegurarse de que la implementación en la integración siga la nueva arquitectura de la funcionalidad.

En **Modificar pedido**, el endpoint [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) funciona de forma asíncrona y el [usuario](/es/tutorial/gerenciando-usuarios--tutorials_512) o integración que realiza el request recibe un `requestId` de la plataforma, que se trata de un identificador único para dar seguimiento a la operación de modificación del pedido. Este identificador luego se utilizará en determinados endpoints. Todos los endpoints de **Modificar pedido** son:

* [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)
* [Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)
* [Get order modifications details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)
* [Get order modifications history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)
* [Retry order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)
* [Cancel order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)
* [Update Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/order-system/orders/changes/settings)
* [Get Order modifications settings](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/changes/settings)

Después de modificar el pedido utilizando el endpoint [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), el integrador puede utilizar varias alternativas para los nuevos requests a los endpoints de **Modificar pedido**:

* **Polling:** baja complejidad.
* **Preview:** mediana complejidad.

La siguiente tabla muestra cada una:

| **Tipo de flujo** | **Cómo funciona** |
| :---: | :--- |
| **Polling**<p>Baja complejidad</p> | <p>Después de la operación de modificación del pedido se genera un código único que la identifica, `requestId`, y que permite dar seguimiento a los detalles del request a través del endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order modifications details</a>. Tras la modificación del pedido, la propiedad del cuerpo de respuesta `finished` pasa a tener el valor `true` en este endpoint.</p><p>Además, <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order modifications details</a> también se puede utilizar para obtener información sobre fallos y errores que dieron lugar a la cancelación de la operación de modificación del pedido, según se describe en la sección <a href="#requests-con-errores-y-fallos">Requests con errores y fallos</a>.</p> |
| **Preview**<p>Mediana complejidad</p> | <p>Antes de enviar un request a <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order modifications</a>, la integración tiene la opción de obtener una vista previa que produce un cuerpo de respuesta exactamente igual al del request de modificación. Para ello, solo hay que utilizar el mismo cuerpo de request en el request enviado al endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order modifications</a>.</p><p>Esta vista previa es una simulación de la modificación y no genera efectos reales de modificar el pedido. El uso de <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order modifications</a> es útil para obtener los valores totales asociados a la modificación del pedido en cuestión y también para validar los detalles del requests con un cuerpo de request válido.</p><p>Tras recibir una respuesta de éxito `200 OK` para obtener la vista previa de la modificación, la integración puede proceder con el request a <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order modifications</a> para modificar el pedido.</p><p>Luego, puedes adaptar la integración a escenarios tales como:<ul><li><b>Creación optimista:</b> los datos de las validaciones obtenidas con la simulación de la modificación cubren la mayor parte de los casos de éxito `200 OK`.</li><li><b>Implementación de polling:</b> mencionado anteriormente.</li></ul></p> |

## Modificaciones en el cuerpo de los requests

**Modificar pedido** mantiene algunos de los atributos de la solución anterior, sin embargo, posee otros que fueron creados o transformados, tanto en nombre como funcionamiento. Los principales cambios se describen de la siguiente forma:

* [Valores manuales](#valores-manuales)
* [Agregar y remover ítems](#agregar-y-remover-items)
* [Atributos obligatorios y opcionales de los ítems](#atributos-obligatorios-y-opcionales-de-los-items)
* [Responsabilidad del usuario en la automatización del sistema](#responsabilidad-del-usuario-en-la-automatizacion-del-sistema)

### Valores manuales

* **Antes:** los campos `discountValue` y `incrementValue` definían el valor de la modificación del pedido como disminución o incremento del valor, respectivamente. El usuario calculaba el valor de la modificación y el resultado se sumaba o restaba del valor total del pedido mediante estos campos.
  > **Ejemplo:** en un pedido de 100 USD que se debe modificar para agregar un ítem de 50 USD, el usuario enviaba `incrementValue` con el valor de 50 USD y el sistema calculaba el total del pedido como 150 USD. Si el usuario deseaba conceder un descuento de 30 USD al cliente en la modificación, tenía que enviar un `discountValue` con el valor de 30 USD para que el total del pedido fuera 120 USD.
* **Ahora:** los nuevos campos `manualDiscountValue` y `manualIncrementValue` definen valores manuales adicionales que se suman o restan del costo total del pedido, independientemente de las modificaciones que se estén realizando. Como el sistema calcula el resultado de las modificaciones automáticamente (considerando el precio y condiciones de finalización de compra), el usuario puede incrementar o disminuir los valores utilizando los campos mencionados.
  > **Ejemplo:** en un pedido de 100 USD que debe modificarse para agregar un ítem de 50 USD, tras agregar el ítem, el sistema calcula automáticamente el incremento de 50 USD del valor y el usuario no tiene que enviarlo manualmente. El resultado del valor total del pedido será 150 USD. Si el usuario desea conceder un descuento de 30 USD al cliente en la modificación, solo tiene que enviar el campo `manualDiscountValue` con el valor de 30 USD y el valor total del pedido será 120 USD.

### Agregar y remover ítems

* **Antes:** los atributos utilizados para agregar y remover ítems del pedido eran los arreglos `itemsAdded` y `itemsRemoved` que contenían objetos de ítems con los campos `id`, `price` y `quantity`.
* **Ahora:** los atributos para agregar y remover ítems del pedido son los objetos `add` y `remove` que contienen un nuevo nivel que define un objeto para cada ítem a través del arreglo `items`.

Ejemplo de cómo remover ítems en **Modificar pedido**:

```
{
    "remove": {
        "items": [
            {
                "id": "1",
                "quantity": 1
            }
        ]
    }
}
```

<br>

### Atributos obligatorios y opcionales de los ítems

Los ítems del cuerpo del request necesitan menos atributos obligatorios que antes: `id` y `quantity`. Los demás atributos se obtienen del pedido o del sistema Catálogo.

Existen otros campos que pueden ajustarse para sobrescribir la información de un ítem que se está modificando, en caso de ser necesario agregar o modificar ítems ya existentes. Los campos opcionales son `price`, `unitMultiplier` y `measurementUnit`. El sistema no tiene en cuenta ningún otro campo enviado en el request.

### Responsabilidad del usuario en la automatización del sistema

* **Antes:** el usuario era responsable de calcular el valor que se iba a modificar en el pedido. Enviaba dicho valor en el atributo `discountValue` o `incrementValue`, dependiendo de si era un aumento o disminución de precio.
* **Ahora:** el sistema es responsable de proporcionar la información de los ítems y automáticamente calcula el valor final del pedido con la modificación. En otras palabras, el usuario ahora informa lo mínimo necesario y no tiene que calcular el valor final del pedido, lo que reduce las posibilidades de error.

## Requests con errores y fallos

Cuando se produce un error o fallo en el request de **Modificar pedido**, se puede obtener la información del procesamiento a través del endpoint [Get order modifications details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) mediante el atributo `logs`.

Ejemplo de `logs` con error de procesamiento:

```
{
    "requestId": "de88ad2b-a927-47ad-b5af-a6fab4d2a22f",
    "workflowId": "418827ee-0efd-4127-87c0-6d881358b750",
    "status": "preparing",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 1000,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "add": {
        ...
    },
    "logs": [
       {
            "date": "2024-05-13T21:35:00.1952066Z",
            "message": "Automatic transition failed. Current retry counter is 1. Failed with message: Failure to run the action 'preparing'. Content: '{\"error\":{\"code\":\"001\",\"message\":\"An error has occurred\"},\"operationId\":\"f69e8934-5f93-4ba2-9ebe-408080c6733b\",\"fields\":{}}'",
            "source": "Workflow Engine",
            "status": "preparing"
        },
        {
            "date": "2024-05-13T21:35:00.1481754Z",
            "message": "OperationId:f69e8934-5f93-4ba2-9ebe-408080c6733b\nSystem.NullReferenceException: Object reference not set to an instance of an object.\n   at VTEX.SOS.Services.OrderService.OrderServiceCapabilities.ChangeOrderV2.ChangeOrderMerger.MergeWithEnrichedItemMetadata(Seller seller, OrderItem itemToEnrich, OrderItem enrichedItem)\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemMetadataAsync(IContext context, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 284\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemInfoAsync(IContext context, OrderSource orderOrigin, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 273\n   at VTEX.SOS.Services.OrderService.OrderService.EnrichItemsOnlyAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 238\n   at VTEX.SOS.Services.OrderService.OrderService.PrepareChangeOrderAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 38\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288",
            "source": "ChangeOrderService:PrepareChangeInternalAsync",
            "status": "preparing"
        }
    ]
}
```

<br>

El sistema automáticamente reintenta el procesamiento de cada fallo (errores no tratados). Si los reintentos no funcionan, se cancela el request de modificación. El motivo del error se puede obtener utilizando [Get order modifications details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) mediante el atributo `cancellationData`.

Si el origen del error es incumplimiento de las reglas de validación del request por parte del usuario, la operación se cancela automáticamente y no se realicen nuevos intentos de procesamiento. En este caso, el motivo del error también se comunica a través de `cancellationData`. 

Ejemplo de objeto `cancellationData`: la modificación de precio solicitada en el request es mayor que el valor límite configurado para la cancelación de pedidos.

```
{
    "requestId": "29004325-e2b8-4b7e-a82c-f588e6d3c07f",
    "workflowId": "ea392ae2-1db5-432c-97d3-adc4436ca4aa",
    "status": "canceled",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 37500,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "remove": {
        ...
    },
    "cancellationData": {
        "requestedByUser": false,
        "reason": "The value of the change exceed the order's price",
        "cancellationDate": "2024-05-13T21:31:38.8596Z"
    }
}
```

<br>

## Preguntas frecuentes

Esta sección presenta dudas comunes de los clientes y partners que utilizan **Modificar pedido**:

[1 - ¿Cómo puedo sobrescribir el precio de un ítem específico?](#1-como-puedo-sobrescribir-el-precio-de-un-item-especifico)

[2 - ¿Cómo puedo saber y cambiar el valor total antes de modificar el pedido?](#2-como-puedo-saber-y-cambiar-el-valor-total-antes-de-modificar-el-pedido)

[3 - ¿Tengo que informar el precio de envío o se recalcula automáticamente?](#3-tengo-que-informar-el-precio-de-envio-o-se-recalcula-automaticamente)

[4 - ¿Cómo funcionan las promociones en Modificar pedidos (Beta)?](#4-como-funcionan-las-promociones-en-modificar-pedidos-beta)

[5 - ¿Qué debo hacer cuando el request devuelve el status canceling o canceled?](#5-que-debo-hacer-cuando-el-request-devuelve-el-status-canceling-o-canceled)

### 1 - ¿Cómo puedo sobrescribir el precio de un ítem específico?

Para sobrescribir el precio de un ítem específico, puedes aplicarle un valor manual al ítem al mismo tiempo que se modifica la cantidad.

En el endpoint [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), el atributo `price` tiene la misma función que el flujo de finalización de pedidos y hace referencia al precio nominal del ítem. Por ejemplo, en un pedido que contiene un ítem pesable, como una manzana, `price` es el precio por kilo de la manzana.

Ejemplo de cómo sobrescribir el precio de un ítem pesable:

```
{
    "reason": "the client wanted to change",
    "add": {
        "items": [
            {
                "id": "1",
                "quantity": 1,
                "price": 150,
            }
        ]
}
```

<br>

### 2 - ¿Cómo puedo saber y cambiar el valor total antes de modificar el pedido? 

El endpoint [Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) permite al usuario simular el resultado de la modificación del pedido que se desea realizar mediante [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), ya que utiliza el mismo cuerpo de request y proporciona el mismo cuerpo de respuesta pero sin modificar el pedido. `totalChangeValue` es el atributo que informa el valor total que se está modificando en el pedido, ya sea un incremento (por ej.: cargo o ítem adicional) o disminución (por ej.: reducción manual del valor o remover un ítem).

Si deseas que la integración manipule la variación del valor del pedido modificado, puedes utilizar el mismo cuerpo de request que se usa en [Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) en un request a [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), incrementando o disminuyendo el valor de los campos `manualIncrementValue` y `manualDiscountValue`, respectivamente.

### 3 - ¿Tengo que informar el precio de envío o se recalcula automáticamente?

Cuando se producen cambios en la cantidad, tamaño o peso de los ítems, el costo de envío se recalcula automáticamente y el valor se suma al nuevo valor total del pedido.

La regla de cálculo del nuevo costo de envío sigue las mismas condiciones aplicadas en la finalización del pedido.

### 4 - ¿Cómo funcionan las promociones en Modificar pedidos?

Al modificar el pedido se aplican automáticamente las mismas promociones y cargos que eran válidos para los ítems cuando se finalizó la compra. No se recalculan nuevas promociones y cargos en las condiciones del pedido modificado.

**Ejemplo:** una tienda tenía una promoción de "Paga 2 y lleva 3", pero el cliente solo compró 2 ítems y no pudo beneficiarse del descuento. Cuando el cliente solicita que se agregue un ítem adicional a su pedido, ahora tiene 3 ítems, pero la promoción no se aplica porque no se aplicó en el pedido original.

Para informar la promoción de un ítem al modificar el pedido, puedes hacerlo manualmente con [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) mediante el atributo `priceTags`. Este es el comportamiento predeterminado de la plataforma. 

Ejemplo de un ítem con promociones aplicadas en el pedido original:

```
{
    "reason": "teste",
    "replace": [
        {
            "from": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.5
                    }
                ]
            },
            "to": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.750,
                        "price": 530,
                        "priceTags": [
                            {
                                "name": "DISCOUNT@MANUALPRICE",
                                "value": -50,
                                "isPercentual": false
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```

<br>

En este ejemplo, se utilizó la tag de descuento manual `DISCOUNT@MANUALPRICE`. La tag equivalente para cargos manuales sería `TAX@MANUALPRICE`. El endpoint [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) también puede utilizar el atributo `priceTag` de una promoción existente y cambiar el valor de la modificación del pedido.

### 5 - ¿Qué debo hacer cuando el request devuelve el status canceling o canceled?

Los status `canceling` y `canceled` significan que la modificación del pedido no se procesó correctamente, los cambios no se aplicaron al pedido y el usuario puede ignorar el intento. Los fallos y errores pueden deberse a:

* El usuario no cumplió las reglas de validación del request.
* El sistema excedió el número de intentos de reprocesamiento automático.
* Otros fallos de procesamiento del sistema.

La recomendación general es investigar el origen del error y comprobar el cuerpo del request que se está enviando a través del endpoint [Create order modifications](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) o [Preview order modifications](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview). Más información en la sección [Requests con errores y fallos](http://heading).

## Más información

| **Help Center** | **Developer Portal** |
| :--- | :--- |
| <p>Modificar pedidos en el Admin VTEX:<ul><li><a href="https://help.vtex.com/es/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ">Cómo funciona Modificar pedido</a></li><li><a href="https://help.vtex.com/es/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">Cómo modificar pedidos</a></li></ul></p> | <p>Modificar pedidos vía API:<ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order modifications</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order modifications details</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order modifications history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry modifications change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel modifications change</a></li></ul></p> |

