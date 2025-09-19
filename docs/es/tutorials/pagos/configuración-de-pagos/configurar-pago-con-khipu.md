---
title: 'Configurar pago con Khipu'
id: RcHQjURWDXa0doL15DiUj
status: PUBLISHED
createdAt: 2023-03-24T19:34:06.675Z
updatedAt: 2024-01-24T17:53:53.676Z
publishedAt: 2024-01-24T17:53:53.676Z
firstPublishedAt: 2023-03-30T14:08:54.819Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-khipu
legacySlug: configurar-pago-con-khipu
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Khipu. Con este proveedor, tu tienda puede realizar ventas a través de pagarés.

Para configurar Khipu, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Khipu__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Khipu. 
5. En __Captura automática de pago__, seleccione una de las opciones disponibles:

    - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.
    - __Inmediatamente: Captura Automática Al Autorizar El Pago__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
    - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__.
    - __Programado: Establece Cuándo Se Realizará La Captura Automática__: al seleccionar esta opción, se mostrará el campo __Periodo de tiempo programado en horas para la captura automática__, que deberá rellenarse con el periodo en el que se realizará la captura automática. Este periodo debe respetar los límites permitidos por el proveedor de pagos.
    - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>  6. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón **Instalar aplicación** y siga las instrucciones de instalación.</ui>

<ui>  7. Haga clic en **Guardar.**</ui>

## Configurar Pagaré

Si aún no has configurado el pagaré como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

## Configurar la condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago personalizado__, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione __srconsultores-khipu-v0__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Khipu puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
