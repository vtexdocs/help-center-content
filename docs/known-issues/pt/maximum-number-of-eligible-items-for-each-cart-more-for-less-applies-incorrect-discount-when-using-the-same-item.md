---
title: '"número máximo de itens qualificados para cada carrinho" + more for less aplica desconto incorreto ao usar o mesmo item.'
id: gWIMhi9RCv9BE1RvV6GiM
status: PUBLISHED
createdAt: 2024-07-30T17:14:36.972Z
updatedAt: 2024-07-30T17:14:37.931Z
publishedAt: 2024-07-30T17:14:37.931Z
firstPublishedAt: 2024-07-30T17:14:37.931Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: numero-maximo-de-itens-qualificados-para-cada-carrinho-more-for-less-aplica-desconto-incorreto-ao-usar-o-mesmo-item
locale: pt
kiStatus: Backlog
internalReference: 1073080
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar um desconto do tipo "mais por menos" junto com outra promoção que usa o "máximo de itens por carrinho" para o mesmo item, ambos se acumulando, um desconto incorreto é concedido, excedendo a configuração inicialmente configurada.

Isso ocorre devido à forma como o checkout divide os itens.

Por exemplo, digamos que você tenha uma promoção mais por menos (A) configurada para dar um "desconto de 100% para 1 item de cada 8 inseridos no carrinho".

Além disso, você tem outra promoção (B) que, para essa mesma SKU, dá um desconto de 50%, limitado a um máximo de 2 itens.

**O que é esperado**:

Se 80 itens forem inseridos no checkout, um total de 11 itens deverá ser oferecido gratuitamente.  10 provenientes de (A), 1 proveniente de (B).

**O que realmente acontece**:

Os itens são divididos em 3 quantidades diferentes no checkout

(1) aqueles que receberam apenas o desconto (A)
(2) aqueles que receberam apenas o desconto (B)
(3) os que receberam ambos os descontos (AB)

No entanto, a linha (2), que deveria ter apenas 2 itens com 50% de desconto, na verdade replica o desconto de 100% da linha (1), essencialmente dando 2 itens extras de desconto, em um total de 13 itens, em vez de 11.



## Simulação


Crie um cenário de promoção conforme descrito acima ou semelhante a ele, usando o "número máximo de itens qualificados para cada carrinho" e uma promoção "mais por menos", ambos definidos para acumular.

É importante observar que esse problema só ocorre quando **todas as promoções são configuradas para o mesmo SKU**

## Workaround


n/a (evite usar essas duas configurações específicas juntas ao operar com descontos para a mesma SKU).






