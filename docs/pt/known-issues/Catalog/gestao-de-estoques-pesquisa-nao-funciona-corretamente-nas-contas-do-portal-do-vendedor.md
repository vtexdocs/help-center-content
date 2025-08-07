---
title: "Gestão de estoques Pesquisa não funciona corretamente nas contas do portal do vendedor"
id: 7pCEQVKpXDq8NwtMXDxlFT
status: PUBLISHED
createdAt: 2022-11-08T18:55:29.448Z
updatedAt: 2023-02-24T18:21:26.642Z
publishedAt: 2023-02-24T18:21:26.642Z
firstPublishedAt: 2022-11-08T18:55:30.178Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: gestao-de-estoques-pesquisa-nao-funciona-corretamente-nas-contas-do-portal-do-vendedor
locale: pt
kiStatus: Backlog
internalReference: 694254
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A Pesquisa de Gerenciamento de Inventário não se comporta como esperado nas contas do portal do vendedor. Isto acontece porque este tipo de contas utiliza uma versão diferente do catálogo.

O módulo de Logística utiliza nesta IU uma API do catálogoV1.

No entanto, não temos um proxy do catálogo do portal do vendedor para esta API no catálogoV1.

O impacto é que às vezes o retorno sobre a queda e sobre o resultado pode ser diferente se o cliente estiver procurando por um termo.

O problema não parece acontecer quando se utiliza produtos e Ids de sku.

Outro impacto é que se o filtro for usado, o nome do skus nos produtos não aparece na IU.



##

## Simulação



1. Busca por um nome de produto específico;
2. Verificar se o dropdown devolve o produto;
3. Verificar se o resultado da busca devolve o produto.


##

## Workaround



Busca por produto Id e Sku Id.







