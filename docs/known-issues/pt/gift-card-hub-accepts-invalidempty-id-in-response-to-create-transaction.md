---
title: 'O HUB do Gift Card aceita ID inválida/vazia em resposta à criação da transação'
id: 3ODSXijmpvkk55FUqMcGvQ
status: PUBLISHED
createdAt: 2023-07-05T12:50:36.661Z
updatedAt: 2023-07-05T12:51:07.938Z
publishedAt: 2023-07-05T12:51:07.938Z
firstPublishedAt: 2023-07-05T12:50:37.274Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-hub-do-gift-card-aceita-id-invalidavazia-em-resposta-a-criacao-da-transacao
locale: pt
kiStatus: Backlog
internalReference: 855864
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A documentação do protocolo do nosso provedor de cartão-presente especifica que a API de criação de transação deve incluir um ID válido na resposta. No entanto, a implementação atual do protocolo permite que os provedores respondam a essa solicitação com um ID vazio ou inválido. Como resultado, ao tentar liquidar o pagamento, a transação fica presa porque a ID necessária está faltando. Isso faz com que um erro seja lançado e a transação permaneça presa no processo.

## Simulação


Responda à chamada de criação de transação com um ID inválido e tente concluir uma transação.



## Workaround


N/A





