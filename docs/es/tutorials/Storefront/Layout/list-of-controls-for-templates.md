---
title: 'Lista de controles para plantillas'
id: tutorials_563
status: ARCHIVED
createdAt: 2017-04-27T22:00:32.542Z
updatedAt: 2022-09-08T16:44:42.282Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.646Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: lista-de-controles-para-plantillas
locale: es
legacySlug: lista-de-controles-para-plantillas
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Los controles que se listan en este artículo pueden ser utilizados por el desarrollador _front-end_ de su tienda para crear el layout de las páginas de la tienda en el módulo **CMS > Layout**.

- [Controles generales](#controles-generales)
- [Controles para página de producto](#controles-para-pagina-de-producto)
- [Controles de RichSnippets](#controles-de-richSnippets)
- [Controles para páginas de Departamento, Categoria y Búsqueda](#controles-para-paginas-de-departamento-categoria-y-busqueda)
- [Otros controles](#otros-controles)
- [Controles deprecados](#controles-deprecados)

## Controles generales
Los controles de la siguiente lista se pueden utilizar en la mayoría de las páginas de su tienda.  

| Control | Descripción     |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<vtex.cmc:breadCrumb/>`                      | **Breadcrumb:** indica la ubicación actual del usuario en el sitio web de su tienda y las páginas por las que pasó para llegar a la actual. Funciona en las páginas de Producto, Departamento, Categoría y Búsqueda.        |
| `<vtex.cmc:fullTextSearchBox/>`                | **Control de búsqueda:** exhibe la barra de búsqueda en su tienda. Para más información, lea el artículo [Control de Búsqueda - fulltextSearchBox](https://help.vtex.com/es/tutorial/controle-de-busca-fulltextsearchbox--tutorials_549).   |
| `<vtex.cmc:welcomeMessage/>` | 	**Mensaje de bienvenida:** exhibe un mensaje de bienvenida a quienes acceden a su tienda. Para personalizar este mensaje, acceda a __Configuraciones__ en el módulo __CMS__. En la pestaña "Textos de la tienda", busque y seleccione el comando `topbarWelcome` en las opciones de ID. En el cuadro de texto que aparecerá automáticamente, puede cambiar el mensaje de bienvenida y hacer clic en `Guardar`. |
| `<vtex:metaTags/>`                             | **Meta Tags:** define las Meta Tags de la página, es decir, las etiquetas que se utilizan para que los motores de búsqueda identifiquen su contenido con facilidad.   |
| `<vtex.cmc:canonicalPage disable="true"/>`     | **Inhabilitar canonical tag:** cuando aplica este control con el valor `true`, usted desactiva la etiqueta canonical en la página en cuestión. El uso de esta etiqueta es una forma de informar a los motores de búsqueda sobre el contenido duplicado y priorizarlo correctamente en el rastreo de las páginas. |      
| `<vtex.cmc:departmentLinks/>`  | **Links de departamentos:** presenta links del primer nivel de categorías creado en el Admin, es decir, departamentos. Para que la categoría aparezca en la lista, es necesario que haya activado el campo "Menú" durante la [creación de las categorías](https://help.vtex.com/es/tutorial/registrando-categoria--tutorials_206).|
| `<vtex.cmc:departmentNavigator/>` | **Menú de departamentos:** presenta un menú con los departamentos y las categorías registrados en su tienda (1° y 2° nivel). Para exhibir el link `Lista Completa`, es necesario que haya activado el campo "Menú" durante la [creación de las categorías](https://help.vtex.com/es/tutorial/registrando-categoria--tutorials_206). Este menú también exhibe las marcas que tienen la opción *Exibir en el menú de Home* habilitadas en su [registro](https://help.vtex.com/es/tutorial/campos-de-registro-de-marca--37Ky7lTbEkiWIAYA80EMyI) y las especificaciones de la categoría, por ejemplo, talla y color.  Este control se recomienda para uso lateral.  |
| `<vtex.cmc:searchTitle/>`                     | **Título de la página:** muestra el título de las páginas de Departamento, Categoría y Búsqueda.  | 
| `<vtex.cmc:productQuickView/>` | **Vista Rápida (QuickView):** este control se debe añadir antes de cerrar la etiqueta `</body>` en la plantilla de la página de Quickview. Esto es esencial para cargar los archivos necesarios de la página.|
| `<vtex.cmc:ProductQueryStringReferenceShelf/>` | **Estante:** permite configurar un estante en su tienda, utilizando los siguientes atributos. 

Vea la descripción de los atributos del control de **Estante** `<vtex.cmc:ProductQueryStringReferenceShelf/>`:

| Atributo de la tag | Descripción |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `layout` |  ID del template del estante. Atributo obligatorio. |
| `itemCount` | Cantidad de ítems que se presentan. Atributo obligatorio. |
| `columnCount` | Cantidad de columnas. Atributo obligatorio. |
| `showUnavailable` | Cuando el atributo está configurado con el valor `true`, la página muestra los productos agotados. |
| `selectionMode=”batch-buy”` | Atributo no obligatorio que permite efectuar compras en lote.         |
| `isTrackable` | Cuando el atributo está configurado con el valor `true`, este control es rastreable. |
| `InternalCampaign` | Nombre de la [audiencia de campaña](https://help.vtex.com/es/tutorial/Crear-audiencia-de-campanas--6cnuDZJzIkIeocewAQQK4K) interna.
| `InternalPart` | Nombre de la viewpart interna. |

Ejemplo de uso del control de **Estante**:
```
<vtex.cmc:ProductQueryStringReferenceShelf layout="e2ed81f5-6241-4418-a47b-018d7482fcf0" itemCount="3" columnCount="3" showUnavailable="true" isTrackable="true" InternalCampaign="Destaque landing" InternalPart="Prateleira destaque"/>

```

### Controles para página de producto

| Control | Descripción  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `<vtex.cmc:ProductGifts />` |	**Mostrar regalos en la página del producto:** muestra los regalos asociados al producto, si configuró una promoción Comprar y Ganar en su tienda. Vea cómo configurar este tipo de promoción](https://help.vtex.com/pt/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico--4QlFtwxAju6qOwaCi2YS0G). |
| `<vtex.cmc:productName/>` |	**Nombre del producto:** exhibe el nombre del producto registrado. |
| `<vtex.cmc:brandName/>` |	**Marca del producto con link:** exhibe el nombre de la marca del producto, con un link para acceder a la lista de productos de la marca en su tienda. |
| `<vtex.cmc:ProductImage/>` |	**Imagen principal del producto con thumbs:** muestra la imagen principal del producto con thumbnail, es decir, miniatura. Para activar el zoom, se debe añadir el atributo `zoom` en la etiqueta. Ejemplo: `<vtex.cmc:ProductImage zoom="on"/>`. |
| `<vtex.cmc:productReference/>` | **Código de referencia del producto:** exhibe el código de referencia del producto registrado. |
| `<vtex.cmc:skuReference/>` |	**Código de referencia del SKU:** exhibe el código de referencia del SKU registrado. |
| `<vtex.cmc:skuPrice/>` |	**Precio de, Precio por, En cuotas y Ahorro de:** el "precio de" y "ahorro de" solo se muestra si el "precio por" es menor que el "precio de". Se mostrará el pago en cuotas más conveniente para el cliente teniendo en cuenta el valor final de la compra y solamente las opciones sin intereses. No presenta contenido cuando el modo de visualización de los productos es **Lista de SKUs**. |
| `<vtex.cmc:skuSelection />` |	**Selección de SKUs:** permite seleccionar la variación del producto deseada, de acuerdo con la configuración del Admin (`radio` y `combo`). |
| `<vtex.cmc:OtherPaymentMethod/>` |	**Ver otras formas de pago:** muestra la mejor condición de pago y pago en cuotas del SKU. Es necesario que el SKU cuente con un stock disponible para que se exhiba. Este control no funciona para categorías con el modo de exhibición del tipo “Lista” en productos con múltiples SKU.  |
| `<vtex.cmc:Delivery/>` |	**Disponibilidad:** exhibe una estimativa de plazo para la disponibilidad del producto, considerando la ciudad y el estado predeterminados. |
| `<vtex.cmc:stockKeepingUnitRewardValue/>` |	**Valor para fidelidad:** exhibe el valor del SKU en el programa de fidelidad de la tienda. |
| `<vtex.cmc:BuyTogether/>` |	**Comprar junto:** exhibe los SKUs seleccionados en el campo **Mostrar junto** durante el registro de tal SKU. |
| `<vtex.cmc:ProductDescription/>` |	**Descripción del producto:** presenta el valor del campo **Descripción** del registro del producto. |
| `<vtex.cmc:productDescriptionShort/>` |	**Descripción corta del producto:** presenta el valor del campo **Breve descripción** del registro del producto.|
| `<vtex.cmc:productSpecification/>` |	**Especificación del producto:** presenta las propiedades adicionales que se pueden registrar en los productos.  |
| `<vtex.cmc:StockKeepingUnitAttributes/>` |	**Especificaciones del SKU:** también muestra el grupo "Atributos no estructurados", que se utiliza en los productos de sellers. |
| `<vtex.cmc:stockKeepingUnitMeasures/>` |	**Dimensiones reales del SKU:** presenta la altura, anchura, longitud y peso reales del SKU. |
| `<vtex.cmc:ProductTag/>` |	**Tags asociadas:** |
| `<vtex.cmc:PageSearch/>` |	**Búsqueda en la página de producto:** |
| `<vtex.cmc:BuyButton/>` |	**Botón Comprar:** exhibe el botón para añadir el producto al carrito. Si el producto está agotado, este control exhibirá la opción Avísame, [si está habilitada](https://help.vtex.com/es/tutorial/configurar-el-aviseme--2VqVifQuf6Co2KG048Yu6e).  |
| `<vtex.cmc:BuyInPage/>` |	**Botón Comprar (Asíncrono):** este control agregará el ítem al carrito de manera asíncrona, es decir, sin salir de la página de producto. Para su perfecto funcionamiento, es obligatorio el uso del control `<vtex.cmc:AmountItemsInCart/>` , [que se describe en este artículo](#controles-para-paginas-de-departamento-categoria-y-busqueda). |
| `<vtex.cmc:stockKeepingUnitAmountAndUnitSelection />` |**Selector de cantidad con unidad multiplicadora:** renderiza un campo de cantidad fraccionada, trabajando conjuntamente con la unidad de medida y el multiplicador de unidades (registrados en el SKU), dando como resultado la cantidad que se comprará. |
| `<vtex.cmc:evaluationRate/>` |	**Calificaciones de los consumidores (estrellas):** exhibe el total de calificaciones hechas por los usuarios. |
| `<vtex.cmc:UserReview/>` |	**Calificaciones y comentarios:** agrega la opción de calificar el producto y hacer un comentario. Exhibe el resultado de las calificaciones y comentarios de los clientes.  |
| `<vtex.cmc:giftListInsertSku/>` |	**Agregar producto a una lista** |
| `<vtex.cmc:GiftListFormV2/>` |	**Formulario para crear una lista** |
| `<vtex.cmc:HightLight/>` |	**Flag de Destaque de Colección** |
| `<vtex.cmc:discountHightLight/>` |	**Flags Destaques de Promociones** |
| `<vtex.cmc:sellerDescription />` |  **SellerDescription:** nombre e imagen registrados del seller del producto como tal. 
| `<vtex.cmc:SellerOptions />` |	**SellerOptions:** muestra los sellers que entregan el producto de la página, el precio del producto vendido de cada seller y el pago en cuotas (el límite es de 3 precios). |
| `<vtex.cmc:SalesChannelDropList />` |	**Lista de políticas comerciales:** — exhibe una lista con las políticas comerciales disponibles. |
| `<vtex:contentPlaceHolder id="ColecaoQVVT" />` |	**Estante “Quien vio vio también”:** agrega un control del tipo “Productos Relacionados” en el CMS. Al editar el elemento, seleccionar “Quem_Viu_Viu_Tambem” en el campo `Tipo` y crear nueva plantilla de estante. |
| `<vtex:contentPlaceHolder id="ColecaoQVCT" />` |	**Estante “Quien vio compró también”:** agrega un control del tipo “Productos Relacionados” en el CMS. Al editar el elemento, seleccionar “Quem_Viu_Comprou_Tambem” en el campo `_Tipo` y crear nueva plantilla de estante. Para que funcione correctamente, su tienda necesita un alto flujo de visitantes y compras.|
| `<vtex:contentPlaceHolder id="ColecaoQCCT" />` | **Estante “Quien compró compró también”:** agrega un control del tipo Productos Relacionados en el CMS. Al editar el elemento, seleccionar “Quem_Comprou_Comprou_Tambem” en el campo `_Tipo` y crear nueva plantilla de estante. |
| `<vtex:contentPlaceHolder id="Similares" />` |	**Similares (Sustitutos):** agrega un control del tipo **Productos relacionados** en el CMS. Al editar el elemento, seleccionar “Similares” en el campo **Tipo**. |
| `<vtex:contentPlaceHolder id="Acessorios" />` |	**Accesorios:** agrega un control del tipo **Produtos relacionados** en el CMS. Al editar el elemento, seleccione `Accesorios` en el campo **Tipo**. |
| `<vtex:contentPlaceHolder id="Sugestoes" />` |	**Sugeridos:** agrega un control del tipo **Productos relacionados** en el CMS. Al editar el elemento, seleccione `Sugeridos` en el campo **Tipo**. |
| `<vtex.cmc:facebookLike />` |	**Facebook Like** |

### Controles de RichSnippets

El control `<vtex.cmc:productRichSnippets />` agrega etiquetas específicas para compartir información con las redes sociales (Google microformats, Facebook Open Graph y Twitter card). Las herramientas de prueba son: 

1. [Google Structured Data Testing Tool](https://www.google.com/webmasters/tools/richsnippets)
2. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
3. [Twitter Card Validator](https://cards-dev.twitter.com/validator)

| **Propiedad** | **Valores posibles** |
|---|---|
| **showGoogle** |`{ “1”, “true”, “on”, “sim” }` |
| **showFacebook** | `{ “1”, “true”, “on”, “sim” }` |
| `Twitter` | @accountname de la cuenta de Twitter
| `doNotshowPrice` | `{ “1”, “true”, “on”, “sim” }` |
| `googleRate` | `{ “1”, “true”, “on”, “sim” }` |
| `fbAdmins` ||
| `fbAppId` |||

| Control | Ejemplo de uso |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `<vtex.cmc:productRichSnippets showGoogle="1"/>` | Para que el producto sea indexado por Google, el control se debe insertar en la tag `<body>` |
| `<vtex.cmc:productRichSnippets showFacebook="1" fbAdmins="[fbAdmins]" fbAppId="[fbAppId]"/>` | En el caso de Facebook se debe insertar en la tag `<head>`. Las configuraciones de fbAdmins y fbAppId son opcionales. |
| `<vtex.cmc:productRichSnippets Twitter="[TwitterAccount]"/>`     | En el caso de Twitter se puede insertar en `<head>` o `<body>`. Las configuraciones se pueden agrupar.     |

### Controles para páginas de Departamento, Categoría y Búsqueda 

| Control | Descripción  |
|---|---|
| `<vtex.cmc:advancedSearchFilter/>` |	**Filtro de búsqueda avanzada**
| `<vtex.cmc:singleDepartmentNavigator/>` |	**Menú de Departamento:** el atributo disponible es `keepCurrentPath`. Los productos se mostrarán en la página cuando el atributo esté configurado como `true`.
| `<vtex.cmc:searchNavigator/>` |	**Menú/Filtro de búsqueda:** presenta un menú con los departamentos y las categorías registrados en su tienda (1° y 2° nivel). Para exhibir el link **Lista completa**, es necesario que haya habilitado el campo Menú durante la [creación de las categorías](https://help.vtex.com/es/tutorial/registrando-categoria--tutorials_206).
| `<vtex.cmc:miniCart/>`          | **Control Minicart:** control del carrito utilizado en el menú superior de todas las páginas, excepto en el Checkout y en la página de confirmación de la compra. Este control exhibe información del carrito: ítems, cantidades y precios. 
| `<vtex.cmc:AmountItemsInCart/>` | **Cantidad de ítems en el carrito:** exhibe información básica del carrito. Es obligatorio utilizar este control en caso de que use el control `<vtex.cmc:BuyInPage/>`. Se puede utilizar en los casos de [KitLook](https://help.vtex.com/es/tutorial/como-montar-um-kit-look--tutorials_266#), por ejemplo. |
| `<vtex.cmc:searchResult/>`      | Resultado de la búsqueda de productos. Vea los atributos de este control a continuación.       |

A continuación, vea la descripción de los atributos del control `<vtex.cmc:searchResult/>`:

| Atributo de la tag               | Descripción                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------- |
| `layout`                    | Atributo obligatorio. Código de la plantilla de estante que mostrará los productos. |
| `itemCount` | Atributo obligatorio. Cantidad de ítems por página. |
| `columnCount` | Atributo obligatorio. Cantidad de columnas. |
| `showUnavailable` | Cuando el atributo está configurado como `true` significa que se mostrarán los productos agotados. |
| **selectionMode=”batch-buy”** | Atributo no obligatorio que permite efectuar compras en lote. |
| **isTrackable** | Cuando el atributo está configurado como true significa que este control es rastreable. |
| **InternalCampaign** | Nombre de la audiencia de campaña interna. |
| **InternalPart** |  Nombre de la _viewpart_ interna. |

Ejemplo de uso del control de resultados de búsqueda:
```
<vtex.cmc:searchResult layout="48e223e6-da80-4610-b3d5-4e5cfaf94f13" itemCount="10" columnCount="4" isTrackable="true" InternalCampaign="Resultado busca landing" InternalPart="Resultado Busca" /> 
```
Para más información, lea el tutorial [Controles del template de estante](https://help.vtex.com/es/tutorial/controles-do-template-de-prateleira--tutorials_550#).

## Otros controles
| Control | Descripción  |
|--------- |---------- |
| `<vtex.cmc:orderList/>` | Muestra la lista de pedidos del cliente para la pestaña **Pedidos** de la página **Mi cuenta** - `/account/orders` |
| `<vtex.cmc:accountUserProfile/>` | Muestra los datos de registro del cliente para la página **Mi cuenta** - `/account` |
| `<vtex.cmc:accountAddress/>` | Muestra las direcciones registradas del cliente para la página **Mi cuenta** - `/account`|
| `<vtex.cmc:sellerInfo />` |	Muestra información registrada para el vendedor y debe usarse en la página de detalles del vendedor, en la carpeta `seller-info`. |

## Controles deprecados

| Control               | Descripción               | Página            |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `<vtex.cmc:productPageTitle/>`    | **Título del producto:** control deprecado.                  | Página de producto |
| `<vtex.cmc:stockKeepingUnitSelection/>`         | **Selección de SKU:** control deprecado. Ahora usted necesita utilizar `<vtex.cmc:skuSelection/>`. | Página de producto |
| `<vtex.cmc:skuRichSelection changeImage="1"/>`                        | **Selección de SKU Checkbox:** control deprecado.     | Página de producto |
| `<vtex.cmc:shippingValue/>`                                            | **Calcular valor del flete y plazo de entrega:** control deprecado, ya que presenta un [problema conocido](https://help.vtex.com/es/known-issues/a-viewpart-shippingvalue-nao-exibe-prazos-em-horas-corretamente--5hvl9eGxPLZAuNcFAFc9Vb#). | Página de producto |
| `<vtex.cmc:stockKeepingUnitService/>`                                  | **Servicios del SKU:** control deprecado.       | Página de producto |
| `<vtex.cmc:StockKeepingUnitPriceHistory Months="6" Percentile="100"/>` | **Historial de precio**     | Página de producto |
| `<vtex.cmc:evaluationRate/>`    |   **Evaluaciones de los consumidores (estrellas):** control deprecado. Mostraba la media de estrellas de las evaluaciones dadas por los usuarios.                   | Página de producto |
| `<vtex.cmc:UserReview/>`    | **Evaluaciones y comentarios:** control deprecado. Anteriormente, mostraba la opción de evaluar el producto con estrellas, un formulario para hacer comentarios, los resultados de las evaluaciones y los comentarios realizados.        | Página de producto |
| `<vtex.cmc:welcomeMessage/>`   |   **Login del usuario:** control deprecado.  Anteriormente, se encargaba de crear la cookie IPI utilizada por el control `<vtex.cmc:UserReview/>`. Sin él, al intentar una evaluación, se requería el inicio de sesión en un loop.               | Página de producto |

