---
title: 'Especificação do produto Índice de exportação fora da faixa'
id: 2Qu9QCZvfcjmNfAh3uvPkf
status: PUBLISHED
createdAt: 2022-02-25T12:22:04.014Z
updatedAt: 2024-01-10T20:25:32.586Z
publishedAt: 2024-01-10T20:25:32.586Z
firstPublishedAt: 2022-02-25T12:22:04.405Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: especificacao-do-produto-indice-de-exportacao-fora-da-faixa
locale: pt
kiStatus: Backlog
internalReference: 481095
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao tentar exportar especificações de produtos da interface do usuário "Importar e exportar", se houver algum valor nulo ou relação nula na categoria a ser exportada, o processo falhará com uma mensagem "Índice fora do intervalo". Em outras palavras, a categoria deve ter registrado diretamente em seu nível um campo de produto, produtos e produtos com valores associados.


## Simulação


1) Acesse a UI de exportação da Especificação do produto: ProdutoExportacaoImportacaoEspecificacaoV2.aspx

2) Clique com o botão direito do mouse em uma categoria na qual não haja um campo de especificação de produto registrado

3) Será exibida uma mensagem de erro do tipo "Index out of bonds".



## Workaround


Exporte a categoria pai ou filha da categoria desejada

ou

Use a API de obtenção de especificações do produto para obter dados: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product-specification

