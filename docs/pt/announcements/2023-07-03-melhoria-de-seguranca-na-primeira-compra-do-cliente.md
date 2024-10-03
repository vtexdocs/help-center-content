---
title: 'Melhoria de segurança na primeira compra do cliente'
id: 3RBko0KXi8eOm4nKARgReD
status: ARCHIVED
createdAt: 2023-07-03T11:34:49.078Z
updatedAt: 2023-10-09T14:12:03.607Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2023-07-03-improved-security-for-the-customers-first-purchase
locale: pt
legacySlug: melhoria-de-seguranca-na-primeira-compra-do-cliente
announcementImageID: ''
announcementSynopsisPT: 'Novo cookie do Checkout permite o aumento de segurança em sua loja'
---

Visando aprimorar a segurança das informações da sua loja, a VTEX realizou melhorias no acesso aos dados do cliente no cenário da sua primeira compra. Desde 30 de Junho de 2023, um novo cookie é encaminhado ao cliente no momento da criação do carrinho, impedindo que terceiros possam utilizar meios externos para ter acesso às suas informações pessoais.

## O que mudou?

Durante a primeira compra, as informações pessoais do cliente são exibidas sem mascaramento junto ao carrinho, já que ele ainda não possui um perfil criado na loja.

Agora, durante a criação de um novo carrinho, além do cookie `checkout.vtex.com` que contém o `orderFormId`, um novo cookie (`CheckoutOrderFormOwnership`) será encaminhado. Isso permitirá que apenas o cliente que criou o carrinho tenha acesso irrestrito às suas informações.

Caso haja uma tentativa externa de acesso aos dados do carrinho, as informações pessoais do cliente original não poderão ser visualizadas, pois os dados aparecerão mascarados.

## Por que fizemos essa mudança?

Realizamos essa melhoria para aumentar a segurança no acesso de informações em sua loja e dos seus clientes.

## O que precisa ser feito?

A atualização de segurança é automática para todas as lojas VTEX a partir de 30 de Junho de 2023. Não será necessária nenhuma ação de sua parte.
