---
title: 'Divergencia entre el valor total de cada producto y el subtotal de los artículos o totalizadores'
id: 2Z8vR0cKkaSYQqF9MUX8PX
status: PUBLISHED
createdAt: 2022-01-24T20:46:09.666Z
updatedAt: 2022-11-25T22:40:22.075Z
publishedAt: 2022-11-25T22:40:22.075Z
firstPublishedAt: 2022-08-15T17:25:50.536Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divergencia-entre-el-valor-total-de-cada-producto-y-el-subtotal-de-los-articulos-o-totalizadores
locale: es
kiStatus: Backlog
internalReference: 331188
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.

En algunos casos, el valor total del pedido difiere de la suma del valor total de los productos (añadiendo también los gastos de envío y los posibles descuentos, si los hay). Esto ocurre porque el valor mostrado de los artículos forma parte del "sellingPrice", una información del orderForm que pierde precisión por motivos de redondeo.

Nota: La causa conocida también puede estar relacionada con la existencia de productos con una unidad multiplicadora distinta de 1 en el pedido.

Un pequeño complemento es que esto genera el efecto secundario de que los descuentos/promociones no aparecerán aplicados a los artículos, que seguirán con su precio original, apareciendo sólo en los totalizadores.

Los detalles introducidos también afectan a la UI de los pedidos en el admin (OMS, que muestra el mismo tipo de divergencia) y pueden afectar al JSON de los pedidos.

En el caso del JSON de las órdenes, la información "sellingPrice" no debe utilizarse debido a su falta de precisión. Debe sustituirse por el "precio" (precio unitario) de los artículos, junto con la cantidad comprada y la posible existencia de un multiplicador unitario, y también sumar/restar de las "priceTags" (que son modificadores de precio, luego descuentos/adiciones). Sin embargo, obtener el valor unitario a partir de este cálculo del valor total también puede dar lugar a problemas de redondeo.

Nota: Al igual que el "sellingPrice", el "precio" de los "priceTags" se redondea y puede ser inexacto. Para buscar la precisión y tener los valores correspondientes a los totalizadores, se debe utilizar el rawValue del "priceTags", que tiene 5 decimales de precisión.

## Simulación

N/A

## Workaround


Personalizar el CSS para ocultar/mostrar los diferentes valores que la plataforma ya proporciona. Ejemplo:

.cart-items .best-price .new-product-real-price,
.cart-items .quantity-price .total-price,
.mini-cart .item-price {
    display: inline-block !important;
}
.cart-items .best-price .new-product-price,
.cart-items .best-price .discount,
.cart-items .quantity-price .total-selling-price,
.mini-cart .price {
    display: none !important;
}

Como resultado, el carro de la compra y el minicarro se basarán en el **precio** y no en el **precio de venta**.

