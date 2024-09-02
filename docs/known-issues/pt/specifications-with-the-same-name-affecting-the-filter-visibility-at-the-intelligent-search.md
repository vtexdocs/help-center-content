---
title: 'Especificações com o mesmo nome que afetam a visibilidade do filtro na Pesquisa Inteligente'
id: 2ez8tdBqUE03nTejbMLSFp
status: PUBLISHED
createdAt: 2024-08-09T00:01:34.212Z
updatedAt: 2024-08-09T00:15:49.192Z
publishedAt: 2024-08-09T00:15:49.192Z
firstPublishedAt: 2024-08-09T00:01:35.766Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: especificacoes-com-o-mesmo-nome-que-afetam-a-visibilidade-do-filtro-na-pesquisa-inteligente
locale: pt
kiStatus: Backlog
internalReference: 1078576
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Várias especificações com o mesmo nome são agrupadas na mesma _"faceta"_ pela Pesquisa Inteligente, o que pode ser problemático se elas tiverem configurações diferentes.

Alguns atributos que podem ser afetados são o filtro, as alternâncias de oculto e indexado/pesquisável, o tipo de campo e a posição do valor. Não há diferença entre ser uma especificação de produto ou de SKU.

Não é possível saber qual propriedade terá precedência sobre a outra.

## Simulação


Para uma loja com:
- uma especificação chamada "type" (ID 1) definida como um filtro (para aparecer na vitrine);
- outra especificação chamada "type" (mas ID 2), que não está definida como um filtro (para ficar oculta na vitrine).

A vitrine pode ou não renderizar o filtro de pesquisa para a faceta/especificação "type" devido ao conflito com a propriedade "isFilter"

## Workaround


Embora o módulo Catalog não bloqueie nomes de especificações repetidos, esse uso deve ser considerado incorreto.




