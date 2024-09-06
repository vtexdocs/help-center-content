---
title: 'Why was a customer able to register a CPF in a CNPJ field?'
id: 6FBJ2envYAI82eQQGMKQcm
status: ARCHIVED
createdAt: 2018-07-25T17:42:33.984Z
updatedAt: 2022-10-17T20:09:26.554Z
publishedAt: 
firstPublishedAt: 2018-07-25T18:21:00.959Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: authors_59
slug: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
locale: en
legacySlug: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
---

This scenario usually happens because of an inconsistency in the user's registration fields. To verify it, we need to access this customer's data in your store's __Profile System__.

Follow the steps below to validate the information:

1. Go to your store Admin: `https://{AccountName}.myvtex.com/admin`.
2. On the side menu, click __Master Data__.
3. In the __Profile System__ box, click __Customers__.
4. Select the option __Email__ and search the client's email.![e-mail - Master Data](https://images.ctfassets.net/alneenqid6w5/cjpYKSZ1i8USYqs8Yga4E/df2c4793391483458ffcf8209a222f69/e-mail_-_Master_Data.png)
5. Click the customer record to access the profile details.

In the __Contact__ section, you will see that the `Is Company?` option is filled with the value `No`. At the same time, in the section __Company Data__, you will see that the `Document Type` field is filled with the value `cnpj`.

This means that the client data that is loaded for individuals, because of the field `Is Company?: No`. However, the `Document Type` is set to `cnpj`, creating inconsistency.

To resolve this issue, you must change the `Document Type` field to `cpf`.
