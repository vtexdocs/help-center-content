---
title: 'Initial setup'
id: 4EPwTXx5oFdSG1dA3zIchz
status: PUBLISHED
createdAt: 2024-01-18T17:08:33.703Z
updatedAt: 2024-02-22T20:29:57.019Z
publishedAt: 2024-02-22T20:29:57.019Z
firstPublishedAt: 2024-02-22T14:06:26.997Z
contentType: trackArticle
productTeam: Others
slugEN: initial-setup
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: vtex-store-overview
order: 3
---

This article explains how to gain access to the VTEX environment and provides information from signing the agreement with VTEX to the initial store settings.
Before you begin, you should know the main terms used in the article, as shown in the table below:

| **Term** | **Definition** |
| :---: | :--- |
| VTEX Admin / VTEX environment | Platform for managing the ecommerce experience. |
| Master Service Agreement | These are policies that regulate the use of the VTEX ecommerce platform services in compliance with the terms of the agreement signed between the contractor and the contracted party. |
| Appendix 1 - Order form | Supplemental document that goes with the **Master Service Agreement** and is sent to the contractor to be digitally signed, containing information about the business agreement and legal information of the contractor and VTEX. |
| Authentication | The process of verifying the identity of the user that is logging in. |
| Authorization | Determines the actions a user can do after being authenticated. |
| Sales channel | These are stores where sellers can offer the products they have in their catalogs. |
| Role | It is a set of resources created to serve a typical type of user. |
| License Manager resources | Resources are entities associated with an action or information in the VTEX infrastructure. |
| Sponsor account | The [Sponsor Account](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) is the account that develops, maintains, and distributes [Edition Apps](#edition-apps). Its main purpose is to speed up the installation of many apps and configurations in a specific group of accounts. |

## Signing the agreement

The VTEX contractual process involves a VTEX sales representative, the contractor, and the legal representative of both parties. Once the negotiation is completed, the contractor receives a request to digitally sign the Appendix 1 Order Form, containing the following information:

* Legal conditions agreed in the negotiation.
* Details of the legal representatives of VTEX and the contractor.
* Information of the VTEX witness and the contractor witness.
* [MSA (Master Services Agreement)](https://vtex.com/us-en/privacy-and-agreements/agreements/) link.

Once the agreement has been signed, all parties involved receive a copy of the MSA + Appendix 1 Order Form via email. New clients should review the MSA (Master Services Agreement) and consider the company location.

If you already have a partnership with VTEX, the MSA can be found at the top of the Appendix 1 Order Form or on the [Agreements Archive page](https://vtex.com/us-en/privacy-and-agreements/agreements-archive/), depending on the region and the date the Appendix 1 was signed.

## Gaining access to the VTEX Admin

After signing the commercial agreement, the [sponsor user](https://help.vtex.com/en/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) receives access to the VTEX Admin by email within 10 working days.  The sponsor user is the store's main administrator and the only one with full access to all VTEX Admin sections, including important maintenance and authorization actions.

Initially, the main actions only the sponsor user can perform are:

* Request a test environment for the account manager.
* Add new users to the VTEX environment. To do so, you need to understand the existing [roles](https://help.vtex.com/en/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy).
* [Enable two-factor authentication login](https://help.vtex.com/en/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) for operators.
* Set [login options](https://help.vtex.com/en/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#formas-de-login) for store customers.

Other actions may be restricted to this user, which are listed in the [Sponsor user](https://help.vtex.com/en/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy#acoes-restritas-ao-usuario-titular) article.

> ⚠️ **Sponsor user** is not the same as **Owner (Admin Super)**. **Owner(Admin Super)** is a [License Manager role](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) that gives permissions to a user and can be assigned to multiple users. However, there is only one **Sponsor user** per [account](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC).

## Users and permissions

All admin users listed on a VTEX account can perform actions depending on their [role](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) and permissions to access the [platform's resources](https://help.vtex.com/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). For example, to restore a transaction, the user must have a role with permission to use the `View Payment Data` resource.

### Adding admin users

New users must be added to the VTEX Admin via the **Account Management** page, following the steps in the [How to manage users](https://help.vtex.com/en/tutorial/gerenciando-usuarios--tutorials_512) article. On this page, you can also edit, delete, or export users.

### Setting roles and permissions for users

To define the actions a user can perform in the VTEX Admin, follow the instructions in the [Roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) article. You can assign [predefined roles](https://help.vtex.com/en/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) to users, or if you need roles that include different permissions from the predefined ones, you can create [custom roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role).

## Platform and storefront authentication

You need to configure the [authentication](https://help.vtex.com/en/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs) method that will be available to customers when logging in to the store and admin users when logging in to the VTEX Admin. Authentication in the VTEX environment can be done in several ways. For example, access code and password are always available, while Google is optional.

To log in to the store, VTEX provides authentication by access code, password, [Facebook](https://help.vtex.com/en/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook), and [Google](https://help.vtex.com/en/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google) so that you can enable one or more authentication methods. The instructions for enabling these solutions can be found in the [Authentication](https://help.vtex.com/en/tutorial/pagina-de-autenticacao--21CkKHLKP1o41lUpGhuRUs#login) article.

## Integration and app development authentication

[Authentication](https://developers.vtex.com/docs/guides/authentication) is essential in API integrations for connecting your VTEX account with external systems and for developing [apps for the VTEX platform](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu#extensions-and-apps). Authentication guarantees authorized user access to platform resources using credentials such as app keys or tokens.

The table below shows the three authentication types available:

| **Authentication type** | **Description** |
| :---: | :--- |
| Authentication of API requests using [app keys](https://help.vtex.com/en/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) | App keys are used to authenticate VTEX API requests. Store admins can create these keys for different integrations.Learn more in the [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) article. |
| Authentication of requests to APIs using user tokens | User tokens are used to authenticate API requests, especially for [frontend](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) apps developed using VTEX IO.Learn more in the [API authentication using user tokens](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) article. |
| Authentication of apps using authentication tokens | The use of auth tokens is required for authentication when developing apps using VTEX IO.Learn more in the [App authentication using auth tokens](https://developers.vtex.com/docs/guides/app-authentication-using-auth-tokens) article. |

## Trade policy

An important concept on VTEX is [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV), which is a group of settings that includes:

* [Catalog](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#catalog)
* [Prices](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#prices)
* [Promotions](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#promotions)
* [Shipping strategies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#shipping-strategy)
* [Payments](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#payments)

In every integration with a sales channel, a trade policy must be linked, and when one of the settings mentioned above is different for a new channel, a new trade policy must be created.

Depending on its architecture on VTEX, the store can benefit from more than one trade policy or associate strategies from several trade policies with [multistores](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#multistore) and [additional environments](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#additional-environment). The [Accounts and architecture](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) article explains the relationship between these concepts.

<div class="alert laert-info">
To [create a trade policy](https://help.vtex.com/en/tutorial/criar-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) and to [request additional trade policies](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), contact [VTEX Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ#requesting-an-additional-trade-policy).
</div>

## Edition Apps

[Edition Apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) are bundles that combine configurations and apps in a single set. They are created by [Sponsor accounts](https://developers.vtex.com/docs/guides/vtex-io-documentation-sponsor-account) to facilitate [franchise account](https://help.vtex.com/en/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) configuration. Some examples are **Edition Store** and **Edition Business**, which are provided natively. Any Edition App depends on `vtex.edition-business` or `vtex.edition-store`.

Contact our [support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) team to change an Edition App, keeping in mind that only the _Sponsor account_ can make changes. To create an Edition App, you must meet the requirements for [Developing an Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app#developing-an-edition-app).

## VTEX IO CLI

[VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) (Command Line Interface) is a command-line tool developed by VTEX and an important element of the VTEX IO platform, which allows development teams to create and customize stores and apps on the VTEX platform.

Through the VTEX IO CLI, developers can perform many tasks related to development, such as:

* **Creating projects:** CLI allows you to create and start projects on the VTEX IO platform by defining the basic structure and settings.
* **Local development:** You can develop, customize, and test apps locally before implementing them on the VTEX platform.
* **Implementation:** The CLI streamlines the implementation of apps on the VTEX IO platform, efficiently updating and managing apps.
* **Integration with the VTEX ecosystem:** VTEX IO CLI integrates with other services and tools on the VTEX platform, enabling interaction with APIs, databases, and other resources.

VTEX IO CLI installation depends on the operating system used. To install the tool based on the operating system available, see the instructions in the [Installing VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install) article.

To learn about the CLI's commands and features and to start using it, read the [Using VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-usage) and [Managing plugins](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins) articles.
