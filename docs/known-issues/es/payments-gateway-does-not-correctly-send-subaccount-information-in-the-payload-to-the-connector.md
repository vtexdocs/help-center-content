---
title: 'Payments Gateway no envía correctamente la información de la subcuenta en la carga útil al conector'
id: 49kjQUzk5LmPmfeCxpqdzg
status: PUBLISHED
createdAt: 2023-05-02T19:55:08.282Z
updatedAt: 2023-05-11T14:52:50.914Z
publishedAt: 2023-05-11T14:52:50.914Z
firstPublishedAt: 2023-05-02T19:55:08.857Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: payments-gateway-no-envia-correctamente-la-informacion-de-la-subcuenta-en-la-carga-util-al-conector
locale: es
kiStatus: Backlog
internalReference: 801012
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El problema radica en la formulación de las URLs que se envían al proveedor de pagos. Por lo tanto, lo que ocurre es que en escenarios donde estas URLs son diferentes, como en el caso de una cuenta franquiciada que procesa el pago y almacena en una tienda rápida, la diferencia entre las URLs generadas en el pago y la URL esperada por el checkout provoca que la app no renderice.

Así, el problema se extiende a la arquitectura de cuentas VTEX, ya que el partner informó que la app funcionaba en escenarios legacy o VTEX IO sin cuentas franquiciadas. En resumen, lo que ocurre es que cuando se envía la URL InBound, ésta va con la cuenta principal ya que es la que procesa el pago. Sin embargo, la URL de la caja que realizó el pedido es de la tienda rápida, y cuando la pasarela devuelve la URL para renderizar la app de pago, es diferente a la URL de la caja, provocando que la app no funcione.


##

## Simulación


Realice un pedido en una caja de una tienda rápida que sea una subcuenta o franquicia en la que esté configurada una app 3DS2.



## Workaround


N/A





