---
title: "A mudança do modo de editor de html na descrição do produto remove as tags <p>"
id: 4758mIGzPpJwo8YEmAfbxK
status: PUBLISHED
createdAt: 2025-04-09T20:12:33.784Z
updatedAt: 2025-04-09T20:12:34.957Z
publishedAt: 2025-04-09T20:12:34.957Z
firstPublishedAt: 2025-04-09T20:12:34.957Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-mudanca-do-modo-de-editor-de-html-na-descricao-do-produto-remove-as-tags-p
locale: pt
kiStatus: Backlog
internalReference: 1208549
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, no novo editor de descrição de catálogo de produtos, se você alternar a visualização do modo normal para HTML, poderá ver todas as tags que a formatação HTML atual está usando no texto.

Se você inserir manualmente uma tag de abertura e fechamento de parágrafo <p></p> no editor e voltar ao modo normal, essas tags serão removidas automaticamente e nenhum parágrafo será criado.

## Simulação


1 - Em uma descrição de produto com mais de 2 parágrafos, alterne para o modo de editor HTML disponível pressionando o botão </> na parte inferior

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/a-mudanca-do-modo-de-editor-de-html-na-descricao-do-produto-remove-as-tags-p_1.png)

2 - adicione manualmente um conjunto de tags <p> </p>

3 - voltar ao modo normal

4 - Alterne novamente para o modo HTML, as tags <p> não estarão mais presentes



## Workaround


Use o editor de texto do catálogo herdado ou não alterne o formulário para o modo de edição HTML ao editar descrições de produtos.

OU

Criar descrições de produtos por meio de planilhas/API





