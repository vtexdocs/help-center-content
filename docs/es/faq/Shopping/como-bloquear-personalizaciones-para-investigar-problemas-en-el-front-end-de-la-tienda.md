---
title: 'Cómo bloquear personalizaciones para investigar problemas en el front-end de la tienda'
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
legacySlug: como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja, como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda
---

<div class="alert alert-warning">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

En este artículo, aprenderá a bloquear las personalizaciones de front-end para detectar si el problema es la información que VTEX entrega de forma nativa o si es la personalización de la página.

Hay varias aplicaciones y extensiones de Chrome que retiran las personalizaciones, sin embargo, vamos a demostrar cómo retirarlas utilizando una herramienta nativa de Chrome: **DevTools**.

## Cómo configurar DevTools

1. Para abrir DevTools, ingrese a Chrome y oprima **F12** o haga clic en el **botón derecho del mouse > Inspeccionar**.

![Customizations1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_1.png)

2. Vamos a buscar la función **Request Blocking** para bloquear todas las personalizaciones realizadas con CSS, JavaScript y Google Tag Manager. Haga clic en los tres puntos de la derecha, como se indica en la imagen, después en **More Tools** y, por último, en **Request Blocking**.

![Customizations2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_2.png)

3. Se abrirá un recuadro como se muestra aquí:

![Customizations3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_3.png)

4. Haga clic en la pestaña **Request Blocking**.

Ahora defina los recursos que se deben bloquear. Solo tiene que hacer la configuración una vez.

5. Haga clic en ícono de «+» e incluya, uno por uno, los elementos que aparecen a continuación:

- `*/arquivos/*.js`
- `*/files/*js`
- `*/arquivos/*.css`
- `*/files/*.css`
- `*gtm.js*`

El recuadro se verá así:

![Customizations4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_4.png)

Recuerde: solo tiene que hacer la configuración __una__ vez.

## Cómo bloquear las personalizaciones con DevTools

1. Marque la casilla **Enable request blocking** y habilite las cinco casillas que se muestran en la imagen. 

2. Esta será la configuración que quedará definida como estándar, con las cinco opciones habilitadas para el bloqueo.

![Customizations5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_5.png)

3. Ahora, actualice la página oprimiendo **F5**. La página se mostrará sin los componentes de personalización.

![Customizations6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/Shopping/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda_6.png)

4. Para volver a visualizar las personalizaciones, solo tiene que desactivar la casilla **Enable request blocking** y actualizar la página otra vez.

Si el comportamiento indeseado que había observado originalmente no ocurre sin la personalización, comuníquese con el equipo responsable de su front-end para que ellos investiguen lo que está ocurriendo.

Si el comportamiento indeseado persiste aun con las personalizaciones bloqueadas, abra una solicitud de asistencia con el equipo de soporte de VTEX y envíe los detalles de lo que está pasando.

