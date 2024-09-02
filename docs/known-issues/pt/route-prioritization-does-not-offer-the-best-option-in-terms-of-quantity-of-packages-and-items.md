---
title: 'A priorização de rotas não oferece a melhor opção em termos de quantidade de pacotes e itens'
id: 4verafDuoFnC5vGDI4UV1m
status: PUBLISHED
createdAt: 2023-10-30T18:28:52.771Z
updatedAt: 2023-10-30T18:28:53.648Z
publishedAt: 2023-10-30T18:28:53.648Z
firstPublishedAt: 2023-10-30T18:28:53.648Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: a-priorizacao-de-rotas-nao-oferece-a-melhor-opcao-em-termos-de-quantidade-de-pacotes-e-itens
locale: pt
kiStatus: Backlog
internalReference: 927747
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na logística, o primeiro critério de desempate quando o sistema está escolhendo a rota (armazém + doca + política de remessa) está relacionado ao número de pacotes necessários para essa rota específica; menos pacotes significa que a rota deve ser melhor.
No entanto, o sistema não pode considerar a relação entre o número de pacotes e o número de itens em cada pacote.
Isso significa que, por exemplo, um pedido com 2 pacotes e 2 itens pode ser priorizado quando houver uma rota disponível que entregue apenas 1 pacote com todos os itens.

## Simulação


Não há uma maneira fácil de simular esse cenário, pois ele é muito específico e o sistema pode se comportar de maneira diferente em cada caso, mas temos um exemplo bem claro em que o sistema escolhe o SLA que divide o pacote em 2 em vez de oferecer o SLA com apenas 1 pacote

## Workaround


O comerciante pode separar a política de armazém + doca + envio, com nome de método de envio diferente, para não depender da priorização da rota.




