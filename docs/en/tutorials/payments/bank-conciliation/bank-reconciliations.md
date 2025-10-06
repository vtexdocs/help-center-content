---
title: 'How bank reconciliations work'
id: tutorials_453
status: PUBLISHED
createdAt: 2017-04-27T22:04:15.815Z
updatedAt: 2023-03-22T20:35:18.519Z
publishedAt: 2023-03-22T20:35:18.519Z
firstPublishedAt: 2017-04-27T23:03:27.431Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: bank-reconciliations
legacySlug: bank-reconciliations
locale: en
subcategoryId: 2tEO9ytK1aMO0i2oMayoQq
---

It is through the bank reconciliation that batch payments of orders closed with the bank slip option are approved. It is performed through the upload of a _.RET_ file, in CNAB 240 and CNAB 400 formats, which is provided daily by the bank, and contains information related to the identification of the slip, our number, date and payment value.

The complete flow is: purchase closed with slip option on the website&gt; order enters as Pending Payment&gt; slip is paid&gt; bank sends the file to the shop&gt; seller performs the reconciliation&gt; order follows flow to delivery.

As explained in our document [How long until an order whose slip was not paid is cancelled?](/hc/pt-br/articles/215033318), there is a deadline for the cancellation of the order, if it is not reported as paid on the Approved Payment status (manually in the OMS or by bank reconciliation). In this case, the order will remain in the Pending Payment status until it is canceled.

> ⚠️ The procedures in this article are not applicable to integrations that perform bank reconciliation automatically.

## How to upload

After receiving the bank file and saving it on your machine, as mentioned above, follow the step by step below to perform the bank reconciliation:

1. In the VTEX Admin, go to **Orders** > **Bank Reconciliation** > **Bank Reconciliations**, or type **Bank Reconciliation** in the search bar at the top of the page.
2. Click on **Upload the .RET file provided by bank**.
3. Select the _.RET_ file saved on your machine.
4. Click on **Open**.

Once you select the file, the platform will begin to process it, and record in the history how many payments were reconciled, with success or error. Payments that have been successfully reconciled will update the status of the orders to Approved Payment.

![upload-file-ret](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/bank-conciliation/bank-reconciliations_1.JPG)

## View history

History is the record of bank reconciliations that have been held. It shows briefly, on the main and detailed screen, how many payments were made with success or error in each conciliation, when you access each line.

Among the details, it is possible to know the bank to which the slip belongs, the total payments involved, and exactly which recoveries (and their values) had success or not in the reconciliation. 

1. In the VTEX Admin, go to **Orders** > **Bank Reconciliation** > **Bank Reconciliations**, or type **Bank Reconciliation** in the search bar at the top of the page.
3. In **History**, click on one of the dates of the bank reconciliation operations performed.
4. In **More Details**, click **Successfully Reconciled** or **Not Able to Reconcile** to check the details of the transactions carried out in a particular bank. 

![historic-conciliation](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/bank-conciliation/bank-reconciliations_2.jpg)

## Payclub

Here you can download the payments on the day they were made through redirection, such as through PayPal, for example.

1. 1. In the VTEX Admin, go to **Orders** > **Bank Reconciliation**, or type **Bank Reconciliation** in the search bar at the top of the page.
3. Click on **Payclub**.
4. Select the date you want from the calendar.
5. Click on **Download file**.

![donwload-file-conciliation](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/bank-conciliation/bank-reconciliations_3.JPG)
