---
title: 'A configuração "Blocks default routes in other bindings" no Rewriter pode levar à página "Not Found" após a aplicação de filtros'
id: 5JQOG3F10eJTyDWb6wicSx
status: PUBLISHED
createdAt: 2025-02-06T22:06:32.453Z
updatedAt: 2025-02-06T22:06:33.228Z
publishedAt: 2025-02-06T22:06:33.228Z
firstPublishedAt: 2025-02-06T22:06:33.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: a-configuracao-blocks-default-routes-in-other-bindings-no-rewriter-pode-levar-a-pagina-not-found-apos-a-aplicacao-de-filtros
locale: pt
kiStatus: Backlog
internalReference: 1175760
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Esse problema ocorre apenas em lojas internacionais. Ao aplicar determinados filtros em uma página de pesquisa, a página é interrompida e redirecionada para uma página "Not Found" (Não encontrado). O problema é causado pela configuração "Blocks default routes in other bindings" (Bloqueia rotas padrão em outras associações) no aplicativo Rewriter.

## Simulação



1. Acesse a página de pesquisa de uma loja internacional.
2. Aplique um ou mais filtros específicos.
3. Observe que, ao tentar carregar os resultados, a página é redirecionada para uma página "Not Found" (Não encontrado)

## Workaround


Definir a propriedade `preventRouteChange` como `true` no componente Search Result impede que o problema ocorra.





