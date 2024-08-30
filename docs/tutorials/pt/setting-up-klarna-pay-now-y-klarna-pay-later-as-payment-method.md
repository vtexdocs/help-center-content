---
title: ' Configure Klarna Pay Now e Klarna Pay Later como meio de pagamento'
id: 4nsW4t3jGU9f8qqGoVjVtz
status: DRAFT
createdAt: 2020-12-04T15:02:01.008Z
updatedAt: 2022-12-23T20:23:59.263Z
publishedAt: 
firstPublishedAt: 2020-12-04T19:45:04.488Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configure-klarna-pay-now-e-klarna-pay-later-como-meio-de-pagamento
locale: pt
legacySlug: configure-klarna-pay-now-e-klarna-pay-later-como-meio-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[Klarna Pay Now e Klarna Pay Later](https://www.klarna.com/us/what-is-klarna/) são opções de metódos de pagamento da Klarna. Enquanto Klarna Pay Now oferece pagamentos instantâneos, a Klarna Pay Later permite pagamentos por fatura e com financiamentos em até 36 vezes.

Para cada um desses métodos de pagamento, existem diferentes requisitos de configuração:

- __Klarna Pay Now__: atualmente pode ser usado somente com a afiliação de gateway da Adyen. Antes de começar a configurar este método de pagamento, é necessário [configurar o gateway Adyen](https://help.vtex.com/pt/tutorial/como-configurar-el-gateway-adyen-en-vtex--tutorials_2337#) em sua loja.

- __Klarna Pay Later__: pode ser usado com as afiliações de gateway Klarna ou Adyen.
    - __Klarna__: é necessário [configurar a afiliação Klarna](/pt/tutorial/setting-up-klarna-pay-now-y-klarna-pay-later-as-payment-method#configurar-afiliação-klarna) e instalar o app _vtexdemoemea.klarna@2.0.9_ (ou versão superior) em sua loja. Saiba mais como instalar o aplicativo em [Installing an app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app).
    - __Adyen__: é necessário [configurar a afiliação Adyen](https://help.vtex.com/es/tutorial/how-to-configure-the-adyen-gateway-on-vtex--tutorials_2337). Para completar esta configuração, solicite à Adyen para ativar o campo __Live Endpoint URL Prefix__ em sua loja e preencha-o de acordo com as informações descritas [nesta documentação da Adyen](https://www.adyen.help/hc/en-us/articles/360014322079-How-can-I-find-the-endpoint-URL-for-my-LIVE-account-).

>⚠️ Klarna Pay Now e Klarna Pay Later estão habilitadas **apenas para o SmartCheckout V6**, e somente clientes do mercado europeu e estadunidense poderão utilizar suas soluções, por isso não são meios de pagamento aplicáveis para clientes brasileiros.

## Configurar afiliação Klarna

Para configurar a afiliação Klarna, siga o passo a passo abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Na aba __Afiliações de Gateway__, clique no botão __+__.   
5. Clique no conector __Klarna__.
6. Preencha os campos __Application Key__ e __Application Token__ com informações da sua conta Klarna.
7. Clique em __Salvar__.  

>⚠️ Se você estiver usando o conector Klarna em um ambiente de teste, o campo **Application Key** deve ser configurado como <i>playground.{Klarna User}</i>. Quando usado em ambiente de produção, o campo **Application Key** deve ser o <i>Klarna User</i>.

## Klarna Pay Now

Para configurar Klarna Pay Now, siga o passo a passo abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.   
4. Na aba __Condições de pagamento__, clique no botão __+__.    
5. Selecione a condição de pagamento __Klarna Pay Now__.    
6. Preencha o campo __Nome da Regra__ com um nome de sua preferência para identificação.    
7. Ative a condição no campo __Status__.    
8. Em __Processar com afiliação__, selecione a opção __Adyen__.    
9. Se desejar utilizar um sistema antifraude, selecione a opção __Usar Antifraude__.
10. Se desejar, pode [configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Clique em __Salvar__.

Depois de seguir os passos indicados, Klarna Pay Now pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

## Klarna Pay Later

Para configurar Klarna Pay Later, siga o passo a passo abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.    
4. Na aba __Condições de pagamento__, clique no botão __+__.     
5. Selecione a condição de pagamento __Klarna__.     
6. Preencha o campo __Nome da Regra__ com um nome de sua preferência para identificação.   
7. Ative a condição no campo __Status__.  
8. Em __Processar com afiliação__, selecione a opção __Klarna__ ou __Adyen__.   
9. Se desejar utilizar um sistema antifraude, selecione a opção __Usar Antifraude__.
10. Se desejar, pode [configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).
11. Clique em __Salvar__.

Depois de seguir os passos indicados, Klarna Pay Later pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
