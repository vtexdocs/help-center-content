---
title: "Logo do seller não aparece na página de produto"
id: 1WIIPZibFegYSsKIIscIse
status: PUBLISHED
createdAt: 2018-05-08T19:35:42.171Z
updatedAt: 2022-12-22T14:39:53.593Z
publishedAt: 2022-12-22T14:39:53.593Z
firstPublishedAt: 2018-05-08T23:02:31.503Z
contentType: knownIssue
productTeam: Channels
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Portal
slugEN: logo-do-seller-nao-aparece-na-pagina-de-produto
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao vincular um produto do Suggestion a um seller que não possui logo cadastrada e posteriormente cadastrar uma logo para o seller, a página de produto não mostra a logo, somente o nome do seller cadastrado.

## Simulação

1. Cadastrar um [novo seller](/pt/tutorial/configurando-seller) sem a logo.
2. Receber e [aprovar produtos](/pt/tutorial/sugerindo-e-aprovando-skus) deste seller no Suggestion.
3. Cadastrar a logo do seller.
4. Acessar a página do produto no marketplace.

## Workaround

A primeira opção é forçar a reindexação do produto no marketplace. 

Caso esta ação não resolva o problema, será necessário realizar a exclusão do produto em SKUs dos Sellers ([Excluir produtos do Seller](/pt/faq/qual-a-diferenca-entre-desvincular-e-excluir-um-sku-seller)). Após a exclusão, é necessário solicitar ao seller que realize a reindexação do produto para que o marketplace seja notificado novamente.

