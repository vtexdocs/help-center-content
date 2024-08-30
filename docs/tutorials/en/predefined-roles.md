---
title: 'Predefined roles'
id: jGDurZKJHvHJS13LnO7Dy
status: PUBLISHED
createdAt: 2022-04-07T21:34:06.385Z
updatedAt: 2024-05-22T17:50:31.567Z
publishedAt: 2024-05-22T17:50:31.567Z
firstPublishedAt: 2022-04-07T21:48:28.951Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slug: predefined-roles
locale: en
legacySlug: 
subcategory: 1HSqkejwuYcQSMC400uY84
---

[Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#) group [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#), with each resource representing a permission in the VTEX platform.

In this document, are listed the roles that are predefined for new VTEX stores and their respective resources. To access them directly, use the list below.

>ℹ️ Learn more about each resource listed in the roles below in [License Manager Resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

* [Admin - Start page only](#admin-start-page-only)
* [Checkout Admin](#checkout-admin)
* [Call center operator](#call-center-operator)
* [Finance](#finance)
* [Finance - Full access](#finance-full-access)
* [Sales App - Sales Associate](#sales-app-sales-associate)
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

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Homepage | Catalog | Administration | Home page |
| Help page | Catalog | Administration | Help home page |

## Checkout Admin

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Shopping Cart Full Access | Checkout | CheckoutResources |
| Orders Full Access | Checkout | CheckoutResources | Access all orders |
| Order Cancelation | Checkout | CheckoutResources |

## Call center operator

This is a role dedicated to telesales operators, as it grants access to VTEX's [telesales features](https://help.vtex.com/en/tutorial/telesales-features--UqhiccIRIK2KD0OqkzJaS) and allows you to view orders.

The Assisted Sales resource causes the user to be automatically redirected to the store's telesales page, which will leave the user logging into an account with this role without access to important features of the administrative menu.

We therefore recommend using two separate accounts (with different emails) for telesales users: one account for the __Call center operator__ role (with the *Assisted Sales* and *View order* resources) and another account for carrying out operations in Admin, if necessary.

>⚠️ When creating a [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#), avoid including call center [resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) with other resources. Otherwise, the role might not work as expected.

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Assisted Sales | Catalog | Telesales | Telesales features. After the login, the user is redirected to the telesales site www.{storename}.com.br/a/telesales. This way, the operator can use telesales features such as navigating the store in the name of the customer.As this feature causes an automatic redirect to the store, the user who logs in an account with this resource in their role will not have access to important resources from Admin. |
| View order | OMS | AcessoOMS | Allows users to view orders in OMS. |

## Finance  

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| UI - Account list | License Manager | Web Access Control |
| View order | OMS | AcessoOMS | Allows users to view orders in OMS. |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |
| Invoices List | Billing | Invoice | Customers, billing and finance managers have access. Allows users to view invoices. |
| Edit Company Information | Billing | Company | Only billing and finance managers have access. Allows users to edit Company data. |
| Contracts List | Billing | Contracts | Customers, billing and finance managers have access. Allows users to view all contracts (active and inactive) for a company. |
| Display Company info | Billing | Company | Customers, billing and finance managers have access. Allows users to view Company data. |
| Contacts List | Billing | Contacts | Customers, billing and finance managers have access. Allows users to view the list of Contacts that receive email notifications when charges are incurred. |
| Edit Contacts | Billing | Contacts | Only billing and finance managers have access. Allows users to edit contacts that receive notifications when charges are incurred. |
| Generate new Invoice | Billing | Invoice | Only billing and finance managers have access. Finance managers can manually incur charges in the invoice through contracts. |
| Recalc Invoice | Billing | Invoice | Only billing and finance managers have access. Incur new charge with interest. |

## Finance - Full access  

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Save account | License Manager | Service Access Control | Save an account |
| Get account by identifier | License Manager | Service Access Control | Query that returns account by identifier, which can be the account id or the account application host. |
| UI - Account list | License Manager | Web Access Control |
| UI - Edit account | License Manager | Web Access Control |
| UI - Edit role | License Manager | Web Access Control |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |
| Invoices List | Billing | Invoice | Customers, billing and finance managers have access. Allows users to view invoices. |
| Edit Company Information | Billing | Company | Only billing and finance managers have access. Allows users to edit Company data. |
| Contracts List | Billing | Contracts | Customers, billing and finance managers have access. Allows users to view all contracts (active and inactive) for a company. |
| Display Company info | Billing | Company | Customers, billing and finance managers have access. Allows users to view Company data. |
| Contacts List | Billing | Contacts | Customers, billing and finance managers have access. Allows users to view the list of Contacts that receive email notifications when charges are incurred. |
| Edit Contacts | Billing | Contacts | Only billing and finance managers have access. Allows users to edit contacts that receive notifications when charges are incurred. |
| Generate new Invoice | Billing | Invoice | Only billing and finance managers have access. Finance managers can manually incur charges in the invoice through contracts. |
| Edit Company's Document | Billing | Company | Only billing and finance managers have access. Allows users to edit the Company's document data (company registration number or individual taxpayer registration number), with which the invoice will be generated. |
| Add Account | Billing | Company | Only billing and finance managers have access. Allows users to add an account to group other accounts linked to that customer into one billing. |
| Delete Account | Billing | Company | Only billing and finance managers have access. Allows users to delete an account associated with a company. Company is the entity created to encompass several accounts from the same store. |
| Save contracts | Billing | Contracts | Only billing, sales operations/growth and finance managers have access. Allows users to create new contracts. |
| Cancel Invoice Document | Billing | Invoice | Only billing and finance managers have access. Cancel fiscal document in municipal administrations; gives the power to cancel a fiscal document even if the invoice has already been generated. |
| Issue Invoice Document | Billing | Invoice | Only billing and finance managers have access. Used in specific cases of countries that do not generate fiscal documents automatically, depending on their financial system. In this case, they can be generated manually. |
| Conciliate Invoice | Billing | Invoice | Only billing and finance managers have access. The default is to automatically mark it as paid, but the customer can pay it outside the system, depending on the negotiation. In this case, the finance manager has the power to manually mark it as paid, conciliating the invoices. |
| Generate Invoice Overdue without Interest | Billing | Invoice | Only billing and finance managers have access. Incur new charge with interest. |
| Cancel Invoice | Billing | Invoice | Only billing and finance managers have access. Cancel charges in billing; gives the power to cancel invoices even if they have already been generated. |
| Change payment status | Billing | Invoice | Only billing and finance managers have access. The finance manager has the power to change a company’s payment status, depending on his negotiation with the client. |
| Recalc Invoice | Billing | Invoice | Only billing and finance managers have access. Incur new charge with interest. |
| Get Unscrewed Dashboard Charges | Billing | Dashboard | Only billing and finance managers have access. Access to a dashboard external to Admin, which displays invoices issued at that time, and which accounts are provisioned. |
| Merge companies | Billing | Company | Only billing and finance managers have access. Allows the merger between two companies, unifying their billing. |
| Split companies | Billing | Company | Only billing and finance managers have access. Allows to split a company into different companies. |
| Unpaid invoices | Billing | Invoice | Only billing and finance managers have access. The finance manager can manually deselect the payment of a charge if it has not been made or if it has been made incorrectly. |
| Get App | Log | Log Admin | VTEX internal use. |
| Create Table | Log | Log Admin | VTEX internal use. |

## Sales App - Sales Associate

>⚠️ Sales associates registered in Sales App cannot access the VTEX Admin, only Sales App.

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Assisted Sales | Catalog | Televendas | After logging in, the user is redirected to the store (accountname.myvtex.com) |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recovers a transaction. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| Cancel order | OMS | AcessoOMS | Allows users to cancel orders in OMS. |

## IntegrationProfile - Fulfillment

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |

## IntegrationProfile - Fulfillment Gateway

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recovers a transaction. |
| Notify payment | OMS | AcessoOMS | Access to the button that manually notifies payments to the gateway in the payment area within the order. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
| Cancel order | OMS | AcessoOMS | Allows users to cancel orders in OMS. |

## IntegrationProfile - Fulfillment Gateway GetOrder

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recovers a transaction. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |

## IntegrationProfile - Fulfillment Gateway Oms

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Make Payments | PCI Gateway | Payment-MakePayments | Represents the payment gateway transactional operations. |
| View Payment Data | PCI Gateway | Payment-ViewPaymentData | Recovers a transaction. |
| Change order workflow status | OMS | AcessoOMS | Allows users to access actions within the workflow to change orders status, through the Actions button in the Workflow |
| Notify payment | OMS | AcessoOMS | Access to the button that manually notifies payments to the gateway in the payment area within the order. |
| Notify invoice | OMS | AcessoOMS | Allows users to manually inform invoices and data for tracking in OMS. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
| Notify refund | OMS | AcessoOMS | Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice. |
| Cancel order | OMS | AcessoOMS | Allows users to cancel orders in OMS. |
| Order feed subscription | OMS | AcessoOMS | Allows users to subscribe to receive order status updates in the Order Feed. |
| Change order | OMS | AcessoOMS | Allows users to register changes in the order (discounts and/or exchanges) |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |

## IntegrationProfile - Fulfillment Oms

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Change order workflow status | OMS | AcessoOMS | Allows access to actions within the workflow to change order status, through the Actions button in the Workflow |
| Notify payment | OMS | AcessoOMS | Access to the button that manually notifies payments to the gateway in the payment area within the order. |
| Notify invoice | OMS | AcessoOMS | Allows users to manually inform invoices and data for tracking in OMS. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| List Orders | OMS | AcessoOMS | Allows users to list all orders from the given account. |
| Place Orders | VTEX Fulfilment | Fulfilment Resources |
| Orders Detail | VTEX Fulfilment | Fulfilment Resources |
| Notify refund | OMS | AcessoOMS | Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice. |
| Cancel order | OMS | AcessoOMS | Allows users to cancel orders in OMS. |
| Order feed subscription | OMS | AcessoOMS | Allows users to subscribe to receive order status updates in the Order Feed. |
| Change order | OMS | AcessoOMS | Allows users to register changes in the order (discounts and/or exchanges) |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |

## IntegrationProfile - OrderSimulation

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Orders Detail | VTEX Fulfilment | Fulfilment Resources | |

## Logistics - Full access

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Home-page | Catalog | Administration | Home page |
| Help-page | Catalog | Administration | Help home page |
| Logistics full access | Logistics | Access to Logistics | Gives full access to all logistics resources (viewing, creating, editing and canceling settings) |
| Logistics viewer | Logistics | Access to Logistics | Permission to view the start page of the logistics module. |
| Logistics inventory full access | Logistics | Access to Logistics | Gives full access to the logistics inventory (viewing, creating, editing and canceling settings). |
| Logistics inventory read only | Logistics | Access to Logistics | Allows users to view the inventory module. |
| Logistics shipping full access | Logistics | Access to Logistics | Gives full access to all shipping functions of the logistics module (creation, editing and cancelation of settings). |
| Logistics shipping read only | Logistics | Access to Logistics |   |

## Logistics - Read only

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Logistics viewer | Logistics | Access to Logistics | Permission to view the start page of the logistics module. |
| Logistics inventory read only | Logistics | Access to Logistics | Allows users to view the inventory module. |
| Logistics shipping read only | Logistics | Access to Logistics | test |

## OMS - Full access

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Home-page | Catalog | Administration | Home page |
| Help-page | Catalog | Administration | Help home page |
| Change order workflow status | OMS | AccessOMS | Allows users to access actions within the workflow to change orders status, through the Actions button in the Workflow |
| Notify payment | OMS | AcessoOMS | Access to the button that manually notifies payments to the gateway in the payment area within the order. |
| Notify invoice | OMS | AcessoOMS | Allows users to manually inform invoices and data for tracking in OMS. |
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| Logistics full access | Logistics | Access to Logistics | Gives full access to all logistics resources (viewing, creating, editing and canceling settings) |
| Notify refund | OMS | AcessoOMS | Allows users to notify when an accounts receivable invoice is in processing, indicating a journal entry for something that was refunded. Allows the input of a return invoice. |
| Cancel order | OMS | AcessoOMS | Allows users to cancel orders in OMS. |
| Order feed subscription | OMS | AcessoOMS | Allows users to subscribe to receive order status updates in the Order Feed. |
| Change order | OMS | AcessoOMS | Allows users to register changes in the order (discounts and/or exchanges) |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |
| Logistics inventory full access | Logistics | Access to Logistics | Gives full access to the logistics inventory (viewing, creating, editing and canceling settings). |
| Logistics shipping full access | Logistics | Access to Logistics | Gives full access to all shipping functions of the logistics module (creation, editing and cancelation of settings). |

## OMS - Read only

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| View order | OMS | AcessoOMS | Allows users to view all orders in OMS. |
| View store sales stats | OMS | AcessoOMS | Displays totalizers within the All Orders section in Orders Management. Displays total sales in addition to orders details. |

## Seller Manager

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| View Seller | Seller Register | Seller Administration | Allows users to view all sellers from an account |
| Save Seller | Seller Register | Seller Administration | Allows users to create and edit all sellers from an account |

## User Administrator - RESTRICTED

Tabela de recursos:

| Nome do recurso | Produto | Categoria | Descrição |
|---|---|---|---|
| Save user | License Manager | Services access control | Create users, add or delete user roles, edit user data, create and edit application keys.. |

## VTEX IO Admin

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Get resource by key | License Manager | Service Access Control | Checks access permissions |
| Read Workspace Apps | VTEX IO | Infrastructure | Allows reading the apps installed in the workspace and their direct and indirect dependencies. |
| Link App | VTEX IO | Infrastructure | Allows listing existing links and linking and unlinking apps. |
| Install App | VTEX IO | Infrastructure | Allows users to install and uninstall apps. |
| Vbase Read Only | VTEX IO | Infrastructure | Read-only access to vbase. |
| Vbase Read Write | VTEX IO | Infrastructure | Read and write access to vbase. |
| Read Workspace Services | VTEX IO | Infrastructure | Allows reading the infra apps in the workspace. |
| Install Service | VTEX IO | Infrastructure | Allows users to install and uninstall apps |
| Log Access - Read-only | VTEX IO | Infrastructure | Allows reading logs from all applications |
| Read Published Service | VTEX IO | Infrastructure | Allows reading the services data from the infra registry |
| Debug App | VTEX IO | Infrastructure | Allows connecting a debugger to a linked app |
| Workspace CRUD | VTEX IO | Infrastructure | Allows creating, deleting and modifying workspaces |
| Import Redirects | VTEX IO | Infrastructure | Enable users to manage redirects with VTEX IO's command line interface |
| Manage A/B Test | VTEX IO | A/B Test | Allows users to start, finish or get status of an A/B Test |
| Read logs | Application Logs Stream | Logs | Read logs from VTEX IO apps owned from this account |

## VTEX Payment - Account Holder

This role gives full read and write access to VTEX Payment data and should be restricted to users who need to make settings.

## VTEX Payment - Bookkeeper

This role allows users to read information about the VTEX Payment operation.

## Webservice - Full access

Resource table:

| Resource name | Product | Category | Description |
|---|---|---|---|
| Webservice access | WebService | webservice | Permission to use any SOAP request |
