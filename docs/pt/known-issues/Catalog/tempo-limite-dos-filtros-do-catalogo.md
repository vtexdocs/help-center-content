---
title: 'Tempo limite dos filtros do catálogo'
id: 5KtT2SvTSO6xMdJOSYz5VZ
status: PUBLISHED
createdAt: 2023-10-19T17:11:37.486Z
updatedAt: 2023-10-19T17:11:38.181Z
publishedAt: 2023-10-19T17:11:38.181Z
firstPublishedAt: 2023-10-19T17:11:38.181Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-filters-timeout
locale: pt
kiStatus: Backlog
internalReference: 922350
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Para lojas com uma grande quantidade de skus (1 milhão ou mais), muitas vezes, ao filtrar usando os filtros da interface do usuário do catálogo, seja para o menu principal ou para a seção de relatórios, se a consulta de filtro retornar um resultado muito grande, a interface do usuário não funcionará mais (504 gateway timeout)

## Simulação


Não há uma maneira confiável de simular isso de forma consistente - apenas consultas grandes específicas para algumas contas acabam gerando o erro.



## Workaround


Solicite uma "limpeza de filtro de usuário" à equipe de produtos.

Além disso, se a mesma consulta estiver gerando um tempo limite com frequência (ou seja, você filtra um departamento específico e o tempo limite é atingido), considere a possibilidade de executar filtros que selecionem um subconjunto do que você deseja (no mesmo exemplo, uma categoria dentro de um determinado departamento)





