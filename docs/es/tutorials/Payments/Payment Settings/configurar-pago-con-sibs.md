---
title: 'Configurar pago con SIBS'
id: sNLPtJlAMnDpq40CCPKNo
status: PUBLISHED
createdAt: 2023-04-06T18:57:27.591Z
updatedAt: 2024-01-25T19:05:01.739Z
publishedAt: 2024-01-25T19:05:01.739Z
firstPublishedAt: 2023-04-06T19:07:28.327Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-sibs
locale: es
legacySlug: configurar-pago-con-sibs
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos SIBS. Con este proveedor, tu tienda puede realizar ventas a través de tarjeta de crédito SIBS, pagarés, MBWay y MultiBanco.

Para configurar SIBS, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __SIBS__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por SIBS. 
5. En __Captura automática de pago__, seleccione una de las opciones disponibles:

    - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.
    - __Inmediatamente: Captura Automática Al Autorizar El Pago__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
    - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__.
    - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>  6. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón <b>Instalar aplicación</b> y siga las instrucciones de instalación.</ui>

<ui>  7. Haga clic en <b>Guardar.</b></ui>

Para configurar los métodos de pago a procesar por SIBS, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, SIBS puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
