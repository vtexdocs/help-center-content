---
title: 'Creating Customer Credit accounts'
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2024-11-04T18:08:56.036Z
publishedAt: 2024-11-04T18:08:56.036Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slugEN: creating-accounts
locale: en
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
order: 3
---

The next step is to create accounts for the customers you want to offer credit to in your store. Accounts can be created in three different ways:

- [Individual account (Admin VTEX)](#create-accounts-individually)
- [Multiple Accounts (Admin VTEX)](#create-multiple-accounts-bulk-import)
- [Individual account (Customer Credit API)](#create-account-via-api)

> ℹ️ Accounts created in the Customer Credit app have no relationship or share data with the customer base registered in the store's [Master Data entities](/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#data-entities). For a customer to be able to use Customer Credit as a payment method, their account must be registered by the merchant in the app even if the customer already has an account in the store.

## Create accounts individually

To register a new customer in Customer Credit, follow the steps below:

1. In the VTEX Admin, access __Apps > Customer Credit > Accounts__, or type __Accounts__ in the search bar at the top of the page.
2. On the __Accounts__ screen, click the `NEW` button.
3. In __Identification__, select the __Document type__ and fill in the __Document__ and __Email__ fields with the information of the customer you want to register.
4. In __Credit__, enter the __Credit Limit (BRL)__ and __Tolerance__ values that you want to make available to the customer.
5. Click `Confirm`.

> ⚠️ Filling in the **Email** field is mandatory, as the VTEX platform uses this information to authenticate the customer's access to the credit limits of their account. For more information about data protection, visit [SmartCheckout Security](/en/docs/tutorials/smartcheckout-security).

From this moment on, the new account created will be displayed on the __Accounts__ screen.

![CC_new_account_1_EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/payment-solutions/customer-credit-getting-started/creating-accounts_1.JPG)

## Create multiple accounts (bulk import)

To create multiple accounts at the same time (in bulk) in Customer Credit, you can use a template spreadsheet in CSV (Comma Separated Value) format containing each customer's information. Follow the steps below to create multiple accounts:

1. In the VTEX Admin, access __Apps > Customer Credit > Accounts__, or type __Accounts__ in the search bar at the top of the page.
2. On the __Accounts__ screen, click the `IMPORT` button.
3. In __Do you want to create or update accounts?__, select the __Create__ option and click `CONTINUE`.
4. Click on `DOWNLOAD TEMPLATE`. A spreadsheet template in .csv format will be sent to your device (computer, cell phone or tablet).
5. Fill in each line:
<br>
<ul>
  <li>Columns **Email**, **Document** and **Document Type**: customer information.</li>
  <li>Columns **Credit limit** and **Tolerance rate**: values available to each customer. The **Tolerance rate** must be entered in decimal format, for example, a tolerance of 5% must be indicated as 0.05.</li>
</ul>

![CC_criar_conta_2_ALL](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/payment-solutions/customer-credit-getting-started/creating-accounts_2.JPG)

<blockquote><ui>6. Save the .csv spreadsheet.</ui>

<blockquote><ui>7. Return to the **Accounts** screen and click the **IMPORT** button again.</ui>

<blockquote><ui>8. In **Do you want to create or update accounts?**, select the **Update** option and click **CONTINUE**.</ui>

<blockquote><ui>9. Insert or select the .csv spreadsheet in the space **Drop your CSV here or choose a file**.</ui>

<blockquote><ui>10. Click on the **IMPORT FILE** button.</ui>

From this moment on, new accounts created via the .csv spreadsheet will be available on the __Accounts__ screen.

> ⚠️ It is also possible to track previous processes of creating multiple accounts, identifying whether the accounts were created correctly. To check this information, click on **Import History** on the **Accounts** screen.  

### Update multiple accounts (bulk import)

To update information, such as document, document type, email, credit limit and tolerance, in multiple accounts at the same time, you can also use the bulk import functionality.

The procedure is similar to [create multiple accounts](#create-multiple-accounts-bulk-import). However, you must already have the .csv spreadsheet downloaded and filled out on your device (computer, cell phone or tablet). Follow the steps below to update customer information: 

1. In the VTEX Admin, access __Apps > Customer Credit > Accounts__, or type __Accounts__ in the search bar at the top of the page.
2. On the __Accounts__ screen, click the `IMPORT` button.
3. In __Do you want to create or update accounts?__, select the __Update__ option and click `CONTINUE`.
4. Insert or select the .csv spreadsheet in the space __Drop your CSV here or choose a file__ here.
5. Click on the IMPORT FILE button.
6. After the spreadsheet is loaded into Admin, check on the __Accounts__ screen whether the information was updated correctly in each customer's accounts.  

## Create account via API

You can also create accounts for your customers in Customer Credit through the endpoint [POST - Open an account](https://developers.vtex.com/docs/api-reference/customer-credit-api#post-/api/creditcontrol/accounts).

For more information about Customer Credit API endpoints, visit [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).  
