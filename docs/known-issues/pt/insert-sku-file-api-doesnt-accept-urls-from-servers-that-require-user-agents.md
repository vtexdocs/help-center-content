---
title: 'A API Insert SKU File não aceita URLs de servidores que exigem "User Agents"'
id: 5Z1PmRXyW78mohsKTMQfzj
status: PUBLISHED
createdAt: 2024-07-22T19:49:14.140Z
updatedAt: 2024-07-22T19:49:15.319Z
publishedAt: 2024-07-22T19:49:15.319Z
firstPublishedAt: 2024-07-22T19:49:15.319Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-insert-sku-file-nao-aceita-urls-de-servidores-que-exigem-user-agents
locale: pt
kiStatus: Backlog
internalReference: 1069222
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Um **agente de usuário** é uma sequência de texto que um navegador da Web ou outro cliente envia a um servidor da Web em um cabeçalho de solicitação HTTP para se identificar. Essa cadeia contém informações sobre o tipo de navegador, o sistema operacional e, às vezes, detalhes adicionais, como a versão do navegador e o mecanismo de renderização usado.

Isso geralmente é solicitado como medida de segurança por servidores, como os que hospedam imagens, que podem ser passadas via URL no corpo da solicitação da API de inserção de arquivo SKU.

Esse tipo de autenticação, no entanto, não é suportado atualmente pelas APIs da VTEX.

## Simulação


1 - Usando a API de arquivo SKU Create ou Update (métodos de gravação), transmitindo um URL que tem o requisito de agente de usuário do lado do servidor para buscar dados https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/file

2 - Uma resposta do tipo 40x será mostrada, seja um 400 genérico ou um 403 mais específico, dependendo do tipo de resposta implementada.

## Workaround


Opte pelo upload de arquivos, planilhas e dados de formulário (usando as APIs) ou desative os requisitos de agente de usuário no lado do servidor.





