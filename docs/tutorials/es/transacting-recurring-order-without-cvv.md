---
title: 'Hacer transacción de pedido recurrente sin CVV'
id: iYJ5L8LsiIu0oEkQeE4aC
status: DRAFT
createdAt: 2017-10-29T16:22:22.783Z
updatedAt: 2020-02-11T20:42:59.946Z
publishedAt: 
firstPublishedAt: 2017-10-29T16:29:02.503Z
contentType: tutorial
productTeam: Others
author: authors_39
slug: hacer-transaccion-de-pedido-recurrente-sin-cvv
locale: es
legacySlug: hacer-transaccion-de-pedido-recurrente-sin-cvv
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

La transacción sin CVV se puede hacer simplemente a través de la información de que la operación no requiere CVV. Por lo tanto, se hace sólo con los datos generales de la tarjeta y del comprador, que se guardan en Pagos. Ejemplos de adquirientes que utilizan este modelo son Cielo y Redecard.

Por ambas maneras presentadas, ya que Pagos no guarda el CVV del cliente, mantenemos la seguridad acreditada PCI DSS.

Un punto importante es que todas las compras de recurrencia, independientemente del modelo, sólo se generan internamente en la comunicación entre OMS y Pagos, y son totalmente hechas por API.

Esto evita cualquier violación de la seguridad externa, ya que es una llamada autenticada. 

Si un usuario intenta realizar cualquier tipo de transacción de otro modo, por la tienda online o por otros medios, se pedirá el CVV, y el pedido no será registrado como recurrente.
