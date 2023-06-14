---
title: 'Não é possível simular fretes em carrinhos de recompra para endereços diferentes'
id: 503wM1KC9nzDvPO4c2bQYM
status: PUBLISHED
createdAt: 2019-07-09T15:13:05.370Z
updatedAt: 2022-12-22T20:46:25.967Z
publishedAt: 2022-12-22T20:46:25.967Z
firstPublishedAt: 2019-07-09T20:17:22.706Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: nao-e-possivel-simular-fretes-em-carrinhos-de-recompra-para-enderecos-diferentes
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Se o usuário identifica-se no Checkout sem fazer o login, o sistema completa a compra baseado nas informações que já estão salvas em seu perfil. Inclusive, o endereço. Desse modo, o usuário ficará impossibilitado de fazer outras simulações de frete.  

Isso acontece porque uma simulação de frete precisa, necessariamente, da inserção de um novo endereço para funcionar. E, neste caso, o usuário precisa ter feito o login. Caso contrário, seus dados continuaram protegidos. 


## Simulação

1. Monte um carrinho;
2. Insira um e-mail que já tenha usado para fazer uma compra;
3. Retorne para o carrinho; 
4. Altere o CEP no simulador de frete.

## Workaround

Em cenários de recompra, informe aos seus usuários que é preciso fazer login para simular fretes na página de produto.  

