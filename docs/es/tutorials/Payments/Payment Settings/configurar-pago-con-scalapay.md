---
title: 'Configurar pago con Scalapay'
id: 6SCh3WUqjeqIrOl209MENA
status: ARCHIVED
createdAt: 2022-08-12T19:31:38.569Z
updatedAt: 2024-10-03T16:11:00.738Z
publishedAt: 
firstPublishedAt: 2022-08-12T19:39:58.598Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-scalapay
locale: es
legacySlug: configurar-pago-con-scalapay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Scalapay. Con este proveedor, tu tienda puede realizar ventas a través de tarjeta de crédito y Scalapay.

Para configurar Scalapay, siga los pasos a continuación:

<ui>1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.</ui>

<ui>2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.</ui>

<ui>3. Escriba el nombre __Scalapay__ en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<ui>4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Scalapay.</ui>

<ui>5. En __Captura automática de pago__, seleccione una de las opciones disponibles:</ui>

 - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.   
 - __Inmediatamente: Captura Automática Al Autorizar El Pagamento__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
 - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__. 
 - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>6. Haga clic en `Guardar`.</ui>

Para configurar las condiciones de pago, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento#). Para la opción de tarjeta de crédito, seleccione la afiliación __vtex-integration-scalapay-v0__.

Después de seguir los pasos indicados, Scalapay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
 tiempo de captura acordado con el proveedor de pagos y provocar la cancelación de la transacción.</li>
</ul>
8. En __Campos do provedor__, sellecione __Pay in 3__ o __Pay in 4__ en __Product Type__.
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Scalapay Pay in 3__ o __Scalapay Pay in 4__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Scalapay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
