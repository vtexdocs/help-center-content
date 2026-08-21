---
title: 'Frontend implementation'
id: 67SCtUreXxKYWhZh8n0zvZ
status: PUBLISHED
createdAt: '2024-01-31T22:25:47.689Z'
updatedAt: '2025-08-01T17:28:03.949Z'
publishedAt: '2025-08-01T17:28:03.949Z'
firstPublishedAt: '2024-02-22T14:07:19.178Z'
contentType: trackArticle
productTeam: Others
slugEN: frontend-implementation
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: trilha-da-loja-vtex
order: 7
---

The frontend of an online store, also known as the storefront, is the store's visual and interactive interface. This is where customers interact with products and perform actions such as navigating categories, searching, and adding products to their cart.

This article helps you choose the right technology for building your storefront and the settings required for it, considering the following aspects:

- VTEX storefront development technologies.
- Main features of each technology.
- Development stages.

Frontend implementation is the stage where you define which technologies to use based on the business needs for the storefront.

> ℹ️ The frontend can be implemented by the company's internal development team or by our [implementation partners](https://help.vtex.com/docs/tracks/accounts-and-architecture#implementation-partners). [Users](https://help.vtex.com/docs/tutorials/managing-admin-users) with access to the VTEX Admin can view our partner list on the [Partner Portal](https://www.vtex.com/en-us/partners/).

## Before you begin

Before implementing the frontend, you should configure the following steps in your store:

| Step                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Defining the store architecture and sales strategy | The team defines your VTEX store architecture based on your business model's strategies and needs.<br><br>Learn more in the [Accounts and architecture](/en/docs/tracks/accounts-and-architecture) article.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Configuring roles                                  | The team configures the roles needed for each [user](/en/docs/tutorials/managing-admin-users) to use the VTEX platform.<br><br>Learn more in the [Roles](/docs/tutorials/roles) article.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Configuring catalog                                | The team configures the product [catalog](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalog), category tree, and related information, such as descriptions, images, and prices, to populate and test the store, including features such as product listing pages (PLP), search features, product details pages (PDP), and checkout.<br><br>Not having a catalog can result in incomplete testing and data integration problems, which delay implementation.<br><br>Learn more in the [VTEX modules I](/docs/tracks/vtex-modules-i) article. |
| Defining the apps needed to operate the store      | The team defines the native and third-party apps needed to operate the store.<br><br>For stores that will be built using [Store Framework](#store-framework), a list of native and third-party apps is available.<br><br>Learn more in the [VTEX IO apps](https://developers.vtex.com/docs/vtex-io-apps) article.                                                                                                                                                                                                                                                                                                    |

> ℹ️ The [development stage](#development-stages) can run in parallel with other [backend integrations](/docs/tracks/backend-integrations) and [module configuration](/docs/tracks/vtex-modules-i) steps, such as configuring payment methods and logistics. This will depend on the type of [architecture and planning](/en/docs/tracks/accounts-and-architecture) chosen for the VTEX store. The [implementing agency](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners) or [VTEX Support](/en/docs/tracks/vtex-support) should monitor these processes.

## Frontend development technologies on VTEX

VTEX has three different technologies for storefront development: [FastStore](#faststore), [Store Framework](#store-framework), and [CMS Portal (Legacy)](/en/docs/tracks/legacy-cms-portal). CMS Portal (Legacy) was the first VTEX technology for building storefronts, based on HTML, CSS, and JavaScript, and all development and code editing for this technology is done via the VTEX Admin.

> ⚠️ Although some stores still use it, [CMS Portal (Legacy)](/en/docs/tracks/legacy-cms-portal) is a legacy technology and is no longer available for new VTEX stores.

The following sections cover the main characteristics and features of FastStore and the Store Framework.

## FastStore

FastStore is a fresh, innovative storefront technology for development teams to create stores focused on performance and stability. It's also an easy-to-maintain technology when editing your store pages.

This technology is an open-source toolkit based on [React](https://react.dev/) and the [Jamstack](https://jamstack.org/) architecture. For more information, see the [FastStore](https://www.faststore.dev/docs) documentation portal.

### FastStore main features

The following table lists some of the main features of FastStore:

| Feature                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Starter](https://starter.vtex.app/)                                                                                                                                                                                                                                                                                                                | Functional template designed for fast store development, which seamlessly integrates the [FastStore UI](https://www.faststore.dev/components) components. It includes pages such as Home, product listing pages (PLPs), product details pages (PDPs), and minicart features. |
| [FastStore UI](https://developers.vtex.com/docs/guides/faststore/components-index)                                                                                                                                                                                                                                                                  | Component library for ecommerce that provides basic features and design, enabling faster implementation and storefront customization.                                                                                                                                                                                              |
| Headless technology                                                                                                                                                                                                                                                                                                                                 | Customization process that separates the store code from the base code provided by VTEX. This simplifies updates to the store frontend, allowing updates without impacting the custom code.                                                                                                                        |
| [GitHub](https://github.com/) integration                                                                                                                                                                                                                                                                                                           | Development teams can manage all storefront code using [GitHub](https://github.com/).                                                                                                                                                                                                                                              |
| [Headless CMS (Legacy)](https://developers.vtex.com/docs/guides/faststore/headless-cms-overview)                                                                                                                                                                                                                                 | Content management system (CMS) that allows editing and creating new pages and previewing content changes.                                                                                                                                                                                                      |
| Automated checks                                                                                                                                                                                                                                                                                                                                    | Functional tests and performance and code quality assessments run continuously to identify slowdowns and bugs throughout storefront development.                                                                                                                                                                                   |
| [Intelligent Search](https://developers.vtex.com/docs/guides/faststore/getting-started-1-setting-up-your-environment#step-4-enabling-the-vtex-intelligent-search-app) integration                                                                                                                                                                   | Autocomplete feature in the search bar that also offers search and product suggestions based on configurable preferences.                                                                                                                                                                                                          |
| [Checkout](https://developers.vtex.com/docs/guides/faststore/go-live-3-integrating-the-vtex-checkout), [My Account](https://developers.vtex.com/docs/guides/faststore/go-live-4-integrating-the-vtex-order-placed-and-my-account), and [Login](https://developers.vtex.com/docs/guides/faststore/go-live-2-integrating-the-vtex-login) integrations | Integration with other stages of the customer buying journey. VTEX stores previously developed using Store Framework can keep settings related to Checkout, My Account, and Login when migrated to FastStore, as these features rely on the same infrastructure in both technologies.                              |

## Store Framework

Store Framework is a well-established, low-code solution for storefront implementation, with a focus on the composable commerce model. This means the framework allows you to combine different [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) apps to build a storefront.

In this technology, store implementation and launch are based on pre-built components, also known as blocks, which are then customized to meet specific business needs. This framework is based on:

- React
- TypeScript
- Node.js
- GraphQL

For more information, see the [What is VTEX Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework) article.

### Development environment

When talking about frontend implementation, remember that [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) is not a storefront-building technology, but rather a development platform. Store Framework is a technology for building storefronts that runs on VTEX IO, a cloud-based environment and development solution for customized apps and storefronts.

This means that with VTEX IO, you develop your code locally. However, when it comes to deploying and running the store, VTEX IO manages the infrastructure, CI/CD, security, and the deployment process. The image below shows how these concepts relate to each other:

![Frontend development architecture](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_1.png)

### Store Framework main features

The following table shows some of the main features of Store Framework:

| Feature                                                                                                          | Description                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Starter](https://github.com/vtex-apps/store-theme)                                                              | Functional template designed for fast store development, which seamlessly integrates pre-built components.                                                                              |
| [Pre-built components](https://developers.vtex.com/docs/vtex-io-apps)                                            | React-based native components.                                                                                                                                                          |
| Modular architecture                                                                                             | Customization and code reuse of interface elements to quickly launch and replicate stores.                                                                                              |
| [Workspaces and test environments](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace)      | Creation of different store versions for safe testing before launch.                                                                                                                    |
| [Site Editor](/en/docs/tutorials/site-editor-overview)                                                           | Content management system (CMS) for editing templates and building new pages on the store's website.                                                                 |
| [Native A/B testing](https://developers.vtex.com/docs/guides/ab-tests)                                           | Testing and validation of store versions to identify the highest-converting one.                                                                                                        |
| [Intelligent Search](/en/docs/tracks/overview-intelligent-search) integration                                    | Autocomplete feature in the search bar that also offers search and product suggestions based on configurable preferences.                                                               |
| [Progressive Web App (PWA)](/en/docs/tutorials/enabling-pwa-push-notifications-in-your-store) | Enables native app-like experiences on any device with PWA-ready technology.                                                                                                            |
| [Cross-border](/en/docs/tracks/cross-border-stores)                                                              | Support for a VTEX [multistore](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#multistore) to operate in different countries, each with its own approach. |
| Checkout, [My Account](/en/docs/tutorials/how-my-account-works), and Login integrations                          | Integration with other stages of the customer buying journey.                                                                                                                           |

## Choosing the frontend technology

When choosing between Store Framework and FastStore, the team must evaluate the project's specific needs and consider the team's experience with both technologies.

Store Framework is a more mature option that offers a flexible structure suitable for complex use cases and support for stores operating internationally and in multiple languages.
For B2B stores, Store Framework is a good choice, as it provides the [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite), an app that allows the management of organizations, storefront permissions, and checkout settings for B2B commerce relationships.

FastStore is an evolving alternative focused on store performance. This solution offers a fast-loading experience, which is crucial for keeping store visitors engaged and reducing cart abandonment rates. For simpler use cases focused on performance, FastStore can be the recommended technology.

> ℹ️ The [VTEX support](/en/docs/tracks/vtex-support) team can help you choose between one of the available storefront technologies.

The table below compares the two technologies based on their main features:

<table>
    <tbody><tr>
        <td>**Feature**</td>
        <td>**Store Framework**</td>
        <td>**FastStore**</td>
    </tr>
    <tr>
      <td>Starter (initial template)</td>
        <td>The [Store Theme](https://github.com/vtex-apps/store-theme) is the initial template the team can use as a basis for launching the store project or starting from scratch.</td>
        <td>The [FastStore Starter](https://starter.vtex.app/) is already available after completing the [FastStore Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview). This allows the team to kick off the project with a base template focused on performance.</td>
    </tr>
    <tr>
        <td>Performance</td>
        <td>Uses SSR (Server Side Rendering) features to generate the complete HTML of a page on the server as a response to a page request, and SPA (Single Page Application) to load elements such as the header only once the page is loaded.</td>
        <td>Enables maximum performance by using the [Jamstack](https://jamstack.org/) architecture to pre-generate the store's pages, making delivery faster and more resource-efficient.</td>
    </tr>
    <tr>
        <td>Tech Stack</td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>Node.js</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Component customizations</td>
        <td>Flexible and easy to customize.</td>
        <td>Allows native component customization and guarantees store performance following best practices.</td>
    </tr>
    <tr>
        <td>Code management</td>
        <td>Uses [workspaces](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) and the VTEX IO architecture for versioning, updating, and rolling back components and apps.</td>
        <td>Uses GitHub and the [branch](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) concept for collaboration. Authorized users in the storefront repository on GitHub can view and work on the code.</td>
    </tr>
    <tr>
        <td>*Community and Support*</td>
        <td>
            <ul>
                <li>[Official documentation](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework)</li>
                <li>[VTEX Community](https://community.vtex.com/c/store-development/store-framework/17)</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>[Official documentation](https://www.faststore.dev/docs)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>*Performance Monitoring and Analytics*</td>
        <td>
            <ul>
                <li>Possibility of configuring [VTEX Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager) to analyze store navigation data.</li>
                <li>Possibility of increasing store performance using [optimization tools](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance).</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Possibility of configuring the native Analytics module.</li>
                <li>Possibility of improving store performance using technology tools.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Content Management Systems (CMS)</td>
        <td>Compatible with [Site Editor](/en/docs/tutorials/site-editor-overview).</td>
        <td>Compatible with [Headless CMS (Legacy)](https://developers.vtex.com/docs/guides/faststore/headless-cms-overview).</td>
    </tr>
</tbody></table>

## Development stages

Before launching the store into production and [going live](/en/docs/tracks/planning-the-go-live), list the essential settings and features to add to the storefront. These definitions help you define the minimum viable product (MVP) for the storefront. The following topics outline:

- [FastStore MVP requirements](#faststore-mvp-requirements)
- [Store Framework MVP requirements](#store-framework-mvp-requirements)

> ℹ️ The following recommendations are for basic storefront setup. Other settings may be required depending on the [architecture chosen](/en/docs/tracks/accounts-and-architecture) for your store's operation.

### Development using FastStore

The development team must start a new project with FastStore through the [Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview) process. The team will have a basic, functional store based on [FastStore Starter](https://starter.vtex.app/) at the end of this process. By the end of this process, the store will already include the following basic requirements:

- Homepage
- Product Listing Page (PLP)
- Product Details Page (PDP)
- Minicart

![FastStore template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_2.png)

#### FastStore MVP requirements

Below are the requirements for each topic:

- Catalog
  - [Adding products and SKUs](/en/docs/tutorials/adding-or-editing-products)
  - [Creating a category tree](/en/docs/tutorials/registering-a-category) ([departments](/en/docs/tutorials/what-is-a-department), [categories](/en/docs/tutorials/what-is-a-category) and [subcategories](/en/docs/tutorials/what-is-a-subcategory))
  - [Defining filters and types of specifications per category](/en/docs/tutorials/creating-a-specification-group-in-a-category)
  - [Adding SKU images](/en/docs/tutorials/adding-or-editing-skus#images)
  - [Adding SKU prices](/en/docs/tracks/cadastrar-preco-base)
  - [Inventory management](/en/docs/tutorials/managing-stock-items)
- VTEX Intelligent Search
  - [Integrating the Intelligent Search app with the account](https://developers.vtex.com/docs/guides/faststore/getting-started-1-setting-up-your-environment#step-4-enabling-the-vtex-intelligent-search-app)
- Headless CMS (Legacy) integration
  - [Configuring Headless CMS (Legacy) in the account](https://developers.vtex.com/docs/guides/faststore/getting-started-5-integrating-your-project-with-the-headless-cms)
  - [Defining content types and sections that will be available](https://www.faststore.dev/docs/headless-cms-integration/2-setting-up-the-headless-cms)
  - Creating and editing pages using Headless CMS (Legacy) in the VTEX Admin
- Homepage
  - Editing the components and layouts already listed in [Starter](https://starter.vtex.app/)
- Login page
  - [VTEX Login integration](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login)
  - Editing the components and layouts already listed in [Starter](https://starter.vtex.app/)
- Product Listing Page (PLP)
  - Editing the components and layouts already listed in [Starter](https://starter.vtex.app/office)
- Product Details Page (PDP)
  - Editing the components and layouts already listed in [Starter](https://starter.vtex.app/4k-philips-monitor-99988213/p)
- Minicart configuration
  - Editing the components and layouts already listed in [Starter](https://starter.vtex.app/)
- Checkout
  - [VTEX Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout) integration
  - [VTEX Order Placed e My Account](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account) integration
- Logistics
  - [Add a loading dock](/en/docs/tutorials/gerenciar-doca)
  - [Adding shipping strategies](/en/docs/tutorials/shipping-strategy)
  - [Associating a shipping strategy and warehouse with a loading dock](/en/docs/tutorials/managing-loading-docks)
- Payments
  - [Configuring the Notes Payable provider](/en/docs/tutorials/setting-up-the-notes-payable-conector)
  - [Adding gateway providers](/en/docs/tutorials/registering-gateway-affiliations/)
- Performance and SEO
  - Improving the store performance using the right [technology](https://v1.faststore.dev/how-to-guides/performance) tools
- Metrics
  - Configuring the [Analytics](https://v1.faststore.dev/reference/sdk/analytics) module

### Development using Store Framework

The development team must start a new project with Store Framework by cloning and [linking](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) the [store theme](https://github.com/vtex-apps/store-theme) to a [development workspace](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace). The store theme is a basic functional template to kick off the store with essential components and pages, such as:

- Homepage
- Product Listing Page (PLP)
- Product Details Page (PDP)

![Store Framework template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_3.png)

#### Store Framework MVP requirements

Below are the requirements for each topic:

- Catalog
  - [Adding products and SKUs](/en/docs/tutorials/adding-or-editing-products)
  - [Creating a category tree](/en/docs/tutorials/registering-a-category) ([departments](/en/docs/tutorials/what-is-a-department), [categories](/en/docs/tutorials/what-is-a-category) and [subcategories](/en/docs/tutorials/what-is-a-subcategory))
  - [Defining filters and types of specifications per category](/en/docs/tutorials/creating-a-specification-group-in-a-category)
  - [Adding SKU images](/en/docs/tutorials/adding-or-editing-skus#images)
  - [Adding SKU prices](/en/docs/tracks/cadastrar-preco-base)
  - [Inventory management](/en/docs/tutorials/managing-stock-items)
- VTEX Intelligent Search
  - [Integrating the Intelligent Search app with the account](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account)
- Homepage
  - Editing the components and layouts already listed in [Starter](https://storetheme.vtex.com/)
- Login page
  - Integrating with VTEX Login
  - Editing the components and layouts already listed in [Starter](https://storetheme.vtex.com/)
- Product Listing Page (PLP)
  - Editing the components and layouts already listed in [Starter](https://storetheme.vtex.com/clothing?_q=clothing&map=ft)
- Product Details Page (PDP)
  - Editing the components and layouts already listed in [Starter](https://storetheme.vtex.com/ten-top-shirts/p)
- Minicart configuration
  - Editing the components and layouts already listed in [Starter](https://storetheme.vtex.com/)
- Logistics
  - [Add a loading dock](/en/docs/tutorials/gerenciar-doca)
  - [Adding shipping strategies](/en/docs/tutorials/shipping-strategy)
  - [Associating a shipping strategy and warehouse with a loading dock](/en/docs/tutorials/managing-loading-docks)
- Payments
  - [Configuring the Notes Payable provider](/en/docs/tutorials/setting-up-the-notes-payable-conector)
  - [Adding gateway providers](/en/docs/tutorials/registering-gateway-affiliations/)
- Performance
  - Improving the store performance using performance [optimization tools](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance)
- Metrics
  - Configuring [Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager)
