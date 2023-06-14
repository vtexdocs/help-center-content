---
title: Customer Credit - Visão Geral
id: 1uIqTjWxIIIEW0COMg4uE0
status: PUBLISHED
createdAt: 2018-11-08T17:11:28.486Z
updatedAt: 2023-03-29T14:46:02.462Z
publishedAt: 2023-03-29T14:46:02.462Z
firstPublishedAt: 2018-11-08T19:14:39.491Z
contentType: tutorial
productTeam: Financial
author: 6xBnaVsQ7K60kemi2U2Q6w
slug: customer-credit-visao-geral
legacySlug: credit-control-visao-geral
subcategory: 7EWKfPIGfmI0G8iMYK8Aiy
---

O Customer Credit é a app da VTEX que permite a loja oferecer crédito para os clientes de confiança. Com mais tempo para pagar o cliente tem maior poder de compra.

Pela plataforma é possível configurar prazos e parcelamentos e gerenciar contas, definindo limites de crédito e acompanhando os  títulos de cobrança emitidos. Seus clientes têm visibilidade sobre o crédito disponível e os valores a pagar direto no site da sua loja.

## Quando utilizar

Modelos de negócio que têm uma relação comercial com seus clientes costumam precisar de um sistema de gerenciamento de crédito para poder emitir boletos faturados sem pôr em risco o fluxo de caixa da empresa. 

A aprovação desses pagamentos em plataformas de e-commerce costumam demandar esforço manual de aprovação pedido a pedido, mesmo com clientes que possuem crédito disponível.

Lojas com relações B2B como distribuidores de redes varejistas, venda direta para revendedores, material de escritório para empresas ou insumos industriais podem utilizar o Customer Credit para oferecer uma experiência integrada à plataforma VTEX de compra e pagamento a prazo. 

## Como funciona

![Fluxo básico do Customer Credit](https://images.ctfassets.net/alneenqid6w5/uTJmG1ZC48mCQeQKMCQ4m/5c64e88daa90836eeeabb7903af91a0f/cc-flow_pt.gif)
*Fluxo básico de como funciona o Customer Credit nas lojas VTEX.*

Por ter sido desenvolvido na VTEX, o Customer Credit está plenamente integrado ao SmartCheckout, o que significa que a experiência de compra dos seus clientes permanece a mesma.
Você pode escolher os usuários que receberão crédito, definir o limite de crédito para cada um deles e gerenciar individualmente cada título.

O Customer Credit pode ser utilizado tanto pela interface web do Admin quanto pela API.

## Conceitos

### Conta corrente

Para conseguir ter acesso ao pagamento a prazo o usuário deve ter acesso a uma conta cadastrada no Customer Credit. Esta conta é composta por identificadores como e-mail e documento, assim como o limite de crédito definido.

### Limite de crédito

Para cada conta você deve definir um limite de crédito. Esse limite indica o valor máximo que a conta pode ter em títulos abertos ao mesmo tempo. 
Quando títulos forem pagos ou cancelados, seus valores restauram o limite de crédito. O limite pode ser redefinido a qualquer momento pelo usuário com as permissões necessárias.

No momento da compra, o cliente tem visibilidade de quanto crédito tem disponível. Quando não é o suficiente para o valor total, não é possível utilizar seus créditos.

O limite de crédito definido em uma conta também pode ser utilizado por mais de um dependente. 

### Título

Título são referências de pagamentos futuros. Eles são automaticamente criados quando um pedido pago com Customer Credit é faturado. Ele é composto por data de vencimento, valor e descrição. 

Um link de pagamento externo pode ser adicionado a cada título para facilitar sua liquidação.

Há 3 estados possíveis para os títulos: **Aberto**, **Pago** e **Cancelado**. Na interface haverá um 4o estado, o **Vencido**, mas que é na realidade um título em *Aberto* cuja data de vencimento está expirada.

Um título é sempre criado com o status de Aberto, e dependendo de ações do Admin ou chamadas de API pode transitar para o estado de Pago ou Cancelado. 

### Tolerância

Permite que uma compra seja aprovada mesmo que ela ultrapasse o crédito disponível do usuário. Caso a funcionalidade seja ligada, uma porcentagem poderá ser configurada individualmente para cada conta cadastrada.

### Prazos e parcelamentos

O Customer Credit permite que você configure como quiser os prazos de parcelamentos que estarão disponíveis para seus clientes. Alguns exemplos comuns de prazos usados são de 7 dias, 28, 45, 30/60, 30/60/90, etc.

### Pré-autorização e liquidação

Após aprovado o pagamento com crédito, o sistema pré-autoriza o valor, reservando-o automaticamente após 5 dias úteis ou até que o pedido seja faturado. Nesse momento ocorre a liquidação do valor na conta e os títulos são gerados.

O fluxo segue o mesmo padrão dos cartões de crédito: modificações feitas no pedido durante o período de pré-autorização alteram o valor de crédito reservado. 

As modificações feitas após a liquidação, ou seja, após a emissão dos títulos, atualizam os títulos já emitidos caso o valor diminua e emitem novos títulos caso o valor do pedido aumente. 

## Pontos de contato

### Admin

A interface do Customer Credit no Admin da VTEX fornece visibilidade completa do sistema: títulos, contas e configurações gerais. A interface também permite você buscar, filtrar e ordenar dados, além de importá-los e exportá-los. 

### Checkout

É pelo Checkout da VTEX que o usuário poderá fechar compras usando o Customer Credit. O sistema irá verificar automaticamente se o usuário já possui uma conta com crédito e, caso positivo, permitirá que ele se autentique para visualizar o crédito disponível e as opções de prazos e parcelamentos para fechar a compra.

### Meus Créditos

É a interface pela qual o seu cliente terá acesso às informações de sua conta. Ela é muito similar à página de Contas do Admin da VTEX. Nela o usuário enxerga seus limites disponíveis, títulos pagos e em aberto, além do histórico da conta.

## Instalação e configuração
Preparamos um guia detalhado para você [começar a usar o Customer Credit na sua loja](/pt/tracks/customer-credit-como-comecar). Acesse e ofereça crédito exclusivo para seus melhores clientes agora mesmo.

Para maiores informações sobre as APIs do Customer Credit, acesse [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api).

