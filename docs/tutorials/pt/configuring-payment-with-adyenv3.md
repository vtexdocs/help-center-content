---
title: Configurar pagamento com AdyenV3
id: 7xAz67E2Eg63LWCQNjVdwv
createdAt: 2023-05-08T20:00:38.610Z
updatedAt: 2023-05-09T14:27:24.748Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-adyenv3
legacySlug: configurar-pagamento-com-adyenv3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Adyen. Por meio deste conector, sua loja pode realizar vendas utilizando boleto bancário, cartões de crédito, débito, PIX e carteira digital (wallet). 

Para utilizar a afiliação AdyenV3, é necessário:

- [Configurar ambiente Adyen](#configurar-ambiente-adyen)
- [Configurar conector AdyenV3 na VTEX](#configurar-conector-adyenv3-na-vtex)

<div class="alert alert-warning">
As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Adyen para informações atualizadas.
</div>

<div class="alert alert-info">
Para utilizar a afiliação AdyenV3 por meio do <a href="https://help.vtex.com/pt/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf#">inStore</a> em suas lojas físicas (ponto de venda), acesse <a href="https://docs.google.com/document/d/1IXfWTsORBiAGIBpl7Lt3CxZfo8vE_TZTx-KLdV3d6Gg/edit#">Configurar pagamento com AdyenV3 no inStore</a>.
</div>

## Configurar ambiente Adyen

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector da Adyen seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme documentação da [Adyen](https://docs.adyen.com/).

Para habilitar o acesso da VTEX no ambiente Adyen, siga as instruções abaixo:

### Obtenha as credenciais Company e Merchant Account 

1. Acesse a sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen.
2. Na barra lateral esquerda, copie e salve a informação descrita acima de **Company**. Esta é a sua Company Account.
3. Na lista abaixo, busque o nome da Merchant Account a ser utilizada (ressaltada em branco). Copie e salve esta informação.

![Adyenv3_1](//images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Obtenha a Live URL

1. Na barra lateral, acesse **Developers > API URLs**.
2. Clique em `Copy`no campo **Prefix** e anote a informação salva em um local seguro.

### Obtenha a API Key e Client Key

<div class="alert alert-warning">
As informações abaixo consideram que a API Key e Client Key já foram previamente geradas no ambiente da Adyen. Caso seja necessário criá-las, consulte a documentação da <a href="https://docs.adyen.com/">Adyen</a>.
</div>

1. Clique em **Developers** na barra lateral e em seguida em **API credentials**.
2. Selecione a sua credencial API.
3. Em **Server Settings > Authentication**, selecione **API key**. 

![Adyenv3_2](//images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

4. Clique em `Generate Key` e anote a informação criada em um local seguro.
5. Em **Client Settings**, clique na aba **Client Key**.
6. Clique em `Generate Client Key` e anote a informação criada em um local seguro.

![Adyenv3_3](//images.ctfassets.net/alneenqid6w5/1HlZV1tWNXS4ME0B7LYsHR/ca6b2a69d637574b2885286ccaed30b4/Adyenv3_3.PNG)

### Configure o webhook

A configuração do webhook é necessária para que a Adyen envie atualizações de status de pagamento para sua conta VTEX. Para mais informações, acesse a documentação [Webhooks](https://docs.adyen.com/development-resources/webhooks) da Adyen.

Configure o webhook conforme os passos abaixo:

1. Na sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen, acesse **Developers > Webhooks**.
2. Clique no botão azul `+ Webhook`.
3. Selecione a opção **Standard Webhook** clicando no botão **Add**.
4. Em **General > Description**, adicione uma descrição para o novo webhook. Exemplo: "Webhook Adyen Connector Provider v3".
5. Em **General > Server configuration > URL**, preencha a URL da sua conta VTEX. Exemplo: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](//images.ctfassets.net/alneenqid6w5/1gAXlQfBoEUm5qnfSsHJkl/c18036816afbfe9ed8434d1211679879/Adyenv3_4.PNG)

6. Clique em **Apply**.
7. Em **Additional settings**, selecione todas as opções disponíveis e clique em **Apply** em cada aba.
8. Clique em **Save changes**.

![Adyenv3_5](//images.ctfassets.net/alneenqid6w5/4dNUcUg9OKni8eT1wXcjO1/19eddc41d854adb8976e6e90ed54589c/Adyenv3_5.PNG)

![Adyenv3_6](//images.ctfassets.net/alneenqid6w5/2ocxDKULle6hnu2fFPnjfZ/7787ff93f023d3ec17c669758aefb82f/Adyenv3_6.PNG)

![Adyenv3_7](//images.ctfassets.net/alneenqid6w5/dEbiVnYj1Ic4eYgkSNolQ/79bba40bd6820d29de275e3cab19f22e/Adyenv3_7.PNG)

<div class="alert alert-info">
Se você possui múltiplas lojas, é necessário realizar a configuração do webhook para cada uma delas.
</div>

## Configurar conector AdyenV3 na VTEX

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Afiliações de Gateways**, clique no botão `+`.
3. Clique no conector **AdyenV3**.
4. Preencha os seguintes campos com suas informações da Adyen:
- **Application Key**: o nome de sua Merchant account (passo 3 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account).
- **Application Token**: API Key (passo 4 da seção [Obtenha a API Key e Client Key](#obtenha-a-api-key-e-client-key)).
- **Live URL prefix**: URL prefix (passo 2 da seção [Obtenha a Live URL](#obtenha-a-live-url)).
- **Company account**: o nome de sua company account (passo 2 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account).
- **Live POS URL**: não é necessário preencher este campo (aplicável somente ao inStore). 
- **Client key**: Client key (passo 6 da seção [Obtenha a API Key e Client Key](#obtenha-a-api-key-e-client-key)).

<ul>5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.</ul>

<ul>6. Clique em `Salvar`.</ul>

![Adyenv3_8](//images.ctfassets.net/alneenqid6w5/6VHaDn8IejGCUoatLIyUtk/bb93a701e80a942064818a54ac401714/Adyenv3_8.PNG)

Para configurar os métodos de pagamento a serem processados pela AdyenV3, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). Caso deseje realizar vendas por meio do inStore, acesse [Configurar pagamento com AdyenV3 no inStore](https://docs.google.com/document/d/1IXfWTsORBiAGIBpl7Lt3CxZfo8vE_TZTx-KLdV3d6Gg/edit#).

Para definir condições especiais sobre os métodos de pagamento, acesse Configurar condições especiais de pagamento.

Depois de seguir os passos indicados, o conector AdyenV3 pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento.
