---
title: 'O nome do vendedor não é fornecido em integrações mkp nativas'
id: bPx7CPZEXecgMe2Sscg6k
status: PUBLISHED
createdAt: 2017-12-28T15:21:09.238Z
updatedAt: 2022-12-22T15:10:41.565Z
publishedAt: 2022-12-22T15:10:41.565Z
firstPublishedAt: 2017-12-28T17:27:56.106Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Connections
slug: nome-do-seller-nao-e-fornecido-em-integracoes-mkp-nativas
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao fazer o download dos pedidos vendidos pela loja, o campo *"sellers"* é exibido com os campos *"Id"* e *"Nome"* preenchidos. Por exemplo: *vendedores: [{id: "1", nome: "mitienda", logo: ""}]*

Mas nas ordens integradas pelo MercadoLivre apenas o *"Id"* do vendedor é exibido, já que o campo *"Nome"* retorna null: *vendedores: [{id: "1", nome: null, logo: null }]*

Com a implementação de vários vendedores para fornecedores envolvidos em dropshipping, é necessário lidar com a logística para cada vendedor individual. Para identificar cada um deles, você pode usar o campo *"Nome"* para torná-lo mais amigável, mas este valor não é fornecido quando se origina, por exemplo, de um pedido baixado do Mercado Livre.

## Simulação

1. Faça o download de um pedido da loja com a API GetOrder e mostrará que o valor *Nome* está preenchido. Por exemplo: *vendedores: [{id: "1", nome: "mitienda", logo: ""}]*
2. Faça o download de uma ordem de MercadoLibre com a API GetOrder e mostrará que o valor *Nome* não está preenchido e o valor é null. Por exemplo: *vendedores: [{id: "1", nome: null, logo: ""}]*

## Workaround

Você pode identificar cada vendedor por ID e, em seguida, exibir o nome user-friendly desejado na integração do lado interno.

