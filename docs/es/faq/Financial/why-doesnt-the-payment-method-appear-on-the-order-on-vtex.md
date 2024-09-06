---
title: '¿Por qué no aparece la forma de pago en el pedido en VTEX?'
id: frequentlyAskedQuestions_695
status: PUBLISHED
createdAt: 2017-04-27T22:29:28.700Z
updatedAt: 2019-12-31T14:24:53.813Z
publishedAt: 2019-12-31T14:24:53.813Z
firstPublishedAt: 2017-04-27T23:02:33.099Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_3
slug: por-que-no-aparece-la-forma-de-pago-en-el-pedido-en-vtex
locale: es
legacySlug: por-que-no-aparece-la-forma-de-pago-en-el-pedido-en-vtex
---

Cuando tiene lugar una compra en el marketplace, [para la mayoría de las integraciones](http://vtex.github.io/docs/integracao/marketplace/index.html), se efectúa el pago en el marketplace para repasarlo posteriormente al seller. En ese flujo, se efectúa el pago por las formas de pago catastradas en el marketplace, o sea, el proceso de pago no pasa por VTEX.

Por eso, cuando se integra el pedido, no se repasa para VTEX la información de la forma de pago, pues no es algo que impactará el flujo del en el Admin.

