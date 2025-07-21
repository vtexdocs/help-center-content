---
title: "A criação de SKUs em contas do portal do vendedor resulta em um multiplicador de unidades incorreto"
id: 3PqHY1apthTNSxLcSAfQof
status: PUBLISHED
createdAt: 2025-02-26T13:53:02.321Z
updatedAt: 2025-02-26T13:53:03.341Z
publishedAt: 2025-02-26T13:53:03.341Z
firstPublishedAt: 2025-02-26T13:53:03.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-criacao-de-skus-em-contas-do-portal-do-vendedor-resulta-em-um-multiplicador-de-unidades-incorreto
locale: pt
kiStatus: Backlog
internalReference: 1186329
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, ao usar uma conta VTEX do tipo "portal do vendedor", quando um usuário cria uma SKU, seu multiplicador de unidades é sempre definido como 1, independentemente do valor inserido inicialmente, ao usar a interface do usuário do administrador.

## Simulação


1 - Usando uma conta do portal do vendedor, crie um sku
2 - Na configuração da sku, insira qualquer número, além de 1, no campo do multiplicador de unidades
3 - Crie a sku e clique em salvar
4 - O multiplicador de unidades terá sido substituído por 1



## Workaround


Após a criação incorreta, atualize o campo do multiplicador de unidades para o valor desejado.





