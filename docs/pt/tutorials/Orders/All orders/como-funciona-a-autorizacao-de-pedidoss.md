---
title: 'Como funciona a Autorização de pedidos'
id: 59otf1ZTweLmtZ07hIR854
status: ARCHIVED
createdAt: 2019-03-12T16:37:03.426Z
updatedAt: 2020-03-05T18:16:51.131Z
publishedAt: 
firstPublishedAt: 2019-03-12T16:38:58.550Z
contentType: tutorial
productTeam: Post-purchase
author: 523NSmHfn2IKEoiy2Q44YS
slugEN: how-order-authorization-workss
locale: pt
legacySlug: como-funciona-a-autorizacao-de-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

No módulo de Gerenciamento de pedidos, a seção __Autorização de pedidos__ permite o controle e a aprovação de pedidos com divergências de preços na sua loja.

![autorização-de-pedidos PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/como-funciona-a-autorizacao-de-pedidoss_1.png)

As divergências de preços entre pedidos podem ser encontradas em dois principais cenários: 

## Descontos manuais

Quando um pedido foi originado na sua loja usando descontos manuais aplicados por operadores de televendas, por exemplo. 

## Divergência de valores

Quando um pedido é originado em um [marketplace](https://help.vtex.com/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8) com preço diferente daquele registrado no [seller](https://help.vtex.com/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w). 

Para evitar a perda de faturamento com erros de integração ou com pedidos cujos preços foram alterados manualmente, a Autorização de pedidos permite a simplificação do processamento dos seus pedidos com divergência de preço através de regras de autorização.

As regras de autorização são atribuídas a uma faixa percentual à sua escolha e definem qual ação deve ser tomada de acordo com a variação de preço de um pedido. Por exemplo:

- De 0% a 10% de variação de preço, o pedido será aprovado automaticamente

![regra-1-autorização-de-pedidos PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/como-funciona-a-autorizacao-de-pedidoss_2.png)

- De 10% a 20% de variação de preço, o pedido será enviado para o usuário `usuario@exemplo.com.br` aprovar através de uma tarefa no VTEX DO

![regra2-autorização-de-pedidos PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/como-funciona-a-autorizacao-de-pedidoss_3.png)

- De 20% a 100% de variação de preço, o pedido será negado automaticamente

![regra3-autorização-de-pedidos pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Orders/All%20orders/como-funciona-a-autorizacao-de-pedidoss_4.png)

Para a configuração da segunda regra, será necessário o cadastro de usuários com [permissões](https://help.vtex.com/tutorial/como-criar-perfil-de-acesso--tutorials_526) para aprovação de pedidos. 

Nesses cenários, o usuário cadastrado como responsável recebe uma notificação no VTEX DO para cada novo pedido de status `waiting-for-manual-authorization`.   

Ao ser notificado, o usuário deverá:

1. Acessar os detalhes do pedido desejado em <strong>Todos os pedidos</strong>, no módulo <strong>Gerenciamento de Pedidos</strong>
2. Selecionar o botão <strong>Aprovar pedido</strong>
3. Confirmar estar de acordo com o impacto das suas ações

Os demais pedidos, classificados nas faixas de variação de preço cujas regras não pedem aprovação por usuário, serão aprovados ou negados pelo sistema automaticamente. 

>ℹ️ É possível configurar uma hierarquia de usuários para aprovações de pedidos, isso é, para aprovações em cadeia. Para isso, basta inserir mais de um e-mail em Pessoas autorizadas e escolher a ordenação desejada dos usuários cadastrados.





