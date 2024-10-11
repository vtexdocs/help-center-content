---
title: 'Pontos de retirada para pedidos de assinatura'
id: csIqB6iBh4QNIFdEj0nVv
status: PUBLISHED
createdAt: 2021-05-17T12:45:21.450Z
updatedAt: 2023-11-16T15:59:51.093Z
publishedAt: 2023-11-16T15:59:51.093Z
firstPublishedAt: 2021-05-17T20:55:05.477Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: pickup-points-for-subscription-orders
locale: pt
legacySlug: pontos-de-retirada-para-pedidos-de-assinatura-beta
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

Um ponto de retirada é um local físico onde o cliente tem a opção de retirar o seu pedido, em vez de recebê-lo em casa. Um cenário para essa funcionalidade é a retirada em loja física, por exemplo.

Além dos pedidos comuns, você pode disponibilizar pontos de retirada para pedidos de assinaturas, caso utilize o [módulo de Assinaturas](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

Veja abaixo o que é necessário para habilitar essa funcionalidade.

- [Requisitos](#requisitos)
- [Escolher pontos de retirada](#escolher-pontos-de-retirada)

>ℹ️ A funcionalidade de pontos de retirada está disponível apenas para as contas que já têm acesso ao [Checkout V6](https://help.vtex.com/pt/tutorial/ativar-o-checkout-v6--7qVqv3ptRvpVVplrvg8ruH).

## Requisitos

Para disponibilizar pontos de retirada para pedidos de assinatura, é necessário cumprir os requisitos logísticos listados abaixo.

*   Você precisa ter o [módulo de Assinaturas](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj) instalado e a opção de pontos de retirada habilitada. Para isso, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).
*   É necessário configurar pontos de retirada na sua loja. Apenas pontos de retirada da loja principal ou de franquias (Sellers White Label) podem ser utilizados em pedidos de assinaturas. Para saber como fazer a configuração, leia o artigo [Configurar Pontos de Retirada (Pickup Points)](https://help.vtex.com/pt/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
*   As transportadoras associadas aos pontos de retirada de pedidos de assinatura **não** podem ter [janelas de entrega](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi) configuradas.
*   Os itens precisam ter estoque na data do ciclo de assinatura, ou seja, no momento em que os pedidos recorrentes são criados.

## Escolher pontos de retirada

O cliente final pode escolher pontos de retirada para itens de um pedido de assinatura no momento do checkout, conforme ilustrado na imagem abaixo.

![subscriptionspickup PT](https://images.ctfassets.net/alneenqid6w5/6qqc7DV4Wk6yRWvsdiWNCP/d7b20c88e0bcc04178d9bd0a5234d702/subscriptionspickup_PT.gif)

Você também pode atribuir pontos de retirada ao [criar novas assinaturas](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#post_api-rns-pub-subscriptions) por meio da [API de Subscriptions](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1). No caso de assinaturas já existentes, você pode alterar o endereço de entrega com a [rota de atualização de assinatura da API de Subscriptions](https://developers.vtex.com/vtex-rest-api/reference/subscriptions-1#patch_api-rns-pub-subscriptions-id) para começar a utilizar um ponto de retirada.

Para descobrir os pontos de retirada disponíveis perto de um CEP ou de determinadas geocoordenadas, você pode utilizar a [API do Checkout](https://developers.vtex.com/vtex-rest-api/reference/fulfillment#listpickupppointsbylocation).

## Artigos relacionados

*   [Como configurar Assinaturas na sua loja](https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj)
*   [Configurar Pontos de Retirada (Pickup Points)](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E)
*   [Configurar Seller White Label como Ponto de Retirada (Pickup Point)](https://help.vtex.com/pt/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e)
