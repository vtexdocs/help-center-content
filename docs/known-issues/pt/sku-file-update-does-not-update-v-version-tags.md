---
title: 'A atualização do arquivo SKU não atualiza as tags de versão ?v'
id: 5Uw2VIBtTNDY3Ha5WDzGXJ
status: PUBLISHED
createdAt: 2023-06-29T14:37:56.437Z
updatedAt: 2024-07-01T18:49:06.220Z
publishedAt: 2024-07-01T18:49:06.220Z
firstPublishedAt: 2023-06-29T14:37:57.352Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-atualizacao-do-arquivo-sku-nao-atualiza-as-tags-de-versao-v
locale: pt
kiStatus: No Fix
internalReference: 852869
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, quando um arquivo de imagem SKU é atualizado por meio da API para ficar na mesma posição de um arquivo anterior, sua tag de versão (?v=) na página do produto não é atualizada corretamente.

## Simulação




- Para um sku que já tenha arquivos, tente atualizar uma imagem para uma nova.
- Para uma interpretação adequada do arquivo que está sendo alterado para o usuário e/ou sistemas, a tag de versão (?v=) sob a imagem href no HTML da página do produto deve ser atualizada.
- No entanto, isso não acontece quando se usa essa API para realizar essas atualizações.


## Workaround


Excluir todos os arquivos SKU e reinseri-los do zero força a atualização.

OU

A exclusão de um indexador força a atualização.

