---
title: 'Correos electrónicos transaccionales para pedidos de suscripciones'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2024-10-04T14:15:54.337Z
publishedAt: 2024-10-04T14:15:54.337Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: transactional-emails-for-subscriptions-orders
legacySlug: correos-electronicos-transaccionales-para-pedidos-de-suscripcion
locale: es
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Toda la comunicación con el cliente de su tienda acerca de las [Suscripciones](https://help.vtex.com/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) se realizará a través del módulo **Plantillas de email**. Los emails transaccionales relacionados con las suscripciones son totalmente personalizables y ya están instalados automáticamente en el Admin VTEX.

Para acceder a los emails transaccionales de los pedidos de suscripciones, verifique el procedimiento que se indica a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**, o ingresa **Plantillas** en la barra de búsqueda en la parte superior de la página.
2. Busque por _Subscriptions_ en el campo de búsqueda, o utilice el filtro.  
3. Haga clic en el recuadro de la plantilla deseada para configurarla.
4. Haga las modificaciones deseadas.
5. Haga click en `Guardar`.

También puede crear [su propia plantilla de correo electrónico](https://help.vtex.com/es/tutorial/como-funciona-el-message-center/).

## Cómo su cliente acompaña sus pedidos de suscripción

> ℹ️ En [Mi Cuenta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), los clientes solo pueden acceder a los pedidos de los últimos dos años.

Cada acción que ocurre dentro del flujo de pedidos de **Suscripciones** contiene un gatillo que dispara un correo electrónico notificando a su cliente. Una vez activada la suscripción, el cliente recibirá correos electrónicos con detalles del status de cada pedido de suscripción cada vez que realice una acción. 

No es necesario activar el envío de correos electrónicos manualmente, pues se envían automáticamente según cada escenario incluido en el módulo **Plantillas de email**. Sin embargo, si lo desea, puede desactivar el envío de determinados correos electrónicos:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**, o ingresa **Plantillas** en la barra de búsqueda en la parte superior de la página.
2. Busque por _Subscriptions_ en el campo de búsqueda, o utilice el filtro.  
3. Haga clic en el recuadro de la plantilla deseada para configurarla.
4. Desactive la casilla `¿Habilitar el envío de emails?`, que por defecto está marcada como activa.
5. Haga clic en `Guardar`.

## Plantillas de email estándar 

La siguiente tabla presenta las plantillas de email estándar para **Suscripciones**:

| **Nome de la plantilla** | **ID** | **Descrição** |
| :---: | :---: | :--- |
| Paused subscription | `paused-subscription` | Suscripción pausada. |
| Canceled Subscription | `canceled-subscription` | Suscripción cancelada con éxito. |
| Expired Subscription | `expired-subscription` | Periodo de suscripción vencido. |
| New Subscription | `new-subscription` | Suscripción creada con éxito.<br><br>> ℹ️ Hay un período de tiempo entre la creación de la suscripción y la activación de la notificación de plantilla `new-subscription`. |
| Next Subscription Order Reminder | `next-subscription-order-reminder` | Recordatorio de que la próxima fecha de compra del pedido de suscripción será en dos días. |
| Payment not approved | `payment-not-approved` | Pago no aprobado del pedido de suscripción. |
| Reactivated Subscription | `reactivated-subscription` | Suscripción reactivada. |
| Skipped Subscription | `skipped-subscription` | Pedido de suscripción “omitido” por el cliente. |
| Subscription Creation Error | `subscription-creation-error` | Error al crear la suscripción. |
| Subscription Error | `subscription-error` | Error al crear el pedido de suscripción. |
| Unavailable Items | `unavailable-items` | Pedido de suscripción creado con indisponibilidad de alguno de los ítems. |
| Updated Subscription | `updated-subscription` | Suscripción actualizada con éxito. |
