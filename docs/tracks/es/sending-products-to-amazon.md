---
title: 'Envío y mapeo de categorías de productos a Amazon'
id: 5xklf2wSdeztQh4iy5kJvD
status: PUBLISHED
createdAt: 2019-02-28T23:12:40.204Z
updatedAt: 2023-10-18T19:47:04.829Z
publishedAt: 2023-10-18T19:47:04.829Z
firstPublishedAt: 2019-02-28T23:13:35.624Z
contentType: trackArticle
productTeam: Channels
slug: envio-de-productos-a-amazon
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugES: integracion-de-amazon
---

Una vez realizada la configuración inicial de integración, ya puedes enviar los productos al catálogo de Amazon. Para habilitar el proceso de catalogación de los productos en Amazon y permitir que estén disponibles para la venta en menos tiempo, el seller debe realizar el mapeo entre las características de los productos de su tienda VTEX y las características de esos mismos productos en su tienda Amazon.  

Para enviar sus productos a Amazon, el seller debe mapear las [categorías](https://help.vtex.com/es/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) y los [atributos del producto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP).

>ℹ️ Los productos deben tener el [stock](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y los [precios](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviarlos a Amazon.

## Mapear categorías  

El proceso de mapeo se puede realizar a través del [Admin VTEX](#mapeo-via-admin-vtex-(beta)), o mediante una [plantilla](#mapeo-mediante-plantilla). Consulta a continuación los detalles de cada caso.  

>❗ Atención: si realizas el mapeo de una categoría a través del Admin VTEX, y anteriormente habías realizado el mapeo de esa misma categoría mediante una plantilla, se sobreescribirá el mapeo de la plantilla y no podrá recuperarse.

### Mapeo vía Admin VTEX (beta)  

Para acceder a la página de mapeo de Amazon, ve a **Marketplace > Marketplaces e integraciones > Amazon > Realizar mapeo.**  
Se mostrará una lista de categorías disponibles para tu tienda VTEX. El mapeo de categorías permite una correspondencia entre las categorías de tu tienda y las de Amazon. De esta forma, los productos enviados figurarán en la categoría equivalente en el marketplace.  

En la página de mapeo, puedes utilizar la barra de búsqueda para buscar la categoría por nombre o también puedes encontrarla en la sección **Categorías** de la tienda que muestra una lista de las categorías de tu tienda VTEX.  

La lista de categorías de tu tienda VTEX incluye el status del mapeo a través de los íconos:  

| **Ícono** | **Status** | **Descripción** |
|:---:|:---:|:---:|
| ![mapeado mapper](https://images.ctfassets.net/alneenqid6w5/3ZYriZU76d9cneJceH3ljb/069480d9eeb7b6108d5f6ec3d7ad1d78/mapeado_mapper.jpg) | **Mapeada** | Indica que el mapeo de categorías está completo. |
| ![mapeamentoincompleto mapper](https://images.ctfassets.net/alneenqid6w5/pHYXqYM9WBjmR0uYpwrFC/695f33c0eba4012f7e585ca1785ec17f/mapeamentoincompleto_mapper.jpg) | **Mapeo incompleto** | La categoría está parcialmente mapeada, por lo que es necesario ingresar sus atributos obligatorios (señalados con un asterisco) para realizar el mapeo. |
| ![erromapeamento mapper](https://images.ctfassets.net/alneenqid6w5/1wyY50BdeT8YA7y7XAb7Sd/7036253cccb4415d9759867b28ff1695/erromapeamento_mapper.jpg) | **Error al realizar el mapeo** | El error de mapeo ocurre cuando el marketplace elimina o cambia la categoría del producto. Para resolver este problema, solo hay que rehacer el mapeo de categorías. |
|![incompleto mapper](https://images.ctfassets.net/alneenqid6w5/7wXO0cZBKZD7PWbbP9y877/3eaea439ecfdbb54eaa8fefec12247ae/incompleto_mapper.jpg) | **No mapeada** | Indica que no se realizó el mapeo de la categoría. |  

Para realizar el mapeo de categorías:  

1. En el Admin VTEX, accede al módulo **Marketplace > Marketplaces e integraciones > Amazon > Realizar mapeo.**
2. Selecciona la categoría que deseas mapear.
3. Selecciona la categoría de Amazon correspondiente al producto que deseas enviar.
4. Haz la correspondencia de los atributos en la ventana lateral, como se muestra en la imagen a continuación:

![Atributos del mapeador de Amazon](https://downloads.ctfassets.net/alneenqid6w5/3gw5pXd6bvjIMs4ydBLmwv/9dbef07f676b7bf29ef81bfda39d9bda/mapper_amazon_atributos.gif)

5. Haz clic en el botón `Guardar cambios`.

>❗ Los campos marcados con un asterisco * son obligatorios.
>
>
> Al ingresar un atributo pueden activarse nuevos campos obligatorios que solo serán visibles en la página **Marketplace > Conexiones > Productos,** después de guardar el mapeo.</br>

### Mapeo mediante plantilla 

El seller deberá seguir los pasos a continuación para realizar el mapeo a partir de una plantilla:

1. [Descargar el modelo de la plantilla de categorías generales de Amazon](#1-plantilla-de-categorias-generales-de-amazon)
2. [Descargar el modelo de la plantilla de atributos de Amazon](#2-plantilla-de-atributos-de-amazon)
3. [Realizar las preconfiguraciones de Catálogo](#3-preconfiguraciones-en-el-catalogo)
4. [Descargar el modelo de la plantilla de mapeo](#4-plantilla-de-mapeo)
5. [Rellenar la plantilla de mapeo](#5-como-rellenar-la-plantilla-de-mapeo)
6. [Cargar la plantilla de mapeo](#6-cargar-la-plantilla-de-mapeo)

#### 1. Plantilla de categorías generales de Amazon

Amazon utiliza la [categoría global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global--tutorials_188) registrada en VTEX para mapear los productos, por lo que es importante que la equivalencia entre la categoría global de VTEX y las categorías generales en Amazon se haga correctamente.

Para conocer las categorías aceptadas por Amazon es necesario descargar la [Plantilla de categorías generales de Amazon](https://drive.google.com/uc?export=download&id=1GC5Guic4k_8C2ZnEGQUoDqT2cdJzp-Ti). Esta plantilla se utilizará solo para consulta.

#### 2. Plantilla de atributos de Amazon

Amazon tiene valores de referencia para determinadas características de productos que se deben tomar en cuenta en el mapeo de los productos.

Para saber qué atributos acepta Amazon según cada columna de la plantilla de mapeo, descargue la [Plantilla de atributos de Amazon.xlsx](https://drive.google.com/uc?export=download&id=1UkcrfPopMg-cnrSDOF0qt51NRIXgzi0r) Esta plantilla se utilizará solo para consulta.

En esta plantilla, cada pestaña corresponde a una subcategoría global en Amazon. Al hacer clic en una pestaña, la plantilla muestra en cada columna las subcategorías presentes dentro de la categoría global seleccionada.

#### 3. Preconfiguraciones en el Catálogo

Antes de mapear los productos en su tienda, debe configurar los siguientes [campos del producto](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto--tutorials_106) que desea enviar a Amazon:

- [Categoría Global](#categoria-global)
- [EAN](#ean)

###### Categoría global

Para identificar sus productos y relacionarlos con el catálogo de Amazon, la integración utiliza las [categorías globales](https://help.vtex.com/es/tutorial/configurando-a-categoria-global--tutorials_188) de VTEX. Durante el proceso de mapeo, el sistema hace la correspondencia de cada categoría global de VTEX con las [categorías generales](#plantilla-de-categorías-generales-de-amazon) de Amazon. De este modo, dirigimos los productos a las categorías correctas y con los atributos de producto necesarios.

Por lo tanto, es obligatorio tener todos los productos de su catálogo clasificados y [configurados con la categoría global](https://help.vtex.com/es/tutorial/configurando-a-categoria-global) adecuada, de lo contrario no podrá enviar sus productos a Amazon.

Cuando configure la categoría global en VTEX, tenga en cuenta las categorías globales de Amazon, ya que esta información se utilizará al [rellenar la plantilla de mapeo de Amazon](#5-como-rellenar-la-plantilla-de-mapeo).

##### Configuración de la Categoría global 

Para configurar la categoría global en su entorno VTEX según las categorías globales en Amazon, siga los pasos a continuación:

1. En la [Plantilla de atributos de Amazon](#2-plantilla-de-atributos-de-amazon) encuentre la categoría que se utilizará para sus productos.
2. En la [Planilha de categorias gerais da Amazon](#1-plantilla-de-categorías-generales-de-amazon) filtre la columna «I» - **Cat-Amazon-Geral** seleccionando la categoría deseada.
3. En las columnas «B», «C», «D» y/o «E» de la [Plantilla de categorías generales de Amazon](#1-plantilla-de-categorías-generales-de-amazon), identifique qué árbol de categorías se aplicará a VTEX.
4. En el Admin VTEX, vaya al módulo *CATÁLOGO* y seleccione la pestaña **Productos y SKUs**.
5. Encuentre el producto utilizando el campo de búsqueda con la categoría deseada.
6. Haga clic en `Cambiar`.
7. En la página del producto, encuentre el campo `CATEGORIA GLOBAL VTEX`.
8. Rellene el campo [Categoria Global](https://help.vtex.com/es/tutorial/configurando-a-categoria-global) con el nombre de la categoría encontrada en el paso 3.
9. Haga clic en `Guardar cambios`.

##### Ejemplo de cómo consultar las plantillas 

En la Plantilla de atributos de Amazon, utilizaremos la categoría **Health**, centrada en los productos de salud:
![categoriageral01](https://images.contentful.com/alneenqid6w5/154htyPg3K3IZ6Wxej3kek/a446c9815c249dda3084aa1773b76b3a/categoriageral01.JPG)

En la Plantilla de categorías generales de Amazon, filtre la columna «I» Cat-Amazon-Geral, haciendo clic en **Filtro > Health > OK**.
![categoriageral02](https://images.contentful.com/alneenqid6w5/2PTS1fxztRjYHaAicwVH7W/f44b94c30ca7401ec08a19c467ee8912/categoriageral02.JPG)

Siguiendo el ejemplo anterior, filtre las columnas B, C y D, haciendo clic en **Salud y Belleza > Cuidado personal > Masaje y relajación**.
![categoriageral03](https://images.contentful.com/alneenqid6w5/1p0cIHz7bp8HHuzud1H4zE/e79bf00cbe09f7b1fb155730cfc401f8/categoriageral03.JPG)

Ahora que ha encontrado la categoría general de Amazon, vuelva al Admin para [configurar la categoría global de VTEX](https://help.vtex.com/es/tutorial/configurando-a-categoria-global--tutorials_188) según la categoría general de Amazon.

#### EAN

Como el catálogo de Amazon es único, se requiere que los productos enviados tengan [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube), para poder mostrar los productos de todos los sellers en la vitrina y en el checkout. Por lo tanto, asegúrese de que sus productos tienen EAN válidos registrados antes de configurar la integración.

##### Exención del EAN

Sin embargo, hay situaciones en las que [Amazon exime al administrador de la tienda de enviar el EAN](https://sellercentral.amazon.com.br/gp/help/200426310). En este caso, la exención debe configurarse tanto en Amazon como en VTEX. 

Si Amazon ya ha concedido la exención de EAN para su tienda, [abra un ticket](https://support.vtex.com/hc/en-us) con el asunto «Amazon - Exención de EAN» para solicitar el procedimiento a VTEX. En el caso de la exención de EAN, necesita tener la integración configurada antes de realizar la solicitud a través del ticket.

Para saber si puede solicitar la exención del EAN, debe encontrarse en uno de los siguientes casos:
- Productos de marca propia o artesanales, así como kits de productos
- Productos cuyo fabricante no tiene código de barras 
- Venta de productos que no tienen EAN. Ejemplo: Accesorios para teléfonos móviles
- Kits/combos de productos. Ejemplo: Camisas + Cinturón

##### Consejos para el envío de productos con exención de EAN

Tras la solicitud y aprobación de la exención de EAN, con la definición de la [Categoría](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1?&utm_source=autocomplete) y la [Marca](https://help.vtex.com/es/tutorial/cadastrando-marcas--tutorials_1414), el producto debe ser enviado mediante la integración con la misma información aprobada en Amazon: 

- Nombre de la marca
- Acentuación 
- Letras mayúsculas y minúsculas
- Categoría aprobada
- Número del fabricante del producto

Es importante asegurarse de que el nombre de la marca esté escrito igual en Amazon y que el número del fabricante del producto (campo único sin repetición) esté correcto, lo que evita que los productos tengan el título y la imagen de otro producto.

El registro de marcas de Amazon ofrece un paquete de herramientas diseñadas para ayudarle a desarrollar y proteger su marca, y crear una mejor experiencia durante sus ventas.

Si vende productos de una marca o de fabricación propia, Amazon debe aprobarla antes de que pueda utilizarla para publicar productos. Para registrar una marca propia, siga las instrucciones en el [sitio web de Amazon](https://brandservices.amazon.com.br/brandregistry/eligibility).

Si quiere vender un producto que está asociado a otro propietario (creación de un nuevo ASIN, el código creado por Amazon para identificar sus productos), es importante estar atento al proceso de [Liberación del producto a la marca](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G201844590&ref_=xx_G201844590_a_r0_cont_sgsearch).

#### 4. Plantilla de mapeo

En este paso tendrá que categorizar las variaciones y atributos de los productos y enviarlos al marketplace. Esta información se envía mediante la plantilla de mapeo, que establece la equivalencia entre las categorías, las variaciones y los atributos de su tienda y los estándares adoptados por Amazon.

Descargue la [Plantilla de mapeo de Amazon.xlsx](https://assets.ctfassets.net/alneenqid6w5/4mNcXF4yS3160xUGgCZVQC/caf8cfc88b316bc9878000264e16e30b/Planilha_modelo.xlsx) y utilice el archivo descargado como modelo para rellenar. Esta es la plantilla que se rellenará y posteriormente se enviará a Amazon.

#### 5. Cómo rellenar la plantilla de mapeo

La plantilla contiene las siguientes columnas:

| Columna | Nombre | Descripción |
| ---------- | ---------- | ---------- | 
| A | CategoryID | ID de la categoría en VTEX. |
| B | VariationTheme | Cómo varía el SKU según su categoría en Amazon. En el mapeo de productos, se tiene en cuenta el orden de VariationTheme de las categorías | 
| C | Type | El tipo de especificación, que puede ser: Variation o Information |
| D | VTEXSpecification | Nombre del campo de SKU utilizado en su tienda VTEX |
| E | AmazonSpecification | Nombre del atributo aceptado por Amazon |
| F | VTEXValue | Nombre del valor utilizado en el campo SKU en VTEX |
| G | AmazonValue | Nombre de los valores aceptados por Amazon |

>ℹ️ La plantilla de mapeo de Amazon es case sensitive, es decir, distingue mayúsculas de minúsculas.

Para cada producto, siga los pasos a continuación.

1. Rellene la columna **CategoryID** con el código de la categoría.
2. Rellene la columna **VariationTheme** con la información sobre el color y/o el tamaño, si tiene una variación registrada. El primer **VariationTheme** de la categoría se utiliza para enviar los campos de los productos/SKU. Siga los estándares:
   * Si el producto tiene diferencias de tamaño y color, utilice *SizeColor*. 
   * Si el producto tiene diferencias de color, utilice *Color*.
   * Si el producto tiene diferencias de tamaño, utilice *Size*.
3. Rellene la columna **Type** con un tipo de especificación:
   * **Variation**:  tipo destinado a diferenciar los SKU. Si se ha rellenado la columna **VariationTheme**, la columna **Type** se rellenará siempre como *Variation*.
   * **Information**:  tipo destinado a complementar la información sobre los productos. Si la columna **VariationTheme** no se ha rellenado, la columna **Type** se rellenará siempre como *Information*.
4. Rellene la columna **VTEXSpecification** con el nombre del atributo del producto en su tienda VTEX. 
5. Rellene la columna **AmazonSpecification** con el nombre de los atributos del producto en Amazon.
6. Rellene la columna **VTEXValue** con los valores del atributo del producto en VTEX
7. Rellene la columna **AmazonValue** con los valores del atributo aceptados por Amazon. Para ver los valores aceptados por Amazon, ve a la [plantilla de atributos obligatorios de Amazon](#2-plantilla-de-atributos-de-amazon) y busca la pestaña `VALORES VÁLIDOS`.

>⚠️ En algunos casos, los valores de **VariationTheme** pueden ser similares. Hay categorías en las que el **VariationTheme** puede ser: <i>SizeColor</i>, <i>Color</i> e <i>Size</i>, mientras en otras categorías puede ser: <i>ColorSize</i>, <i>Color</i> e <i>Size</i>. La diferencia está en el orden. En <i>SizeColor</i>, as casillas en la página del producto se ordenarán por tamaño y color, mientras que en <i>ColorSize</i> se ordenarán por color y tamaño. Tenga en cuenta los valores válidos de cada categoría que se va a mapear.

##### Ejemplo de cómo rellenar la plantilla

| CategoryID | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 212 | SizeColor | Variation | Tamaño | Size | P | S |
| 212 | SizeColor | Variation | Tamaño | Size | M | M |
| 212 | SizeColor | Variation | Tamaño | Size | G | L |

#### 6. Cargar la plantilla de mapeo

Después de rellenar la plantilla, accede a Integraciones en el menú del Admin:  

1. Vaya al Admin.  
2. En el módulo *MARKETPLACE*, seleccione **Integraciones**.   
3. Haga clic en **Configuración**.  
4. Seleccione la tarjeta de Amazon y haga clic en el ícono de engranaje <i class="fas fa-cog"></i>.
5. A continuación, haga clic en `Carga de mapeo`.
6. Seleccione la plantilla con los datos y haga clic en `Subir archivo`.

Si no se ha producido ningún error en el envío, los productos se enviarán a Amazon con sus respectivos atributos.  

