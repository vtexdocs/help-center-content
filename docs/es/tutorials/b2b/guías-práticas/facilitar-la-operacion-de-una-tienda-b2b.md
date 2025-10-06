---
title: 'Facilitar la operación de una tienda B2B'
id: 8t1f9FYBsSCopHHVujKWR
status: PUBLISHED
createdAt: 2021-03-30T14:29:12.548Z
updatedAt: 2024-05-10T10:59:55.549Z
publishedAt: 2021-05-20T18:17:16.108Z
firstPublishedAt: 2021-03-30T19:54:13.259Z
contentType: tutorial
productTeam: B2B
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: facilitating-b2b-store-operation
legacySlug: facilitar-la-operacion-de-una-tienda-b2b
locale: es
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

Puede facilitar la operación de su tienda a través de aplicaciones que se pueden instalar en la misma para solucionar problemas de negocio específicos que están relacionados con la usabilidad de la tienda, las ventas y la posventa.

> ℹ️ Las siguientes aplicaciones se pueden instalar a través de [VTEX App Store](https://apps.vtex.com/) y de [VTEX IO](https://vtex.io/).

## Herramientas de usabilidad
| Herramienta              | Uso                                                                                                                                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Quickorder](https://github.com/vtex-apps/quickorder)              | Permite que el administrador de la tienda realice compras masivas por medio de plantillas.                                                                                |
| [Order Quote](https://github.com/vtex-apps/order-quote)             | Hace posible que el cliente guarde la información de un carrito de compras específico (SKUs, cantidad y precio de cada ítem) durante un determinado periodo de tiempo.                                                                                                                                                                                                  |
| [Order Configuration](https://vtex.io/docs/components/content-blocks/vtex.order-configuration@3.1.0/readme/)     | Personalización de compras en el escenario B2B, como para reventas y consumo propio del cliente.                                                                                                                                              |
| [VTEX Intelligent Search](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search) | Habilita búsquedas de productos (solo está disponible para tiendas desarrolladas con VTEX IO).                                                                                                                                                          |
| [Telemarketing](https://github.com/vtex-apps/telemarketing)           | Añade un componente en el *storefront* de su tienda que permite que un agente de servicio al cliente represente a un consumidor y realice compras en su nombre. |
| [Product Comparison](https://github.com/vtex-apps/product-comparison)      | Hace posible que el cliente compare las especificaciones de cuatro SKUs a la vez antes de finalizar una compra, facilitando un análisis más detallado de los productos.                                                                                                               |

## Herramientas de ventas

En VTEX, hay algunas herramientas que se adaptan al momento de la venta en sí y se pueden aplicar perfectamente al contexto B2B.

### Precio por paquete

En el formulario de registro de un SKU, hay un campo denominado «Multiplicador de unidad», que determina si el ítem se comercializará en paquetes.

Por ejemplo, supongamos que tiene el SKU «Camiseta roja». Si completa el campo «Multiplicador de unidad» con el número 5 en el registro de este ítem, tal SKU se comercializará en paquetes de cinco unidades.

Por lo tanto, cuando el cliente seleccione dos unidades en el *checkout*, estará comprando 10 camisetas rojas, en lugar de dos.

Para saber más detalles, lea el artículo sobre [cómo completar cada uno de los campos del registro de un nuevo SKU](/es/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY).

### Precio por cantidad

En VTEX, el cliente puede definir el precio de un ítem de acuerdo con su cantidad. Al configurar el [precio fijo](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy) de un SKU, se puede definir la [cantidad mínima de ítems en el carrito para activar el precio fijo](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3HxF2u5VwidqnUGnFoKdDy#item-minimo-no-carrinho). Es decir, en base al volumen que el consumidor añada al carrito, todos los productos adquieren un valor determinado.

Tomemos como ejemplo un producto que tiene el valor unitario de USD 100 y que este precio se mantendrá hasta que se incluyen 10 unidades en el carrito. Sin embargo, si el consumidor quiere comprar 12 ítems de una sola vez, el precio unitario se reduce un poco, a USD 98.

Este es un recurso que se adapta a las necesidades de los clientes mayoristas. Actualmente existen tres formas de establecer un precio fijo en VTEX. Acceda al artículo sobre [cómo registrar precios fijos](/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj) para conocer todas las formas de configuración.

> ℹ️ Antes de proceder con su lectura, lea el artículo sobre[ las promociones más usadas para el escenario B2B](/es/tutorial/as-promocoes-mais-comuns-em-b2b--XoM951AzUIvfaH71UdANf?&utm_source=autocomplete).

### Kit de productos

En VTEX, todas las tiendas cuentan con el recurso [kit de productos](/es/tutorial/kit-registration?locale=en), a través del cual se puede vender un conjunto de ítems por un precio determinado. 

> ℹ️ En el contexto B2B, el kit de productos, generalmente, se cita como "Bundle". Es decir, los términos "kit de productos" y "bundle" se refieren a la misma herramienta.

Para registrar un [kit de productos](/es/tutorial/cadastrando-kit/), vea la documentación en el Centro de Ayuda. 

### Product Assembly Options o Product Customizer

Product Assembly Option —o Product Customizer— es una aplicación que permite que el administrador de la tienda personalice la página de un producto. Para saber más detalles sobre cómo instalar la app en su tienda, vea [recipes en IO Docs](https://vtex.io/docs/components/all/vtex.product-customizer@2.10.4/).

## Herramientas de posventa

El periodo de posventa, o Post Purchase, abarca desde el momento en que un consumidor finaliza una compra en una tienda hasta el día en que los ítems del pedido se entregan en la dirección deL destinatario.

Esta etapa tiene una serie de particularidades que se pueden potenciar a través de algunas herramientas. Estos son algunos de esos recursos. 

### Gestión de pedidos

Todas las tiendas VTEX cuentan con el módulo «Gestión de pedidos», el cual permite orquestar todos los [pedidos](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE) que se realizan en una tienda. 

El sistema comprende:

- Todos los detalles relacionados con cada uno de los pedidos registrados en la tienda, como los datos del comprador y método de pago. 

- El [flujo de pedidos](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4811ExCe3WrEiRMV3sy9n8), una herramienta que monitorea el status de un pedido durante todo el periodo de posventa.

- Dispositivos para que el cliente actualice el status del pedido, como la facturación.

Vea más detalles sobre la Gestión de pedidos, vea nuestro [FAQ sobre el módulo](/es/tutorial/faq-vtex-gerenciamento-de-pedidos--4vddUgU784wyGYQ64cw6I8?&utm_source=autocomplete) en el Centro de Ayuda. 

### Pedir nuevamente

VTEX cuenta con [My account](/es/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh), una herramienta que está disponible en las tiendas de todos nuestros clientes. 

Esta herramienta permite al consumidor seguir el status de su pedido en el flujo de posventa, así como realizar algunas operaciones. Entre estas, «Pedir nuevamente» para volver a realizar un pedido que se efectuó anteriormente.  

![reorder ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/gu%C3%ADas-pr%C3%A1ticas/facilitar-la-operacion-de-una-tienda-b2b_1.png)

Para saber más detalles de My Account, lea el tutorial sobre [cómo configurar esta funcionalidad](/es/tutorial/configurar-o-my-account--23Ayv5D6b86UBnYfoXqZL1).

### Substitución de pedidos

Substitución de pedidos, o [Change Order](/es/tutorial/change-making-changes-to-an-order--3d1XLIgPQcwaKGyMiWaYog), es una funcionalidad del módulo Gestión de pedidos del Admin de VTEX. Este recurso posibilita que el administrador de la tienda edite pedidos que ya fueron realizados sin tener que cancelarlos y sin ayuda del equipo de soporte. 

Para habilitar «Substitución de pedidos», consulte el [artículo sobre la funcionalidad en el Centro de Ayuda](/es/tutorial/how-the-order-replacement-works--3aBxdbUPKgweug68YyK8oQ).
