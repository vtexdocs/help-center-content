---
title: 'Manage the sales comissions report'
id: 6NgHeDt8Xo9JtMoifx7DC5
status: DRAFT
createdAt: 2020-12-01T12:36:42.779Z
updatedAt: 2021-12-08T18:42:07.022Z
publishedAt: 
firstPublishedAt: 2020-12-04T12:24:18.019Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: manage-the-sales-comissions-report
locale: en
legacySlug: manage-the-sales-comissions-report
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

The sales commission report is a feature that creates a .xlsx document listing the orders invoiced by the sellers of a given marketplace and its respective commission rates. For more information on payment splits, see this [track](https://help.vtex.com/pt/tracks/payment-split--1ouDg8q56Kuz1AgtJUY9nv "track"). 

This article will explain how to generate sales commission reports and how to schedule periodic reports.

>⚠️ Before proceeding to the configuration, check with your Customer Success Manager (CSM) if the sales commission report feature has been incorporated into your Admin.

## Generating sales commission reports 

You can generate sales commission reports in your Admin.  

Follow these instructions:

1. Access the __VTEX Admin__.
2. Below the Payments module, click on the __Commissions__ module.
3. On the right side of the screen, click the __"Generate"__ button.

The Admin will then display a "Generate report" modal window, in which you can set the time period you want to analyze.

Proceed to the next steps:

4. In the __"Start date"__ field, enter the __first day__ of the period of analysis.
5. In the __"End date"__ field, set the __last day__ of the period of analysis.
6. If you want to receive the report by email, select the __"Receive by email"__ option.
7. Fill in the __"Email address"__ field.
8. Click on the __"Generate"__ button.

>❗ It is mandatory to set a start date and an end date. Otherwise, the sales commission report will not be generated.

<div cladd="alert alert-info">
If you do not want to receive the report by email, do not select the "Receive by email" checkbox. 

If you click directly on the "Generate" button, a link to download the report will be created.
</div>

The message "Your report was successfully generated" will be displayed on the screen, indicating that the operation was performed correctly, and the document will be sent to the "Downloads" folder on your computer.  

Generating the report may take a while if the volume of data is big. In such cases, you can follow the processing as in the image below. 

>ℹ️ Leaving the page will not affect the operation.

![Sales Comission Report EN](https://images.ctfassets.net/alneenqid6w5/3WoTE8ibcuYshdJf5sT6KV/e30dfb7f7de7b6dbcd506782e405d470/image.png)

Later, you can also download the recently generated report using a link provided in the list of reports.  

## Scheduling a report
There are situations in which the marketplace needs to analyze its commissions frequently. 

For this reason, you can schedule reports to be generated automatically every predetermined time period. 

>⚠️ In the Commissions module, only one schedule can be made per account.

>ℹ️ Scheduling is an optional feature. You can still generate reports manually if you do not schedule them.

Once you are in the Commissions module, click on the "Schedule" button on the right side of the screen. A modal window will be displayed.

Follow the instructions below:

1. In __"How often do you want to receive a report?"__, select the frequency, such as "Monthly".
2. In __"When do you want to receive the report"__, select a day of the month, like "Every 10th".
3. If you want, select the __"Receive by email"__ option.
4. Fill in the __"Email address"__ field.
5. Click on the __"Schedule"__ button.

The message "Your changes have been saved" will then be displayed on the screen, indicating that the scheduling was successfully completed.

### Canceling the schedule

To cancel the scheduling of a report, you must open the configuration modal and select the option "Never" in "How often do you want to receive a report". Then, save the changes. 
