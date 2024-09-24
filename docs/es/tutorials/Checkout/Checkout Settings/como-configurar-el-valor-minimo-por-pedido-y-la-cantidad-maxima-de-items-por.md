---
title: 'Cómo configurar el valor mínimo por pedido y la cantidad máxima de ítems por SKU'
id: 7JqipPUBxtKz0m4OlAyKs9
status: PUBLISHED
createdAt: 2020-05-29T16:17:01.837Z
updatedAt: 2023-03-23T16:58:55.153Z
publishedAt: 2023-03-23T16:58:55.153Z
firstPublishedAt: 2020-05-29T17:17:02.105Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-to-configure-minimum-order-value-and-maximum-quantity-of-items-per-sku
locale: es
legacySlug: como-configurar-el-valor-minimo-por-pedido-y-la-cantidad-maxima-de-items-por
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

En las operaciones de comercio electrónico, el costo logístico de la entrega de productos es fundamental para mantener la competitividad. Y este costo está fuertemente impactado por dos variables:

- El valor del carrito.
- La cantidad de ítems del mismo SKU por carrito.

Para las tiendas que realizan con frecuencia, la entrega de artículos en lotes (decenas o cientos de unidades), entregando un pedido con pocos artículos o de bajo valor, puede ser menos rentable e ineficiente desde el punto de vista logístico. Por lo tanto, establecer un valor mínimo de pedido puede ayudar a mejorar ambos factores.

En las operaciones B2B, existe la necesidad de mantener relaciones con los compradores que requieren entregas periódicas o previamente acordadas, aunque la demanda supere las expectativas. En esta situación, establecer una cantidad máxima de artículos del mismo SKU para cada pedido ayuda a no comprometer una cantidad excesiva de artículos del mismo SKU en stock. Al igual que cuando su tienda tiene un producto escaso, vendido a un precio competitivo, y desea asegurarse de que todos sus clientes tengan acceso a ese producto.

## Definir un valor mínimo por pedido

1. En el Admin VTEX, accede a __Configuración de la tienda > Pedidos > Configuración__, o escribe __Pedidos__ en la barra de búsqueda en la parte superior de la página y busca la opcion __Configuración de la tienda / Pedidos__.
2. En la pestaña __General__, complete el valor deseado en el campo __Valor total mínimo en el carrito__.
3. Haga clic en `Guardar`.

![Minimum Order Value - ES](//images.ctfassets.net/alneenqid6w5/6bJ49E109ewRg9VUoP16rP/3571a12b0a5367cc62e982c04e8e7ece/Minimum_Order_Value_-_ES.png)

>⚠️ El cliente tiene permitido armar un carrito con un valor menor al especificado en la regla "Valor mínimo total de la compra". Sin embargo, en el momento de finalizar la compra, sólo se completarán los pedidos que sean iguales o superiores al valor especificado.

## Definir una cantidad máxima de ítems del mismo SKU por carrito

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página y busca la opcion __Configuración de la tienda / Pedidos__.
2. En la pestaña __General__, complete el valor deseado en el campo __Cantidad máxima de un mismo SKU en el carrito__.
3. Haga clic en `Guardar`.

![Cantidad máxima de un mismo SKU en el carrito](//images.ctfassets.net/alneenqid6w5/Tb4rS7FposwzygY5HlEpr/cfcc10ac1d2bccfb10fcd174d832f3f3/Quantidade_Maxima_de_um_mesmo_SKU_no_carrinho_ES.png)

>⚠️ No hay límites en el número máximo de ítems **del mismo SKU** por carrito. La única restricción se refiere al número máximo de ítems de **SKUs diferentes**, que debe ser un máximo de 300 ítems por carrito.

Si desea utilizar acciones que eviten que el usuario exceda los valores especificados incluso durante el flujo de compra (por ejemplo, crear un bloqueo de botón del carrito cuando se alcance la cantidad máxima de artículos), será necesario crear una personalización en la parte delantera de la tienda.

