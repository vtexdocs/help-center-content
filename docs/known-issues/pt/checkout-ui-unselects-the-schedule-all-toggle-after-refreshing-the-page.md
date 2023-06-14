---
title: 'Checkout UI desmarca a opção "Schedule all" após refrescar a página'
id: 28TIselp0EzU3iSD4kLJgX
status: PUBLISHED
createdAt: 2023-04-04T21:08:55.937Z
updatedAt: 2023-04-06T17:51:41.231Z
publishedAt: 2023-04-06T17:51:41.231Z
firstPublishedAt: 2023-04-04T21:08:56.349Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-ui-desmarca-a-opcao-schedule-all-apos-refrescar-a-pagina
locale: pt
kiStatus: Backlog
internalReference: 784693
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Checkout UI desmarca a opção "Schedule all" na etapa de envio depois de atualizar a página, mesmo que a API ainda esteja selecionada. Este comportamento não tem impacto; o pedido terá a entrega programada selecionada.


##

## Simulação



- Adicionar um item que tenha entrega programada e regular;
- Selecione a entrega programada, preencha todas as informações, e vá para Pagamentos;
- Volte para Envio e atualize a página;
- O "Programar tudo" não será selecionado.


##

## Workaround


N/A



