---
title: 'Registrar especificaciones de producto'
id: 4fcdmJzQ6QYA9zWf3bLWin
status: ARCHIVED
createdAt: 2019-06-18T16:56:58.820Z
updatedAt: 2022-07-06T14:25:25.296Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:35.046Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-product-specifications
locale: es
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugES: catalogo-101
---

Hay tres maneras de registrar sus especificaciones: a través del admin, por plantilla o por API.

>⚠️ En VTEX, las especificaciones siguen una lógica de "herencia", es decir, cuando se crea una especificación en un nivel de categoría superior, la especificación se presentará en todos los niveles de categoría inferiores. Por lo tanto, si es necesario crear una especificación de producto o SKU que se aplique a una sola categoría, debe crearse en ese nivel de categoría.

Siga este procedimiento para registrar las especificaciones:

## Admin

Para registrar las especificaciones, su tienda necesita tener departamentos, categorías y subcategorías ya creados. Luego, siga los pasos a continuación:

 1. Haga clic en **Catálogo**.
 2. Haga clic en **Categorías**.
 3. Haga clic en la categoría a la que desea añadir especificaciones.
 4. Aparecerá un pequeño rectángulo azul en la pantalla. Haga clic en **Acciones**.
 5. Haga clic en **Campo (producto)**.
 6. Haga clic en **Nuevo campo**.
 7. Rellene los campos del formulario de especificaciones. Para comprender mejor el significado de cada campo, acceda a nuestro  artículo sobre [cómo rellenar los campos de especificaciones de producto](https://help.vtex.com/es/tutorial/creando-un-campo-de-producto--tutorials_106)
 8.  Haga clic en **Guardar**.

![ES1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/catalog-101/registrar-especificaciones-de-producto_1.gif)

Para añadir valores a la especificación de un producto, siga los pasos a continuación:

 1. Haga clic en **Catálogo**.
 2. Haga clic en **Categorías**.
 3. Haga clic en la categoría a la que desea añadir los valores de las especificaciones.
 4. Aparecerá un pequeño rectángulo azul en la pantalla. Haga clic en **Acciones**.
 5. Haga clic en **Campo (producto)**.
 7. En la especificación deseada, pase el mouse por la **flecha hacia abajo**, al lado del botón **Editar**.
 8. Haga clic en **Valores**.
 9. Haga clic en **Nuevo valor**.
10. Escriba el **Nombre** del valor deseado y haga clic en **Guardar**.

![ES2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/catalog-101/registrar-especificaciones-de-producto_2.gif)

### Vincular las especificaciones a un producto

Después de registrar las especificaciones, puede vincular sus valores a un producto.

Para incluir las especificaciones en un **Producto** siga los siguientes pasos:

 1. Haga clic en **Catálogo**.
 2. Haga clic en **Productos y SKUs**.
 3. En el producto deseado, haga clic en **Cambiar**.
 4. Haga clic en la pestaña **Especificaciones** y elija el valor de la especificación para este producto.
 5. Haga clic en la pestaña **Producto** y después haga clic en **Guardar**.

![ES3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/catalog-101/registrar-especificaciones-de-producto_3.gif)

## Plantilla

Para registrar sus especificaciones por plantilla es necesario primero exportar la plantilla estándar de VTEX. Para descargarla, siga los pasos a continuación:

1. Haga clic en **Catálogo**.
2. Haga clic en **Importación y exportación**.
3. Haga clic en la pestaña **Especificaciones de producto**.
4. Haga clic con el botón derecho encima de la categoría deseada.
5. Haga clic en **Export**.
6. Aparecerá un rectángulo verde en la pantalla.
7. Para exportar la plantilla, basta con pulsar en **Haga clic aquí para descargar el archivo**.

Al recibir la plantilla, rellene las líneas con los datos de la especificación del producto.

Solo modifique la columna «Valor(es) de Especificación de Producto» de la plantilla. Las otras columnas deberán permanecer sin alteraciones pues sus valores se utilizarán para la validación de los datos.

Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre [cómo rellenar los campos de la plantilla de importación de productos y SKUs](https://help.vtex.com/es/tutorial/rellenar-campos-de-la-plantilla-de-importacion--4nYhx63Q5yokQWaMguaIgI)

Después de rellenar los datos de la plantilla, siga este procedimiento para importar sus especificaciones:

1. Haga clic en **Catálogo**.
2. Haga clic en **Importación y exportación**.
3. Haga clic en la pestaña **Especificaciones de producto**.
4. Desplácese hacia abajo hasta **Subir archivo para importación**.
5. Haga clic en **Select** para seleccionar la plantilla de importación.
6. Haga clic en **Importar**.

![ES4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/catalog-101/registrar-especificaciones-de-producto_4.gif)

## API

Siga la guía [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) para crear una especificación de producto por API.
