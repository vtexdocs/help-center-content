---
title: Configurar pagamento com AdyenV3 no VTEX Sales App
id: 24yO6KloBn6DN6CbprHtgt
status: PUBLISHED
createdAt: 2023-05-09T14:12:03.567Z
updatedAt: 2023-06-01T11:38:18.504Z
publishedAt: 2023-06-01T11:38:18.504Z
firstPublishedAt: 2023-05-11T20:30:50.460Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-adyenv3-no-vtex-sales-app
legacySlug: configurar-pagamento-com-adyenv3-no-instore
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Adyen. Por meio deste conector, sua loja pode oferecer transações de pagamento em lojas físicas (VTEX Sales App), utilizando pontos de vendas (POS). Para mais informações, acesse [O que é o VTEX Sales App?](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf).

<div class="alert alert-info">
Para utilizar a afiliação AdyenV3 em sua loja por outros canais de venda online (exceto VTEX Sales App), acesse <a href="https://help.vtex.com/pt/tutorial/configurar-pagamento-com-adyenv3--7xAz67E2Eg63LWCQNjVdwv">Configurar pagamento com AdyenV3</a>.
</div>

Para utilizar a afiliação AdyenV3 no VTEX Sales App, é necessário:

- [Configurar ponto de venda (POS)](#configurar-ponto-de-venda-pos)
- [Configurar ambiente Adyen](#configurar-ambiente-adyen)
- [Configurar conector AdyenV3 (VTEX Sales App) na VTEX](#configurar-conector-adyenv3-vtex-sales-app-na-vtex)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

<div class="alert alert-warning">
As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Adyen para informações atualizadas.
</div>

## Configurar ponto de venda (POS)

O primeiro passo consiste em configurar suas contas na Adyen e na VTEX para permitir transações de pagamento em pontos de venda (POS). Para realizar estas configurações, acesse as seguintes documentações:

- [Adyen - Terminal API go-live checklist](https://docs.adyen.com/point-of-sale/get-started/go-live-tapi)
- [VTEX - VTEX Sales App Basic settings](https://help.vtex.com/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO)

## Configurar ambiente Adyen

Os passos a seguir descrevem as configurações mínimas a serem realizadas para que o conector da Adyen seja devidamente configurado. Demais configurações personalizadas aplicadas à clientes, habilitação de métodos de pagamento específicos ou funcionalidades particulares da plataforma, devem ser realizadas conforme documentação da [Adyen](https://docs.adyen.com/).

Para habilitar o acesso da VTEX no ambiente Adyen, siga as instruções abaixo:

### Obtenha as credenciais Company e Merchant Account 

1. Acesse a sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen.
2. Na barra lateral esquerda, copie e salve a informação descrita acima de **Company**. Esta é a sua Company Account.
3. Na lista abaixo, busque o nome da Merchant Account a ser utilizada (ressaltada em branco). Copie e salve esta informação.

![Adyenv3_1](//images.ctfassets.net/alneenqid6w5/4BHwn5SIUl6AuiiEjreluk/a7404c85f6fda7f7ccbae66070d0db0d/Adyenv3_1.PNG)

### Obtenha a POS Live URL

1. Na barra lateral, acesse **Developers > API URLs**.
2. Clique em `Copy` no campo **Point of Sale** e anote a informação salva em um local seguro.

### Obtenha a API Key

As informações abaixo consideram que a API Key já foi previamente gerada no ambiente da Adyen. Caso seja necessário criá-la, consulte a documentação da [Adyen](https://docs.adyen.com/).

1. Clique em **Developers** na barra lateral e em seguida em **API credentials**.
2. Selecione a sua credencial API.
3. Em **Server Settings > Authentication**, selecione **API key**. 

![Adyenv3_2](//images.ctfassets.net/alneenqid6w5/5y5TAeZmhsKrn2nZTJexIw/bfbe2587739f39fa70c4e1f08e86bd71/Adyenv3_2.PNG)

<blockquote><ui>4. Clique em <b>Generate Key</b> e anote a informação criada em um local seguro.</ui>

### Configure o webhook

A configuração do webhook é necessária para que a Adyen envie atualizações de status de pagamento para sua conta VTEX. Para mais informações, acesse a documentação [Webhooks](https://docs.adyen.com/development-resources/webhooks) da Adyen.

Configure o webhook conforme os passos abaixo:

1. Na sua [Área do Cliente](https://ca-test.adyen.com/) na Adyen, acesse **Developers > Webhooks**.
2. Clique no botão azul `+ Webhook`.
3. Selecione a opção **Standard Webhook** clicando no botão **Add**.
4. Em **General > Description**, adicione uma descrição para o novo webhook. Exemplo: "Webhook Adyen Connector Provider v3".
5. Em **General > Server configuration > URL**, preencha a URL da sua conta VTEX. Exemplo: https://{{account}}.myvtex.com/_v3/api/webhook/notification.

![Adyenv3_4](//images.ctfassets.net/alneenqid6w5/1gAXlQfBoEUm5qnfSsHJkl/c18036816afbfe9ed8434d1211679879/Adyenv3_4.PNG)

<blockquote><ui>6. Clique em <b>Apply</b>.</ui>

<blockquote><ui>7. Em <b>Additional settings</b>, selecione todas as opções disponíveis e clique em <b>Apply</b> em cada aba.</ui>

<blockquote><ui>8. Clique em <b>Save changes</b>.</ui>

![Adyenv3_5](//images.ctfassets.net/alneenqid6w5/4dNUcUg9OKni8eT1wXcjO1/19eddc41d854adb8976e6e90ed54589c/Adyenv3_5.PNG)

![Adyenv3_6](//images.ctfassets.net/alneenqid6w5/2ocxDKULle6hnu2fFPnjfZ/7787ff93f023d3ec17c669758aefb82f/Adyenv3_6.PNG)

![Adyenv3_7](//images.ctfassets.net/alneenqid6w5/dEbiVnYj1Ic4eYgkSNolQ/79bba40bd6820d29de275e3cab19f22e/Adyenv3_7.PNG)

<div class="alert alert-info">
Se você possui múltiplas lojas, é necessário realizar a configuração do webhook para cada uma delas.
</div>

## Configurar conector AdyenV3 (VTEX Sales App) na VTEX

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Afiliações de Gateways**, clique no botão `+`.
3. Clique no conector **AdyenV3**.
4. Preencha os seguintes campos com suas informações da Adyen:
    - **Application Key**: o nome de sua Merchant account (passo 3 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account).
    - **Application Token**: API Key (passo 4 da seção [Obtenha a API Key](#obtenha-a-api-key)).
    - **Live URL prefix**: não é necessário preencher este campo (aplicável somente a outros canais de venda online).
    - **Company account**: o nome de sua company account (passo 2 da seção [Obtenha as credenciais Company e Merchant Account](#obtenha-as-credenciais-company-e-merchant-account)).
    - **Live POS URL**: URL prefix (passo 2 da seção [Obtenha a POS Live URL](#obtenha-a-pos-live-url). 
    - **Client key**: não é necessário preencher este campo (aplicável somente a outros canais de venda online).

<blockquote><ui>  5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão <b>Instalar app</b> e siga as instruções de instalação.</ui>

<blockquote><ui>  6. Clique em <b>Salvar</b>.</ui>

![Adyenv3_9](//images.ctfassets.net/alneenqid6w5/SCflCIOFcwFro09YTxEZy/27b941b772a6afb021d0fa2fe25c9fa9/Adyenv3_9.PNG)

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Venda Direta Debito** ou **Venda Direta Credito**.
4. Em **Processar com a afiliação**, selecione o conector configurado anteriormente.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector AdyenV3 pode demorar até 10 minutos para aparecer como opção de pagamento no VTEX Sales App de sua loja.
