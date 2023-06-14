---
title: '¿Por qué mi cliente tuvo que iniciar sesión al intentar finalizar su compra?'
id: frequentlyAskedQuestions_2705
status: PUBLISHED
createdAt: 2017-04-27T22:25:14.581Z
updatedAt: 2022-05-13T16:37:34.897Z
publishedAt: 2022-05-13T16:37:34.897Z
firstPublishedAt: 2017-04-27T23:02:37.271Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: authors_3
slug: por-que-fue-solicitado-login-en-el-checkout-finalizacion-de-compra
locale: es
legacySlug: por-que-fue-solicitado-login-en-el-checkout-finalizacion-de-compra
---

Existe una regla de seguridad en el Checkout que está relacionada con la facilidad de compra del SmartCheckout.

Como el SmartCheckout permite cerrar una compra sólo con el email y con el CVV de la tarjeta, si el cliente ya ha finalizado la compra anteriormente, limitamos la cantidad de finalización de compra sin éxito a 3. Depois de eses 3 intentos, solicitamos el login del cliente.

![LoginES](https://images.ctfassets.net/alneenqid6w5/3iJKRBnU00IAwu24SMey0y/50a69e45f7f1a8380e0299490fb58603/LoginES.png)

O sea, en el caso de que el cliente finalice la compra tan sólo con el email y el CVV de la tarjeta de crédito y la autorización de la operadora no ocurra en hasta 3 veces seguidas, es mostrada la pantalla de login para que el cliente siga intentando comprar. Ese conteo vuelve al inicio cuando el cliente inicia sesión y completa con éxito su compra.

<div class="alert alert-warning">
La solicitud de una nueva autenticación al cliente sólo está relacionada con el límite establecido de 3 intentos de compra sin éxito con la misma tarjeta. Esto quiere decir que, <strong>independientemente del intervalo de tiempo entre cada intento, se solicitará la autenticación cuando el cliente intenta por tercera vez finalizar una compra sin éxito.</strong>
</div>

Esa medida tiene por objeto la seguridad de los datos de los clientes contra ataques e intentos de fraude.

Para obtener más información sobre la protección de datos, visite [Seguridad de SmartCheckout](https://help.vtex.com/es/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).
