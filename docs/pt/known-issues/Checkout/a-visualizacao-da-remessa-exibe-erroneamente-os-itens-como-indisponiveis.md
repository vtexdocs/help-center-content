---
title: "A visualização da remessa exibe erroneamente os itens como indisponíveis"
id: 7fuBZqoKnQTMcoEGPntSrl
status: PUBLISHED
createdAt: 2025-03-14T19:41:01.606Z
updatedAt: 2025-03-14T19:41:02.515Z
publishedAt: 2025-03-14T19:41:02.515Z
firstPublishedAt: 2025-03-14T19:41:02.515Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-visualizacao-da-remessa-exibe-erroneamente-os-itens-como-indisponiveis
locale: pt
kiStatus: Backlog
internalReference: 1194442
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos, o componente de visualização de remessa pode exibir informações não sincronizadas do carrinho, o que leva a um estado incorreto que mostra os itens disponíveis como indisponíveis para entrega.

O recarregamento da página corrige as informações de visualização do envio.

## Simulação


O problema pode se apresentar em contextos diferentes, mas pode ser replicado de forma confiável seguindo as etapas abaixo:

- Configure um `maxNumberOfWhiteLabelSellers` de `1`;
- Adicione um item `X` ao carrinho entregue pelo vendedor `A`;
- Adicione o endereço ao componente de visualização do envio;
- Adicione um item ao carrinho que possa ser entregue por um vendedor diferente de `A` que também possa entregar o item `X`;
- Será selecionado um novo vendedor que possa entregar os dois itens;
- A visualização do envio mostrará um item como indisponível para entrega

## Workaround


N/A





