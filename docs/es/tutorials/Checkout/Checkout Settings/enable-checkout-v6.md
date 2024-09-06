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
slug: activar-el-checkout-v6
locale: es
legacySlug: ativar-o-checkout-v6
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Para conocer las ventajas del Checkout v6, acceda a nuestro artículo sobre el [lanzamiento del nuevo SmartCheckout™](/announcements/encante-a-su-cliente-con-la-nueva-experiencia-de-compra-del-smartcheckout--47B91RA1WNhUfTNg5iGU0J)

Para actualizar el checkout de su tienda a la última versión (Checkout v6), debe habilitarlo en los ambientes de Prueba y Producción.

## Activar el Checkout v6 en Ambiente de Pruebas

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En __Actualización de SmartCheckout (V6)__, habilite la opción __Ambiente de pruebas (em beta)__, haciendo clic en el botón <i class="fas fa-toggle-on"></i>.
5. Haga clic en __Guardar__. 
6. [Acceda a su tienda en ambiente beta](/tutorial/acceder-al-ambiente-beta--3BHM289568gcSwk2O80Asu) y haga los ajustes de estilo necesarios. El Checkout v6 posee nuevas clases _CSS_ que debem ser llevadas en consideración para personalización del estilo.

![Checkoutv6_box](https://images.ctfassets.net/alneenqid6w5/9hAJfi1LLwpFlcB5iWA3k/dbef571b8ec2baed5bbc8546effaed82/CheckoutV6_box_ES.png)

## Activar el Checkout v6 en Ambiente de Producción

Después de realizar los ajustes necesarios en el ambiente de prueba, puede iniciar Checkout v6 en ambiente de producción. Para hacer esto, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En __Actualización de SmartCheckout (V6)__, habilite la opción __Ambiente de producción (stable)__, haciendo clic en el botón <i class="fas fa-toggle-on"></i> y en las dos casillas de verificación de la lista de verificación.
5. Haga clic en __Guardar__. 

Después de este paso, el Checkout v6 estará instalado en su tienda.

![checkoutv6_box_2](https://images.ctfassets.net/alneenqid6w5/1gXZSHO1C5yRDF6GL6h5IK/a3606a1f0b82a825c4625e19c83086de/CheckoutV6_box2_ES.png)

## ¿Cómo verificar si el Checkout v6 fue instalado correctamente?

1. Acceda a la URL `{{accountName}}.myvtex.com/checkout`
2. Presione `Ctrl + U` si está utilizando Windows o `Opt + Cmd + U` si está  utilizando Mac. Usted va a acceder al código fuente de la página.
3. Presione `Ctrl + F` si está utilizando Windows o `Cmd + F` si está  utilizando Mac para abrir la caja de búsqueda del navegador.
4. Busque el término  `checkout-ui/v6`. Si encuentra el archivo  `//io.vtex.com.br/checkout-ui/v6.x.x/style/style.css` en el código fuente de la página, la migración para el Checkout v6 se realizó con éxito.
