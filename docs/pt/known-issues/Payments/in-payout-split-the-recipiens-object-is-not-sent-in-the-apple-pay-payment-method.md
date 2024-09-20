---
title: 'No Payout Split, o objeto recipiens não é enviado no método de pagamento do Apple Pay'
id: MPafkQI7w3q5kGLxQTgjG
status: PUBLISHED
createdAt: 2024-09-09T17:54:39.877Z
updatedAt: 2024-09-09T17:54:41.227Z
publishedAt: 2024-09-09T17:54:41.227Z
firstPublishedAt: 2024-09-09T17:54:41.227Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: no-payout-split-o-objeto-recipiens-nao-e-enviado-no-metodo-de-pagamento-do-apple-pay
locale: pt
kiStatus: Backlog
internalReference: 1094952
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Não é possível criar/enviar objetos de destinatários para o método de pagamento Apple Pay, mesmo com todas as configurações necessárias ativadas.

## Simulação



1. Habilite a divisão de contas a receber em um conector que permita a divisão usando o método de pagamento Apple Pay;
2. Faça uma compra com um item do vendedor, que tem uma comissão;
3. Verifique se no processo em que os destinatários devem ser enviados, na autorização ou captura, o objeto não existe

## Workaround


N/A





