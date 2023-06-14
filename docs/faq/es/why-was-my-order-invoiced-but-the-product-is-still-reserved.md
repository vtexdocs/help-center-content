---
title: '¿Por qué se facturó mi pedido y sigue  reservado el producto?'
id: frequentlyAskedQuestions_160
status: PUBLISHED
createdAt: 2017-04-27T22:39:43.965Z
updatedAt: 2019-12-31T14:25:30.934Z
publishedAt: 2019-12-31T14:25:30.934Z
firstPublishedAt: 2017-04-27T23:01:43.472Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-se-facturo-mi-pedido-y-sigue-reservado-el-producto
legacySlug: por-que-se-facturo-mi-pedido-y-sigue-reservado-el-producto
---

Para que no se ponga a disposición para otro cliente un producto ya vendido para un cliente en un determinado pedido, existe la reserva de los pedidos que son concluidos en el sitio web. 

Esas reservas respetan tres etapas, sin embargo, con dos status. Y lo que causa mucha confusión en la mayoría de los tenderos es porque esa reserva todavía existe si se ya entregó el pedido.

[Entienda como funciona la reserva.](/es/tutorial/como-se-maneja-la-reserva)

Sin embargo, un artículo reservado no sale automáticamente del status reservado.

Para ello, es necesaria una notificación del ERP o un cambio manual en el stock del artículo. Y la reserva sólo puede recibir la baja en el stock a partir del status `Preparando Entrega` del pedido.

Antes de eso, la reserva continuará activa y otro artículo será excluído, [causando un escenario incorrecto](/es/faq/por-que-mi-inventario-esta-negativo).

Es decir, cuando el pedido pasa al status `Preparando Entrega` es necesario que haya una notificación en el inventario para que ese artículo salga de reservado y sea retirado del inventario.

Para ello, basta con actualizar el campo __Cantidad__ con el número de artículos disponibles en su inventario, ignorando el ítem relacionado a la compra.
