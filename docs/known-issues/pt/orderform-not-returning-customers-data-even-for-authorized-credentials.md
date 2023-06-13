---
title: OrderForm não devolve os dados do cliente mesmo para credenciais autorizadas
id: JcjDusU8YP0kerWXC6LXK
status: PUBLISHED
createdAt: 2022-05-19T16:25:28.039Z
updatedAt: 2023-02-01T21:29:33.875Z
publishedAt: 2023-02-01T21:29:33.875Z
firstPublishedAt: 2022-05-19T16:25:28.427Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: orderform-nao-devolve-os-dados-do-cliente-mesmo-para-credenciais-autorizadas
kiStatus: Backlog
internalReference: 582070
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Interagindo com um formulário de pedidoFormulário na situação específica em que os dados do cliente foram importados automaticamente após o login removerá seus dados do formulário de pedidoFormulário mesmo para "superusuários", identificados por seus appKeys.

Esta ação é feita para evitar o acesso não intencional aos dados dos clientes, mas não deve ser aplicada a usuários administrativos e integrações identificadas por credenciais autorizadas.


##

## Simulação



- Ter um usuário com um perfil completo, garantindo que seja válido para o comportamento do SmartCheckout
- Faça o processo de login para este usuário
- Revise através do navegador se suas informações foram importadas para o pedidoFormulário
- Fazer um pedido "Get OrderForm" enquanto usa credenciais autorizadas
- OrderForm não retornará os "clientProfileData" e os endereços que estavam disponíveis no navegador


##

## Workaround


Utilize o parâmetro `?disableAutoCompletion=true` na URL "Get OrderForm". Este parâmetro evita que o OrderForm seja recalculado, os dados do cliente serão devolvidos então




