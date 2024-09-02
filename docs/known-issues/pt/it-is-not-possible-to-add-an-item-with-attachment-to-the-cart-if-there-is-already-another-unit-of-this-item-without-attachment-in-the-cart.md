---
title: 'Não é possível adicionar um item com anexo ao carrinho se já houver outra unidade desse item sem anexo no carrinho'
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2024-02-02T15:01:32.297Z
publishedAt: 2024-02-02T15:01:32.297Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: nao-e-possivel-adicionar-um-item-com-anexo-ao-carrinho-se-ja-houver-outra-unidade-desse-item-sem-anexo-no-carrinho
locale: pt
kiStatus: No Fix
internalReference: 412041
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante o processo de compra, se o cliente adicionar um item que já tenha sido incluído no carrinho anteriormente e a nova inclusão tiver opções de montagem, o segundo item não será adicionado ao carrinho.

Por exemplo, se, durante o processo de compra, o cliente adicionar uma SKU ao carrinho e, em seguida, outra unidade da mesma SKU, mas com garantia estendida (via assemblyOptions), o último item adicionado (o item com garantia estendida) não estará disponível no carrinho.

## Simulação


Para executar a simulação, verifique se há itens com opções de montagem em sua loja.


1. Acesse a loja;
2. Adicionar um produto ao carrinho;
3. Adicione o produto mais uma vez e inclua uma opção de montagem ao item (uma personalização ou uma garantia estendida, por exemplo);
4. Verifique o carrinho e verifique se o item com a opção de montagem não foi adicionado.



## Workaround


Não há nenhuma solução alternativa disponível.





