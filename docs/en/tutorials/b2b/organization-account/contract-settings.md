---
title: 'Contract settings'
createdAt: '2026-03-14T10:00:00.000Z'
updatedAt: '2026-03-14T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: contract-settings
locale: en
---

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

The **Contract** section in the [Organization Account](https://help.vtex.com/en/docs/tutorials/organization-account) groups settings that define how a buyer organization operates within a B2B Buyer Portal store. From this section, the user can view profile information, manage addresses, configure payment methods and credit cards, select product assortments, and manage [custom checkout fields](https://help.vtex.com/en/docs/tutorials/accounting-fields).

This article covers:

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
- [Selecting a product assortment](#selecting-a-product-assortment)
- [Accounting fields](#accounting-fields)

## Viewing profile information

The **Profile** page displays basic information about the contract, including its name, email, and creation date. This information is not editable.

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Profile.**
2. View the details in the **Details** section.

## Managing addresses

The **Addresses** page lists all addresses available for the organizational unit. Each address displays its name and type. The user can search, add, edit, and delete addresses from this page.

Beyond the street-level details, the user can associate **locations** and **recipients** with an address.

A **location** is a specific delivery point inside a site, such as a bay, department, or internal area. For example, the order is sent to the company address, but delivery is to Bay-3456.

**Recipients** are people registered with the buyer organization to receive orders at that address.

### Adding an address

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, click the **+** icon at the top of the screen.
3. In the **Add address** panel, you can choose an address from the ones previously registered for your organization. If there is no registered address yet, or you want to save a new address, complete the information in the following tabs:
    - In the **Details** tab, fill in the address fields:
        - **Country:** Select the country.
        - **Address Name:** Enter a name to identify the address.
        - **Street Address:** Enter the street address.
        - **Apt, Suite, Building (optional):** Enter additional address details if needed.
        - **City:** Enter the city.
        - **State:** Select the state.
        - **Postal Code:** Enter the postal code.
        - **Address Type:** Select the address type.
    - In the **Locations** tab, optionally add locations associated with this address. Click `Add Location` to add more locations.
    - In the **Recipients** tab, optionally add recipients for this address. Click `Add recipient` to add more recipients, each with a **Name** and **Phone Number.**
4. Click `Add`.

### Editing an address

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, in the corresponding row, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu icon and select one of the available actions:
    - `Open` — View the address details.
    - `Edit details` — Edit the address information.
    - `Add Locations` — Add locations to the address.
    - `Add Recipients` — Add recipients to the address.
    - `Set as default` — Set the address as the default for the unit.
    - `Remove from Unit` — Remove the address from the current organizational unit without deleting it.
3. Make the desired changes.
4. Click `Save`.

### Deleting an address

> ❗ Deleting an address is permanent and can't be undone. The address may be used by multiple organizational units. Deleting it removes the address and all its data from all associated units, though usage history is kept for audit.

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Addresses.**
2. On the **Addresses** page, in the corresponding row, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu icon > `Delete`.
3. In the confirmation modal, type the address name to confirm.
4. Click `Remove`.

## Managing payment methods

The **Payment methods** page lists the payment methods currently available for the organizational unit. The user can add methods from the options available to the organizational unit or remove existing ones.

### Adding a payment method

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Payment methods.**
2. On the **Payment Methods** page, click the **+** icon at the top of the screen.
3. In the **Add payment methods** panel, select the payment methods to add by checking the corresponding checkboxes.
4. Click `Add`.

The selected payment methods will be listed on the **Payment Methods** page and available to users in this unit during checkout.

### Removing a payment method

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Payment methods.**
2. On the **Payment Methods** page, click the **−** icon next to the payment method to remove.
3. In the confirmation modal, click `Remove`.

> ⚠️ Removing a payment method prevents users in this organizational unit from accessing it during checkout.

## Managing credit cards

The **Credit Cards** page displays all cards available to the organizational unit. Each card shows its nickname and an option to enable or disable it. Users can add new cards, edit existing card details, and remove cards.

Credit cards associated with the contract are shared with the organizational unit, but can be restricted with [scopes](https://help.vtex.com/en/docs/tutorials/scopes-overview). During checkout, buyers select a card by its nickname from the cards linked to the contract and available to that unit.

### Adding a credit card

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit Cards** page, click the **+** icon.
3. In the **Add Credit Card** panel, complete the following fields:
    - **Card nickname:** Enter a name to identify the card.
    - In **Card details:**
        - **Card number:** Enter the card number.
        - **Exp MM/YY:** Enter the expiration date.
        - **CVV:** Enter the security code.
        - **Cardholder name:** Enter the name on the card.
    - In **Billing address:**
        - **Address line 1:** Enter the billing address.
        - **Address line 2 (optional):** Enter additional address details.
        - **City:** Enter the city.
        - **State:** Select the state.
4. Click `Add`.

### Editing a credit card

Once you add a credit card, you can only edit its nickname.

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit Cards** page, in the corresponding row, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu icon > `Edit`.
3. In the **Edit Credit Card** panel, update the card nickname.
4. Click `Save`.

### Deleting a credit card

> ❗ Deleting a credit card is permanent and can't be undone.

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Credit cards.**
2. On the **Credit Cards** page, in the corresponding row, click the <i class="fas fa-ellipsis-v" aria-hidden="true"></i> menu icon > `Delete`.
3. In the confirmation modal, click `Delete`.

## Selecting a product assortment

The **Product assortments** page allows the user to select which product assortment users in the organizational unit can access. Each organizational unit can have one active assortment at a time.

A **product assortment** is the set of products available to buyers in that unit. Different organizations or units can use different assortments when your business rules call for separate catalogs or selections.

1. In the [Organization Account home screen](https://help.vtex.com/en/docs/tutorials/organization-account#accessing-the-organization-account), in the **Contract** section, click **Product assortment.**
2. On the **Product assortments** page, select the desired assortment from the list by clicking its radio button.

The selection is saved automatically.

## Accounting fields

[Accounting fields](https://help.vtex.com/en/docs/tutorials/accounting-fields) configured by the buyer organization appear as individual menu items in the **Contract** section of the sidebar. These fields collect additional information during checkout, such as cost centers, PO numbers, or department codes.

To learn how to add or manage accounting fields, see [Adding or editing accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields).
