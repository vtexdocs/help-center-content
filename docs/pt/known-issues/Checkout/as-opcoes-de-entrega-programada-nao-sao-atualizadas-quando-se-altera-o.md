---
title: "As opções de entrega programada não são atualizadas quando se altera o endereço ou o vendedor"
id: z1sjFNyZVUJAR7G95itfT
status: PUBLISHED
createdAt: 2023-06-12T12:07:06.920Z
updatedAt: 2023-06-12T12:14:23.384Z
publishedAt: 2023-06-12T12:14:23.384Z
firstPublishedAt: 2023-06-12T12:12:13.214Z
contentType: knownIssue
productTeam: Checkout
author: 3iOk6R6XYZ9O18JHFLPk43
tag: Checkout
slugEN: as-opcoes-de-entrega-programada-nao-sao-atualizadas-quando-se-altera-o
locale: pt
kiStatus: Backlog
internalReference: 288574
---

## Sumário

__Cenário 1:__ em um carrinho identificado (mas não registrado), com um endereço mascarado na etapa de envio, ao mudar entre os endereços disponíveis, as opções de janela de entrega não são recalculadas na interface do usuário. 

__Cenário 2:__ Em um carrinho em que dois vendedores de marca branca estão configurados com o mesmo ID de SLA, mas com opções de janela de entrega diferentes. Depois de alterar a opção de entrega selecionada e o vendedor for alterado, as opções de janela de entrega não são recalculadas na interface do usuário.

Há uma solicitação para a API, que retorna com a "deliveryWindow", mas a interface do usuário não atualiza o componente. Ao selecionar uma janela de entrega inválida, não é possível ir para a etapa de pagamento para concluir a compra.

## Simulação

__Cenário 1:__

- Registre um comprador com dois endereços;
- Monte um carrinho e altere entre os endereços disponíveis na etapa de envio;
- Selecione a janela de entrega.

__Cenário 2:__

- Configure dois vendedores de marca branca diferentes com o mesmo SLA Id para entrega programada, mas com janelas de entrega diferentes;
- Cada um dos vendedores de marca branca também deve ter sua própria opção de entrega agendada;
- Selecione a entrega agendada específica para um dos vendedores;
- Altere para a entrega agendada com o mesmo SLA Id e selecione a janela de entrega.

## Workaround

__Cenário 1:__ N/A

__Cenário 2:__ Configure a mesma janela de entrega para todos os vendedores de marca branca ou altere o ID do SLA.

