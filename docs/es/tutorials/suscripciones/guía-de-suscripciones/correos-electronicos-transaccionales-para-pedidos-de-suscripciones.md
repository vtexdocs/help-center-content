---
title: 'Correos electrónicos transaccionales para pedidos de suscripciones'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2025-10-24T14:47:50.280Z
publishedAt: 2025-10-24T14:47:50.280Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
legacySlug: correos-electronicos-transaccionales-para-pedidos-de-suscripcion
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Toda la comunicación con el cliente de su tienda acerca de las [Suscripciones](/es/docs/tutorials/como-funciona-suscripciones) se realizará a través del módulo **Plantillas de email**. Los emails transaccionales relacionados con las suscripciones son totalmente personalizables y ya están instalados automáticamente en el Admin VTEX.

Para acceder a los emails transaccionales de los pedidos de suscripciones, verifique el procedimiento que se indica a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**, o ingresa **Plantillas** en la barra de búsqueda en la parte superior de la página.
2. Busque por _Subscriptions_ en el campo de búsqueda, o utilice el filtro.  
3. Haga clic en el recuadro de la plantilla deseada para configurarla.
4. Haga las modificaciones deseadas.
5. Haga click en `Guardar`.

También puede crear [su propia plantilla de correo electrónico](/es/tutorial/como-funciona-el-message-center/).

## Cómo su cliente acompaña sus pedidos de suscripción

> ℹ️ En [Mi Cuenta](/es/docs/tutorials/como-funciona-mi-cuenta), los clientes solo pueden acceder a los pedidos de los últimos dos años.

Cada acción que ocurre dentro del flujo de pedidos de **Suscripciones** contiene un gatillo que dispara un correo electrónico notificando a su cliente. Una vez activada la suscripción, el cliente recibirá correos electrónicos con detalles del status de cada pedido de suscripción cada vez que realice una acción. 

No es necesario activar el envío de correos electrónicos manualmente, pues se envían automáticamente según cada escenario incluido en el módulo **Plantillas de email**. Sin embargo, si lo desea, puede desactivar el envío de determinados correos electrónicos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**, o ingresa **Plantillas** en la barra de búsqueda en la parte superior de la página.
2. Busque por _Subscriptions_ en el campo de búsqueda, o utilice el filtro.  
3. Haga clic en el recuadro de la plantilla deseada para configurarla.
4. Desactive la casilla `¿Habilitar el envío de emails?`, que por defecto está marcada como activa.
5. Haga clic en `Guardar`.

## Plantillas de email estándar 

La siguiente tabla presenta las plantillas de email estándar para **Suscripciones**:

| **Nombre de la plantilla** | **ID** | **Descripción** |
| --- | --- | --- |
| Subscriptions - New | `vtexcommerce-subscriptions-create` | Nueva suscripción creada con éxito.<br><br>Hay un periodo de 30 minutos entre la creación de la suscripción y el envío de la notificación de la plantilla `vtexcommerce-subscriptions-create`. |
| Subscriptions - Edited | `vtexcommerce-subscriptions-update` | Suscripción actualizada con éxito. |
| Subscriptions - Cancelled | `vtexcommerce-subscriptions-cancel` | Suscripción cancelada con éxito. |
| Subscriptions - Skipped | `vtexcommerce-subscriptions-skip` | Pedido de suscripción omitido por el cliente. |
| Subscriptions - Paused | `vtexcommerce-subscriptions-stop` | Suscripción pausada. No se creará ningún pedido de suscripción hasta que se reactive la misma. |
| Subscriptions Reactivated | `vtexcommerce-subscriptions-reactivated` | Suscripción reactivada. Se recalculará el calendario de la suscripción y los pedidos se reanudarán en la fecha definida. |
| Subscriptions - Next Order | `vtexcommerce-subscriptions-reminder` | Recordatorio de que la próxima compra del pedido de suscripción se realizará en dos días. |
| Subscriptions Expired | `vtexcommerce-subscriptions-expired` | Periodo de suscripción vencido. |
| vtexcommerce-subscriptions-neworder | `vtexcommerce-subscriptions-neworder` | La suscripción generó un nuevo pedido. |
| Subscriptions - Item Unavailable | `vtexcommerce-subscriptions-partialorder` | El pedido de suscripción se generó parcialmente. Puedes activar esta plantilla cuando la tienda no tenga todos los SKUs del pedido o la cantidad necesaria en stock. |
| Subscriptions - No Order | `vtexcommerce-subscriptions-noorder`| No se generó el pedido de suscripción. Puedes activar esta plantilla cuando la tienda no tenga ninguno de los SKUs del pedido en stock. |
| Subscriptions - Error | `vtexcommerce-subscriptions-failorder`| No se pudo generar el pedido de suscripción. |
| Subscription - Payment Not Approved | `vtexcommerce-subscriptions-payment-not-approved` | No se aprobó el pago del pedido de suscripción. |
