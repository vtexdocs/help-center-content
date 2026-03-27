---
title: 'Cómo bloquear personalizaciones para investigar problemas en el front-end de la tienda'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2026-03-27T19:53:01.038Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-front-end-issues
locale: es
legacySlug: como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado).

En este artículo aprenderás a identificar el orbloquear-personalizaciones-para-identificar-problemas-en-el-frontendigen de un problema en el frontend. El primer paso es bloquear las personalizaciones de frontend. Con base en la respuesta del sitio web, será posible entender si el problema está en la información que VTEX provee de forma nativa o en la personalización de tu página.

Para hacer esto, te mostraremos cómo remover las personalizaciones utilizando una herramienta nativa de Chrome, **DevTools**.

## Configurar DevTools

Para configurar [Chrome DevTools](https://developer.chrome.com/docs/devtools/) sigue los pasos a continuación.

1. Abre [Google Chrome](https://www.google.com/intl/es-419/chrome/) en tu computadora.
2. Haz clic en el botón `F12` de tu teclado o haz clic derecho con el mouse en cualquier parte de la pantalla y selecciona **Inspeccionar**.
3. Haz clic en los tres puntos verticales en la parte superior derecha de la página, como se indica en la imagen siguiente:
4. Selecciona **Más herramientas** y luego **Condiciones de la solicitud** para bloquear todas las personalizaciones hechas mediante CSS, JavaScript y Google Tag Manager.

![Personalizaciones1 - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/shopping/legado-02-es.png)

5. En la pestaña **Condiciones de la solicitud**, haz clic en `Agregar regla` para configurar el primer recurso a bloquear. Para agregar más recursos, haz clic en `+` y una vez definido haz clic en `Agregar`. Esta configuración solo es necesario realizarla una vez en tu navegador. Incluye los siguientes ítems:

- `*:/arquivos/*.js`
- `*:/files/*js`
- `*:/arquivos/*.css`
- `*:/files/*.css`
- `*://www.googletagmanager.com/gtm.js*`

![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/shopping/request-conditions-02-es.png)

6. Marca la opción **Habilitar el bloqueo y l limitación** y todas las casillas junto a cada recurso configurado. Esta será la configuración predeterminada, con todas las opciones activadas para el bloqueo.
7. Ahora, actualiza la página. Se mostrará sin los componentes personalizados.

Comprueba si el comportamiento no deseado que observaste inicialmente solo se produce con la personalización activa. Si es así, ponte en contacto con el equipo responsable de tu frontend para que verifique lo que está ocurriendo.

Si, aun con las personalizaciones bloqueadas, el comportamiento no deseado persiste, abre un ticket para el [Soporte de VTEX](https://supporticket.vtex.com/support).
