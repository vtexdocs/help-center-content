---
title: 'Correos Electrónicos Transaccionales para Pedidos de Suscripción'
id: 2NYHqHMRqZ43Cn6s84ZCB5
status: PUBLISHED
createdAt: 2020-02-11T15:13:38.504Z
updatedAt: 2021-11-30T18:14:37.654Z
publishedAt: 2021-11-30T18:14:37.654Z
firstPublishedAt: 2020-02-17T21:15:14.903Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: correos-electronicos-transaccionales-para-pedidos-de-suscripcion
locale: es
legacySlug: correos-electronicos-transaccionales-para-pedidos-de-suscripcion
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

Toda la comunicación con el cliente de su tienda acerca de las Suscripciones se realizará a través del módulo **Centro de Mensajes**. Los correos electrónicos transaccionales relacionados con la Suscripción son totalmente personalizables y ya están instalados automáticamente en el centro de mensajes.

Para acceder a los correos electrónicos transaccionales de los pedidos de Suscripción, verifique el procedimiento que se indica a continuación.

1. Acceda al módulo **Centro de Mensajes** del Admin.  
2. Haga clic en la pestaña **Plantillas**.  
3. Busque por **Subscriptions** en el campo de búsqueda, o utilice el filtro.  
4. Haga clic en el **recuadro** de la plantilla deseada para configurarla.  

También puede crear su propia plantilla de correo electrónico. Entienda mejor cómo [configurar las plantillas de correo electrónico transaccionales en la plataforma VTEX.](https://help.vtex.com/es/tutorial/como-funciona-el-message-center/)

## Cómo su cliente acompaña sus pedidos de suscripción

Cada acción, que ocurre dentro del flujo de pedidos de Suscripción, contiene un gatillo que dispara un correo electrónico notificando a su cliente.  Una vez activada la suscripción, el cliente recibirá correos electrónicos con detalles del status de cada pedido de suscripción cada vez que realice una acción. 

No es necesario activar el envío de correos electrónicos manualmente, pues se envían automáticamente según cada escenario incluido en el Centro de Mensajes. Sin embargo, si lo desea, puede desactivar el envío de determinados correos electrónicos:

1. Acceda al módulo **Centro de Mensajes** del Admin.  
2. Haga clic en la pestaña **Plantillas**.  
3. Busque por **Subscriptions** en el campo de búsqueda.  
4. Haga clic en el **recuadro** de la plantilla deseada para configurarla.  
5. Desactive la casilla `¿Activar envío de e-mail?`, que por defecto está marcada como activa.
6. Haga clic en **Guardar**.

![PT Subscription Message Center](https://images.ctfassets.net/alneenqid6w5/3g9hWtw1XUcYlUlwGCzagX/8161e2468d88999ec8505a46274b55f1/PT_Subscription_Message_Center.png)

## Plantillas Estándar del Centro de Mensajes 

| Nombre de la Plantilla                   | ID                                              | Descripción                                                                      |
|------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------|
| Subscriptions - Cancelled          | vtexcommerce-subscriptions-cancel               | Suscripción cancelada con éxito                                                |
| Subscriptions - New                |  vtexcommerce-subscriptions-create              | Suscripción creada con éxito                                                   |
| Subscriptions Expired              | vtexcommerce-subscriptions-expired              | Periodo de suscripción vencido                                                  |
| Subscriptions - Error              | vtexcommerce-subscriptions-failorder            | Error al crear la suscripción                                                   |
| Subscriptions - New Order          | vtexcommerce-subscriptions-neworder             | Nuevo pedido generado por la suscripción                                            |
| Subscriptions - No Order           | vtexcommerce-subscriptions-noorder              | Pedido de suscripción no creado por indisponibilidad de todos los productos         |
| Subscriptions - Item Unavailable   | vtexcommerce-subscriptions-partialorder         | Pedido de suscripción creado con indisponibilidad de alguno de los ítems            |
| Subscriptions Payment Not Approved | vtexcommerce-subscriptions-payment-not-approved | Pago no aprobado del pedido de suscripción                                   |
| Subscriptions Reactivated          | vtexcommerce-subscriptions-reactivated          | Suscripción reactivada                                                            |
| Subscriptions - Next Order         | vtexcommerce-subscriptions-reminder (Suscripción V2) / next-subscription-order-reminder (Suscripción V3)               | Recordatorio de que la próxima fecha de compra del pedido de suscripción será en dos días |
| Subscriptions - Skipped            | vtexcommerce-subscriptions-skip                 | Pedido de suscripción “omitido” por el cliente                                         |
| Subscriptions - Paused             | vtexcommerce-subscriptions-stop                 | Suscripción pausada                                                              |
| Subscriptions - Edited             | vtexcommerce-subscriptions-update               | Suscripción actualizada con éxito         
