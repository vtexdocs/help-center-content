---
title: 'Custom SSL certificates'
id: 1hoaDEbU50PDZSe6AYep9q
status: PUBLISHED
createdAt: 2025-02-28T14:30:02.015Z
updatedAt: 2025-02-28T15:03:40.701Z
publishedAt: 2025-02-28T15:03:40.701Z
firstPublishedAt: 2025-02-28T14:34:42.133Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: custom-ssl-certificates
legacySlug: custom-ssl-certificates
locale: en
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ This feature is part of [VTEX Shield](/en/docs/tutorials/vtex-shield). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](/en/docs/tracks/commercial-support). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/br-pt/contato/).

By default, VTEX uses [SSL certificates](/en/docs/tutorials/security-certificate-ssl) issued by [Let's Encrypt](https://letsencrypt.org/), an open-source solution widely adopted in the market. This approach guarantees security, reliability, and compatibility with most browsers.

However, some stores require custom SSL certificates for specific compliance reasons, internal security requirements, or certification entities that offer additional warranties.

To meet this requirement, the **SSL Certificates** page allows you to install a new custom SSL certificate and manage existing certificates.

The page displays the following information in a table:

| Columns | Description |
| :---- | :---- |
| **Domain** | Host address, consisting of subdomain, domain and top-level domain. For example: www.mystore.com. Learn more about the structure of this address in [Configuring the store domain](/en/docs/tutorials/configuring-the-store-domain#store-address-structure). |
| **CA** | Certificate Authority. |
| **Installed on** | Date the certificate was installed. |
| **Expires on** | Date the certificate expires. |
| **Status** | Certificate status, which can be: <ul><li>**Active:** Valid and active for the host.</li><li>**Overwritten:** The certificate for this host has been replaced by another through an external method, such as an API call on the CDN.</li><li>**Installing:** Certificate installation in progress.</li><li>**Unknown:** The certificate status couldn't be determined due to internal technical problems with communication, configuration, or monitoring.</li><li>**Expires soon:** The certificate is close to its expiration date (30 days before or less).</li><li>**Installation failed:** After the status *Installing*, the installation can fail, and the user will need to try again later.</li><li>**Expired:** The expiration date passed.</li></ul> |

## Prerequisites

Before installing a custom certificate, the following requirements must be met:

* Be a user associated with a [role](/en/docs/tutorials/roles) from the [License Manager resources](/en/docs/tutorials/license-manager-resources) listed below to view and manage the information on the page:

  * **Product:** *CDN API*
  * **Category:** *Certificate management*
  * **Resources:** *Update certificate* and *View certificate*

* Have a `.KEY` file with the certificate private key up to 1 MB saved on your device.
* Have a `.CRT` file with the certificate up to 1 MB saved on your device.

## Installing a new SSL certificate

Follow the instructions below to install a new custom certificate on VTEX:

1. In the VTEX Admin, go to **Store settings > Shield > SLL Certificates**.
2. Click `Install new`.
3. In the **Hosts** field, select one or more hosts to apply the certificate. Only the hosts previously added to your account will be displayed.
4. Under **Private key**, click `Choose a file` to select a `.key` file up to 1 MB saved on your device.
5. In **Certificate**, click `Choose a file` to select a `.crt` file up to 1 MB saved on your device.
6. Click `Install`.

If the configuration is successful, you will be redirected to the certificate list page, where you can view the selected hosts.

The installation may take 7 days to complete, and during this time, the status of the hosts will be **Installing**. After the installation is complete, the status of the hosts will change to **Active**.

> ℹ️ To learn how to resolve installation errors, see the troubleshooting guide [Error installing custom SSL certificate](/en/troubleshooting/error-installing-custom-ssl-certificates).

## Learn more

* [VTEX Shield](/en/docs/tutorials/vtex-shield)
* [Configuring the store domain](/en/docs/tutorials/configuring-the-store-domain)
* [Go-live](/en/docs/tracks/go-live)
* [Error installing custom SSL certificate](/en/troubleshooting/error-installing-custom-ssl-certificates)
