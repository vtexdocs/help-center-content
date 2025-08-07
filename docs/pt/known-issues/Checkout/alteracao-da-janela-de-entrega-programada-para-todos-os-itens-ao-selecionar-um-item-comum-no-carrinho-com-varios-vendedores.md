---
title: "Alteração da janela de entrega programada para todos os itens ao selecionar um item comum no carrinho com vários vendedores"
id: 1Dkdy8fr6AcV766gDgYgqp
status: PUBLISHED
createdAt: 2024-08-30T17:20:33.623Z
updatedAt: 2024-08-30T17:20:34.491Z
publishedAt: 2024-08-30T17:20:34.491Z
firstPublishedAt: 2024-08-30T17:20:34.491Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: alteracao-da-janela-de-entrega-programada-para-todos-os-itens-ao-selecionar-um-item-comum-no-carrinho-com-varios-vendedores
locale: pt
kiStatus: Backlog
internalReference: 1089806
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando dois itens de vendedores diferentes com entrega programada estão em um carrinho, suas janelas de entrega podem se sobrepor. Se a data selecionada para o primeiro item for anterior ao período sobreposto, a interface do usuário do checkout considerará a data do segundo item. Por exemplo:

O item 1 oferece 30 e 31 de agosto como janela de entrega;
O item 2 oferece 31 de agosto como janela de entrega;
Se você selecionar 30 de agosto para o item 1 e 31 de agosto para o item 2, a interface do usuário do Checkout considerará 31 de agosto, pois ambos os itens podem ser enviados nessa data.

## Simulação



- Adicione dois itens ao carrinho de diferentes vendedores;
- Ambos os vendedores devem oferecer entrega programada, mas o primeiro item deve ter pelo menos uma opção anterior (dê uma olhada no exemplo em Resumo);
- Selecione as janelas de entrega anteriores para o primeiro item;
- Selecione uma janela de entrega comum entre os dois itens para o segundo item;
- Vá para Payment (Pagamento) e veja que ambos os itens serão enviados na mesma data, selecionada para o segundo item.



## Workaround


N/A




