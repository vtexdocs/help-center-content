---
title: 'Campo NIF en el checkout de Portugal permite caracteres especiales y causa problemas en el flujo del pedido'
id: 5xQ3fPZq4oUk8QsY0KUEYm
status: PUBLISHED
createdAt: 2018-03-28T12:47:56.181Z
updatedAt: 2022-12-22T20:48:54.967Z
publishedAt: 2022-12-22T20:48:54.967Z
firstPublishedAt: 2018-03-28T13:14:18.633Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: nif-field-at-checkout-in-portugal-allows-special-characters-and-causes-problem-in-order-flow
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El campo NIF (documento) del checkout de Portugal (IU) está permitiendo introducir caracteres especiales en sus valores. Sin embargo, los pedidos que se cierran con caracteres especiales quedan bloqueados con error en el OMS.

![OMS](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Simulación

Para simular el problema, haga un pedido en un checkout de Portugal, incluyendo un carácter especial en el campo NIF (documento). A continuación, consulte en el OMS el error similar al del ejemplo anterior.


## Workaround

Como solución paliativa, indicamos que el responsable técnico de la tienda incluya un javascript de personalización en el checkout, validando el valor introducido de acuerdo con la máscara y las reglas del NIF.

Los pedidos que ya se han concluido y se encuentran con ese error en el OMS no se cancelarán. Por lo tanto, sugerimos que la tienda se ponga en contacto con el cliente para explicar la situación y ayudarlo a rehacer el pedido.

