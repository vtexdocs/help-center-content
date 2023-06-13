---
title: Página de "minha conta" não funciona no domínio "myvtex.com"
id: 1EW2Fuwbt3vO9uF8b9zRz4
status: PUBLISHED
createdAt: 2019-03-19T13:18:13.540Z
updatedAt: 2019-12-31T15:17:09.999Z
publishedAt: 2019-12-31T15:17:09.999Z
firstPublishedAt: 2019-03-19T13:21:54.767Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: pagina-de-minha-conta-nao-funciona-no-dominio-myvtex-com
kiStatus: Closed
internalReference: 
---

## Sumário

Ao tentar alterar dados na página de "minha conta" (`/account`) pelo domínio `myvtex.com`, estes não são atualizados corretamente.

Este problema se limita à versão de legado da página de conta.

## Simulação

1. Acessar `{loja}.myvtex.com/account`;
2. Fazer login e aguardar ser redirecionado para a página de "minha conta";
3. Tentar alterar os dados.

É possível notar que haverá um erro 404 no requests do DevTools.

## Workaround

O cenário acontece apenas no ambiente "myvtex.com" e pode ser contornado ao utilizar "vtexcommercestable.com.br".

Como o domínio final da loja é baseada no "vtexcommercestable", este problema não irá ocorrer em produção.

O cenário em questão já está corrigido definitivamente na nova App de "My Account" que substituirá a versão de legado em breve.

