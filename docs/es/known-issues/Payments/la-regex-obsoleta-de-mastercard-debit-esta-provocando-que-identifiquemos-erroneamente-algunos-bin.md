---
title: 'La regex obsoleta de Mastercard Debit está provocando que identifiquemos erróneamente algunos BIN.'
id: 5gx4dSY2P5gGE0JI661hGL
status: PUBLISHED
createdAt: 2022-08-20T00:03:11.640Z
updatedAt: 2024-04-02T19:13:02.839Z
publishedAt: 2024-04-02T19:13:02.839Z
firstPublishedAt: 2022-08-20T00:03:12.490Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-mastercard-debit-regex-is-causing-us-to-misidentify-some-bins
locale: es
kiStatus: Backlog
internalReference: 642136
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos códigos BIN no se identifican correctamente en la caja. La marca de la tarjeta se determina mediante una regex que puede quedar obsoleta, provocando que la marca de la tarjeta no se identifique o se identifique erróneamente.



## Simulación



1. Configure dos Condiciones de Pago una para Mastercard Débito
2. Añade un artículo al azar al carrito en la tienda y elige pagarlo con tarjeta de débito
3. Rellena el número de tarjeta con el BIN 551898 de Mastercard Débito y complétalo con números aleatorios
4. Rellena el resto de información de la tarjeta con datos falsos
5. Como no se ha podido identificar la tarjeta, la caja pedirá que se confirme el número de tarjeta y la marca de la tarjeta ya puede estar seleccionada como otra marca de tarjeta



## Workaround


No hay solución.




