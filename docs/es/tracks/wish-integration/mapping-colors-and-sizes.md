---
title: 'Mapeo de color y tamaño'
id: HvbHUmSDbHe1io6XqvHS3
status: CHANGED
createdAt: 2019-11-18T13:40:10.167Z
updatedAt: 2020-11-27T19:39:37.276Z
publishedAt: 2020-03-19T22:03:12.923Z
firstPublishedAt: 2019-11-19T17:30:16.718Z
contentType: trackArticle
productTeam: Channels
slug: mapeo-de-color-y-tamaño
locale: es
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugES: integracion-con-wish
---

Después de hacer las configuraciones iniciales para la integración con Wish, ahora vamos a mapear las especificaciones de SKU. De esta forma, será posible crear productos con variaciones dentro de Wish (p. ej.: camisa negra P, M, G).

El envío de esta información se realiza cargando la plantilla de mapeo, que contiene un de/para. El mapeo solo se hará una vez para cada categoría. Esto significa que, una vez realizado el mapeo, los nuevos productos que se creen se integrarán directamente en la categoría correcta (y con sus respectivas variaciones y atributos).

>ℹ️ Usted debe realizar el mapeo de categoría para que Wish pueda diferenciar sus SKUs correctamente. Ejemplo: imagine que hay dos SKUs de un mismo producto con diferentes colores y tamaños iguales en VTEX, si no se realiza el mapeo de categoría, Wish reconocerá ambos SKUs como uno solo.

>⚠️ Los productos sin un color o tamaño mapeado no se enviarán a Wish. Si alguna categoría no tiene estos campos en VTEX, será necesario [crear un campo de SKU](https://help.vtex.com/es/tutorial/criando-campo-de-sku--tutorials_119) en el Catálogo y complete los valores apropiados antes de realizar la asignación de color y tamaño.

  - [Descargue aquí](https://drive.google.com/uc?export=download&id=1yJCgahkDhc4Gbvtxpe9kID1CwWsijdOf) la Plantilla de Mapeo de Wish en el  formato .xlsx.

## Campos

Siga el procedimiento, rellenando los campos de la plantilla de mapeo de la siguiente manera: 

  1. **VTEXCategory**: es el ID de la categoría en VTEX. Puede encontrarlo junto al nombre de cada categoría expandiendo el árbol.

Dada esta información, continúe completando la plantilla siguiendo las siguientes orientaciones:

  2. **VTEXField**: es el nombre del [campo de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) utilizado en su tienda en  VTEX.
_Ej.: campos como "Tamaño", "Color"._

  3. **WishField**: es el nombre de la especificación en Wish, que corresponde al  campo de SKU que usted utilizó en el campo VTEXField.
_Ej.: si usted utilizó "Colores" en la columna VTEXField, entonces el nombre  correspondiente en Wish sería "Color"._

  4. **VTEXValue**: nombre del valor utilizado en el campo de SKU en VTEX.
_Ej.: para una especificación de "Color", los valores de este campo serían los propios colores utilizados en la tienda, como "Rojo", "Negro", "Blanco", etc._

  5. **WishValue**: en esta columna usted debe rellenar valores aceptados por  Wish, correspondientes a los valores utilizados en el campo VTEXValue. Siga la documentación de Wish sobre los valores aceptados de [color](https://merchant.wish.com/documentation/colors) y de [tamaño](https://merchant.wish.com/documentation/sizes) para rellenar la plantilla.
_Ej.: si usted rellenó VTEXField con "Tamaño" y VTEXValue con "Pequeño", verá que  Wish acepta "P", por ejemplo._

## Ejemplos

Abajo hay algunos ejemplos de cómo armar la plantilla.

### Ropas

En este ejemplo, estamos mapeando una **camisa**.

Note que en VTEX el nombre de los campos es "Colores" y "Tamaños", pero Wish los denomina "Color" y "Size", respectivamente.

En VTEX, los productos de esta categoría poseen dos colores posibles: rojo y hielo. 
Debe escogerse el color disponible más cercano que, en el caso de Wish, "Hielo" podría ser "White/Ice Glaze" (basado en [lista de colores aceptados](https://merchant.wish.com/documentation/colors)). Y "Rojo" podría ser "Red".

>ℹ️ OBS: la cabecera de la tabla debe rellenarse exactamente como está en el siguiente ejemplo. Recuerde no agregar caracteres especiales como enter o espacio al rellenar esta tabla.

![PT - Tabela Wish](//images.ctfassets.net/alneenqid6w5/5fvuqSjSRGHwbFVNUSTM3T/6f8f13054b1be01cbd1340d7b5b90bbd/Tabela_Wish.png)

## Cargando el archivo

Después de completar la plantilla, acceda a la app en la sección de "apps instaladas" del Admin.

  1. Haga clic en "Cargar plantilla".
  2. Escoja la plantilla con los datos y haga clic en "Enviar Archivo".
  
Al finalizar este paso, basta guardar la integración ¡y sus productos se enviarán!
