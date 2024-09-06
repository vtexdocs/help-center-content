---
title: 'As condições do catálogo de promoções se aplicam ao skucomponent, mesmo quando apenas o skukit é adicionado ao carrinho'
id: g9V2wsKiakxYs4982oPDH
status: PUBLISHED
createdAt: 2024-08-22T13:29:07.146Z
updatedAt: 2024-08-22T13:34:20.455Z
publishedAt: 2024-08-22T13:34:20.455Z
firstPublishedAt: 2024-08-22T13:29:07.960Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: as-condicoes-do-catalogo-de-promocoes-se-aplicam-ao-skucomponent-mesmo-quando-apenas-o-skukit-e-adicionado-ao-carrinho
locale: pt
kiStatus: Backlog
internalReference: 1085500
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, ao adicionar uma restrição de promoção que tem uma regra de catálogo (ou seja, categorias, skus, marcas, coleções, ...) e esse conjunto contém o componente de um SKU, mas não o kit em si, a intenção do usuário, originalmente, é dar esse desconto apenas quando o componente for comprado separadamente.

No entanto, se esse tipo de restrição for configurado, se o kit for adicionado ao carrinho, o desconto ainda será concedido a ele.

## Simulação


1 - criar um kit SKU com mais de 1 componente.
2 - crie uma promoção que dê um desconto para o componente, mas não para o kit.
3 - adicione o kit ao carrinho e o desconto será concedido, como se fosse o componente também.



## Workaround


Adicione outras restrições de promoção ou não use componentes separadamente dos kits nas promoções





