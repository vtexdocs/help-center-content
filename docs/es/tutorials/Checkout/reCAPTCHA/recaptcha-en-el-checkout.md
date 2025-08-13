---
title: 'reCAPTCHA en el checkout'
id: 18Te3oDd7f4qcjKu9jhNzP
status: PUBLISHED
createdAt: 2021-08-03T12:53:12.155Z
updatedAt: 2023-12-11T22:07:06.233Z
publishedAt: 2023-12-11T22:07:06.233Z
firstPublishedAt: 2021-08-03T13:51:19.441Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: using-recaptcha-at-checkout
legacySlug: recaptcha-en-el-checkout
locale: es
subcategoryId: 3shmvletqbB206RqbY2vYQ
---

reCAPTCHA es una solución utilizada para la validación de usuarios reales en pedidos que se pagarán con tarjetas de crédito o débito. Prevé situaciones en que se utilizan programas maliciosos para cometer fraude, ya que impide el acceso de usuarios falsos. 

Recomendamos su activación para proteger la creación y el pago de pedidos en tu tienda.

El requisito de reCAPTCHA seguirá la opción configurada por la tienda a través de la [API de configuración del checkout](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Para saber más sobre la activación, consulte este artículo sobre el [uso de reCAPTCHA para integraciones](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).

Antes de la activación, es importante tener en cuenta lo siguiente:

* **Adaptación de la interfaz:** al activar la funcionalidad es necesario adaptar la interfaz (web y móvil) que crea pedidos en la cuenta de su tienda (si no realiza este paso, la creación de pedidos se verá afectada). Vea más información sobre cómo adaptar la interfaz con la [guía de reCAPTCHA para integraciones](https://developers.vtex.com/vtex-rest-api/docs/recaptcha).
* **Consecuencias para la cuenta:** habilitar la funcionalidad implica el uso en la cuenta completa, esto incluye el uso en todas las tiendas y subcuentas.
* **Pruebas:** para probar la funcionalidad sin afectar tu tienda en producción debe utilizar un [entorno beta](https://help.vtex.com/pt/tutorial/acessar-o-ambiente-beta-pelo-dominio-myvtex-com--3BHM289568gcSwk2O80Asu) con [Checkout v6](https://help.vtex.com/es/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH). 

## Regla de aplicación

La regla de aplicación de reCAPTCHA en las compras con tarjeta puede tener [diferentes configuraciones](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

La opción recomendada por VTEX es [VTEX Criteria](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm). Así, se aplicará un algoritmo propio para decidir la necesidad del desafío reCAPTCHA. Es mantenido y evolucionado por VTEX y es bastante completo al abarcar los patrones de comportamiento observados.

La intención es minimizar el uso del desafío (para optimizar la experiencia del usuario) y al mismo tiempo aplicar la protección necesaria. Las sesiones que se consideran confiables están exentas de reCAPTCHA. Por lo tanto, reCAPTCHA solo se activa en sesiones potencialmente maliciosas.

## Versiones de reCAPTCHA

VTEX está integrado con reCAPTCHA enterprise, que ofrece dos enfoques de validación: checkbox (equivalente a [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display)) y basada en puntuación (equivalente a [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)). Consulta la siguiente tabla para saber qué versión se aplica a tu operación.

| **Características de la tienda**        | **Versión de reCAPTCHA** |
|-----------------------------------------|--------------------------|
| Storefront nativo VTEX                  | Checkbox (v2)                       |
| Storefront propio para web              | Checkbox (v2) o Basada en puntuación (v3)                  |
| Storefront propio para aplicación móvil | Basada en puntuación (v3)                         |

## reCAPTCHA v2

Puedes utilizar reCAPTCHA checkbox (v2). Es decir, cuando corresponda, el usuario únicamente deberá hacer clic en la <i class="far fa-check-square"></i> _(casilla de verificación),_ y solo se le presentará el desafío de validación si Google sospecha del usuario. A continuación puedes consultar más información sobre la experiencia de compra.

### Experiencia de compra con VTEX Criteria y reCAPTCHA v2

Teniendo en cuenta los factores mencionados anteriormente, la experiencia de compra con tarjeta de débito o crédito suele seguir el flujo a continuación. Esto minimiza la incidencia de algunos tipos de fraude y ataques con una fricción mínima para el usuario.

![reCAPTCHA scenariosES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/reCAPTCHA/recaptcha-en-el-checkout_1.jpg)
Como se ilustra en la imagen anterior, hay varios resultados posibles en este flujo:

1. Si el algoritmo de VTEX Criteria no clasifica la sesión como sospechosa, la plataforma sigue con la compra de forma normal.

2. De lo contrario, la interfaz debe mostrar la casilla de reCAPTCHA, que el cliente debe marcar. Si el reCAPTCHA no clasifica el comportamiento al marcar la casilla como sospechoso, la compra sigue de forma normal.

![newCaptchaAnchor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/reCAPTCHA/recaptcha-en-el-checkout_2.gif)
3. Si el reCAPTCHA clasifica el comportamiento como sospechoso, la interfaz mostrará el desafío.

![desafio recaptcha](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/reCAPTCHA/recaptcha-en-el-checkout_3.png)
4. Si el desafío se resuelve con éxito, la plataforma sigue con la compra. Si no, el comportamiento se clasifica como compatible con un _bot_ y la plataforma no finaliza la compra.

## reCAPTCHA v3

reCAPTCHA basada en puntuación ([v3](https://developers.google.com/recaptcha/docs/v3)) no interrumpe la experiencia del usuario en tu tienda. Analiza si las interacciones en el sitio web son sospechosas y devuelve una puntuación entre `1.0` (lo más probable es que se trate de una interacción normal) y `0.0` (lo más probable es que sea un bot).

Al configurar reCAPTCHA v3 para tu tienda VTEX, tienes la opción de establecer una puntuación mínima para [cada clave registrada](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#getting-the-recaptcha-key-for-mobile-implementations) y una [puntuación mínima para tu tienda](https://developers.vtex.com/docs/guides/implementing-recaptcha-in-integrations#recaptcha-v3-score). Los valores posibles son `0.1`, `0.3`, `0.7` y`0.9`. 

La prioridad de aplicación de la puntuación mínima para una compra determinada es:

```
Puntuación de la clave > Puntuación de la cuenta > Puntuación predeterminada VTEX (0.7)
```

Esto significa que si estableces puntuaciones mínimas para tu clave y tu cuenta, se aplicará la puntuación de la clave. Sin embargo, si no estableces ninguna puntuación, VTEX aplicará el valor predeterminado `0.7`.

Las interacciones que devuelvan un valor inferior al mínimo aplicable no podrán finalizar la compra.

Para configurar reCAPTCHA y establecer puntuaciones mínimas de claves o cuentas, ponte en contacto con tu equipo de desarrolladores y consulta la guía [integración con reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score).
