---
title: 'A interface do usuário considera apenas os itens disponíveis para calcular o SLA'
id: 11gXg1N1Sul7EJUZACuQNW
status: PUBLISHED
createdAt: 2023-04-25T21:55:37.785Z
updatedAt: 2023-05-08T18:06:01.904Z
publishedAt: 2023-05-08T18:06:01.904Z
firstPublishedAt: 2023-04-25T21:55:38.201Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-interface-do-usuario-considera-apenas-os-itens-disponiveis-para-calcular-o-sla
locale: pt
kiStatus: Backlog
internalReference: 797028
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Etiquetas brancas de vendedores diferentes podem ser selecionadas para atender aos produtos ao usar endereços diferentes para entrega e coleta. Quando a opção de retirada é selecionada e, ao mudar para entrega, a interface do usuário considera apenas os itens disponíveis para calcular o novo SLA para entrega, mesmo que os produtos estejam disponíveis. O preço de entrega considerará apenas os itens selecionados disponíveis para retirada.

## Simulação



- Configure duas etiquetas brancas de vendedor para endereços diferentes;
- Adicione produtos que estejam disponíveis para ambos os vendedores;
- Adicionar um endereço para entrega no carrinho;
- Alterar para retirada e adicionar um endereço diferente;
- Vá para a entrega e veja que o preço considerará apenas os itens disponíveis para retirada

## Workaround


N/A




