---
title: 'Cambiar la clase del body de una página'
id: 17BMTbjmQW28I6g6y80qAi
status: PUBLISHED
createdAt: 2018-03-02T13:32:41.619Z
updatedAt: 2023-03-29T14:48:54.728Z
publishedAt: 2023-03-29T14:48:54.728Z
firstPublishedAt: 2018-03-02T13:46:27.480Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: changing-a-pages-body-class
locale: es
legacySlug: cambiar-la-clase-del-body-de-una-pagina
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Los templates utilizados por los layouts de la tienda, de forma predeterminada, no cargan ninguna clase en su elemento `<body>`.

Vea, por ejemplo, el código del template Department.

![changeBodyClass1](https://images.contentful.com/alneenqid6w5/pbQCDMUz3qO0q4SuwYaq4/7ebd6ca8a0af6cbce899535b83cd719a/changeBodyClass1.jpg)

Tiene un `id`, pero no una `class`.

Sin embargo, al cargar un layout que use ese template, vemos que la clase `departamento` fue agregada al body de la página.

![changeBodyClass2](//images.contentful.com/alneenqid6w5/132c4r8rtGowUkOYe4YUaM/6b4a3bd0a9fc5f65fe1d950484088ba1/changeBodyClass2.jpg)

Es decir, el sistema inserta automáticamente esta clase.

Usted puede definir el valor de esta clase en el propio CMS. Para ello, siga estos pasos:

1. En el Admin VTEX, accede a **Storefront > Layout > CMS**.

2. Haga clic en __Sites and Channels__ y entre en el __layout__ cuya clase quiere cambiar.

3. Cambie el valor del campo __Body Class__.

4. Haga clic en el botón __Save Layout__.
