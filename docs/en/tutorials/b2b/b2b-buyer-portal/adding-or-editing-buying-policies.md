---
title: 'Adding or editing buying policies'
createdAt: '2026-02-27T10:00:00.000Z'
updatedAt: '2026-02-06T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-or-editing-buying-policies
locale: en
---

> ⚠️ The **Buying policies** feature is only available for the **B2B Buyer Portal**.

[Buying policies](https://help.vtex.com/en/docs/tutorials/buying-policies) is a feature that allows users from a buyer organization to configure rules to automatically authorize or deny orders. The dynamic mechanisms of this solution help increase the organization's governance and promote compliance with current buying policies.

In this guide, you'll learn how to manage buying policies through the following sections:

- Adding a buying policy
- Viewing policy details
- Editing a buying policy
- Deleting a buying policy

> ⚠️ To configure buying policies, the user's [Storefront permissions](https://developers.vtex.com/docs/guides/storefront-permissions) role must have the `ManageBuyingPolicies` resource. To authorize orders, the `ApproveOrders` resource is required.

## Adding a buying policy

1. On the organizational unit page, in the **Finance and compliance** section, click `Buying policies`.

   ![buying_policies_image_initial_org_account_page](link)

2. On the **Buying policies** page, click the `+` icon at the top of the screen to add a new buying policy.

3. In the **Add new buying policy** modal, complete the following required fields:

   - In **Basic information**, set the name and description for the buying policy that will appear at checkout for buyers:
     - **Name:** Enter the name of the buying policy.
     - **Description:** Enter a brief explanation of how the policy works. A clear description helps users understand why an order was denied or requires manual approval.
   - In **Criteria**, set the criteria that will trigger the buying policy. To do this, complete the field with an expression in [JSONata](https://jsonata.org/) format, such as `score ≥ 10`. You can select a criterion and only edit the desired values (highlighted in purple):
     - **Set spending limit criteria:** Options to approve or deny orders based on the order amount. For example, if the order is greater than, less than, or equal to a certain amount.

     - **Set order field criteria:** Options to approve or deny orders based on order conditions. For example, if it has restricted items or a specific cost center.

   > ℹ️ The values used in the order approval criteria are centesimal, and the currency matches the one used in the order cart.

   - In **Action**, select which action will apply to orders that meet the criteria:
     - **Deny order:** The order will be denied.

     - **Bypass all buying policies:** The order will be automatically approved, regardless of the defined criteria.

     - **Sequential workflow:** The order must be manually approved or denied by an authorized user. For this option, you must enter the name of an organizational unit so that its users can review the order.
     > ⚠️ You can set a hierarchy of up to five organizational units, with the fifth level being the last to review the order. Any level can deny the order, but final approval requires authorization from all levels.

4. To save the settings, click `Add`.

Once finished, you'll see the confirmation message _"Buying policy created successfully"_.

## Viewing policy details

To view the details of a policy, on the **Buying policies** page, click the buying policy name. Alternatively, in the corresponding row, click the menu icon > `Open`. You'll see an image like the following:

![buying_policies_image_1](link)

## Editing a buying policy

1. On the organizational unit page, in the **Finance and compliance** section, click `Buying policies`.
2. On the **Buying policies** screen, in the corresponding row, click the menu icon > `Edit`. Alternatively, on the buying policy [details page](#viewing-policy-details), click `Edit`.
3. Make the desired changes.
4. Click `Save`.

## Removing a buying policy

> ❗ Removing a buying policy is permanent and can't be undone. Settings are deleted, but the buying policy use history remains stored for reference.

1. On the organizational unit page, in the **Finance and compliance** section, click `Buying policies`.
2. On the **Buying policies** page, in the corresponding row, click the menu icon > `Delete`. Alternatively, on the buying policy [details page](#viewing-policy-details), click menu > `Delete`.
3. In the modal, enter the name of the buying policy you want to delete.
4. Click `Delete`.

Once finished, you'll see the confirmation message _"Buying policy deleted successfully"_. The policy will no longer be listed when you return to the main page.

> ℹ️ To manage order approval rules via API, see the [Buying Policies API](https://developers.vtex.com/docs/api-reference/buying-policies-api) and the developer guide [Buying Policies](https://developers.vtex.com/docs/guides/buying-policies).