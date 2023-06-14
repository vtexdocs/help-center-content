---
title: 'Prácticas recomendadas para evitar ataques virtuales'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2022-06-10T14:24:42.121Z
publishedAt: 2022-06-10T14:24:42.121Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slug: practicas-recomendadas-para-evitar-ataques-virtuales
locale: es
legacySlug: practicas-recomendadas-para-evitar-ataques-virtuales
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

VTEX cuenta con varias protecciones contra posibles ataques a las tiendas. Sin embargo, existen configuraciones y productos de terceros que pueden mejorar la seguridad de tu operación. En este artículo, se describen algunos de esos recursos:

- [Antifraude](#antifraude)
- [Protección contra ataques en las transacciones](#proteccion-contra-ataques-en-las-transaciones)
- [reCAPTCHA en el checkout](#recaptcha-en-el-checkout)
- [Deshabilitar el inicio de sesión con contraseña](#deshabilitar-el-inicio-de-sesión-con-contrasena)

<div class = "alert alert-info">
Estas medidas no eliminan por completo la posibilidad de sufrir un ataque, pero sí pueden reducir bastante las probabilidades si se aplican adecuadamente.
</div>

## Antifraude

El antifraude es un sistema que se especializa en el análisis de las compras realizadas en los sitios web de ecommerce con el objetivo de identificar operaciones fraudulentas. Este sistema analiza datos sobre el comportamiento de los compradores de un ecommerce e impide que se concreten compras sospechosas.

Obtén más información sobre los [sistemas antifraude](https://help.vtex.com/es/tutorial/what-is-anti-fraud#) y su integración a la plataforma VTEX.

<div class="alert alert-warning">
Para más seguridad, configura la opción de antifraude en todos los métodos de pago disponibles en tu tienda.
</div>

## Protección contra ataques en las transaciones

Para acceder a la documentación, ingrese su [nombre de cuenta](https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) VTEX abajo, haga click en el botón y inicia sesión en el Admin.
<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Ingrese su nombre de cuenta y haga click en el botón." frameBorder="0" width="400" height="50"></iframe>

## reCAPTCHA en el checkout

reCAPTCHA es una solución que se utiliza para la validación de usuarios reales en pedidos que se pagarán con tarjetas de crédito o débito. Prevé situaciones en que se utilizan programas maliciosos para cometer fraude.

Aquí obtendrás más información sobre cómo configurar esta validación en el checkout de tu tienda [reCAPTCHA en el checkout](https://help.vtex.com/es/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#).

<div class = "alert alert-info">
La validación por reCAPTCHA también está activada de forma predeterminada en el flujo de <a href=tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh#cartoes>registro de tarjetas</a> de los clientes de la tienda; por lo tanto, no es necesario que la tienda la configure.
</div>

## Deshabilitar el inicio de sesión con contraseña

Si tu tienda sufre ataques a pesar de haberse aplicado los recursos que mencionamos anteriormente, te recomendamos deshabilitar el inicio de sesión con contraseña. Esta medida se puede aplicar de forma temporal o permanente, y tiene como objetivo poner fin al flujo de automatización del ataque.

Para activar esta configuración:
1. Ingresa a **Configuración de la cuenta** > **Autenticación**.
2. Desactiva el campo **Contraseña**.

Obtén más información sobre cómo [gestionar las formas de autenticación](https://help.vtex.com/es/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#).

