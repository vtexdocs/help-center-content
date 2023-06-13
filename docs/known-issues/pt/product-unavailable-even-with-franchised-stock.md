---
title: Produto indisponível mesmo com estoque na franquia
id: 58KRJl4MFOaeb5KUYGmH8G
status: PUBLISHED
createdAt: 2022-01-25T12:17:33.680Z
updatedAt: 2022-11-25T21:44:25.997Z
publishedAt: 2022-11-25T21:44:25.997Z
firstPublishedAt: 2022-07-21T09:49:53.469Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: produto-indisponivel-mesmo-com-estoque-na-franquia
kiStatus: Backlog
internalReference: 404499
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se o produto estiver fora de estoque no mercado, em qualquer outro vendedor regular e a bandeira **show out of stock** estiver desmarcada, o produto será exibido fora de estoque no portal, mesmo que tenha estoque em contas de franquias. É possível adicionar o produto ao carrinho.

    Mostrar fora de estoque?

    - Falso -> 404
    - Verdadeiro -> regionalização -> verificar estoques a partir de contas de franquia


## Simulação


Colocar estoque na conta da franquia
Coloque a bandeira **`Show out of stock`*** como **`no`***
Veja o produto não disponível na frente



## Workaround


Definir **`Mostrar fora de estoque`** como **`sim`** na conta do mercado

