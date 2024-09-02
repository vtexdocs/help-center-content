---
title: 'MercadoPagoV1 não autoriza transações quando se trata de valor 0 de dados de usuário do telefone.'
id: 2C7ULAPQxqHjn8e1d0StFc
status: PUBLISHED
createdAt: 2023-03-27T15:35:09.810Z
updatedAt: 2023-03-27T15:35:10.936Z
publishedAt: 2023-03-27T15:35:10.936Z
firstPublishedAt: 2023-03-27T15:35:10.936Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: mercadopagov1-nao-autoriza-transacoes-quando-se-trata-de-valor-0-de-dados-de-usuario-do-telefone
locale: pt
kiStatus: Backlog
internalReference: 778611
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Se o checkout do cliente enviar dados do usuário sem validação adequada, como um número de telefone com menos de três dígitos, estes dados são passados para o gateway como está, o que pode causar erros inesperados durante o processamento. Por exemplo, nosso analisador pode acionar uma exceção e cancelar a transação.


##

## Simulação


Para simular esta questão, usamos nosso conector MercadoPagoV1 antigo para fazer um pedido e passamos dados telefônicos do usuário com menos de três dígitos.


##

## Workaround


Infelizmente, não há nenhuma solução neste momento. Para evitar este problema, recomendamos garantir que todos os dados dos usuários sejam devidamente validados antes de serem enviados para o portal.





