---
title: Quando ocorre um erro após a Firstdata aprovar um acordo, a transação não pode ser concluída.
id: 7MITAqam9KWVXrUiNX5Jh0
status: PUBLISHED
createdAt: 2023-02-27T15:48:31.356Z
updatedAt: 2023-02-27T15:48:31.973Z
publishedAt: 2023-02-27T15:48:31.973Z
firstPublishedAt: 2023-02-27T15:48:31.973Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: quando-ocorre-um-erro-apos-a-firstdata-aprovar-um-acordo-a-transacao-nao-pode-ser-concluida
kiStatus: Backlog
internalReference: 760458
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


s vezes, podem ocorrer erros durante o processamento de nossas operações através da porta de entrada. No caso do conector da Firstdata, pode ocorrer um erro imediatamente após a aprovação do acordo do nosso lado. Para resolver isso, precisamos solicitar novamente um acordo. Entretanto, devido à idempotência, o provedor não envia uma resposta "aprovada" novamente, o que pode fazer com que a transação fique presa em um status de "liquidação" até que uma nova atualização de status seja fornecida.


##

## Simulação


Não é possível reproduzir porque é intermitente.


##

## Workaround


Não há solução disponível





