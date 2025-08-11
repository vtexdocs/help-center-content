---
title: 'Why does the hostName in the Message Center JSON display different information from the Account management?'
id: frequentlyAskedQuestions_6695
status: PUBLISHED
createdAt: 2017-04-27T22:22:10.816Z
updatedAt: 2019-12-31T14:25:01.415Z
publishedAt: 2019-12-31T14:25:01.415Z
firstPublishedAt: 2017-04-27T23:02:46.478Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_3
slugEN: why-does-the-hostName-in-the-message-center-JSON-display-different-information-from-the-license-manager
locale: en
legacySlug: why-does-the-hostName-in-the-message-center-JSON-display-different-information-from-the-license-manager
---

The JSON used by the Message Center, that is, the source of information to be sent by email is a combination of information from different systems. They include information about the order from the Orders management and account information from the Account management.

When viewing the `hostName` variable in MessageCenter JSON, doubts may arise as to where this data is loaded from. No matter that the name of the variable is host, it bears the - unchangeable - name of the site created in the Accounts tab of the Account management.

![VTEX - License Manager](//images.contentful.com/alneenqid6w5/5sZb9Mvw4wcK6oM40CKEak/eee7f0e5848c179c678761a418a978b4/2017-03-22-12_33_29-VTEX-License-Manager.png)

In other words, the value inserted will not be loaded in the Hosts area, rather, as shown in the image above, the value registered under **Nome da Loja** will be loaded to the email template.
