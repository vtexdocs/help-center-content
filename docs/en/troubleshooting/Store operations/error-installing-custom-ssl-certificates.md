---
title: 'Error installing custom SSL certificates'
id: 6hgFzbcc96mcrqXZMmHCTr
status: PUBLISHED
createdAt: 2025-02-28T14:55:08.515Z
updatedAt: 2025-03-07T19:46:32.629Z
publishedAt: 2025-03-07T19:46:32.629Z
firstPublishedAt: 2025-02-28T15:00:43.416Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: error-installing-custom-ssl-certificates
locale: en
legacySlug: error-installing-custom-ssl-certificate
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags: SSL certificates, VTEX Shield
---

Some errors may occur during the installation of [custom SSL certificates](/en/tutorial/custom-ssl-certificates--1hoaDEbU50PDZSe6AYep9q), a feature available in [VTEX Shield](/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). See below the possible errors and how to solve them.

## Solution

To identify the meaning of each error message and its corrective action, see the table below:

| Error type | Meaning | Required action |
| :---- | :---- | :---- |
| *This host isn't included in the certificate* | You've selected at least one host that doesn't match the hosts listed in the certificate `AltNames`. | <ul><li>Remove the host highlighted in red to avoid selecting one that isn't included in the certificate.</li><li>Review the content of the certificate <code>AltNames</code> using a tool such as the <a href="https://www.sslshopper.com/certificate-decoder.html" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Certificate Decoder</a> and, if necessary, obtain another certificate with the desired hosts.</li></ul> |
| *Invalid format* | The certificate sent has an invalid format. | Review the certificate file and make sure it's in CRT format. |
| *These hosts no longer exist* | At least one sent host was deleted from the account before the certificate was installed. For example, when another Admin user deletes the host during the setup. These hosts are highlighted in red. | Refresh the page and complete the form again — the excluded hosts will no longer be among the available options. You can reconfigure the excluded hosts before installing the certificate, or leave them unselected. |
| *Hosts are not fully configured. Check the [documentation](/en/tutorial/configuring-the-store-domain--tutorials_2450) to complete the remaining configuration steps.* | At least one submitted host was incompletely configured, possibly without the DNS pointing step to VTEX. | Follow the steps described in the guide [Configuring the store domain](/en/tutorial/configuring-the-store-domain--tutorials_2450) and ensure that the domain's DNS points to VTEX, as indicated in [Setting up DNS pointing](/en/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#setting-up-dns-pointing). |
| *Invalid size* | The certificate file is larger than 1MB. | Review the certificate file and ensure it's no larger than 1MB. |
| *Invalid certificate* | The XML content of the certificate is invalid. | Review the certificate file and ensure the XML content is correct. |
| *Unauthorized access. Please contact your store administrator.* | The user doesn't have permission to install a custom certificate. | Contact your store admin to review the [role configuration](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). <br /><br /> You must be a user associated with a [role containing the License Manager features](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) listed below to view and manage the information on the page: <ul><li><strong>Product:</strong> <em>CDN API</em></li><li><strong>Category:</strong> <em>Certificate management</em></li><li><strong>Resources:</strong> <em>Update certificate</em> and <em>View certificate</em></li></ul> |
| *An error occurred while installing the certificate* | Unknown error for undetermined causes. | Refresh the page. If the problem persists, contact [Support](/en/tutorial/opening-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM). |
