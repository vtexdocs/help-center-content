---
title: A IU de Transação tem atualmente uma limitação onde não pode exibir logs de/interações se a carga útil exceder 5000 linhas.
id: 1hfRLo1OBLqlsR70Os9J7L
status: PUBLISHED
createdAt: 2023-03-27T13:40:46.551Z
updatedAt: 2023-03-27T13:40:47.042Z
publishedAt: 2023-03-27T13:40:47.042Z
firstPublishedAt: 2023-03-27T13:40:47.042Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-iu-de-transacao-tem-atualmente-uma-limitacao-onde-nao-pode-exibir-logs-deinteracoes-se-a-carga-util-exceder-5000-linhas
kiStatus: Backlog
internalReference: 778408
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a API /interações só pode recuperar um máximo de 5000 linhas do arquivo S3 onde todos os dados são armazenados. Isto pode criar um problema quando uma transação gera logs que excedem este limite.


##

## Simulação


Se uma transação gera logs que excedem o limite de 5000 linhas, a API /interações não pode recuperar todos os dados.


##

## Workaround


Se você precisar dos registros que faltam para investigar um problema, entre em contato com nossa equipe de suporte para solicitar uma auditoria diretamente do arquivo S3. Por favor, observe que esta operação tem um custo significativo, portanto nossa equipe analisará e buscará estes dados quando necessário.





