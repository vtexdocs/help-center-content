---
title: 'Inconsistências de visualização de dados na interface do usuário do Masterdata'
id: 5Sq6WAfBWynrOIZx8rFKdu
status: PUBLISHED
createdAt: 2024-09-27T18:00:31.097Z
updatedAt: 2024-09-27T18:00:32.575Z
publishedAt: 2024-09-27T18:00:32.575Z
firstPublishedAt: 2024-09-27T18:00:32.575Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: data-visualization-inconsistencies-on-masterdata-ui
locale: pt
kiStatus: Backlog
internalReference: 1107262
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um campo em uma entidade é configurado para ter um valor padrão e um documento com um valor nulo para esse campo é acessado por meio da interface do usuário de dados mestre, a interface do usuário exibirá incorretamente o valor padrão. Esse problema geralmente ocorre com documentos criados antes da configuração desse campo, pois a criação do campo não atualiza retroativamente os documentos existentes.

## Simulação



1. Verifique o documento por meio da API e verifique se o campo em questão é nulo.
2. Acesse o mesmo documento por meio da interface do usuário do Masterdata, onde o campo exibirá incorretamente o valor padrão configurado

## Workaround


Atualize os documentos em que o campo é nulo para que tenham o valor padrão. Isso pode ser feito filtrando documentos com valores nulos usando a API de pesquisa: Masterdata Search API e atualizando o documento usando a Partial Update API: Partial Update API (API de atualização parcial).





