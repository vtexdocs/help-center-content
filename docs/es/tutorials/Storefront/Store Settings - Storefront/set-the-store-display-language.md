---
title: 'Definir los textos de visualización de la tienda'
id: 1lTwIvUzgIcs28QGCGK0Ag
status: PUBLISHED
createdAt: 2018-01-25T18:21:47.414Z
updatedAt: 2023-03-24T21:37:33.261Z
publishedAt: 2023-03-24T21:37:33.261Z
firstPublishedAt: 2018-01-25T19:53:01.303Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: definir-el-idioma-de-visualizacion-de-la-tienda
locale: es
legacySlug: definir-el-idioma-de-visualizacion-de-la-tienda
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Si usted desea cambiar los textos de visualización de su tienda, vea en este artículo las cuestiones a considerar.

### Textos de la tienda (XML Text)

La mayoría de los textos que aparecen en la tienda se renderizan a partir de las variables que se encuentran en la sección __Textos de la tienda__, dentro del Catálogo.

Usted puede consultar estas variables en el menu Admin VTEX, accediendo a **Configuraciónn de la tienda > Storefront > Configuración** y haz clic en __TEXTOS DE LA TIENDA__.

### Checkout

El idioma del checkout está definido por la política comercial.

Por lo tanto, para traducirlo usted necesita cambiar el valor del campo __Culture Info__ en el registro de la política comercial.

Si desea que para cualquier escenario el idioma sea inglés, por ejemplo, cambie el Culture Info de todas las políticas comerciales de la tienda a `en-us`.

Para ello, siga los pasos abajo:

1. En **Configuración de la Tienda**, access **Canales** y haga clic en __Políticas Comerciales__.
2. Seleccione la política comercial deseada y haga clic en __Modificar__.
3. Cambie el campo __Región__ al idioma deseado.
4. Clic en `Guardar`.

### Front-end

Algunos textos de la tienda no se renderizan por variables internas ni se definen por política comercial. Para estos casos, es necesario tratar los textos en el front-end con JavaScript o, preferentemente (por ser un método más simple), manipulando el CSS.
