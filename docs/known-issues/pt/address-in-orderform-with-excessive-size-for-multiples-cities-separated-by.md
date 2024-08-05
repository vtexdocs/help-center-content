---
title: "Endereço em ordemForma com tamanho excessivo para múltiplas cidades separadas por '::'."
id: 7E6x4O56SxcSeU2qv09GBt
status: PUBLISHED
createdAt: 2023-01-06T11:52:36.229Z
updatedAt: 2023-01-06T13:36:37.250Z
publishedAt: 2023-01-06T13:36:37.250Z
firstPublishedAt: 2023-01-06T13:29:34.607Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: endereco-em-ordemforma-com-tamanho-excessivo-para-multiplas-cidades-separadas-por
locale: pt
kiStatus: Backlog
internalReference: 287854
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos, o Checkout API usa "::" como separador quando há várias possibilidades de cidades do serviço de CEP, causando um erro sobre o tamanho excessivo no endereço de campo, impactando a colocação do pedido. Este comportamento acontece porque a API tem um autocompletar para endereço


##

## Simulação


Considerando a Argentina como um exemplo que se encaixa nesta condição, ao adicionar o código postal 4427 via "vtexjs" ou API você pode ver o endereço definido na ordemFormulário separado por "::"


##

## Workaround


Via API: enviar o parâmetro `"clearAddressIfPostalCodeNotFound": false` na solicitação para evitar que o endereço seja autocompletado
Via "vtexjs": use a função "sendAttachment()" em vez de "calculateShipping()" para que seja possível usar o parâmetro mencionado acima




