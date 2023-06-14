---
title: 'Limitações do campo isValueChangeable para transações com minimumValue de 0,01'
id: 3Upg1JbyotDHZwfCLAD7v4
status: PUBLISHED
createdAt: 2023-05-12T19:59:34.646Z
updatedAt: 2023-05-12T19:59:35.064Z
publishedAt: 2023-05-12T19:59:35.064Z
firstPublishedAt: 2023-05-12T19:59:35.064Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: limitacoes-do-campo-isvaluechangeable-para-transacoes-com-minimumvalue-de-001
locale: pt
kiStatus: Backlog
internalReference: 825122
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há apenas duas maneiras de alterar o campo `isValueChangeable` de uma transação: quando ocorre uma divisão e quando o `maximumValue` é igual ao `minimumValue`. Além disso, vale a pena observar que toda transação é criada com um `minimumValue` de 0,01. Como resultado, quando uma transação é criada com um valor de 0,01, o campo `isValueChangeable` é automaticamente definido como `false`.

## Simulação


Crie uma transação com um valor de 0,01 e acesse a rota /capabilities.



## Workaround


N/A





