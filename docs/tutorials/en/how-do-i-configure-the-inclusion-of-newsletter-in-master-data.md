---
title: 'Configuring the inclusion of a newsletter in Master Data'
id: frequentlyAskedQuestions_1816
status: DRAFT
createdAt: 2019-01-24T20:45:58.651Z
updatedAt: 2022-10-20T19:13:32.914Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:16.064Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: how-do-i-configure-the-inclusion-of-newsletter-in-master-data
locale: en
legacySlug: how-do-i-configure-the-inclusion-of-newsletter-in-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Newsletter inclusion is a form that can be entered on any page of your site (except checkout) to get the email address of customers interested in receiving news about the store. This registration is usually associated with a store promotion.

This article will also help configure the inclusion of email addresses of customers who want to receive a newsletter, using Master Data.

<div class="alert alert-warning">
The vtex.cmc:newsletterOptIn control is discontinued and should no longer be used.
</div>

This option for configuration in Master Data is convenient because details of all your customers are kept in the same place, since all the store’s registered customers are already in Master Data. In other words, it is the appropriate place for customer maintenance and action, and having all the records in one place makes life easier.

Here is a step-by-step guide to this configuration.

1. Create the fields you need in the CRM. This step is only necessary if you want an extra field in addition to those already in your CRM. If this is the case, [access our manual for maintenance of data entities](/en/faq/how-can-i-create-field-in-master-data/).
2. Create these fields in the HTML of the page determined by the store. The big change here is that a control is no longer used for this, instead you use an HTML code created by the store or by the agency.
3. Send the information by [API of the MasterData](https://developers.vtex.com/reference/master-data-api-v1-overview). For this you must use the API `https://{{accountName}}.vtexcommercestable.com.br/api/dataentities/CL/documents`, with a PATCH verb, sending the data in JSON. E.g.:
 
```
{ 
  "firstName" : "Jonh",
  "lastName" : "Lennon", 
  "email" : "jonh.lennon@lennon.com.br"
}
```

Remember that you must also mark the __isNewsletterOptIn__ field as true, to indicate that the customer wants to receive the Newsletter.

After this, you can see in your CRM the email addresses which have opted to receive the newsletter.
