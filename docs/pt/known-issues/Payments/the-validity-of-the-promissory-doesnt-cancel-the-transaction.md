---
title: 'A validade da promissória não cancela a transação'
id: 3mm3tWIDKOAE9b0Yq0Wy70
status: PUBLISHED
createdAt: 2022-03-28T02:33:39.185Z
updatedAt: 2022-11-25T22:06:39.672Z
publishedAt: 2022-11-25T22:06:39.672Z
firstPublishedAt: 2022-03-28T02:33:39.971Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: a-validade-da-promissoria-nao-cancela-a-transacao
locale: pt
kiStatus: Fixed
internalReference: 325491
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se um cliente faz um pedido com as notas a pagar e o pagamento não é feito, a transação não é cancelada pela porta de entrada após a data de vencimento do pagamento. Consequentemente, como a OMS não pode identificar o evento de cancelamento, o pedido não é cancelado.



## Simulação



1. Na Administração, vá para as configurações de afiliação de notas a pagar.
2. No campo **Data de vencimento***, digite 1 e clique em **Salvar***.
3. Faça um pedido com a forma de pagamento das notas a pagar.
4. Observe que a transação não é automaticamente cancelada após a expiração das notas a pagar.



## Workaround


N/A

