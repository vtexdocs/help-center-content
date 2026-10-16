---
title: 'Accounting fields'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: en
slugEN: accounting-fields
---

**Accounting fields** allow you to collect additional purchase information in [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), such as cost center, internal purchase order (PO) number, and other control information. The platform associates this information with the order, helping the company standardize data, apply internal rules, and facilitate audits.

> ⚠️ This feature is only available for stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available to selected accounts.

## Accounting field uses

Accounting fields allow your company to:

- Standardize purchase information between [organizational units](https://help.vtex.com/en/docs/tutorials/organizational-units) and buyers.
- Require mandatory information before completing an order.
- Reduce input errors during checkout.
- Improve traceability, auditing, and compliance.

## Roles

Accounting fields work with two roles:

- **Admin**: Creates the required fields for the company and defines where each field displays on the checkout page.
- **Buyer**: Completes the fields during purchase.

## Applying accounting fields

The admin can configure each field to be applied at one of the following levels:

- **Order**: Applies to the entire purchase.
- **Item**: Applies to each product in the cart.
- **Address**: Applies to delivery or billing information.

## Accounting field types

The input requirement for an accounting field depends on how the admin creates the field: through the organization account or through the [Custom Fields API](https://developers.vtex.com/docs/api-reference/custom-fields-api).

### Fields created in the organization account

Fields created in the organization account interface are list fields by default. At checkout, the buyer selects one of the predefined values, managed by the admin on the field details page.

When creating the field, the admin can also check the **Enable open text input field** option to allow buyers to enter a value manually at checkout, in addition to selecting a value from the list.

### Fields created via API

When creating an accounting field, the admin must choose one of the following types:

- **Text (`text`):** Accepts any character string, with no format validation. If the field is set as required, the platform only checks whether the buyer entered a value.
- **Number (`number`):** Only accepts numbers. Use this type when the value must follow a strictly numeric format.
- **Option (`option`):** Displays a list of predefined values for selection, allowing data standardization. It's the only type created via API that can have a default value per organizational unit.

## Configuring fields

When creating a field, the admin defines the following:

- Field label.
- Level (order or item).
- Required setting (required or optional).
- Open text at checkout (only fields created in the organization account).
- Type (`text`, `number`, or `option`).
- Enabled or disabled status (only fields created via API).

The admin can create and permanently delete accounting fields directly in the organization account, under **Contracts > [contract] > Accounting fields**, in addition to managing the settings and values of each field. For instructions, go to [Add or edit accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields).

## Default values at checkout

To reduce manual input and avoid inconsistencies, you can configure default values per organizational unit.

You can set the following as defaults:

- Address.
- Card.
- Accounting fields with predefined values: list fields created in the Organization Account and fields of type `option` created via API.

For fields created in the Organization Account, you define the default value on the field details page, using the **Set as default** option in the value's options menu.

> ℹ️ For more information on how to add or configure accounting fields, see [Add or edit accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields).

## Budget allocations to accounting fields

You can use accounting fields as linked entities in budget allocations, distributing a budget among the values of a field. For example, you can assign a spending threshold to each cost center. This allows the organization to control spending based on accounting information collected at checkout. For more information, go to [Budgets overview](https://help.vtex.com/en/docs/tutorials/budgets-overview).

## Results for admins

- Consistent information across organizational units.
- Better application of internal purchase rules.
- Increased security for reports and audits.

## Results for buyers

- Fields display at checkout with clear instructions.
- Checkout automatically fills in the default values configured for the organizational unit.
- Orders are completed with less rework and lower risk of error.

## Usage examples

### Requiring mandatory information on all orders

- **Scenario:** The company needs to record the **cost center** and **PO number** on all orders.
- **Configuration:** Create required fields at the `order` level (`option` for cost center and `text` or `number` for PO number).
- **Result:** The order can only be completed once all information is provided, ensuring compliance.

### Autocompleting checkout fields by organizational unit

- **Scenario:** The company wants to reduce errors and purchase time across multiple units.
- **Configuration:** Set default values by organizational unit for address, card, and accounting fields with predefined values.
- **Result:** The checkout is autofilled after login, reducing effort.

### Classifying projects or activities

- **Scenario:** The company needs to link each purchased item to a project or activity.
- **Configuration:** Create an `option` field at the `item` level with a list of active projects or activities.
- **Result:** Each item is linked to a project, facilitating allocation and cost control.

### Differentiating purchases for resale and internal consumption

- **Scenario:** The company needs to identify the purchase type on the order.
- **Configuration:** Create an `option` field at the `order` level with predefined values (resale/internal consumption).
- **Result:** Allows the company to segment orders and apply fiscal or business rules.

### Segmenting for management reports

- **Scenario:** The finance team needs to classify orders by expense type.
- **Configuration:** Create standardized `option` fields at the order level (example: CAPEX, OPEX).
- **Result:** The finance team can filter reports without manual post-processing.

### Requiring explanation for specific purchases

- **Scenario:** The company requires explanation for sensitive purchases or purchases above a certain amount.
- **Configuration:** Create a required `text` field at the order level.
- **Result:** The platform records the explanation on the order for review or auditing.

### Standardizing and centralizing governance

- **Scenario:** The company needs to avoid input variations.
- **Configuration:** Use `option` fields instead of open text and set default values per organizational unit.
- **Result:** More consistent and auditable information across the entire operation.

### Controlling compliance in regulated companies

- **Scenario:** The company needs to record regulatory codes per item.
- **Configuration:** Create a required field at the item level (for example, of type `text` or `option`).
- **Result:** Each purchased item includes the information required for regulatory audits.
