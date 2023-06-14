---
title: 'Predefined roles'
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2023-06-06T21:37:23.798Z
publishedAt: 2023-06-06T21:37:23.798Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slug: predefined-roles
legacySlug: 
subcategory: 1HSqkejwuYcQSMC400uY84
---

In this document we  list the predefined [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) for new VTEX stores. To access them directly, use the list below:

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [inStore Sales Person](#instore-sales-person)
* [IntegrationProfile - Fulfillment](#integrationprofile-fulfillment)
* [IntegrationProfile - Fulfillment Gateway](#integrationprofile-fulfillment-gateway)
* [IntegrationProfile - Fulfillment Gateway GetOrder](#integrationprofile-fulfillment-gateway-getorder)
* [IntegrationProfile - Fulfillment Gateway Oms](#integrationprofile-fulfillment-gateway-oms)
* [IntegrationProfile - Fulfillment Oms](#integrationprofile-fulfillment-oms)
* [IntegrationProfile - OrderSimulation](#integrationprofile-ordersimulation)
* [Logistics - Full access](#logistics-full-access)
* [Logistics - Read only](#logistics-read-only)
* [OMS - Full access](#oms-full-access)
* [OMS - Read only](#oms-read-only)
* [Seller Manager](#seller-manager)
* [User Administrator - RESTRICTED](#user-administrator-restricted)
* [VTEX IO Admin](#vtex-io-admin)
* [VTEX Payment - Account Holder](#vtex-payment-account-holder)
* [VTEX Payment - Bookkeeper](#vtex-payment-bookkeeper)
* [Webservice - Full access](#webservice-full-access)

## Admin - Start page only

This is the basic role that grants access to the home page of the administrative environment. It is the minimum required for a user not to be received with an error message when logging into the administrative environment.

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Home page</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Help home page</td>
  </tr>
</table>

## Checkout Admin

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:
<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Shopping Cart Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Full Access</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td>Access all orders</td>
  </tr>
  <tr>
    <td>Order Cancelation</td>
    <td>Checkout</td>
    <td>CheckoutResources</td>
    <td></td>
  </tr>
</table>

## Call center operator

This role includes special resources. The **Assisted Sales** resource causes the user to be automatically redirected to the store, which will leave the user who logs in to an account with this role without access to important resources in the administrative menu. We recommend using two accounts for telesales users - a separate account for the **Call center operator** role and one for other operations that the user may need to perform in the administrative menu.

<div class="alert alert-warning">
When creating a  <a href="https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#">role</a>, avoid including call center <a href="https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#">resources</a> with other resources. Otherwise, the role might not work as expected.
</div>

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Telesales</td>
    <td>After logging in, the user will be redirected to the telesales website www.yourstore.com/a/telesales. In this way, the operator can carry out operations in the store on the customer’s behalf. A bar will be displayed at the top of the screen.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view orders in OMS.</td>
  </tr>
</table>

## Finance  

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Web Access Control</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view orders in OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Customers, billing and finance managers have access. Allows users to view invoices.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows users to edit Company data.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Customers, billing and finance managers have access. Allows users to view all contracts (active and inactive) for a company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Customers, billing and finance managers have access. Allows users to view Company data.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Customers, billing and finance managers have access. Allows users to view the list of Contacts that receive email notifications when charges are incurred.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Only billing and finance managers have access. Allows users to edit contacts that receive notifications when charges are incurred.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Finance managers can manually incur charges in the invoice through contracts.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Incur new charge with interest.</td>
  </tr>
</table>

## Finance - Full access  

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Save account</td>
    <td>License Manager</td>
    <td>Service Access Control</td>
    <td>Save an account</td>
  </tr>
  <tr>
    <td>Get account by identifier</td>
    <td>License Manager</td>
    <td>Service Access Control</td>
    <td>Query that returns account by identifier, which can be the account id or the account application host.</td>
  </tr>
  <tr>
    <td>UI - Account list</td>
    <td>License Manager</td>
    <td>Web Access Control</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit account</td>
    <td>License Manager</td>
    <td>Web Access Control</td>
    <td></td>
  </tr>
  <tr>
    <td>UI - Edit role</td>
    <td>License Manager</td>
    <td>Web Access Control</td>
    <td></td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
  <tr>
    <td>Invoices List</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Customers, billing and finance managers have access. Allows users to view invoices.</td>
  </tr>
  <tr>
    <td>Edit Company Information</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows users to edit Company data.</td>
  </tr>
  <tr>
    <td>Contracts List</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Customers, billing and finance managers have access. Allows users to view all contracts (active and inactive) for a company.</td>
  </tr>
  <tr>
    <td>Display Company info</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Customers, billing and finance managers have access. Allows users to view Company data.</td>
  </tr>
  <tr>
    <td>Contacts List</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Customers, billing and finance managers have access. Allows users to view the list of Contacts that receive email notifications when charges are incurred.</td>
  </tr>
  <tr>
    <td>Edit Contacts</td>
    <td>Billing</td>
    <td>Contacts</td>
    <td>Only billing and finance managers have access. Allows users to edit contacts that receive notifications when charges are incurred.</td>
  </tr>
  <tr>
    <td>Generate new Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Finance managers can manually incur charges in the invoice through contracts.</td>
  </tr>
  <tr>
    <td>Edit Company's Document</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows users to edit the Company's document data (company registration number or individual taxpayer registration number), with which the invoice will be generated.</td>
  </tr>
  <tr>
    <td>Add Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows users to add an account to group other accounts linked to that customer into one billing.</td>
  </tr>
  <tr>
    <td>Delete Account</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows users to delete an account associated with a company. Company is the entity created to encompass several accounts from the same store.</td>
  </tr>
  <tr>
    <td>Save contracts</td>
    <td>Billing</td>
    <td>Contracts</td>
    <td>Only billing, sales operations/growth and finance managers have access. Allows users to create new contracts.</td>
  </tr>
  <tr>
    <td>Cancel Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Cancel fiscal document in municipal administrations; gives the power to cancel a fiscal document even if the invoice has already been generated.</td>
  </tr>
  <tr>
    <td>Issue Invoice Document</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Used in specific cases of countries that do not generate fiscal documents automatically, depending on their financial system. In this case, they can be generated manually.</td>
  </tr>
  <tr>
    <td>Conciliate Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. The default is to automatically mark it as paid, but the customer can pay it outside the system, depending on the negotiation. In this case, the finance manager has the power to manually mark it as paid, conciliating the invoices.</td>
  </tr>
  <tr>
    <td>Generate Invoice Overdue without Interest</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Incur new charge with interest.</td>
  </tr>
  <tr>
    <td>Cancel Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Cancel charges in billing; gives the power to cancel invoices even if they have already been generated.</td>
  </tr>
  <tr>
    <td>Change payment status</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. The finance manager has the power to change a company’s payment status, depending on his negotiation with the client.</td>
  </tr>
  <tr>
    <td>Recalc Invoice</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. Incur new charge with interest.</td>
  </tr>
  <tr>
    <td>Get Unscrewed Dashboard Charges</td>
    <td>Billing</td>
    <td>Dashboard</td>
    <td>Only billing and finance managers have access. Access to a dashboard external to Admin, which displays invoices issued at that time, and which accounts are provisioned.</td>
  </tr>
  <tr>
    <td>Merge companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows the merger between two companies, unifying their billing.</td>
  </tr>
  <tr>
    <td>Split companies</td>
    <td>Billing</td>
    <td>Company</td>
    <td>Only billing and finance managers have access. Allows to split a company into different companies.</td>
  </tr>
  <tr>
    <td>Unpaid invoices</td>
    <td>Billing</td>
    <td>Invoice</td>
    <td>Only billing and finance managers have access. The finance manager can manually deselect the payment of a charge if it has not been made or if it has been made incorrectly.</td>
  </tr>
  <tr>
    <td>Get App</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>VTEX internal use.</td>
  </tr>
  <tr>
    <td>Create Table</td>
    <td>Log</td>
    <td>Log Admin</td>
    <td>VTEX internal use.</td>
  </tr>
</table>

## inStore Sales Person  

&nbsp;&nbsp;&nbsp;&nbsp; Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Product Form</td>
    <td>Catalog</td>
    <td>Content</td>
    <td>Access to product screen</td>
  </tr>
  <tr>
    <td>Store Texts</td>
    <td>Catalog</td>
    <td>Settings</td>
    <td>Developer tool with all the store’s basic texts</td>
  </tr>
  <tr>
    <td>Assisted Sales</td>
    <td>Catalog</td>
    <td>Telesales</td>
    <td>After logging in, the user is redirected to the store (accountname.myvtex.com)</td>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Home page</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Help home page</td>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recovers a transaction.</td>
  </tr>
  <tr>
    <td>Manage Store</td>
    <td>PCI Gateway</td>
    <td>Payment-ManageStore</td>
    <td>Allows users to modify configuration settings</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to access actions within the workflow to change order status, through the Actions button in the Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Access to the button that manually notifies payments to the gateway in the payment area within the order.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to manually inform invoices and data for tracking in OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to cancel orders in OMS.</td>
  </tr>
  <tr>
    <td>Full access to all documents</td>
    <td>Dynamic Storage</td>
    <td>Generic resources for Dynamic Storage</td>
    <td>Resource automatically registered by Dynamic Storage.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recovers a transaction.</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Access to the button that manually notifies payments to the gateway in the payment area within the order.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to cancel orders in OMS.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway GetOrder

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recovers a transaction.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Gateway Oms

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Make Payments</td>
    <td>PCI Gateway</td>
    <td>Payment-MakePayments</td>
    <td>Represents the payment gateway transactional operations.</td>
  </tr>
  <tr>
    <td>View Payment Data</td>
    <td>PCI Gateway</td>
    <td>Payment-ViewPaymentData</td>
    <td>Recovers a transaction.</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to access actions within the workflow to change orders status, through the Actions button in the Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Access to the button that manually notifies payments to the gateway in the payment area within the order.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to manually inform invoices and data for tracking in OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify refund</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice.</td>
</tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to cancel orders in OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to subscribe to receive order status updates in the Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to register changes in the order (discounts and/or exchanges)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
</table>

## IntegrationProfile - Fulfillment Oms

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows access to actions within the workflow to change order status, through the Actions button in the Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Access to the button that manually notifies payments to the gateway in the payment area within the order.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to manually inform invoices and data for tracking in OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Place Orders</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
  <tr>
    <td>Notify refund</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to cancel orders in OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to subscribe to receive order status updates in the Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to register changes in the order (discounts and/or exchanges)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
</table>

## IntegrationProfile - OrderSimulation

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Orders Detail</td>
    <td>VTEX Fulfilment</td>
    <td>Fulfilment Resources</td>
    <td></td>
  </tr>
</table>

## Logistics - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Home page</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Help home page</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to all logistics resources (viewing, creating, editing and canceling settings)</td>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Permission to view the start page of the logistics module.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to the logistics inventory (viewing, creating, editing and canceling settings).</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Allows users to view the inventory module.</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to all shipping functions of the logistics module (creation, editing and cancelation of settings).</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>test</td>
  </tr>
</table>

## Logistics - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Logistics viewer</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Permission to view the start page of the logistics module.</td>
  </tr>
  <tr>
    <td>Logistics inventory read only</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Allows users to view the inventory module.</td>
  </tr>
  <tr>
    <td>Logistics shipping read only</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>test</td>
  </tr>
</table>

## OMS - Full access

Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Home-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Home page</td>
  </tr>
  <tr>
    <td>Help-page</td>
    <td>Catalog</td>
    <td>Administration</td>
    <td>Help home page</td>
  </tr>
  <tr>
    <td>Change order workflow status</td>
    <td>OMS</td>
    <td>AccessOMS</td>
    <td>Allows users to access actions within the workflow to change orders status, through the Actions button in the Workflow</td>
  </tr>
  <tr>
    <td>Notify payment</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
      <td>Access to the button that manually notifies payments to the gateway in the payment area within the order.</td>
  </tr>
  <tr>
    <td>Notify invoice</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to manually inform invoices and data for tracking in OMS.</td>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>Logistics full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to all logistics resources (viewing, creating, editing and canceling settings)</td>
  </tr>
  <tr>
    <td>Notify refund</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice.</td>
  </tr>
  <tr>
    <td>Cancel order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to cancel orders in OMS.</td>
  </tr>
  <tr>
    <td>Order feed subscription</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to subscribe to receive order status updates in the Order Feed.</td>
  </tr>
  <tr>
    <td>Change order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to register changes in the order (discounts and/or exchanges)</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
  <tr>
    <td>Logistics inventory full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to the logistics inventory (viewing, creating, editing and canceling settings).</td>
  </tr>
  <tr>
    <td>Logistics shipping full access</td>
    <td>Logistics</td>
    <td>Access to Logistics</td>
    <td>Gives full access to all shipping functions of the logistics module (creation, editing and cancelation of settings).</td>
  </tr>
</table>

## OMS - Read only

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>View order</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Allows users to view all orders in OMS.</td>
  </tr>
  <tr>
    <td>View store sales stats</td>
    <td>OMS</td>
    <td>AcessoOMS</td>
    <td>Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details.</td>
  </tr>
</table>

## Seller Manager

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>View Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Allows users to view all sellers from an account</td>
  </tr>
  <tr>
    <td>Save Seller</td>
    <td>Seller Register</td>
    <td>Seller Administration</td>
    <td>Allows users to create and edit all sellers from an account</td>
  </tr>
</table>

## User Administrator - RESTRICTED

&nbsp;&nbsp;&nbsp;&nbsp;Tabela de recursos:

<table>
  <tr>
    <th bgcolor="#efefef" >Nome do recurso</th>
    <th bgcolor="#efefef" >Produto</th>
    <th bgcolor="#efefef" >Categoria</th>
    <th bgcolor="#efefef" >Descrição</th>
  </tr>
  <tr>
    <td>Save user</td>
    <td>License Manager</td>
    <td>Services access control</td>
    <td>Create users, add or delete user roles, edit user data, create and edit application keys..</td>
  </tr>
</table>

## VTEX IO Admin

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Get resource by key</td>
    <td>License Manager</td>
    <td>Service Access Control</td>
    <td>Checks access permissions</td>
  </tr>
  <tr>
    <td>Read Workspace Apps</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the apps installed in the workspace and their direct and indirect dependencies.</td>
  </tr>
  <tr>
    <td>Link App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows listing existing links and linking and unlinking apps.</td>
  </tr>
  <tr>
    <td>Install App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows users to install and uninstall apps.</td>
  </tr>
  <tr>
    <td>Vbase Read Only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Read-only access to vbase.</td>
  </tr>
  <tr>
    <td>Vbase Read Write</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Read and write access to vbase.</td>
  </tr>
  <tr>
    <td>Read Workspace Services</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the infra apps in the workspace.</td>
  </tr>
  <tr>
    <td>Install Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows users to install and uninstall apps</td>
  </tr>
  <tr>
    <td>Log Access - Read-only</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading logs from all applications</td>
  </tr>
  <tr>
    <td>Read Published Service</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows reading the services data from the infra registry</td>
  </tr>
  <tr>
    <td>Debug App</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows connecting a debugger to a linked app</td>
  </tr>
  <tr>
    <td>Workspace CRUD</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Allows creating, deleting and modifying workspaces</td>
  </tr>
  <tr>
    <td>Import Redirects</td>
    <td>VTEX IO</td>
    <td>Infrastructure</td>
    <td>Enable users to manage redirects with VTEX IO's command line interface</td>
  </tr>
  <tr>
    <td>Manage A/B Test</td>
    <td>VTEX IO</td>
    <td>A/B Test</td>
    <td>Allows users to start, finish or get status of an A/B Test</td>
  </tr>
  <tr>
    <td>Read logs</td>
    <td>Application Logs Stream</td>
    <td>Logs</td>
    <td>Read logs from VTEX IO apps owned from this account</td>
  </tr>
</table>

## VTEX Payment - Account Holder

This role gives full read and write access to VTEX Payment data and should be restricted to users who need to make settings.

## VTEX Payment - Bookkeeper

This role allows users to read information about the VTEX Payment operation.

## Webservice - Full access

&nbsp;&nbsp;&nbsp;&nbsp;Resource table:

<table>
  <tr>
    <th bgcolor="#efefef" >Resource name</th>
    <th bgcolor="#efefef" >Product</th>
    <th bgcolor="#efefef" >Category</th>
    <th bgcolor="#efefef" >Description</th>
  </tr>
  <tr>
    <td>Webservice access</td>
    <td>WebService</td>
    <td>webservice</td>
    <td>Permission to use any SOAP request</td>
  </tr>
</table>    

