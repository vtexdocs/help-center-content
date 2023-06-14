---
title: 'Mejora de seguridad en la primera compra del cliente'
id: DKlfRaMNHxgQhUT5VqRrK
status: DRAFT
createdAt: 2023-04-28T12:35:44.503Z
updatedAt: 2023-06-09T15:37:43.651Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: mejora-de-seguridad-en-la-primera-compra-del-cliente
locale: es
legacySlug: mejora-de-seguridad-en-la-primera-compra-del-cliente
announcementImageID: ''
announcementSynopsisES: 'Nueva cookie en el Checkout permite aumentar la seguridad en tu tienda'
---

Con el fin de aumentar la seguridad de la información de tu tienda, VTEX ha introducido mejoras en el acceso a los datos del cliente cuando realiza su primera compra. A partir del 30 de Junio de 2023, se le envía al cliente una nueva cookie en el momento en que crea el carrito, lo que impide que terceros utilicen medios externos para acceder a su información personal.

## ¿Qué cambió?

Antes, durante la primera compra, la información personal del cliente se mostraba en el carrito sin enmascaramiento de datos, ya que aún no tiene un perfil creado en la tienda.

Ahora, durante la creación de un nuevo carrito, además de la cookie `checkout.vtex.com` que contiene el orderFormId, se enviará una nueva cookie (`CheckoutOrderFormOwnership`). Esto permitirá que solo el cliente que creó el carrito tenga acceso ilimitado a su información.

Si se produce un intento externo de acceder a los datos del carrito, no se podrá ver la información personal del cliente, ya que sus datos aparecerán enmascarados.

## ¿Por qué realizamos este cambio?

Implementamos esta mejora para aumentar la seguridad en el acceso a la información de tus clientes en el entorno de tu tienda.

## ¿Qué se necesita hacer?

La actualización de seguridad es automática en todas las tiendas VTEX a partir del 30 de Junio de 2023. No será necesaria ninguna acción por tu parte.
