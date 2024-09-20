---
title: 'VTEX Insurance'
id: 2aF3SDIj5t2qGe3bWKCjLD
status: ARCHIVED
createdAt: 2023-05-23T20:15:25.639Z
updatedAt: 2024-01-11T20:01:57.317Z
publishedAt: 
firstPublishedAt: 2023-05-26T17:46:59.436Z
contentType: tutorial
productTeam: B2B
author: 5l3eEiSz8MpcppCxcnijGz
slug: vtex-insurance
locale: en
legacySlug: vtex-insurance
subcategoryId: unknown-subcategory
---

**VTEX Insurance** is an app that enables merchants to bind store products to insurance offers provided by their insurance partner [Assurant](https://www.assurant.com.br/). This feature allows your store to provide customized insurance to customers, offering financial protection in case of failure or defect of the purchased product or service. You can provide your customers with an extra layer of security with an extended warranty.

Once the payment is confirmed, your customer will receive an email from our support team with the purchased insurance document. This document is a receipt that confirms the purchased product is insured and contains all the information describing the insurance coverage, including instructions to contact the insurance company.

Check out the table below to see the insurance types available in VTEX Insurance.

Code   | Insurance Type
--------- | ------
EW | Extended Warranty
TH | Theft and Qualified Theft
RQ | Theft and Accidental Damage
QA | Accidental Damage

To configure VTEX Insurance in your store, you need to:

1. <a href="#vtex-insurance-prerequisites">Install the VTEX Insurance app.</a>
2. <a href="#setting-up-the-catalog">Set up the store catalog to cover the insurance plans.</a>
3. <a href="#configuring-insurance">Configure Insurance.</a>

## VTEX Insurance prerequisites
To set up VTEX Insurance, follow the steps below.

1. In the VTEX Admin, go to **Account Settings> Users** or type **Users** in the search bar at the top of the page.
2. Click `New`.
3. Enter the email of the store installing VTEX Insurance in the **Email** field. If the email is not accepted, click  ́Add Profiles ́. On this page, you will need to select an existing [profile](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) that has already been added as **Owner** or **Developer**.
4.  Click `Save`.

The registered email address will receive an email from our support team with access to the VTEX Insurance app.

## Setting up the catalog
After installing VTEX Insurance, you need to complete the Catalog setup to cover insurance plans and products. To configure it, follow the steps below.

1. Add [Assurant as a seller in your store](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392).

2. [Create a collection](https://help.vtex.com/en/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye) to group products for binding the insurance options. You need to create a specific collection for each insurance type, as the collection will be used to specify which insurance policy the products will belong to.

3. [Create a category specification group](https://help.vtex.com/en/tutorial/creating-a-specification-group-in-a-category--tutorials_246) to add manufacturer warranties to your catalog, such as Warranty.

4. [Create a product specification](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106) with the insurance information you want to provide, such as Extended Warranty, for example.

5. After creating the **Manufacturer warranty** field, set the desired warranty period. In the **Standard value** field, we recommend entering "12", representing 12 months.

6. [Create a specific category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1) for an insurance product.

7. [Create an insurance product](https://help.vtex.com/en/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By).

8. [Create insurance SKUs](https://help.vtex.com/en/tutorial/sku-registration-fields--21DDItuEQc6mseiW8EakcY). We recommend creating more than three SKUs for each insurance.![Insurance - SKUs](//images.ctfassets.net/alneenqid6w5/7z6EX1cFT3l5wmnlX5LQk1/e1b53a46f844d679277074c59386b0de/image3.png)

9. [Bind the created SKUs](https://help.vtex.com/en/tutorial/sku-bindings--1SmrVgNwjJX17hdqwLa0TX) to the Assurant seller.

10. [Bind the insurance to the desired](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106) product.

>ℹ️ You need to repeat this process for all categories and products that offer insurance coverage.

## Configuring Insurance
After setting up the catalog, your store will have the products bound to insurance. In **Insurance** > **Configuration**, complete the VTEX Insurance setup.

Follow the steps below to set up your VTEX Insurance app.

### Company Information
![Insurance Configuration](//images.ctfassets.net/alneenqid6w5/27tKnogbpFLSaeGPW4OnkZ/b779f15fc609605bb8c26452fa596251/image5.png)
1. Complete the following information:
- **Email**: Store email.
- **Name**: Store name.
- **Phone**: Store phone number.
- **Mark-Up Value**: Profit margin to be achieved. Enter 0 (zero).
- **Street Name**: The street your store or office is located.
- **City**: The city your store or office is located.
- **State**: The state your store or office is located.
- **Postal Code**: Store or office postal code.
- **Country**: The country of your store or office.
2. Click `Submit`.

### Items bound to insurance items

![Items Bound to Source Items](//images.ctfassets.net/alneenqid6w5/6E68A1BaKeUzAgZuzD7KIY/3aa3ac21584d7226965e0584eb738150/image2.png)

1. Select the codes that correspond to the insurance types you want for the collection you have created.

2. Bind the SKUs created to insurance plans: you must add the insurance plan followed by the SKU ID. Example_: When binding the **Extended Warranty** insurance type (Code **EW**) to the SKU created for that same insurance type (ID **357**), the binding will be presented as **EW|357** (no spacing).
If you want to bind more than one insurance plan, such as **Theft and Qualified Theft** (Code **TH**) with the created SKU (ID **358**), **TH|358** binding, the field should be completed as **EW|357, TH|358**.
3. Click `Submit`.

### Warranty field name

![Warranty Field Name](//images.ctfassets.net/alneenqid6w5/215SqlxeJ3yFSZjfGnuJRl/c7440e8c3189d41c05d3a837cec3e273/image8.png)

1.  Specify the manufacturer's warranty field, indicating the name of the warranty used in the catalog.

2.  Click `Submit`.

### Insurance attachment setup
![Insurance Attachement Setup](//images.ctfassets.net/alneenqid6w5/7wpyDOdmdsK2VqOOUbqrfr/0cc20efa1f556b1cd5ed82e97f456ced/insurance_attachement_setup.png)

1. [Add an](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU) attachment for Assurant with the information received from the support team when contracting the service.

2. In **Insurance > Configuration**, click `Add attachment` in the **Insurance** section **Attachment Setup**.

3. On the **Attachment** page, click the `Change` button related to the **assurant.insurance** attachment. For each item in the table, click `Change` and delete all the values in the **Allowed values** field.

4. Click `Save`.

### Manual pricing setup
![Manual Pricing](//images.ctfassets.net/alneenqid6w5/a1wDUYo5UhkR09keQU6WG/c35b802ce82a4b0ddb077c7d62cae53e/image11.png)

1. [Activate the manual pricing](https://help.vtex.com/en/tutorial/change-the-price-of-an-item-in-the-shopping-cart--7Cd37aCAmtL1qmoZJJvjNf) in your store.

2. Click `Done, next`.
