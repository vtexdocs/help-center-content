---
title: 'Pedidos: visualização de promoção por item disponível para todas as lojas'
createdAt: 2026-09-18T12:00:00.000Z
updatedAt: 2026-09-18T12:00:00.000Z
contentType: updates
productTeam: Order Management
slugEN: orders-item-level-promotions-display-general-availability
locale: pt
announcementSynopsisPT: 'A visualização de promoções por item nos detalhes do pedido sai do beta aberto e passa a estar disponível para todas as lojas VTEX.'
tags:
  - Nova funcionalidade
  - Admin
  - Pedidos
---

A visualização de promoções por item no módulo **Pedidos** do Admin VTEX agora está em disponibilidade geral para todas as lojas, em todas as regiões. O recurso, [lançado em beta aberto](https://help.vtex.com/pt/announcements/2026-07-31-pedidos-nova-visualiza%C3%A7%C3%A3o-de-promo%C3%A7%C3%A3o-por-item-beta-aberto-) em julho de 2026, mostra quais promoções foram aplicadas a cada item de um pedido e quais benefícios de carrinho esses itens acionaram, diretamente na tela de detalhes do pedido.

## O que mudou?

Durante o beta aberto, a visualização de promoções por item precisava ser habilitada mediante solicitação ao Suporte VTEX. Agora, ela está ativa por padrão em todas as contas VTEX, sem necessidade de abertura de chamado.

Com o recurso, você vê, em cada item do pedido:

- **Selo de promoções:** um selo verde ao lado da linha do produto indicando que uma ou mais promoções foram aplicadas. Quando há várias promoções, o selo exibe a quantidade. Itens de brinde (de promoções do tipo Compre e ganhe) exibem um selo Brinde.
- **Popover de promoções:** ao passar o cursor sobre o selo, abre-se um detalhamento com o tipo, o nome e o valor de desconto de cada promoção, além de um Desconto total quando há mais de uma promoção aplicada. As promoções são separadas em duas seções: **Promoções aplicadas ao item** e **Promoções aplicadas ao carrinho**.
- **Preço riscado:** o preço de tabela original aparece riscado ao lado do preço efetivo (com desconto).

A exibição aparece nos itens de linha do produto em pacotes sugeridos, notas fiscais emitidas, itens devolvidos e pacotes de notificação para ERP, no modal **Todos os itens** e no fluxo de criação de nota fiscal. Ela reconhece os seguintes tipos de promoção: Regular, Desconto progressivo, Compre junto, Mais por menos, Compre e ganhe e Campanha.

> ℹ️ O módulo **Pedidos** exibe o resultado das promoções que já foram aplicadas durante o checkout. Ele não cria nem gerencia promoções. Para configurar promoções, use o módulo [Promoções](https://help.vtex.com/pt/docs/tutorials/how-promotions-work--tutorials_2298).

## Por que fizemos essa mudança?

O período de beta aberto permitiu validar o recurso com lojas de diferentes perfis e ajustar a experiência antes da liberação para todas as contas. Com a disponibilidade geral, todas as operações de loja passam a ter visibilidade completa de como os descontos afetam um pedido sem sair da tela de detalhes. As principais vantagens são:

- Detalhamento de quais promoções se aplicam a cada item e de quanto cada uma desconta.
- Visão clara dos benefícios de carrinho, como descontos de frete, acionados pelos itens do pedido.
- Verificação mais rápida do preço efetivo de um pedido antes de emitir notas fiscais ou processar devoluções.

## O que precisa ser feito?

Nenhuma ação é necessária. A visualização de promoções por item já está disponível em todas as lojas VTEX. Para conferir, acesse um pedido em **Pedidos** > **Todos os pedidos** no Admin VTEX e passe o cursor sobre o selo de promoções ao lado de um item com desconto.

Para saber mais sobre os detalhes de um pedido, confira [Detalhes do pedido](https://help.vtex.com/pt/docs/tutorials/pagina-de-detalhes-do-pedido).
