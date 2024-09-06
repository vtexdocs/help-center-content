---
title: 'How does the ERP differentiate between a normal order and a recurrence?'
id: frequentlyAskedQuestions_4690
status: ARCHIVED
createdAt: 2019-01-24T20:46:01.256Z
updatedAt: 2021-04-30T14:38:46.094Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:06:32.659Z
contentType: tutorial
productTeam: Others
author: authors_61
slug: how-does-the-erp-differentiate-between-normal-order-and-recurrence
locale: en
legacySlug: how-does-the-erp-differentiate-between-normal-order-and-recurrence
subcategoryId: 5fKgQZhrCw88ACy6Su6GUc
---

The difference is in the json for integration of the order with the ERP.

In a recurrence, the parameter **“itemAttachment”** will give the frequency (e.g.: **“período”: “Semanal”**) and the parameter **“attachments”** will give the type of attachment **“Recorrência”**.

In a recurring order created automatically, the above parameters are not entered, since they are included in the service agreement. But the **“openTextField”** tag will show the value = **“Order Created By VTEX Recurrence System”**.

This is the data that differentiates a normal order from a recurrence.

