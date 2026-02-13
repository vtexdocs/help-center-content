---
title: 'Buying Policies'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-02-09T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: buying-policies
locale: pt
---

> ⚠️ A funcionalidade **Buying Policies** está disponível apenas para o **B2B Buyer Portal**.

**Buying Policies** é a funcionalidade pela qual os usuários da organização compradora configuram mecanismos e definem critérios para autorizar ou negar pedidos automaticamente. Ela opera como uma camada de controle no processo de compra, permitindo a criação de fluxos personalizados de revisão de pedidos.

A solução contribui para uma maior governança da organização e promove maior conformidade com as políticas de compra vigentes, e seus mecanismos permitem a combinação de diversos tipos de regras:

* **Limite de gastos:** limites de gastos por pedido, garantindo que pedidos acima, abaixo ou equivalentes a determinados valores exijam aprovação.
* **Critérios de compra:** regras específicas que determinam quando um pedido deve passar por aprovação, com base em múltiplos fatores (limites, budgets, origem do pedido, entre outros).
* **Fluxo de aprovação:** processo multinível de aprovação, que pode variar conforme a complexidade organizacional.
* **Gestão de pedidos em aprovação:** acompanhamento de pedidos que estão aguardando aprovação, garantindo que somente após a aprovação eles possam prosseguir no fluxo.

## Funcionamento geral

Os passos para a configuração de uma buying policy são:

1. O usuário configura o critério de avaliação de pedidos.
2. Este critério é associado a uma ação, que pode ser:
    * Aprovar o pedido
    * Negar o pedido
    * Exigir aprovação manual
3. Para a aprovação manual, o usuário configura de um a cinco níveis de aprovação hierárquica, nos quais cada nível pode negar o pedido, mas sua aprovação depende da avaliação de todos.

## Permissões de Storefront

Para configurar as buying policies da organização, o perfil de [Storefront Permissions](https://developers.vtex.com/docs/guides/storefront-permissions) do usuário deve ter o recurso `ManageBuyingPolicies`. Para autorizar manualmente pedidos, é necessário o recurso `ApproveOrders`.

## Configurar buying policies

Os usuários podem adicionar, editar ou remover buying policies pela interface da Organizational Unit. Para mais informações, confira o artigo [Adicionar ou editar Buying Policies](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-buying-policies).

> ℹ️ Para gerenciar regras de autorização de pedidos via API, acesse a [Buying Policies API](https://developers.vtex.com/docs/api-reference/buying-policies-api), e o guia para desenvolvedores [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).
