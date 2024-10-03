---
title: 'La API de Checkout ahora es compatible con reCAPTCHA v3'
id: 1buRTScMhlis0LESr7g8Rt
status: PUBLISHED
createdAt: 2023-06-28T19:52:18.268Z
updatedAt: 2023-08-25T23:36:39.909Z
publishedAt: 2023-08-25T23:36:39.909Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-06-28-checkout-api-now-supports-recaptcha-v3
locale: es
legacySlug: la-api-de-checkout-ahora-es-compatible-con-recaptcha-v3
announcementImageID: ''
announcementSynopsisES: 'Esta solución para evitar usuarios falsos puede utilizarse en aplicaciones móviles y otras integraciones similares.'
---

[reCAPTCHA](https://help.vtex.com/es/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP) es una solución utilizada para la validación de usuarios reales que VTEX dispone para todas las tiendas. Prevé situaciones en que se utilizan programas maliciosos para cometer fraude, impidiendo así el acceso de falsos usuarios.

Además de la funcionalidad disponible para los storefronts nativos de la plataforma VTEX, las tiendas que implementan storefronts propios también pueden [integrar reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) a través de la API de Checkout con el fin de aumentar la seguridad de su tienda.

## ¿Qué cambió?

La API de Checkout ahora también admite validación reCAPTCHA basada en puntuación (equivalente a v3), adecuado para aplicaciones móviles nativas.

>ℹ️ VTEX está integrado con reCAPTCHA enterprise, que ofrece dos enfoques de validación: checkbox (equivalente a reCAPTCHA v2) y basada en puntuación (equivalente a reCAPTCHA v3). Consulta este artículo sobre [reCAPTCHA en el Checkout de VTEX](https://help.vtex.com/es/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#versiones-de-recaptcha) para aprender qué versión debes usar según las características de tu tienda. También puedes obtener más información sobre cada método: [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) o [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) con la documentación proporcionada por Google.

Sin embargo, la opción de integración con validación de reCAPTCHA checkbox (equivalente a v2) sigue disponible y es la opción recomendada si deseas implementar una [integración de reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha) que no sea en una aplicación móvil nativa.

Actualmente, validación basada en puntuación no está disponible para los storefronts nativos de VTEX - se espera que lo esté en los próximos meses. Esta solución sólo está disponible para las integraciones basadas en la API de Checkout.

## ¿Qué se necesita hacer?

Si utilizas una solución de storefront nativo de VTEX o la integración con reCAPTCHA checkbox a través de la API de Checkout, no es necesario realizar ninguna acción. reCAPTCHA seguirá funcionando de acuerdo con tu configuración.

Si deseas implementar reCAPTCHA en un storefront de aplicación móvil nativa, debes utilizar validación basada en puntuación. Ponte en contacto con tu equipo de desarrolladores y consulta la [guía de integración de reCAPTCHA](https://developers.vtex.com/docs/guides/recaptcha).

