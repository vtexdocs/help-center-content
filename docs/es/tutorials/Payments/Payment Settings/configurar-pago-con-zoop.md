---
title: 'Configurar pago con Zoop'
id: 5bRYiUjX1sewZuON8HA6Ld
status: PUBLISHED
createdAt: 2023-02-13T18:17:14.240Z
updatedAt: 2024-01-23T21:58:29.652Z
publishedAt: 2024-01-23T21:58:29.652Z
firstPublishedAt: 2023-02-13T18:50:09.746Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-zoop
locale: es
legacySlug: configurar-pago-con-zoop
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Zoop. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito y  boletos bancarios.

Para configurar Zoop, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Zoop__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Zoop.
5. En __Captura automática de pago__, seleccione una de las opciones disponibles:

    - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.
    - __Inmediatamente: Captura Automática Al Autorizar El Pago__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
    - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__.
    - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>  6. En <b>¿Activar split y enviar receptores?</b>, seleccione si los pagos divididos estarán disponibles para el marketplace y sellers.</ui>

<ui>  7. Haga clic en <b>Guardar.</b></ui>

Para configurar las condiciones de pago, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago#).

Después de seguir los pasos indicados, Zoop puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
