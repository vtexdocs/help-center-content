---
title: 'Integrar con YOP'
id: tutorials_4206
status: PUBLISHED
createdAt: 2017-04-27T21:51:42.320Z
updatedAt: 2023-03-29T16:28:29.290Z
publishedAt: 2023-03-29T16:28:29.290Z
firstPublishedAt: 2017-04-27T23:11:14.915Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: integrar-con-yop
legacySlug: integrar-con-yop
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

## Primeiros pasos

Algunos pasos son esenciales para que empecemos las configuraciones de la integración con el marketplace YOP.
1. Configure la [política comercial](http://help.vtex.com/es/tutorial/politica-comercial-para-marketplace/);
2. Configure la [logística](http://help.vtex.com/es/tutorial/como-configurar-logistica-para-politica-comercial/) para esa política comercial;
3. Póngase en contacto con YOP;

## Cómo configurar

### Configure el perfil de acceso

1. Acceda al menú **Configuración de la cuenta**;
2. Haga clic en la pestaña **Usuarios**;
3. Haga clic en el botón **Nuevo usuario**;
4. Complete el **email** y **nombre completo**;
5. Busque y seleccione los perfiles de acceso **IntegrationProfile-Fulfillment\_Oms **(para adicionar las nuevas órdenes);
6. Haga clic en el botón **Añadir;**
7. Haga clic en el botón **Guardar**.

### Configure el afiliado

[Siga las instrucciones de nuestro manual y llene los campos conforme a la indicación a continuación](http://help.vtex.com/es/tutorial/como-configurar-afiliado/).

- **Nome:** YOP
- **ID:** YPP
- **Política Comercial:** ID de la política comercial que será asumida por el marketplace.
- **E-mail de FollowUp:** Endereço de email que recibirá cualquier notificación de conflicto en las integraciones de pedidos.
- **Endpoint de Search:** https://yop.land/vtex/notifications
- **Versión del Endpoint de Search:** Hoy existe solamente 1, no modificable – Estándar: 1.x.x;
- **Usar mi medio de pago:** No utilizar.

### Cree una promoción de flete gratis 
[Siga nuestro manual sobre cómo crear promoción para el marketplace] (https://help.vtex.com/es/tutorial/configurar-promocao-para-marketplace--tutorials_406).

## Para conocer más

[Entenda cómo funciona la integración con los marketplaces](http://help.vtex.com/es/tutorial/integrating-with-marketplace/).
