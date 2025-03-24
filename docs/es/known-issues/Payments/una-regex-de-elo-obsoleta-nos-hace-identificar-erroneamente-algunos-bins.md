---
title: 'Una regex de Elo obsoleta nos hace identificar erróneamente algunos BINs'
id: 45vx88VCQ0yZynkVxGqSq8
status: PUBLISHED
createdAt: 2024-04-10T17:25:57.376Z
updatedAt: 2024-04-10T17:25:58.309Z
publishedAt: 2024-04-10T17:25:58.309Z
firstPublishedAt: 2024-04-10T17:25:58.309Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: outdated-elo-regex-is-causing-us-to-misidentify-some-bins
locale: es
kiStatus: Backlog
internalReference: 1015043
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos BIN no se identifican correctamente en la caja. La marca de la tarjeta se determina mediante una regex que podría quedar obsoleta, dando lugar a marcas de tarjeta no identificadas o mal identificadas.



## Simulación



1. Configure dos Condiciones de Pago una para Elo
2. Añade un artículo al azar a tu carrito en la tienda y elige pagarlo con Tarjeta de Crédito
3. Rellena el número de tarjeta con el BIN de Elo 65057000 y complétalo con números aleatorios
4. Rellena el resto de la información de la tarjeta con datos falsos
5. Como no se ha podido identificar la tarjeta, la caja pedirá confirmar el número de tarjeta y la marca de la tarjeta ya puede estar seleccionada como otra marca de tarjeta



## Workaround



El usuario debe cambiar la marca de tarjeta seleccionada en la caja haciendo clic en la marca correcta.




