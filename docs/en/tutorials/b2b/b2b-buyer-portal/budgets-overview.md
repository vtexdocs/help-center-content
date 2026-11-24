---
title: 'Budgets overview'
createdAt: '2025-01-30T10:00:00.000Z'
updatedAt: '2026-08-28T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: budgets-overview
locale: en
---

Budget management allows B2B organizations to plan, allocate, and track their expenses in a structured way. It allows creating and managing budgets and allocations, recording financial movements such as transactions and reservations, and tracking all activity through statements, ensuring transparency, traceability, and control over buyer spending.

You can subdivide a budget into multiple allocations, and all transaction movements — such as debits, credits, and refunds — update these balances based on their rules. The feature supports flows in which organizations create budgets and allocations, balances are consumed by transactions or temporary reservations, and teams later use statements to reconcile financial activity over time.

> ⚠️ This feature is only available for stores using [B2B Buyer Portal](https://help.vtex.com/en/docs/tutorials/b2b-buyer-portal), which is currently available to selected accounts.

## Key concepts

### Budget

Represents a financial amount used to control expenses within a specific business context, such as an organizational unit or a cost center. It defines:

* Total available amount
* The period during which this amount can be used, defined by a start date and, optionally, an end date.

Allocations and transactions update the budget balance as their values change.

### Allocations

Allocations are a subdivision of a budget, allowing the total amount to be distributed among different entities, such as users, addresses, or accounting dimensions (for example, cost centers). Any change to the balance in an allocation automatically updates the budget it belongs to.

### Transactions

Transactions are permanent financial movements that adjust allocation and budget balances. The platform records them in statements, and each transaction uses a type field to indicate its effect:

* **DEBIT**: Subtracts amounts from the balance.
* **CREDIT**: Adds amounts to the balance (for example, refunds and cancellations).

### Reservations

Reservations temporarily block an amount from an allocation without consuming it immediately. Later, you can:

* Confirm the reservation, generating a corresponding **transaction**.
* Cancel the reservation, releasing the reserved amount without generating any entry in the **statements**.

### Refunds and transaction types

You can't delete transactions. To reverse a transaction, you need to create a **refund**, which the platform represents as a new **transaction** of type CREDIT. The statements reflect both the original DEBIT transaction and the CREDIT refund, resulting in a net-zero effect on the budget or allocation balance.

### Statements

Statements are lists of financial records for a budget or allocation that show the transaction history over time. They display information such as identifiers, values, dates, types, and context, which allows auditing and reconciling financial operations.

### Context

The context identifies where a budget applies. The `contextType` and `contextId` fields represent it. In the B2B context, `contextType` is always `UNIT`, while `contextId` identifies the specific unit (`unitId`) where you create the budget.

### Linked entity and notification settings

You can associate allocations with a **linked entity**, which describes the element the allocation is linked to, such as a user, an address, or an accounting field (example: cost center). You can also configure budgets and allocations with **notification settings** to define alerts based on consumption thresholds or percentages.

## Use cases

### Controlling B2B expenses by unit

A B2B organization may need to limit how much each business unit can spend within a given period. You can create budgets associated with the `UNIT` context type (`contextType`) to manage consumption centrally.

### Tracking and auditing budget use

Financial or operational teams often need visibility into how budgets are used over time. You can record all consumed amounts as **transactions** and retrieve detailed **statements** for budgets and allocations, supporting internal audits, reconciliation with external financial systems, and periodic reporting.

### Temporary reservations and approval flows

Some business flows require that amounts be reserved before final approval or order completion. You can create reservations that temporarily block an amount in an allocation. Depending on the outcome of the process, you can confirm the reservation (generating a transaction) or cancel it (releasing the amount).

### Managing refunds and balance corrections

When orders are canceled or adjustments are needed, you may need to return funds to an allocation. Instead of removing an existing transaction, you can issue a refund, which the platform records as a **CREDIT** transaction, adding the amount back to the balance. Both the original debit and the refund credit remain visible in the statements, ensuring transparency.

### Monitoring consumption with notifications

You can configure budgets with notifications based on value thresholds or usage percentages. This triggers alerts when consumption approaches or reaches critical levels, helping teams respond and adjust allocations or spending behavior before budgets run out.
