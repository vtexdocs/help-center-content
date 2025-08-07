---
title: "Seleção parcial da janela de entrega programada para o mesmo SLA afetando o fluxo de compra"
id: 1xkpnp0vxR0O8sJYARcFJF
status: PUBLISHED
createdAt: 2022-08-11T18:41:25.906Z
updatedAt: 2022-11-25T21:50:45.960Z
publishedAt: 2022-11-25T21:50:45.960Z
firstPublishedAt: 2022-08-11T18:41:26.449Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: selecao-parcial-da-janela-de-entrega-programada-para-o-mesmo-sla-afetando-o-fluxo-de-compra
locale: pt
kiStatus: Backlog
internalReference: 627261
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A alteração do endereço pode alterar as opções de remessa de um item e, naturalmente, pode remover a seleção da janela de entrega para entregas programadas, se as opções forem diferentes.

Em um carrinho com vários itens, quando esta mudança acontece apenas para itens específicos de forma que eles permaneçam no mesmo SLA, mas não todos com janelas de entrega aplicadas, podem ocorrer comportamentos inconsistentes.

Alguns efeitos colaterais conhecidos:

Se o primeiro item de um mesmo método de envio tiver a janela de entrega selecionada, mas outros itens não, o usuário não poderá saber ao mesmo tempo que não será possível avançar no fluxo de compra - devido aos itens sob uma entrega programada, mas sem selecionar sua janela de entrega.

Se o primeiro item não tem sua janela de entrega selecionada, mas qualquer outro tem, a camada frontal pode estar calculando um valor de remessa errado. Este valor será enviado para a camada API, que sempre responderá com um valor diferente/correto. A diferença entre estes valores gerará um loop de pedidos enquanto a janela de entrega não for selecionada, calculando assim os valores corretos a partir do frontend.



## Simulação



- criar um carrinho com três itens, escolhendo também suas opções de envio e janelas de entrega
  - item 1, SLA A
  - item 2, SLA A
  - item 3, SLA B
- mudar para um endereço que colocará o item 1 ou 2 em um SLA diferente
- voltar para o endereço anterior, reabilitando esse item para o SLA A
- neste momento, o item alterado não terá uma janela de entrega, mas o outro terá, o que gera os problemas relatados



## Workaround


N/A

