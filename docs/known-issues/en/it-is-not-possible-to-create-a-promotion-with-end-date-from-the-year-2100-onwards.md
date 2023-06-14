---
title: 'It is not possible to create a promotion with end date from the year 2100 onwards'
id: hYQQFkOsEMqmg5DMzBAhM
status: DRAFT
createdAt: 2023-05-29T21:43:04.471Z
updatedAt: 2023-05-29T21:43:04.471Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: it-is-not-possible-to-create-a-promotion-with-end-date-from-the-year-2100-onwards
locale: en
kiStatus: Backlog
internalReference: 833957
---

## Summary



When creating a promotion, if you select an end date after 2100, the user interface(UI) will understand that the end date is smaller than the start date and it will not be possible to save the promotion even if the other fields are correctly filled.

_*This issue does not happen when the Admin language selected is Portuguese._


##

## Simulation



1-Access the Promotions module;
2-Click on "Create Promotion" and select one of the promotions' types;
3-Select any end date from the year 2100 (the UI will show the message "Attention: End date can't be prior to start date");
4-Fill the other mandatory fields;
5-Try to save the promotion (the UI will throw the error "Error - The beginDate must be smaller than the endDate")



##

## Workaround


If possible, select as end date any year before 2100, such as 2099 for example.





 2099 for example.





