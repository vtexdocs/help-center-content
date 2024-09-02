---
title: 'Campo Country como nulo em invoiceData'
id: 6TbzOvnKw5Uhcr1C5Jrneb
status: PUBLISHED
createdAt: 2023-12-13T15:53:26.073Z
updatedAt: 2023-12-19T21:22:09.038Z
publishedAt: 2023-12-19T21:22:09.038Z
firstPublishedAt: 2023-12-13T15:53:26.800Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: campo-country-como-nulo-em-invoicedata
locale: pt
kiStatus: Fixed
internalReference: 382175
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O campo Country em invoiceData pode ser nulo se for enviado via API ou se houver um endereço de fatura no Profile System com o país como nulo, portanto, os pedidos serão criados com dados incompletos em invoiceData.

## Simulação



- Montar um carrinho com itens;
- Envia o invoiceData sem o campo country preenchido via API;
- Concluir a compra

## Workaround


N/A



