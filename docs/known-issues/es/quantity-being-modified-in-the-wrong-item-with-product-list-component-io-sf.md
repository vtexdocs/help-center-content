---
title: 'Modificación de la cantidad en un artículo erróneo con un componente de lista de productos (IO/SF)'
id: jWaas8MOVv5NYSImgA9ao
status: PUBLISHED
createdAt: 2022-12-16T18:10:39.004Z
updatedAt: 2022-12-16T18:41:03.772Z
publishedAt: 2022-12-16T18:41:03.772Z
firstPublishedAt: 2022-12-16T18:22:18.673Z
contentType: knownIssue
productTeam: Store Framework
author: authors_84
tag: Store Framework
slug: modificacion-de-la-cantidad-en-un-articulo-erroneo-con-un-componente-de
locale: es
kiStatus: Backlog
internalReference: 402976
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

En el componente ["vtex.product-list"](https://github.com/vtex-apps/product-list), utilizado en IO/SF Minicart ([vtex.minicart](https://github.com/vtex-apps/minicart) v2) o en "Cart v0" ([vtex.checkout-cart](https://github.com/vtex-apps/checkout-cart)), cuando un carrito tiene el mismo artículo troceado en más de una ocurrencia (por ejemplo cuando se necesita para el prorrateo de descuentos o quizás cuando tiene itemAttachments), para cambiar la cantidad para su segunda ocurrencia se llamará a la API para su primera ocurrencia, por lo que la cantidad sumada para el artículo será incorrecta.

Otros efectos secundarios: este error está cambiando la cantidad para artículos completamente diferentes, o el artículo va a una tercera línea - que desaparece después de recargar la página, por lo que parece algo relacionado con el comportamiento optimista del carrito.

## Simulación

Considerando este carro: [https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1](https://checkoutio.myvtex.com/cart/add/?sku=282&qty=7&seller=1&sc=1)
- las __7 unidades__ se presentarán como `1+6` debido a la promoción (que trocea el artículo para asegurar su precio unitario tras ser redondeado).
- el cambio del __2º__ artículo de 6 a 8 debería dar como resultado `1+8`(__9 unidades__)
- este cambio se está aplicando en el 1er artículo, por lo que se comporta como de 1 a 8
- el resultado final será `8+6` (__14 unidades*__)

*\*Los artículos serán reagrupados por la API ya que el redondeo no es un problema para el precio resultante.*

Si el carrito tiene SKUs completamente diferentes, donde ambos se pueden presentar troceados (3un del SKU A como `1+2` y 3un del SKU B como `1+2`), al cambiar la cantidad por el segundo artículo o en su segunda aparición se comportará como los otros errores mencionados.

## Workaround

N/A

