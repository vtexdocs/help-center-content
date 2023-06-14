---
title: 'Transitioning API integrations to HTTPS / TLS 1.2'
id: 50H4bHnV1uk2GCY3CaJBXo
status: CHANGED
createdAt: 2020-07-10T20:32:32.971Z
updatedAt: 2021-11-17T17:58:32.348Z
publishedAt: 2020-07-21T19:14:32.690Z
contentType: updates
productTeam: Reliability
author: 127RQ7SUoFfyTh5gbXUpdM
slug: transitioning-api-integrations-to-https-tls-1-2
locale: en
legacySlug: transitioning-api-integrations-to-https-tls-1-2
announcementImageID: ''
announcementSynopsisEN: 'In the upcoming months, we will phase out support for all HTTP connections to improve the security of our platform.'
---

As part of our continued commitment to adopt global security and privacy standards, we will phase out support for all HTTP connections in the upcoming months. 

To allow our clients and partners to adapt to this change, we set a transition timeline until the use of HTTPS + TLS 1.2 is required for all communications with our services.

<table>
  <tr>
    <td style="border-left: 4px solid #F71963;" bgcolor="#FFE6E6">Make sure that the teams responsible for your technology stack and integrations are aware of the transition. If your store is affected, immediate technical changes will be required.</td>
  </tr>
</table>

## What changed?

Until now, VTEX’s servers required secure connections only in specific routes, and HTTPS connections could be made using either TLS 1.0, TLS 1.1 or TLS 1.2.

Once our transition timeline is over, VTEX’s servers will require secure connections in all routes and HTTPS connections must be made using TLS 1.2.

<table>
  <tr>
    <td style="border-left: 4px solid #856407;" bgcolor="#FFF3CD">HTTP connections will get a `301 Moved Permanently` response redirecting to HTTPS. Implementations that cannot support TLS 1.2 will fail when trying to connect.</td>
  </tr>
</table>

## Why did we make this change?

Not securing your website with TLS is a dangerous downgrade that can put your users and website at risk. HTTP traffic can be read by anyone with access to the network in which the traffic moves. In contrast, HTTPS traffic can only be decrypted by the owner of the HTTPS certificate. 

Securing your application or website with TLS is especially important for websites that collect payment information (such as credit card and bank information) or personal information (such as passwords and addresses). However, any website or application that collects users’ information should be secured with TLS to protect its users and their data. 

For more information about HTTPS, see [why HTTPS matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https) and [why do we need HTTPS](https://howhttps.works/why-do-we-need-https/).

## What do i need to do?

The teams responsible for your technology stack and integrations must verify that all softwares communicating with VTEX using our APIs are using HTTPS and TLS 1.2. 

Any software that is communicating with VTEX’s servers without using HTTPS and TLS 1.2 should be adjusted to comply with these standards.

<table>
  <tr>
    <td style="border-left: 4px solid #004084;" bgcolor="#CCE5FE">To be certain that your HTTPS clients can securely communicate with our servers, we have provided the following testing route to assert the correctness of your implementation:
<pre><a href="https://sandbox.vtexcommercestable.com.br/api/test">https://sandbox.vtexcommercestable.com.br/api/test</a></pre>
Making a request to the address above and getting a <code>200 OK</code> response means that your client is capable of using the required protocols.</td>
  </tr>
</table>

## Transition timeline

To allow enough time to prepare for these changes, we will begin controlled testing with HTTP request blocking windows on August 13th, 2020. 

During these request blocking windows, HTTP connections will get a `301 Moved Permanently` response redirecting to HTTPS and our servers will require that all HTTPS connections use TLS 1.2.

The table below lists all request blocking windows in this transition period:

| Date       | Time (UTC-3) | Duration |
| ---------- | ------------ | -------- |
| 13/08/2020 | 04:00:00     | 2:00:00  |
| 28/08/2020 | 07:00:00     | 4:00:00  |
| 05/09/2020 | 10:00:00     | 8:00:00  |

On October 1st, 2020 we will begin to enforce the use of HTTPS + TLS 1.2 in all communications with our servers.
