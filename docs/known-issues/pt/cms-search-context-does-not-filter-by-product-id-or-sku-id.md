---
title: 'O Search Context do CMS não filtra por ID de produto ou de SKU'
id: 6RqbCunfdqZpzLJaKiOqhN
status: DRAFT
createdAt: 2021-08-19T16:24:41.110Z
updatedAt: 2022-12-22T20:51:46.600Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
tag: Portal (CMS)
slug: o-search-context-do-cms-nao-filtra-por-id-de-produto-ou-de-sku
kiStatus: Backlog
internalReference: 
---

## Sumário

O campo **Search Context** do CMS não filtra corretamente o resultado da busca se for buscado por `productId` por ou `skuId`.

## Simulação

1. No Admin, clique no módulo **CMS**.
2. Clique na aba **Layout**.
3. Clique no diretório **CMS**.
4. Clique na pasta **Sites and channels**.
5. Clique no website desejado.
6. Clique na pasta **Busca**.
7. Clique no botão `New folder`.
8. Adicione um valor no campo **Search Context (Default)**.
9. Preencha os campos restantes.
10. Clique em `Save Folder` para finalizar.

Após fazer esta configuração, você pode simulá-la fazendo uma consulta no Portal filtrando por um `productId` ou `skuId`, por exemplo:

`https://{accountName}.{environment}.com.br/busca/?fq=productId:30`

O resultado da busca retornará muitos produtos, mas não o que foi filtrado pela consulta.

## Workaround

Deixe o campo **Search Context** vazio. 

