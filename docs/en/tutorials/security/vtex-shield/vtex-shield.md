---
title: 'VTEX Shield'
id: 2CVk6H9eY2CBtHjtDI7BFh
status: PUBLISHED
createdAt: 2024-04-25T00:31:01.895Z
updatedAt: 2025-05-21T23:32:42.108Z
publishedAt: 2025-05-21T23:32:42.108Z
firstPublishedAt: 2024-04-25T01:19:00.025Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: vtex-shield
legacySlug: vtex-shield
locale: en
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](/en/docs/tracks/commercial-support). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contato/).

VTEX Shield offers additional, customizable protection layers for stores that prioritize platform resilience and the security standards guaranteed by VTEX's existing security [certifications and practices](https://vtex.com/us-en/security/security-practices/).

The solution provides advanced security features, allowing you to detect potential risks and take preventive actions. This ensures your store remains protected from unexpected disruptions, keeping it operational and reliable.

When requesting VTEX Shield, you can choose from the following features:

* [Security Monitor](#security-monitor)
* [Web Application Firewall (WAF)](#web-application-firewall-waf)
* [Data Protection Plus](#data-protection-plus)
* [Customized SSL Certificates](#customized-ssl-certificates)
* [Mutual Transport Layer Security (mTLS)](#mutual-transport-layer-security-mtls)

## Security Monitor

Security Monitor is a VTEX Admin dashboard that detects security threats related to the behavior of admin users and incorrect settings. Potential risks include outdated or compromised [application keys](/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet), users or credentials with excessive permissions, and inactive users. The tool provides an overview of threats and solutions, along with the option to send email notifications to merchants for each finding.

Security Monitor is available in the VTEX Admin only for stores using VTEX Shield. For more information, check out the [Security Monitor](/en/docs/tutorials/security-monitor) guide.

## Web Application Firewall (WAF)

The Web Application Firewall (WAF) protects web applications by monitoring and filtering internet traffic.

This security feature plays a key role in protecting websites, online services, and web applications from attacks such as SQL injection, cross-site scripting (XSS), and other common web vulnerabilities.

Only stores with VTEX Shield that request this feature can request WAF activation. Learn more about how the [Web Application Firewall (WAF)](/en/docs/tutorials/web-application-firewall-waf) works and the types of threats it protects against.

## Data Protection Plus

> ℹ️ This feature is in closed beta and is only available in some regions. If you have any questions, please contact [Commercial Support](/en/docs/tracks/commercial-support).

[Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) is a data architecture that offers an additional layer of protection for personal data. In this architecture, all PII (Personally Identifiable Information) data is stored in the [Profile System](https://developers.vtex.com/docs/guides/profile-system), a service developed specifically for processing PII following a [set of rules and processes](https://developers.vtex.com/docs/guides/pii-data-architecture-specifications) appropriate for this purpose. 

Other platform modules, such as Orders and Checkout, only store anonymized data associated with a Profile System token, increasing the security of this information.

See the set of guides for the [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus) category in the Developer Portal for more details and specifications about this architecture.

## Customized SSL certificates

By default, VTEX uses [SSL certificates](/en/docs/tutorials/security-certificate-ssl) issued by [Let’s Encrypt](https://letsencrypt.org/) to ensure security and compatibility. However, some stores may require customized certificates to meet specific compliance or security requirements.

The **SSL certificates** page in the VTEX Admin allows you to install and manage custom certificates. This feature is available only for stores that have opted in and use [VTEX Shield](/en/docs/tutorials/vtex-shield). For more information, see the guide [Custom SSL certificates](/en/docs/tutorials/custom-ssl-certificates).

## Mutual Transport Layer Security (mTLS)

Mutual Transport Layer Security (mTLS) is an advanced security solution offered by VTEX Shield, which reinforces the protection of integrations between external systems and VTEX. This extra layer of protection is applicable to integration scenarios via APIs, such as headless stores or connections with ERPs and WMS.

Unlike traditional TLS, in which only the server needs to prove its identity, mTLS requires mutual authentication: both the client and the server present valid digital certificates, ensuring that both sides of the communication are trustworthy before exchanging data. Learn more at [Mutual Transport Layer Security (mTLS)](/en/docs/tutorials/mutual-transport-layer-security-mtls).
