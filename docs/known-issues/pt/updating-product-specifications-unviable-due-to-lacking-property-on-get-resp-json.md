---
title: 'Atualização das especificações do produto Impossível devido à falta de propriedade no GET Resp. JSON'
id: 6FeuIyF2E5WdS0PNRRzgdA
status: PUBLISHED
createdAt: 2022-06-28T16:55:06.720Z
updatedAt: 2022-11-25T21:44:35.149Z
publishedAt: 2022-11-25T21:44:35.149Z
firstPublishedAt: 2022-06-28T16:55:07.124Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: atualizacao-das-especificacoes-do-produto-impossivel-devido-a-falta-de-propriedade-no-get-resp-json
kiStatus: Backlog
internalReference: 301725
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

A resposta da GET Product Specification JSON carece de uma propriedade essencial para atualizar as especificações pré-existentes, se assim for necessário pelo usuário.

## Simulação

1) Usar uma especificação de produto GET como a que temos documentado atualmente em nossos devdocs: https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch

Neste exemplo, temos a seguinte resposta:

![](https://vtexhelp.zendesk.com/attachments/token/Wf7NUwNPNVp9HWS6cpyjKO1Ht/?name=inline-981699939.png)

Note que posso obter o "Valor", "Id" e "nome" com este requisito. Esta é atualmente a única maneira de obter este tipo de dados via REST API.

2) Eu usei o seguinte pedido para atualizar isto (depois de obter qual é o valor de campo e de campo, consultando a categoria APIs): https://merch.vtexcommercestable.com.br/api/catalog/pvt/product/17/specification?an=merch

![](https://vtexhelp.zendesk.com/attachments/token/v7KbNJfqfW1t4Ccl82x6ZTzpo/?name=inline-2136871145.png)

Observe que uma identificação única é devolvida na resposta, esta é a identificação da associação da especificação com o produto.

Entretanto, para que um usuário atualize qualquer valor pré-existente, será necessário informar esta identificação e ela só é devolvida na resposta da primeira inserção e em nenhum outro lugar (via API).

Esta questão é a abertura do reconhecimento deste problema e o acompanhamento de um possível ajuste futuro, mesmo que não se trate de um bug de produto por ver, mas de uma usabilidade defeituosa/incompleta.

## Workaround

Use a exportação de especificação de catálogo (https://merch.myvtex.com/admin/Site/ProdutoExportacaoImportacaoEspecificacaoV2.aspx) para obter a ID de associação desejada:

![](https://vtexhelp.zendesk.com/attachments/token/f2mM8DIYgkgBGsNdDiBmE4dW6/?name=inline1262577879.png)

OU

Use uma especificação de exclusão para a especificação antiga e envie uma nova, na qual a resposta virá com uma nova identificação a ser salva.

