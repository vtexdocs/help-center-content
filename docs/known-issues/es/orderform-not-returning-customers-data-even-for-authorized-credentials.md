---
title: 'OrderForm no devuelve los datos del cliente incluso para credenciales autorizadas'
id: JcjDusU8YP0kerWXC6LXK
status: PUBLISHED
createdAt: 2022-05-19T16:25:28.039Z
updatedAt: 2023-09-27T20:39:27.746Z
publishedAt: 2023-09-27T20:39:27.746Z
firstPublishedAt: 2022-05-19T16:25:28.427Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-no-devuelve-los-datos-del-cliente-incluso-para-credenciales-autorizadas
locale: es
kiStatus: Fixed
internalReference: 582070
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al interactuar con un orderForm en la situación específica en la que los datos del cliente se importaron automáticamente después de iniciar sesión, se eliminarán sus datos del orderForm incluso para los "superusuarios", identificados por sus appKeys.

Esta acción se realiza para evitar el acceso involuntario a los datos de los clientes, pero no debería aplicarse a usuarios administrativos e integraciones identificados por credenciales autorizadas.


##

## Simulación



- Disponga de un usuario con un perfil completo, asegurándose de que es válido para el comportamiento de SmartCheckout
- Hacer el proceso de login para este usuario
- Revisar a través del navegador si su información fue importada al orderForm
- Hacer una petición "Get OrderForm" utilizando credenciales autorizadas
- OrderForm no devolverá los "clientProfileData" y las direcciones que estaban disponibles en el navegador



## Workaround


Utilice el parámetro `?disableAutoCompletion=true` en la URL "Get OrderForm". Este parámetro evita que el orderForm sea recalculado, los datos del cliente serán devueltos entonces




