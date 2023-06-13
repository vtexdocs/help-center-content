---
title: VTEX DO
id: 7KMbRL4OslN8DTX9oiuCiu
status: PUBLISHED
createdAt: 2022-04-04T21:12:30.592Z
updatedAt: 2023-03-29T14:50:36.206Z
publishedAt: 2023-03-29T14:50:36.206Z
firstPublishedAt: 2022-04-04T21:58:08.236Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: vtex-do-interface
legacySlug: vtex-do-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

VTEX DO manages tasks automatically created by the VTEX Admin that require manual action by the ecommerce team. To access it, log in to your VTEX Admin, go to **Orders > [All orders](https://help.vtex.com/en/tutorial/lista-de-pedidos--2QTduKHAJMFIZ3BAsi6Pi)**, and click on the inbox icon in the bottom right corner of the page. By clicking on the icon, a modal will display the list of tasks related to the store's orders. 

![VTEX Do overview EN](//images.ctfassets.net/alneenqid6w5/4FzyUh5uqhzXKfbw9MJXsQ/0b341bae7a9f462483ddefb3ad044e14/VTEX_Do_overview_EN.gif)

<div class = "alert alert-info">
Only users with the <a href = "https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access">OMS - Full Access</a> registered as a  <a href = "https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc">role</a> can perform tasks through VTEX DO.
</div>

The tasks are listed in two tabs:

* **All:** all tasks related to orders from the store's account.  
* **Mine:** tasks assigned to the user logged in to the account.   

The number displayed next to the tab titles corresponds to the tasks in each category ("All" and "Mine"), which includes open and closed tasks. Scrolling the bar in each tab loads new tasks in the list.

To exit VTEX DO, simply click the `X` icon or anywhere on the Order Listing page, outside the modal.

## Searching and filtering tasks

There is a search bar where you can search for a task by its name, by the name of the user assigned to the task, or by comments. 

The filter selector allows you to select a single option or combine filters. To apply filters, click on `Filter`, select the desired option and click outside the filter box, inside the modal. You can filter the tasks by:

* Only open tasks  
* Only not assigned  
* Catalog  
* Commercial  
* Infrastructure  
* Backoffice  
* Front-end  
* Marketplace  

## Tasks

The tasks listed have information that characterizes them, including:  

* Message (described in more detail in the table below).  
* Order ID.   
* Payment ID.    
* User to whom the task is assigned.   
* Tags used to filter the list.  

To manage VTEX DO in an organized way, we suggest [marking a task as Completed](#closing-tasks) only once it is finished, to avoid working on it again or wasting time when viewing the task list in the future. 

An exception to this recommendation is when the retailer decides to finalize a task even though they have not accepted it, for example, when an order cancellation request is reversed by Customer Service. 

Tasks managed through VTEX DO can include messages from all VTEX systems. Some examples of messages are:

<table>
  <tr>
   <td><strong>Message</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Action</strong>
   </td>
  </tr>
  <tr>
   <td>Refunding a payment
   </td>
   <td>A request to refund a payment has been created.
   </td>
   <td>Go to <strong>Task details</strong> and click <strong>View details</strong> > authorize or cancel the payment refund on the <strong>Transaction details</strong> page.
   </td>
  </tr>
  <tr>
   <td>Authorizing an order with price divergence
   </td>
   <td>The order was generated with an amount different from the configured <a href="https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW">price divergence rule</a>.
   </td>
   <td>Go to <strong>Task details</strong> and click <strong>View details</strong> > authorize or cancel the order on the <strong>Order details</strong> page.
   </td>
  </tr>
  <tr>
   <td>Cancellation requested
   </td>
   <td>The buyer requested the cancellation of their order. We suggest that your store's Customer Service Center contact the customer to offer support before canceling the order.
   </td>
   <td>Go to <strong>Task details</strong> and click <strong>View details</strong> > authorize or cancel the order on the <strong>Order details</strong> page.
   </td>
  </tr>
  <tr>
   <td>An error occurred while generating the recurring order
   </td>
   <td><a href="https://help.vtex.com/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj">Subscription</a> orders are often not authorized due to problems with the buyer's credit card. We suggest that your store's Customer Service Center contact the customer to offer support.
   </td>
   <td>Go to <strong>Task details</strong> and click <strong>View details</strong> > authorize or cancel the order on the <strong>Order details</strong> page.
   </td>
  </tr>
  <tr>
   <td>Price lower than minimum markup
   </td>
   <td>The purchase amount is lower than the markup, or the minimum markup on the <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/P99EjtrlRHk92Q8qDPq29">SKU base price</a>.
   </td>
   <td>Go to <strong>Task details</strong> and click <strong>View details</strong> > authorize or cancel the order on the <strong>Order details</strong> page.
   </td>
</table>

## Task details

![VTEX Do details EN](//images.ctfassets.net/alneenqid6w5/mPby3BuhZYAwGyFuII8mr/9bb5a8bb66f10645c751d11ae95b4ee0/VTEX_Do_details_EN.jpg)

By clicking on the name of a task in the list, you are redirected to the task details modal, which displays more information about the task and actions to solve it. The following fields are displayed:

* **Assigned to:** if the task has no assignee, click `Assign` and search for a user, or click `Assign to me` or `Reassign`.  
* **Tags:** markers automatically associated with the task which are used to filter the list and provide more details about the context, status, and origin of the task. You cannot select your own tags; they are created by the VTEX Admin system.  
* **Description:** text including more information about the task.   
* **Payment ID/Order ID:** If the task is related to an order, the field will display the order ID. If it is related to a payment, the field will display the payment ID.  
* **Created on:** date and time when the task was created.  

Buttons in the task details modal include:

* **View details:** by clicking this button, you will be redirected to the VTEX Admin page related to the task origin. For example, for tasks that require payment corrections, you will be redirected to the transaction details page. On this page, you can perform the task, as described.    
* **Close task/Reopen task:** clicking the `Close task` button will mark the task as closed, so we recommend clicking it after completing the necessary action to resolve the task. You can revert this action by clicking `Reopen task`. Closed tasks continue to appear in the VTEX DO list.    
* **Leave a comment:** this section allows you to add internal comments with remarks about the task. To do this, type in the text box and click `Send`.  

## Actions in VTEX DO

VTEX DO allows the user to perform actions such as: 

* Assigning tasks to someone (including themselves).  
* Marking tasks as done.  

See more details about the main actions below.   

### Assigning a task

In order for tasks to be solved quickly, it is important to assign a responsible person for each task. You can assign a task to any user with access to the store's OMS or to yourself. When you assign a task to yourself, it will become your responsibility, and it will be displayed in the tab **Mine**. If the user icon followed by an email or star icon is displayed in the task, it means that the task is assigned to someone. On the other hand, if these icons are not displayed, the task is not assigned to anyone.

To assign a task, follow the steps below.

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.  
2. Access VTEX DO by clicking on the **inbox icon** in the bottom right corner of the page.   
3. Select the desired task.   
4. Click `Assign to`.  
5. Select the user to whom you want to assign the task.  
    * To assign it to another person, search for a user or email and select the desired option.  
    * To assign it to yourself, click **Assign to me**.  

To change the assigned user:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.  
2. Access VTEX DO by clicking on the **inbox icon** in the bottom right corner of the page.   
3. Select the desired task.  
4. Click **Reassign**.  
5. Search for the user by name or email address.  
6. In the search results, click the desired user.  

To leave the task unassigned, in step 5 click **Remove**.   

### Closing tasks

To close a task:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.  
2. Access VTEX DO by clicking on the **inbox icon** in the bottom right corner of the page.   
3. Click the name of the desired task.   
4. Click **View details** to be redirected to the page related to the task origin.  
5. Perform the task as it is described.  
6. Return to VTEX DO on the **Task details** page.  
7. Click `Close task`.  

You can reopen a task that was improperly closed at any time. To do this, go to the **task details** page and click `Reopen task`. 
