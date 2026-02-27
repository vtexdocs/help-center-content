---
title: 'Add or edit budgets'
createdAt: '2025-02-27T10:00:00.000Z'
updatedAt: '2025-02-27T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: add-or-edit-budgets
locale: en
---

Budgets allow you to set and track spending limits centrally. This feature helps control the use of funds over time and organize budgets for different business contexts. 

> ⚠️ This feature is only available for stores using B2B Buyer Portal, which is currently available to select accounts.

It also allows you to create budgets, configure consumption notifications, set allocations, and control when and how these amounts are available at checkout.

> ℹ️ Learn more about [Budgets](https://help.vtex.com/en/docs/tutorials/budgets-overview)

On this page, you can learn about the following actions:

* [Opening the sidebar for the account and organizational unit](#opening-the-sidebar-for-the-account-and-organizational-unit)  
* [Creating a budget](#creating-a-budget)  
* [Configuring consumption notifications](#configuring-consumption-notifications)  
* [Configuring budget allocations](#configuring-budget-allocations)  
* [Editing a budget](#editing-a-budget)  
* [Deleting budget allocations](#deleting-budget-allocations)

## Opening the sidebar for the account and organizational unit

The sidebar centralizes information about the user's account and the associated organizational unit. To access it, follow the steps below:

1. In the upper right corner, click Company.  
2. The sidebar displays the account and organizational unit information.  
3. Click **Budgets**.

## Creating a budget

To create a new budget for the organizational unit, access the budget list and complete the following required information:

1. On the **Budgets** page, click the **`+`** button in the upper right corner.     
2. In the Add new budget side menu, complete the following fields:    
    * **Name:** Enter the name of the budget.  
    * **Amount:** Enter the total amount of the budget.  
    * **Start date:** Enter the effective start date.  
    * **End date:** Enter the effective end date.    
3. To configure the automatic renewal of the budget, toggle the Renew this budget amount and period upon expiration switch.  
4. To configure consumption notifications, toggle the Notifications switch.  
5. Click **Continue to go to the next step of the flow**.   
6. In the **Add budget allocations** step, choose one of the options below:  
    * To add allocations immediately, select an allocation type and click Add.  
    * To skip allocation configuration at this point, click Skip.

   

After finishing the flow, the new budget appears in the budget list.

> ⚠️ If you click Skip in the allocation step, the budget is created, but it's not available for use until at least one allocation is added.

## Configuring consumption notifications

To configure notifications that alert users when the budget consumption reaches defined limits, follow the steps below:

1. In the Add new budget side menu, toggle the Notifications switch to enable sending consumption notifications.
2. In the Notifications section, adjust the consumption threshold using the `+` and `–` buttons.
3. In the same section, check the values displayed in the Consumed and Remaining columns, which update automatically based on the configured threshold.
4. To add a new consumption threshold, click Add threshold.
    * You can add up to five thresholds per budget.
5. Click Add users and select the users who will receive the notifications.
6. To remove a consumption threshold or a user, click the corresponding `–` icon.
7. Click Continue to save.

> ⚠️ To receive consumption notifications, you must add at least one user.

## Configuring budget allocations

Allocations define the contexts in which the budget can be used during checkout. To add allocations to a budget, follow the steps below:

1. On the Add budget allocations page, open the allocation type dropdown.
2. Select the allocation type that defines how the budget will be applied:
    * **Users**: Applies the budget to specific users.
    * **Shipping addresses**: Applies the budget to specific shipping addresses.
    * **PO numbers**: Applies the budget to purchase order numbers.
    * **Cost centers**: Applies the budget to cost centers.
    * **Releases**: Applies the budget to specific releases.
3. Click `Add` to confirm the allocation and proceed.
4. To complete the budget creation without configuring allocations, click `Skip`.

## Editing a budget

After creating a budget, you can view its details and perform management actions. To access and manage a budget, follow the steps below:

1. On the **Budgets** page, find the desired budget in the list.
2. Click the budget name to access its details page.
3. On the budget details page, check the following:
    * **Remaining balance**: Displays the available balance.
    * **Settings**: Displays the general settings.
    * **Notifications**: Displays the configured notification rules.
    * **Allocations**: Displays the allocations associated with the budget.
4. In the **Settings** section, click Edit to edit the general settings.
5. In the **Notifications** section, click Edit to edit notifications.
6. In the Allocations section, click Add to add new allocations
7. Click the trash icon to delete an existing allocation.

## Deleting budget allocations

Deleting allocations prevents a budget from being applied to certain contexts during checkout. To delete allocations associated with a budget, follow the steps below:

1. On the Budgets page, find the desired budget in the list.
2. Click the budget name to access the Budget details.
3. In the Allocations section, find the allocation you want to delete.
4. Click the trash icon at the end of the allocation row.
5. If requested, confirm the deletion.

After deleting, the allocation is no longer linked to the budget.

> ⚠️ If all allocations are deleted, the budget won't be available at checkout until a new allocation is added.

