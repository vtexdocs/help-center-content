---
title: 'Creating promotions for PSE payments'
id: 6YIp1fJ76gq667PQWjuj5T
status: PUBLISHED
createdAt: 2024-09-30T13:01:24.631Z
updatedAt: 2024-09-30T15:14:12.455Z
publishedAt: 2024-09-30T15:14:12.455Z
firstPublishedAt: 2024-09-30T14:20:52.605Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: creating-promotions-for-pse-payments
legacySlug: creating-promotions-for-pse-payments
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[PSE (Pagos Seguros en Línea)](/en/tutorial/setting-up-payments-with-pse--7dRChubn7TqdEyWrHQEQp6) is a payment method available in VTEX stores for transactions in Colombia. If you already use PSE in your store and want to offer a special payment condition to customers based on the type of bank selected, you can create a regular promotion for PSE.

To configure promotions by bank using PSE, you need to:

- [Identify the bank code](#identifying-the-bank-code)
- [Creating a PSE promotion](#creating-a-pse-promotion)

## Identifying the bank code

Each bank that makes payment transactions associated with PSE has a specific identification code. To find the bank code for which you want to create a new regular promotion, follow the steps below:

1. Go to your store checkout.
2. In the payment section, click the __PSE__ option.
3. Open the __Web Developer Tools__ page in your browser. If you have any doubts, see below how to do this based on the browser you're using:
   - [Google Chrome](https://developer.chrome.com/docs/devtools/open#inspect)</li>
   - [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)
   - [Safari](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)

4. Click the __Network__ tab.
5. Refresh the page by clicking __F5__ or the refresh button on your browser.
6. In the search bar, type __operationName=Banks__.
7. Click the result displayed in the __Name__ column.
8. Click the __Preview__ tab.
9. In the __data__ component, select the __banks__ component.
10. Click the name of the bank for which you want to create the promotion and note down the 4-digit number described in the __code__ field.

![PSE Dev Tool en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/creating-promotions-for-pse-payments_1.png)

## Creating a PSE promotion

After getting the bank code, create the regular promotion following the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions**, or type **Promotions** in the search bar at the top of the page.
2. Click the **Create Promotion** button.
3. Select the **Regular** option.
4. In the **Name** field, enter the name you want to use to identify the promotion.
5. In **Expiration date**, set the period in which the discount will be applied to customers using PSE with the configured bank.
6. In **What is the type and amount of discount?**, define the discount type for the promotion and enter the amount.

> ℹ️ The "Percentage" type is the most common for bank promotions.

7. In the **To which items will this promotion apply?** section, select whether the discount for payments made with the desired bank via PSE should apply to all store products or only to specific product types. If you want to restrict the promotion, configure the other fields in this section.
8. In the **What are the conditions for the promotion to be valid?** section, select the Marketing tags option and type **pse-discount-for-bank-code-XXXX**, replacing the **XXXX** with the code of the desired bank.
9. Select the **Payment method** option and choose **PSE**.
10. In the **Restrictions and limitations of use** section, if you want the promotion to apply with other store promotions, select the **Apply with other promotions** option.

> ⚠️ PSE promotions will always be added to the cart when the **Apply with other promotions** option is selected and other promotions are applied to the products. If the **Apply with other promotions** option is not selected, the checkout will use only the promotion that gives the biggest discount on the products.

11. Click **Save**.