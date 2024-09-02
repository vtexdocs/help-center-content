---
title: 'VTEX Status page'
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-12-21T17:10:08.895Z
publishedAt: 2023-12-21T17:10:08.895Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 1malnhMX0vPThsaJaZMYm2
slug: vtex-status-page
locale: en
legacySlug: untitled-entry-2019-01-14-at-07-58-58, vtex-status-understand-how-the-platform-status-works, platform-status-page
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

On the [VTEX Status](https://status.vtex.com/) page, you can monitor the platform's stability in real time and access the full incident history.

Our team reports events whenever our automatic monitoring system identifies an instability in the platform modules. Scheduled maintenance is also reported in detail on this page.

![statuspage-1](https://images.ctfassets.net/alneenqid6w5/qECQAjnWxwGH47wzXDv6c/d8aea2fa393bfb699b6ea71b9b59d7a9/statuspage-1.png)

Below, you can find details of the VTEX platform's status page elements, developed with the [incident.io](https://incident.io/) tool:

* [Report a problem](#reporting-a-problem)
* [Notifications](#notifications)
* [General status](#general-status)
* [System status](#system-status)
* [Calendar](#calendar)
* [Incident logs](#incident-logs)
* [Scheduled maintenance logs](#scheduled-maintenance-logs)

## Reporting a problem

By clicking the `Report a problem` button in the top right corner of the page, you can contact [our support](https://support.vtex.com/hc/en-us/requests) team to let us know about platform instabilities.

## Notifications

The status page displays the `Subscribe to updates` button in the top right corner. By clicking it, you can subscribe to receive updates via email, [RSS feed](https://rss.com/blog/how-do-rss-feeds-work/), or [Slack](https://slack.com/).

By choosing the email subscription option, you can receive notifications only for certain components. To do so, select the **Subscribe to specific components** option. Then, check the components you want to monitor.

![statuspage-2](https://images.ctfassets.net/alneenqid6w5/765OraMzYp5UPazSPX8JoP/2e3c6f8f076298d91e2ff5b8139325e0/statuspage-2.png)

## General status

In this section, you can view the platform's general status, which can be _fully operational_, _experiencing issues_, or _undergoing maintenance_.

When problems or maintenance affect a system, the impacted component and the incident description are displayed. See examples below.

![statuspage-3](https://images.ctfassets.net/alneenqid6w5/16vditkk4vdDH5NGhGp7zJ/21bc090adf8b43e7579831a500e4b627/statuspage-3.png)

![statuspage-4](https://images.ctfassets.net/alneenqid6w5/6EpVdfEsrlzNk2qQNWDN2b/80950f0d2faadb58b813eddc64eec7bc/statuspage-4.png)

![statuspage-5](https://images.ctfassets.net/alneenqid6w5/46ql2YGxhdGrZwrbhj9oe4/6d7fb7f4ffbf645810e4ade63efa9e64/statuspage-5.png)

## System status

In this section, you can check the status of each platform system and its components in real time.

![statuspage-6](https://images.ctfassets.net/alneenqid6w5/23cxCKAgrYgrHwsGeTWEFM/fdc22b9eff6d4bf11bfba43a283da409/statuspage-6.png)

By clicking the arrow <i class="fas fa-chevron-down"></i> next to the number of components, you can view the status of specific components for each system.

If maintenance is scheduled for a future date, you will also see the `Upcoming maintenance scheduled` button, as shown below. Hovering over this button will display the scheduled maintenance event. You can click to view its log.

![statuspage-7](https://images.ctfassets.net/alneenqid6w5/01rsFj3g2ZIyQfGvVj1U3F/1fbf5de5c36e02ec2bfd6204471a2ebf/statuspage-7.png)

The possible statuses for each component are:

* **Operational:** Operation is stable.
* **Degraded performance:** Performance is below the expected.
* **Partial outage:** Features are operating partially.
* **Full outage:** Operation is completely disrupted.
* **Under maintenance:** System is undergoing maintenance.

Below, we detail the components displayed on the page.

### Storefront

Problems navigating the storefront.

* **Portal/CMS:** Instabilities observed in stores developed with [Legacy CMS Portal](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj) storefront technology.
* **Store Framework:** Instabilities observed in stores developed using [Store Framework](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-store-framework) storefront technology.
* **FastStore:** Instabilities observed in stores developed using [FastStore](https://www.faststore.dev/) storefront technology.
* **Sales App:** Instabilities observed in [Sales App](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf), a VTEX solution for assisted sales in physical stores.
* **3rd Party Apps**: Instabilities observed in extensions maintained by third parties.

### Checkout

Problems in features related to the order creation flow, i.e., checkout and its dependencies.

* **Order Placement:** Disruptions in the sales flow.
* **Shipping Calculation:** Inconsistencies in shipping conditions.
* **Pricing Calculation:** Inconsistencies in prices, promotions, or surcharges.
* **Payments Gateway:** Inconsistencies in payment transactions.
* **Payment Connectors:** Instabilities observed in specific payment providers.

### Admin

Problems related to navigating the VTEX Admin and its modules, such as Order Management, Price Settings, and Logistics.

* **Catalog Management:** Disruptions in updating catalog content (product details, images, prices, inventory, search indexing, etc.).
* **Content Management:** Disruptions in updating non-product-related content (banners, landing pages, promotions, coupons, gift cards, etc.).
* **Order Management:** Disruptions in order fulfillment.
* **Marketplace Connectors:** Instabilities observed in specific marketplace connectors.
* **Admin Operations:** Other impacts on the merchant experience outside the scope of other Admin components.

### Developer Tools

Problems related to app development, integrations, and store themes.

* **VTEX IO:** Instabilities observed in apps developed using VTEX IO.
* **Master Data:** Instabilities observed in integrations that depend on Master Data.
* **API Integrations:** Other impacts on the use of VTEX APIs.

## Calendar

The calendar section displays the incidents and scheduled maintenance logs that occurred each day of the current month.

To navigate to previous months, click the arrow `<`.

To view incidents from a specific day, hover over the date. To access the page with the complete event log, click the listed incident or maintenance.

![statuspage-8](https://images.ctfassets.net/alneenqid6w5/2aRBMeTVELfszcFQFpXyUJ/8ca30c0cd6d89aaca8d92dc21af7274e/statuspage-8.png)

<div class="alert alert-warning">
  <p>If the scheduled maintenance lasts longer than a day, only the start date will be selected in the calendar. You must open the <a href="#scheduled-maintenance-logs"> maintenance log</a> to see the start and end dates.</p>
</div>

Below, we detail the information available in the [incident log](#incident-logs) and the [scheduled maintenance log](#scheduled-maintenance-logs).

## Incident logs

The incident details page displays the following information:

![status-page-9-en](https://images.ctfassets.net/alneenqid6w5/2jNJB6z7HrvDzQMLi1W4KW/6cacbbfc2e5b7e99bf4309e3622edda4/status-page-9-en.png)

* **Title:** Title describing the incident.
* **Status:** Each incident has a defined cycle in which our team works to identify and solve problems. These are stages of this cycle:
    * **Investigating:** The incident's first status focuses on analyzing the impacts and related services and identifying the root cause.
    * **Identified:** With the origin of the error properly identified, the development team begins to perform actions towards the solution.
    * **Monitoring:** After completing the system stabilization actions, with the operation indicators normalized, we continue to stay in alert and closely monitor the performance of impacted services or modules.
    * **Resolved:** Once the platform's performance is stabilized, we return to normal monitoring and consider that the platform is working as expected.
* **Duration:** Time taken to solve the incident.
* **Summary:** Text summarizing the incident.
* **Affected components:** The platform components impacted by the incident. By clicking the arrow next to the number of components, you can view the impact on more specific components.
* **Updates**: Timeline with incident updates and status changes.

By clicking the `Subscribe to updates` button on an incident log, you can sign up to receive updates on that specific incident via email, RSS feed, or Slack.

## Scheduled maintenance logs

Platform updates are made constantly and generally do not impact our clients' operations. However, occasionally, some of them require the service to be temporarily unavailable.

For cases that affect the platform's stability, we use the VTEX status page to inform you of all the details, such as when the maintenance will be carried out, its duration, and its impact.

The scheduled maintenance log displays the same information as the incident logs. The possible statuses for a scheduled maintenance are:

* **Scheduled:** The maintenance event is scheduled.
* **In progress:** The maintenance event is in progress.
* **Complete:** The maintenance event has been completed

Below are some examples illustrating the status and timeline of scheduled maintenance events.

![statuspage-10](https://images.ctfassets.net/alneenqid6w5/1pf3IU5k6R0pHhC7xLeKu0/7dc874395f5b13ba6e1ce62b76913398/statuspage-10.png)

![statuspage-11](https://images.ctfassets.net/alneenqid6w5/4GtphAcpvUEwKmhl7FuPiU/9900eb1dd6b9086a6c6049855dbc17c9/statuspage-11.png)
