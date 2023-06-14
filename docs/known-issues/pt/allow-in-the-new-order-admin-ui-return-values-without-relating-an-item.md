---
title: 'Permitir no novo Order Admin UI valores de retorno sem relacionar um item'
id: 4mD1o81lDZEB5y35KRM6LW
status: PUBLISHED
createdAt: 2022-02-08T01:36:09.738Z
updatedAt: 2022-11-25T22:03:00.483Z
publishedAt: 2022-11-25T22:03:00.483Z
firstPublishedAt: 2022-02-08T01:36:10.568Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: permitir-no-novo-order-admin-ui-valores-de-retorno-sem-relacionar-um-item
locale: pt
kiStatus: Fixed
internalReference: 519576
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para fluxos de devolução dentro de um pedido, é possível indicar quais produtos serão devolvidos e/ou valores associados, tais como custos de envio ou simplesmente uma parte do valor do pedido.

Neste caso, o problema é que a validação está sendo realizada na nova IU que requer a associação de pelo menos um item dentro da ordem a fim de continuar com o processo. Isto limita os usuários que só precisam devolver valores, ou seja, sem associar produtos.



## Simulação



- Para as contas que têm a nova IU de detalhe do pedido, seria simplesmente entrar em um pedido faturado e tentar um retorno somente de valor sem selecionar nenhum produto.
- O botão para continuar com o fluxo de retorno (**Reembolso de pedido**) será desativado até que pelo menos um dos itens do pedido seja selecionado.



## Workaround


Uma alternativa será usar a versão anterior da IU de detalhe do pedido para registrar **restituições de valores somente** enquanto esta limitação for resolvida na nova IU.

