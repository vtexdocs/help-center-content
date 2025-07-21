---
title: "A interface do usuário do checkout vai para Pagamento com um endereço de fatura incompleto para compradores com perfil completo"
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
slugEN: a-interface-do-usuario-do-checkout-vai-para-pagamento-com-um-endereco-de-fatura-incompleto-para-compradores-com-perfil-completo
locale: pt
kiStatus: Fixed
internalReference: 937615
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um comprador tiver um perfil completo e a loja estiver configurada para usar um endereço de fatura para retirada, a interface do usuário avançará para o pagamento com um endereço de fatura incompleto.

## Simulação



- Configure o endereço da fatura para retirada;
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Checkout/a-interface-do-usuario-do-checkout-vai-para-pagamento-com-um-endereco-de-fatura-incompleto-para-compradores-com-perfil-completo_1.png)

- Depois de adicionar produtos ao carrinho, use um e-mail com um perfil completo;
- A interface do usuário avançará para o pagamento mesmo com um endereço de fatura incompleto no sistema de perfil

## Workaround


Atualize o endereço da fatura por meio dos dados mestre.




