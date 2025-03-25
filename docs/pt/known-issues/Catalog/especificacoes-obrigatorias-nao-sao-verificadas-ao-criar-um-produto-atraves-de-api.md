---
title: 'Especificações obrigatórias não são verificadas ao criar um produto através de API'
id: 2s4WhYOfIRDcwuXyUp9mtK
status: PUBLISHED
createdAt: 2022-02-10T21:44:57.094Z
updatedAt: 2022-11-25T21:46:15.425Z
publishedAt: 2022-11-25T21:46:15.425Z
firstPublishedAt: 2022-02-10T21:44:58.173Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: mandatory-specifications-are-not-verified-when-creating-a-product-through-api
locale: pt
kiStatus: Backlog
internalReference: 522293
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os produtos com especificações obrigatórias não devem estar ativos se pelo menos uma dessas especificações não for preenchida ou verificada.

A criação do produto via Admin garante uma validação pelo catálogo sobre estas especificações e o resultado é que o produto permanece inativo até o seu preenchimento.

No entanto, tal validação não está ocorrendo ao criar o produto via API. O resultado é que o produto pode estar ativo mesmo sem que essas especificações sejam preenchidas.



## Simulação





1. Criar um produto via API: https://developers.vtex.com/vtex-rest-api/reference/post-product
2. Selecione uma categoria que tenha especificações obrigatórias do produto
3. Não cumprir as especificações obrigatórias
4. Verificar se o produto tem o status "Ativo" quando não deveria ter.



## Workaround





Nenhuma solução.

