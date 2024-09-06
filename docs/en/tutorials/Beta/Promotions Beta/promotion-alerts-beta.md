---
title: 'Promotion alerts (Beta)'
id: 3vDTjwoNtaxA1PUrkpEQLW
status: PUBLISHED
createdAt: 2022-11-17T21:33:42.383Z
updatedAt: 2023-03-30T17:20:52.671Z
publishedAt: 2023-03-30T17:20:52.671Z
firstPublishedAt: 2022-11-18T17:06:00.781Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: promotion-alerts-beta
locale: en
legacySlug: promotion-alerts-beta
subcategoryId: 6iTRZiMeCGXYiO2ckABFZi
---

>ℹ️ This module is in Beta, which means we are working on improving it. If you have any questions, please contact our [Support team](https://help.vtex.com/en/support).

Creating promotions is a great strategy to attract more customers to your ecommerce website. When configuring them, you must ensure that the discounts applied will produce the expected results since mistakes during the promotion creation can lead to revenue losses.

To mitigate unwanted impacts on promotions, the **Promotion Alerts** page allows you to create conditions to check if promotions are correct and to establish [preemptive actions](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#preventive-actions) to avoid selling at unexpected prices. However, an order is required to activate the first alert.

If the defined [conditions](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#conditions) are met, the system generates an alert informing you of the product sold at unexpected prices and then applies the configured [preemptive actions](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#preventive-actions). If you configure the action of [deactivating promotions](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#preventive-actions), the unwanted scenario will not be repeated since the promotion will have been deactivated.

Suppose you only configure the email alert action, further orders with the unwanted discount can still be placed until you manually deactivate or change the promotion settings to have the desired effect.

To access the page in the VTEX Admin, go to *Promotions > Promotion Alert*. You will see the following interface:

![simuladordepromocoes gerenciar](https://images.ctfassets.net/alneenqid6w5/4E0oZf13zNjKgj5MNRYiuf/94c9af89ae0bad5601b316dfc73a6caf/simuladordepromocoes_gerenciar.gif)

The table below shows the column descriptions for the promotion list:

| Column | Description | 
| ------ |:-------------:|
| Name | Promotion alert name. |
| Alert | Condition set to trigger the alert. |
| Preemptive Action | Actions that will be performed when the alert is triggered. |
| Status | Promotion status, which can be: <p><strong> Active:</strong> when the alert is active. </p> <p> <strong>Inactive:</strong> when the alert is inactive. </p> |

The Promotion Alerts page allows you to:

- [Create an alert](#creating-an-alert)
- [Search for an alert](#searching-for-an-alert)
- [Edit an alert](#editing-an-alert)
- [Deactivate an alert](#deactivating-an-alert)
- [Duplicate an alert](#duplicating-an-alert)

## Creating an alert

To create a promotion alert, click the `Create Alert` button.  Please read the article [Promotion Alerts: How to create a promotion alert](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR) to learn more.

## Searching for an alert

To find an alert, type the promotion name in the search bar with the magnifying glass icon <i class="fas fa-search"></i> , located at the top of the page. 

The results are updated when typing a character in the search box. To clear the search, click the menu icon <i class="far fa-times-circle"></i>.

## Editing an alert

To edit a promotion alert, follow these steps:

1. In the VTEX Admin, go to *Promotions > Promotion Alerts*, or type *Promotion Alerts* in the search bar at the top of the page.
2. In the row of the selected alert, click the <i class="fas fa-ellipsis-v"></i> menu icon.
3. Click `Edit` <i class="fal fa-pencil"></i>.
4. Make the desired changes on the alert.
5. Click `Save`.

Then, the changes you made will be applied and saved.

## Deactivating an alert

To deactivate a promotion alert, follow these steps:

1. In the VTEX Admin, go to *Promotions > Promotion Alerts*, or type *Promotion Alerts* in the search bar at the top of the page.
2. In the row of the selected alert, click on the <i class="fas fa-ellipsis-v"></i> menu icon.
3. Click `Deactivate` <i class="far fa-times"></i>.

Then, the alert will be deactivated. You can activate it again if you wish by selecting the alert and clicking the <i class="fas fa-toggle-on"></i> switch.

## Duplicating an alert

To duplicate a promotion alert, follow these steps:

1. In the VTEX Admin, go to *Promotions > Promotion Alerts*, or type *Promotion Alerts* in the search bar at the top of the page.
2. In the row of the selected alert, click the <i class="fas fa-ellipsis-v"></i> menu icon. 
3. Click `Duplicate` <i class="far fa-clone"></i>. 
4. You will be redirected to the **Create Alert** page as if you were creating a new alert; however, it is an identical copy of the alert you duplicated. By default, the name of the duplicated alert will be `Copy of` + `name of the duplicated alert`.
5. Make any changes as desired.
6. Click `Save`.

Then, the alert will have been successfully duplicated.

## Learn more

- [Promotion Alert: How to create a promotion alert](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR)
- [How promotions work](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
