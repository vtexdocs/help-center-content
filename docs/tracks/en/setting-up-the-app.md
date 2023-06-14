---
title: 'Setting up Customer Credit'
id: 21ok0GBwmcIeaY2IukYMOg
status: PUBLISHED
createdAt: 2018-11-07T17:11:22.823Z
updatedAt: 2022-01-07T13:30:23.058Z
publishedAt: 2022-01-07T13:30:23.058Z
firstPublishedAt: 2018-11-07T17:23:16.520Z
contentType: trackArticle
productTeam: Financial
slug: setting-up-the-app
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugEN: customer-credit-getting-started
---

## First acess settings

Let's configure the Customer Credit app.

The first step is to access its settings page in the Admin.

You will see three commands inside the “Pending” box: 

1. __Activate transactional emails in Message Center__: installs transactional email templates related to Customer Credit in Message Center. To activate it, click on the “Activate” button;
2. __Configure checkout payment conditions__: defines rules for installments and payment terms. To activate it, click on the “Configure” button;
3. __Undefined affiliation’s appKey and appToken__: Customer Credit as a payment method. To activate it, click on the “Authenticate” button. You will be redirected to the “Gateway Affiliations” page, where you must fill in the empty fields with your Key and Token for that store. For more details, see our [article on how to create appKeys and appTokens](https://help.vtex.com/en/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2 "article on how to create appKeys and appTokens.").

This way, Customer Credit will be available as a payment method in your store's SmartCheckout.

## App settings
There are four options to customize the consumer experience in your store.
Check the details of each below.

### Tolerance

With this feature, a purchase can be concluded even if it exceeds the user's available credit. You can set a tolerance percentage to limit the surplus credit available for each account.

For example, let's say an account has US$ 1,000 in available credit and a tolerance of 10%. Thus, the system will allow the customer to place orders of up to US$ 1,100.

<div class="alert alert-warning">
Tolerance values are set in decimal numbers, with 0 representing 0% and 1 representing 100%. Example: for a 5% tolerance, the value to be set is 0.05.
</div>

To set the tolerance, check out the step by step:

1. Access __Admin__.
2. Click on __Customer Credit__.
3. Then, click on __Accounts__.
4. Click on the customer account for which you want to set the tolerance.
5. In __Tolerance__, click on __Edit__.
6. Fill in the tolerance value (in decimals).
7. Click on __Update__.

### Automatic account creation
This flag allows customers to complete purchases using Customer Credit as a payment method, even if they do not have a previous account with a defined credit limit.

On the settings page, you have the option to set a default credit limit for customers whose accounts will be automatically created on SmartCheckout.

### My Credits page
It is the interface through which your end-users will have access to their account information.

In it, users can see their available limits, invoices and statements, and they can also add or remove dependents.

When the page is activated, it will be available in the customers’ MyAccount area.

### Payment instructions
Here, the user can add payment instructions to their title documents. To do this, click on “Edit” and write the instruction. Don't forget to click on the “Update” button to save your settings.

The same instruction will be replicated in all invoices of your store, regardless of the account to which they are linked and their status.

## Payment conditions
At this point, Customer Credit is properly installed and configured in your store. You can now create payment conditions that will be displayed on SmartCheckout.

You can define different business scenarios for these payment conditions. This also implies which term and installment conditions will be available for customers.

Here are some payment terms that can be used:

- Payments within 7, 28 and 45 days;
- Payments within 45 days;
- Installments in 30, 60 and 90 days.

Check out the step by step:

1. Access __the Admin__;
2. Click on __Payments__;
3. Click on __Settings__;
4. Make sure you are in the __Payment Conditions__ tab;
5. On the right side of the screen, click on the __“+”__ button;
6. Find and click on the __Customer Credit__ option;
7. On the right side, define the criteria in the box __Configure deadline and installment rules__.

If you want to add more than one rule, click on the "Add new rule" button. Finally, click on the “Save” button.

In the same way as other payment methods, Customer Credit allows you to configure [special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais?locale=en "special conditions."). Users will define which purchase contexts will be applied to each payment condition configured in their stores.

### Interest
Finally, you can also set simple interest rates for the installment rules configured in your store. Currently, these rates can be applied to orders that will be paid in two or more installments.

<div class="alert alert-warning">
<strong>Warning</strong>: Interest rates do <strong>not</strong> apply to orders paid in full.
</div> 

However, only one interest rate will be displayed on SmartCheckout.

For example, let's say you have set up three installment options for Customer Credit, each with a different interest rate: 10%, 15% and 20%.

Since the 10% rate is the most advantageous for the end consumer, this will be the only payment option shown on SmartCheckout.
