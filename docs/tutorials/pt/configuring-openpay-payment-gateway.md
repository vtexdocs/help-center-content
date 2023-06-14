---
title: Configurar o gateway Openpay
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2021-07-06T18:01:16.234Z
publishedAt: 2021-07-06T18:01:16.234Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-o-gateway-openpay
legacySlug: configurar-o-gateway-openpay
subcategory: 
---

[Openpay](https://www.openpay.mx/) é um processador de pagamentos online que permite receber pagamentos realizados com cartão de crédito, dinheiro e transferências bancárias.

<div class="alert alert-warning">
  Antes de realizar as configurações, é preciso que sua conta na Openpay já esteja criada e verificada. Caso você ainda não tenha se registrado, <a href="https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false">clique aqui</a> e crie sua conta.
  </div>

Para configurar o Openpay você precisará:

1. [Configurar o Google Tag Manager](#configurar-o-google-tag-manager)
2. [Configurar a Openpay](#configurar-a-openpay)
3. [Associar a Openpay à uma condição de pagamento](#associar-uma-condicao-de-pagamento)

## Configurar o Google Tag Manager

Para configurar o Google Tag Manager, siga todos os passos da __etapa número 2__ que consta [nesta documentação](https://www.openpay.mx/en/docs/vtex.html) da Openpay.

Ao finalizar, passe para a etapa seguinte de configuração da Openpay no ambiente da VTEX.

## Configurar a Openpay

Ao finalizar a criação e ativação da Tag, no Google Tag Manager, é preciso instalar o conector do Openpay na sua loja. Siga as etapas abaixo:

1. Acesse o __Admin__ VTEX.
2. No módulo __Pagamentos__, clique em __Configurações__.
3. Em __Afiliações de gateway__, clique no sinal verde “__+__”.
4. Busque e clique em __Open Pay.__
5. Em __Nome da Afiliação__, nomeie __para Open Pay__.
6. Preencha os __Application Key__ e __Application Token__. [Clique aqui](https://www.openpay.mx/en/docs/vtex.html) para acessar a documentação da Openpay com as instruções de como obter essas informações.
7. Clique em __Salvar__.

## Associar uma condição de pagamento

Depois de concluir todas as etapas, a Openpay estará configurada.

Caso queira associá-la a uma condição de pagamento que seja compatível com o Openpay, siga o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
