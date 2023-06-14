---
title: 'Os pagamentos de débito usando o conector Firstdata não podem ser liquidados devido a um erro no campo TransactionState'
id: 6imTj4PTpJGGFqyhSLTPu9
status: PUBLISHED
createdAt: 2022-03-03T21:59:55.119Z
updatedAt: 2022-11-25T22:05:01.885Z
publishedAt: 2022-11-25T22:05:01.885Z
firstPublishedAt: 2022-03-03T21:59:55.506Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: os-pagamentos-de-debito-usando-o-conector-firstdata-nao-podem-ser-liquidados-devido-a-um-erro-no-campo-transactionstate
kiStatus: Backlog
internalReference: 461095
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao utilizar o conector Firstdata para processar pagamentos de débito, nosso código espera que o campo `TransactionState` seja "CAPTURADO". Entretanto, o provedor está enviando "CAPTURED", bem como "SETTLED", o que desencadeia um erro:

Mensagem: Unknown Error on AutoSettleHá um erro no documento XML (1, 745).
&
Erro ao executar a operação de liquidação. Por favor, veja a exceção interna. Conector = Primeiros dados. Mensagem = A cadeia de entrada não estava em um formato correto.

Não consegui encontrar na documentação dos primeiros dados qual é a correta, mas existem exemplos para ambos.



## Simulação



Às vezes, quando uma transação é cancelada usando este conector, é possível observar este comportamento.



## Workaround


Não há nenhuma solução disponível.

