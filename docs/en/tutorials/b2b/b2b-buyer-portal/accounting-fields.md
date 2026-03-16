---
title: 'Accounting fields'
createdAt: '2026-03-27T10:00:00.000Z'
updatedAt: '2026-03-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: en
slugEN: accounting-fields
---

Accounting fields let you collect additional information during purchase in the B2B Buyer Portal, such as cost center, internal order number (PO), and other control data. These values are associated with the order, helping the company standardize data, enforce internal rules, and support audits.

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

## What accounting fields are for

With accounting fields, your company can:

- Standardize purchase information across organizational units and buyers.
- Require mandatory data before order completion.
- Reduce checkout input errors.
- Improve traceability, auditing, and compliance.

## User profiles

There are two main profiles for accounting fields:
- **Administrator**: creates the fields required by the company and defines where each field appears in checkout.
- **Buyer**: fills the fields during the purchase flow.

## Field application levels

Fields can be configured at different levels:

- **Order**: applies to the whole purchase.
- **Item**: applies to specific products in the cart.
- **Address**: applies to shipping or billing information.

## Field types

When creating an accounting field, the administrator must choose one of the following types.

### Text (`text`)

Allows the buyer to enter a free-form value at checkout.

- Accepts any character sequence.
- No format validation beyond the required constraint (when configured).

### Number (`number`)

Accepts numeric values only.

- Only numbers are allowed.
- Use when the value must follow a strictly numeric format.

### Option (`option`)

Displays a list of pre-registered values for selection.

- The buyer must select one of the available options.
- Enables data standardization.
- This is the only type that can have a **default value per Organizational Unit**.

## Field settings

When creating a field, the administrator configures:

- Field name.
- Type (`text`, `number`, or `option`).
- Application level (order, item, or address).
- Requirement (required or optional).
- Status (enabled or disabled).

## Default values in checkout

To reduce manual input and avoid inconsistencies, you can configure default values by Organizational Unit.

You can set the following as defaults:

- Address.
- Card.
- Accounting fields of type `option`.

> ⚠️ Only fields of type `option` can be set as default values.

> ℹ️ For more information on how to add or configure accounting fields, see [Add or edit accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields)

## Impact for administrators

- Consistent data across organizational units.
- Better enforcement of internal purchasing rules.
- Improved reliability for reports and audits.

## Impact for buyers

- Fields appear in checkout with clear instructions.
- Some values can be prefilled (when configured by the Organizational Unit).
- Orders are completed with less rework and lower error risk.

## Usage examples

### Require mandatory information on all orders
- **Scenario:** the company must record cost center and PO on every order.
- **Configuration:** create required fields at the `order` level (`option` for cost center and `text` or `number` for PO).
- **Outcome:** orders can only be completed when the data is provided, ensuring compliance.

### Checkout prefilled by Organizational Unit (OU)
- **Scenario:** the company wants to reduce errors and purchase time across multiple units.
- **Configuration:** set default values per Organizational Unit for address, card, and `option` fields.
- **Outcome:** checkout appears prefilled after login, reducing rework.

### Project or activity classification
- **Scenario:** the company needs to associate each purchased item to a project or activity.
- **Configuration:** create an `option` field at the `item` level with the list of active projects or activities.
- **Outcome:** each item is linked to a project, simplifying cost allocation and control.

### Differentiate resale vs internal consumption purchases
- **Scenario:** the company needs to identify purchase type on the order.
- **Configuration:** create an `option` field at the `order` level with predefined values (Resale / Internal consumption).
- **Outcome:** enables order segmentation and application of fiscal or commercial rules.

### Segmentation for management reports
- **Scenario:** the finance team needs to classify orders by expense type.
- **Configuration:** create standardized `option` fields at the `order` level (e.g., CAPEX, OPEX).
- **Outcome:** reports can be filtered without manual post-processing.

### Mandatory justification for specific purchases
- **Scenario:** the company requires justification for sensitive purchases or purchases above a certain amount.
- **Configuration:** create a required `text` field at the `order` level.
- **Outcome:** justification is recorded on the order for review or audit.

### Centralized standardization and governance
- **Scenario:** the company needs to avoid variations in data entry.
- **Configuration:** use `option` fields instead of free text and define values per Organizational Unit.
- **Outcome:** more consistent and auditable data across the operation.

### Compliance control in regulated companies
- **Scenario:** the company needs to record regulatory codes per item.
- **Configuration:** create a required field at the `item` level (for example, `text` or `option`).
- **Outcome:** each purchased item includes the information needed for regulatory audits.
