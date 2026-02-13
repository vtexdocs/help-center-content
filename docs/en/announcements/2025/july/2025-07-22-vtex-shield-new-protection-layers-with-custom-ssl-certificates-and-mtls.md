---
title: 'VTEX Shield: New protection layers with custom SSL certificates and mTLS'
id: Xy5vaUOgmjsYKzI7h1tPd
status: PUBLISHED
createdAt: 2025-07-22T14:31:35.784Z
updatedAt: 2025-07-28T12:59:52.171Z
publishedAt: 2025-07-28T12:59:52.171Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-07-22-vtex-shield-new-protection-layers-with-custom-ssl-certificates-and-mtls
locale: en
legacySlug: vtex-shield-new-protection-layers-with-custom-ssl-certificates-and-mtls
announcementImageID: 'undefined'
announcementSynopsisEN: "VTEX Shield now offers custom SSL certificates and mTLS, expanding the platform's set of advanced security features."
---

[VTEX Shield](/en/docs/tutorials/vtex-shield) is an add-on product that provides customizable security layers for your store in addition to the security standards guaranteed by existing [certifications and security practices](https://vtex.com/us-en/security/security-practices/) on VTEX.

We've enhanced the advanced security features offered by VTEX Shield. Now, you can request two new features:

* **Custom SSL certificates**: Allows stores to use their own certificates instead of the default Let's Encrypt.

* **Mutual Transport Layer Security (mTLS)**: Requires mutual authentication between VTEX and external systems, adding an extra layer of protection to API integrations.

These new features increase control over system communication, meeting security and compliance requirements for more complex projects.

## What has changed?

VTEX Shield already offered [Web Application Firewall (WAF)](/en/docs/tutorials/web-application-firewall-waf), [Security Monitor](/en/docs/tutorials/security-monitor), and [Data Protection Plus](/en/docs/tutorials/vtex-shield#data-protection-plus) as additional security layers. Now, you can also select custom SSL certificates and the mTLS protocol, as described below.

### Custom SSL certificates

By default, VTEX uses [SSL certificates](/en/docs/tutorials/security-certificate-ssl) from the [Let's Encrypt](https://letsencrypt.org/) certificate authority. However, some stores need to maintain direct control over digital certificates to meet specific compliance or security requirements.

With custom SSL certificates, stores with specific security or compliance needs can install and manage their own custom certificates directly through the VTEX Admin.

Learn more in [Custom SSL certificates](/en/docs/tutorials/custom-ssl-certificates).

### Mutual Transport Layer Security (mTLS)

The mTLS protocol offers enhanced protection in integrations between VTEX and external systems, such as ERPs, WMSs, or headless stores.

Unlike the traditional TLS protocol, where only the server proves its identity, mTLS ensures mutual authentication by requiring [both the client and the server to present valid certificates](/en/docs/tutorials/mutual-transport-layer-security-mtls#client-server-architecture) before exchanging information. This practice reduces the risk of malicious or unauthorized connections.

Learn more in [Mutual Transport Layer Security (mTLS)](/en/docs/tutorials/mutual-transport-layer-security-mtls).

## Why did we make this change?

As integrations with external systems become more complex, the need to ensure authenticity and rigorous control in communications increases. Some stores have specific compliance, audit, and security requirements that go beyond the use of default certificates and one-way authentication.

With these updates, VTEX Shield offers an additional layer of security that allows you to:

* Manage custom SSL certificates to meet internal policies and audit requirements.  
* Require mutual authentication between systems to prevent unauthorized accesses.  
* Reduce risks in critical integrations, strengthening trust between parties.

These features align VTEX Shield with the most advanced market practices and address the growing demand for security in digital operations.

## What needs to be done?

If you're already a VTEX client and want to enable custom SSL certificates, mTLS, or other VTEX Shield features in your store, contact [Commercial Support](/en/docs/tracks/commercial-support) to request activation and complete the necessary configuration. Additional fees may apply.

If you're not a VTEX client but are interested in these features, please complete our [contact form](https://vtex.com/us-en/contact/).
