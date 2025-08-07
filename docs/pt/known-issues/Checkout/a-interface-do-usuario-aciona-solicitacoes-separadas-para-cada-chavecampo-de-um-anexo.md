---
title: "A interface do usuário aciona solicitações separadas para cada chave/campo de um anexo"
id: 5IF3veMFTFi9dERoEokokt
status: PUBLISHED
createdAt: 2024-03-01T21:05:37.154Z
updatedAt: 2024-03-01T21:07:41.105Z
publishedAt: 2024-03-01T21:07:41.105Z
firstPublishedAt: 2024-03-01T21:05:37.941Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-interface-do-usuario-aciona-solicitacoes-separadas-para-cada-chavecampo-de-um-anexo
locale: pt
kiStatus: Backlog
internalReference: 336371
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você define o valor de um campo de anexo de item por meio da interface do usuário, isso aciona uma solicitação para atualizar o orderForm, mesmo que ainda haja mais campos restantes.
Essa solicitação será processada e a resposta será o orderForm atualizado.

Nos casos em que o anexo tiver vários campos de texto abertos, isso poderá fazer com que os campos subsequentes sejam substituídos enquanto você estiver digitando seus valores.
Isso acontece porque a solicitação de atualização terá sido enviada quando esse campo ainda estava em branco e, portanto, também estará em branco na resposta.

Nos casos em que o item tiver um anexo de assinatura com várias chaves, isso poderá disparar uma mensagem de erro como "unable to communicate with seller" / "não foi possível se comunicar com o vendedor".
Isso acontece porque a assinatura espera que várias chaves tenham sido preenchidas, mas a primeira solicitação só enviou uma.

## Simulação


Crie um anexo com pelo menos duas chaves/campos.
Adicione um item vinculado a esse anexo em seu carrinho e, em seguida, adicione o anexo.
Por fim, defina o valor de um campo e observe o comportamento que se segue

## Workaround


N/A




