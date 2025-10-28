---
title: 'Frontend implementation'
id: 67SCtUreXxKYWhZh8n0zvZ
status: PUBLISHED
createdAt: 2024-01-31T22:25:47.689Z
updatedAt: 2025-08-01T17:28:03.949Z
publishedAt: 2025-08-01T17:28:03.949Z
firstPublishedAt: 2024-02-22T14:07:19.178Z
contentType: trackArticle
productTeam: Others
slugEN: frontend-implementation
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: vtex-store-overview
order: 7
---

The frontend of an online store, also known as the storefront, is the store's visual and interactive interface. This is where customers interact with products and perform actions such as navigating categories, searching, and adding products to their cart.

This article helps you choose the right technology for building your storefront and the settings required for it, considering the following aspects:

- VTEX storefront development technologies.
- Main features of each technology.
- Development stages.

The frontend implementation is a stage focused on defining the technologies to implement based on the business needs related to the storefront.

> ℹ️ The frontend can be implemented by the company's internal development team or our [implementation partners ](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners).[Users](/en/tutorial/managing-users--tutorials_512) with access to the VTEX Admin can view our partner list through the [Partner Portal](https://partnernetwork.myvtex.com/Parceiros).

## Before you begin

Before implementing the frontend, you should configure the following steps in your store:

| Step | Description |
|---|---|
| Defining the store's architecture and sales strategy | The team defines your VTEX store's architecture based on your business model's strategies and needs.<br><br>Learn more in the [Accounts and architecture](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) article. |
| Configuring roles | The team configures the roles needed for each [user](/en/tutorial/managing-users--tutorials_512) to use the VTEX platform.<br><br>Learn more in the [Roles](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) article. |
| Configuring catalog | The team configures the product[ catalog](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalog), category tree, and related information, such as descriptions, images, and prices, to populate and test the store, including features such as product listing pages (PLP), search features, product details pages (PDP), and checkout.<br><br>Not having a catalog can result in incomplete testing and data integration problems, which delays implementation.<br><br>Learn more in the [VTEX modules I](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7) article. |
| Defining the apps needed to operate the store | The team defines the native and third-party apps needed to operate the store.<br><br>For stores that will be built using [Store Framework](#store-framework), there is a list of native and third-party apps.<br><br>Learn more in the [VTEX IO apps](https://developers.vtex.com/docs/vtex-io-apps) article. |

> ℹ️ The [development stage](#development-stages) can run in parallel with other [backend integrations](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) and [module configuration](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7) steps, such as setting up payment methods and logistics. This will depend on the type of [architecture and planning](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) chosen for the VTEX store, and the [implementing agency](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners) or [VTEX Support](/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) should monitor these processes.

## Frontend development technologies on VTEX

VTEX has three different technologies for storefront development: [FastStore](#faststore), [Store Framework](#store-framework) and [CMS Portal Legado](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj). Legacy CMS Portal was VTEX's first technology for building storefronts, based on HTML, CSS, and JavaScript, and all development and code editing for this technology is done via the VTEX Admin.

> ⚠️ Although some stores still use it, the [CMS Portal Legado](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) is a legacy technology and is no longer available to new stores starting with VTEX.

The following sections are about the main characteristics and features of FastStore and Store Framework.

## FastStore

FastStore is a fresh innovative storefront technology for development teams to create stores focused on performance and stability. It's also an easy-to-maintain technology when editing your store's pages.

This technology is an open-source toolkit based on [React](https://react.dev/) and the [Jamstack](https://jamstack.org/) architecture. For more information, see the [FastStore](https://www.faststore.dev/docs) documentation portal.

### FastStore main features

The following table lists some of FastStore's main features:

| Feature | Description |
|---|---|
| [Starter](https://starter.vtex.app/) | Functional template designed for fast store development, which seamlessly integrates the [FastStore UI](https://www.faststore.dev/components) components. It includes pages such as Home, product list pages (PLPs), product detail pages (PDPs), and minicart features. |
| [FastStore UI](https://www.faststore.dev/components) | Component library for ecommerce that provides basic features and design, enabling faster implementation and storefront customization. |
| Headless technology | Customization process that separates the store code developed by the development team from the base code provided by VTEX. This simplifies updates to the store's frontend, allowing updates without impacting the customized code. |
| [GitHub](https://github.com/) integration | Development teams can manage all storefront code using [GitHub](https://github.com/). |
| [Headless CMS](https://www.faststore.dev/docs/headless-cms-overview) | Content management system (CMS) that allows editing and creating new pages and previewing content changes. |
| Automated checks | Functional tests and the store's performance and code quality assessment run continuously and automatically to identify slowdowns and bugs throughout the storefront development stage. |
| [Intelligent Search](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account) integration | Autocomplete feature in the search bar, which also offers search suggestions and products based on configurable preferences. |
| [Checkout](https://www.faststore.dev/docs/go-live/4-integrating-the-vtex-checkout), [My Account](https://www.faststore.dev/docs/go-live/5-integrating-the-vtex-order-placed-and-my-account), and [Login](https://www.faststore.dev/docs/go-live/3-integrating-the-the-vtex-login) integrations | Integration with other stages of the customer buying journey. VTEX stores previously developed using Store Framework can keep settings related to Checkout, My Account, and Login when migrated to FastStore, as they benefit from the same infrastructure. |

## Store Framework

Store Framework is a well-established solution providing a technology framework for low-code storefront implementation with a focus on the composable commerce model. In other words, the framework allows the combination of different [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) apps to build a storefront.

In this technology, the store's implementation and launch are based on pre-built components, also known as blocks, and customization of these components tailored to specific business needs. This _framework_ is based on:

- React
- TypeScript
- Node.js
- GraphQL

For more information, read the [What is VTEX Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework) article.

### Development environment

When talking about frontend implementation, remember that [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) is not a storefront building technology, but rather a development platform. The Store Framework is a technology for building storefronts that runs on VTEX IO, a cloud-based environment and development solution for customized apps and storefronts.

This means that with VTEX IO, you develop your code locally. However, when it comes to deploying and running the store, VTEX IO manages the infrastructure, CI/CD, and security and takes care of the deployment process. The image below shows how these concepts relate to each other:

![Frontend development architecture](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_1.png)

### Store Framework main features

The following table shows some of Store Framework's main features:

| Feature | Description |
|---|---|
| [Starter](https://github.com/vtex-apps/store-theme) | Functional template designed for fast store development, which seamlessly integrates pre-built components. |
| [Pre-built components](https://developers.vtex.com/docs/vtex-io-apps) | *React-based* native components. |
| Modular architecture | Customization and code reuse of interface elements to quickly launch and replicate stores. |
| [Workspaces and test environments](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) | It allows you to create different store versions and test them beforehand to make changes safely. |
| [Site Editor](/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) | Content management system (CMS) for editing templates and building new pages on the store's website. |
| [Native A/B testing](https://developers.vtex.com/docs/guides/ab-tests) | It allows you to test and validate the store version with the highest conversion rates. |
| [Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) integration | Autocomplete feature in the search bar, which also offers search suggestions and products based on configurable preferences. |
| [Progressive Web App (PWA)](/en/tutorial/enabling-pwa-push-notifications-in-your-store--1be3ZPhbsgZSbE7h5H46pG) | 
Enables native app-like experiences on any device with PWA-ready technology.|
| [Cross-border](/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/5qgXy9Erm7FDP3UB5Ox8Bs) | It allows a VTEX [multistore](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#multistore) to operate in different countries with a specific approach for each one. |
| Checkout, [My Account](/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), and Login integrations | Integration with other stages of the customer buying journey. |

## Choosing the frontend technology

When choosing between Store Framework and FastStore, the team must evaluate the project's specific needs and consider the team's experience with both technologies.

The Store Framework is a more mature option that offers a flexible structure suitable for complex use cases and support for stores operating internationally and in multiple languages. 
For B2B stores, Store Framework is a good choice, as it provides the [B2B Suite](https://developers.vtex.com/docs/apps/vtex.b2b-suite), an app that allows the management of organizations, storefront permissions, and checkout settings for B2B commerce relationships.

FastStore is an evolving alternative focused on store performance. This solution offers a fast loading experience, crucial for keeping store visitors engaged and reducing cart abandonment rates. For simpler use cases with a focus on performance, FastStore cab be the recommended technology.

> ℹ️ The [VTEX support](/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/7w7cUmbrdPEKpTMItjXEB8) team can help you choose between one of the available storefront technologies.

The table below compares the two technologies based on their main features:

<table>
    <tr>
        <td>**Feature**</td>
        <td>**Store Framework**</td>
        <td>**FastStore**</td>
    </tr>
    <tr>
        <td>Starter (initial template)</td>
        <td>The [Store Theme](https://github.com/vtex-apps/store-theme) is the initial template the team can use as a basis to launch the store project or start from scratch.</td>
        <td>The [FastStore Starter](https://starter.vtex.app/) is already available after completing the [FastStore Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview). This allows the team to kick off the project with a base template focused on performance.</td>
    </tr>
    <tr>
        <td>Performance</td>
        <td>SSR (Server Side Rendering) features generate the complete HTML of a page on the server as a response to a page request, while SPA (Single Page Application) loads elements such as the header only once the page is loaded.</td>
        <td>Maximum performance possible, as it uses [Jamstack](https://jamstack.org/) architecture to create the store's website pages in advance, making site delivery faster and more resource-efficient.</td>
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
        <td>It allows native component customization and guarantees store performance following best practices.</td>
    </tr>
    <tr>
        <td>Code management</td>
        <td>It uses [workspaces](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace) and the VTEX IO architecture for versioning, updating, and rolling back components and apps.</td>
        <td>It uses GitHub and the [branch](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) concept for collaboration. Authorized users in the storefront repository on GitHub can view and work on the code.</td>
    </tr>
    <tr>
        <td>*Community and Support*</td>
        <td>
            <ul>
                <li>[Official documentation](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework)</li>
                <li>[VTEX community](https://community.vtex.com/c/store-development/store-framework/17)</li>
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
        <td>Compatible with [Site Editor](/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1).</td>
        <td>Compatible with [Headless CMS](https://www.faststore.dev/docs/headless-cms-overview).</td>
    </tr>
</table>

## Development stages

Before launching the store into production and [going live](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/6xYnNxDHUcY6FyChgziCoH), list the essential settings and features to add to the storefront. These definitions help you define the Minimum Viable Product (MVP) for the storefront. The following topics outline:

- [FastStore MVP requirements](#faststore-mvp-requirements)
- [Store Framework MVP requirements](#store-framework-mvp-requirements)

> ℹ️ The following recommendations are for basic storefront setup. Other settings may be required depending on the [architecture chosen](/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) for your store's operation.

### Developing using FastStore

The development team must start a new project with FastStore through the [Onboarding](https://www.faststore.dev/docs/getting-started/1-faststore-onboarding/overview) process. The team will have a basic, functional store based on [FastStore Starter](https://starter.vtex.app/) at the end of this process. After this, the following basic requirements for the page will have been implemented:

- Home
- *Product Listing Page* (PLP)
- *Product Details Page* (PDP)
- *Minicart*

![FastStore template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_2.png)

#### FastStore MVP requirements

Below are the requirements for each topic:

- Catalog
  - [Adding products and SKUs](/en/tutorial/adding-products--tutorials_2567)
  - [Creating a category tree](/en/tutorial/registering-a-category--tutorials_206) ([departments](/en/tutorial/what-is-a-department--22rKjmYWVmmKAK8CWa8yKw), [categories](/en/tutorial/what-is-a-category--6HV4Q3E2FauUoOQoiCCgCg) and [subcategories](/en/tutorial/what-is-a-subcategory--2cb0aRkG3i6AeiAMM24iwY))
  - [Defining filters and types of specifications per category](/en/tutorial/creating-a-specification-group-in-a-category--tutorials_246)
  - [Adding SKU images](/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY#images)
  - [Adding SKU prices](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Inventory management](/en/tutorial/managing-stock-items--tutorials_139)
- VTEX Intelligent Search
  - [Integrating the Intelligent Search app with the account](https://www.faststore.dev/docs/getting-started-requirements#enable-the-vtex-intelligent-search-app-in-your-account)
- Headless CMS integration
  - [Configuring Headless CMS in the account](https://www.faststore.dev/docs/headless-cms-integration/1-configuring-the-vtex-account)
  - [Defining content types and sections that will be available](https://www.faststore.dev/docs/headless-cms-integration/2-setting-up-the-headless-cms)
  - Creating and editing pages using Headless CMS in the VTEX Admin
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
  - [Adding loading docks](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW)
  - [Adding shipping strategies](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3)
  - [Associating a shipping strategy and warehouse with a loading dock](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW)
- Payments
  - [Configuring the Notes Payable provider](/en/tutorial/setting-up-the-notes-payable-conector--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Adding gateway providers](/en/tutorial/registering-gateway-affiliations/)
- Performance and SEO
  - Improving the store performance using the right[ technology](https://v1.faststore.dev/how-to-guides/performance) tools
- Metrics
  - Configuring the [Analytics](https://v1.faststore.dev/reference/sdk/analytics) module

### Developing using Store Framework

The development team must start a new project with Store Framework by cloning and [linking](https://developers.vtex.com/docs/guides/vtex-io-documentation-linking-an-app) the [store theme](https://github.com/vtex-apps/store-theme) to a [development workspace](https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-development-workspace). The store theme is a basic functional template to kick off the store with essential components and pages, such as:

- *Homepage*
- Product Listing Page (PLP)
- Product Details Page (PDP)

![Store Framework template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/onboarding-guide/vtex-store-overview/frontend-implementation_3.png)

#### Store Framework MVP requirements

Below are the requirements for each topic:

- Catalog
  - [Adding products and SKUs](/en/tutorial/adding-products--tutorials_2567)
  - [Creating a category tree](/en/tutorial/registering-a-category--tutorials_206) ([departments](/en/tutorial/what-is-a-department--22rKjmYWVmmKAK8CWa8yKw), [categories](/en/tutorial/what-is-a-category--6HV4Q3E2FauUoOQoiCCgCg) and [subcategories](/en/tutorial/what-is-a-subcategory--2cb0aRkG3i6AeiAMM24iwY))
  - [Defining filters and types of specifications per category](/en/tutorial/creating-a-specification-group-in-a-category--tutorials_246)
  - [Adding SKU images](/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY#images)
  - [Adding SKU prices](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29)
  - [Inventory management](/en/tutorial/managing-stock-items--tutorials_139)
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
  - [Adding loading docks](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW)
  - [Adding shipping strategies](/en/tutorial/shipping-strategy--58vLBDbjYVQzJ6rRc5QNz3)
  - [Associating a shipping strategy and warehouse with a loading dock](/en/tutorial/managing-loading-docks--7K3FultD8I2cuuA6iyGEiW)
- Payments
  - [Configuring the Notes Payable provider](/en/tutorial/setting-up-the-notes-payable-conector--7Gy0SJRVS0Qi2CuWMAqQc0)
  - [Adding gateway providers](/en/tutorial/registering-gateway-affiliations/)
- Performance
  - Improving the store performance using performance [optimization tools](https://developers.vtex.com/docs/guides/vtex-io-documentation-best-practices-for-optimizing-performance)
- Metrics
  - Configuring [Google Tag Manager](https://developers.vtex.com/docs/guides/google-tag-manager)
