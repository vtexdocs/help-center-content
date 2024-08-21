---
title: ' Mapeo de categorías, variaciones y atributos del Mercado Libre'
id: 6d5DFl6MZasoKickqkOUo4
status: DRAFT
createdAt: 2018-07-28T17:54:34.171Z
updatedAt: 2020-11-16T21:27:09.104Z
publishedAt: 
firstPublishedAt: 2018-07-28T18:16:23.488Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: mapeo-de-categorías-y-variaciones
locale: es
legacySlug: mapeo-de-categorías-y-variaciones
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Hecha la configuración inicial de la [integración con el Mercado Libre](/es/tutorial/integrando-con-mercado-libre), ahora vamos a categorizar y enviar las variaciones y atributos de producto al marketplace. El envío de esta información se __cargará por una planilla de mapeo__ a través de un de/para.

A través de esta, será posible categorizar correctamente sus productos en Mercado Libre y también crear variaciones y atributos para los anuncios.

La asignación sólo se realizará una vez para cada categoría. De esta forma, aun habiendo hecho un mapeo, cuando nuevos productos sean creados, ellos serán integrados directamente en la categoría correcta y con sus respectivas variaciones y atributos.

- [Descargue aquí](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx) la __Planilla de Mapeo del Mercado Libre__ en el formato `.xlsx`.

La misma planilla se utilizará en las tres macroetapas siguientes (categorización, variaciones y atributos). Siga el paso a paso llenando los campos de la hoja de asignación de acuerdo con las indicaciones siguientes.

## Categorización

Aquí se hará el de/para de sus categorías en VTEX con la correspondiente en el Mercado Libre.

1. __CategoryId:__ es el ID de categoría en VTEX. Usted puede encontrarlo en el lado del nombre de cada categoría al expandir el árbol.
2. __MeliCategoryId:__ es el ID de la categoría en el Mercado Libre. Acceda a la API de Mercado Libre de acuerdo con __su país__ para consultar los ID de las categorías.
<br/>- [Argentina](https://api.mercadolibre.com/sites/MLA/categories)
<br/>- [México](https://api.mercadolibre.com/sites/MLM/categories)
<br/>- [Colombia](https://api.mercadolibre.com/sites/MCO/categories)
  
>_`Ex:` usted tiene el siguiente árbol en __VTEX__:_

>- _Electrodomésticos (ID = 1) > Heladeras (ID = 2)_

>_En __Mercado Libre__ el árbol es así:_

>- _Electrodomésticos y Aires Ac. (ID = MLA5726) > Heladeras y Freezers (ID = MLA1576) > Heladeras (ID = MLA398582)_

>_Entonces, se completará la planilla de la siguiente manera:_

>| CategoryId | MeliCategoryId |
| ---------- | ---------- |
| 2       | MLA398582       |

__VTEX recomienda que el de / para arriba sea hecho de forma manual__ pero si no quiere hacerlo, la integración da la opción de categorizar automáticamente sus anuncios a través de una herramienta del Mercado Libre. Esta herramienta depende informaciones como el nombre del producto y el precio. Si no puede inferir correctamente las informaciones, puede categorizar de manera incorrecta su producto. 

Por lo tanto, será necesario definir una tasa de confiabilidad en la configuración de la integración. Es decir, el producto sólo se integrará si la tasa devuelta por la herramienta de Mercado Libre está por encima de la que ha configurado.

_`Ex:` si ha configurado una tasa de confiabilidad del 80%, cuando los productos se envían a Mercado Libre, su herramienta buscará identificar la categoría de los mismos. Si el retorno de ellos en cuanto a la categorización tiene una tasa del 70%, entonces sus productos no serán integrados._


## Variaciones

En Mercado Libre existen dos tipos de variación, las __obligatorias__ y las __personalizadas__.

- Variaciones obligatorias
	
Si su producto es un `calzado`, `ropa`, o `electrodoméstico`, será necesario asignar las variaciones obligatorias. Su nombre debe estar exactamente de acuerdo con los valores aceptados por marketplace. [Descargue aquí](https://assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/28d9a8e7ce08b03d243b43bb6b759c5d/Planilha_de_Atributos_do_Mercado_Livre.xlsx) la __Planilla de Variaciones de Mercado Libre__ para verificar los valores aceptados de acuerdo con cada tipo de producto.
  
- Variaciones personalizadas

Son variaciones adicionales que pueden ser creadas de acuerdo con su necesidad. Sólo es posible tener __una__ variación adaptable por anuncio. El nombre de la variación y sus respectivos valores son de libre elección.

_`Ex:` usted vende teléfonos móviles que varían según el tamaño de la memoria. En Mercado Libre el anuncio agruparía todos los tamaños, quedando así:_

  >_Smartphone X_
  ><br/>_Variacion 1 - 32gb_
  ><br/>_Variacion 2 - 64gb_

Dado esta información, continue completando la planilla siguiendo las instrucciones:

1. __Type:__ es el tipo de especificación que se utilizará y se debe completar con el valor de 
`Variation`. Este valor es destinado a diferenciar las SKUs (así como los [campos de SKU en VTEX](/es/tutorial/criando-campo-de-sku)).

2. __VtexEspc:__ es el nombre del [campo SKU](/es/tutorial/criando-campo-de-sku) utilizado en su tienda en VTEX.
<br/>_`Ex:` campos como "Talla", "Color", "Material" …_

3. __MeliEspc:__ es el nombre de la especificación en la __Planilla de Mercado Libre__ que corresponde al campo SKU que utilizó en el campo `VtexEspc`.
<br/>_`Ex:` si utilizó "Colores" en la columna `VtexEspc`, entonces el nombre correspondiente en Mercado Libre sería "Color primario"._

4. __VtexValue__: nombre del valor utilizado en el campo SKU en VTEX.
<br/>_`Ex:` para una especificación de "Color", los valores de este campo serían los propios colores usados en la tienda, como "Rojo", "Negro", "Blanco" …_

5. __MeliValue:__ en esta columna debe rellenar los valores aceptados por  Mercado Libre correspondientes a los valores utilizados en el campo `VtexValue`. En la __Planilla de Atributos de Mercado Libre__, acceda a la pestaña correspondiente a su país y busque los valores aceptados para cada especificación que usted ha llenado en la columna.
<br/>_`Ex:` si has llenado el `MeliEspc` con "Tamaño" y el `VtexValue` con "Pequeño", ver que el valor aceptado por Mercado Libre_

>⚠️ **OBS:** después de que se crea un anuncio por primera vez, ya **no** es posible cambiar sus variaciones. Si desea hacer cualquier modificación en las variaciones del anuncio, como cambiar el color, por ejemplo, será necesario finalizar el anuncio en el Mercado Libre y luego rehacer el mapeo de la planilla.

>⚠️ **OBS2:** Mercado Libre **no** permite usar precios diferentes para cada variación de un anuncio. Por ejemplo, una camisa no puede costar $ 40 para el tamaño "P" y $ 50 para el tamaño "M".

>⚠️ **OBS3:** si el SKU no tiene una determinada especificación (como color, por ejemplo), necesitará registrarla en VTEX antes de completar el proceso de integración. Recomendamos que agregue el atributo que falta como una especificación de **producto**. Por lo tanto, esta información no se mostrará en el sitio.

## Atributos

En Mercado Libre es posible complementar la información de los productos utilizando atributos (equivalente a las especificaciones de producto en la VTEX). Son cosas como información técnica, medidas, etc.

Es necesario hacer el mapeo de los atributos de acuerdo con los valores aceptados por Mercado Libre. Acceda a esta URL en el navegador sustituyendo la variable (entre llaves {CategoryId}) por el ID de la categoría (del Mercado Libre) que está asignando para descargar los atributos y sus respectivos valores aceptados.

```http://portal.vtexcommercestable.com.br/api/meliintegration/category/{CategoryId}/attributes```

_`Ex:` si usted está mapeando la categoría "Camisas" (MLA417218), verá que es posible registrar varios atributos. Entre ellos, "Genero", que acepta sólo los valores "Hombre", "Mujer", "Niñas", "Niños", "Bebés", "Sin género". Cualquier valor diferente de éste no será aceptado por Mercado Libre._


_`Ex2:` En el caso de "Camisas" (MLA417218), verá que es posible registrar atributos con valores que tienen __Texto Libre__. Es decir, cualquier valor se puede insertar para estos atributos._

Dado esta información, el relleno de la planilla será similar a lo que hizo para las Variaciones en el paso anterior, con sólo algunas diferencias. Siga las siguientes instrucciones:

1. __Type:__ es el tipo de especificación que se utilizará y se debe rellenar con `Information`. Este valor define que el tipo de especificación está destinado a complementar la información sobre los productos (así como los [campos de productos en VTEX](/es/tutorial/criando-um-campo-de-produto)).

2. __VtexEspc:__ es el nombre del [campo de producto](/es/tutorial/criando-um-campo-de-produto) utilizado en su tienda en VTEX.
<br/>_`Ex:` campos como "Genero", "Capacidad", "Memoria interna" ..._

3. __MeliEspc:__ es el nombre de la especificación correspondiente al campo de producto que utilizó en el campo VtexEspc. Como no hay restricción de valores, debe escribir exactamente lo que desea que aparezca como atributo en el mercado libre. En general, se acabará escribiendo el mismo nombre utilizado en VtexEspc.
<br/>_`Ex:` si utilizó "Capacidad" en la columna `VtexEspc`, entonces usted utilizará "Capcidad total" en el `MeliEspc`._

4. __VtexValue:__ nombre del valor utilizado en el campo de producto en VTEX.
<br/>_`Ex:` para una especificación de "Memoria interna", la hoja indica como valores aceptados __"Unidad de medida"__. Entonces, usted debe llenar este campo con los propios valores de la suya en la tienda, pero siempre especificando la unidad de medida. Como "32Gb", "64GB", "128GB" ..._


5. __MeliValue:__ es el nombre del valor correspondiente al valor que utilizó en el campo `VtexEspc`. Como no hay restricción de valores, debe escribir exactamente lo que desea que aparezca como atributo en Mercado Libre. Generalmente, acabará siendo escrito el mismo nombre usado en `VtexValue`.
<br/>_`Ex:` si has llenado el `VtexValue` con "32GB", entonces también usas "32GB" en `MeliValue`._


## Ejemplos


A continuación se muestran algunos ejemplos de cómo montar la Planilla de Mapeo:

- Plantilla de ejemplo para `ropas`:

En este ejemplo estamos categorizando una __camisa__ (categoría MLA417218). Como es ropa, es necesario seguir los valores aceptados de la Planilla de Variciones de Mercado Libre. En VTEX, los productos de esta categoría poseen dos colores posibles, rojo y hielo. En Mercado Libre, no existe el color "Hielo", entonces el color más cercano aceptado por Mercado Libre es "Blanco". En VTEX el nombre de los campos son "Color" y "Tamaños", pero Mercado Libre acepta esto como "Color principal" y "Tamaño", respectivamente.

En el aspecto de Atributos, esta categoría está segmentada en VTEX entre los departamentos Hombre y Mujer. Entonces, fue necesario hacer el de/para con el nombre del campo de acuerdo con la planilla encontrada en el enlace abajo:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLA417218/attributes`

En VTEX es "Departamento", pero en Mercado Libre es "Género". De esta forma, se crea un atributo para mostrar esta información en el anuncio.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 5 | MLA417218 | Variation | Color | Color primario | Hielo | Blanco |
| 5 | MLA417218 | Variation | Color | Color primario | Rojo | Rojo |
| 5 | MLA417218 | Variation | Tamaños | Tamaño | Pequeño | P |
| 5 | MLA417218 | Variation | Tamaños | Tamaño | Grande | G |
| 5 | MLA417218 | Information | Departamento | Genero | Hombre | Hombre |
| 5 | MLA417218 | Information | Departamento | Genero | Mujer | Mujer|

- Plantilla de ejemplo para `Electrodomésticos`:

En este ejemplo estamos categorizando una __nevera__ (categoría MLA398582) y una __licuadora__ (categoría MLA104680). Como son electrodomésticos, es necesario seguir los valores aceptados de la Planilla de Variaciones de Mercado Libre. 

En VTEX, la nevera de esta categoría es bivolt. Por lo tanto, en la planilla debe ser usado "110V / 220V (Bivolt)", pues es el valor que Mercado Libre acepta. En el caso de la licuadora, el de / para quedó igual pues los valores en VTEX son 110V y 220V así como los aceptados por Mercado Libre.

En el aspecto de Atributos, la categoría de la __nevera__ tiene el atributo de "Capacidad" con los valores posibles 573L y 394L. Entonces, fue necesario hacer el de/para con el nombre del campo de acuerdo con la planilla encontrada en el enlace abajo:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLA398582/attributes`

En VTEX es "Capacidad", pero en Mercado Libre es "Capacidad total".

Ya en la categoría de las __licuadoras__ se mostrará como atributo a potencia de los mismos. El de/para quedó igual pues tanto en VTEX con en Mercado Libre, el atributo "Potencia" tiene el mismo nombre.

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLA104680/attributes`

De esta forma, se creará un atributo para mostrar esta información en los anuncios.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 20 | MLA398582 | Variation | Voltaje | Voltaje | 110V/220V (Bivolt) | 110V/220V (Bivolt)|
| 20 | MLA398582 | Information | Capacidad | Capacidad total | 573L | 573L|
| 20 | MLA398582 | Information | Capacidad | Capacidad total | 394L | 394L|
| 32 | MLA104680 | Variation | Voltaje | Voltaje | 110V | 110V |
| 32 | MLA104680 | Variation | Voltaje | Voltaje | 220V | 220V |
| 32 | MLA104680 | Information | Potencia | Potencia | 1200W | 1200W |
| 32 | MLA104680 | Information | Potencia | Potencia | 1000W | 1000W |


- Plantilla de ejemplo com `variaciones customizables`:

En este ejemplo estamos categorizando una __pijama__. Como es ropa, es necesario seguir los valores aceptados de la Planilla de Mercado Libre, así como en el primer ejemplo. Pero observe que en este caso, añadimos "Material" como una variación personalizada. Entonces, los valores utilizados pueden ser cualquiera de su elección. Además de variar por color y tamaño, los anuncios de esta categoría también variarán de acuerdo material.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 12 | MLA109255 | Variation | Color | Color primario | Azul Marino | Azul |
| 12 | MLA109255 | Variation | Color | Color primario | Verde Agua | Verde |
| 12 | MLA109255 | Variation | Tamaños | Tamaño | Pequeño | P |
| 12 | MLA109255 | Variation | Tamaños | Tamaño | Grande | L |
| 12 | MLA109255 | Variation | Material | Material | Algodón | Algodón|
| 12 | MLA109255 | Variation | Material | Material | Seda | Seda |

Después de rellenar la hoja de trabajo, acceda a las __Integraciones__ en el menú Admin:

1. Haga clic en __Configuración__.
2. Busque por la caja de Mercado Libre y haga clic en el __botón de engranaje__.
3. A continuación, haga clic en __Carga de mapeo__.
4. Seleccione la hoja de cálculo con los datos y haga clic en __Enviar archivo__.

Después de cargarlas, la integración envía automáticamente todos los productos de las categorías utilizadas en la hoja de trabajo para Mercado Libre.


<div class="alert alert-warning">
<strong>OBS:</strong> los productos sólo serán enviados a Mercado Libre, si la autenticación de la integración ya se ha realizado. Si no lo ha hecho, siga el paso a paso en <a href="http://help.vtex.com/es/tutorial/integrando-con-mercado-libre#autorizacion-de-la-integracion-en-vtex">este artículo</a>.



