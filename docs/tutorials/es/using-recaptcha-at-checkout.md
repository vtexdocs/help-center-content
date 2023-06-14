---
title: 'reCAPTCHA en el checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-03-21T17:52:28.440Z
publishedAt: 2023-03-21T17:52:28.440Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slug: recaptcha-en-el-checkout
legacySlug: recaptcha-en-el-checkout
subcategory: 3shmvletqbB206RqbY2vYQ
---

reCAPTCHA es una solución utilizada para la validación de usuarios reales en pedidos que se pagarán con tarjetas de crédito o débito. Prevé situaciones en que se utilizan programas maliciosos para cometer fraude, ya que impide el acceso de usuarios falsos. 

Para proporcionar mayor seguridad, VTEX proporciona [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) checkbox e indica a los clientes que lo habiliten para proteger la creación y el pago de pedidos. Esta versión de reCAPTCHA está optimizada y el usuario solo tiene que hacer clic en la casilla; solo verá el desafío de validación si Google desconfía del usuario.

 El requisito de reCAPTCHA seguirá la opción configurada por la tienda a través de la [API de configuración del checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm)_<span style="text-decoration:underline;">.</span>_ Para saber más sobre la activación, consulte este artículo sobre el [uso de reCAPTCHA para integraciones](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).

Antes de la activación, es importante tener en cuenta lo siguiente:

* **Adaptación de la interfaz:** al activar la funcionalidad es necesario adaptar la interfaz (web y móvil) que crea pedidos en la cuenta de su tienda (si no realiza este paso, la creación de pedidos se verá afectada). Vea más información sobre cómo adaptar la interfaz con la [guía de reCAPTCHA para integraciones](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).
* **Consecuencias para la cuenta:** habilitar la funcionalidad implica el uso en la cuenta completa, esto incluye el uso en todas las tiendas y subcuentas.
* **Pruebas:** para probar la funcionalidad debe utilizar un [entorno beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) y utilizar [Checkout v6](https://help.vtex.com/es/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH). 

## Regla de aplicación

La regla de aplicación de reCAPTCHA en las compras con tarjeta puede tener [diferentes configuraciones](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

La opción recomendada por VTEX es [VTEX Criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Así, se aplicará un algoritmo propio para decidir la necesidad del desafío reCAPTCHA. Es mantenido y evolucionado por VTEX y es bastante completo al abarcar los patrones de comportamiento observados.

La intención es minimizar el uso del desafío (para optimizar la experiencia del usuario) y al mismo tiempo aplicar la protección necesaria. Las sesiones que se consideran confiables están exentas de reCAPTCHA. Por lo tanto, reCAPTCHA solo se activa en sesiones potencialmente maliciosas.

## Experiencia de compra con VTEX Criteria

Teniendo en cuenta los factores mencionados anteriormente, la experiencia de compra con tarjeta de débito o crédito suele seguir el flujo a continuación. Esto minimiza la incidencia de algunos tipos de fraude y ataques con una fricción mínima para el usuario.

![reCAPTCHA scenariosES](//images.ctfassets.net/alneenqid6w5/3gA55NZPuxpKOxCZxvbhgj/596d96e2fd5ba06a1c390dc9d8d0ca68/reCAPTCHA_scenarios__2_.jpg)
Como se ilustra en la imagen anterior, hay varios resultados posibles en este flujo:

1. Si el algoritmo de VTEX Criteria no clasifica la sesión como sospechosa, la plataforma sigue con la compra de forma normal.

2. De lo contrario, la interfaz debe mostrar la casilla de reCAPTCHA, que el cliente debe marcar. Si el reCAPTCHA no clasifica el comportamiento al marcar la casilla como sospechoso, la compra sigue de forma normal.

![newCaptchaAnchor](//images.ctfassets.net/alneenqid6w5/2lv7PfOmkakDcSkNbAITtK/9b8cf067c590a48d2560e9a170fa2022/newCaptchaAnchor.gif)
3. Si el reCAPTCHA clasifica el comportamiento como sospechoso, la interfaz mostrará el desafío.

![desafio recaptcha](//images.ctfassets.net/alneenqid6w5/3wg7F9nmxJwZ8jxUJKb8OT/e820adf7252e86a94e79fc72eae1f536/desafio_recaptcha.png)
4. Si el desafío se resuelve con éxito, la plataforma sigue con la compra. Si no, el comportamiento se clasifica como compatible con un _bot_ y la plataforma no finaliza la compra.

