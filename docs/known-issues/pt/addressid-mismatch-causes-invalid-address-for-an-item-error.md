---
title: 'A incompatibilidade de AddressId causa o erro "endereço inválido para um item"'
id: 5bSac85eHb9NmrOhcTjHNw
status: PUBLISHED
createdAt: 2024-03-01T19:28:52.074Z
updatedAt: 2024-03-01T19:28:52.875Z
publishedAt: 2024-03-01T19:28:52.875Z
firstPublishedAt: 2024-03-01T19:28:52.875Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-incompatibilidade-de-addressid-causa-o-erro-endereco-invalido-para-um-item
locale: pt
kiStatus: Backlog
internalReference: 992503
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O anexo de carrinho `shippingData` suporta o campo `addressId` em alguns objetos diferentes: `logisticsInfo`, `address` e `selectedAddresses`.
O campo `addressId` também é mantido nos endereços salvos do usuário, mantidos na entidade AD do Master Data.

Ao fazer um pedido, a API de checkout compara o endereço de entrega selecionado no formulário de pedido com os endereços disponíveis no perfil do usuário.
Se ocorrer uma correspondência, o `addressId` em `address` e `selectedAddresses` do formulário de pedido será substituído pelo valor existente no perfil do usuário.

No entanto, em um ponto posterior das validações da API, ela também comparará esse `addressId` com o do objeto `logisticsInfo`.
Como o `logisticsInfo` não foi substituído pelo processo mencionado anteriormente, eles podem não corresponder, e essa validação posterior falhará.
Isso aciona a mensagem "**endereço inválido para um item**" / "endereço inválido para um item", impedindo que a compra seja concluída.


## Simulação



- Salve dois endereços diferentes no perfil de um usuário e anote seus valores `addressId`.
- Monte uma solicitação Place Order. Use um de seus endereços criados na etapa anterior, mas use o `addressId` do outro.
- Envie a solicitação. A resposta conterá a mensagem de erro "endereço inválido para um item"

## Workaround


Ao enviar a solicitação Place Order com um endereço salvo anteriormente, verifique se o valor usado para `addressId` corresponde aos dados reais do endereço.
Como alternativa, você também pode omitir o `addressId` da solicitação.





