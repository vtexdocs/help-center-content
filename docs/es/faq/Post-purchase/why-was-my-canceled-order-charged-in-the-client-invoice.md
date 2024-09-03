---
title: '¿Por qué se cobró en la factura del cliente mi pedido cancelado?'
id: frequentlyAskedQuestions_492
status: PUBLISHED
createdAt: 2017-04-27T22:34:48.023Z
updatedAt: 2024-08-13T18:57:07.052Z
publishedAt: 2024-08-13T18:57:07.052Z
firstPublishedAt: 2017-04-27T23:02:22.399Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: por-que-se-cobro-en-la-factura-del-cliente-mi-pedido-cancelado
locale: es
legacySlug: por-que-se-cobro-en-la-factura-del-cliente-mi-pedido-cancelado
---

Usualmente, cuando se cancela el pedido, el módulo de pedidos se comunica con el módulo de pago para que se cancele la transacción. Cuando eso ocurre después que se aprobó el pago, el módulo de pago se comunica con el conector, solicitando el extorno automático del pago, para que no se cobre en la factura del cliente.

Sin embargo, no es siempre que el conector autoriza el extorno automático, y regresa para el módulo con esa información. Con eso, el módulo pagos envía un email al usuario catastrado en el Admin VTEX en **Configuración de la tienda > Pago > Configuración**, en la ventana **Notificaciones**. El email informa que es necesario efectuar el extorno manual junto al conector por el cual se procesó la transacción. Además, también crea una tarea en [VTEX DO](https://help.vtex.com/es/tutorial/vtex-do-interface--7KMbRL4OslN8DTX9oiuCiu), que queda visible tanto en el módulo del pago como en el módulo de pedidos.

Cuando el módulo de pago envía un email informando que es necesario el extorno manual, el mensaje que surge en la interacción de la transacción en el módulo es la siguiente: 

Source Message: `The e-mail with subject gateway-extorno-manual-requerido has been successfully sent to usuario@tienda.com`.

Cuando surge ese mensaje en la interacción, después de un intento de cancelación y extorno, de una transacción que ya tuvo el pago aprobado y/o liquidado, significa que no fue posible hacer el extorno en línea de forma automática junto al conector y será necesario efectuar el extorno manualmente.
