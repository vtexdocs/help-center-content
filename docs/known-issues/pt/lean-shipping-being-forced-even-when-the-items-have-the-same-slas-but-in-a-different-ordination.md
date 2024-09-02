---
title: 'O envio enxuto é forçado mesmo quando os itens têm os mesmos SLAs, mas em uma ordenação diferente'
id: 2YTqsVWPm73msQZVQX9x80
status: PUBLISHED
createdAt: 2022-05-13T17:26:15.513Z
updatedAt: 2023-09-11T21:38:39.068Z
publishedAt: 2023-09-11T21:38:39.068Z
firstPublishedAt: 2022-05-13T17:26:16.378Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-envio-enxuto-e-forcado-mesmo-quando-os-itens-tem-os-mesmos-slas-mas-em-uma-ordenacao-diferente
locale: pt
kiStatus: Fixed
internalReference: 455218
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns cenários, é possível que, mesmo que o recurso LeanShipping esteja desativado nas configurações, o sistema ainda considere necessário agrupar as opções de envio e, com isso, não desative o LeanShipping, isso porque a regra usada pelo sistema para definir o uso ou não do LeanShipping além da configuração está ativada ou desativada e há SLAs iguais ou diferentes disponíveis para os itens do carrinho;
No entanto, há cenários em que apenas a ordem de como os SLAs são entregues faz com que o sistema entenda que são SLAs diferentes e ative o leanShipping no checkout e comece a exibir as etiquetas mais rápidas e mais baratas para o método de envio.

## Simulação


Não há uma maneira linear de replicar o cenário, mas ele pode ocorrer sempre que tivermos um carrinho com dois ou mais itens cujos slas sejam semelhantes entre os itens e que estejam sendo apresentados em ordens diferentes dentro do objeto sla de cada item

## Workaround


N/A




