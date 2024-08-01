---
title: 'Cómo solucionar errores en pedidos de suscripción'
id: uLL8AYBGdtAmbbdL5gRCf
status: PUBLISHED
createdAt: 2020-02-05T14:32:49.763Z
updatedAt: 2023-12-21T14:07:42.772Z
publishedAt: 2023-12-21T14:07:42.772Z
firstPublishedAt: 2020-02-11T15:00:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: como-solucionar-errores-en-pedidos-de-suscripcion
locale: es
legacySlug: como-resolver-pedidos-de-suscripcion-con-errores
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

<div class = "alert alert-info">
Solo puedes acceder a la información de los pedidos creados en los últimos años. Este periodo también se aplica a los pedidos de los clientes a través de <a href="https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Mi Cuenta</a>.
</div>

Es posible identificar y gestionar errores en pedidos de suscripción a través del módulo **Suscripciones** > **Dashboards** > **Pedidos de suscripción** en el Admin.

Hay dos tipos de errores que pueden ocurrir con los pedidos de suscripción:

* **[Ciclos con un problema](#ciclos-con-un-problema)**
* **[Errores de pago](#errores-de-pago)**

## Ciclos con un problema

Los problemas en ciclos de suscripción se producen cuando hay un impedimento para que se cree el pedido de suscripción, como un SKU no disponible. 

La pestaña **Ciclos con un problema**, que se ilustra en la siguiente imagen, recoge los pedidos de suscripción que tienen este tipo de problemas.

![pedidos_assinaturas_print_es](//images.ctfassets.net/alneenqid6w5/1dhCAuymIdeS4JyaxC7ep2/018f9060f82320eada25f385328cbd3a/pedidos_assinaturas_print_es.png)

Desde esta pestaña se puede gestionar los pedidos que presentan ciclos con un problema y realizar reintentos manuales de creación de pedidos. Por ejemplo, cuando un producto no está disponible, puede ajustar el stock y volver a intentarlo.

Para visualizar los ciclos con un problema y realizar nuevos intentos de pedido, realice  los pasos a continuación.

1. En el Admin, acceda al módulo **Suscripciones**.
2. Haga clic en **Dashboards**.
3. En la sección **Pedidos de suscripción**, haga clic en **Ciclos con problema**.
4. Identifique el pedido que desea corregir y verifique cuál es el problema informado en la columna **Error**. Consulte la [tabla de errores](#errores) para más información.
5. De ser necesario, corrija el problema indicado (ejemplo: ajustar stock).
6. Vuelva a **Suscripciones **>** Dashboards **>** Pedidos de suscripción**  > **Ciclos con problema** y haga clic en el botón <i class="fas fa-redo-alt"></i> en la columna **Procesar de nuevo**.  Si el nuevo intento funciona, el pedido se creará en **Gestión de pedidos**.

### Errores

Vea en la siguiente tabla cuáles son los errores informados en los ciclos con un problema y sus respectivos significados.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
        <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Error</em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Significado</em>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Could not select a SLA for sku {ID del SKU}</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">No se han encontrado estrategias de envío asociadas con un SKU determinado en el pedido de suscripción.
                <p>
                Generalmente, este error está relacionado con la falta de disponibilidad de stock del SKU en cuestión, o con alguna limitación en la configuración logística.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">No SLAs were found for this subscription</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">o se encontraron estrategias de envío asociadas con la suscripción en su conjunto.
                <p>
                Generalmente, este error está vinculado a la falta de disponibilidad de stock de los ítems que componen la suscripción, o alguna limitación en la configuración logística, como la ausencia de geocoordenadas en el perfil del cliente.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Request items length is zero after simulation</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este mensaje se muestra cuando los primeros pasos de la simulación del carrito tienen éxito, pero luego la simulación no encuentra ningún ítem válido para realizar la compra. Esto puede ocurrir incluso horas después, al realizarse un nuevo intento de pago. Este es un escenario previsto y no se puede evitar, a menos que el stock sea infinito y la política de envío sea permanente.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Error vinculado a un problema con la dirección que el cliente introdujo para la suscripción, como un código postal no válido o la falta de datos de geocoordenadas.
                <p>
                Para corregir el error, tendrá que ponerse en contacto con el cliente y pedirle que revise sus datos de dirección en la página <strong>Mi cuenta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [INVALID_PROFILE]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este error se produce cuando falta alguna información en el perfil del cliente. Ejemplo: si el cliente elimina el número de identificación fiscal del perfil después de la primera compra, en la siguiente fecha del ciclo de suscripción, el pedido generado tendrá este error.
                <p>
                Para corregirlo, el cliente debe rellenar los datos del perfil en la página <strong>Mi cuenta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este error significa que no hay ninguna forma de pago registrada para la suscripción en el perfil del usuario.
                <p>
                Para corregir el error, debe ponerse en contacto con el cliente y pedirle que rellene sus datos de pago en la página<strong> Mi cuenta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_MISSING|PAYMENT_MISSING]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este mensaje de error puede tener dos causas:
                <ul>
                    <li>Registro de clientes con datos incompletos o inválidos de la tarjeta de crédito y datos incompletos o inválidos de la dirección.</li>
                    <li>Registro del cliente con un número de número de identificación fiscal inválido.</li>
                </ul>        
                <p>
                    Para corregir el error, debe ponerse en contacto con el cliente y pedirle que revise sus datos en la página <strong>Mi cuenta</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    PriceTag inválida</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este mensaje se muestra cuando hay una diferencia de <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> de las respuestas entre la <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">simulación del carrito</a> y la creación de pedidos por la API placeOrder. Las divergencias entre las respuestas en cada momento pueden impedir la creación de pedidos.
                <p>
                    La creación de pedidos por la API placeOrder con promoción depende del envío de <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span>, que especifican las promociones obtenidas previamente en la simulación.
                <p>
                    Todas las <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> aplicadas por el sistema en la creación del pedido deben ser especificadas previamente en el request a la API. En caso contrario, el pedido no se crea y se muestra este mensaje de error, porque el sistema entiende que sus condiciones de contexto no son aplicables, ya que dependen de todas las  <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">priceTags</span> (incluyendo las no declaradas).
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    El valor del pago es diferente del valor del pedido</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este mensaje se muestra cuando hay una diferencia entre el valor de la <a href="https://developers.vtex.com/vtex-rest-api/reference/orderform">simulación del carrito</a> y el valor del pedido creado a través de la API PlaceOrder.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    No fue posible comunicarse con el seller XXXXXX</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este mensaje se muestra cuando el checkout no puede comunicarse con el seller para cerrar el pedido. Este error suele ser de carácter temporal y suele resolverse con los intentos automáticos del módulo de <strong>Suscripciones</strong>.
            </td>
        </tr>
        <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">
                <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">
                    Subscription has invalid data to place order: [ADDRESS_DATA]</span>
            </td>
            <td class="t-body pa5" style="min-width: 15rem;">
                Este error se produce solo en tiendas que utilizan <strong>Suscripciones V2</strong>. En cada ciclo de suscripción, la aplicación <strong>Suscripciones V2</strong> realiza una validación adicional que comprueba si alguno de los datos de la dirección ha cambiado desde la creación de la suscripción. Si los datos de la dirección no son exactamente iguales, se produce el error.
                <p>
                Ejemplo: En la pestaña <strong>Direcciones </strong>de <strong>Mi cuenta</strong>, si el cliente pone un acento en el nombre de la calle después de crear la suscripción, el módulo <strong>Suscripciones V2</strong> detecta el cambio y muestra este error. 
                <p>
                Para corregir el error, debe ponerse en contacto con el cliente y pedirle que revise sus datos en la página <strong>Mi cuenta</strong>.
            </td>
        </tr>
    </tbody>        
</table>

## Errores de pago

Los errores de pago se producen durante el flujo de aprobación del pago, como el rechazo de una tarjeta de crédito por el gateway. 

Los pedidos con este tipo de error pueden visualizarse en la pestaña **Error de pago**, ilustrada en la siguiente imagen.

![pedidos_assinaturas_print_erro_pagamento_es](//images.ctfassets.net/alneenqid6w5/2Cc9hhcSr6CjeU3tDIerqo/adfef0d0054bb88ef52d32d6ce7d81fd/pedidos_assinaturas_print_erro_pagamento_es.png)

Para analizar errores de pago, realice el siguiente procedimiento.

1. En el Admin, acceda al módulo **Suscripciones**.
2. Haga clic en la pestaña **Dashboards**.
3. En la sección de **Pedidos de suscripción**, haga clic en la pestaña **Error de pago**.
4. Identifique el pedido deseado y haga clic en el ID del pedido. Será dirigido a la página de detalles del pedido en el módulo de **Todos los pedidos**. 
5. Una vez en la página de detalles del pedido, haga clic en **Ver detalles de la transacción**, en la opción **Pago**. Será dirigido a la página de Transacciones en el módulo **Pagos**. 
6. En la página de **Transacciones**, puede visualizar y analizar los eventos de transacción del pedido. Lea el artículo [Ver detalles de la transacción en Pagos](https://help.vtex.com/es/tutorial/como-visualizar-detalhes-do-pedido) para obtener más información.

Los pedidos con errores de pago pasan por 5 reintentos automáticos en un periodo de 12 horas, de acuerdo con  el flujo del gateway. No es posible realizar reintentos manuales para corregir errores de pago en el Admin. 

Los clientes de su tienda pueden editar sus suscripciones y realizar otras acciones a través de la página [Mi cuenta](https://help.vtex.com/es/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh). Esto permite que algunos errores de pago sean resueltos por sus propios clientes, incluso después del período de reintentos automáticos, alterando la forma de pago.

#### **Más información**

* [Cómo gestionar Suscripciones](https://help.vtex.com/es/tutorial/como-gerenciar-assinaturas--6Jk50FPbv6iuz1OsFypv8x)
