---
title: 'Carga eterna en el checkout UI v5'
id: 6lOzyvQqoRCNWkIjRtyibv
status: PUBLISHED
createdAt: 2022-10-18T15:28:04.738Z
updatedAt: 2022-12-02T17:58:25.957Z
publishedAt: 2022-12-02T17:58:25.957Z
firstPublishedAt: 2022-10-18T15:28:05.492Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: carga-eterna-en-el-checkout-ui-v5
locale: es
kiStatus: Backlog
internalReference: 332740
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En Checkout v5, en un escenario específico, la página se atasca en una carga infinita, y en la consola, podemos ver el error: "Uncaught SyntaxError: Unexpected token u in JSON at position 0 at JSON.parse (<anonymous>)".

Esto se puede asociar directamente con el "addressType: null", lo que puede ocurrir después de introducir el código postal y refrescar la página.



## Simulación



1. Rellenar la información del perfil que nunca se utilizó antes (perfil y dirección incompletos)
2. Finalizar la compra
3. Añadir sólo el código postal
4. Refrescar la página o volver a la página de inicio y volver de nuevo al carrito



## Workaround


NA

