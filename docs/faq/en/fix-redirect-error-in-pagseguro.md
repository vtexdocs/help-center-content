---
title: 'Fix redirect error in PagSeguro'
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2019-12-31T14:23:59.281Z
publishedAt: 2019-12-31T14:23:59.281Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: fix-redirect-error-in-pagseguro
legacySlug: fix-redirect-error-in-pagseguro
---

If you are having "redirect problems" using PagSeguro, it's likely that PagSeguro's *redirect* is configured incorrectly.

To fix the problem, there are two options: Set the PagSeguro *with redirect* in the correct way or configure the PagSeguro *without redirect*.

## Setting up PagSeguro *with redirect*

### Configuring Gateway Affiliation PagSeguro

1. Access the __Payments__ section.
2. Click the __Settings__ button.
3. Click on the tab __Gateway Affiliations__.
4. Click the __+__ button in the upper right corner of the screen.
5. Click the __PagSeguro__ affiliation.
6. Fill in the __email__ and __token__ fields with the information provided by PagSeguro.

In your PagSeguro account, you must activate "Redirect with transaction code" (My Account > Integrations > Redirection Page). The requested parameter name must be `psTransactionId`.

After that, click __Save__.

### Setting up PagSeguro Payment Condition

1. After successfully setting up the Gateway Affiliation in the previous step, click on the __Payment Conditions__ tab.
2. Click the __+__ button in the upper right corner of the screen.
3. Click on the __PagSeguro__ condition.
4. In the __Status__ flag, select the __Active__ option.
5. In __Process with affiliation__, select the __PagSeguro__ affiliation registered in the previous step.
6. Complete the other desired fields for the [payment condition setting](/en/tutorial/how-to-configure-payment-conditions).
7. Click __Save__.

## Setting up PagSeguro *without redirect*

### Configuring PagSeguro Gateway Affiliation without redirect

1. Access the __Payments__ section.
2. Click the __Settings__ button.
3. Click on the __Gateway Affiliations__ tab.
4. Click the __+__ button in the upper right corner of the screen.
5. Click on the __PagSecure without redirect__ affiliation.
6. Follow our [PagSeguro configuration tutorial without redirect] (/ en / tutorial / how-configure-the-pagseguro-without-redirect-transparent)

### Setting the Payment Condition

1. After successfully setting up the Gateway Affiliation in the previous step, click on the __Payment Conditions__ tab.
2. Click the __+__ button in the upper right corner of the screen.
3. Click the desired payment condition. In the case of PagSeguro Affiliation without redirect, this can be a [credit card](/en/tutorial/how-to-configure-payment-conditions) or a [bank slip](/en/tutorial/how-to-configure-a-bank-slip), for example.
4. In the __Status__ flag, select the __Active__ option.
5. Under __Process with affiliation__, select the __PagSeguro without redirect__ affiliation registered in the previous step.
6. Click __Save__.
