---
title: 'Os usuários com mais de um pedido registrado na entidade BK com e-mails diferentes não conseguem ver os pedidos na página My Account'
id: 43NLxAbOtyVzOCdS9Dns8c
status: PUBLISHED
createdAt: 2024-02-21T22:30:42.218Z
updatedAt: 2024-02-21T22:30:43.137Z
publishedAt: 2024-02-21T22:30:43.137Z
firstPublishedAt: 2024-02-21T22:30:43.137Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: users-with-more-than-one-order-registered-on-bk-entity-with-different-emails-can-not-see-the-orders-on-my-account-page
locale: pt
kiStatus: Backlog
internalReference: 986324
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Devido à unificação de perfis, alguns usuários podem ter pedidos com e-mails diferentes, e isso é um problema para mostrar os pedidos na página minha conta (meus pedidos).

O my orders solicita essas informações na entidade BK dos dados mestre para remover o impacto do atraso na indexação, mas o BK tem o histórico e os pedidos com e-mails diferentes. Mas o OMS tem a linha de código para verificar se o e-mail retornado está correto, verificando o e-mail do consultor e o e-mail registrado nos pedidos.

## Simulação


Dois pedidos criados com e-mails diferentes, por exemplo, joao@gmail.com e joao2@gmail.com, quando esse usuário tiver o perfil de unificação, somente um e-mail será válido.
Depois disso, se o joao2@gmail.com fizer login na página my account (minha conta), não será possível ver os pedidos porque há um pedido antigo sem o caractere "2" no e-mail, portanto, a chave principal (e-mail) é diferente.





## Workaround


Não há solução alternativa no momento.





