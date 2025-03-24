---
title: 'How to get the ERedeREST integration'
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
locale: en
legacySlug: new-integration-with-erede-erederest
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

VTEX stores can use ERede's latest integration. Called ERedeREST, it supports pre-authorization payment methods, such as: __Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ and __Credz__.

The __Elo__ brand is the only one that does not support pre-authorization.

## How to perform the integration

To set up the new version, you must first request Rede to activate the __ERede__ product in the __REST__ version.

Once notified, go to the menu and then navigate through __e.Rede > Settings > Token generation__.

![GerarToken](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/new-integration-with-erede-erederest_1.png)

Then, click the button to create the token.

![GerarToken Click](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/new-integration-with-erede-erederest_2.png)

With this, you will have access to the token that must be informed in the ERedeRest gateway affiliation configuration form. In addition to the token, you will also need to inform the PV, which is  the identification number of the establishment on Rede's website.

To do this configuration in VTEX, follow the steps below:

1. On the Admin menu, access __Payments__;
2. Click on __Settings__ and access __Gateways Affiliations__; 
3. Click on the green button __+__ _I want to receive payment by the connector..._ and search for the connector __ERedeRest .__

![erederestEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/new-integration-with-erede-erederest_3.jpg) 

![erederestEN-config](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/new-integration-with-erede-erederest_4.jpg)

![PegarPV](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment%20Settings/new-integration-with-erede-erederest_5.png)

This new connector offers a number of configuration options, including ApplePay support. 
