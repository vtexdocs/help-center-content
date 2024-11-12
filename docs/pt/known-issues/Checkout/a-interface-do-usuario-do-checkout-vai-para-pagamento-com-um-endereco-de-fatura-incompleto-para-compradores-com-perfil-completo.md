---
title: 'A interface do usuário do checkout vai para Pagamento com um endereço de fatura incompleto para compradores com perfil completo'
id: NmN6oNKp1isyxssTE5jPR
status: PUBLISHED
createdAt: 2023-11-27T17:40:11.335Z
updatedAt: 2023-12-12T15:46:39.789Z
publishedAt: 2023-12-12T15:46:39.789Z
firstPublishedAt: 2023-11-27T17:40:12.008Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-ui-goes-to-payment-with-an-incomplete-invoice-address-for-shoppers-with-complete-profile
locale: pt
kiStatus: Fixed
internalReference: 937615
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um comprador tiver um perfil completo e a loja estiver configurada para usar um endereço de fatura para retirada, a interface do usuário avançará para o pagamento com um endereço de fatura incompleto.

## Simulação



- Configure o endereço da fatura para retirada;
 ![](https://vtexhelp.zendesk.com/attachments/token/1zJ19Lq9oJ5CHdkaHUfw4SAka/?name=image.png)

- Depois de adicionar produtos ao carrinho, use um e-mail com um perfil completo;
- A interface do usuário avançará para o pagamento mesmo com um endereço de fatura incompleto no sistema de perfil

## Workaround


Atualize o endereço da fatura por meio dos dados mestre.




