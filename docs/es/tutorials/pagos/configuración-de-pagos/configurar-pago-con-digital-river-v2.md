---
title: 'Configurar pago con Digital River V2'
id: 5dlXHutd9Ik6vtN3WP7GRP
status: PUBLISHED
createdAt: 2022-02-17T12:11:27.726Z
updatedAt: 2025-08-26T18:33:22.831Z
publishedAt: 2025-08-26T18:33:22.831Z
firstPublishedAt: 2022-02-17T13:44:17.095Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-digital-river-v2
legacySlug: configurar-pago-con-digital-river-v2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Digital River V2. Con este proveedor, su tienda puede realizar ventas a través de diferentes [métodos de pagos](https://www.digitalriver.com/payment-method-guide/).

Para configurar Digital River V2, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __DigitalRiverV2__ en la barra de búsqueda y haga clic en el nombre del proveedor
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Digital River V2.
5. En __Captura automática de pago__, seleccione una de las opciones disponibles:
 - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.   
 - __Inmediatamente: Captura Automática Al Autorizar El Pagamento__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
 - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__. 
 - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.
6. Haga clic en __Guardar__.

## Configurar condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Elige la condición de pago __DigitalRiver__.
4. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
5. Active la condición en el campo __Status__.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados, Digital River V2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
