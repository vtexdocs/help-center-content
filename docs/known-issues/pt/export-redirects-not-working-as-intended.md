---
title: 'Os redirecionamentos de exportação não estão funcionando como esperado'
id: 5WoiJDQCSMDCwCn1auNwC4
status: PUBLISHED
createdAt: 2022-04-05T12:53:18.824Z
updatedAt: 2024-01-29T18:40:08.833Z
publishedAt: 2024-01-29T18:40:08.833Z
firstPublishedAt: 2022-04-05T12:53:19.875Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: os-redirecionamentos-de-exportacao-nao-estao-funcionando-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 537962
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando você tenta exportar o redirecionamento, seja por meio do terminal ou da página no CMS, ele traz arquivos de tamanhos diferentes, com possíveis resultados diferentes dentro dele. Esse não é o comportamento esperado, pois não há alterações feitas nos redirecionamentos que possam explicar as diferenças.


## Simulação



(Terminal) Siga as etapas na documentação: https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-managing-url-redirects

Verifique os arquivos retornados e você poderá ver, em alguns casos, a diferença entre os dois arquivos extraídos.

(IU do administrador) Vá para admin > CMS > Redirecionamentos, altere entre as páginas na paginação e clique em exportar para ver as diferenças nos arquivos que são retornados

## Workaround


N/A





