---
title: "Si no se añaden los datos en el paso 'entregar en otra dirección', desaparece el botón 'ir al pago'."
id: cdZO8gGXDB1JZSj42AnVh
status: PUBLISHED
createdAt: 2022-01-24T21:42:52.750Z
updatedAt: 2023-10-13T15:29:14.854Z
publishedAt: 2023-10-13T15:29:14.854Z
firstPublishedAt: 2023-10-13T15:29:14.854Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: failure-to-add-data-in-the-deliver-to-another-address-step-causes-the-go-to-payment-button-to-disappear
locale: es
kiStatus: Backlog
internalReference: 467419
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Durante la etapa de pago, en el paso de rellenar los datos de envío, pulsando sobre la opción "Entregar en otra dirección", si no se añade ninguna dirección y el comprador vuelve a la lista de direcciones (utilizando el botón "volver a la libreta de direcciones") el botón "Ir al pago" desaparece.


##

## Simulación



- Durante la etapa de Pago, al rellenar los datos de envío, si hay una lista de direcciones, haga clic en "Entregar en otra dirección";
- No añada ninguna dirección y vuelva a los datos de envío pulsando el botón "Volver a la lista de direcciones";
- El botón "Ir al pago" desaparece.



## Workaround


Para que el botón vuelva a aparecer, basta con hacer clic en una de las direcciones de la libreta de direcciones. Sin embargo, no existe ninguna solución para evitar este comportamiento.




