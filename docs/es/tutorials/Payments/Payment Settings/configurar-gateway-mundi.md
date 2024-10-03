---
title: 'Configurar gateway Mundi '
id: 2yn9dKzvZOF5tn4RCX2Nbq
status: ARCHIVED
createdAt: 2019-04-04T21:12:48.808Z
updatedAt: 2024-10-03T15:22:47.590Z
publishedAt: 
firstPublishedAt: 2019-04-04T21:20:22.149Z
contentType: tutorial
productTeam: Financial
author: 3lcZDoqCF7Q4hYHye4y1YM
slugEN: set-up-mundi-gateway
locale: es
legacySlug: configurar-gateway-mundi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Mundi.

>⚠️ Si también desea utilizar el antifraude de Mundi, la configuración de esta función debe realizarla el propio hub de la empresa. En caso de dudas sobre esta etapa de la operación, consulte con el soporte técnico de Mundi.

Para configurar la afiliación Mundi, siga los pasos a continuación:

<ui>1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.</ui>

<ui>2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.</ui>

<ui>3. Escriba el nombre __Mundi__ en la barra de búsqueda y haga clic en el nombre del proveedor.</ui>

<ui>4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Mundi.</ui>

<ui>5. En __Captura automática de pago__, seleccione una de las opciones disponibles:</ui>

 - __Utiliza El Comportamiento Recomendado Por El Procesador De Pagos__: la captura de pagos no ocurre automáticamente. En esta opción, el proveedor de pago indica si el pago ha sido autorizado y puede determinar o recomendar un número de días para la captura a partir de la autorización del pago.   
 - __Inmediatamente: Captura Automática Al Autorizar El Pagamento__: la captura se realiza automáticamente inmediatamente después de que se autoriza el pago, incluso si la transacción requiere un análisis antifraude.
 - __Inmediatamente: Captura Automática Al Pasar El Análisis De Riesgo De Fraude__: la captura se realiza automáticamente inmediatamente después de la autorización del pago y el análisis antifraude. Si desea utilizar esta opción y no hay que realizar un análisis antifraude, el sistema seguirá el mismo flujo que la opción __Inmediatamente: Captura Automática Al Autorizar El Pagamento__. 
 - __Desactivado: No Capturado Automáticamente__: la captura se produce sólo cuando se factura el pedido. Si desea utilizar esta opción, es importante prestar atención al momento de la facturación, ya que si el pedido se factura por un período mayor al acordado con el proveedor para capturar el pago, la transacción puede cancelarse.

<ui>6. Haga clic en __Guardar__.</ui>

Para configurar los métodos de pago a procesar por Mundi, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

Después de seguir los pasos indicados, Mundi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
