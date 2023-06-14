---
title: O VBase responde 404 para vtex.pages-graphql
id: 1uoRka5Jwkvk5EQhmffyMO
status: PUBLISHED
createdAt: 2023-05-09T13:50:40.063Z
updatedAt: 2023-06-12T14:57:55.479Z
publishedAt: 2023-06-12T14:57:55.479Z
firstPublishedAt: 2023-05-09T13:50:40.632Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slug: o-vbase-responde-404-para-vtexpagesgraphql
kiStatus: Backlog
internalReference: 822031
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O VBase está respondendo 404 para o aplicativo vtex.pages-graphql instalado na conta, por algum motivo, o aplicativo não está sendo encontrado e, como consequência, o comprador será afetado por não conseguir acessar um produto ou uma página específica na loja. Esse erro 404 é armazenado em cache por 2 horas, portanto, o problema normalmente é interrompido após o término do cache. O problema é intermitente e ainda não conseguimos descobrir o motivo pelo qual ele está ocorrendo.

Relatório de incidente: https://io.vtex.com.br/incident-report/2023-04-04-VTEX-IO-Intermittent-Pageload-Failures.pdf

## Simulação


É difícil simular porque o problema é intermitente e não há uma página ou um produto específico. Normalmente, você pode reproduzir isso ao navegar pela loja e, de repente, um produto ou uma página aleatória não carregará completamente. Quando você recarregar a página, o problema se resolverá sozinho

## Workaround


N/A





