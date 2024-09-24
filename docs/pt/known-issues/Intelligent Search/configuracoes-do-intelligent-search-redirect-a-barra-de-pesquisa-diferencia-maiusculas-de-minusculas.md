---
title: 'Configurações do Intelligent Search Redirect A barra de pesquisa diferencia maiúsculas de minúsculas'
id: 5QEkcyhCQWyw093UkDCeOq
status: PUBLISHED
createdAt: 2023-09-26T23:50:50.661Z
updatedAt: 2023-09-26T23:50:51.661Z
publishedAt: 2023-09-26T23:50:51.661Z
firstPublishedAt: 2023-09-26T23:50:51.661Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-search-redirect-settings-search-bar-is-case-sensitive
locale: pt
kiStatus: Backlog
internalReference: 361894
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A página de configurações do Intelligent Search Redirect tem uma barra de pesquisa para ajudar a encontrar configurações de redirecionamento específicas, mas ela diferencia maiúsculas de minúsculas e só encontrará termos se eles corresponderem exatamente.

## Simulação


Acesse `/admin/search/redirects`.

Pesquise o nome de uma configuração, mas alterando uma letra para maiúscula. A pesquisa não obterá nenhum resultado

## Workaround


Gere nomes de rotas com um padrão consistente, somente letras minúsculas, somente letras maiúsculas ou camel case.

