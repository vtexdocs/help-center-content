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

<div class="alert alert-info">
  <p>This feature is part of <a href="https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh">VTEX Shield</a>. If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact <a href="https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ">Commercial Support</a>. Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our <a href="https://vtex.com/br-pt/contato/">contact form</a>.</p>
</div>

By default, VTEX uses [SSL certificates](https://help.vtex.com/en/tutorial/security-certificate-ssl--tutorials_1308) issued by [Let's Encrypt](https://letsencrypt.org/), an open-source solution widely adopted in the market. This approach guarantees security, reliability, and compatibility with most browsers.

However, some stores require custom SSL certificates for specific compliance reasons, internal security requirements, or certification entities that offer additional warranties.

To meet this requirement, the **SSL Certificates** page allows you to install a new custom SSL certificate and manage existing certificates.

The page displays the following information in a table:

| Columns | Description |
| :---- | :---- |
| **Domain** | Host address, consisting of subdomain, domain and top-level domain. For example: www.mystore.com. Learn more about the structure of this address in [Configuring the store domain](https://help.vtex.com/pt/tutorial/configuring-the-store-domain--tutorials_2450#store-address-structure). |
| **CA** | Certificate Authority. |
| **Installed on** | Date the certificate was installed. |
| **Expires on** | Date the certificate expires. |
| **Status** | Certificate status, which can be: <ul><li><strong>Active:</strong> Valid and active for the host.</li><li><strong>Overwritten:</strong> The certificate for this host has been replaced by another through an external method, such as an API call on the CDN.</li><li><strong>Installing:</strong> Certificate installation in progress.</li><li><strong>Unknown:</strong> The certificate status couldn't be determined due to internal technical problems with communication, configuration, or monitoring.</li><li><strong>Expires soon:</strong> The certificate is close to its expiration date (30 days before or less).</li><li><strong>Installation failed:</strong> After the status <em>Installing</em>, the installation can fail, and the user will need to try again later.</li><li><strong>Expired:</strong> The expiration date passed.</li></ul> |

## Prerequisites

Before installing a custom certificate, the following requirements must be met:

* Be a user associated with a [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) from the [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) listed below to view and manage the information on the page:

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

<div class="alert alert-info">
  <p>To learn how to resolve installation errors, see the troubleshooting guide 
<a href="https://help.vtex.com/en/tutorial/error-installing-custom-ssl-certificate--6hgFzbcc96mcrqXZMmHCTr" target="_blank" rel="noopener noreferrer">Error installing custom SSL certificate</a>.</p>
</div>

## Learn more

* [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [Configuring the store domain](https://help.vtex.com/pt/tutorial/configuring-the-store-domain--tutorials_2450)
* [Go-live](https://help.vtex.com/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj)
* [Error installing custom SSL certificate](https://help.vtex.com/en/tutorial/error-installing-custom-ssl-certificate--6hgFzbcc96mcrqXZMmHCTr)
