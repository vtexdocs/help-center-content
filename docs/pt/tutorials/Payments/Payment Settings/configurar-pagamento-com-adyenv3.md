---
title: 'Configurar pagamento com AdyenV3'
id: 7xAz67E2Eg63LWCQNjVdwv
status: PUBLISHED
createdAt: 2023-05-08T20:00:38.610Z
updatedAt: 2025-02-04T17:32:24.228Z
publishedAt: 2025-02-04T17:32:24.228Z
firstPublishedAt: 2023-05-11T20:32:21.638Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-payment-with-adyenv3
locale: pt
legacySlug: configurar-pagamento-com-adyenv3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Adyen. Por meio deste conector, sua loja pode realizar vendas utilizando boleto bancário, cartões de crédito, débito, PIX e carteira digital (wallet). 

Para utilizar a afiliação AdyenV3, é necessário:

- [Configurar ambiente Adyen](#configurar-ambiente-adyen)
- [Configurar conector AdyenV3 na VTEX](#configurar-conector-adyenv3-na-vtex)

<div class="alert alert-warning">
As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Adyen para informações atualizadas.
</div>

<div class="alert alert-info">
Para utilizar a afiliação AdyenV3 por meio do <a href="https://help.vtex.com/pt/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf#">Sales App</a> em suas lojas físicas (ponto de venda), acesse <a href="https://help.vtex.com/pt/tutorial/configurar-pagamento-com-adyenv3-no-instore--24yO6KloBn6DN6CbprHtgt">Configurar pagamento com AdyenV3 no VTEX Sales App</a>.
</div>

## Configurar ambiente Adyen

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector da Adyen seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme documentação da [Adyen](https://docs.adyen.com/).

Para habilitar o acesso da VTEX no ambiente Adyen, siga as instruções abaixo:

### Obtenha as credenciais Company e Merchant Account 

1. Acesse a sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen.
2. Na barra lateral esquerda, copie e salve a informação descrita acima de __Company__. Esta é a sua Company Account.
3. Na lista abaixo, busque o nome da Merchant Account a ser utilizada (ressaltada em branco). Copie e salve esta informação.

![Adyenv3_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_1.PNG)

### Obtenha a Live URL

1. Na barra lateral, acesse __Developers > API URLs__.
2. Clique em `Copy` no campo __Prefix__ e anote a informação salva em um local seguro.

### Obtenha a API Key e Client Key

<div class="alert alert-warning">
As informações abaixo consideram que a API Key e Client Key já foram previamente geradas no ambiente da Adyen. Caso seja necessário criá-las, consulte a documentação da <a href="https://docs.adyen.com/">Adyen</a>.
</div>

1. Clique em __Developers__ na barra lateral e em seguida em __API credentials__.
2. Selecione a sua credencial API.
3. Em __Server Settings > Authentication__, selecione __API key__. 

![Adyenv3_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_2.PNG)

<blockquote><ui>4. Clique em <b>Generate Key</b> e anote a informação criada em um local seguro.</ui>

<blockquote><ui>5. Em <b>Client Settings</b>, clique na aba <b>Client Key</b>.

<blockquote><ui>6. Clique em <b>Generate Client Key</b> e anote a informação criada em um local seguro.

<blockquote><ui>7. Em <b>Add allowed origins</b>, adicione o endereço do domínio de sua loja. Por exemplo: https://www.sualoja.com. 

![Adyenv3_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_3.png)

### Configure o webhook

A configuração do webhook é necessária para que a Adyen envie atualizações de status de pagamento para sua conta VTEX. Para mais informações, acesse a documentação [Webhooks](https://docs.adyen.com/development-resources/webhooks) da Adyen.

Configure o webhook conforme os passos abaixo:

1. Na sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen, acesse __Developers > Webhooks__.
2. Clique no botão azul `+ Webhook`.
3. Selecione a opção __Standard Webhook__ clicando no botão __Add__.
4. Em __General > Description__, adicione uma descrição para o novo webhook. Exemplo: "Webhook Adyen Connector Provider v3".
5. Em __General > Server configuration > URL__, preencha a URL da sua conta VTEX. Exemplo: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_4.PNG)

<blockquote><ui>6. Clique em <b>Apply</b>.</ui>

<blockquote><ui>7. Em <b>Additional settings</b>, selecione todas as opções disponíveis e clique em <b>Apply</b> em cada aba.</ui>

<blockquote><ui>8. Clique em <b>Save changes</b>.</ui>

![Adyenv3_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_5.PNG)

![Adyenv3_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_6.PNG)

![Adyenv3_7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-pagamento-com-adyenv3_7.PNG)

<div class="alert alert-info">
Se você possui múltiplas lojas, é necessário realizar a configuração do webhook para cada uma delas.
</div>

## Configurar conector AdyenV3 na VTEX

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __AdyenV3__ na barra de busca e clique sobre o nome do provedor.
4. Em __Chave de aplicação__, preencha o nome de sua Merchant account (passo 3 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account).
5. Em __Token de aplicação__, insira o API Key (passo 4 da seção [Obtenha a API Key e Client Key](#obtenha-a-api-key-e-client-key)).
6. Caso deseje modificar o nome de identificação a ser exibido para o provedor AdyenV3 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
7. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
8. Em __Live URL prefix__, preencha o URL prefix (passo 2 da seção [Obtenha a Live URL](#obtenha-a-live-url)).
9. Em __Company account__, insira o nome de sua company account (passo 2 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account)).
10. Em__Live POS URL__, não é necessário preencher este campo (aplicável somente ao VTEX Sales App).
11. Em __Client key__, insira o Client key (passo 6 da seção [Obtenha a API Key e Client Key](#obtenha-a-api-key-e-client-key)).
12. Selecione os campos __Auto Capture Settings__, __POS Auto Capture Settings__ ou __Boleto Expiration Days__ conforme necessário.
13. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela AdyenV3, acesse [Configurar condições de pagamento](/pt/tutorial/condicoes-de-pagamento). Caso deseje realizar vendas por meio do VTEX Sales App, acesse [Configurar pagamento com AdyenV3 no VTEX Sales App](/pt/tutorial/configurar-pagamento-com-adyenv3-no-instore--24yO6KloBn6DN6CbprHtgt).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456).

## Configurar cartão de crédito

Se você deseja processar pagamentos com cartões de crédito em sua loja utilizando a AdyenV3, além de realizar as configurações anteriores descritas neste artigo, você deve abrir um ticket no [suporte da VTEX](/pt/support), com a seguinte solicitação "Provider review - Add Endpoint SecureProxy - AdyenV3". 

No ticket você também deverá enviar a URL que será autorizada pela Adyen a realizar a transação no cartão de crédito em sua loja. O formato da URL deverá ser `https://{live URL prefix}-checkout-live.adyenpayments.com`, onde a informação "{live URL prefix}" deve ser a mesma inserida por você nas configurações da Adyen no Admin VTEX.

<div class="alert alert-warning">
O endereço completo da URL deve ser escrito somente em letras minúsculas, mesmo se o "Live URL prefix" configurado no Admin VTEX possuir alguma letra maíuscula.
</div>    

## Configurar pagamento com Apple Pay na Adyen (opcional) 

Para processar pagamentos com Apple Pay na Adyen você precisa primeiramente realizar configurações para habilitar sua loja no ambiente da Apple Pay. Saiba mais em [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay).  

Depois de seguir os passos indicados, o conector AdyenV3 pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento.
