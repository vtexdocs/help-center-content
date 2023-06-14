---
title: "Cambio en la máscara de Conversation Tracker. Ahora disponible en Gestión de Pedidos."
id: 4rjAD05fBp6zVeIJL7I6TY
status: CHANGED
createdAt: 2020-04-08T16:29:31.816Z
updatedAt: 2020-11-27T19:39:47.532Z
publishedAt: 2020-04-10T16:36:23.095Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: cambio-en-la-mascara-de-conversation-tracker-ahora-disponible-en-gestion-de-pedidos
legacySlug: cambio-en-la-mascara-de-conversation-tracker-ahora-disponible-en-gestion-de-pedidos
announcementImageID: ""
announcementSynopsisES: Ahora es posible cambiar la máscara del Conversation Tracker (modos Soft y Hard) a través del módulo Gestión de Pedidos.
---

[Conversation Tracker](https://help.vtex.com/es/tutorial/conversation-tracker--tutorials_195) se utiliza para unificar toda la comunicación realizada con un cliente durante el flujo de un pedido. Estos correos electrónicos, que también incluyen los mensajes enviados al correo electrónico del cliente por cualquier otro sistema integrado, se registran en la línea de tiempo del pedido en cuestión.

Conversation Tracker puede tener dos configuraciones de máscara:

**Hard** - crea un alias (correo electrónico alternativo) que no se puede leer para evitar la identificación de la dirección de correo electrónico de su cliente por sistemas externos.

**Soft** - crea un alias de menor complejidad, que puede ser leído en el OMS y JSON del pedido.

**Todas las tiendas ya vienen por defecto, con la configuración Hard**.

## ¿Qué cambió?

Ahora es posible cambiar entre el modo Hard y Soft del Conversation Tracker accediendo al módulo de Gestión de Pedidos de su Admin. Antes, esta configuración estaba apenas disponible a través del Master Data.

> ⚠️ Atención: Si es posible, recomendamos mantener su máscara en el modo Hard para la protección de los datos sensibles de sus clientes (como su correo electrónico).

## ¿Por qué hicimos este cambio?

Algunos clientes necesitaban que la configuración estuviera en modo "Soft" para poder integrar su tienda VTEX con algunos sistemas externos, como ERPs.

## ¿Esto afectará a mi tienda?

Si el cambio de configuración es realmente necesario, ahora es posible hacerlo más fácilmente. Solo cambie al modo Soft si es necesario, el modo Hard sigue siendo el predeterminado para todas las tiendas.

## ¿Cómo cambiarlo?

El cambio puede hacerse a través de la pestaña **Configuración** en el módulo *Gestión de pedidos*. En la pestaña Configuración **General**, cambie a la opción deseada en la sección **Tipo de máscara de conversación**.
Una vez que haya cambiado al modo Soft, puede probar cómo funciona la configuración. Basta con crear un pedido de prueba, y en el OMS pasar el mouse sobre el correo electrónico enviado, para comprobar qué alias se aplicó (Soft o Hard).
Para saber más, consulte nuestra documentación sobre [Conversation Tracker](https://help.vtex.com/es/tutorial/conversation-tracker--tutorials_195?locale=pt).
