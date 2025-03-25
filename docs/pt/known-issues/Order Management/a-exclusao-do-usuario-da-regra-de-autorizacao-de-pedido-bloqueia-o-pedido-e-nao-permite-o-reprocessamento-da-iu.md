---
title: 'A exclusão do usuário da regra de Autorização de Pedido bloqueia o pedido e não permite o reprocessamento da IU'
id: 3OW5OoBG6OYW8mHDcZMoOi
status: PUBLISHED
createdAt: 2022-10-27T17:40:30.149Z
updatedAt: 2022-11-25T22:00:52.887Z
publishedAt: 2022-11-25T22:00:52.887Z
firstPublishedAt: 2022-10-27T17:40:30.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: user-deletion-from-order-authorization-rule-blocks-order-and-does-not-allow-ui-reprocessing
locale: pt
kiStatus: Backlog
internalReference: 623376
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando apagamos ou perdemos o acesso ao usuário vinculado a uma regra de aprovação de ordem, esta ordem não pode ser reprocessada para que um novo usuário possa aprovar a ordem e com isso a ordem permanece pendente de aprovação.



## Simulação



- Criar um link de regra de aprovação para um e-mail
- Criar uma ordem que se ajuste à regra criada na etapa anterior
- Eliminar este e-mail da base de usuários da loja.
- Adicionar um novo usuário à regra onde o usuário excluído está.

Neste momento, a ordem não terá sua regra atualizada.



## Workaround



Não há solução para este cenário;

