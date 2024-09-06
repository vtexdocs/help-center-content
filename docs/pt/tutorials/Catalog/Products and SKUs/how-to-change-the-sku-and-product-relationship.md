---
title: 'Como alterar a relação SKU e Produto'
id: 6LEuMI1YYMYMeIwg606Wce
status: PUBLISHED
createdAt: 2017-07-04T17:56:33.013Z
updatedAt: 2023-03-29T17:49:24.459Z
publishedAt: 2023-03-29T17:49:24.459Z
firstPublishedAt: 2019-01-25T17:31:00.898Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-alterar-a-relacao-sku-e-produto
locale: pt
legacySlug: como-alterar-a-relacao-sku-x-produto
subcategoryId: pwxWmUu7T222QyuGogs68
---

A alteração da relação entre SKU e produto é possível na página de edição do SKU. Para isso, siga os passos abaixo.

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Todos os produtos**.
3. No produto desejado, clique na seta para baixo <i class="fas fa-angle-down"></i> e depois em __SKU__.
4. Na linha do SKU que você deseja remover do produto, clique em `Alterar`.
5. No campo **Nome do Produto (Id)**, em **Seleção atual**, clique em `Retirar` para desassociar o produto atualmente relacionado ao SKU.
6. Para relacionar o SKU a outro produto, digite o nome do produto no campo **Nome do Produto (Id)** e clique no produto desejado. Se preferir, você pode clicar em `Busca Avançada` para buscar por __Nome__, __ID__ ou __SKU__ o novo produto a ser relacionado. Buscar o produto pelo __ID__ ou pelo __SKU__ será mais preciso para casos em que exista o mesmo valor para __Nome__ em produtos distintos.
7. Após encontrar o produto desejado, clique em `Adicionar`.
8. Clique em `Salvar`.

Se preferir, você pode fazer essa atualização pela API do __Catálogo__, com a chamada [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-sku). Não é possível alterar a relação por meio de planilha.
