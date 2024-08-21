---
title: 'El pago no muestra la promoción de envío en el primer instante para una condición específica'
id: 14rQaM53csQQeA1wu5lRj8
status: PUBLISHED
createdAt: 2022-05-20T17:46:10.644Z
updatedAt: 2024-01-15T14:35:39.473Z
publishedAt: 2024-01-15T14:35:39.473Z
firstPublishedAt: 2022-05-20T17:46:11.046Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-no-muestra-la-promocion-de-envio-en-el-primer-instante-para-una-condicion-especifica
locale: es
kiStatus: No Fix
internalReference: 280144
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El checkout (backend) tiene un comportamiento de pre-seleccionar el mejor método de entrega para el usuario tan pronto como un código postal es informado.

Las promociones que utilizan la restricción de "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente", de hecho, sólo se aplican después de que el cliente elige el método de entrega específico.

Sucede que, si la opción de entrega seleccionada automáticamente al realizar el pago se ajusta a cualquier promoción con la restricción anterior, el descuento no se aplicará (la opción mencionada es la que dice "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente").

Esto sólo ocurre en el primer momento, ya que el checkout no recalcula las promociones al hacer esta elección de entrega automática. Esto se debe a que, si recalcula las promociones, eventualmente la mejor opción de entrega puede ser diferente, y esto dejaría al sistema en un bucle, buscando siempre la mejor opción. En futuras actualizaciones de orderForm, se recalcula todo su contexto, esta vez con la forma de entrega realmente seleccionada, y entonces se aplicará la promoción.

Además de este hecho, la simulación de envío del carrito (shipping-preview) realiza peticiones adicionales a la API, no sólo utilizando el contexto del orderForm. Esto hace que reciba la promoción, mientras que los totales del carrito se restringen al contexto del orderForm, que aún no tiene la promoción, lo que da lugar a valores divergentes.


##

## Simulación


- tener una promoción de envío gratuito restringida a una opción "A", y con la opción adicional anterior activada
- tener un carrito y un código postal con dos o más tipos de envío, donde "A" es el envío más barato (ejemplo, A = R$10; B = R$20)
- introduzca el código postal y tenga en cuenta que "A" (el más barato) se seleccionará automáticamente, pero seguirá apareciendo como R$10
- seleccione el envío "B" (20 R$) y vuelva al envío "A" (10 R$)
- en este momento el valor de "A" se volverá a calcular y aparecerá como gratuito



## Workaround

**
No se recomienda utilizar esta restricción en las promociones de envío.





