---
title: ¿Por qué un pedido no fue enviado al antifraude?
id: 5zznO7GMtUYKCkIKyc84II
status: PUBLISHED
createdAt: 2018-02-16T15:50:02.020Z
updatedAt: 2019-12-31T14:25:21.793Z
publishedAt: 2019-12-31T14:25:21.793Z
firstPublishedAt: 2018-02-16T16:16:00.358Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: por-que-un-pedido-no-fue-enviado-al-antifraude
legacySlug: por-que-un-pedido-no-fue-enviado-al-antifraude
---

Cada vez que se realiza un pago, el conector de gateway de pago realiza algunas validaciones iniciales para continuar con el pago. En este punto, el conector aguarda las respuestas correspondientes a sus validaciones.

Después de varios intentos, si no obtiene las respuestas esperadas, el pago y el pedido se cancelan. Los pedidos en esta situación no se envían al antifraude.

<div class = "alert alert-warning">
No se puede reenviar un pedido cancelado para el antifraude.
</div>
