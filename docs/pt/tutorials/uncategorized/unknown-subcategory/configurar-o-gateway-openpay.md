---
title: 'Configurar o gateway Openpay'
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2024-11-08T12:54:09.760Z
publishedAt: 2024-11-08T12:54:09.760Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-openpay-payment-gateway
legacySlug: configurar-o-gateway-openpay
locale: pt
subcategoryId: 
---

[Openpay](https://www.openpay.mx/) é um processador de pagamentos online que permite receber pagamentos realizados com cartão de crédito, dinheiro e transferências bancárias.

<div class="alert alert-warning">
  Antes de realizar as configurações, é preciso que sua conta na Openpay já esteja criada e verificada. Caso você ainda não tenha se registrado, <a href="https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false">clique aqui</a> e crie sua conta.
  </div>

Para configurar o Openpay você precisará:

1. [Configurar o Google Tag Manager](#configurar-o-google-tag-manager)
2. [Configurar a Openpay](#configurar-a-openpay)
3. [Configurar condições de pagamento](#configurar-condicoes-de-pagamento)

## Configurar o Google Tag Manager

Para configurar o Google Tag Manager, siga todos os passos da __etapa número 2__ que consta [nesta documentação](https://documents.openpay.mx/docs/vtex.html) da Openpay.

Ao finalizar, passe para a etapa seguinte de configuração da Openpay no ambiente da VTEX.

## Configurar a Openpay

Ao finalizar a criação e ativação da Tag, no Google Tag Manager, é preciso instalar provedor Openpay na sua loja. Siga as etapas abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Openpay__ na barra de busca e clique sobre o nome do provedor.
4. Em __Nome da Afiliação__, nomeie para __Openpay__.
5. Preencha os __Application Key__ e __Application Token__. [Clique aqui](https://documents.openpay.mx/docs/vtex.html) para acessar a documentação da Openpay com as instruções de como obter essas informações.
6. Clique em `Salvar`.

## Configurar condições de pagamento

Para configurar os métodos de pagamento a serem processados pela Openpay, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Openpay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
