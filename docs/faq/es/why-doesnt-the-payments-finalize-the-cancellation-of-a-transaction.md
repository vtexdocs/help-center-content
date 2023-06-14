---
title: ¿Por qué el Pagos no finaliza la cancelación de la transacción?
id: 3IBqfy5IhOMkYKuKmu2wSs
status: PUBLISHED
createdAt: 2017-05-16T14:37:21.265Z
updatedAt: 2019-12-31T14:23:49.504Z
publishedAt: 2019-12-31T14:23:49.504Z
firstPublishedAt: 2017-05-18T18:55:27.278Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: por-que-el-pagos-no-finaliza-la-cancelacion-de-la-transaccion
legacySlug: por-que-el-pci-gateway-no-finaliza-la-cancelacion-de-la-transaccion
---

Este escenario ocurre cuando una transacción permanece indefinidamente en el status `Cancelling`, impidiendo la cancelación de la transacción, y por consiguiente, del pedido en el OMS. Esta situación ocurre cuando VTEX está esperando un retorno del sistema del gateway, pero la respuesta correcta no llega hasta VTEX. Podemos ver en la imagen a continuación un ejemplo de respuesta del gateway que no permite la continuidad del proceso de cancelación por parte de VTEX:

![resposta-inadequada-pci-gateway](//images.contentful.com/alneenqid6w5/3P9FblRbzGIEyWo0IW6msa/278ba7912bcbb49a537e94fb7bb4a1b1/resposta-inadequada-pci-gateway.png)

Para solucionar la cuestión, el comerciante debe ponerse en contacto con el gateway responsable del pago, informar los datos de la transacción y solicitar la cancelación.
