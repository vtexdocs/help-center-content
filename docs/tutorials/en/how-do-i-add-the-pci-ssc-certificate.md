---
title: 'How do I add the PCI SSC certificate to my store?'
id: frequentlyAskedQuestions_4650
status: CHANGED
createdAt: 2019-01-24T20:46:01.185Z
updatedAt: 2020-11-18T20:02:19.790Z
publishedAt: 2020-11-10T18:14:22.516Z
firstPublishedAt: 2019-01-24T22:03:53.402Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-do-i-add-the-pci-ssc-certificate
locale: en
legacySlug: how-do-i-add-the-pci-ssc-certificate
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

PCI Security Standards Council is a global forum open to continuous development, enhancement, storage, dissemination and implementation of data protection security standards.

It was founded by American Express, Discover Financial Services, JCB International, MasterCard and Visa Inc.

PCI SSC is a certification given by that institution, through which VTEX guarantees the safety of its services. It brings security information that we make available for the stores and your customers.

In order to add the PCI SSC certificate to your store, follow these steps:

1. Access the URL [http://io.vtex.com.br/front-libs/assets/pci/index.html](http://io.vtex.com.br/front-libs/assets/pci/index.html).
2. Pick the image that best fits your store's layout.
3. Redirect the image's link to the URL http://secure.vtex.com/?an={{AccountName}} (altering the {{AccountName}} to your store's account).

### About other security certificates

Some existing VTEX virtual stores use security seals not provided by VTEX, such as Digicert, RapidSSL, Comodo CA etc. It is not appropriate to display in the footer (or other parts of the site) such certifications without actually having them. 

Sometimes these stores also want to use some Let's Encrypt seal, which is currently the SSL digital certificate issuer used by VTEX. In this case, we advise you to read the [brand usage guide](https://letsencrypt.org/trademarks). You can also understand the use of the company logo in different circumstances and the official versions of the files.

Another fact is that this type of seal is merely informative - it does not perform any action on the website. Therefore, we recommend using the **PCI Certified** seal mentioned above.
