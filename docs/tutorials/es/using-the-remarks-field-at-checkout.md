---
title: Utilizando el campo de observación del checkout
id: tutorials_2726
status: DRAFT
createdAt: 2017-04-27T21:52:49.197Z
updatedAt: 2022-07-21T20:19:44.774Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:55.184Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: utilizando-el-campo-de-observacion-del-checkout
legacySlug: utilizando-el-campo-de-observacion-del-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

Es posible activar un campo en la pagina del checkout para insertar observaciónes relacionadas a los pedidos. El texto llenado en este campo va a ser registrado en el pedido y puede ser utilizado para sumarse a cualquier información que la tienda necesite.

Por patrón, este campo no viene habilitado, asi que es necesario poner la siguiente regla en el CSS para activarlo.

`.note { display: block; }`

El contenido de este campo va a estar disponible via API en el momento de obtener el pedido en el campo **openTextField**.

Además de esto, estará en el JSON del Message Center, también en el campo __openTextField__. O sea, este contenido puede ser presentado en el template de los mails transaccionales de la tienda.
