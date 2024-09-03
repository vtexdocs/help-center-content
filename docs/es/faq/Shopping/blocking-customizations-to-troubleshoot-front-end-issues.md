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
slug: como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda
locale: es
legacySlug: como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja, como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda
---

>⚠️ Tutorial válido solo para tiendas CMS Portal Legado.

En este artículo, aprenderá a bloquear las personalizaciones de front-end para detectar si el problema es la información que VTEX entrega de forma nativa o si es la personalización de la página.

Hay varias aplicaciones y extensiones de Chrome que retiran las personalizaciones, sin embargo, vamos a demostrar cómo retirarlas utilizando una herramienta nativa de Chrome: **DevTools**.

## Cómo configurar DevTools

1. Para abrir DevTools, ingrese a Chrome y oprima **F12** o haga clic en el **botón derecho del mouse > Inspeccionar**.

![Customizations1](https://images.ctfassets.net/alneenqid6w5/3fMKFRgHKwCa8dlwcMbnDk/6e445678697a809650b9185adb0df631/Customizations1.png)

2. Vamos a buscar la función **Request Blocking** para bloquear todas las personalizaciones realizadas con CSS, JavaScript y Google Tag Manager. Haga clic en los tres puntos de la derecha, como se indica en la imagen, después en **More Tools** y, por último, en **Request Blocking**.

![Customizations2](https://images.ctfassets.net/alneenqid6w5/7wjDCIMx0j0VMLFBlJs4x3/e04f5f48d28ddfa160f977371972549d/Customizations2.png)

3. Se abrirá un recuadro como se muestra aquí:

![Customizations3](https://images.ctfassets.net/alneenqid6w5/1oi04fyBlkMVmio4LtMVcv/973bf322f246e2a24eb89ac9de9e449e/Customizations3.png)

4. Haga clic en la pestaña **Request Blocking**.

Ahora defina los recursos que se deben bloquear. Solo tiene que hacer la configuración una vez.

5. Haga clic en ícono de «+» e incluya, uno por uno, los elementos que aparecen a continuación:

- `*/arquivos/*.js`
- `*/files/*js`
- `*/arquivos/*.css`
- `*/files/*.css`
- `*gtm.js*`

El recuadro se verá así:

![Customizations4](https://images.ctfassets.net/alneenqid6w5/49opNOaTq3t2xJ2HpAnuo1/61f32fd8a4c49715c4c1bc95f0ee1e8d/Customizations4.png)

Recuerde: solo tiene que hacer la configuración __una__ vez.

## Cómo bloquear las personalizaciones con DevTools

1. Marque la casilla **Enable request blocking** y habilite las cinco casillas que se muestran en la imagen. 

2. Esta será la configuración que quedará definida como estándar, con las cinco opciones habilitadas para el bloqueo.

![Customizations5](https://images.ctfassets.net/alneenqid6w5/McVb5AEghRIe3tpl1dWGr/5e1881a4a781880dd31eea0938b1ab01/Customizations5.png)

3. Ahora, actualice la página oprimiendo **F5**. La página se mostrará sin los componentes de personalización.

![Customizations6](https://images.ctfassets.net/alneenqid6w5/5MOuqKoGsMU8QpvoR03n9Y/5ca0038583837708383438479a6ead23/Customizations6.png)

4. Para volver a visualizar las personalizaciones, solo tiene que desactivar la casilla **Enable request blocking** y actualizar la página otra vez.

Si el comportamiento indeseado que había observado originalmente no ocurre sin la personalización, comuníquese con el equipo responsable de su front-end para que ellos investiguen lo que está ocurriendo.

Si el comportamiento indeseado persiste aun con las personalizaciones bloqueadas, abra una solicitud de asistencia con el equipo de soporte de VTEX y envíe los detalles de lo que está pasando.

