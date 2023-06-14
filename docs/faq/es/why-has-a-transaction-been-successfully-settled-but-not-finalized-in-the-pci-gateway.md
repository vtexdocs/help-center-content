---
title: '¿Por qué una transacción fue liquidada con éxito pero no fue finalizada en el Pagos?'
id: 5kOSpUYvTyuUKOOws2A8Me
status: PUBLISHED
createdAt: 2017-05-22T17:47:40.705Z
updatedAt: 2023-03-31T18:32:08.359Z
publishedAt: 2023-03-31T18:32:08.359Z
firstPublishedAt: 2017-06-13T15:25:12.427Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: por-que-una-transaccion-fue-liquidada-con-exito-pero-no-fue-finalizada-en-el-pci-gateway
legacySlug: por-que-una-transaccion-fue-capturada-con-exito-pero-no-fue-finalizada-en-el-pci-gateway
---

Para responder a esta cuestión, debemos entender la diferencia entre los status `Aprobada` y `Terminada` en el módulo de Pagos. Una transacción queda con el status de `Aprobada` cuando se realiza el análisis de riesgo y se aprueba la transacción en este análisis. 

Tras esa aprobación, el valor de la transacción es liquidado. Sin embargo, la transacción no se cambia automáticamente al status de `Terminada` tras la liquidación. Para que esto ocurra, es necesario realizar la inclusión de la Factura del pedido en el módulo **Pedidos**.

Tras la inclusión de la Factura, el módulo **Pedidos** se comunica con el Pagos, que modifica el status de la transacción para `Terminada`.
