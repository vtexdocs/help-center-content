---
title: 'Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-24T18:00:00.000Z
updatedAt: 2026-04-24T18:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: buyer-portal-checkout
locale: pt
---

> ℹ️ Esta funcionalidade está disponível apenas para lojas que utilizam o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), que atualmente está disponível para contas selecionadas.

O **Buyer Portal Checkout** é a nova versão do checkout VTEX, projetado para oferecer uma experiência de finalização de compra rápida e customizável. A solução foi construída com base nas melhores práticas de usabilidade do mercado e diretamente integrada aos fluxos de B2B do Buyer Portal como [Contratos](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#contratos), [Campos contábeis](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#campos-contabeis), [Budgets](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#budgets) e [Buying Policies](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#buying-policies).

![Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_1.png)

## Conceito

O Buyer Portal Checkout apresenta uma arquitetura moderna, desenvolvida para proporcionar maior flexibilidade, segurança e escalabilidade à experiência de compra. Entre as características que definem a solução, destacam-se:

- Integração com ferramentas compliance do Buyer Portal.
- Otimização para dispositivos móveis e desktop.
- Suporte a opções omnichannel sofisticadas.

> ℹ️ O Buyer Portal Checkout está em fase beta fechado e, no momento, está disponível para clientes B2B na América do Norte. Para conhecer as condições de adesão, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Funcionalidades

O Buyer Portal Checkout entrega todas as funcionalidades esperadas de um checkout moderno, cobrindo o fluxo completo do carrinho até a confirmação do pedido. Entre as principais, destacam-se:

- Gerenciamento do carrinho com visualização e ajuste de itens (quantidade, adição, remoção individual ou em massa), agrupamento por canal de entrega (envio ou retirada em loja) e tratamento automático de itens indisponíveis.
- Resumo do pedido em tempo real, com detalhamento de subtotal, frete, descontos, promoções, impostos, vales-presente e total final.
- Simulação de envio direto no carrinho com endereço novo ou salvo.
- Suporte a múltiplos métodos de pagamento, incluindo cartão de crédito com parcelamento e cartões salvos (com fluxo B2B sem CVV), PIX com QR code e finalização com Google Pay ou one-click checkout.
- Revisão e confirmação do pedido com possibilidade de editar cada seção, status do pedido (aprovado ou pendente), número, resumos de entrega ou retirada e pagamento.
- Autenticação flexível do comprador, com login por email e senha ou código único.

Além desses recursos, a VTEX oferece funcionalidades para otimizar a experiência de compra de cenários B2B, facilitando a personalização e oferecendo segurança na transação para seus compradores.

### Budgets

A funcionalidade de [Budgets](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#budgets) permite que o comprador veja quais são os orçamentos associados ao seu pedido antes do fechamento da compra. Isso permite que ele tenha visibilidade sobre seus fundos contábeis e evite consumir além do determinado pela organização.

![Cobrança da conta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_3.png)

### Checkout para Punchout

O fluxo de [Punchout](https://developers.vtex.com/docs/guides/punchout) possibilita que compradores integrem seus sistemas de eprocurement diretamente ao site do ecommerce. O [Checkout para Punchout](https://developers.vtex.com/docs/guides/punchout-cart-integration) da VTEX é adaptado para esse tipo de integração, que permite que o usuário retorne o carrinho montado e finalize a compra pelo seu sistema de eprocurement.

### Endereços de cobrança

A funcionalidade Endereços de cobrança permite que os compradores selecionem explicitamente o endereço de cobrança correto durante o checkout. A funcionalidade garante que o endereço de cobrança registrado no pedido reflita com precisão a realidade fiscal da transação e seja propagado de forma consistente para os sistemas posteriores.

![Endereços de cobrança](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_3.png)

### Entrega agendada

A [Entrega agendada](/docs/pt/tutorials/configurar-entrega-agendada-fastcheckout) permite às lojas VTEX oferecer aos clientes a possibilidade de escolher o melhor dia e horário para receber suas compras. Essa configuração é realizada diretamente nas políticas de envio e definem os períodos disponíveis para entregas.

### Buying Policies

O sistema de [Buying Policies](https://help.vtex.com/pt/docs/tutorials/buying-policies) suporta regras dinâmicas que os compradores podem configurar para inserir suas regras de compliance dentro do processo de compra. [Gestores de organizações](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#gestao-organizacional) compradoras podem definir regras customizadas para que pedidos sejam encaminhados para aprovação antes de serem confirmados, ou mesmo sejam impedidos de serem completados no ato da compra.

### Assembly Options

O recurso de [Assembly Options](https://help.vtex.com/pt/docs/tutorials/assembly-options) permite agrupar itens de um kit em um único elemento na lista do carrinho. Esse elemento exibe informações detalhadas sobre a composição do kit e oferece controle das quantidades de cada item.

![Assembly Options](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_4.png)

### Cartões salvos

O Buyer Portal Checkout permite a utilização de cartões de crédito compartilhados pela organização. Ele também possibilita [salvar cartões](https://developers.vtex.com/docs/api-reference/checkout-custom-card-payment-api) para que possam ser utilizados em transações futuras (disponível para usuários que possuam essa permissão).

De forma integrada ao [fluxo de tokenização de cartões de crédito](https://help.vtex.com/pt/docs/tutorials/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online) da VTEX, as informações são processadas segundo as regras de [PCI](https://help.vtex.com/pt/docs/tutorials/o-que-e-o-pci-ssc), fornecendo segurança ao processo.

### Endereços de entrega salvos

No Buyer Portal Checkout, usuários podem selecionar endereços de entrega a partir da [lista fornecida pela sua organização](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt#enderecos-e-gestao-de-pagamentos). Caso tenham as permissões configuradas, usuários também podem registrar novos endereços e editar existentes diretamente na experiência de compra do checkout.

![Gerenciador de Endereços](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_5.png)

### Múltiplas opções de entrega (Multidelivery)

A funcionalidade permite que os compradores escolham diferentes combinações de envio e [opções de envio](https://help.vtex.com/pt/docs/tutorials/opcoes-de-envio-beta) para cada item, proporcionando mais flexibilidade para a finalização da compra.

![Multidelivery](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_6.png)

### Campos contábeis

[Campos de dados customizáveis](https://help.vtex.com/pt/docs/tutorials/campos-contabeis) podem ser configurados pela organização compradora para coletar informações administrativas ou financeiras, como centro de custo, número de pedido interno (PO) e outros dados de controle.

![Campos contábeis](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_7.png)

### Store Pickup

O Buyer Portal Checkout permite que os compradores localizem e selecionem uma loja para retirada do pedido durante o processo de finalização de compra. É possível buscar por endereço ou CEP, filtrar por raio e verificar a disponibilidade dos itens em tempo real para cada local.

![Campos contábeis](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/checkout/buyer-portal-checkout/introducao-buyer-portal-checkout_8.png)
