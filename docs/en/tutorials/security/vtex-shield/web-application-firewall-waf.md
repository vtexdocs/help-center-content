---
title: 'Web Application Firewall (WAF)'
id: 6BZYLlU03ws72iqIFF6jdn
status: PUBLISHED
createdAt: 2024-04-25T00:17:16.172Z
updatedAt: 2024-10-18T17:04:59.360Z
publishedAt: 2024-10-18T17:04:59.360Z
firstPublishedAt: 2024-04-25T01:16:27.468Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: web-application-firewall-waf
legacySlug: web-application-firewall-waf
locale: en
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ This feature is part of the [VTEX Shield](/docs/tutorials/vtex-shield) product. If you're a VTEX client and want to adopt VTEX Shield for your business, contact our [Commercial Support](/docs/tracks/commercial-support). Additional fees may apply. If you're not a VTEX client but are interested in this solution, complete the [contact form](https://www.vtex.com/en-us/contact-us/).

The Web Application Firewall (WAF) is a security layer designed to protect web applications by monitoring and filtering internet traffic.

WAF is specifically meant for HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) communications, scanning inbound data to detect and block possible threats.

![waf-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_1.png)

The first step to using WAF is defining [security rules](#security-rules), which are determined by the VTEX Security team based on their analysis of information flow patterns. Based on these rules, the WAF continuously monitors web traffic. When it detects potentially harmful activity, it can block traffic, thus preventing the exploitation of vulnerabilities in the web application.

## Security rules

Stores using VTEX Shield and choosing to use WAF have the following security rules against threats:

| Threat | Security rule |
|---|---|
| Remote File Inclusions (RFI) | Detects attempts to include files, usually via scripts on the web server. |
| Directory Traversal | Verifies and validates file names provided by users, preventing unauthorized access to sensitive files and folders. |
| Cross-Site Scripting (XSS) | Prevents the injection of client-side scripts into the pages viewed by visitors. |
| File upload | Detects attempts to upload files to the web server. |
| Evasion techniques | Protects against some coding tricks used to try to bypass protection mechanisms. |
| Unwanted access | Detects attempts to access admin or vulnerable pages, bots, and security scanning tools. |
| Identified attacks | Prevents common attacks and known vulnerabilities. |
| IP filter | Checks a list of IP addresses that have access permissions or restrictions. |
| Tor network blocking | Prevents access to the site using the Tor browser. |

> ℹ️ The selection of rules and the names displayed may vary based on the configuration set in the WAF provider and any customizations requested by the merchant.

## Requesting WAF activation

To request WAF activation in your store, contact [VTEX Support](https://supporticket.vtex.com/support). Include the following information in the ticket:

* URLs to be added to WAF.
* Name and contact information (email and phone) for the point of contact with the VTEX Security team during activation.
* Provider: To access WAF, all store URL traffic must go through the provider currently used by VTEX. If that's not the case, you need to complete a procedure with the VTEX Traffic team, which can take between 1 and 2 weeks.

After the request, the period to activate WAF on the store URLs is 4 weeks, plus any time needed to migrate to the provider, if applicable.

## WAF metrics

VTEX Shield provides a dashboard for real-time monitoring of WAF metrics and activity. To view the dashboard in the VTEX Admin, go to **Apps > Shield > WAF**, or type **WAF** in the search bar.

The dashboard displays the following information and resources:

* [Period filter](#period-filter)
* [General metrics](#general-metrics)
* [Actions](#actions)
* [Rules](#rules)
* [Attack types](#attack-types)
* [Origin countries](#origin-countries)
* [Devices](#devices)

### Requirements

To view the page, you must:

* Have WAF [activated](#request-waf-activation) in advance.
* Be a user associated with a [role](https://help.vtex.com/en/docs/tutorials/roles) with the following [License Manager resource](https://help.vtex.com/en/docs/tutorials/license-manager-resources):

  - **Product**: _CDN API_
  - **Category**: _WAF Control_
  - **Resource**: _View WafControl Metrics_

### Period filter

In the upper-right corner, you can select the data time period by clicking the current period. The available options are:

* **Today**
* **Yesterday**
* **Last 7 days**
* **Last 14 days**
* **Last 30 days**
* **Custom period** allows selecting specific start and end dates, with a maximum interval of 30 days, limited to the last 60 days.

After selecting the desired period, click `Apply` to update the dashboard metrics.

### General metrics

The top section of the dashboard shows three main metrics:

* **All requests:** Total number of requests analyzed by WAF during the selected period.
* **Blocked:** Number and percentage of requests that were blocked by WAF before reaching the application because they were identified as threats.
* **Allowed:** Number and percentage of requests permitted by WAF and forwarded to the application after analysis, considered safe.

![waf-2-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_2.png)

### Actions

The Actions chart shows the trend of WAF activity over time, displaying the volume of requests by hour of the day, aggregated across the selected period. It allows you to identify traffic peaks at specific times.

The chart displays three main metrics:

* **Blocked** (blue line): Requests blocked by WAF.
* **Allowed** (purple line): Allowed requests.
* **Total** (gray line): Total volume of requests analyzed.

![waf-3-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_3.png)

### Rules

The **Rules** chart shows the security rules that were triggered during the selected period. You can view the data in two ways, using the options in the upper-right corner of the chart:

* **Time:** Historical trend of when each rule was applied.
* **Summary:** Consolidated actions per rule.

![waf-4-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_4.png)

> ℹ️ The selection of rules and names displayed may vary according to the configuration defined by the WAF provider and any customizations requested by the merchant.

### Attack types

The **Attack types** section includes a horizontal bar chart with the main threat types detected and their incidence volume.

The displayed attack types correspond to the most relevant for the store—for example, those with the highest incidence—and not necessarily the ones defined in the list. Learn more about common attacks in [OWASP Top 10](https://owasp.org/Top10).

![waf-5-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_5.png)

### Origin countries

The **Origin countries** chart shows the geographic distribution of requests, allowing you to identify the countries of origin of access requests to your site, as analyzed by WAF. Countries are listed using three-letter codes, with horizontal bars indicating the request volume from each location.

![waf-6-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_6.png)

### Devices

The **Devices** chart presents the percentage distribution of device types used to access the site in the requests analyzed by WAF:

* **Desktop:** Accesses via desktop computers.
* **Mobile:** Accesses via mobile devices.
* **Tablet:** Accesses via tablets.
* **Unknown:** Unidentified devices.

The data is presented in a pie chart with the corresponding percentages.

![waf-7-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/web-application-firewall-waf_7.png)

## Learn more

* [VTEX Shield](/en/docs/tutorials/vtex-shield)
