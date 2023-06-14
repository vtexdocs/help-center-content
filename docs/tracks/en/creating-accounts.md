---
title: 'Creating Customer Credit accounts'
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2023-05-12T12:20:09.076Z
publishedAt: 2023-05-12T12:20:09.076Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slug: creating-accounts
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
---

The next step is to create accounts for the customers you want to offer credit to your store.

There are three ways to create them:

- Via Admin;
- Through the bulk import feature;
- Via API.

<div class="alert alert-info">
<strong>Warning</strong>: Customer Credit accounts are not integrated with the customer base registered in Master Data entities. Accounts must be created in the app before or after the user has concluded in-store purchases.
</div>

In addition, in all cases where users choose to update data by importing a spreadsheet into the system, it is necessary to make sure that all values are separated by commas. Otherwise, the operation will not be completed correctly.

See how to create accounts in these three possible ways:

## Creating accounts individually

If users prefer, they can create multiple accounts manually through Admin.

Follow the step by step:

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Then click on __Accounts__;
4. On the right side of the screen, click on the __“New”__ button;
5. Select the __document type__ that will identify the account;
6. Enter the document number in the __Document__ field;
7. Fill in the __Email__ field;
8. Set the __credit limit__ for the account;
9. Click on the __"Confirm"__ button.

Filling in the email field in the form is mandatory, because through the email (access key to the VTEX system), it is possible to authenticate the customer's access to the credit limits of an account. For more information about data protection, visit [SmartCheckout Security](https://help.vtex.com/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB).

This way, the new account will be displayed on the main page of the “Accounts” section.

## Creating accounts via bulk import

To create accounts in bulk, users can use the CSV (comma-separated value, a spreadsheet format) file import feature. 

This functionality is very useful as it makes it possible to import thousands of accounts into the system at once.

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Then click on __Accounts__;
4. Next to the “New” button, click on __Import__ option;
5. Select the __Create__ option;
6. Click on the __"Continue"__ button;
7. Then click on the __Download template__ option.

This way, your computer will download a spreadsheet template in CSV format. You can find it in the Downloads folder.

The next step is to fill in the columns listed in the document with the information for each of the accounts you want to create.

The table has 13 columns, but the email column is the only required, since VTEX’s system uses this information to identify users in SmartCheckout.

When you finish filling out the table and save the changes, proceed with the walkthrough:

1. Return to the __Accounts__ section in the Admin;
2. Click on the __Import__ option;
3. Select the __Update__ option inside the box;
4. Click on the __"Continue"__ button;
5. Insert the spreadsheet in the space __“Drop the CSV here or choose file”__;
6. Click on the __"Import file"__ button.

Done! Your accounts will be created and displayed on the Accounts section main page.

In the context of creating new accounts, you can check your import history. To do this, click on “Import history” on the main page of the Accounts section. This way, it is also possible to check if the imports were done correctly. Otherwise, the necessary corrections will be indicated in the interface.

### Updating Accounts via bulk import
You can also update all your accounts’ data - email, credit limit, document, document type, status and tolerance - at once using the bulk import feature.

The process is similar to creating accounts. However, here it is assumed that you already have the CSV file template downloaded on your machine.

Follow the step by step:

1. Access the __Admin__;
2. Click on the __Customer Credit__ module;
3. Then click on __Accounts__;
4. Next to the “New” button, click on the __Import__ option;
5. Select the __Update__ option;
6. Click on the __"Continue"__ button;
7. Insert the updated CSV file into the *Drop Zone*;
8. Click on the __"Import File"__ button.

Finally, wait for the spreadsheet to be uploaded.

## Creating accounts through API
Another option is to create accounts through the `POST Open or Change Account` [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-accountId- "endpoint").

Fill in the body with the following information:

     {
      "id": "id",
      "creditLimit": "number",
      "document": "CPF or CNPJ or Other",
      "email": "email"
    }

For more details, see our [technical documentation on Customer Credit APIs](https://developers.vtex.com/docs/guides/customer-credit-api-overview "technical documentation on Customer Credit API.").
