---
title: 'Lean shipping provoca "Algo salió mal" tras cambiar los puntos de recogida'
id: 45jQODtjZ4vLXniNJIlQZc
status: PUBLISHED
createdAt: 2024-06-20T21:11:53.067Z
updatedAt: 2024-06-20T21:15:28.608Z
publishedAt: 2024-06-20T21:15:28.608Z
firstPublishedAt: 2024-06-20T21:11:53.899Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: lean-shipping-provoca-algo-salio-mal-tras-cambiar-los-puntos-de-recogida
locale: es
kiStatus: Backlog
internalReference: 1053609
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Un comprador puede buscar diferentes puntos de recogida en diferentes códigos postales. Al utilizar lean shipping, después de añadir un código postal con puntos de recogida disponibles y cambiar a un código postal sin puntos de recogida, el paso de envío se bloquea con el mensaje "Algo ha ido mal".

 ![](https://vtexhelp.zendesk.com/attachments/token/i0jCDFlz5EGPnKyk5Nfw0Etl0/?name=image.png)


##

## Simulación



- Montar un carro y seleccionar recogida en punto en el carro;
- Añadir un código postal con recogida;
- Seleccionar una de las recogidas
- Cambiar a un código postal sin puntos de recogida;
- Ir a la caja y aparece el mensaje "Algo ha ido mal" en el paso de envío.



## Workaround


Actualice la página o desactive el envío flexible.




