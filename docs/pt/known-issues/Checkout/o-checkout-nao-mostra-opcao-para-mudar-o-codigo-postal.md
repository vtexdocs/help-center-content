---
title: 'O checkout não mostra opção para mudar o código postal'
id: 23xS5PVwwuDm5NhSZN65sU
status: PUBLISHED
createdAt: 2022-04-18T14:04:04.407Z
updatedAt: 2022-11-25T21:50:05.024Z
publishedAt: 2022-11-25T21:50:05.024Z
firstPublishedAt: 2022-04-18T14:04:04.826Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-does-not-show-option-to-change-zip-code
locale: pt
kiStatus: Fixed
internalReference: 321598
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Para itens que estão restritos à coleta na loja para determinados endereços, a opção de alterar o código postal está desaparecendo enquanto o usuário estiver na guia de entrega, no carrinho .
Como resultado, o cliente não tem um fluxo claro para buscar a entrega em outros códigos postais.



## Simulação



1- Adicione um item ao seu carrinho que tenha a opção de retirar e enviar
2- Insira um código postal que não seja servido pela opção "entrega", e só seja servido pela opção "coleta".
3- Nesta etapa, a UI exibirá a seguinte mensagem "Seu item não está disponível para receber em seu endereço".
Você pode pegá-lo em um ponto próximo".
4- Agora, nesta mesma etapa, clique no código postal para mudá-lo
5- Note que a opção de editar o código postal desaparecerá.



## Workaround



Não há nenhuma solução conhecida.
Entretanto, se o usuário alternar entre retirar/receber o campo de código postal será exibido novamente para inserir um novo valor.

