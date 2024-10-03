---
title: 'Prácticas recomendadas para evitar ataques virtuales'
id: 191rpbF7UgrKapVCi1PCDE
status: PUBLISHED
createdAt: 2022-04-06T19:04:13.387Z
updatedAt: 2024-06-18T20:41:01.987Z
publishedAt: 2024-06-18T20:41:01.987Z
firstPublishedAt: 2022-04-06T19:23:22.326Z
contentType: tutorial
productTeam: Reliability
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-against-virtual-attacks
locale: es
legacySlug: practicas-recomendadas-para-evitar-ataques-virtuales
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

VTEX cuenta con varias protecciones contra posibles ataques a las tiendas. Sin embargo, existen configuraciones y productos de terceros que pueden mejorar la seguridad de tu operación. En este artículo, se describen algunos de esos recursos:

- [Antifraude](#antifraude)
- [Protección contra ataques a las transacciones](#proteccion-contra-ataques-a-las-transaciones)
- [reCAPTCHA v3 en el checkout](#recaptcha-v3-en-el-checkout)
- [Desactivar el inicio de sesión con contraseña](#desactivar-el-inicio-de-sesión-con-contrasena)

>ℹ️ Las medidas mencionadas en esta guía no eliminan por completo la posibilidad de ataques, pero sí pueden disminuir las probabilidades de que ocurran si se aplican adecuadamente.

## Antifraude

Los sistemas de antifraude se especializan en analizar compras de tiendas online para identificar transacciones fraudulentas. También analizan los datos de comportamiento de los compradores con el fin de evitar compras sospechosas.

Aprende más sobre [sistemas antifraude](https://help.vtex.com/es/tutorial/what-is-anti-fraud) y cómo utilizarlos en VTEX.

>⚠️ Para mayor seguridad, configura tu antifraude en todos los medios de pago disponibles en la tienda.

## Protección contra ataques a las transaciones

Para acceder a la documentación, ingrese su [nombre de cuenta](https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC#) VTEX a continuación, haz clic en el botón e inicia sesión en el Admin.

<iframe src="https://help.vtex.com/insertaccountname?id=62oQBmi7UZlYlgb0Ha1hZ3" title="Ingrese su nombre de cuenta y haga click en el botón." frameBorder="0" width="400" height="50"></iframe>

## reCAPTCHA v3 en el checkout

reCAPTCHA es una solución utilizada para la validación de usuarios reales en pedidos que se pagarán con tarjetas de crédito o débito y evita situaciones en que se utilizan programas maliciosos para cometer fraude.

Recomendamos utilizar [reCAPTCHA v3](https://help.vtex.com/es/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP#recaptcha-v3), ya que emplea una puntuación de calidad en vez de una validación por medio de una ventana emergente, lo que hace que sea más difícil de evadir en estos casos.

Aprende a configurar esta validación en el checkout de tu tienda en [reCAPTCHA en el checkout](https://help.vtex.com/es/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP). Para implementar reCAPTCHA v3 en una tienda VTEX, consulta la guía de desarrolladores [reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha#recaptcha-v3-score).

>ℹ️ La validación por reCAPTCHA también está activada de forma predeterminada en el flujo de <a href=tutorial/how-does-my-account-work--2BQ3GiqhqGJTXsWVuio3Xh#cartoes>registro de tarjetas</a> de los clientes de la tienda; por lo tanto, no es necesario que la tienda la configure.

## Configuración de orderForm

Para acceder a la documentación, ingrese su [nombre de cuenta](https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC) VTEX a continuación, haz clic en el botón e inicia sesión en el Admin.

<iframe src="https://help.vtex.com/insertaccountname?id=7EAqNk48KP2QHnCxu856jT" title="Ingrese su nombre de cuenta y haga click en el botón." frameBorder="0" width="400" height="50"></iframe>

## Desactivar el inicio de sesión con contraseña

Si tu tienda sufre ataques incluso con la aplicación de los recursos mencionados anteriormente, recomendamos desactivar el inicio de sesión con contraseña. Esta medida puede aplicarse temporal o permanentemente con el fin de interrumpir el flujo de automatización del ataque.

Para realizar esta configuración:

1. Accede a **Configuración de la cuenta** > **Autenticación**.
2. En la pestaña __Tienda virtual__, desactiva el campo **Contraseña**.

Aprende más sobre cómo [gestionar los métodos de autenticación](https://help.vtex.com/es/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs) de tu tienda.
