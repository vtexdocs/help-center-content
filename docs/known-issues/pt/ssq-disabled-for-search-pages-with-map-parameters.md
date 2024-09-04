---
title: 'SSQ desativado para páginas de pesquisa com parâmetros de mapa'
id: 4hbo7YxKAxLOkhT21w1Q4e
status: PUBLISHED
createdAt: 2024-09-04T12:52:05.855Z
updatedAt: 2024-09-04T12:52:11.844Z
publishedAt: 2024-09-04T12:52:11.844Z
firstPublishedAt: 2024-09-04T12:52:06.843Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: ssq-desativado-para-paginas-de-pesquisa-com-parametros-de-mapa
locale: pt
kiStatus: Backlog
internalReference: 1092143
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nas páginas de pesquisa que usam os parâmetros de mapa, o SSQ é desativado e as consultas feitas depois que a página é montada não estão presentes no HTML.

## Simulação



- Abra uma página de pesquisa que use os parâmetros de mapa (?map=c,c,c,b)
- Observe o meta título da página
- Procure o título no código-fonte
- Ele não será encontrado



## Workaround


N/A





