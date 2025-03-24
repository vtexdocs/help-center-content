---
title: "Why I don't receive my abandoned cart emails?"
id: 5ERWuLh9ajnTiHuRSsNje3
status: PUBLISHED
createdAt: 2019-03-15T16:46:36.370Z
updatedAt: 2022-05-20T15:36:07.176Z
publishedAt: 2022-05-20T15:36:07.176Z
firstPublishedAt: 2019-03-15T17:15:34.657Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 6JCq5z9N5xvlHKhhoEcvjM
slugEN: why-i-do-not-receive-my-abandoned-cart-emails
locale: en
legacySlug: why-i-do-not-receive-my-abandoned-cart-emails
---

In some cases, the [Trigger settings](https://help.vtex.com/en/tutorial/how-to-create-a-trigger-in-Master-Data--tutorials_1270 "Trigger") for [Cart abandonment](https://help.vtex.com/en/tutorial/setting-up-abandoned-carts--tutorials_740#) may not work properly. This occurs because of improper configuration settings. These errors may however easily be corrected through [Master Data](https://help.vtex.com/en/tutorial/--4otjBnR27u4WUIciQsmkAw).

Follow the step-by-step below in order to access the settings page:

1. Access the __Master Data__ module
2. Under "Quick Links", select __“Create Application”__
3. Click on __Data Structure__, located in the Settings menu on the left side of the page.
4. You will be redirected to a new page, use your __VTEX login__ to authenticate yourself.
5. Afterwards, click on __Trigger__
6. In the upper left corner of the page, type the code of the cart you wish to edit in the search box.
7. Lastly, click on the pencil icon located just under __Actions__

The __“Conditions”__ tab distinguishes the main settings that set off the Trigger. You can thus ensure that data was included correctly and also remedy possible errors. 

Check the following parameters:
- __"Active" Status__
This trigger will only work correctly if the selected status is "Active". Any other selected status will lead to a Trigger error.

- __Error notification Email__
The "error notification email" field should note filled out. If you find it filled out during your data check, clear it.

- __Origin Email__
The "Origin Email" field should also be left blank.

- __Display name of origin email__ 
It's not possible to fill out the display name of origin email. If anything is written there, delete it and leave the field empty.

- __Application conditions__
When dealing with the Abandoned Cart, it's important to configure two filters: "Checkout other than finalized" and "Checkout is not null". Having different values for these two settings can impede the trigger. 

After checking, it's crucial to save all the information created. Afterwards, the emails will be sent out as usual.

>⚠️ In addition, it is also important to state that a session lasts **30 minutes**. Only after this time has expired would the system consider setting off the Abandoned Cart Trigger, which means that the time taken into account is that of the session's duration in addition to that of the Trigger scheduling.
