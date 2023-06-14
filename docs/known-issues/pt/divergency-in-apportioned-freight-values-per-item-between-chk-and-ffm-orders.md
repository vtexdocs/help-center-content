---
title: 'Divergência nos valores de frete rateados por item entre os pedidos CHK e FFM'
id: 6v4Fero4fkOw3omZOl21Xf
status: PUBLISHED
createdAt: 2022-01-24T20:24:18.002Z
updatedAt: 2022-11-25T21:51:48.780Z
publishedAt: 2022-11-25T21:51:48.780Z
firstPublishedAt: 2022-06-29T13:12:57.139Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divergencia-nos-valores-de-frete-rateados-por-item-entre-os-pedidos-chk-e-ffm
locale: pt
kiStatus: Backlog
internalReference: 321111
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos, os valores de remessa repartidos por item entre o mercado (lado do checkout) e o vendedor (lado do cumprimento) os pedidos podem ser divergentes.

O motivo não está completamente claro, mas parece acontecer apenas com pedidos do "vendedor 1" (onde Marketplace e Fultillment são o mesmo) e em itens que foram divididos por causa de descontos - quando a quantidade final é apresentada entre mais de um item, para garantir o valor final desejado do desconto.

Pode ser um problema ao integrar ordens (devido à divergência), ou ao faturar ordens, porque o valor faturado não corresponde ao valor total em um dos lados (Mercado ou Cumprimento).



## Simulação


Não há maneira conhecida de reproduzir a questão, mas você pode se referir a ordens antigas onde a questão aconteceu.



## Workaround


Não há nenhuma solução conhecida.

