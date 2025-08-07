---
title: "A API da região retorna a lista de vendedores devido ao cache"
id: 1uDscW8Z3tG4EXS23fCfci
status: PUBLISHED
createdAt: 2024-01-22T17:34:18.690Z
updatedAt: 2024-01-22T17:48:47.576Z
publishedAt: 2024-01-22T17:48:47.576Z
firstPublishedAt: 2024-01-22T17:34:19.518Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-api-da-regiao-retorna-a-lista-de-vendedores-devido-ao-cache
locale: pt
kiStatus: Backlog
internalReference: 969692
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao usar uma estrutura de subconta com região, se a API Get sellers by region or address for usada em ambas as contas para o mesmo canal de vendas e uma delas não estiver disponível para esse canal de vendas, ela retornará uma lista de vendedores devido ao cache.

## Simulação



- Crie uma nova loja;
- Defina um canal de vendas diferente para a loja;
- Use a API Get sellers by region or address in the store (Obter vendedores por região ou endereço na loja);
- Usar novamente a API para o mesmo canal de vendas na outra loja

## Workaround


N/A



