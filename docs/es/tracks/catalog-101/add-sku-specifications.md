---
title: 'Registrar especificaciones de SKU'
id: 6UjLHdAT5YLuflki10SXLr
status: ARCHIVED
createdAt: 2019-06-18T17:27:49.997Z
updatedAt: 2022-07-06T17:44:14.393Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:43.640Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: registrar-especificaciones-de-sku
locale: es
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugES: catalogo-101
---

Hay tres maneras de registrar sus especificaciones de SKU: a través del admin, por plantilla o por ERP.

>⚠️ En VTEX, las especificaciones siguen una lógica de "herencia", es decir, cuando se crea una especificación en un nivel de categoría superior, la especificación se presentará en todos los niveles de categoría inferiores. Por lo tanto, si es necesario crear una especificación de producto o SKU que se aplique a una sola categoría, debe crearse en ese nivel de categoría.

Siga el siguiente procedimiento para registrar las especificaciones:

## Admin

Para registrar las especificaciones, su tienda necesita tener departamentos, categorías y subcategorías ya creados. Luego, siga los siguientes pasos:

 1. Haga clic en **Catálogo**
 2. Haga clic en **Categorías**
 3. Haga clic en la categoría a la que desea añadir especificaciones
 4. Aparecerá un pequeño rectángulo azul en la pantalla. Haga clic en **Acciones**
 5. Haga clic en **Campo SKU**
 6. Haga clic en **Nuevo campo**
 7. Rellene los campos del formulario de especificaciones. En el caso de los SKUs, el flag de campo obligatorio siempre está seleccionado por default. Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre [cómo rellenar los campos de especificaciones de SKU](https://help.vtex.com/es/tutorial/criando-campo-de-sku--tutorials_119)
 8.  Haga clic en **Guardar**

![ES1](https://images.ctfassets.net/alneenqid6w5/4cSrsR60RiWrSSllCFgbsQ/2d8e6ffab449e23f59c3521e67764568/ES1.gif)

Para añadir valores a la especificación de SKU, siga los siguientes pasos:

 1. Haga clic en **Catálogo**
 2. Haga clic en **Categorías**
 3. Haga clic en la categoría a la que desea añadir los valores de especificaciones
 4. Aparecerá un pequeño rectángulo azul en la pantalla. Haga clic en **Acciones**
 5. Haga clic en **Campo SKU**
 7. En la especificación deseada, pase el mouse en la **flecha hacia abajo**, al lado del botón **Alterar**
 8. Haga clic en **Valores**
 9. Haga clic en **Nuevo valor**
 10. Escriba el **Nombre** del valor deseado y haga clic en **Guardar**

![ES2](https://images.ctfassets.net/alneenqid6w5/7v4nItIFqlZZP6SVOhVlcf/2e81e722d6f6c69a3e551ddc5c221bec/ES2.gif)

### Vincular las especificaciones a un SKU

Después de registrar las especificaciones, podrá vincular sus valores a un SKU.

Para incluir las especificaciones en un **SKU** siga los siguientes pasos:

 1. Haga clic en **Catálogo**
 2. Haga clic en **Productos y SKUs**
 3. En el producto con el SKU deseado, haga clic en la **flecha azul** al lado del botón **Alterar**, del lado derecho de la página
 4. Haga clic en **SKU**
 5. En el SKU deseado, haga clic en **Alterar**
 6. Haga clic en la pestaña **Especificaciones** y seleccione el valor de la especificación para ese SKU
 7. Haga clic en **Guardar**

![ES3](https://images.ctfassets.net/alneenqid6w5/2r7p71kBKd70qbLDu7EJBS/c10904a508a3a2e5baf02c2a22288c8a/ES3.gif)

## Plantilla

Para registrar sus especificaciones por plantilla es necesario primero exportar la plantilla estándar VTEX. Para esto, siga los siguientes pasos:

1. Haga clic en **Catálogo**
2. Haga clic en **Importación y Exportación**
3. Haga clic en la pestaña **Especificación de SKU**
4. Haga clic con el botón derecho encima de la categoría deseada
5. Haga clic en **Export**
6. Aparecerá un rectángulo verde en la pantalla
7. Haga clic en **Haga clic aquí para descargar el archivo** para exportar la plantilla

Al recibir la plantilla, rellene las líneas con los datos de la especificación del SKU.

Apenas altere la columna "ValorEspecificacion" de la plantilla. Las otras columnas deberán permanecer sin alteraciones pues sus valores se utilizarán para la validación de los datos.

Para entender mejor el significado de cada campo, acceda a nuestro artículo sobre [cómo rellenar los campos de la plantilla de importación de productos y SKUs](https://help.vtex.com/es/tutorial/rellenar-campos-de-la-plantilla-de-importacion--4nYhx63Q5yokQWaMguaIgI)

Después de rellenar los datos de la plantilla, siga el procedimiento para importar sus especificaciones:

1. Haga clic en **Catálogo**
2. Haga clic en **Importación y Exportación**
3. Haga clic en la pestaña **Especificación de SKU**
4. Desplácese hacia abajo hasta **Upload de Archivo para Importación**
5. Haga clic en **Select** para seleccionar la plantilla rellenada
6. Haga clic en **Importar**

![ES4](https://images.ctfassets.net/alneenqid6w5/7gytIVRaKu9gmvZXlIyfe2/073d2f187de623baf5bb44a89615e5e1/ES4.gif)

## API

Siga la guía [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) para crear una especificación de SKU por API.
