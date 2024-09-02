---
title: '"Um item com a mesma chave já foi adicionado. Chave: descrição"'
id: 5eGfoHuVu83bqGvSOvDF5z
status: PUBLISHED
createdAt: 2024-08-20T14:40:23.496Z
updatedAt: 2024-08-20T14:49:14.081Z
publishedAt: 2024-08-20T14:49:14.081Z
firstPublishedAt: 2024-08-20T14:40:25.093Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: um-item-com-a-mesma-chave-ja-foi-adicionado-chave-descricao
locale: pt
kiStatus: Backlog
internalReference: 1084015
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o aplicativo de vendas pode enfrentar um problema ao carregar corretamente as páginas de produtos nos quais o campo de produto "description" também tem a palavra "description" registrada.

## Simulação


1 - para uma conta de aplicativo de vendas, crie um produto e campos para ele; neles, adicione a palavra "description".

2 - navegue pelas páginas de resultados de pesquisa que contêm esse produto específico como resultado, será exibido um erro "error loading search" (erro ao carregar a pesquisa)

## Workaround


remova a cadeia de caracteres "description" e substitua-a por algo semelhante, como productDescription.

