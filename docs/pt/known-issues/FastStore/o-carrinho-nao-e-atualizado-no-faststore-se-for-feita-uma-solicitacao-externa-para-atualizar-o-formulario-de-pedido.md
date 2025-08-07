---
title: "O carrinho não é atualizado no FastStore se for feita uma solicitação externa para atualizar o formulário de pedido"
id: 7ef1GxxapbH2XKKf7HBuAM
status: PUBLISHED
createdAt: 2024-10-31T15:08:54.129Z
updatedAt: 2024-11-01T14:04:48.204Z
publishedAt: 2024-11-01T14:04:48.204Z
firstPublishedAt: 2024-10-31T15:08:55.456Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: o-carrinho-nao-e-atualizado-no-faststore-se-for-feita-uma-solicitacao-externa-para-atualizar-o-formulario-de-pedido
locale: pt
kiStatus: Backlog
internalReference: 1127034
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O carrinho FastStore é criado/atualizado por meio de _ValidateCartMutation_.

Se ocorrer uma solicitação externa que atualize/complemente/enriqueça o carrinho, como `POST /attachments/marketingData`, o carrinho perderá sua referência e não será possível adicionar outro produto na primeira tentativa. Chamadas externas que alteram o orderForm podem deixar o carrinho obsoleto, o que significa que os itens no carrinho foram alterados fora do fluxo padrão do cliente na loja e não têm mais o mesmo estado de carrinho que o cliente armazenou no navegador. Quando isso acontece, a primeira solicitação _validateCartMutation_ é ignorada (por exemplo, o cliente adiciona outro produto) e, em seguida, a versão atual do orderForm é retornada, e esse novo produto não é adicionado ao carrinho.

Percebemos que esse comportamento ocorre tanto na versão 2 quanto na versão 3 do pacote `@faststore/api`.

## Simulação


Você pode validar esse comportamento fazendo as seguintes solicitações:

1. Adicionar um produto ao carrinho por meio de `POST ValidateCartMutation`;
2. Adicionar dados de marketing por meio de `POST api/checkout/pub/orderForm/U050MGX0CQ3/attachments/marketingData`;
3. Adicionar outro produto ao carrinho por meio de `POST ValidateCartMutation`.

Quando você adicionar o segundo item ao carrinho, ele não será adicionado. Ele terá de ser adicionado novamente.

## Workaround


Após cada solicitação que atualizar o carrinho (etapa 2 no exemplo acima), será necessário recuperar as informações atuais do carrinho e atualizá-las, conforme sugerido pela implementação abaixo:

```
await axios.post('/api/marketingdata', payload)

// update cart store
const updatedCart = cartStore.read()
cartStore.set(updatedCart)
```

Isso garantirá que o carrinho esteja atualizado para que, quando o cliente adicionar mais produtos, o carrinho esteja com informações atualizadas.


