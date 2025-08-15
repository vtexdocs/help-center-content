---
title: 'Configurar la comparación de productos'
id: tutorials_236
status: PUBLISHED
createdAt: 2017-04-27T22:13:10.537Z
updatedAt: 2025-02-27T18:53:28.317Z
publishedAt: 2025-02-27T18:53:28.317Z
firstPublishedAt: 2017-04-27T23:03:10.483Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-product-comparison
legacySlug: configurando-a-comparacao-de-produtos
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

> ⚠️ Este tutorial solo es válido para tiendas CMS Portal Legado.

La comparación de productos es una función nativa de VTEX que permite mostrar en paralelo los detalles y especificaciones de productos previamente seleccionados, lo que permite al usuario comparar los productos de la tienda de forma sencilla y visualizar fácilmente las diferencias entre sus especificaciones.

La configuración debe realizarse en dos pasos:

- [**Página de comparación**](#pagina-de-comparacion): lugar en que el usuario visualiza la comparación de los productos seleccionados en la vitrina.
- [**Vitrina**](#vitrina): lugar en que el usuario selecciona los productos para comparar.

> ⚠️ La comparación de productos no funciona en la página de inicio de la tienda.

## Instrucciones

Sigue los pasos a continuación para configurar la comparación de productos en tu tienda.

### Página de comparación

1. [Crea una plantilla de estantería de productos](http://help.vtex.com/es/faq/como-criar-um-template-de-prateleira) para estandarizar la visualización de productos en la página de comparación. En la plantilla, puedes utilizar cualquiera de los [controles disponibles para estanterías de productos](https://developers.vtex.com/docs/guides/shelf-template-controls).
2. [Crea una plantilla de página](http://help.vtex.com/es/faq/como-criar-um-template-de-pagina) utilizando el control `<vtex.cmc:ProductComparison/>`, que se utiliza para mostrar los productos en paralelo en la página de comparación. Ejemplo de uso del control:  

```
<vtex.cmc:ProductComparison ShelfLayoutId="12343216-4c8e-4cd5-bcd7-e3b062681f2a"/>
```

Donde `ShelfLayoutId` es el`Id` de la plantilla de estantería de productos creada en el paso anterior.

3. Crea una carpeta para la página de comparación:
  - En el Admin VTEX, accede a **Storefront > Layout**
  - En la columna de la izquierda, haz clic en `CMS > Sites and channels > {nombre del sitio web} > / > new folder`. Sustituye `{nombre del sitio web}` con el nombre que se aplique a tu caso.
  - En el campo `Folder Name`, asigna un nombre a la carpeta y haz clic en `OK`.
  - Haz clic en `Save Folder`.

       ![new-folder-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/configurando-a-comparacao-de-produtos_1.gif)

4. Crea un layout predeterminado:
  - Abre la carpeta creada en el paso anterior.
  - Haz clic en **new layout**.
  - En el campo `Template`, vincula la plantilla de página creada en el paso 2 a la carpeta. Más información en [Asociar un template con un layout](https://help.vtex.com/pt/tutorial/associando-um-template-a-um-layout--7CkgOHRj7DVbsRxyR8YQrK).
  - Haz clic en `Save Layout` y después en `OK`.

       ![new-layout-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/productos-y-skus/configurando-a-comparacao-de-produtos_2.gif)

### Vitrina

Para que los productos se muestren con la opción de comparación (casilla), asigna el control `$product.Compare`a las plantillas de estantería de productos que deseas incluir en este recurso. Este control mostrará una casilla para que el usuario pueda escoger los productos que desea comparar. Además, el control mostrará el link **Comparar** en el header y footer de la lista de productos. El usuario utilizará este link después de la selección y se le redirigirá a la página de comparación.

> ⚠️ Solo se pueden comparar 4 productos a la vez.
