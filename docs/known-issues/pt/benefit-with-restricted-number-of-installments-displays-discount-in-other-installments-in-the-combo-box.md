---
title: Promoção com restrição de número de parcelas exibe desconto em demais parcelas no combo de seleção
id: 4oKJDg0ygC40oiOAx2lkdG
status: PUBLISHED
createdAt: 2019-03-18T14:30:33.359Z
updatedAt: 2022-12-22T20:46:18.368Z
publishedAt: 2022-12-22T20:46:18.368Z
firstPublishedAt: 2019-03-18T14:34:47.612Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: promocao-com-restricao-de-numero-de-parcelas-exibe-desconto-em-demais-parcelas-no-combo-de-selecao
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao cadastrar uma promoção para pagamentos em cartão, com limitações de quantidade de parcelas, por exemplo "10% à vista", o desconto é apresentado após a seleção dessa quantidade de parcelas no checkout. Porém, esse valor com desconto passa a ser o novo valor total, onde os demais parcelamentos vão se basear para a exibição dos valores. Logo, no campo de seleção, ao abrir as opções, são exibidas as demais parcelas calculadas com base no valor total __com o desconto__. Ao selecionar um parcelamento diferente, no entanto, o valor exibido passa a ser o correto. 

Este cenário ocorre apenas em desconto em cartão e no momento da seleção, a compra __nunca é fechada com o valor errado__.

## Simulação


1. Crie uma promoção com restrição em quantidade de parcelas;
2. Acesse a loja e feche um carrinho;
3. Selecione a quantidade de parcelas em que a promoção é aplicada;
4. Veja que, ao abrir novamente o campo de seleção de parcelas, as demais opções também exibem o desconto;
5. Selecione outro parcelamento e veja o valor ser ajustado.

## Workaround

Não existe workaround para o cenário.

