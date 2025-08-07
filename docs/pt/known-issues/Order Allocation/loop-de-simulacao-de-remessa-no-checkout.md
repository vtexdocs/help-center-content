---
title: "Loop de simulação de remessa no checkout"
id: 7IXW5HoKgHLrhjw8fRH36E
status: PUBLISHED
createdAt: 2025-04-02T20:46:36.543Z
updatedAt: 2025-05-30T19:28:43.501Z
publishedAt: 2025-05-30T19:28:43.501Z
firstPublishedAt: 2025-04-02T20:46:37.195Z
contentType: knownIssue
productTeam: Order Allocation
author: 2mXZkbi0oi061KicTExNjo
tag: Order Allocation
slugEN: loop-de-simulacao-de-remessa-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 1204287
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O problema ocorre quando um carrinho de compras, em uma conta configurada para não permitir a divisão de carga, passa pelo fluxo de envio e, inicialmente, apenas alguns dos itens desse carrinho compartilham o mesmo SLA, deixando outros sem uma opção de entrega.

No entanto, durante a etapa de pagamentos, o sistema divide a compra em vários orderForms com base nos IDs de SLA, o que aciona uma nova simulação de frete. Esse recálculo pode tornar disponíveis opções de entrega para itens anteriormente indisponíveis, alterando o preço do carrinho e acionando outra simulação.

O resultado é um loop contínuo, em que o sistema alterna entre estados de entrega possíveis e impossíveis devido a restrições de SLA e divisão de pedidos.

## Simulação


** **
Configuração de uma conta para não permitir divisões de carga (em logística).

Criar um carrinho com itens que tenham SLAs diferentes, resultando na ausência de uma opção de envio para alguns deles.

Prossiga para a etapa de pagamento e veja que o pedido está dividido em vários orderForms.

Verifique se, com essa divisão, novos SLAs são retornados para os itens anteriormente não entregues.

Observe que essa alteração afeta o preço do carrinho, acionando novas simulações e podendo levar o checkout a um loop infinito

## Workaround


** **
Se possível, habilite a permissão de divisão de carga (no sistema de logística)






