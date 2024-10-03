---
title: 'Configurar la comparación de productos'
id: tutorials_236
status: PUBLISHED
createdAt: 2017-04-27T22:13:10.537Z
updatedAt: 2021-04-13T18:46:45.472Z
publishedAt: 2021-04-13T18:46:45.472Z
firstPublishedAt: 2017-04-27T23:03:10.483Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-product-comparison
locale: es
legacySlug: configurando-a-comparacao-de-produtos
subcategoryId: pwxWmUu7T222QyuGogs68
---

La comparación de productos es un recurso nativo de la plataforma VTEX y consiste en exhibir, lado a lado, detalles y especificaciones de los productos previamente seleccionados. 

O sea, si el recurso está correctamente configurado, el usuario podrá comparar los productos de la tienda y visualizar las diferencias de sus especificaciones de un modo más sencillo.

Podemos dividir ese recurso en dos partes:

1. **Página de Comparación**: En la que el usuario visualizará la comparación de los productos seleccionados en la vitrina.
2. **Vitrina**: Donde el usuario seleccionará los productos que desea comparar.

>⚠️ Esta funcionalidad no puede utilizarse en la página de inicio del sitio.

## **Configuración**

Primero, debemos configurar la **Página de Comparación**.

1. **[Cree un template de estante](http://help.vtex.com/es/faq/como-crear-un-template-de-estante):** En **CMS** > **Layout** (/admin/a/), cree un template de estante. Ese template de estante representará cada producto en la página de comparación. Puede usar en este template, todos los controles disponibles para estantes.
2. **[Cree un template de página](http://help.vtex.com/es/faq/como-crear-un-template-de-pagina):** En **CMS** > **Layout** cree un template de página y use el control ProductComparison relacionado al template de estante creado en el ítem anterior. Ese control es el gran responsable de la exhibición de la página de comparación. Éste colocará cada producto, lada a lado, para poder visualizar mejor sus especificaciones. Ejemplo de aplicación del control: `<vtex.cmc:ProductComparison ShelfLayoutId="12343216-4c8e-4cd5-bcd7-e3b062681f2a"/>`
3. **Cree una carpeta denominada “Compare”:** En **CMS** > **Layout** > Carpeta **CMS** > **Sites and channels** > **{Nombre del website deseado}** > **Carpeta /** > **New folder** cree una carpeta con el nombre “Compare”. El link generado por el control de la vitrina se refiere a esa carpeta, por eso su existencia es esencial, así como también todos los ítems de este post.
4. **Cree un layout estándar:** Dentro de la carpeta “Compare”, creada en el ítem anterior, cree un layout estándar haciendo clic en **New Layout** y relaciónelo al template de página creado en el ítem 2 en el campo **Template**.

Con la Página de Comparación configurada, debemos configurar la **Vitrina** para que los productos se exhiban con la opción de comparación (checkbox). Esa configuración es muy sencilla, sólo tiene un passo:

1. **Configure cada Template de Estante que desee:** En los templates de estante que desee, incluya el control `$product.Compare`. Ese control renderizará un checkbox para que el usuario pueda elegir los productos que desea comparar. Además, el control mostrará en el header y en el footer del listado de productos el link “Comparar”, que será usado por el usuario después de la selección y lo llevará a la carpeta “Compare”.

¡Listo! El recurso está habilitado para su sitio.

Información importante: Sólo se puede hacer la comparación de 4 productos a la vez.
