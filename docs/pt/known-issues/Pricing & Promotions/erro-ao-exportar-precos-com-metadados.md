---
title: 'Erro ao exportar preços com metadados'
id: 7nYPmatUXq57ZUsKHvfYJo
status: PUBLISHED
createdAt: 2023-07-12T11:49:06.370Z
updatedAt: 2023-07-12T11:49:07.185Z
publishedAt: 2023-07-12T11:49:07.185Z
firstPublishedAt: 2023-07-12T11:49:07.185Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-exporting-prices-with-metadata
locale: pt
kiStatus: Backlog
internalReference: 860290
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Às vezes, ao tentar exportar os preços com a opção de metadados ativada e sem usar filtros, pode ocorrer um erro. Ao verificar a mensagem no devTools, aparecerá algo semelhante a "Polly broken circuit on service...".

Esse erro ocorre devido à limitação no módulo de catálogo ao tentar recuperar os metadados de muitos skus.

## Simulação



1. Exportar os preços com metadados sem usar nenhum filtro;
2. Às vezes, uma mensagem de erro será exibida;
3. Verifique no inspect devtools se a mensagem é semelhante à mensagem acima

## Workaround


Use os filtros para reduzir a quantidade de skus na planilha e o módulo de catálogo retornará os dados sem problemas.





