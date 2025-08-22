---
title: 'Planning the go-live'
id: 6xYnNxDHUcY6FyChgziCoH
status: PUBLISHED
createdAt: 2024-01-08T13:11:05.385Z
updatedAt: 2025-04-16T19:25:34.034Z
publishedAt: 2025-04-16T19:25:34.034Z
firstPublishedAt: 2024-02-22T14:07:27.548Z
contentType: trackArticle
productTeam: Others
slugEN: planning-the-go-live
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: vtex-store-overview
---

Go-live is when your store becomes available for customers to visit and make purchases. This article explains how to plan all the necessary steps for the go-live of a VTEX store. It is structured as follows:

1. [Preparing for the go-live](#1-preparing-for-the-go-live)
2. [Store settings](#2-store-settings)
3. [Domain and account settings](#3-domain-and-account-settings)
4. [Testing before the go-live](#4-testing-before-the-go-live)
5. [Domain registration and pointing request](#5-domain-registration-and-pointing-request)
6. [Go-live](#6-go-live)
7. [Post-go-live actions](#7-post-go-live-actions)

## Before you begin

When preparing a store for go-live, you should have already defined the implementation team or [partner agency](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners), chosen the [VTEX account types](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#vtex-account-types) based on your operation, and planned the store's architecture. More information on these steps can be found in the [Accounts and architecture](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl) article.

## 1. Preparing for the go-live

The process of a store's go-live, including the necessary settings and tests, can vary according to the store's operational complexity. For this reason, we recommend planning all the necessary steps for the go-live at least 15 days in advance.

The following image shows the planning steps for the VTEX store go-live:

![go-live-en](//images.ctfassets.net/alneenqid6w5/3AA13R58ffQhNjBBoJm2kS/42ac375fd2ab83f78c34dfca3da81260/golive_1_EN.png)

### Define the MVP

First, you must determine what is essential for the _Minimum Viable Product_ (MVP), including the functionalities, pages, and information required for the store's official launch.

It is important to list everything that must be implemented before going live. Features that are desirable but not essential should be listed separately and implemented as incremental changes after the launch.

### Set a schedule

To organize the teams involved and go live on the planned date, you need to create a _roadmap_, i.e., a document with the actions required for the go-live, indicating who is accountable for each step and the agreed deadlines. The following image shows a timeline as an example:

![golive 2 EN](//images.ctfassets.net/alneenqid6w5/Z0MHCvHc0dMND8dOCk7JJ/bae691008a305280c7c3d14aeb319b11/golive_2_EN.png)

We recommend scheduling regular meetings with the [implementation teams](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners) to ensure alignment and, if necessary, establishing a _war room_ to deal with pending issues in the week before the go-live.

### Plan a soft launch

In addition to performing tests during project development, we recommend including a soft launch in the schedule, i.e., a launch restricted to a specific group or market before the official launch. This step can help refine and fix details missed during the implementation project.

After the official launch date, when the store is fully operational, developers can continue to iterate the MVP and add improvements without disrupting sales.

## 2. Store settings

Before going live, you must ensure that all essential settings are configured for your store to operate smoothly. To do this, we recommend checking the [Store configuration checklist](https://assets.ctfassets.net/alneenqid6w5/3yv1ofQRJ5xeX7J5EGglGy/dbe5b9175ab01586916c6155ac5681fa/Checklist_de_configura____o_de_loja.xlsx). Each item must be checked to ensure the settings have been completed to meet the store's operational characteristics.

> ⚠️ The checklist above lists basic features and settings necessary for running a VTEX store. It is up to each store's[ implementation team](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#implementation-partners) to determine the features and settings to apply to deliver the desired shopping experience for customers. We recommend checking all the store's operational aspects and adding them to the list, if necessary.

## 3. Domain and account settings

Once the store's internal settings have been completed, you'll need to configure the settings related to the domain and the VTEX account. These changes do not depend on the expected go-live date but must be made before the testing.

1. [Check domain in CDNs](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#checking-domain-in-cdns): Make sure the domain is not previously registered on the [Cloudfront](https://aws.amazon.com/en/cloudfront/) platform.
2. [Configure CAA records](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#configuring-caa-records): Indicate that the **Let's Encrypt** certificate authority (CA) is authorized to generate and renew certificates attesting to the domain's identity. This step is only necessary if there is a CAA record on the DNS server.
3. [Put your account in production](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX#putting-your-account-into-production): Activate the VTEX account in production. Even after this activation, the store remains unavailable for access by external customers. Viewing and purchasing products in the store will only be possible after the go-live has been completed, according to the steps described in the following sections of this article.

> ⚠️ Once the account is active in production, all orders will be automatically charged, and the [take rate](https://help.vtex.com/en/tutorial/understanding-the-value-of-approved-revenues--tutorials_4322#understanding-the-values-of-approved-revenues) will be applied based on the plan agreed upon with VTEX. This includes orders placed on the `{accountname}.myvtex.com` domain, even if they were placed for testing purposes.

For more information, see the [Settings](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7wFsbWgN4rnZsbjhv8IItX) article, which is part of the detailed [Go-live](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/1iP90RcJvlrfQhnlxM54wo) track article.

## 4. Testing before the go-live

We recommend running tests before the go-live to check the store's behavior and avoid errors or pending issues during the official launch. The following sections explain the two most common test types: [Quality Assurance (QA)](#quality-assurance-qa) and [User Acceptance Testing (UAT)](#user-acceptance-testing-uat).

On VTEX, you can create separate environments to run these tests. In this case, you need to replicate the settings of the main environment that will be tested. For example, to test how a promotion works, you must configure all the necessary settings to simulate a scenario in which it would be applied, including products, prices, logistics, checkout, payment methods, etc.

To plan the testing step, contact [our support](https://help.vtex.com/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy) team, so you can [request a test environment](https://help.vtex.com/en/tutorial/requesting-a-test-environment--2nmZAHlfQoGsCWmEWGIoGy).

> ⚠️ If the store is[ built using VTEX IO](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#development-environment), you can run A/B tests between workspaces, i.e., compare the performance of storefront development environments. For more details, see the[ Running A/B tests](https://developers.vtex.com/docs/guides/vtex-io-documentation-running-native-ab-testing) developer guide.

### Quality Assurance (QA)

The QA (Quality Assurance) testing step involves checking and validating all the store's elements and features before the store is available to the general public. This process includes testing every element thoroughly, from the site's navigability and performance to different purchase flow scenarios, payment processing, and system integrations.

The objective is to identify and fix any issues, errors, or bugs to ensure the store is ready and consistent with the intended scope of the MVP at launch. In this step, you should document bugs and errors and plan how to fix them before the go-live date.

### User Acceptance Testing (UAT)

UAT, or User Acceptance Testing, is the final testing phase in which end users validate and verify if the store meets the expectations and features required for the MVP. Generally, this type of test involves the store's staff and, in some cases, a selected group of customers.

During UAT, testers explore the site, make test purchases, and evaluate the overall user experience. This step provides another opportunity to report, document, and fix any issues or unwanted behavior in the experience before the official launch, thus enhancing the likelihood of success after the go-live.

## 5. Domain registration and pointing request

Once the necessary tests and fixes have been completed, you must prepare the store for the go-live. Between three and seven days before the official launch date, you should do the following:

1. [Register the domain on VTEX](https://help.vtex.com/en/tutorial/configuring-domains-in-account-management--tutorials_2450): Go to **Account settings** in the VTEX Admin to connect the address to the store.

   > ⚠️ Once you have registered the domain, you have seven days to complete the go-live. If the store does not complete the necessary go-live procedures within this period, you will need to go back to the registration and save it again.

2. **Request internal pointing:** Open a ticket to [VTEX Support](https://help.vtex.com/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy) to request internal DNS pointing. It can take up to three working days to complete this request.

    The request type forwarded must be consistent with the [technology chosen](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) for the storefront:

  <table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <thead>
    <tr class="bb b--muted-3">
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Technology</th>
      <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Request</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">Store Framework or FastStore (VTEX IO)</td>
      <td class="t-body pa5" style="min-width: 10rem;">Request [internal DNS pointing for VTEX IO](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#requesting-io-pointing) by submitting a ticket to [VTEX Support](https://help.vtex.com/en/support).<br> <br>More information in the articles:<ul><li>[Going live with a new store](https://developers.vtex.com/docs/guides/vtex-io-documentation-go-live) (Store Framework)</li><li>[Migrating your storefront from Legacy CMS Portal to Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-storefront-from-legacy-to-io)</li><li>[Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns) (FastStore)</li></ul></td>
    </tr>
    <tr class="bb b--muted-3">
      <td class="t-body pa5" style="min-width: 10rem;">Legacy CMS Portal</td>
      <td class="t-body pa5" style="min-width: 10rem;">If access to the store is restricted by a [trade policy](https://help.vtex.com/en/tutorial/creating-a-trade-policy--563tbcL0TYKEKeOY4IAgAE) with a conditional rule, and your storefront was built using [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), you need to request a [special internal pointing](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#requesting-special-pointing). A typical example is B2B stores, which restrict access to pre-approved companies. The special pointing request is made by [VTEX Support](https://help.vtex.com/en/support), indicating the trade policy and the configured conditional rule.</td>
    </tr>
  </tbody>
  </table>

Regardless of the request type, the ticket to VTEX Support must have the following information:

- Title stating the intention to go live.
- If the [storefront technology](http://link-implement-frontend) was developed on VTEX IO or Legacy CMS Portal.
- URL to be pointed to.
- Time for internal pointing to be carried out, between 9 a.m. and 5 p.m. UTC-3.
- Indicate if the store has conditional rules for [trade policies](https://help.vtex.com/en/tutorial/creating-a-trade-policy--563tbcL0TYKEKeOY4IAgAE).
- If you are migrating a live site to VTEX, indicate whether it uses Cloudfront.

> ⚠️ After receiving confirmation of the internal pointing, you are required to complete the standard DNS pointing within five days. Otherwise, the internal pointing will be deleted, and you must submit a new request.

## 6. Go-live

At the time of go-live, after confirming the internal pointing from the previous step, you will need to execute the DNS pointing and then notify VTEX:

1. [Set up DNS pointing](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#setting-up-dns-pointing): In the domain's DNS zone, create a CNAME entry in the desired subdomain for the destination ``{domain}.cdn.vtex.com``. The ``{domain}`` must be the same as the one registered on VTEX.

   > ⚠️ DNS propagation pointing can take between 24 and 48 hours. As a result, the configured address might not be immediately accessible to everyone after the configuration.

2. [Notify the pointing:](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#notifying-the-pointing) To make your store available to the general public, you must notify the VTEX platform that pointing has been completed. To do this, you must save your **Account settings** in the VTEX Admin again.

   > ⚠️ If the store was built using[ FastStore](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#faststore), you will also need to follow the steps described in the[ Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns) article.

Once the above steps have been completed, the store will be available on the registered domain, allowing customers to access it and make purchases.

## 7. Post-go-live actions

After the store's official launch, you should ensure that customers have access to the correct address and monitor sales performance and site navigation by taking some important actions.

### Configuring redirects

After the go-live, you can access the store on the [registered domain](https://help.vtex.com/en/tracks/como-realizar-el-go-live-de-tu-tienda--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#registering-the-domain-on-vtex). However, you may need to redirect old addresses or addresses without the `www` subdomain to ensure access to the new store address. To do this, we recommend checking the tutorials from the following articles:

- [Redirection from other addresses](https://help.vtex.com/en/tutorial/redirection-from-other-addresses--3Xi2AeLUx2QpJQu8DTX8KQ)
- [Configuring access without www](https://help.vtex.com/en/tutorial/configuring-access-without-www--tutorials_4278)

### Monitoring store performance

We recommend monitoring the store's performance after launch using the [Dashboards](https://help.vtex.com/en/tutorial/dashboards-overview--1yn2nZUoXtDO3teTEJsCNl) menu in the VTEX Admin, which includes the following pages:

- [Overview](https://help.vtex.com/en/tutorial/store-overview--P8ahguoRs0U3PzmXg2wuQ): The main metrics that impact store revenue. In this dashboard, you can monitor the main sales evolution metrics by analyzing order trends, conversion rates, and sales funnel charts.
- [Sales Performance](https://help.vtex.com/en/tutorial/sales-performance--3DMube0sEsK9vPcRYGas72): Dashboard for unified commerce, which helps stores grow their business and make more accurate decisions.

Besides the tools available in the VTEX Admin, you can also monitor your store's performance through [Google Analytics](https://analytics.google.com/analytics/web/), provided it has been previously set up. For more information, see the [Configuring Google Analytics 4 in VTEX stores](https://help.vtex.com/en/tutorial/how-to-setup-google-analytics-in-vtex-store--G2P0rmSrEiqCcmUMyUUwG) guide.
