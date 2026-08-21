---
title: 'Mapeo de categorías, marcas y especificaciones para marketplace'
id: tutorials_1521
status: PUBLISHED
createdAt: 2017-04-27T21:56:09.345Z
updatedAt: 2022-10-31T15:54:10.443Z
publishedAt: 2022-10-31T15:54:10.443Z
firstPublishedAt: 2017-04-27T23:03:50.588Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: mapping-categories-and-brands-for-the-marketplace
legacySlug: mapeo-de-categorias-y-marcas-para-marketplace
locale: es
subcategoryId: 24EN0qRBg4yK0uusGUGosu
---

Cuando una tienda funciona como un marketplace, usted debe tener en cuenta que el catálogo de sus sellers tiene una estructura completamente independiente de la suya. Para que las definiciones de ambos catálogos sean compatibles, es necesario mapear las [categorías](/es/docs/tracks/categorias-definicion-de-concepto), [marcas](/es/docs/tracks/marcas-definicion-de-concepto) y [especificaciones](/es/docs/tracks/especificaciones-definicion-de-concepto):

- Envía sus productos por primera vez.  
- Envía productos con información que aún no ha sido mapeada.  

Esto permite que los productos presentados por el seller se introduzcan con la información equivalente en el catálogo del marketplace. Es importante tener en cuenta que el envío de un nuevo ítem, cuya información aún no se ha mapeado, no modifica los valores ya mapeados en el marketplace. Para mapear marcas, categorías y especificaciones:  

 1. En la sección «Marketplace» de su admin, acceda a la pestaña __Sellers__.    
 2. Haga clic en __Categorías y marcas__.    
 3. Haga clic en__ Nuevo mapeo__.    
 4. Seleccione un seller entre las opciones y haga clic en __Agregar__.  
 5. Para el seller que se agregó al panel:  
  a. Realice el [mapeo de categorías](/es/docs/tutorials/mapeo-de-categorias-y-marcas-para-marketplace#mapeo-de-categorias).    
  b. Realice el [mapeo de marcas](/es/docs/tutorials/mapeo-de-categorias-y-marcas-para-marketplace#mapeo-de-marcas).    
  c. Realice el [mapeo de especificaciones](/es/docs/tutorials/mapeo-de-categorias-y-marcas-para-marketplace#mapeo-de-especificaciones).  
 6. Haga clic en el botón que empieza con __Actualizar mapeo__.  

## Mapeo de categorías

Después de que el seller complete el envío de productos al Marketplace, las categorías deben ser mapeadas en el marketplace. La correspondencia entre las categorías del marketplace y las categorías del seller se realiza mediante una plantilla.  

### Rellenando la plantilla
Puede descargar el modelo de plantilla actualizado desde el botón Descargar la tabla actual en el seller agregado, en la página «Categorías y marcas». La plantilla contiene las siguientes columnas:

| Columna | Nombre                             | Descripción                                                                                                                                        |
|---------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Marketplace categories             | Nombre de la categoría en el marketplace VTEX. Los números entre corchetes corresponden al ID de la categoría en el marketplace.                   |
| B       | Categories sent by seller          | Nombre de la categoría en el catálogo del seller. Si el mapeo no se ha realizado previamente, esta columna tendrá celdas vacías.                   |
| C       | Unmapped categories sent by seller | Categorías del seller que aún no han sido mapeadas. Si esta columna está vacía, significa que el seller aún no envió sus productos al marketplace. |

Para rellenar la plantilla:

1. Consulte todas las categorías que se encuentran en la __columna A__. Estos son los valores que usted asociará con las categorías del seller en la columna C durante el paso 2.    
2. Rellene la __columna __B con la categoría correspondiente de la __columna C__.  
3. Repita el proceso hasta que la __columna C__ esté vacía.    
4. Guarde el __archivo XLS__ de la plantilla.  
5. En «Mapeo de categorías», haga clic en el botón __Cambiar mapeo de categorías__ para enviar la plantilla actualizada.  

> ℹ️ Si el programa utilizado para abrir la plantilla utiliza los separadores estándar «;», debe reemplazarlos por «,» antes de enviar el archivo.

### Ejemplo
Este es un ejemplo de la plantilla actual que contiene los siguientes valores en las columnas:

| Marketplace Categories                         | Categories sent by seller | Unmapped categories sent by seller |
|------------------------------------------------|---------------------------|------------------------------------|
| [3] Mujer \|<br>[2] Accesorios \|<br>[8] Bolso |                           | Jeans / Shorts                     |
| [3] Mujer \|<br>[28] Jeans                     |                           | Playa / Bolsos                     |
|                                                |                           | Jeans / Bermudas                   |

Mapearemos las categorías del seller, buscando la mejor coincidencia posible 
con las categorías que ya existen en el marketplace. Una vez completado el mapeo, la plantilla tendrá el siguiente aspecto:

| Marketplace Categories                         | Categories sent by seller | Unmapped categories sent by seller |
|------------------------------------------------|---------------------------|------------------------------------|
| [3] Mujer \|<br>[2] Accesorios \|<br>[8] Bolso | Playa / Bolsos            |                                    |
| [3] Mujer \|<br>[28] Jeans                     | Jeans / Shorts            |                                    |
| [3] Mujer \|<br>[28] Jeans                     | Jeans / Bermudas          |                                    |

> ℹ️ Observe que más de una categoría del catálogo del seller coincide con la misma categoría en el marketplace (Mujer / Jeans).  En ese caso, duplique la línea correspondiente en «Marketplace categories» y pegue los valores de la columna «Unmapped categories sent by seller» en cada línea duplicada.

## Mapeo de marcas

Después de que el seller complete el [envío de productos al Marketplace](/es/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace), este último debe hacer el mapeo de las marcas. La correspondencia entre las marcas del marketplace y las marcas del seller se realiza mediante una plantilla. 

### Rellenando la plantilla
Puede descargar el modelo de plantilla actualizado desde el botón Descargar la tabla actual en el seller agregado, en la página «Categorías y marcas». La plantilla contiene las siguientes columnas:  

| Columna | Nombre                         | Descripción                                                                                                              |
|---------|--------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| A       | Marketplace brands             | Nombre de la marca en el marketplace VTEX. Los números entre corchetes corresponden al ID de la marca en el marketplace. |
| B       | Brands sent by seller          | Nombre de la marca en el catálogo del seller. Si el mapeo no se ha realizado previamente, esta columna estará vacía.     |
| C       | Unmapped brands sent by seller | Marcas del seller que aún no han sido mapeadas.                                                                          |

1. Consulte todas las marcas que se encuentran en la __columna A__. Estos son los valores que asociará con las marcas del seller en la columna C durante el paso 2.  
2. Rellene la __columna B__ con la marca correspondiente de la __columna C__.  
3. Repita el proceso hasta que la __columna C__ esté vacía.
4. Guarde el __archivo XLS__ de la plantilla.  
5. En «Mapeo de marcas», haga clic en el botón __Cambiar el mapeo de marcas__ para enviar la plantilla actualizada.  

> ℹ️ Si el programa utilizado para abrir la plantilla utiliza los separadores estándar «;», debe reemplazarlos por «,» antes de importar el archivo.

### Ejemplo
Este es un ejemplo de la plantilla actual que contiene los siguientes valores en las columnas:

| Marketplace Brands | Brands sent by seller | Unmapped Brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       | Animale                        |
| C&A                |                       | Farm                           |
| Animale            |                       |                                |
| Farm               |                       |                                |

Mapearemos las marcas del seller, asociando las marcas que ya existen en el marketplace con las enviadas por el seller. Una vez completado el mapeo, la plantilla tendrá el siguiente aspecto:

| Marketplace Brands | Brands sent by seller | Unmapped Brands sent by seller |
|--------------------|-----------------------|--------------------------------|
| Adidas             |                       |                                |
| C&A                |                       |                                |
| Animale            | Animale               |                                |
| Farm               | Farm                  |                                |

Observe que no todas las marcas del marketplace coinciden en este caso. Esto varía según la oferta de productos del seller y la variedad de marcas del marketplace. 

## Mapeo de especificaciones

Las especificaciones son propiedades adicionales que se pueden registrar en los productos o los SKU de su tienda. Después de que el seller complete el [envío de productos](/es/tutorial/entendendo-a-catalogacao-de-produtos-para-o-marketplace), las especificaciones de los productos y de los SKU deben ser mapeadas en el marketplace. El mapeo se realiza manualmente, en la página de «Categorías y Marcas», para señalar las equivalencias entre los campos del marketplace y el seller.

Cuando un *seller* envía un producto con una especificación que no ha sido mapeada por el *marketplace* y el *marketplace* [aprueba](/es/docs/tutorials/catalogacion-manual-de-skus) este producto, se crea un nuevo SKU, aunque ya existe un SKU en el catálogo del marketplace con el que asociarlo. La especificación no mapeada (por ejemplo, color) o su valor (por ejemplo, amarillo) se registrará como un **atributo no estructurado** en el catálogo del *marketplace*, pero **no aparecerá en el storefront del marketplace**. Por lo tanto, es necesario mapear todas las especificaciones y sus valores para que sean visibles para los compradores. Puedes ver los atributos no estructurados en tu Admin. Ve a *Catálogo > Productos y SKU > elige un ítem de la lista > haz clic en la pestaña Especificaciones*.

Para realizar el mapeo de especificaciones de productos y SKUs, haga los siguientes pasos:

1. En el campo «*especificaciones*», haga clic en el botón __Mapear textos de las especificaciones__.    
2. En la columna «*Seller*», rellene el valor de la especificación correspondiente al catálogo del __seller__.     
3. En la columna «*Marketplace*», rellene el valor correspondiente a la especificación en el catálogo del __marketplace__. Puede encontrarla navegando por el árbol de categorías disponible en Productos > Catálogo > Categorías.  
4. Haga clic en «__Agregar nueva entrada__» para repetir el proceso hasta que todas las especificaciones del seller tengan una coincidencia.  
5. Haga clic en el botón que empieza con __Actualizar mapeo__.  

### Ejemplo

Mapearemos las especificaciones del seller asociando las especificaciones que ya existen en el marketplace con las presentes en el catálogo del seller. Tenga en cuenta que todas las especificaciones divergentes deben ser mapeadas, incluso si la única diferencia es la capitalización de la palabra. Una vez terminado el mapeo, la tabla tendrá el siguiente aspecto:

| Seller  | Marketplace |
|---------|-------------|
| VOLTAJE | Voltios     |
| 37      | 38          |
| talla   | Talla       |
| Mujer   | mujer       |
| xl      | XL          |
| NÚMERO  | Número      |

### Especificaciones y aprobación de los SKU recibidos

El mapeo de especificaciones se aplica en el sitio del marketplace de diferentes maneras, dependiendo de la acción realizada en el módulo [SKU Recibidos](/es/tutorial/sugerindo-e-aprovando-skus/), al aprobar los SKU del seller:

- __Asociar a un SKU existente:__ el sistema del marketplace ignora el mapeo de especificaciones porque el SKU ya existe en el marketplace con las mismas especificaciones.  
- __Asociar a un producto existente:__ el mapeo solo se considera para las especificaciones de SKU. Esto se debe a que las especificaciones del producto ya están presentes en el marketplace.  
- __Crear un nuevo producto:__ el mapeo se aplica en su totalidad, para las especificaciones de los productos y los SKU del seller.  

## Sepa más

- [Aprobar productos](/es/tutorial/sugerindo-e-aprovando-skus/)    
- [Crear política comercial](/es/docs/tutorials/crear-una-politica-comercial)    
- [Política comercial para marketplaces](/es/docs/tutorials/configurar-politica-comercial-para-marketplace)    

