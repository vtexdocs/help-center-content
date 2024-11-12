---
title: 'Testing Web Service using SoapUI'
id: tutorials_750
status: ARCHIVED
createdAt: 2017-04-27T21:58:40.425Z
updatedAt: 2020-06-04T01:32:10.116Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.147Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: testing-webservice-using-soapui
locale: en
legacySlug: testing-webservice-using-soapui
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

>❗ Attention: Only SOAP methods related to the **catalog** are valid.
>
> ** All the other Web Service methods will be deprecated as of 02/28/2017.**
>
> Use the equivalent REST APIs, available in our [Developer Docs](//help.vtex.com/developer-docs/).

>⚠️ The configurations documented in this article take place in an environment external to VTEX, therefore they may be discontinued without prior notice.

SoapUI is a tool that can be used to simulate the connection and execution of methods of a given webservice without having to do this using programming alone.

**Remember!** We recommend that you use version 3.6.1, which doesn't have as many security requirements (these requirements mean you have to type in your password several times).

The step-by-step utilization is as follows: 
1. After installing the tool, access the menu File &gt; New SoapUI Project. 
2. In the window that opens, enter the address referring to your webservice:
  
`http://webservice-{STORENAME}.vtexcommerce.com.br/Service.svc?singleWsdl` 
 
Substitute the value {STORENAME} with the name of your store.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Log in using the data of the webservice desired. After logging in, you will view all the methods to be found in the [Web Service manual](/en/tutorial/manual-of-classes-and-methods-used-on-webservice/)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

1. Locate the desired method. e.g.: the ImageInsertUpdate method, which is the method used for adding images;
2. Fill out the fields referring to the method (these fields are the ImageDTO type, references are in the manual);
3. Locate the button **Auth** and repeat the authentication before executing the method;
4. Execute the method.

>❗ Atenção: only the SOAP methods relevent to the **catalog** are valid.
>
> **All other methods are deprecated.**
>
> Use the equivalent REST APIs avilable in our [Developer Docs](//help.vtex.com/developer-docs/).
