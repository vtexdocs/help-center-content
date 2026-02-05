---
title: 'Como activar el Checkout v6'
id: 7qVqv3ptRvpVVplrvg8ruH
status: PUBLISHED
createdAt: 2019-05-22T14:54:15.180Z
updatedAt: 2023-03-24T12:51:38.105Z
publishedAt: 2023-03-24T12:51:38.105Z
firstPublishedAt: 2019-05-22T18:19:40.922Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: enable-checkout-v6
legacySlug: ativar-o-checkout-v6
locale: es
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Para conocer las ventajas del Checkout v6, acceda a nuestro artículo sobre el [lanzamiento del nuevo SmartCheckout™](/es/announcements/2019-05-21-encante-a-su-cliente-con-la-nueva-experiencia-de-compra-del-smartcheckout)

Para actualizar el checkout de su tienda a la última versión (Checkout v6), debe habilitarlo en los ambientes de Prueba y Producción.

## Activar el Checkout v6 en Ambiente de Pruebas

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En __Actualización de SmartCheckout (V6)__, habilite la opción __Ambiente de pruebas (em beta)__, haciendo clic en el botón <i class="fas fa-toggle-on"></i>.
5. Haga clic en __Guardar__. 
6. [Acceda a su tienda en ambiente beta](/es/docs/tutorials/acceder-al-ambiente-beta) y haga los ajustes de estilo necesarios. El Checkout v6 posee nuevas clases _CSS_ que debem ser llevadas en consideración para personalización del estilo.

![Checkoutv6_box](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/activar-el-checkout-v6_1.png)

## Activar el Checkout v6 en Ambiente de Producción

Después de realizar los ajustes necesarios en el ambiente de prueba, puede iniciar Checkout v6 en ambiente de producción. Para hacer esto, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En __Actualización de SmartCheckout (V6)__, habilite la opción __Ambiente de producción (stable)__, haciendo clic en el botón <i class="fas fa-toggle-on"></i> y en las dos casillas de verificación de la lista de verificación.
5. Haga clic en __Guardar__. 

Después de este paso, el Checkout v6 estará instalado en su tienda.

![checkoutv6_box_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/activar-el-checkout-v6_2.png)

## ¿Cómo verificar si el Checkout v6 fue instalado correctamente?

1. Acceda a la URL `{{accountName}}.myvtex.com/checkout`
2. Presione `Ctrl + U` si está utilizando Windows o `Opt + Cmd + U` si está  utilizando Mac. Usted va a acceder al código fuente de la página.
3. Presione `Ctrl + F` si está utilizando Windows o `Cmd + F` si está  utilizando Mac para abrir la caja de búsqueda del navegador.
4. Busque el término  `checkout-ui/v6`. Si encuentra el archivo  `//io.vtex.com.br/checkout-ui/v6.x.x/style/style.css` en el código fuente de la página, la migración para el Checkout v6 se realizó con éxito.
