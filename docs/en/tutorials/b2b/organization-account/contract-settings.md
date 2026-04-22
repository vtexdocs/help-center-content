---
title: 'Contract settings'
createdAt: '2026-03-14T10:00:00.000Z'
updatedAt: '2026-03-14T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: contract-settings
locale: en
---

> ⚠️ This feature is only available to stores using B2B Buyer Portal, which is currently available for selected accounts.

The **Contract** section in the [Organization Account](https://help.vtex.com/en/docs/tutorials/organization-account) gathers settings that define how a buyer organization operates in a B2B Buyer Portal store. In this section, the user can view profile information, manage addresses, configure payment methods and credit cards, select product assortments, and manage [checkout custom fields](https://help.vtex.com/docs/tutorials/accounting-fields).

This article covers the following topics:

- [Viewing profile information](#viewing-profile-information)
- [Managing addresses](#managing-addresses)
  - [Adding an address](#adding-an-address)
  - [Editing an address](#editing-an-address)
  - [Deleting an address](#deleting-an-address)
- [Managing payment methods](#managing-payment-methods)
  - [Adding a payment method](#adding-a-payment-method)
  - [Removing a payment method](#removing-a-payment-method)
- [Managing credit cards](#managing-credit-cards)
  - [Adding a credit card](#adding-a-credit-card)
  - [Editing a credit card](#editing-a-credit-card)
  - [Deleting a credit card](#deleting-a-credit-card)
- [Selecting product assortments](#selecting-product-assortments)
- [Accounting fields](#accounting-fields)

## Viewing profile information

The **Profile** page displays basic information about the contract, including name, email, and created date. This information can't be edited.

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Profile.**
2. See the details in the **Details** section.

## Managing addresses

The **Addresses** page lists all addresses available for the organizational unit. Each address displays its name and type. Users can search, add, edit, and delete addresses on this page.

In addition to address details, users can link **locations** and **recipients** to an address.

A **location** is a specific delivery point within an address, such as a loading dock, department, or internal area. For example, the order is shipped to the company's address, but delivery is at Dock-3456.

**Recipients** are people added to a buyer organization to receive orders at that address.

### Adding an address

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, click the **+** icon at the top of the page.
3. In the **Add address** drawer, you can choose an address already added to your organization. If there's no address added yet or you want to save a new one, complete the information in the following tabs:
   - On the **Details** tab, complete the address fields:
     - **Country:** Select the country.
     - **Address Name:** Enter a name to identify the address.
     - **Street Address:** Enter the street address.
     - **Apt, Suite, Building (optional):** Enter any additional details, if necessary.
     - **City:** Enter the city.
     - **State:** Select the state.
     - **Postal code:** Enter the postal code.
     - **Address type:** Select the type of address.
   - On the **Locations** tab, you can optionally add locations associated with this address. Click `Add location` to include more locations.
   - On the **Recipients** tab, you can optionally add recipients for this address. Click `Add recipient` to add more recipients, each with a **Name** and **Phone number.**
4. Click `Add`.

### Editing an address

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, in the corresponding row, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> and select one of the available actions:
   - `Open`: View address details.
   - `Edit details`: Edit address information.
   - `Add locations`: Add locations to the address.
   - `Add recipients`: Add recipients to the address.
   - `Set as default`: Set the address as the unit's default.
   - `Remove from unit`: Remove the address from the current organizational unit without deleting it.
3. Make the desired changes.
4. Click `Save`.

### Deleting an address

> ❗ Deleting an address is permanent and can't be undone. The address may be used by several organizational units. When deleted, the address and all associated information are removed from all units; the usage history is retained for audit purposes.

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, in the corresponding row, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
3. In the confirmation modal, enter the address name to confirm.
4. Click `Remove`.

## Managing payment methods

The **Payment methods** page lists the available payment methods for the organizational unit. The user can add payment methods from among the available options for the unit or remove existing ones.

### Adding a payment method

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Payment methods.**
2. On the **Payment methods** page, click the **+** icon at the top of the screen.
3. In the **Add payment methods** drawer, select the payment methods to add by checking the corresponding boxes.
4. Click `Add`.

The selected methods will appear on the **Payment Methods** page and will be available to users of this unit at checkout.

### Removing a payment method

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Payment methods.**
2. On the **Payment methods** page, click the **−** icon next to the payment method you want to remove.
3. In the confirmation modal, click `Remove`.

> ⚠️ Removing a payment method prevents users of this organizational unit from using it at checkout.

## Managing credit cards

The **Credit cards** page displays all cards available to the organizational unit. Each card shows the nickname and an option to enable or disable it. Users can add new cards, edit details of existing cards, and remove cards.

Credit cards associated with the contract are shared with the organizational unit but can be restricted with [scopes](https://help.vtex.com/docs/tutorials/scopes-overview). At checkout, buyers select a card by nickname among the cards linked to the contract and available for that unit.

### Adding a credit card

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit cards** page, click the **+** icon.
3. In the **Add credit card** drawer, complete the following fields:
   - **Card nickname:** Enter a name to identify the card.
   - In **Card details:**
     - **Card number:** Enter the card number.
     - **Exp MM/YY:** Enter the expiration date.
     - **CVV:** Enter the security code.
     - **Cardholder name:** Enter the name printed on the card.
   - In **Billing address:**
     - **Address line 1:** Enter the billing address.
     - **Address line 2 (optional):** Enter additional details, if necessary.
     - **City:** Enter the city.
     - **State:** Select the state.
4. Click `Add`.

### Editing a credit card

After adding a credit card, only the nickname can be edited.

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit cards** page, in the corresponding row, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Edit`.
3. In the **Edit credit card** drawer, update the card nickname.
4. Click `Save`.

### Deleting a credit card

> ❗ Deleting a credit card is permanent and can't be undone.

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit Cards** page, in the corresponding row, click the menu icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i> > `Delete`.
3. In the confirmation modal, click `Delete`.

## Selecting product assortments

The **Product assortments** page allows you to choose which product assortments users of the organizational unit can access. Each organizational unit can have one active assortment at a time.

A **product assortment** is the set of products available to buyers of that unit. Different units can use distinct assortments when business rules require separate catalogs or selections.

1. On the [Organization Account home screen](https://help.vtex.com/docs/tutorials/organization-account), in the **Contract** section, click **Product assortment.**
2. On the **Product assortments** page, select the desired assortment from the list by clicking the corresponding radio button.

The selection is saved automatically.

## Accounting fields

[Accounting fields](https://help.vtex.com/docs/tutorials/accounting-fields) configured by the buyer organization are displayed as individual menu items in the **Contract** section of the sidebar. These fields gather additional information during checkout, such as cost centers, purchase order (PO) numbers, or department codes.

To learn how to add or manage these fields, see [Adding or editing accounting fields](https://help.vtex.com/docs/tutorials/adding-or-editing-accounting-fields).
