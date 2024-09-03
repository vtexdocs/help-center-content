---
title: 'Creating a Web Service user'
id: frequentlyAskedQuestions_529
status: ARCHIVED
createdAt: 2019-01-24T20:45:54.201Z
updatedAt: 2020-06-04T01:35:43.759Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:35.477Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: como-criar-usuario-webservice
locale: en
legacySlug: como-criar-usuario-webservice
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

>❗ Attention: Only SOAP methods related to the **catalog** are valid.
>
> ** All the other Web Service methods will be deprecated as of 02/28/2017.**
>
> Use the equivalent REST APIs, available in our [Developer Docs](https://help.vtex.com/developer-docs/).

The creation of credentials for integrations with the Web Service must be done by License Manager, with the functionality of appKey and appToken.

For the creation of these keys, see the article [Creating appKeys and appTokens to authenticate integrations](/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations)

The keys must be allowed to the __WebService__ access profile.

In the context of Web Service, the user is the appKey and the password is the appToken.

To access the Web Service the URL `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl` must be used.
