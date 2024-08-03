---
title: 'Fields in the orderForm Configuration are updated to null when there is any change in Order Management Settings'
id: jKGnwUGdfmCXtKjGPe6hj
status: PUBLISHED
createdAt: 2023-02-06T21:00:09.224Z
updatedAt: 2024-05-09T12:44:51.823Z
publishedAt: 2024-05-09T12:44:51.823Z
firstPublishedAt: 2023-02-06T21:00:09.753Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: fields-in-the-orderform-configuration-are-updated-to-null-when-there-is-any-change-in-order-management-settings
locale: en
kiStatus: Fixed
internalReference: 748404
---

## Summary


When updating any information in Order Management Settings (in the admin), the fields `paymentSystemToCheckFirstInstallment` and `defaultPaymentSystemToApplyOnUserOrderForm` are set as `null` in the orderForm Configuration


##

## Simulation



- Set up the fields `paymentSystemToCheckFirstInstallment` and `defaultPaymentSystemToApplyOnUserOrderForm` in the orderForm Configuration via API
- Change anything on Order Management Settings (admin)
- When you do Get orderForm Configuration, you will see those fields as `null`


##

## Workaround


Save the orderForm Configuration with the correct values for the fields `paymentSystemToCheckFirstInstallment` and `defaultPaymentSystemToApplyOnUserOrderForm` after the change in Order Management Settings




