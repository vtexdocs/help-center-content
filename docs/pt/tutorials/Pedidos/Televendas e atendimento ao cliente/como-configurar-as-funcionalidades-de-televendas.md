---
title: 'Como configurar as funcionalidades de televendas'
id: 76FNgQP2Glc4umMJ5Yr50R
status: PUBLISHED
createdAt: 2021-05-13T18:07:05.617Z
updatedAt: 2023-03-29T21:17:46.146Z
publishedAt: 2023-03-29T21:17:46.146Z
firstPublishedAt: 2021-05-17T12:07:03.757Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-telesales-features
legacySlug: como-configurar-as-funcionalidades-de-televendas
locale: pt
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

Para estruturar uma operação de televendas e atendimento ao cliente, é necessário que o administrador da loja faça algumas pré-configurações.

Veja abaixo quais são as etapas de configuração para utilizar as funcionalidades de televendas disponíveis em lojas VTEX.

- [Criar usuário de televendas](#criar-usuario-de-televendas)
- [Configurar a Toolbar de televendas](#configurar-a-toolbar-de-televendas)
- [Configurar Carrinho Compartilhável](#configurar-carrinho-compartilhavel) (opcional)
- [Habilitar preço manual](#habilitar-preco-manual) (opcional)

Para saber como operar as funcionalidades configuradas, confira o guia [Como utilizar as funcionalidades de televendas](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS).

## Criar usuário de televendas

Antes de iniciar uma operação de televendas na sua loja, operadores de televendas e atendimento ao cliente precisam ser cadastrados no **Configurações da conta** com o perfil de acesso Call Center Operator.

Confira o tutorial [Como criar um usuário de televendas](https://help.vtex.com/pt/tutorial/como-criar-um-usuario-de-televendas--frequentlyAskedQuestions_4227) para saber mais sobre esse processo.

Após essa configuração, usuários que fizerem login com um email cadastrado nesse perfil serão redirecionados para a página inicial da loja, onde a [Toolbar de televendas](https://help.vtex.com/pt/tutorial/toolbar-de-televendas--tutorials_5500) será exibida.

Usuários com o perfil de televendas (Call Center operator) também podem visualizar, acompanhar e realizar alterações nos pedidos realizados na loja a partir do Admin, na página [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi).

Para entender todos os perfis de acesso disponíveis na sua loja, leia o artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/como-criar-perfil-de-acesso).

## Configurar a Toolbar de televendas

Para lojas desenvolvidas no [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io), é necessário configurar o aplicativo **VTEX Telemarketing** para habilitar e customizar a toolbar de televendas. Acesse o guia [VTEX Telemarketing](https://developers.vtex.com/vtex-developer-docs/docs/vtex-telemarketing) para saber mais sobre esse processo.

Nas demais lojas, as cores e os botões da Toolbar de televendas podem ser customizados. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página. 

Saiba mais em [Customizar a Toolbar de televendas](https://help.vtex.com/pt/tutorial/customizar-a-toolbar-de-televendas--1XEz1zqO3KyIuwC4asUsOg).

## Configurar Carrinho Compartilhável

O aplicativo [Carrinho Compartilhável](https://apps.vtex.com/vtex-social-selling/p) permite que vendedores selecionem produtos para seus clientes e compartilhem o carrinho preenchido por canais como WhatsApp, Facebook Messenger e email, em ações de Social Selling.

Para utilizar esse recurso, é necessário instalar e ativar o aplicativo. Você também pode customizar os botões da interface de compartilhamento do carrinho. Para realizar essas configurações, siga o processo descrito no artigo [Como ativar o app Carrinho Compartilhável (Social Selling)](https://help.vtex.com/pt/tutorial/como-ativar-o-app-carrinho-compartilhavel--1lS3fQdXpOoC0BTeVhydfg).

## Habilitar preço manual

A funcionalidade de preço manual possibilita que usuários com o perfil Call center operator e Super Admin alterem o preço de produtos no carrinho de compras.

Para isso, é necessário que a funcionalidade de preço manual tenha sido habilitada pelos desenvolvedores da loja por meio da API de Checkout. Confira a [documentação da API de Checkout](https://developers.vtex.com/docs/api-reference/checkout-api) para saber mais sobre esse procedimento.

Preços manuais cadastrados no carrinho precisam ser aprovados pelo administrador da loja ou por um usuário com permissão no sistema de [Autorização de Pedidos](https://help.vtex.com/pt/tutorial/how-order-authorization-works--3MBK6CmKHAuUjMBieDU0pn) para que o pedido siga o fluxo de faturamento.

<div class="alert alert-info">
Não é possível alterar preços acessando a loja pela URL final  (<i>www.dominioloja.com.br</i>). A funcionalidade de preço manual no televendas só funciona se o operador acessar a loja pelo dominio <i>www.dominioloja.myvtex.com</i> e tiver a permissão de <a href="https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#call-center-operator">Call Center operator</a> em seu <a href="https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">perfil de acesso</a>. 
</div>
