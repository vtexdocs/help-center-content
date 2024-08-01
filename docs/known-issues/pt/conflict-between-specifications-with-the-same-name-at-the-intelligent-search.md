---
title: 'Conflito entre especificações com o mesmo nome na Intelligent Search'
id: 1TcMLTNMMGqjgbGArywSeh
status: PUBLISHED
createdAt: 2023-11-10T00:13:18.275Z
updatedAt: 2024-06-24T13:48:09.391Z
publishedAt: 2024-06-24T13:48:09.391Z
firstPublishedAt: 2023-11-10T00:13:18.980Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: conflito-entre-especificacoes-com-o-mesmo-nome-na-intelligent-search
locale: pt
kiStatus: Fixed
internalReference: 933958
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Várias especificações com o mesmo nome são agrupadas na mesma _"faceta"_ pela Pesquisa Inteligente, o que pode ser um problema se elas tiverem configurações diferentes.

Alguns atributos que podem ser afetados são o filtro, as alternâncias de oculto e indexado/pesquisável, o tipo de campo e a posição do valor. Não há diferença entre ser uma especificação de produto ou de SKU.

Não é possível saber qual propriedade terá precedência sobre a outra.

## Simulação


Para uma loja com:
- uma especificação chamada "foo" (ID 1) definida como um filtro (para aparecer na vitrine) e com o valor "bar" para um produto;
- outra especificação chamada "foo" (mas ID 2), que não é um filtro, e com o valor "baz" para o mesmo ou outro produto.

A vitrine pode renderizar um filtro de pesquisa para a faceta/especificação "foo" com os valores "bar" e "baz" ou até mesmo ocultar o filtro inteiro

## Workaround


Embora o módulo Catalog não bloqueie nomes de especificações repetidos, esse uso deve ser considerado incorreto.




