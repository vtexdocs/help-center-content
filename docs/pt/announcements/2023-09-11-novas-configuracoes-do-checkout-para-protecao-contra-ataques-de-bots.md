---
title: 'Novas configurações do Checkout para proteção contra ataques de bots'
id: 3kA92hues6c2XgRe1uf2Or
status: DRAFT
createdAt: 2023-09-11T17:23:20.383Z
updatedAt: 2024-06-28T18:38:49.327Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: new-checkout-settings-for-bot-attack-protection
locale: pt
legacySlug: novas-configuracoes-do-checkout-para-protecao-contra-ataques-de-bots
announcementImageID: ''
announcementSynopsisPT: 'Criamos novas configurações no Checkout, para evitar fraudes e pedidos não autorizados, fortalecendo a segurança.'
---


Visando aprimorar a segurança das informações da sua loja, a VTEX implementou novas configurações no Checkout, melhorando as defesas contra possíveis ataques de softwares que simulam o comportamento humano (bots).

## O que mudou?

Agora, as seguintes configurações estão disponíveis:

- [Exigir login ao fechar uma compra](#exigir-login-ao-fechar-uma-compra)
- [Tempo mínimo entre pedidos](#tempo-mínimo-entre-pedidos)
- [Tempo mínimo de existência de um carrinho para permitir uso de um novo cartão de crédito](#tempo-mínimo-de-existência-de-um-carrinho-para-permitir-uso-de-um-novo-cartão-de-crédito)

### Exigir login ao fechar uma compra

Por meio do campo `requiresLoginToPlaceOrder`, possibilitamos que compras sejam efetuadas apenas por clientes que tenham passado pelo processo de autenticação.
É exigido que o cliente esteja logado, usando o mesmo endereço de email fornecido no momento em que os produtos foram adicionados ao carrinho de compras.
Quando você optar por ativar este campo, a opção de finalização de compra sem login, conhecida como [SmartCheckout](https://help.vtex.com/pt/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) permanece desabilitada para todos os clientes da loja.

### Tempo mínimo entre pedidos

Por meio do campo `minimumPurchaseDowntimeSeconds`, é possível definir um tempo mínimo para que um comprador deva aguardar antes de efetuar outra compra.
Essa configuração diminui a probabilidade da criação de várias contas em sequência para realizar uma compra.

### Tempo mínimo de existência de um carrinho para permitir uso de um novo cartão de crédito

Por meio do campo `cartAgeToUseNewCardSeconds`, é estabelecido um intervalo de tempo mínimo no qual um carrinho de compras deve permanecer ativo antes que um novo cartão de crédito possa ser autorizado para uso nele.
Essa configuração diminui a probabilidade da criação de múltiplos carrinhos e a adição de novos cartões de crédito.
A ativação deste campo não influencia compras realizadas com cartões já previamente salvos na conta do cliente.

## Por que fizemos essa mudança?

Criamos as novas configurações para melhorar o nível de segurança contra tentativas de fraudes e pedidos não autorizados, fortalecendo a segurança dos lojistas e aumentando a proteção das contas dos clientes.

## O que precisa ser feito?

As novas configurações estão disponíveis no endpoint [Update an account's orderForm configuration](https://developers.vtex.com/docs/guides/update-an-account-orderform-configuration). Para mais informações sobre como ativar os campos de cada configuração, acesse [New Checkout Settings for Bot Attack Protection](https://developers.vtex.com/updates/release-notes/2023-09-12-new-checkout-settings-for-bot-attack-protection).
