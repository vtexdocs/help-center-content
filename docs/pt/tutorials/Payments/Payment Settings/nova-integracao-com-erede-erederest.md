---
title: 'Como usar a integração ERedeREST'
id: 2r1QrTNvraM266KKwKucwI
status: ARCHIVED
createdAt: 2018-04-12T14:42:38.177Z
updatedAt: 2022-12-23T20:19:41.339Z
publishedAt: 
firstPublishedAt: 2018-04-12T15:15:34.194Z
contentType: tutorial
productTeam: Channels
author: 72qloUCfZuqoIaeiG4OsY
slugEN: new-integration-with-erede-erederest
locale: pt
legacySlug: nova-integracao-com-erede-erederest
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

As lojas VTEX podem usar a mais recente integração da ERede. Chamada ERedeREST, ela oferece suporte a meios de pagamento com pré-autorização, como: __Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ e __Credz__.

A bandeira __Elo__ é a única que não suporta pré-autorização.

## Como realizar a integração

Para configurar a nova versão, você precisa primeiro solicitar à Rede a ativação do produto __ERede__ na versão __REST__.

Uma vez notificado, acesse o menu __e.Rede > Configurações > Geração de token__.

![GerarToken](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/nova-integracao-com-erede-erederest_1.png)

Depois, basta clicar no botão __Gerar Token__.

![GerarToken Click](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/nova-integracao-com-erede-erederest_2.png)

Com isso, você vai poder visualizar o token que deverá ser informado no formulário de configuração da afiliação de gateway ERedeRest. Além do token, você também vai precisar informar o PV, que nada mais é do que o número de identificação do estabelecimento no site da Rede.

Para fazer essa configuração na VTEX, siga os passos abaixo:

1. No menu do Admin, acesse __Pagamentos__;
2. Em __Configurações__, acesse __Afiliações de Gateways__; 
3. Clique no botão verde __+__ _Quero receber pagamento pelo conector..._ e procure o conector __ERedeRest.__

![erederestPT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/nova-integracao-com-erede-erederest_3.jpg)

![erederestPT-config](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/nova-integracao-com-erede-erederest_4.jpg)

![PegarPV](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/nova-integracao-com-erede-erederest_5.png)

Este novo conector oferece uma série de opções de configuração, entre elas o suporte ao ApplePay.
