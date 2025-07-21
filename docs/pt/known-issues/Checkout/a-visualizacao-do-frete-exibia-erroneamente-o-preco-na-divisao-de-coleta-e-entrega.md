---
title: "A visualização do frete exibia erroneamente o preço na divisão de coleta e entrega"
id: 4Tp4x0C3XRjgtMdv8i1Y7o
status: PUBLISHED
createdAt: 2025-02-18T15:58:59.344Z
updatedAt: 2025-02-24T19:45:41.748Z
publishedAt: 2025-02-24T19:45:41.748Z
firstPublishedAt: 2025-02-18T15:59:00.738Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-visualizacao-do-frete-exibia-erroneamente-o-preco-na-divisao-de-coleta-e-entrega
locale: pt
kiStatus: Fixed
internalReference: 1181570
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O preço de entrega exibido na visualização do envio (carrinho) está incorreto quando há uma divisão entre a retirada, oferecida pelo vendedor A, e a entrega, oferecida pelo vendedor B, e ambos os vendedores oferecem um SLA de entrega com o mesmo nome. Por exemplo:


- Item 1, oferecido pelo Vendedor A, com SLAs: coleta X e entrega X
- Item 2, oferecido pelo vendedor B, com SLAs: coleta Y e entrega X

Quando você seleciona "Pick up in store":

- O item 1 tem retirada X
- O item 2 tem entrega X com um preço maior do que o registrado na loja.

## Simulação



- Adicione dois ou mais itens ao carrinho, em que um vendedor diferente atende a cada item;
- Certifique-se de que um dos itens não esteja disponível para retirada;
- Ambos os vendedores devem oferecer um SLA com o mesmo nome

## Workaround


N/A




