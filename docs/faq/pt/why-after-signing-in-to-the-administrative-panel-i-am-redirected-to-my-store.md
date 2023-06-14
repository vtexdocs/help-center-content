---
title: 'Por que ao fazer login no painel administrativo sou redirecionado para minha loja?'
id: 3JOlJmgmacAqCQEe0kwGwg
status: PUBLISHED
createdAt: 2017-10-01T03:35:33.165Z
updatedAt: 2021-04-06T20:20:56.407Z
publishedAt: 2021-04-06T20:20:56.407Z
firstPublishedAt: 2017-10-01T03:43:27.490Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_4
slug: por-que-login-no-admin-redireciona-para-loja
locale: pt
legacySlug: por-que-login-no-admin-redireciona-para-loja
---

Este cenário acontece quando o email utilizado para fazer login no painel administrativo possui acesso a algum recurso de Televendas, configuração realizada através de [perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete), no __Gerenciamento da conta__.

Os perfis de televendas bloqueiam o acesso ao __Catálogo__, ou seja, o usuário não consegue adicionar um produto, por exemplo. Se for necessário acessar esse módulo, o usuário deverá trabalhar com dois logins diferentes.

Caso o perfil de acesso possua permissão para televendas e também outros módulos, o o acesso deve ser feito diretamente pela URL do módulo, por exemplo, para o Gerenciamento de pedidos: `https://{AccountName}.myvtex.com/admin/checkout`
