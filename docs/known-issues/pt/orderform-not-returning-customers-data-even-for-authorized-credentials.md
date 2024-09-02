---
title: 'O OrderForm não retorna os dados do cliente mesmo para credenciais autorizadas'
id: JcjDusU8YP0kerWXC6LXK
status: PUBLISHED
createdAt: 2022-05-19T16:25:28.039Z
updatedAt: 2023-09-27T20:39:27.746Z
publishedAt: 2023-09-27T20:39:27.746Z
firstPublishedAt: 2022-05-19T16:25:28.427Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-orderform-nao-retorna-os-dados-do-cliente-mesmo-para-credenciais-autorizadas
locale: pt
kiStatus: Fixed
internalReference: 582070
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Interagir com um orderForm na situação específica em que os dados do cliente foram importados automaticamente após o login removerá seus dados do orderForm, mesmo para "superusuários", identificados por suas appKeys.

Essa ação é feita para evitar o acesso não intencional aos dados dos clientes, mas não deve ser aplicada a usuários administrativos e integrações identificados por credenciais autorizadas.

## Simulação



- Tenha um usuário com um perfil completo, garantindo que ele seja válido para o comportamento do SmartCheckout
- Faça o processo de login para esse usuário
- Verificar pelo navegador se as informações do usuário foram importadas para o orderForm
- Fazer uma solicitação "Get OrderForm" usando credenciais autorizadas
- O OrderForm não retornará os "clientProfileData" e os endereços que estavam disponíveis no navegado

## Workaround


Use o parâmetro `?disableAutoCompletion=true` no URL "Get OrderForm". Esse parâmetro evita que o orderForm seja recalculado, e os dados do cliente serão retornados em seguida




