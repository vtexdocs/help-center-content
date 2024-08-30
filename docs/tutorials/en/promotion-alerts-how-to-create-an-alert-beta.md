---
title: 'Promotion alerts: How to create an alert (Beta)'
id: 14nC51OlGoCSBLlBkZhkRR
status: PUBLISHED
createdAt: 2022-11-18T17:08:57.812Z
updatedAt: 2023-03-30T17:20:58.855Z
publishedAt: 2023-03-30T17:20:58.855Z
firstPublishedAt: 2022-11-18T19:07:21.814Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: promotion-alerts-how-to-create-an-alert-beta
locale: en
legacySlug: promotion-alerts-how-to-create-an-alert-beta
subcategory: 6iTRZiMeCGXYiO2ckABFZi
---

>ℹ️ This module is in Beta, which means we are working on improving it. If you have any questions, please contact our [Support team.](https://help.vtex.com/en/support)

Creating promotions is a great strategy to attract more customers to your ecommerce website. When configuring them, you must ensure that the applied discounts will produce the expected results since mistakes when creating a promotion can lead to revenue losses.

To mitigate unwanted impacts on promotions, the **Promotion Alerts** page allows you to create conditions to check if promotions are correct and to establish [preemptive actions](https://help.vtex.com/en/tutorial/alerta-de-promocoes-como-criar-um-alerta-beta--14nC51OlGoCSBLlBkZhkRR#preventive-actions) to avoid selling at unexpected prices. However, an order is required to activate the first alert.

If the defined [conditions](#conditions) are met, the system generates an alert informing you of the product sold at unexpected prices and then applies the configured [preemptive actions](#preventive-actions). If you configure the action of [deactivating promotions](#preventive-actions), the unwanted scenario will not be repeated since the promotion will have been deactivated.

For example, you created an alert and checked the `Deactivate promotions immediately` option in the [Preventive actions](#preventive-actions) step. Thus, if a product is sold within the previously defined conditions, the VTEX system will immediately deactivate the current promotion.

Follow the instructions below to create an alert:

1. In the VTEX Admin, go to *Promotions > Promotion Alerts*, or type *Promotion Alerts* in the search bar at the top of the page.
2. Click `Create Alert`. You will be redirected to the new alert page.
3. Fill in the alert information: 
   * **Status:** When creating a new alert, it will be automatically set as `active`. To disable it, click the <i class="fas fa-toggle-on"></i> *switch*.
   * **Name:** The name you want to give to the alert.
   * **Description (optional):** Brief text about the alert that is being created.
4. Select the conditions for triggering the alert, as described in the [Conditions](#conditions) section.
5. Specify the preventive actions the alert will take, as described in the [Preventive Actions](#preventive-actions) section.
6. Set the restrictions for applying the alert, as described in the [Restrictions](#restrictions-optional) section. This step is optional.
7. Click `Save`.

Then, the new promotion alert will be successfully created.

## Conditions

In this form section, you need to set the conditions for triggering the alert. In the 'When a discount is greater than' field, enter a value up to 99.99. This value will correspond to the percentage (%) that the tool will monitor. 

After defining the percentage, you will need to choose between two options for applying the new alert conditions:

- **All catalog:** All the products in your VTEX catalog will be added to the alert.
- **Specific products:** You can select the products added to the alert from the following criteria.
   * Brand
   * Collection
   * Product
   * Category
   * SKU

Next, a field will appear for you to set the criteria details you selected previously. For example, if you selected the `Brand` criterion, you must specify which brand will be added to the condition. 

After setting the condition, click `Confirm`.

## Preventive actions

In this section, you should configure the actions that will be taken when the alert is triggered. You can select one or both of the following actions:

- **Deactivate promotions immediately:** Click the class="fas fa-toggle-on"></i> *switch* to activate the preventive action that immediately disables the promotion if it does not meet the set conditions. 
- **Email alert:** Click the <i class="fas fa-toggle-on"></i> *switch* to receive an email alert when a promotion does not meet the set conditions. You will have to select the email where you want to receive the alerts.

## Restrictions (optional)

In this section, you can choose which promotions should be ignored by the alert, if any.

To do this, click the <i class="fas fa-toggle-on"></i> *switch* in the `Exclude specific promotions from the alert` field to activate the restriction. A field will appear for you to select the specific promotions that will be deleted from the alert. 

If you enable this option and do not select any promotions, the alert will not be saved.

## Learn more

- [Promotion alerts](https://help.vtex.com/en/tutorial/alerta-de-promocoes-beta--3vDTjwoNtaxA1PUrkpEQLW)
- [How promotions work](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR)
