---
title: 'El enlace de cambio de pedido en la página de pago/pedido realizado lleva a myAccount en lugar de a la página de pedido.'
id: 6bP44VBdFIujX072rY6wCA
status: PUBLISHED
createdAt: 2023-06-15T16:13:03.752Z
updatedAt: 2023-06-15T16:13:04.279Z
publishedAt: 2023-06-15T16:13:04.279Z
firstPublishedAt: 2023-06-15T16:13:04.279Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: change-order-link-on-checkoutorderplaced-is-leading-to-myaccount-instead-of-the-order-page
locale: es
kiStatus: Backlog
internalReference: 844893
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la cuenta ha configurado la posibilidad de que el comprador cambie el pedido por sí mismo, el enlace de cambio de pedido aparecerá en la plantilla de pago/pedido realizado.

Sin embargo, este enlace no redirige al cliente a la página de edición, sino a myAccount, que aparece vacía.



##

## Simulación


Configure la opción Permitir a los clientes realizar cambios en los pedidos en Admin -> configuración -> configuración de pedidos
 ![](https://vtexhelp.zendesk.com/attachments/token/GqrSJ7cBhZc844LR3kXH7WMlX/?name=image.png)

El comprador realiza un pedido y pasa por caja/pedidoRealizado

Compruebe que el enlace no le redirige al área de edición de pedidos.



## Workaround



1. El comprador tiene que hacer clic en Mis Pedidos en la sección myAccount;
2. Elegir de nuevo el pedido que quieren modificar;
3. 3. Hacer clic en Cambiar pedido.






