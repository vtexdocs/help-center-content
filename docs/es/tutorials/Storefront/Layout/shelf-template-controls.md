---
title: 'Controles del template de estante'
id: tutorials_550
status: ARCHIVED
createdAt: 2017-04-27T22:01:02.387Z
updatedAt: 2022-09-08T16:44:04.446Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.005Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: controles-do-template-de-prateleira
locale: es
legacySlug: controles-do-template-de-prateleira
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El sistema de VTEX ofrece algunos controles para la creación de vitrinas.

Los atributos de los productos se pueden almacenar en variables, y estas se utilizan en todos los templates. Para declarar las variables y recibir un atributo de un producto, utilice el siguiente comando: `#set ($variável=$atributo)`

### Ejemplos

- `#set($id = $product.Id)`  
- `#set($uri = $product.Uri)`  
- `#set($escapedName = $product.HtmlEscapedName)`  
- `#set($evaluationRate = $product.EvaluationRate)`  

### Producto y SKU

`$product.Id`

Muestra el ID del producto.

`$product.EscapedName`

Muestra el nombre del producto.

`$product.DescriptionShort`

Muestra una breve descripción del producto.

`$product.Uri`

Muestra el link del producto.

`$product.GetImageTag(número correspondente à imagem)`

Muestra la imagen y el tipo de imagen deseada, siguiendo esta lista de tipos de imagen:

- ImagenProductoVitrinaPequena (Tamaño: 65×65) = 1;
- ImagenProductoVitrinaMedia (Tamaño: 90×90) = 29;
- ImagenProductoVitrinaGrande (Tamaño: 130×130)= 30;
- ImagenProductoPrincipal (Tamaño: 250×250)= 2;
- ImagenProductoThumb (Tamaño: 45×45)= 3;
- ImagenProductoZoom (Tamaño: 344×344)= 10;
- Archivo = 11;
- ManualProducto = 12.

**Obs:** _Los tamaños de las imágenes se ajustan al layout de la tienda_

`$product.ProductField(IdField)`

Muestra el valor de un Campo Producto pasando como parámetro el ID de este campo.

### Precio

`$product.ListPrice`

Muestra el precio "De" del producto.

`$product.BestPrice`

Muestra el mejor precio del producto.

`$product.HasBestPrice`

Indica si hay mejor precio para el producto (usado en condicionales).

`$product.NumbersOfInstallment`

Muestra la cantidad de parcela de la mejor condición de pago del producto, es decir, la mayor parcela sin interés para ese producto.

`$product.InstallmentValue`

Muestra el valor de la parcela de la mejor condición de pago del producto, o sea, el valor de la mayor parcela sin interés para ese producto.

`$product.MaxNumbersOfInstallment`

Muestra la cantidad de parcela de la mayor condición de pago del producto, es decir, la mayor parcela con o sin interés para ese producto.

`$product.MaxInstallmentValue`

Muestra el valor de la parcela de la mayor condición de pago del producto, es decir, el valor de la mayor parcela con o sin interés para ese producto.

`$product.BestPricePlusTax`

Muestra el precio MÁS las tarifas aplicadas a él.

**Obs**: _Los valores de las tasas que se configuran por región, es decir, utilizando franjas de código postal, no se muestran en los estantes. Si hay más de una tasa para el mismo producto, los valores se suman y se muestran por el control._

`$product.ListPriceMinusBestPrice`

Muestra la diferencia (en absoluto) del precio "De" para el mejor precio del producto.

`$product.ListPriceMinusBestPriceInPercent`

Muestra la diferencia (en porcentaje) del precio "De" para el mejor precio del producto.

### Departamento y Categoría

`$product.DepartmentName`

Muestra el nombre del departamento del producto.

`$product.DepartmentLink`

Muestra el link del departamento del producto.

`$product.CategoryName`

Muestra el nombre de la categoría del producto.

`$product.CategoryLink`

Muestra el link de la categoría del producto.

### Marca

`$product.BrandName`

Muestra el nombre de la marca del producto. Ej.: "Jugos Oliveira"

`$product.Brand`

Muestra la marca del producto en un formato indicado para montar links. Ej.: "jugos-oliveira"

`$product.BrandLink`

Muestra el link de la marca.

### Botão de Compra

`$product.BottomBuyAllSku`

Incluye un botón de compra para agregar al estante de listas, donde el producto con especificación agregado por el cliente se envía directamente al carrito. Si el producto en cuestión ya se ha comprado para la lista, se agregará una clase específica al elemento. De esta forma, usted podrá personalizar el layout también para ese status.

_OBS: El control debe añadirse al template de estante utilizado en el template de página “Lista-Prateleira”._

`$product.BottomBuy`

Incluye un botón de compra en la vitrina que lleva al cliente directo al carrito, si existe solamente 1 SKU.

`$product.ButtonBuyModal(false,true)`

Incluye un botón de compra que inserta el producto en el carrito y mantiene al cliente en la vitrina.

_OBS: El control anterior necesita el control `$product.AmountInCart` para agregar un textbox de cantidad deseada para agregar en el carrito._

`$product.AmountInCart`

Inserta un elemento textbox para definir la cantidad deseada del producto que se añadirá al carrito.

_OBS: Este control se utiliza junto con el control `$product.ButtonBuyModal(false,true)`_

### Otros

`$product.EvaluationRate`

Muestra la clasificación de evaluación del producto.

`$product.HightLight`

Muestra las colecciones con destaque en las que el producto forma parte.

`$product.DiscountHightLight`

Muestra las promociones con destaque en las que el producto forma parte.

_OBS: Si la promoción tiene alguna condición de flete, forma de pago o cluster, no será presentada hasta que esas condiciones sean atendidas.

`$product.IsInStock`

Indica si el producto tiene ítems en stock (utilizado en condicionales).

`$product.Tax`

Muestra las tasas registradas para el producto.

`$product.QuickView`

Muestra el botón Quick View.

`$product.Compare`

Muestra el check box para seleccionar los productos que se van a comparar.

`$product.BestRewardValue`

Muestra el valor del campo "Valor de fidelidad" del formulario de SKU.

`$product.PercentBougthAndBought`

Muestra el valor porcentual en estantes del tipo "Quién compró compró también".

`$product.PercentBoughtAlso`

Muestra el valor porcentual en estantes del tipo "Quien vio compró también".

`$product.PercentViewedAlso`

Muestra el valor porcentual en estantes del tipo "Quien vio vio también".

`$product.InsertSku`

Muestra la cantidad individual de los productos de la vitrina y un checkbox para cada SKU del producto permitiendo seleccionar qué SKU se añadir a la lista. Para añadir más de un mismo SKU, es necesario cambiar la cantidad dentro del box y, a continuación, seleccionar el checkbox de SKU. Si se cambia la cantidad y el checkbox de un SKU ya está seleccionado, la cantidad de SKU no se cambiará, sólo de los siguientes SKUs seleccionados después de cambiar la cantidad en el box.

