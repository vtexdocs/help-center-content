---
title: "No es posible simular cargas en carritos de recompra para diferentes direcciones"
id: 503wM1KC9nzDvPO4c2bQYM
status: PUBLISHED
createdAt: 2019-07-09T15:13:05.370Z
updatedAt: 2022-12-22T20:46:25.967Z
publishedAt: 2022-12-22T20:46:25.967Z
firstPublishedAt: 2019-07-09T20:17:22.706Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: no-es-posible-simular-cargas-en-carritos-de-recompra-para-diferentes-direcciones
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Si el usuario se identifica en Checkout sin iniciar sesión, el sistema completa la compra en función de la información del perfil ya disponible, incluida la dirección, lo que hace imposible que el usuario pueda simular otras opciones de envío.

Esto ocurre porque la simulación de envío requiere, sin excepción, que se inserte una nueva dirección para que funcione. Y, para ese fin, el usuario habría necesitado iniciar sesión. De lo contrario, sus datos quedarán protegidos.

## Simulación

1. Crea tu carrito;
2. Inserte un correo electrónico que ya se utilizó para hacer una compra;
3. Regresa al carrito;
4. Cambia el código postal en el simulador de envío.

## Workaround

En los escenarios de recompra, comunique a sus usuarios que debe iniciar sesión para simular el flete en la página del producto.

