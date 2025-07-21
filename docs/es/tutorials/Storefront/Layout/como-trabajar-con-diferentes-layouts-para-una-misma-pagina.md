---
title: 'Cómo trabajar con diferentes layouts para una misma página'
id: tutorials_546
status: PUBLISHED
createdAt: 2017-04-27T22:01:32.948Z
updatedAt: 2023-03-29T17:59:18.274Z
publishedAt: 2023-03-29T17:59:18.274Z
firstPublishedAt: 2017-04-27T23:03:37.766Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-work-with-different-layouts-for-the-same-page
locale: es
legacySlug: como-trabajar-con-diferentes-layouts-para-una-misma-pagina
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-warning">
  <p><b>Atención:</b> existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.</p>
</div>

En la página __Storefront__ > __Layout__, se establece un layout estándar para todas las páginas del mismo tipo incluidas en cada carpeta de un website, ejemplo: _producto_.

Pero, existe la posibilidad de aplicar diferentes layouts para una misma página a través de algunas condiciones (grupo de productos, categorías, marcas). Serían dos productos con layouts distintos o una categoría específica con layout especial, por ejemplo.

Para eso, basta insertar un nuevo template, ya sea de [página](/es/faq/como-crear-un-template-de-pagina/child) o de [estante](/es/faq/como-crear-un-template-de-estante). Después de crearlo, siga los pasos abajo para seleccionar la carpeta que desea agregar el nuevo layout:

1. En __Storefront__, acceda __Layout__;
2. Haga clic en la carpeta __CMS__;
3. Haga clic en __Sites and channels__;
4. Acceda el website deseado;
5. Haga clic en la carpeta __/__ y seleccione la página deseada para el nuevo layout;
6. Haga clic en __New Layout__.

Después de llenar los campos __Layout Name__ y __Body Class__, seleccione el template deseado en el campo de __Template__ y desactive la opción __Default Page__.

Después de eso, una nueva sección estará disponible y podrá definir a través de los nuevos campos las __condiciones__ bajo las cuales se mostrará el nuevo layout en su tienda.

Es posible limitar la disponibilidad del template a un período de tiempo predeterminado rellenando los campos __From__ y __To__, así como definir en qué categorías, productos, marcas y colecciones se aplicará el template elegido.

![template-condicionado-cms](https://images.ctfassets.net/alneenqid6w5/5oheUsdoc0aKS4ysOwQ6ig/66a11beac0c32d7fde34d43b94fb45bb/template-condicionado-cms.png)

Después de llenar todos los campos, asegúrese de guardar los cambios realizados haciendo clic en __Save Layout__.

Tenga en cuenta que estos criterios se basan en [el contexto de búsqueda](/es/tutorial/--q0p2UU6sBaYcEMsq24YSi) de la página en el que se encuentra el usuario, que está directamente vinculado a los [parámetros de búsqueda](/es/tutorial/--tutorials_567), pero que no son necesariamente establecidos manualmente por el administrador de la tienda; toda la página encaja automáticamente en un contexto de contenido.

Sucede que las condiciones ofrecidas no están presentes en ninguna página:

- las páginas de productos nunca tendrán el contexto de colección;
- Las páginas de búsqueda (en las que también caben el departamento, la categoría, la marca, las colecciones y las páginas de destino) nunca tendrán el contexto del producto.

Por lo tanto, no es posible asignar condiciones a un producto específico o a diferentes diseños a través de una colección. Deberá registrarlos junto con la condición del producto.

<div class="alert alert-info">
Según las condiciones elegidas, se establece un orden de prioridad para la aplicabilidad del layout. La ordenación es, si existe, template del producto, de la categoría y, finalmente, de la marca. Por lo tanto, un template acondicionado para un producto se superpone al template de la categoría en que está contenido este producto y así sucesivamente.
</div>

Si tiene dudas en esta configuración, le recomendamos que use la lid: [Prueba de Layout](/es/faq/validar-un-layout-antes-de-ir-a-produccion)

