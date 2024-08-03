---
title: 'Fix redirect error in PagSeguro'
id: 5b1lVDQ9HUKQs4Wy24uWq2
status: PUBLISHED
createdAt: 2018-02-15T16:07:47.669Z
updatedAt: 2024-02-16T12:41:04.461Z
publishedAt: 2024-02-16T12:41:04.461Z
firstPublishedAt: 2018-02-15T17:26:16.189Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: fix-redirect-error-in-pagseguro
locale: en
legacySlug: fix-redirect-error-in-pagseguro
---

<div class="alert alert-danger">This payment integration can no longer be configured on the platform due to the <a href="https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14">legacy provider removal process</a> and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.</div>

If you are having "redirect problems" using PagSeguro, it's likely that PagSeguro's *redirect* is configured incorrectly.

To fix the problem, there are two options: Set the PagSeguro *with redirect* in the correct way or configure the PagSeguro *without redirect*.

## Setting up PagSeguro *with redirect*

### Configuring Gateway Affiliation PagSeguro

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __PagSeguro__ in the search bar and click on the name of the provider.
4. Fill in the __email__ and __token__ fields with the information provided by PagSeguro.
5. Follow the  __Configuração do redirecionamento__ guidance outlined in the configuration panel.
6. Click `Save`.

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
