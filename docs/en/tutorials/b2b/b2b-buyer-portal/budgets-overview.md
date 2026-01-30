---
title: 'Budgets overview'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2025-01-30T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: en
---

# Budgets overview

Budget management allows B2B organizations to plan, allocate, and track their expenses in a structured way. The feature provides operations to create and manage budgets and allocations, record financial movements such as transactions and reservations, and track all activity through statements, ensuring transparency, traceability, and control over buyer spending.

A budget can be subdivided into multiple allocations, and all value movements — such as debits, credits, and refunds — update these balances according to their rules. The feature is designed to support flows in which budgets and allocations are created, balances are consumed by transactions or temporary reservations, and statements are later used to reconcile financial activity over time.

>⚠️ The Budgets feature is only available for B2B Buyer Portal. Authorization from the Commerce Engineer of the account is required for usage.

## Key concepts

### Budget

Represents a financial amount used to control expenses within a specific business context, such as an organizational unit or a cost center. It defines:

* Total available amount
* The period during which this amount can be used, defined by a start date and, optionally, an end date.

The budget balance is updated as allocations and transactions change their values.

### Allocations

Allocations are a subdivision of a budget, allowing the total amount to be distributed among different entities, such as users, addresses, or accounting dimensions (for example, cost centers). Any change to the balance in an allocation is automatically reflected in the budget to which it belongs.

### Transactions

Transactions are definitive financial movements that adjust allocation and budget balances. They're recorded in statements and use a type field to indicate the transaction effect:

* **DEBIT**: Subtracts amounts
* **CREDIT**: Adds amounts associated with refunds and cancellations.

### Reservations

Reservations temporarily block an amount from an allocation without consuming it immediately. Later, this reservation can:

* Be confirmed, generating a corresponding **transaction**.
* Be canceled, releasing the reserved amount without generating any entry in the **statements**.

### Refunds and transaction types

Transactions can't be deleted. When it's necessary to reverse a transaction, a **refund** is created, which is represented as a new **transaction** of the type CREDIT. In the statements, both the original DEBIT transaction and the CREDIT refund are reflected, resulting in a net-zero effect on the budget or allocation balance.

### Statements

Statements are lists of financial records for a budget or allocation that show the history of transactions over time. They display information such as identifiers, amounts, dates, types, and context, allowing audit and reconciliation of financial operations.

### Context

The context identifies where a budget applies and is represented by the fields contextType and contextId. In the B2B context, the context type is always UNIT, while the contextId identifies the specific unit unitId where the budget is being created.

### Linked entity and notification settings

Allocations can be associated with a **linked entity**, which describes what the allocation is linked to, such as a user, an address, or an accounting field like a cost center. Budgets and allocations can also be configured with **notification settings**, allowing alerts to be defined based on consumption thresholds or percentages.

## Use cases

### Controlling B2B expenses by unit

A B2B organization may need to limit how much each business unit can spend within a given period. You can create budgets associated with a **contextType UNIT** to centrally manage consumption.

### Tracking and auditing the use of budgets

Financial or operational teams often need visibility into how budgets are used over time. You can record all consumed amounts as **transactions** and retrieve detailed **statements** for budgets and allocations, supporting internal audits, reconciliation with external financial systems, and periodic reporting.

### Temporary reservations and approval flows

Some business flows require that amounts be reserved before final approval or order completion. You can create reservations that temporarily block an amount in an allocation. Depending on the outcome of the process, this reservation can be confirmed (generating a transaction) or canceled (releasing the amount).

### Managing refunds and balance corrections

When orders are canceled or adjustments are needed, it may be necessary to return amounts to an allocation. Instead of removing an existing transaction, a refund is issued and recorded as a **CREDIT** transaction, and the amount is added back to the balance. Both the original debit and the refund credit remain visible in the statements, ensuring transparency.

### Monitoring consumption with notifications

Budgets can be configured with notifications based on value thresholds or usage percentages. This allows alerts to be triggered when consumption approaches or reaches critical levels, helping teams respond before budgets are exhausted and adjust allocations or spending behavior accordingly.
