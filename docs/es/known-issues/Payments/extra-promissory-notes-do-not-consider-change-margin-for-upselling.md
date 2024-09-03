---
title: 'Los pagarés extra no contemplan el margen de cambio para la venta al alza'
id: 4PwQpQ07NHthtUyfJibNmV
status: PUBLISHED
createdAt: 2022-02-16T17:44:28.486Z
updatedAt: 2022-11-25T22:08:49.657Z
publishedAt: 2022-11-25T22:08:49.657Z
firstPublishedAt: 2022-02-16T17:44:28.968Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: los-pagares-extra-no-contemplan-el-margen-de-cambio-para-la-venta-al-alza
locale: es
kiStatus: Fixed
internalReference: 525987
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El valor máximo para la venta adicional sólo se calcula para los pagarés por defecto, cuando se añaden otros adicionales, nuestra pasarela no considera el campo de rango de margen cambiante en el cálculo



## Simulación


Realiza un pedido utilizando cualquier ranura por defecto para pagarés y luego realiza un nuevo pedido después de añadir y utilizar nuevas ranuras para pagarés



## Workaround


En el caso de utilizar el campo de cambio de rango de márgenes, este campo sólo funciona para las cinco primeras franjas horarias por defecto

