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
locale: en
legacySlug: web-application-firewall-waf
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

<div class="alert alert-info">
  <p>This feature is part of <a href="https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh">VTEX Shield</a>. If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact <a href="https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Commercial Support</a>. Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our <a href="https://vtex.com/us-en/contact/">contact form</a>.</p>
</div>

The Web Application Firewall (WAF) is a security layer designed to protect web applications by monitoring and filtering internet traffic.

The WAF is aimed at HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) communications, scanning inbound and outbound data to detect and block possible threats.

![waf-en](https://images.ctfassets.net/alneenqid6w5/6yRQRFGEYBnfbynGxcNJrU/19c4af7d54a4e27985a697270e5ea662/waf-en.png)

The WAF's operation begins with the VTEX Security team defining [security rules](#security-rules) based on the analysis of information flow patterns. Based on these rules, the WAF continuously monitors web traffic. When it detects potentially harmful activity, it can block the traffic, thus preventing vulnerabilities in the web application.

## Security rules

Stores using VTEX Shield and choosing the WAF have the following security rules against threats:

| Threat | Security rule |
|---|---|
| Remote File Inclusions (RFI) | Detects attempts to include files, usually via scripts on the web server. |
| Directory Traversal | Verifies and validates file names provided by users, preventing unauthorized access to sensitive files and folders. |
| Cross-Site Scripting (XSS) | Prevents the injection of client-side scripts into the pages viewed by visitors. |
| File upload | Detects attempts to upload files to the web server. |
| Evasion techniques | Protects against some coding techniques used to bypass protection mechanisms. |
| Unwanted access | Detects attempts to access admin or vulnerable pages, bots, and security scanning tools. |
| Identified attacks | Prevents many common attacks and known vulnerabilities that must be blocked.   |
| IP filter | Checks a list of IP addresses to view their access permissions or blocks. |
| Tor network blocking | Prevents access to the site using the Tor browser. |

## Requesting WAF activation

To request WAF activation for your store, please contact [VTEX Support](/en/support). Include the following information in the ticket:

* URLs to be added to the WAF.
* Name and contact information of the point of contact with the VTEX Security team during the activation process.
* Provider: To access the WAF, all store URL traffic must go through the provider currently used by VTEX. If that's not the case, a procedure must be followed with the VTEX Traffic team, which can take between 1 and 2 weeks.

After submitting the request, the deadline for activating the WAF on the store URLs is 4 weeks, plus the period needed to migrate to the provider, if applicable.

## Learn more

* [VTEX Shield](/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
