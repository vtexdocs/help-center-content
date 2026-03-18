---
title: 'Bloquear personalizaciones para identificar problemas en el frontend de la tienda'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2023-04-12T14:38:14.185Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-front-end-issues
locale: es
legacySlug: bloquear-personalizaciones-para-identificar-problemas-en-el-frontend-de-la-tienda
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal (Legado).

En este artículo aprenderás a identificar el origen de un problema en el frontend. El primer paso es bloquear las personalizaciones de frontend. Con base en la respuesta del sitio web, será posible entender si el problema está en la información que VTEX provee de forma nativa o en la personalización de tu página.

Para hacer esto, te mostraremos cómo remover las personalizaciones utilizando una herramienta nativa de Chrome, **DevTools**.

## Configurar DevTools

Para configurar [Chrome DevTools](https://developer.chrome.com/docs/devtools/) sigue los pasos a continuación.

1. Abre [Google Chrome](https://www.google.com/intl/es-419/chrome/) en tu computadora.
2. Haz clic en el botón `F12` de tu teclado o haz clic derecho con el mouse en cualquier parte de la pantalla y selecciona **Inspeccionar**.
3. Haz clic en los tres puntos verticales en la parte superior derecha de la página, como se indica en la imagen siguiente:
4. Selecciona **Más herramientas** y luego **Request conditions** para bloquear todas las personalizaciones hechas mediante CSS, JavaScript y Google Tag Manager.

![Personalizaciones1 - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_1.png)

5. A continuación, se abrirá la pestaña **Request conditions**, tal y como se muestra en la siguiente imagen:

![Customizations2 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_2.png)

6. Haz clic en `+` para configurar el primer recurso a bloquear. Para agregar más recursos, vuelve a hacer clic en `+` y una vez definido haz clic en `Agregar`. Esta configuración solo es necesario realizarla una vez en tu navegador. Incluye los siguientes ítems:

- `*:/arquivos/*.js`
- `*:/files/*js`
- `*:/arquivos/*.css`
- `*:/files/*.css`
- `*://www.googletagmanager.com/gtm.js*`

![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png)

7. Marca la opción **Enable blocking and throttling** y todas las casillas junto a cada recurso configurado. Esta será la configuración predeterminada, con todas las opciones activadas para el bloqueo.
8. Ahora, actualiza la página. Se mostrará sin los componentes personalizados.

![Customizations4 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_4.png)

Comprueba si el comportamiento no deseado que observaste inicialmente solo se produce con la personalización activa. Si es así, ponte en contacto con el equipo responsable de tu frontend para que verifique lo que está ocurriendo.

Si, aun con las personalizaciones bloqueadas, el comportamiento no deseado persiste, abre un ticket para el [Soporte de VTEX](https://supporticket.vtex.com/support).
