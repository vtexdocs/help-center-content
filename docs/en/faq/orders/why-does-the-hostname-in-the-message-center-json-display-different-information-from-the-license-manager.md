---
title: 'Why does the hostName in the Message Center JSON display different information from Account?'
excerpt: "The hostName in Message Center JSON is the unchangeable site name from Account, not the store's public hostname."
id: frequentlyAskedQuestions_6695
status: PUBLISHED
createdAt: 2017-04-27T22:22:10.816Z
updatedAt: 2019-12-31T14:25:01.415Z
publishedAt: 2019-12-31T14:25:01.415Z
firstPublishedAt: 2017-04-27T23:02:46.478Z
contentType: frequentlyAskedQuestion
productTeam: Orders
author: authors_3
slugEN: why-does-the-hostName-in-the-message-center-JSON-display-different-information-from-the-license-manager
locale: en
legacySlug: why-does-the-hostName-in-the-message-center-JSON-display-different-information-from-the-license-manager
---

The JSON used by Message Center — the source of the information sent by email — combines data from different systems. This includes order data from Orders and account data from Account.

When you see the `hostName` variable in the Message Center JSON, it may not be clear where that value comes from. Despite the variable name, `hostName` stores the unchangeable site name created in the **Accounts** tab of Account, not the store's public hostname.

![VTEX - License Manager](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/orders/why-does-the-hostname-in-the-message-center-json-display-different-information-from-the-license-manager_1.png)

In other words, the value is not loaded from the Hosts area. As shown in the image above, the value registered as **Store's Name** is loaded into the email template.
