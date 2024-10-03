---
title: 'Mudanças no orderPlaced proporcionam dados mais precisos no Google Analytics'
id: 4u1VqmUtriycuukqqcSKaA
status: PUBLISHED
createdAt: 2018-09-04T20:11:58.119Z
updatedAt: 2019-12-31T15:12:58.712Z
publishedAt: 2019-12-31T15:12:58.712Z
contentType: updates
productTeam: Channels
author: authors_24
slugEN: 2018-09-04-changes-in-the-orderplaced-provide-more-precision-to-google-analytics-data
locale: pt
legacySlug: mudancas-no-orderplaced-proporcionam-dados-mais-precisos-no-google
announcementImageID: ''
announcementSynopsisPT: 'Pedidos com produtos de mais de um seller agora geram um único evento no Google Analytics.'
---

A página de confirmação de pedido (também conhecida como orderPlaced) recebeu uma série de melhorias no data layer. As mudanças corrigem as redundâncias que existiam na criação de eventos no Google Analytics.


## O que mudou
Antes, o orderPlaced criava eventos separados para pedidos que continham produtos de dois ou mais sellers diferentes. Isso significava que um mesmo pedido poderia gerar diversos eventos, multiplicando a quantidade de dados e tornando-os pouco confiáveis.

Para resolver isso, fizemos uma mudança na __versão 4 do orderPlaced__. Agora, a criação de eventos no Google Analytics está condicionada ao parâmetro `orderGroup`. Veja abaixo os detalhes da mudança:

`transactionId`: agora é o orderGroup.

`transactionTotal`: valor da soma de todas as transações de todos os pedidos do orderGroup.

`transactionShipping`: valor da soma de todos os fretes dos pedidos do orderGroup.

`transactionTax`: valor da soma de todas as taxas dos pedidos do orderGroup.

`transactionPaymentType`: retorna uma lista de objetos (que são os tipos de pagamentos de todos os pedidos do orderGroup) no seguinte formato:
```json
{ 
       group: p.group,    
       paymentSystemName: p.paymentSystemName,    
       installments: p.installments,    
       value: p.value 
}
```

`transactionShippingMethod`: retorna uma lista de objetos (que são os tipos de entrega de todos os pedidos do orderGroup) no seguinte formato:
```json
{    
        itemId: l.itemId,    
        selectedSla: l.selectedSla,    
}
```

`transactionProducts`: retorna os produtos de todos os pedidos do orderGroup.


## Principais vantagens
As melhorias atendem principalmente a cenários em que um mesmo pedido possui produtos que serão entregues por sellers diferentes. Pedidos com essas características agora geram dados mais limpos no Google Analytics, o que proporciona uma visão mais precisa do comportamento de compra dos seus clientes.


## O que você precisa fazer
Essa mudança __não requer__ nenhum tipo de ação. Se a sua loja já usa a __versão 4 do orderPlaced__, que é compatível com todas as funcionalidades de [Omnichannel](/pt/announcement/mude-seu-negocio-com-a-experiencia-omnichannel-vtex), o novo comportamento já está sendo aplicado.


>⚠️ Essa mudança foi realizada **apenas na versão 4 do orderPlaced** e não afeta o comportamento das versões anteriores.

