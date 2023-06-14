---
title: 'El logotipo del vendedor no se guarda como URL'
id: 2bcjVyapAH9d19w79kOB2b
status: PUBLISHED
createdAt: 2023-01-19T14:36:20.412Z
updatedAt: 2023-04-18T12:16:33.539Z
publishedAt: 2023-04-18T12:16:33.539Z
firstPublishedAt: 2023-01-19T14:36:20.904Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: el-logotipo-del-vendedor-no-se-guarda-como-url
locale: es
kiStatus: Fixed
internalReference: 736716
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



La información del logo del vendedor en la base de datos no se está guardando como una URL, sino como una Imagen.

Actualmente nuestra documentación de formulario de pedido indica que este campo se supone que es una URL:
https://developers.vtex.com/docs/guides/orderform-fields#sellers
 ![](https://vtexhelp.zendesk.com/attachments/token/SNx3LvZCcZAZHXrEnMaa5EUkh/?name=image.png)

Pero en nuestra base de datos se está guardando en un formato diferente.



##

## Simulación



1. Establecer un logotipo para un vendedor a través de UI o API;
2. Compruebe a través de GET Seller API (https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-) el formato del campo "UrlLogo".
3. Compruebe en el formulario de pedido que tampoco sea una URL.


##

## Workaround


No hay solución.




