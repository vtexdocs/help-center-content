---
title: 'O logotipo do vendedor não está sendo salvo como um URL'
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
slug: o-logotipo-do-vendedor-nao-esta-sendo-salvo-como-um-url
locale: pt
kiStatus: Fixed
internalReference: 736716
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



As informações do logotipo do vendedor no banco de dados não estão sendo salvas como uma URL, mas como uma imagem.

Atualmente, nossa documentação do formulário de pedido afirma que este campo deve ser uma URL:
https://developers.vtex.com/docs/guides/orderform-fields#sellers
 ![](https://vtexhelp.zendesk.com/attachments/token/SNx3LvZCcZAZHXrEnMaa5EUkh/?name=image.png)

Mas em nosso banco de dados está sendo gravado em um formato diferente.



##

## Simulação



1. Defina um logotipo para um vendedor via UI ou API;
2. Verifique via GET Seller API (https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/-accountName-.-environment-.com.br/api/seller-register/pvt/sellers/-sellerId-) o formato do campo "UrlLogo".
3. Verifique no formulário de pedido se também não será um URL.


##

## Workaround


Nenhuma solução.




