---
title: 'Envío de los productos a Dafiti'
id: 3b8BZfB1BC8G8SCe0ao46m
status: PUBLISHED
createdAt: 2018-09-27T18:14:09.967Z
updatedAt: 2024-12-19T15:22:16.873Z
publishedAt: 2024-12-19T15:22:16.873Z
firstPublishedAt: 2018-09-27T21:44:56.294Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-product-data-to-dafiti
locale: es
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugEN: configurar-la-integracion-de-dafiti
order: 6
---

Una vez configurado el conector de Dafiti, se podrán enviar los productos al catálogo de Dafiti. Para enviar tus productos, tendrás que mapear sus atributos en la tienda VTEX y los atributos de los mismos productos en la tienda Dafiti. 

Sigue estos pasos para realizar el mapeo:

1. [Descargar la plantilla de consulta de Dafiti](#1-descargar-la-plantilla-de-consulta-de-dafiti)
2. [Descargar el modelo de la plantilla de mapeo de Dafiti](#2-descargar-el-modelo-de-la-plantilla-de-mapeo-de-dafiti)
3. [Rellenar la plantilla de mapeo](#3-rellenar-la-plantilla-de-mapeo)
4. [Cargar la plantilla de mapeo](#4-cargar-la-plantilla-de-mapeo)

> ⚠️ Para registrar un producto en VTEX, es obligatorio vincular el producto a una marca. Sin embargo, para evitar problemas con el envío de los productos, debes [ rellenar los nombres de las marcas aceptadas por Dafiti](/es/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) en el campo **Marca** del producto que enviarás. Consulta el [glosario de marcas](https://www.dafiti.com.co/marcas/) de Dafiti para conocer las marcas aceptadas.

## 1. Descargar la plantilla de consulta de Dafiti

Al mapear los productos, debes tener en cuenta que Dafiti tiene valores de referencia para ciertos atributos de los productos.

Para conocer los valores aceptados por Dafiti según cada columna de la plantilla de mapeo, debes descargar [la plantilla de consulta de Dafiti](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/category_tree_export_2021-12-20_16-10-17.xlsx) para la categoría correspondiente. Esa plantilla solo se usará para consultas.

- [Accesorios](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Acess_rios_-_ProductCreationTemplate_2022-02-11_143128.xlsx)
- [Belleza](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Beleza_-_ProductCreationTemplate_2022-02-11_143141.xlsx)
- [Casa y Decoración](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Home_e_Decor_-_ProductCreationTemplate_2022-02-11_143139.xlsx)
- [Calzado](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Cal_ados_-_ProductCreationTemplate_2022-02-11_143135.xlsx)
- [Vestimenta](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Vestu_rio_-_ProductCreationTemplate_2022-02-11_143133.xlsx)

## 2. Descargar el modelo de la plantilla de mapeo de Dafiti

En esta etapa, deberás hacer un mapeo de los atributos de los productos y enviarlos al marketplace. Esta información se envía a través de la plantilla de mapeo, la cual te permite indicarle a Dafiti la correspondencia que existe entre los valores registrados en tu tienda y los valores aceptados en el marketplace.

Descarga la [Plantilla de mapeo de Dafiti](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/es/tracks/marketplace/configurar-la-integracion-de-dafiti/Model_New_Mapping_Dafiti.xlsx). VDebes usar el archivo como modelo para rellenar. Es decir, esta es la plantilla que rellenarás y, luego, enviarás a Dafiti.

## 3. Rellenar la plantilla de mapeo

El modelo de la plantilla de mapeo proporcionado se divide en tres pestañas:

| **Nombre de la pestaña** | **Descripción** | 
| ---------- | ---------- | 
| **Categories** | Ejecuta la equivalencia entre la categoría en VTEX y la categoría en Dafiti. |
| **Attributenames** | Ejecuta la equivalencia entre el nombre del campo de la especificación en VTEX y el nombre de la variación/atributo en Dafiti. |
| **Attributevalues** | Ejecuta la equivalencia entre los valores del campo de la especificación en VTEX y los valores de la variación/atributo en Dafiti. |

> ℹ️ La plantilla de mapeo de Dafiti es case sensitive, es decir, distingue mayúsculas de minúsculas. Ten esto en cuenta al momento de rellenar la plantilla.

### Categories

La pestaña *Categories* de la plantilla de mapeo tiene dos columnas para rellenar.

- **VTEXCategoryId:** ID de la categoría en VTEX. El ID de la categoría se encuentra al lado del nombre de la categoría al navegar por el árbol de categorías en el Admin VTEX, en *Productos > Catálogo > Categorías*.
- **DafitiCategoryId:**  ID de la categoría en Dafiti. Debes buscar la mejor equivalencia posible del producto que estás mapeando en la plantilla de consulta de Dafiti.

> ℹ️ Puedes mapear una categoría de VTEX en varias categorías de Dafiti. Para hacerlo, debes separar los ID en la columna de Dafiti con comas. En ese caso, todos los productos de esa categoría en VTEX se relacionarán con las categorías seleccionadas en Dafiti.

### Attributenames

La pestaña *attributenames* de la plantilla de mapeo tiene tres columnas para rellenar:

- **VTEXAttributeName:** nombre del campo de la especificación en VTEX.
- **DafitiAttributeName:**  nombre de la variación/atributo en Dafiti.
    Para más información, revisa la plantilla de consulta de Dafiti. Los atributos *Variation*, *Gender*, *Origin*, *ColorFamily*, *Color* y *Origincountry* son obligatorios, teniendo en cuenta que:
    - Al rellenar el atributo **ColorFamily** de un producto que tenga más de un color, se recomienda usar el color predominante.
    - Los atributos **Color** y **ColorFamily** son diferentes; por lo tanto, es necesario [registrar dos especificaciones diferentes](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) de produto *Color* del producto para que este se mapee correctamente. Por ejemplo: Color e Color2.
- **HasValueMapping:** indica si es necesario hacer una conversión de los valores de los atributos en *VTEXAttributeValue*. Cuando los valores de las especificaciones de tu producto en VTEX sean distintos a los que usa Dafiti, deberás informarle al sistema que harás una conversión entre ellos. Rellena esa columna con una `Y` (Yes) en caso de que quieras indicar que se debe hacer una conversión de valores, o con una `N` (No) en caso de que no haya ninguna conversión.

### Attributevalues

La pestaña *attributevalues* de la plantilla de mapeo tiene dos columnas para rellenar.

- **VTEXAttributeValue:** valor del campo de la especificación en VTEX.
- **DafitiAttributeValue:** valor de la variación/atributo en Dafiti.

#### Ejemplo de cómo rellenar

En este ejemplo, mapearemos una categoría de Vestimenta según cada columna.

Pestaña **Categories**:

| **VTEXCategoryId** | **DafitiCategoryId** | 
| ---------- | ---------- |
| 23 | 120 | 

Pestaña **attributenames**:

| **VTEXAttributenames** | **DafitiAttributenames** | **HasValueMapping** |
| ---------- | ---------- | ---------- |
| Color | ColorFamily | Y |
| Género | Gender | N |
| Origen | Origin | N |
| Tamaño | Variation | N |
| País de origem | OriginCountry | N |
| Color2 | Color | Y |

Pestaña **attributevalues**:

| **VTEXAttributevalues** | **DafitiAttributevalues** |
| ---------- | ---------- | 
| Amarilla | Amarillo |
| Roja | Rojo |
| Azul | Azul |
| Hombre | Masculino |
| Brasil | Brasil |
| Nacional | Nacional |
| P | P |
| M | M |
| G | G |
| Azul celeste | Azul celeste |

## 4. Cargar la plantilla de mapeo

Después de rellenar la plantilla de mapeo de Dafiti, debes cargarla en el Admin VTEX. Para hacerlo, sigue estos pasos:  

1. Accede al Admin VTEX.
2. En el módulo _MARKETPLACE_, haz clic en `Integraciones`.
3. Haz clic en `Configuración`.
4. En la integración de Dafiti, haz clic en el ícono del engranaje <i class="fas fa-cog"></i>.  
5. Elige la opción `Cargar mapeo`.
6. Selecciona la opción `Elegir un archivo`.
7. Selecciona la plantilla de mapeo rellenada.
8. Haz clic en `Enviar archivo`.

Si no se ha producido ningún error en el envío, los productos se enviarán a Dafiti con sus respectivos atributos.

> ℹ️ Los requisitos de Dafiti para el registro de imágenes de productos son: <ul>Resolución mínima: 1000x1000px </ul><ul>Resolución máxima: 1104x1600px</ul><ul> Cantidad mínima: 2 imágenes</ul><ul> Cantidad máxima: 8 imágenes</ul>  Si las imágenes se envían con tamaños inferiores a la resolución mínima, la integración entre VTEX y Dafiti realiza automáticamente el redimensionamiento. Este proceso se lleva a cabo ajustando el ancho de la imagen a 1000px, preservando la proporción de su altura. 
