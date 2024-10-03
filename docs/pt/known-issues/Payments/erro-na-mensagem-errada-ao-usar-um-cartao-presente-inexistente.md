---
title: 'Erro na mensagem errada ao usar um cartão presente inexistente'
id: 6Bxu8UsBv4OE1pusXz0j7j
status: PUBLISHED
createdAt: 2022-05-23T19:32:47.312Z
updatedAt: 2022-11-25T22:06:02.961Z
publishedAt: 2022-11-25T22:06:02.961Z
firstPublishedAt: 2022-05-23T19:32:47.758Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: wrong-message-error-when-using-a-nonexisting-gift-card
locale: pt
kiStatus: Backlog
internalReference: 584102
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


há um manuseio incorreto de um dos erros do sistema de cartões-presente da VTEX. Quando o usuário estiver preenchendo o código de resgate do cartão-presente no checkout, se o usuário preencher um código de compra que não existe, ao invés de ser informado que o código é inválido, o seguinte erro será exibido no checkout "_Ocorreu um erro de comunicação com o sistema de cartão-presente_". Mas, na verdade, não há problema de conexão, é apenas que o vale não existe.



## Simulação



1. Ir para a página de checkout de uma loja já configurada para processar cartões-presente como forma de pagamento
2. Selecione Gift card como forma de pagamento e preencha um código de resgate claramente não existente (Ex: aaaaaa)
3. Feche a compra e a mensagem de erro será exibida na página de checkout.



## Workaround


N/A

