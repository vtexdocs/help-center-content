---
title: 'O módulo Redirects permite a inclusão de redirecionamentos sem um padrão predeterminado'
id: CPYuvozpHXr86gQliImSV
status: PUBLISHED
createdAt: 2024-10-04T17:26:34.553Z
updatedAt: 2024-10-04T17:26:36.228Z
publishedAt: 2024-10-04T17:26:36.228Z
firstPublishedAt: 2024-10-04T17:26:36.228Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: redirects-module-allows-the-inclusion-of-redirects-without-a-predetermined-pattern
locale: pt
kiStatus: Backlog
internalReference: 729503
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O módulo Redirects permite a inclusão de URLs sem um padrão predeterminado, pois não há validação do formato correto. Os usuários que incluírem redirecionamentos iniciados por querystring, por exemplo, poderão fazer upload da planilha ou inseri-la diretamente pela interface do usuário e, consequentemente, isso pode causar inconsistências na operação do módulo, na apresentação dos dados na frente etc.

A inconsistência mais comum é não conseguir acessar alguns redirecionamentos ao clicar neles.

## Simulação


 - Crie, por meio da interface do usuário ou da planilha, redirecionamentos com querystrings (por exemplo, qualquer url que contenha `?` )
 - Tente acessá-lo

## Workaround


N/A




