---
title: 'Mejoras de seguridad en las cookies del Checkout'
id: 4MThm4Y5sxYLaW3PfrHdJd
status: PUBLISHED
createdAt: 2022-09-19T19:22:37.019Z
updatedAt: 2022-10-20T19:39:59.077Z
publishedAt: 2022-10-20T19:39:59.077Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2022-09-19-security-improvements-to-checkout-cookies
locale: es
legacySlug: mejoras-de-seguridad-en-las-cookies-del-checkout
announcementImageID: 'undefined'
announcementSynopsisES: 'La actualización de las cookies del Checkout permite aumentar la seguridad en tu tienda'
---

Para mejorar la seguridad de la información de tu tienda, VTEX ha introducido mejoras en las cookies del Checkout. A partir del 13 de Febrero de 2023, la seguridad de las cookies `checkout.vtex.com` y `CheckoutDataAccess` se ampliará mediante la implementación de los atributos _Secure_, _HttpOnly_ y _SameSite_.

Esta actualización de seguridad ya está incorporada en las cuentas VTEX creadas después del 19 de Agosto 2022 y, por esta razón, no requiere ninguna acción por parte de estos administradores de tiendas.

## ¿Qué cambió?

Los siguientes atributos se incluirán ahora en las cookies `checkout.vtex.com` y `CheckoutDataAccess`:

1. __Secure__: evita la captura de información por parte de terceros no autorizados al transmitir la cookie al servidor solo en solicitudes cifradas (HTTPS).
2. __HttpOnly__: bloquea la captura de información mediante Cross-site scripting (XSS) y otros JavaScripts insertados en la página de la tienda.
3. __SameSite__: garantiza que las cookies solo se envíen en un contexto de origen y no se envíen junto con solicitudes iniciadas por sitios web de terceros (como Iframe y solicitudes entre sitios).

## ¿Por qué realizamos este cambio?

Esta actualización mejora la seguridad de acceso a la información en tu tienda.

## ¿Qué se necesita hacer?

La actualización de las cookies se producirá automáticamente para todas las tiendas a partir del 13 de Febrero de 2023. Sin embargo, este cambio ya está disponible en versión Beta para que puedas probarlo y validarlo en tu tienda.

Debe ponerse en contacto con el equipo responsable del desarrollo de su sitio web para solicitar que realicen pruebas de Checkout en su tienda en el ambiente Beta. De esta forma, será posible simular el funcionamiento de la tienda con las mejoras de seguridad en cookies ya activadas.

Para acceder al ambiente Beta, siga los procedimientos a continuación según la versión de Admin (V3 o V4) utilizada en su tienda:

- **Admin V3**: [Acceder al ambiente beta por el dominio myvtex.com](/es/tutorial/acceder-al-ambiente-beta--3BHM289568gcSwk2O80Asu)

- **Admin V4**: habilitar temporalmente la cookie `vtex-commerce-env` de la siguiente manera:

     1. Dentro del Admin de su tienda, acceda a la pantalla **Dev. Tools** en su navegador (pulsando la tecla `F12` o haciendo clic con el botón derecho y eligiendo la opción **Inspect**).
     2. En la esquina superior derecha de la pantalla, acceda a la pestaña **Application** y, en **Cookies**, haga clic en la **URL** de su tienda.
     3. En la tabla, ingrese la siguiente información en los campos de la última fila: **Nome**: `vtex-commerce-env` y **Value**: `beta`.
     4. Actualice la página (pulsando la tecla `F5` o el botón de actualización de su navegador). Después de que se cargue la página, el Admin de la tienda ya estará en el ambiente Beta. Realice pruebas operativas en Checkout.
     5. Una vez completada la prueba, vuelva a acceder a la pantalla **Dev. Tools** de su navegador y elimine la información de cookies habilitada anteriormente (`vtex-commerce-env` y `beta`).
     6. Vuelva a actualizar la página para volver al ambiente de producción (stable).

Si encuentra algún error al realizar pruebas operativas en un ambiente Beta, verifique la configuración de la tienda para asegurarse de que:

1. Su sitio no incluye ningún código JavaScript que intente manipular (acceder o editar) las cookies `checkout.vtex.com` o `CheckoutDataAccess` directamente.
2. No hay personalizaciones de JavaScript que puedan afectar el funcionamiento de la Tarjeta y Checkout (acceso a cookies) en su tienda.

Después de verificar la configuración de la tienda, vuelva a ejecutar la prueba en ambiente Beta.

> ⚠️ A partir del 13 de Febrero de 2023, es posible que las tiendas que no estén configuradas correctamente no puedan operar Checkout correctamente.
