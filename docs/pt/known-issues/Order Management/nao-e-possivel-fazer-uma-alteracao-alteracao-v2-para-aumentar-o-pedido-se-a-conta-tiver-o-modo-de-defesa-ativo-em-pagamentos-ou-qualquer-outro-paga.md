---
title: "Não é possível fazer uma alteração (alteração v2) para aumentar o pedido se a conta tiver o Modo de Defesa ativo em pagamentos ou qualquer outro pagamento!"
id: 2sKCyLWlSU4LDc1Q3ToB4C
status: PUBLISHED
createdAt: 2024-12-26T18:18:49.821Z
updatedAt: 2025-05-09T13:13:44.448Z
publishedAt: 2025-05-09T13:13:44.448Z
firstPublishedAt: 2024-12-26T18:18:50.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: nao-e-possivel-fazer-uma-alteracao-alteracao-v2-para-aumentar-o-pedido-se-a-conta-tiver-o-modo-de-defesa-ativo-em-pagamentos-ou-qualquer-outro-pagamento
locale: pt
kiStatus: Backlog
internalReference: 1155646
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a conta estiver com o DM (Defense Mode) ativado no módulo de pagamento, e tentar fazer uma alteração v2 para aumentar o valor, não será possível prosseguir com a operação, pois o gateway entra em modo retry, aumentando o tempo de resposta para o SOS (SalesOrdemSystem), então o SOS cancela a operação e tenta novamente, são 5 tentativas até que a operação de alteração seja completamente cancelada!

Esse mesmo cenário ocorre quando qualquer método de pagamento exige autorização manual de um usuário e aumenta e causa um atraso na comunicação entre o gateway e o SOS.

## Simulação


Para simular, o gateway deve ter o modo de defesa ativado e tentar fazer uma adição de alteração v2 à solicitação!



## Workaround


Não há solução alternativa para esse cenário, é necessário desativar o DM para que a alteração v2 seja seguida!





