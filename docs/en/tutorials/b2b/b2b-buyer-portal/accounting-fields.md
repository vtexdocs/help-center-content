---
title: 'Accounting fields'
createdAt: '2026-02-09T10:00:00.000Z'
updatedAt: '2026-03-16T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
locale: en
slugEN: accounting-fields
---

**Accounting fields** allow you to collect additional information from purchases in the **B2B Buyer Portal**, such as **cost center**, **internal purchase order (PO) number**, and other control information. This information is associated with the order, helping the company standardize information, apply internal rules, and facilitate audits.

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

## Using accounting fields

Accounting fields allow your company to:

- Standardize purchase information between organizational units and buyers.
- Require mandatory information before completing the order.
- Reduce input errors during checkout.
- Improve traceability, auditing, and compliance.

## Roles

Accounting fields involve two roles:

- **Admin**: Creates the required fields for the company and defines where each field displays in the checkout.
- **Buyer**: Completes the fields during purchase.

## Applying fields

Fields can be configured at different levels:

- **Order**: Applies to the entire purchase.
- **Item**: Applies to each product in the cart.
- **Address**: Applies to shipping or billing information.

## Field types

When creating an accounting field, the admin must choose one of the following types:

### Text (`text`)

Allows buyers to enter any value at checkout.

- Accepts any sequence of characters.
- Doesn't perform any format validation besides checking if it's required (when enabled).

### Number (`number`)

Allows restricting input to numeric values.

- Only accepts numbers.
- May be used when the value must follow a strictly numeric format.

### Option (`option`)

Displays a list of predefined values for selection.

- The buyer must select one of the available options.
- Allows for data standardization.
- It's the only type that can have a **default value per organizational unit**.

## Configuring fields

When creating a field, the admin defines the following:

- Field name.
- Type (`text`, `number`, or `option`).
- Application level (order, item, or address).
- Required setting (required or optional).
- Status (enabled or disabled).

## Using default values at checkout

To reduce manual input and avoid inconsistencies, you can configure default values per **organizational unit.**

You can set the following as defaults:

- Address.
- Card.
- Accounting fields of type `option`.

> ⚠️ Only fields of type `option` can be set as a default value.

> ℹ️ For more information on how to add or configure accounting fields, see [Add or edit accounting fields](https://help.vtex.com/en/docs/tutorials/adding-or-editing-accounting-fields).

## Results for admins

- Consistent information across organizational units.
- Better application of internal purchase rules.
- Increased security for reports and audits.

## Results for buyers

- Checkout fields display with clear instructions.
- Some values may be autofilled (when configured by the organizational unit).
- Orders are completed with less rework and lower risk of error.

## Usage examples

### Requiring mandatory information on all orders

- **Scenario:** The company needs to record the **cost center** and **PO number** on all orders.
- **Configuration:** Create required fields at the `order` level (`option` for cost center and `text` or `number` for PO number).
- **Result:** The order can only be completed once all information is provided, ensuring compliance.

### Autofilling checkout fields by organizational unit

- **Scenario:** The company wants to reduce errors and purchase time across multiple units.
- **Configuration:** Set default values by **organizational unit** for address, card, and fields of type `option`.
- **Result:** The checkout is autofilled after login, reducing effort.

### Classifying projects or activities

- **Scenario:** The company needs to link each purchased item to a project or activity.
- **Configuration:** Create an `option` field at the `item` level with a list of active projects or activities.
- **Result:** Each item is linked to a project, facilitating allocation and cost control.

### Differentiating purchases for resale and internal consumption

- **Scenario:** The company needs to identify the purchase type on the order.
- **Configuration:** Create an `option` field at the `order` level with predefined values (resale/internal consumption).
- **Result:** Allows orders to be segmented and fiscal or commercial rules to be applied.

### Segmenting for management reports

- **Scenario:** The finance team needs to classify orders by expense type.
- **Configuration:** Create standardized `option` fields at the `order` level (example: CAPEX, OPEX).
- **Result:** Reports can be filtered without manual post-processing.

### Requiring justification for specific purchases

- **Scenario:** The company requires justification for sensitive purchases or those above a certain amount.
- **Configuration:** Create a required `text` field at the `order` level.
- **Result:** The justification is recorded on the order for review or auditing.

### Standardizing and centralizing governance

- **Scenario:** The company needs to avoid input variations.
- **Configuration:** Use `option` fields instead of free text and define values per **organizational unit**.
- **Result:** More consistent and auditable information throughout the operation.

### Controlling compliance for regulated companies

- **Scenario:** The company needs to record regulatory codes per item.
- **Configuration:** Create a required field at the `item` level (for example, of type `text` or `option`).
- **Result:** Each purchased item includes the necessary information for regulatory audits.