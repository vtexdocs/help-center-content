---
title: 'UseSessionRegionAtCheckout não funciona corretamente ao adicionar o primeiro item ao carrinho'
id: 2NzgWTbaHF47f5dl49A2D5
status: PUBLISHED
createdAt: 2023-10-24T22:51:27.435Z
updatedAt: 2023-10-26T10:55:29.843Z
publishedAt: 2023-10-26T10:55:29.843Z
firstPublishedAt: 2023-10-24T22:51:28.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: usesessionregionatcheckout-nao-funciona-corretamente-ao-adicionar-o-primeiro-item-ao-carrinho
locale: pt
kiStatus: Backlog
internalReference: 925049
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se uma conta tiver a opção "UseSessionRegionAtCheckout" configurada, ao adicionar um item e o formulário de pedido não tiver "shippingData", o vendedor não será definido, mostrando preços e disponibilidade diferentes.

## Simulação



- A conta deve estar usando UseSessionRegionAtCheckout;
- Defina um regionId na sessão;
- Adicione um item ao carrinho; ele pode mostrar preços e disponibilidade diferentes

## Workaround


Atualize o orderForm (API Get current ou crie um novo carrinho) usando o parâmetro `?refreshOutdatedData=true`.




