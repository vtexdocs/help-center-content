---
title: 'Configuring Redirects'
id: 4Gd2wLQFbCwTsh8RUDwSoL
status: ARCHIVED
createdAt: 2019-11-22T23:40:25.940Z
updatedAt: 2024-09-06T20:14:13.631Z
publishedAt: 
firstPublishedAt: 2019-11-25T17:36:44.905Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-redirect
locale: en
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
---

To configure a redirect, follow the steps below.

1. In the VTEX Admin, go to  **Storefront**, or type  **Storefront** in the search bar at the top of the page.
2. In **Intelligent Search**, click **Redirects**.
3. Click the <i class="fas fa-plus"></i> `New`.
4. Fill in the [general information](#general-information) fields detailed in the section below.
5. Click <i class="fa-solid fa-plus"></i> `Add condition`.
6. Fill in the [Trigger rules](#trigger-rules) fields.
7. To finish, click `Apply`.

You must fill in the fields below.

![redirecionamentos-adminv4-EN](https://images.ctfassets.net/alneenqid6w5/69CWrwXk38Qxwb9fNNzYyc/c67dd6c3ebe5563f2a32492db7a94298/image.png)

### General information

This section provides the following general information:

- **Name:** name of the rule set for the redirect you created.
- **Redirect URL**: URL to which the client will be forwarded. You must enter the full URL. Example: `https://www.store.com/_secure/account/#/orders` instead of `_secure/account/#/orders`.
- **Locales:** Languages to which the redirect will apply. The field is only available for stores using [Multilanguage settings (Beta)](https://help.vtex.com/en/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Trigger rules

Trigger rules are a set of conditions related to terms or filters that will be applied to each search performed. At least one condition must be configured, either by term or by filter.

Select the type of rule, either by term or by filter.

- **Term:** word searched by the customer that will be related to the rule. You can choose between two options:
    - `is`: the search must be an exact word search. Example: if you enter "Black Friday" and the customer searches for "Black Friday", the redirect will be triggered. If they search for "Black Friday promotion", the redirect will not be triggered.
    - `contains`: the search does not have to be an exact word search. Example: if you enter "Black Friday" and the customer searches for "Black Friday", the redirect will be triggered. If the customer searches for "Black Friday promotion", it will also be activated.
- **Filter:** searchable attribute already defined that restricts the search results. Selecting a registered filter enables the redirection created. Customers can choose from two filter options:
    - `is`: this option allows the customer to select not only the filter for the rule. Example: if the rule is ``is``: Filter _brand_, value _Nike_. The redirect is triggered even if the customer also selects adidas.
    - `only`: this option allows only the configured filter to be selected. Example: if the rule is ``only``: Filter _brand_, value _Nike_. If the customer selects adidas, the redirect will not be triggered. It will only work if the first brand filter is Nike.

If you want to create more than one rule, you must add an interaction between the rules. They can be:

- ``or``: any of the registered rules enable the redirection.
- ``and``: to enable the redirection, all rules must be met.

By clicking on <i class="fas fa-ellipsis-v"></i>, you will see the following options:

- <i class="fas fa-clone"></i> **Duplicate:** creates a copy of the selected rule.
- <i class="far fa-trash-alt"></i> **Delete:** deletes the selected rule.

To clear all configured rules, click `Clear rules`.

### Importing CSV files

If you need to add several redirects, you can create a CSV file and import it into the Admin. The file must follow this format for each redirect created: `<Name>;<URL>;<Type>;<Active>;<Topic>;<Verb>;<Value>`.

- **Name:** the title of the redirect. The possible values are `term` or `filter`.
- **URL:** the redirect URL.
- **Type:** trigger rule. The possible values are `and` or `or`.
- **Active:** redirect activation condition. The possible values are `true` or `false`.
- **Topic:** searchable attribute. Possible values are `term` for term redirection or `brand`, `category`, `department`, `sellername` and `subcategory` for filter redirection.
- **Verb:** option to include the **Topic**. The possible values are `is` or `contains`.
- **Value:** value of the term or filter.

To import the file, follow the instructions below.

1. In the VTEX Admin, go to  **Storefront**, or type  **Storefront** in the search bar at the top of the page.
2. In **Intelligent Search**, click **Redirects**.
3. Click `Import From CSV`.
