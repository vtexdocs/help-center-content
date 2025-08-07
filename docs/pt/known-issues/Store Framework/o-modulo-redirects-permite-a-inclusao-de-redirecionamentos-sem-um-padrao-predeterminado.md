---
title: "O módulo Redirects permite a inclusão de redirecionamentos sem um padrão predeterminado"
id: CPYuvozpHXr86gQliImSV
status: PUBLISHED
createdAt: 2024-10-04T17:26:34.553Z
updatedAt: 2025-04-10T14:32:49.765Z
publishedAt: 2025-04-10T14:32:49.765Z
firstPublishedAt: 2024-10-04T17:26:36.228Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-modulo-redirects-permite-a-inclusao-de-redirecionamentos-sem-um-padrao-predeterminado
locale: pt
kiStatus: Backlog
internalReference: 729503
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O módulo Redirects permite a inclusão de URLs sem um padrão predeterminado, pois não há validação do formato correto. Os usuários que incluírem redirecionamentos iniciados por querystring, por exemplo, poderão fazer upload da planilha ou inseri-la diretamente pela interface do usuário e, consequentemente, isso pode causar inconsistências na operação do módulo, na apresentação dos dados na frente etc.

A inconsistência mais comum é não conseguir acessar alguns redirecionamentos ao clicar neles.

## Simulação


- Crie, via UI ou planilha, redirecionamentos com querystrings (por exemplo, qualquer URL que contenha `?` )
- Tente acessá-los



## Workaround


Não há solução alternativa para esse caso, mas se você quiser excluir o redirecionamento e não conseguir acessá-lo, será necessário executar a consulta do rewriter:

    mutation{ redirect{ delete(path: "/{word}"){ id } }}





