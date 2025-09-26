---
title: '¿Por qué un pago se detiene en el status de Autorización?'
id: 3hMw16ZijKm6QmSSY0KOGk
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.163Z
updatedAt: 2025-09-26T13:15:48.309Z
publishedAt: 2025-09-26T13:15:48.309Z
firstPublishedAt: 2019-01-24T20:30:45.528Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: payment-stuck-at-authorizing-status
locale: es
legacySlug: 
---

El status __Authorizing__ es el estado en que Pagos intenta comunicarse con los sistemas de adquirentes u otros gateways. En este status, esperamos la respuesta sobre la __aprovación del pago__.

Puede ocurrir que algunos de los sistemas de los partners estén enfrentando alguna inestabilidad en el momento en que intentamos comunicarnos con ellos. Para resolver este problema, el Pagos de VTEX tiene una función automática de __retentativas__.

Esta feature ha sido desarrollada para atender a los casos en que los sistemas participantes del flujo estén __momentaneamente fuera del aire__. De esta forma, Pagos preserva la información del pago y espera para realizar un nuevo intento. Esta feature permite que el pago no se pierda en caso de inestabilidad de sistemas de terceros.

Una vez normalizada la situación del sistema, Pagos envía la información sobre el pago y el flujo de aprobación puede seguir normalmente.
