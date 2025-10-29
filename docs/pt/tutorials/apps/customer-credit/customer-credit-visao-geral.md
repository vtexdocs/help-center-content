---
title: 'Customer Credit - Visão Geral'
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2024-02-09T21:37:56.199Z
publishedAt: 2024-02-09T21:37:56.199Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slugEN: customer-credit-overview
legacySlug: credit-control-visao-geral
locale: pt
subcategoryId: 7EWKfPIGfmI0G8iMYK8Aiy
order: 1
---

O Customer Credit é a app da VTEX que permite uma loja oferecer crédito exclusivo a seus clientes de confiança, aumentando o poder de compra ao permitir um prazo maior para pagamento dos pedidos.

## Quando utilizar

Modelos de negócio que possuem uma relação comercial consolidada com seus clientes geralmente necessitam de um sistema de gerenciamento de crédito que permita a emissão de boletos faturados sem comprometer o fluxo de caixa da empresa.

A aprovação desses tipos de pagamentos em plataformas de ecommerce costumam demandar esforço manual de aprovação pedido a pedido, mesmo para aqueles clientes que já possuem crédito disponível.

Lojas que realizam transações comerciais B2B, tais como, distribuidores de redes varejistas, venda direta para revendedores, materiais de escritório para empresas ou insumos industriais, podem utilizar o Customer Credit para oferecer uma experiência de compra e pagamento a prazo integrada à plataforma VTEX.

## Como funciona

Por meio do Admin VTEX ou da [API do Customer Credit](https://developers.vtex.com/docs/api-reference/customer-credit-api), você pode realizar as seguintes ações no app do Customer Credit:

- Criar e gerenciar contas para os clientes escolhidos
- Definir limites e tolerâncias de crédito para cada conta
- Configurar prazos e parcelamentos de títulos de cobrança
- Acompanhar e modificar o status dos títulos emitidos

> ℹ️ Quando instalado, o Customer Credit aparece como uma opção de pagamento no Checkout somente para os clientes selecionados pelo lojista, exibindo o valor de crédito disponível para ser utilizado na compra.

Veja abaixo o fluxo básico de funcionamento do Customer Credit nas lojas VTEX:

![GIF_CC_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/apps/customer-credit/customer-credit-visao-geral_1.gif)

## Definições no Customer Credit

### Conta (Customer Credit account)

Para utilizar o Customer Credit como meio de pagamento em uma compra, o cliente deve ter uma conta cadastrada pelo lojista no app do Customer Credit. Esta conta possui informações como, tipo e número de documento do titular, email, limite e tolerância de crédito.

### Limite de crédito

Cada conta possui um limite de crédito cadastrado no momento de sua abertura. Esse limite indica o valor máximo que o cliente pode utilizar para realizar uma ou mais compras ao mesmo tempo via Customer Credit.

> ⚠️ O limite de crédito de uma conta pode ser alterado pelo lojista a qualquer momento.

### Crédito disponível

Valor que o cliente ainda tem disponível em sua conta para realizar compras por meio do Customer Credit.

Sempre que o cliente conclui uma compra e o pedido é faturado, o valor do crédito disponível diminui. Entretanto, após o cliente efetuar o pagamento do título emitido, o valor de crédito disponível retorna ao valor pré-compra.

> ⚠️ No momento de uma compra, o cliente tem visibilidade de quanto crédito é possível utilizar via Customer Credit. Caso o valor da compra seja maior que o crédito disponível, o pagamento não poderá ser realizado por meio do Customer Credit.

### Título

Título é o documento gerado após o cliente realizar uma compra utilizando o Customer Credit como meio de pagamento e o pedido ser faturado.

Em casos de compras parceladas, os títulos são gerados de acordo com o número de parcelas. Por exemplo, uma compra efetuada com pagamento em 10x no Customer Credit irá gerar 10 títulos relacionados ao mesmo número do pedido.

### Prazos e parcelamentos

O Customer Credit permite que o lojista configure diferentes cenários de prazos e parcelamentos de títulos para oferecer uma maior flexibilidade de pagamento aos clientes cadastrados.

### Pré-autorização e liquidação

Após o cliente realizar a compra utilizando o Customer Credit, o pagamento é aprovado como um crédito e a plataforma pré-autoriza o valor, reservando-o automaticamente após 5 dias úteis ou até que o pedido seja faturado. Nesse momento ocorre a liquidação do valor na conta e os títulos de pagamento são gerados.

O fluxo no Customer Credit é similar ao de cartões de crédito em relação a modificações no pedido. Quando uma alteração de valor no pedido ocorre durante o período de pré-autorização, o valor do crédito é alterado.

> ⚠️ Se for necessário alterar uma ordem para diminuir o seu valor após o período de liquidação (emissão de títulos), o sistema irá atualizar os títulos para o novo valor. Caso o valor do pedido seja aumentado, o sistema criará novos títulos.

## Instalação e configuração
Para instalar e configurar o Customer Credit em sua loja, acesse a Track [Customer Credit - Como começar](/pt/tracks/customer-credit-como-comecar--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).
