---
title: Hook de Feed v3
id: 6JkYQpIlU8ptysUiGIp4Px
status: DRAFT
createdAt: 2019-04-29T22:33:08.726Z
updatedAt: 2022-10-19T21:08:20.910Z
publishedAt: 
firstPublishedAt: 2019-06-10T20:51:18.121Z
contentType: tutorial
productTeam: Channels
author: 6AcGyun1hSWewU8YcaQiO
slug: hook-de-feed-v3
legacySlug: configurar-hook-de-feed-v3
subcategory: 3Y8xzVGMXcuPTuzfFI0vUp
---


Hook es una extensión de [Feed v3](https://help.vtex.com/es/tutorial/configurar-feed-v3-del-modulo-de-gestion-de-pedidos--5qDml3cQypWDRTgw69s4C1), orientada para operaciones robustas que requieren integraciones más complejas. 

A diferencia de feed, su funcionamiento no requiere que el usuario realice ningún commit reactivo. Cuando una llamada se realiza correctamente a una dirección, el sistema realiza un __auto commit__.

Su principal funcionalidad es evitar consultas innecesarias a un feed sin nuevos eventos por parte de un sistema o usuario, notificando al __endpoint__ configurado cada vez que hay un nuevo cambio en el status del pedido. Se puede ver la lista con los posibles status de pedido en el artículo [Flujo de pedido en Gestión de pedidos](https://help.vtex.com/es/tutorial/fluxo-de-pedido/#entiendo-los-estados).

Para saber cómo configurar y usar Hook, consulte la [guía Feed v3 para desarrolladores](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

