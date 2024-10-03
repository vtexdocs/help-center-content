---
title: 'O campo de número de documento (RUT) está tendo o último dígito excluído aleatoriamente no iOS'
id: 6KcbAWPN3AylZEm6IkSw3I
status: PUBLISHED
createdAt: 2023-10-18T22:53:27.101Z
updatedAt: 2023-10-19T13:02:18.095Z
publishedAt: 2023-10-19T13:02:18.095Z
firstPublishedAt: 2023-10-18T22:53:27.624Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: document-number-field-rut-randomly-getting-last-digit-deleted-on-ios
locale: pt
kiStatus: Backlog
internalReference: 921944
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Somente no Safari/iOS, ao preencher o número do documento e percorrer os campos de dados do cliente, o campo do número do documento (RUT) terá o último dígito excluído.

## Simulação



- Insira um número de documento válido no campo RUT;
- Vá para o campo seguinte (telefone);
- Volte ao campo de documento, exclua e digite o mesmo número;
- Altere a entrada novamente, e o último dígito do campo RUT será excluído

## Workaround


N/A




