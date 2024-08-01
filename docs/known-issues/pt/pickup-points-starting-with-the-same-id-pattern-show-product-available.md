---
title: 'Os pontos de coleta que começam com o mesmo padrão de ID mostram o produto disponível'
id: 1iCnOFHyKNTLvY20VS58HP
status: PUBLISHED
createdAt: 2024-01-10T16:01:39.766Z
updatedAt: 2024-01-10T16:01:40.403Z
publishedAt: 2024-01-10T16:01:40.403Z
firstPublishedAt: 2024-01-10T16:01:40.403Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-pontos-de-coleta-que-comecam-com-o-mesmo-padrao-de-id-mostram-o-produto-disponivel
locale: pt
kiStatus: Backlog
internalReference: 964036
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando os dois pontos de coleta com IDs começam com o mesmo padrão, a interface do usuário do checkout os valida como a mesma loja, mostrando um produto disponível.

## Simulação



- Registre dois pontos de retirada: um com ID 8 e outro com ID 835;
- Associe-os a diferentes estratégias de remessa, em que apenas uma retirada deve ter um produto disponível;
- Monte um carrinho e selecione a retirada em que o produto não deve estar disponível;
- O produto aparecerá como disponível

## Workaround


N/A




