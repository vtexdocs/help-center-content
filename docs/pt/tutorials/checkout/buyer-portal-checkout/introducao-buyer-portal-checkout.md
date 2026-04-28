---
title: 'Introdução ao Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-24T18:00:00.000Z
updatedAt: 2026-04-24T18:00:00.000Z
publishedAt: 2026-04-24T18:00:00.000Z
firstPublishedAt: 2026-04-24T18:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: buyer-portal-checkout-introduction
locale: pt
---

> ℹ️ Esta funcionalidade está disponível apenas para lojas que utilizam o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), que atualmente está disponível para contas selecionadas.

O **Buyer Portal Checkout** é a nova versão do checkout VTEX, projetado para oferecer uma experiência de finalização de compra rápida e customizável. A solução substitui a experiência anterior do [Checkout VTEX](/pt/docs/tutorials/checkout-vtex-visao-geral) por um fluxo baseado nas melhores práticas de usabilidade do mercado, com foco em aumentar a taxa de conversão das lojas e simplificar a personalização da jornada de compra.

![Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_1.png)

## Conceito

O Buyer Portal Checkout apresenta uma arquitetura mais moderna, desenvolvida para proporcionar maior flexibilidade, segurança e escalabilidade à experiência de compra. Entre as características que definem a solução, destacam-se:

- Fluxo de compra otimizado para conversão.
- Alta performance, mesmo em carrinhos com muitos itens.
- Otimização para dispositivos móveis e desktop.
- Suporte a opções omnichannel sofisticadas.

> ℹ️ O Buyer Portal Checkout está em fase beta fechado e, no momento, está disponível apenas para lojas localizadas nos Estados Unidos. Para conhecer as condições de adesão, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Funcionalidades

Conheça as principais funcionalidades do Buyer Portal Checkout, que foram desenvolvidas para otimizar a experiência de compra, facilitar a personalização e aumentar a conversão da sua loja.

### Informações de contato

A funcionalidade Informações de contato permite que o comprador especifique as informações do destinatário na experiência de entrega. A funcionalidade busca atender a diferentes cenários, como entrega única, múltiplas entregas — em que diferentes produtos são entregues por métodos distintos — e casos de uso B2C ou B2B.

![Informações de contato](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_2.png)

### Cobrança da conta

A funcionalidade de Cobrança da Conta permite que o comprador escolha um método de pagamento que gera uma cobrança diretamente para a conta da empresa. O pagamento dessa cobrança é processado por meio do fluxo de [punchout](#punchout).

![Cobrança da conta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_3.png)

### Punchout

O fluxo de [Punchout do carrinho](https://developers.vtex.com/docs/guides/punchout-cart-integration) permite que empresas integrem seus sistemas de eprocurement diretamente ao site de e-commerce do fornecedor em operações B2B. Com essa funcionalidade, a finalização da compra é realizada externamente, diretamente pelo sistema de eprocurement da empresa.

### Endereços de cobrança

A funcionalidade Endereços de cobrança permite múltiplos endereços de cobrança por organização e possibilitar que os compradores selecionem explicitamente o endereço de cobrança correto durante o checkout. A funcionalidade garante que o endereço de cobrança registrado no pedido reflita com precisão a realidade fiscal da transação e seja propagado de forma consistente para os sistemas posteriores.

![Endereços de cobrança](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_3.png)

### Entrega agendada

A [Entrega agendada](/docs/pt/tutorials/configurar-entrega-agendada-fastcheckout) permite às lojas VTEX oferecer aos clientes a possibilidade de escolher o melhor dia e horário para receber suas compras. Essa configuração é realizada diretamente nas políticas de envio e definem os períodos disponíveis para entregas.

### Políticas de compra

O sistema de [Políticas de compra](https://developers.vtex.com/docs/api-reference/buying-policies-api) suporta regras dinâmicas que os lojistas podem configurar para se adequar aos seus processos específicos de autorização. A funcionalidade disponibiliza um mecanismo para que os usuários registrem expressões de regras customizadas, oferecendo maior flexibilidade e extensibilidade. O processo de aprovação é hierárquico e utiliza um sistema de avaliação baseado em prioridade.

### Assembly Options

O recurso de [Assembly Options](https://help.vtex.com/pt/docs/tutorials/assembly-options) permite agrupar itens de um kit em um único elemento na lista do carrinho. Esse elemento exibe informações detalhadas sobre a composição do kit e oferece controle das quantidades de cada item.

![Assembly Options](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_4.png)

### Cartões salvos

A funcionalidade de [salvar cartões](https://developers.vtex.com/docs/api-reference/checkout-custom-card-payment-api) permite fluxos de tokenização de cartões de crédito na VTEX, abrangendo gerenciamento de perfis, operações do cofre de cartões, processos de checkout, interações com gateways de pagamento e fluxos de autenticação.

### Gerenciador de Endereços

O Gerenciador de Endereços permite que usuários com o nível de permissão adequado adicionem e editem endereços durante uma compra B2B. O endereço utilizado para finalizar a compra ficará salvo na lista de endereços para futuras compras.

![Gerenciador de Endereços](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_5.png)

### Entrega múltipla (Multidelivery)

A funcionalidade permite que os compradores escolham uma [opção de envio](https://help.vtex.com/pt/docs/tutorials/opcoes-de-envio-beta) para cada item, proporcionando mais  flexibilidade e melhoria na experiência do usuário contribuem para a redução do abandono de carrinho e beneficiam lojistas em modelos de negócio B2B.

![Multidelivery](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_6.png)

### Campos contábeis

[Campos de dados customizaveis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis), configurados pela organização compradora para coletar informações administrativas ou financeiras, como centro de custo, número de pedido interno (PO) e outros dados de controle.

![Campos contábeis](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_7.png)

### Pickup Store

O Buyer Portal Checkout permite que os compradores localizem e selecionem uma loja para retirada do pedido durante o processo de finalização de compra. É possível buscar por endereço ou CEP, filtrar por raio e verificar a disponibilidade dos itens em tempo real para cada local.

![Campos contábeis](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_8.png)
