---
title: 'Why was a customer able to register a CPF in a CNPJ field?'
id: K6zJn8JFOKk5ON1XFB6ZJ
status: ARCHIVED
createdAt: 2022-10-17T19:22:31.749Z
updatedAt: 2024-07-11T19:21:58.380Z
publishedAt: 
firstPublishedAt: 2022-10-17T19:43:17.176Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
locale: en
legacySlug: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

This scenario usually happens because of an inconsistency in the user's registration fields. To verify it, we need to access this customer's data in your store's __Profile System__.

>⚠️ This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use.
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Master Data version characteristics
>  </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
> </a>
> 

Follow the steps below to validate the information:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. In the __Profile System__ box, click __Customers__.
3. Select the option __Email__ and search the client's email.![e-mail - Master Data](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master Data/Customer relations management/why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field_1.png)
4. Click the customer record to access the profile details.

In the __Contact__ section, you will see that the `Is Company?` option is filled with the value `No`. At the same time, in the section __Company Data__, you will see that the `Document Type` field is filled with the value `cnpj`.

This means that the client data that is loaded for individuals, because of the field `Is Company?: No`. However, the `Document Type` is set to `cnpj`, creating inconsistency.

To resolve this issue, you must change the `Document Type` field to `cpf`.
