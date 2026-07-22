---
title: 'Pedidos: nova visualização de promoção por item (beta aberto)'
createdAt: 2026-07-31T00:00:00.000Z
updatedAt: 2026-07-31T00:00:00.000Z
contentType: updates
productTeam: Orders
slugEN: 2026-07-31-orders-new-item-level-promotions-display-open-beta
locale: pt
announcementSynopsisPT: 'O módulo de Pedidos agora mostra quais promoções foram aplicadas a cada item de um pedido, disponível em beta aberto mediante solicitação.'
tags:
  - Beta
  - Pedidos
  - Promoções
---

Estamos lançando uma nova exibição de promoções em **Pedidos** que mostra quais promoções foram aplicadas a cada item de um pedido, além dos benefícios de carrinho que esses itens acionaram. Com essa mudança, operadores de loja passam a ter um detalhamento dos descontos diretamente na tela de detalhes do pedido, sem precisar sair do pedido ou consultar as promoções em outro lugar. Esse recurso está disponível globalmente em beta aberto e precisa ser habilitado mediante solicitação.

## O que mudou?

Antes, os detalhes do pedido não mostravam como uma promoção era distribuída entre cada item. Agora, o módulo de Pedidos exibe as informações de promoção por item, permitindo que você veja exatamente quais promoções foram aplicadas e qual foi o impacto delas.

A exibição de promoções aparece em diferentes áreas dentro de Pedidos:

- **Itens de linha do produto** em pacotes sugeridos, notas fiscais emitidas, itens devolvidos e pacotes de notificação para ERP.
- **Modal Todos os itens**, a lista completa de itens acessada na barra lateral de detalhes do pedido.
- **Fluxo de criação de nota fiscal**, em que cada item exibe um detalhamento de promoções.

Você verá os seguintes elementos:

- **Selo de promoções:** um selo verde ao lado da linha do produto indicando que uma ou mais promoções foram aplicadas. Quando há várias promoções, o selo exibe a quantidade. Itens de brinde (de promoções do tipo Compre e ganhe) exibem um selo **Brinde**.
- **Popover de promoções:** ao passar o cursor sobre o selo, abre-se um detalhamento com duas seções: *Promoções aplicadas ao item* (descontos no nível do item) e *Promoções aplicadas ao carrinho* (descontos de frete e outros descontos no nível do carrinho). Cada linha mostra o tipo de promoção, o nome e o valor do desconto, além de um **Desconto total** quando há mais de uma promoção aplicada.
- **Preço riscado:** o preço de tabela original aparece riscado ao lado do preço efetivo (com desconto).

A exibição reconhece os seguintes tipos de promoção: Regular, Desconto progressivo, Compre junto, Mais por menos, Compre e ganhe e Campanha.

> ℹ️ O Admin de Pedidos exibe o resultado das promoções que já foram aplicadas durante o checkout. Ele não cria nem gerencia promoções. Para configurar promoções, use o módulo [Promoções](https://help.vtex.com/pt/docs/tutorials/how-promotions-work--tutorials_2298).

## Por que fizemos essa mudança?

As principais vantagens da visibilidade completa de como os descontos afetam um pedido sem sair da tela de detalhes são:

- Detalhamento de quais promoções se aplicam a cada item e de quanto cada uma desconta.
- Visão clara dos benefícios de carrinho, como descontos de frete, acionados pelos itens do pedido.
- Verificação mais rápida do preço efetivo de um pedido antes de emitir notas fiscais ou processar devoluções.

## O que precisa ser feito?

Esse recurso está disponível em beta aberto. Para testá-lo, abra um chamado com o [Suporte VTEX](https://help.vtex.com/pt/docs/tutorials/opening-tickets-to-vtex-support) solicitando acesso.
