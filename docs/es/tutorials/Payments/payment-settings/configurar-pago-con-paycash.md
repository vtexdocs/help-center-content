---
title: 'Configurar pago con Paycash'
id: 5gxrb0YlEhq0JnprN2uaOf
status: PUBLISHED
createdAt: 2023-04-06T17:19:09.254Z
updatedAt: 2024-01-23T21:05:57.921Z
publishedAt: 2024-01-23T21:05:57.921Z
firstPublishedAt: 2023-04-06T17:40:32.746Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paycash
legacySlug: configurar-pago-con-paycash
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Paycash. Con este proveedor, tu tienda puede realizar ventas a través de Paycash.

Para configurar Paycash, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Paycash__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__ y __Paycash Production Api Key__ con los datos proporcionados por Paycash. 
5. En __Captura automática de pago__, seleccione una de las opciones disponibles:

    - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.
    - __Inmediatamente: Captura Automática Al Autorizar El Pago__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
    - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__.
    - __Programado: Establece Cuándo Se Realizará La Captura Automática__: al seleccionar esta opción, se mostrará el campo __Periodo de tiempo programado en horas para la captura automática__, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.
    - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>  6. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón <b>Instalar aplicación</b> y siga las instrucciones de instalación.</ui>

<ui>  7. Haga clic en <b>Guardar.</b></ui>

## Configurar la condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el método de pago __Paycash__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Paycash puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
