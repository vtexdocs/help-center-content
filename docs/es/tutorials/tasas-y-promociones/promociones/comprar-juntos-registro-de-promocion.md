---
title: 'Crear promoción Comprar Juntos'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2025-09-30T13:55:10.549Z
publishedAt: 2025-09-30T13:55:10.549Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-together
legacySlug: comprar-juntos-registro-de-promocion
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Comprar juntos te permite ofrecer descuentos cuando se agregan dos o más productos al carrito al mismo tiempo. El descuento puede aplicarse de dos maneras:

- **Descuento para ambos productos:** el descuento se aplicará tras agregar los productos al carrito.
- **Descuento para uno de los productos:** permite configurar una condición de cantidad mínima para que el descuento se aplique solamente a uno de los productos del carrito.

**Ejemplos de la promoción Comprar junto**

A continuación se presentan algunos ejemplos sobre cómo configurar y aplicar descuentos utilizando la promoción Comprar juntos. Los ejemplos ilustran diferentes formas de conceder descuentos al agregar productos al carrito:

Descuento por comprar productos juntos:

- **Promoción:** compra un pantalón y recibe 10 % de descuento en un cinturón.
- **Condición:** agregar ambos productos al carrito.

Descuento por compra combinada de ítems:

- **Promoción:** compra un par de zapatillas y un par de calcetines y recibe 15 % de descuento.
- **Condición:** comprar los dos ítems juntos.

Descuento por cantidad de productos agregados al carrito:

- **Promoción:** compra tres libros y recibe un 5 % de descuento en el tercero.
- **Condición:** agregar tres libros al carrito.

Este artículo detalla los pasos para crear y configurar una promoción Comprar juntos:

- [Crear promoción](#crear-promocion)
- [Información general](#informacion-general)
  - [Sellers](#sellers)
  - [Políticas comerciales](#politicas-comerciales)
- [Comprar juntos](#comprar-juntos)
- [Condiciones](#condiciones)
- [Restricciones](#restricciones)
- [Storefront](#storefront)

## Crear promoción

1. En el Admin VTEX, accede a **Promociones > Promociones** o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear promoción`.
3. Selecciona la opción **Comprar juntos** e ingresa la información necesaria. A continuación se detallan los datos que debes completar.
4. Haz clic en `Guardar`.

## Información general

Define la información principal de la promoción, como nombre, descripción y vigencia.

- **Nombre:** escoge un nombre claro y objetivo para la promoción (hasta 150 caracteres).
- **Status:** indica si la promoción estará **Activa** o **Inactiva**. Una promoción **Activa** se aplicará según las fechas y horas configuradas, mientras que una **Inactiva** estará pausada aunque esté dentro del periodo configurado.
- **Descripción:** ingresa una breve descripción de la promoción (hasta 10.000 caracteres) que incluya los objetivos principales.
- **Fecha de inicio:** define la fecha de inicio de la promoción.
- **Hora de inicio:** define la hora de inicio de la promoción.
- **Fecha de fin:** define la fecha en la que finalizará la promoción.
- **Hora de fin:** define la hora exacta en que se finalizará la promoción. La hora debe ser posterior a la hora actual.
- **Utilizar configuración de recurrencia:** activa esta opción si deseas que la promoción se repita automáticamente en días y horas específicos.

### Sellers

Define los sellers a los que se aplicará la promoción, que pueden ser todos o sellers específicos. Selecciona una de las siguientes opciones para aplicar la promoción.

- **Todos:** la promoción se aplicará a todos los sellers registrados. Utiliza esta opción cuando deseas que todos los productos de todos los sellers formen parte de la campaña.
- **Iguales a:** selecciona esta opción para aplicar la promoción a sellers específicos solamente. Después de escoger "Iguales a", tendrás la opción de seleccionar los sellers deseados en el campo inferior. Solo los productos de los sellers seleccionados se incluirán en la campaña.
- **Diferentes de:** selecciona esta opción para excluir sellers específicos de la promoción. Después de escoger "Diferentes de", tendrás la opción de seleccionar los sellers que no deseas incluir en la campaña. Se incluirán todos los demás sellers.
- **Participantes**: con esta configuración, la promoción funciona en modo *opt-in*, lo que significa que la participación de los sellers se gestiona a través del endpoint [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt). En esta API, puedes definir qué sellers deben ser incluidos o excluidos de la promoción.

Para obtener más información, consulta [Seller Opt-in for Promotions](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).

### Políticas comerciales

Selecciona las políticas comerciales que ofrecerán el descuento. Puedes ofrecer descuentos para políticas comerciales en las que [tu tienda opera como marketplace](/es/faq/o-que-e-um-marketplace) (mi tienda) o como [seller](/es/faq/o-que-e-um-seller) (tiendas de terceros - fulfillment).

Puedes elegir entre las siguientes opciones:

- **Iguales a:** selecciona las políticas comerciales que deseas incluir en la promoción. Esta opción te permite especificar las políticas que se aplican a los productos que recibirán el descuento.
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir de la promoción. Esta opción remueve determinadas políticas para garantizar que el descuento no se aplique a productos que sigan esas reglas comerciales.
- **Todas:** aplica la promoción a todas las políticas comerciales registradas sin ninguna restricción. Se incluirán todos los productos en la promoción independientemente de la política comercial asociada.

## Comprar juntos

La promoción **Comprar juntos** te permite combinar productos de dos listas diferentes para ofrecer descuentos a los clientes. La primera lista contiene los productos principales que cuando se agregan al carrito pueden activar la promoción. La segunda lista es el complemento, ya que al agregar productos de esta lista junto con los ítems de la primera se pueden recibir descuentos adicionales.

A continuación se explica cómo configurar la **Lista 1 y Lista 2** para activar las condiciones de descuento y garantizar que los productos se combinen correctamente en el carrito.

**Lista 1**

- **SKUs:** ingresa el nombre o ID de los SKUs que deseas incluir en la primera lista de la promoción. Por ejemplo, si la promoción se aplica a un pantalón o zapatillas, registra estos ítems aquí. Si los productos tienen variaciones, como tallas "P" y "G", debes agregar el SKU de la talla "P" en la **Lista 1** y el SKU de la talla "G" en la **Lista 2**. Ingrésalos manualmente o cárgalos en una plantilla para importar SKUs en masa.
- **Descuento:** ingresa el porcentaje de descuento que se aplicará a los SKUs de la **Lista 1**. Por ejemplo, si la promoción ofrece 15 % de descuento, ingresa "15" para que el descuento se conceda al SKU agregado al carrito. Este campo es obligatorio y debes rellenarlo aunque el descuento sea 0. Si el descuento solo debe aplicarse a los SKUs de la **Lista 2**, ingresa "0" en este campo en la **Lista 1**.
- **Cantidad mínima:** define la cantidad mínima del SKU seleccionado en la Lista 1 que debe agregarse al carrito para que se aplique el descuento.

**Lista 2**

- **SKU:** selecciona los SKUs adicionales que al agregarlos al carrito junto con los SKUs de la **Lista 1** activarán el descuento configurado. La promoción solo se activará si los productos de la **Lista 1** y de la **Lista 2** se agregan al carrito.
- **Descuento:** ingresa el porcentaje de descuento que se aplicará a los SKUs de la **Lista 2** cuando se agreguen los SKUs de la **Lista 1** al carrito. Debes ingresar el valor como porcentaje (%). Por ejemplo, para conceder 10 % de descuento con la compra de un cinturón combinado con un pantalón de la **Lista 1**, ingresa "10" en el campo.

> ℹ️ Mantén diferentes SKUs en la Lista 1 y la Lista 2. No repitas el mismo SKU en ambas listas.

## Condiciones

Define las restricciones que se aplicarán a la promoción. Las condiciones permiten activar la promoción en circunstancias específicas según los criterios seleccionados. Para agregar una condición, sigue las instrucciones a continuación:

- **Valor del pedido**
  - **Valor mínimo del pedido:** define el valor mínimo necesario para activar la promoción. Escoge los ítems que se deben considerar en el cálculo: solo los ítems incluidos en la promoción, solo los ítems que no son de la promoción o todos los ítems del pedido.
  - **Valor máximo del pedido:** define el valor máximo permitido para aplicar la promoción. Escoge los ítems que se deben considerar en el cálculo: solo los ítems incluidos en la promoción, solo los ítems que no son de la promoción o todos los ítems del pedido.

- **Número BIN de la tarjeta:** la promoción solo se aplicará cuando se utilicen tarjetas de redes, bancos o categorías específicas identificadas por su número BIN. Importa una lista de BIN con un archivo de texto (.txt) o un archivo CSV (.csv) que describa cada BIN en una fila diferente.

- **Clúster de clientes:** selecciona un [clúster de clientes](/es/tutorial/como-criar-um-cluster-de-clientes) previamente creado en Master Data, siguiendo el formato `field=value` o `field contains value`. El clúster agrupa clientes con características específicas y que son elegibles para la promoción. Escoge una de las siguientes opciones:

  - **Todos los siguientes:** la promoción se aplicará solo si se cumplen todos los criterios del clúster.
  - **Al menos uno de los siguientes:** la promoción se aplicará si se cumple al menos uno de los criterios del clúster.

- **Parámetro UTM:** permite configurar la promoción para que se aplique cuando se acceda al sitio web mediante una URL con parámetros UTM o cuando se utilice un cupón asociado a esos parámetros. Utilizar parámetros UTM es opcional y permite aplicar descuentos en campañas específicas. Define los parámetros UTM siguiendo las reglas de formato, utilizando solo letras, números, guiones y guiones bajos. Si es necesario, completa los siguientes parámetros:
  - **Fuente UTM:** el descuento se aplica al navegar utilizando el parámetro utm_source configurado.
  - **Campaña UTM:** el descuento se aplica cuando al navegar utilizando el parámetro utm_campaign configurado.
  - **Crear cupón a partir de los parámetros UTM anteriores:** permite generar un cupón con los parámetros UTM ingresados en los campos "Fuente UTM" y "Campaña UTM".
  - **Ver cupones vinculados:** permite ver los cupones que ya se vincularon a los parámetros UTM definidos. Al crear cupones a partir de UTMs, no uses el nombre `new`, ya que esto genera una URL no válida.

## Restricciones

En esta sección puedes definir la opción de combinar la promoción con otras promociones. Las opciones disponibles son:

- **Limitar el uso de las promociones en la tienda:** restringe la cantidad de veces que se puede utilizar la promoción en la tienda.
- **Limitar uso de la promoción por cliente:** permite restringir el número de veces que cada cliente puede utilizar la promoción.

## Storefront

Destaca la promoción en la página de productos y agrega datos personalizados para personalizar esta sección de la tienda.

- **Destacar promociones en los productos:** marca esta opción para mostrar la promoción directo en las páginas de producto. Recuerda [configurar la visualización en el módulo CMS](/es/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).
- **Información adicional:** haz clic en **Crear** para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizar la tienda.

Vea el formulario de Comprar Juntos a continuación:

![Informação geral - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/comprar-juntos-registro-de-promocion_1.gif)
