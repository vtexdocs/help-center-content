---
title: 'Configurar promoción con destaque / flag'
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2024-09-17T16:24:52.963Z
publishedAt: 2024-09-17T16:24:52.963Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-with-a-highlightflag
legacySlug: configurando-promocion-con-destaque-flag
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

El destaque de una promoción es un aviso visual que puede insertarse en las estanterías y en las páginas de productos, informando que el artículo es elegible para una promoción. Un ejemplo común es la indicación de envío gratuito debajo de la imagen del producto.

![ExemploPromocaoDestaque2](//images.contentful.com/alneenqid6w5/jS31HBOW3YWsIYyUOE8o/3d0c108c84b2a7c5e6ae2d4254425e4b/ExemploPromocaoDestaque2.png)

En esta guía puedes consultar las siguientes secciones:

- [Promociones que se pueden destacar](promociones-que-se-pueden-destacar)
- [Restricciones](#restricciones)
- [Configurar la promoción](configurar-la-promocion)
- [Promociones destacadas en Store Framework](#promociones-destacadas-en-store-framework)
- [Destacar promociones en CMS Portal Legado](#destacar-promociones-en-cms-portal-Legado)
     - [Plantilla de página](#plantilla-de-pagina) 
     - [Plantilla de estantería de productos](#plantilla-de-estanteria-de-productos)

## Promociones que se pueden destacar
El destaque de promoción puede aplicarse a diferentes tipos de promociones y descuentos. Este destaque se mostrará en las estanterías y páginas de productos, alertando a los clientes que el artículo forma parte de una promoción especial.

Los siguientes tipos de descuentos son elegibles para la aplicación de un destaque:

- [Descuento porcentual](https://help.vtex.com/es/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): ofrece una reducción porcentual en el valor del producto.
- [Descuento porcentual en el envío](https://help.vtex.com/es/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): aplica un descuento en parte del costo de envío, permitiendo que los clientes paguen menos por el envío e incentivando la decisión de compra.
- [Envío máximo](https://help.vtex.com/es/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): establece un valor máximo para el costo de envío, independientemente de factores como la distancia o el peso del pedido.
- [Envío gratuito](https://help.vtex.com/es/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): elimina completamente el costo de envío.
- **Regalo**: ofrece un producto adicional sin costo al cliente al comprar un determinado artículo o alcanzar un valor mínimo de compra.

Para más información, consulta [Promociones](https://help.vtex.com/es/subcategory/promocoes--1yTYB5p4b6iwMsUg8uieyq).

## Restricciones

No pueden destacarse promociones que tengan alguna restricción en el carrito, como por ejemplo:

- Rango de códigos postales
- Valor agregado de las compras
- BIN
- Clúster de clientes
- Método de envío
- Medio de pago
- Número máximo de cuotas, solo en la primera compra

Estas promociones no se aplican a todos los clientes y requieren que se proporcione información adicional (como el código postal) para que sean válidas. Por lo tanto, no se podrá destacar la promoción en estos casos.

## Configurar la promoción

Sigue las instrucciones a continuación para configurar promociones destacadas en tu tienda.

1.  En el Admin VTEX, accede a **Promociones > Promociones** o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2.  Busca la promoción que deseas configurar.
3.  En la opción **Promoción destacada**, selecciona **Sí**.
4.  Configura la promoción con las especificaciones deseadas.
5.  Haz clic en el botón `Guardar`.
6. Sigue las instrucciones correspondientes a la tecnología frontend utilizada por tu tienda:

- [Store Framework](#promociones-destacadas-en-store-framework)
- [CMS Portal Legado](#promociones-destacadas-en-cms-portal-legado)

## Promociones destacadas en Store Framework

Para tiendas desarrolladas con Store Framework, después de configurar la promoción destacada, sigue las instrucciones de la documentación del componente [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights).

## Destacar promociones en CMS Portal Legado

Para tiendas CMS Portal Legado, tras configurar la promoción destacada, configura la [plantilla de página](#plantilla-de-pagina) y la [plantilla-de-estantería de productos](#plantilla-de-estanteria-de-productos) en el módulo CMS. Además, el CSS debe estar configurado para esta función.

### Plantilla de página

Esta configuración consiste en editar la plantilla de la página utilizada para el layout de la página de producto e incluir la tag`<vtex.cmc:discountHighLight/>`.

1. En el Admin VTEX, accede a **Storefront > Layout**, o ingresa **Layout** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en **CMS > Sites and channels**.
3. Haz clic en el nombre del **site** deseado.
4. Haz clic en **/ > Producto > @Producto@**.
5. En el menú lateral, haz clic en el layout marcado con una marca de verificación roja.

    ![template-pagina](//images.ctfassets.net/alneenqid6w5/37poO6Jxhn6Mc1nLeMIbB1/d973bfb36abeb7dece6959e78f60b0a6/template-pagina.gif)

6. En el campo __Template__, marca el nombre de la plantilla utilizada:

    ![template-produto](//images.ctfassets.net/alneenqid6w5/3GST4wBaoqbW84ryZ7y1Y5/5d4f8d0a77b694363d61a2847417a28c/template-produto.png)

7. En el menú lateral, haz clic en **HTML Templates > @Producto@**.

    ![save-template](//images.ctfassets.net/alneenqid6w5/5n0wxeIf8uVM26GRVkQ5Ty/dadb250a79ceb1e06ac4a49e5c738e30/save-template.gif)

8. Haz clic en la plantilla que se encuentra en **@Producto@**.
9. Ingresa el código `<vtex.cmc:discountHightLight/>` de acuerdo con tu estructura HTML.
10. Haz clic en **Save Template**.

### Plantilla de estantería de productos

1.  En el Admin VTEX, accede a **Storefront > Layout**, o ingresa **Layout** en la barra de búsqueda de la parte superior de la página.
2.  Haz clic en **CMS > Shelves Templates**.

    ![shelves-templates](//images.ctfassets.net/alneenqid6w5/9F4rv410hc9HxXowv9EAX/ab9c6b2d2e213cf3481ed56ede0404ac/shelves-templates.png)

3.  Haz clic en la plantilla deseada.
4.  Ingresa el código `$product.DiscountHightLight`.
5.  Haz clic en **Save Template**.

Una vez que hayas realizado los ajustes en el Admin VTEX y agregado las tags correspondientes en las plantillas, se generará automáticamente en el HTML una clase CSS con el nombre de cada promoción que cumpla los requisitos. Por ejemplo, si la promoción se llama "BlackFriday", se creará una clase llamada `.BlackFriday` en el HTML del producto o estantería.

Con la clase generada, debes definir tus estilos CSS, personalizando un texto o una imagen para la flag directamente en las plantillas.
