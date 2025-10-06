---
title: 'How to set up B2B with VTEX'
id: tutorials_238
status: PUBLISHED
createdAt: 2017-04-27T22:13:02.487Z
updatedAt: 2022-10-24T12:34:22.858Z
publishedAt: 2022-10-24T12:34:22.858Z
firstPublishedAt: 2017-04-27T23:03:10.539Z
contentType: tutorial
productTeam: Others
author: authors_3
slugEN: setting-up-b2b-on-vtex
legacySlug: setting-up-b2b-on-vtex
locale: en
subcategoryId: 2LrbEY7MFeKqmdfYLBCnfi
---

B2B (Business to Business) is an abbreviation used in the ecommerce segment to define commercial transactions between companies. In other words, it is an environment where companies sell their products to other companies.

On VTEX, B2B environments are usually blocked, in whole or in part, for anonymous users, and an authentication is required for viewing the commercial information about the products.

See below a description of the settings required for turning an account into B2B on VTEX.

> ℹ️ Every B2B store preparing to go into production and configure a final domain should contact [our Support](https://support.vtex.com/hc/pt-br/requests) in advance and request that the internal configuration be done.

## Prerequisite

If you already have a B2C (Business to Consumer) store on VTEX, before following the steps described below, you need to create a multistore for your B2B operation. Check out the article [Create multistore / multidomain](/en/tutorial/creating-multi-store-multi-domain--tutorials_510) for more information.

## 1. Include a conditional rule in the B2B Commercial Policy

This is the most important step to activate the B2B. Upon setting up the B2B Commercial Policy, you must fill out the __Regra Condicional__ field in order to define the users that will be able to browse the website.

Usually, in traditional B2Bs, this field is filled out with the value `approved="true"` (where `approved` is the name of a field of the Client entity, in Master Data). Using this rule, only authenticated and approved users will be able to browse the website.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/practical-guides/setting-up-b2b-on-vtex_1.png)

## 2.Customize the layout of B2B directories

Traditional B2Bs require authenticated and approved browsing, that is, anonymous or non-approved users will not have access to the trade information of products until they comply with these requirements.

Check out the basic characteristics of each type of user:

- **Anonymous User**: a user that has not logged in, that is, did not provide a username and password for authentication on the website. This type of user will not be able to view product information. These users will be redirected to directory `system/401` (Not authorized).
- **Non-approved User**: users who have already registered and logged in, but whose registration does not comply with the conditional rule established in the commercial policy. In general, their registration with CRM is not in compliance with the conditional rule. This type of users will not be able to view product information. They will be redirected to directory `system/403` (Restricted).
- **Approved User:** users whose registration complies with the conditional rule established in the commercial policy. This type of user will be able to view product information.

Thus, to have a B2B environment, the **401** and **403** folders, under the **system** folder, must be customized.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/practical-guides/setting-up-b2b-on-vtex_2.png)

Browsing by Anonymous users (when attempting to access any page, they will be redirected to 401):
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/practical-guides/setting-up-b2b-on-vtex_3.png)

Browsing by non-approved users (when attempting to access any page, they will be redirected to 403):
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/b2b/practical-guides/setting-up-b2b-on-vtex_4.png)

## 3. Define pre-registration fields

Users not registered on the website need an interface for pre-registration. The pre-registration is a form with basic information about the user. Although basic, such information must be sufficient for the store owner to approve and release the user’s browsing on the website.

Accordingly, all pre-registration fields must be defined. B2B usually uses client information (name, email, phone etc.) and their address (street, district, city etc.) for purposes of pre-registration. Check our article [Import customer data - Brazil](/en/tutorial/importando-dados-de-clientes-brasil--2zWYVOyj0sISYQmeUwCsI0) for more information about the required data.

> ⚠️ The field used as conditional rule in the commercial policy should not be included in this form, since users cannot approve themselves, this being under the responsibility of the store.

## 4. Create a pre-registration form

Upon the definition of fields, the pre-registration form must be created on the **system/401** folder, since this is the only folder to which anonymous users will be redirected. The information included in the form will be sent to CRM through the Master Data APIs ([see documentation](https://developers.vtex.com/reference/master-data-api-v2-overview)), that is, the development of a JavaScript file will be required for using this function. Check out [examples of HTML and JavaScript files](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/tutorials/b2b/practical-guides/ExemploTemplateB2B.rar)[templates](https://raw.githubusercontent.com/vtexdocs/help-center-content/files-migration-script/docs/en/tutorials/b2b/practical-guides/ExemploTemplateB2B-1.rar) serving this purpose.

## 5. Operation

Once the settings have been completed and the B2B is finally operating, the store owner’s routine will depend on their business rules and needs. Basically, at each new registration, the store owner should analyze and approve the user using the CRM interface, that they can access using the following URL: `http://{nome_da_conta}.vtexcrm.com.br/`.

> ℹ️ This article describes basic B2B settings; however, there are several ways to customize the system according to this need, including by sending emails (triggers) based on pre-defined events.
