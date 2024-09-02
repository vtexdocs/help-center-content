---
title: 'Como funciona a Autorização de pedidos'
id: 59otf1ZTweLmtZ07hIR854
status: DRAFT
createdAt: 2019-03-12T16:37:03.426Z
updatedAt: 2020-03-05T18:16:51.131Z
publishedAt: 
firstPublishedAt: 2019-03-12T16:38:58.550Z
contentType: tutorial
productTeam: Post-purchase
author: 523NSmHfn2IKEoiy2Q44YS
slug: como-funciona-a-autorizacao-de-pedidoss
locale: pt
legacySlug: como-funciona-a-autorizacao-de-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

No módulo de Gerenciamento de pedidos, a seção __Autorização de pedidos__ permite o controle e a aprovação de pedidos com divergências de preços na sua loja.

![autorização-de-pedidos PT](https://images.ctfassets.net/alneenqid6w5/2oP1np8C9Cv004b8NPk1Jn/a7694ae95272db05344bf35d93206e58/autoriza____o-de-pedidos__PT.png)

As divergências de preços entre pedidos podem ser encontradas em dois principais cenários: 

## Descontos manuais

Quando um pedido foi originado na sua loja usando descontos manuais aplicados por operadores de televendas, por exemplo. 

## Divergência de valores

Quando um pedido é originado em um [marketplace](https://help.vtex.com/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8) com preço diferente daquele registrado no [seller](https://help.vtex.com/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w). 

Para evitar a perda de faturamento com erros de integração ou com pedidos cujos preços foram alterados manualmente, a Autorização de pedidos permite a simplificação do processamento dos seus pedidos com divergência de preço através de regras de autorização.

As regras de autorização são atribuídas a uma faixa percentual à sua escolha e definem qual ação deve ser tomada de acordo com a variação de preço de um pedido. Por exemplo:

- De 0% a 10% de variação de preço, o pedido será aprovado automaticamente

![regra-1-autorização-de-pedidos PT](https://images.ctfassets.net/alneenqid6w5/1wohOoNoG0OrOU69zBxoPM/ff7ca27e0807785aae26bab5190271fc/regra-1-autoriza____o-de-pedidos_PT.png)

- De 10% a 20% de variação de preço, o pedido será enviado para o usuário `usuario@exemplo.com.br` aprovar através de uma tarefa no VTEX DO

![regra2-autorização-de-pedidos PT](https://images.ctfassets.net/alneenqid6w5/XkBsErQYCMnQe4TQefwCL/b7cacd0f633c1768de1cb0b703785479/regra2-autoriza____o-de-pedidos_PT.png)

- De 20% a 100% de variação de preço, o pedido será negado automaticamente

![regra3-autorização-de-pedidos pt](https://images.ctfassets.net/alneenqid6w5/2t9asV03OYvCiscGKaws7m/2df3c008d6e802f0ecaf8d48b2b3d751/regra3-autoriza____o-de-pedidos_pt.png)

Para a configuração da segunda regra, será necessário o cadastro de usuários com [permissões](https://help.vtex.com/tutorial/como-criar-perfil-de-acesso--tutorials_526) para aprovação de pedidos. 

Nesses cenários, o usuário cadastrado como responsável recebe uma notificação no VTEX DO para cada novo pedido de status `waiting-for-manual-authorization`.   

Ao ser notificado, o usuário deverá:

1. Acessar os detalhes do pedido desejado em <strong>Todos os pedidos</strong>, no módulo <strong>Gerenciamento de Pedidos</strong>
2. Selecionar o botão <strong>Aprovar pedido</strong>
3. Confirmar estar de acordo com o impacto das suas ações

Os demais pedidos, classificados nas faixas de variação de preço cujas regras não pedem aprovação por usuário, serão aprovados ou negados pelo sistema automaticamente. 

>ℹ️ É possível configurar uma hierarquia de usuários para aprovações de pedidos, isso é, para aprovações em cadeia. Para isso, basta inserir mais de um e-mail em Pessoas autorizadas e escolher a ordenação desejada dos usuários cadastrados.





