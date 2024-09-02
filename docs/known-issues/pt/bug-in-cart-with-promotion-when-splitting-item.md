---
title: "Bug no Carrinho com promoção ao 'splitar' item"
id: 26EY5QcY4wcGm88okke8SY
status: PUBLISHED
createdAt: 2017-05-24T20:20:57.562Z
updatedAt: 2019-12-31T15:17:20.897Z
publishedAt: 2019-12-31T15:17:20.897Z
firstPublishedAt: 2017-05-26T19:35:05.050Z
contentType: knownIssue
productTeam: Shopping
author: authors_37
tag: Catalog
slug: bug-no-carrinho-com-promocao-ao-splitar-item
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

No Carrinho, de acordo com a quantidade selecionada de um mesmo item e a seleção de um serviço - embalagem ou garantia, por exemplo - associado a este item, ocorre o split do item, ou seja, mostra o mesmo item duas vezes, um com serviço e outro sem serviço.

O módulo de Promoções não esta considerando este ítem "splitado" para somar ao valor do carrinho nas promoções que possuem o critério "Valor minimo do Pedido", não dando então o benefício esperado ao cliente neste cenário específico.

## Simulação

- Criar promoçãocom critério de Carrinho "Valor Minimo do Pedido"
- Associar SKU a um serviço: embalagem ou garantia estendida, por exemplo
- No Site, inserir o SKU no Carrinho
- Aumentar sua quantidade para 2
- Selecionar a opção de Serviço
- Verificar que o mesmo item agora aparece duas vezes
- Verificar que o beneficio não é dado, pois a soma total do Carrinho, sem considerar o item "splitado", não atinge o critério configurado na promoção



## Workaround

Retirar a opção de serviço do SKU temporariamente, até que o time de Rates and Benefits resolva o bug.

