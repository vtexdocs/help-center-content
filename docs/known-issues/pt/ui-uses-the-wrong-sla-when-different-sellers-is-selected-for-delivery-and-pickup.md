---
title: A interface do usuário usa o SLA errado quando vendedores diferentes são selecionados para entrega e coleta
id: 1FidTQU7qfHsuJLUbPTe7w
status: PUBLISHED
createdAt: 2023-04-25T21:52:00.104Z
updatedAt: 2023-05-08T18:04:36.712Z
publishedAt: 2023-05-08T18:04:36.712Z
firstPublishedAt: 2023-04-25T21:52:00.579Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-interface-do-usuario-usa-o-sla-errado-quando-vendedores-diferentes-sao-selecionados-para-entrega-e-coleta
kiStatus: Backlog
internalReference: 797023
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Etiquetas brancas de vendedores diferentes podem ser selecionadas para atender aos produtos ao usar endereços diferentes para entrega e retirada. A interface do usuário considera o SLA errado ao alternar entre entrega e retirada.
Por exemplo, ao mudar de entrega para retirada no carrinho, a interface do usuário aplicará o endereço de retirada e selecionará o ID do SLA de retirada que estava disponível para o endereço de entrega, que não está mais disponível e não mostrará/selecionará as novas retiradas.

## Simulação



- Configure duas etiquetas brancas de vendedor para endereços diferentes;
- Adicione produtos que estejam disponíveis para ambos os vendedores;
- Adicionar um endereço para entrega no carrinho;
- Mudar para retirada e adicionar um endereço diferente;
- Vá para a entrega e volte novamente para a retirada;
- Nenhuma retirada será selecionada e será exibida a mensagem "Shipping not available for your location." (Frete não disponível para sua localização)

## Workaround


N/A




