---
title: 'O reescritor não está recebendo atualizações de URL'
id: 4c3S9s57SzQCv8zv4L77Fu
status: PUBLISHED
createdAt: 2024-07-16T19:24:56.813Z
updatedAt: 2024-07-16T19:24:57.773Z
publishedAt: 2024-07-16T19:24:57.773Z
firstPublishedAt: 2024-07-16T19:24:57.773Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-reescritor-nao-esta-recebendo-atualizacoes-de-url
locale: pt
kiStatus: Backlog
internalReference: 1066527
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando uma URL é alterada/excluída no catálogo, o reescritor não recebe essa alteração. Como o reescritor não é notificado sobre isso, o URL ainda está apontando para o tipo errado, o que também pode levar a problemas no IS.

Isso também pode acontecer ao criar novas rotas de categoria/subcategoria no catálogo. Às vezes, o reescritor precisará que você execute a consulta bootstrap para receber essas rotas.

## Simulação


Tente excluir uma marca existente do catálogo
Execute a mutação para ver como esse caminho está sendo recebido no reescritor

    {internal{ get(path:"/brand"){ from declarer query disableSitemapEntry }}}

Se você procurar essa marca na vitrine, ela ainda estará apontando para um `map=b`

Você também pode verificar como esse caminho está sendo retornado no pageType; se for um fullText, o pageType foi atualizado e o rewriter não

## Workaround


Tente excluir a rota manualmente do reescritor:

      mutation{ internal{ delete(path:"/path"){ from id resolveAs } }}


Tente executar a consulta bootstrap para atualizar o reescritor:

    {bootstrap { brands categories}}





