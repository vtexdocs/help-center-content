---
title: 'Benefício com número restrito de parcelas exibe desconto em outras parcelas na caixa combinada'
id: 6izb0iLwbLstdJIxF9lPOw
status: DRAFT
createdAt: 2022-01-24T20:33:57.542Z
updatedAt: 2023-03-31T23:07:20.021Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: benefit-with-restricted-number-of-installments-displays-discount-in-other-installments-in-the-combo-box
locale: pt
kiStatus: Backlog
internalReference: 323525
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao registrar um benefício para pagamentos com cartão, com quantidade limitada de parcelas (por exemplo, "10% em dinheiro"), o desconto é apresentado após selecionar essa quantidade de parcelas no checkout. No entanto, este valor descontado torna-se o novo valor total, no qual as outras parcelas serão baseadas para apresentar valores. Em seguida, no campo de seleção as outras parcelas que são calculadas com base no valor total ** com o desconto** são exibidas entre as opções. Ao selecionar uma prestação diferente, no entanto, o valor exibido torna-se o valor correto.

Este cenário só acontece para desconto de cartão e no momento da seleção. A compra ** nunca é fechada com o valor errado***.


##

## Simulação



1. Criar um benefício com quantidade restrita de parcelas;
2. Acessar a loja e criar um novo carrinho, procedendo ao check-out;
3. Selecionar o número de parcelas em que o benefício é aplicado;
4. Observe que quando você abrir o campo de seleção de parcelas mais uma vez, as outras opções também exibem o desconto;
5. Selecione outra prestação e veja se o valor é ajustado.


##

## Workaround


Há uma correção disponível para este cenário como um recurso "beta". Você pode chegar à equipe de suporte através de um ticket para obter mais detalhes.




