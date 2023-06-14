---
title: Configurar pago con Mollie
id: 22xsNx4lvnXXnCeJjgb8Wi
status: DRAFT
createdAt: 2022-08-12T19:51:09.595Z
updatedAt: 2022-12-08T14:23:39.436Z
publishedAt: 
firstPublishedAt: 2022-08-12T19:58:27.531Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-mollie
legacySlug: configurar-pago-con-mollie
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Mollie. Con este conector, tu tienda puede realizar ventas a través de tarjeta de crédito, pagarés y Mollie.

Para configurar la afiliación Mollie, siga los pasos a continuación:

<ui>1. Acceda al __Admin__ VTEX</ui>

<ui>2. Haga clic en __Pagos__.</ui>

<ui>3. Después, haga clic en __Configuración__.</ui>

<ui>4. En la pestana __Afiliaciones de Gateway__, haga clic en el botón __+__.</ui>

<ui>5. Haga clic en el conector __Mollie__.</ui>

<ui>6. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Mollie.</ui>

<ui>7. En __Captura automática de pago__, seleccione una de las opciones disponibles:</ui>

 - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.   
 - __Inmediatamente: Captura Automática Al Autorizar El Pagamento__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
 - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__. 
 - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>8. Haga clic en __Guardar__.</ui>

Para configurar las condiciones de pago, acceda a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento#). Para la opción de tarjeta de crédito, seleccione la afiliación __vtex-integration-mollie-v0__.

Después de seguir los pasos indicados, Mollie puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
