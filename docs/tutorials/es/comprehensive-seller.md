---
title: 'Seller de extensa cobertura'
id: 5Qn4O2GpjUIzWTPpvLUfkI
status: PUBLISHED
createdAt: 2021-09-27T17:51:50.695Z
updatedAt: 2023-02-23T15:06:08.007Z
publishedAt: 2023-02-23T15:06:08.007Z
firstPublishedAt: 2021-09-27T19:07:23.186Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: seller-de-extensa-cobertura
legacySlug: seller-de-extensa-cobertura
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

Las tiendas VTEX están preparadas para funcionar de forma nativa como _marketplaces_ y así vender productos de otras tiendas, denominadas _sellers_. En este modelo, los clientes de la tienda tienen acceso a productos de diferentes vendedores. VTEX tiene criterios definidos para hacer que los productos de varios vendedores estén disponibles en la vitrina de tu tienda. 

Uno de los criterios utilizados por VTEX es la región que atiende el _seller_ y se denomina _seller_ de extensa cobertura. En este sentido, la configuración de _sellers_ de extensa cobertura contribuye a una mejor experiencia de compra para los clientes del _marketplace._

Para que entiendas los detalles del _seller_ de extensa cobertura, este artículo tratará:

* [Qué es el seller de extensa cobertura](#que-es-el-seller-de-extensa-cobertura);
* [Cuándo definir un seller de extensa cobertura](#cuando-es-el-seller-de-extensa-cobertura);
* [Cómo utiliza la plataforma VTEX esta información](#como-utiliza-la-plataforma-vtex-esta-informacion).

## Qué es el _seller_ de extensa cobertura

_Seller_ de extensa cobertura es la configuración que permite que los ítems de un _seller_ estén disponibles para los clientes cuya navegación no tiene la ubicación definida. Esta configuración impide que se muestren productos a los clientes que están fuera del área de cobertura del _seller_

Por ejemplo, imagina que tu tienda tiene productos de diferentes _sellers_. Algunos _sellers_ entregan en cualquier parte del país, otros solo en una ciudad o región. Si un cliente navega por el sitio web de tu tienda sin proporcionar información sobre su ubicación, los productos que no pueden entregarse en el código postal del cliente pueden aparecer como disponibles y el cliente solo sabrá que esos artículos no están disponibles al final de la compra. 

## Cuándo definir un _seller_ de extensa cobertura

Para definir a un _seller_ como de extensa cobertura, este debe tener un área de entrega significativa para la operación de tu tienda. Esto es importante porque cuando el cliente navega por la tienda sin informar previamente de su ubicación, se le mostrarán los productos del _seller_ principal (_seller_ 1) y de los _sellers_ de extensa cobertura. 

Así, si los _sellers _registrados como de extensa cobertura no cumplen con las condiciones de entrega ​de al menos la mayoría de los clientes, estos no verán satisfechas sus expectativas durante la compra.

Recomendamos utilizar la configuración de _seller_ de extensa cobertura para los _sellers_ que realizan entregas en todo el país.

## Cómo utiliza la plataforma VTEX esta información

Cuando todavía no hay información sobre la ubicación del cliente, la heurística de selección de _sellers_ muestra solo los productos del _seller_ principal (_seller_ 1) y de los _sellers_ de extensa cobertura.

Esto ocurre tanto durante la navegación como en el carrito, con el objetivo de evitar que el cliente vea productos de vendedores que no entregan en su dirección.

<div class = "alert alert-info">
Aunque durante la navegación la información sobre la ubicación del cliente se haya capturado y almacenado en el campo <code>regionId</code> de la API de Sesión, la ubicación no se utiliza en el carrito. Solo los productos del seller principal y de los sellers de extensa cobertura estarán disponibles para el cliente en el carrito. Los productos de otros sellers solo estarán disponibles después de que el cliente indique el código postal de entrega en el checkout.
</div>

En los casos de más de un *seller* de extensa cobertura registrado, el *checkout* selecciona el que tiene mayor saldo en stock para el artículo en cuestión, entre todos los *seller* de extensa cobertura. Aprende más en [Selección de sellers white label](https://help.vtex.com/es/tutorial/algoritmo-de-selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa).

## Cómo habilitar un _seller_ de extensa cobertura

La habilitación del _seller_ de extensa cobertura se realiza mediante API:

* Al crear el _seller_, mediante la [API de creación](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers);
* O al actualizar un _seller _existente, a través de la [API de actualización](https://developers.vtex.com/docs/api-reference/marketplace-apis#patch-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-).

En ambos casos es necesario activar la propiedad `isBetterScope`. Cuando la propiedad está activada (`true`), la plataforma interpreta que el _seller _entrega en toda la región de cobertura de la tienda, lo que permite que los ítems estén disponibles incluso sin que esté definida la ubicación.

