---
title: "Alterar CEP não remove o endereço antigo"
id: 3kS6NurZhmokISg82eaMw2
status: PUBLISHED
createdAt: 2018-09-11T19:53:42.872Z
updatedAt: 2022-12-22T20:48:38.338Z
publishedAt: 2022-12-22T20:48:38.338Z
firstPublishedAt: 2018-09-11T20:10:52.209Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: alterar-cep-nao-remove-o-endereco-antigo
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao alterar o CEP, o endereço anteriormente preenchido não é removido do formulário.

Este cenário acontece somente na versão 6 do SmartCheckout e se limita à experiência do usuário, não havendo maiores falhas em torno disso.

## Simulação

1. Em um carrinho qualquer, inserir o CEP, número e complemento;
2. Alterar o CEP;
3. Observar que o campo número e complemento mantém os dados do primeiro passo, enquanto o esperado era esvaziá-los para exigir nova entrada de dados.

## Workaround

Não existe um workaround conhecido para este cenário.

