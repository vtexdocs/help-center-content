---
title: 'VTEX Pick and Pack: Last Mile'
id: HN7WKV0xoq2ssVjsJlfzr
status: PUBLISHED
createdAt: 2023-04-10T16:01:14.613Z
updatedAt: 2023-04-20T15:46:42.209Z
publishedAt: 2023-04-20T15:46:42.209Z
firstPublishedAt: 2023-04-10T16:35:43.623Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: vtex-pick-and-pack-last-mile
locale: en
legacySlug: vtex-pick-and-pack-last-mile
subcategory: 7Kllu6CmeLNV3tYXlCFvOt
---

[VTEX Pick and Pack](https://content.vtex.com/en/pick-and-pack/) is a solution to streamline stores’ fulfillment processes by optimizing orders’ picking and packing, and the last-mile delivery. The solution is composed of the [VTEX Fulfillment](https://help.vtex.com/en/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA) and the **Last Mile** modules. 

With **Last Mile**, merchants have complete visibility of shipping and order tracking. The module has the following sections:

* [Shipping services](#shipping-services)
* [Settings](#settings)

<div class="alert alert-info">
To start using Last Mile, it is necessary to adjust the feature's Settings.
</div>

## Shipping services

When you access in your VTEX Admin, **Apps > Last Mile > Shipping services**, you find a page listing the store’s shipping services, which are the [services created](#create-shipping-service) for each delivery, as in the image below:

The following table contains a description of the columns:

|   Column   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   Carrier  | The <a href="https://help.vtex.com/tutorial/carries-on-vtex--7u9duMD5UQa2QQwukAWMcE">carrier</a> is the company responsible for delivering the packages to customers. The courier is the driver who makes the delivery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Service ID | Every shipping service has its own identification code that appears in this field, alongside its creation date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  Customer  | Name and address of the customer who made the purchase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   Item(s)  | Total number of items that will be delivered. If two packages have three items each, in this column you will see the number six.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  Deadline  | Limit date for the customer to receive the order.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   Status   | The Shipping service statuses are:<br>- Created: The shipping service has just been created. This is an internal status that validates the service data.<br>- Pending: This is the service first status, of when the system sends the information to the carrier and creates the service on the carrier’s side.<br>- Assigned: The carrier has assigned a courier for the task and the courier has accepted the shipping service.<br>- Canceled: The shipping service was canceled.<br>- Delivered: The order was delivered to the customer, whether it’s their address or a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).<br>- Incident: The carrier or courier reported an incident, a problem with the road, for example. The courier can [add a note](#field-templates-section) giving more details.<br>- On hold: The courier puts the shipping service on hold. That can happen for many reasons, a broken vehicle, for example. When it happens, the courier can give an [explanation note](#field-templates-section).<br>- On route: The courier has collected the package in the physical store or [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb), for example.<br>- Picked: The courier has collected the package.<br>- Returned: The customer couldn’t be reached or refused to receive the package, so the order was returned. |

You can perform the following actions in the **Shipping services**:

* [Search](#search)
* [Filter](#filter)
* [Create shipping service](#create-shipping-service)
* [View shipping service details](#view-shipping-service-details)

### Search

On the top of the page, there is a search box with the magnifier icon  <i class="fas fa-search"></i> in which you can search for shipping services using the following criteria:

* Service ID
* Order ID
* Customer name
* Customer email
* Carrier ID
* Carrier name
* Courier ID
* Courier name

### Filter

You can filter shipping services using different criteria, by clicking `Filters` and then clicking `+ Add Filter`. You will see the filter options below:

* **Status:** Shipping services [statuses](#view-shipping-service-details).  
* **Carrier:** Company responsible for delivering the package to the customer.  
* **Payment:** [Payment method](https://help.vtex.com/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) used by the customer, like a credit or a debit card.  
* **Store:** Which store is related to the shipping service.  

You can combine as many filters as you want. To do so, click **Filters > + Add Filter**, and then on the menu <i class="fas fa-ellipsis-v"></i> click `Duplicate`. If you wish to delete a filter, in the menu <i class="fas fa-ellipsis-v"></i> click `Delete`.

To remove all selected filters, click `Filters`, and then click `Clear filters`.

### Create shipping service

Shipping services can be [created automatically](#general-section) or manually by an [admin user](#users). The main difference is that when you import an order, most of the information in the **New Shipping Service** page is automatically filled.

To manually create a shipping service from an order, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Shipping services**.
2. Click `Create Service`.
3. Search the order by entering the order ID in the search box or filter orders by creation date, using the `Filter` button. 

  <div class="alert alert-warning">
Only orders in the <code>invoiced</code> status will appear in the list and search results.
</div>

4. Click the order.  
5. Click `Create From Order {order ID}` and you will be redirected to the _New Shipping Service_ page.   
6. Most of the data will have been imported from the order, but you can still change it, if needed. Check the information and make the necessary changes in the tabs:  
    - **Pickup:** Fill in with the address information of where the courier will collect the packages. Be aware that this field has no relation with the usual concept of [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) in VTEX.
    - **Delivery:** Fill in with the address information of where the courier will deliver the packages, whether the customer’s address or a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R). 
    - **Content:** Select the content of the delivery, it can be _Order items, Order invoices_ or _Other._
    - **Carrier:** Select the expected date for the courier to collect the packages, and the expected date for the package to get to its destination. After that, click the carrier to select it for the shipping service.
7. When everything is ready, the `Create Service` button will appear and you must click it. 

You can also manually create a shipping service without importing the order’s information. To do so, in step 2 click `Create Manually` and go on from step 7 to the end. 

### View shipping service details

In the **Shipping services** page, you can see more information about each shipping service created by clicking it. This will open a modal that looks like the following image:

In the modal, there are four tabs:

|     Tab     |                                                                                                                                                                                                    Description                                                                                                                                                                                                    |
|:-----------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   Details   | Displays detailed information related to the shipping service, for example:<br>- Service type<br>- Estimated delivery date<br>- Address to collect packages<br>- Shipping information<br>- Order’s items details<br>- It also displays a Timeline with the history of the shipping service, from its creation to carrier’s status updates. The addition of a new note or evidence also appears in the Timeline, among others. |
|   Tracking  | The tracking is only available if the courier is `Last Mile`. <br>It presents information and metrics about the courier:<br>- Current delivery capacity<br>- License number<br>- Type of vehicle<br>- Courier’s mobile device battery<br>- Ccourier’s evaluation according to customers (from 0-5)<br>You can send a message to the courier with the <i class="fas fa-envelope"></i> `Send Message` button.                 |
| Attachments | Shows the content attached to the shipping service, if there is any. For example, a digital signature from the customer as proof of delivery.                                                                                                                                                                                                                                                                     |
|    Notes    | When the courier sends notes and text messages, their history is saved here.                                                                                                                                                                                                                                                                                                                                      |

On the top of the modal, sometimes appears a menu  <i class="fas fa-ellipsis-v"></i>, depending on the shipping service’s status. When you click it, different options appear for each status. For example:

- `Pending` status: **Assign Courier**
- `On route`: none
- `Delivered`: **Tracking URL**
- `Canceled`: **Tracking URL**

## Settings

When you access in your VTEX Admin, **Apps > Last Mile > Settings**, you find **Couriers**, where you configure couriers and users. You must be an [admin user](#users) to be able to make editions. 

In the **Couriers** page, there are the following tabs:

* [General](#general)
* [Last Mile](#last-mile)
* [External Carriers](#external-carriers)
* [Users](#users)

### General

In this tab, you can configure the address where carriers will collect the packages for delivery, by following the steps below:

1. In **Pickup address**, fill in manually the address where courier will pick packages for delivery or use the search box with the magnifier icon  <i class="fas fa-search"></i> to find the address, what will automatically fill in the address information.
2. In **Contact information**, fill in with the _name, phone_ and _email _of the courier’s contact.
3. Click `Save`.

### Last Mile

In **Settings > Last Mile**, you will find the following sections:

* [General section](#general-section)
* [Last Mile section](#last-mile)
* [Field templates section](#field-templates-section)

#### General section

You can configure the **Last Mile** activation by clicking on the switch at the top of the page <i class="fas fa-toggle-on"></i> `Activate` or <i class="fas fa-toggle-off"></i> `Deactivate`.

There are three main parts in this section: 

* Courier assignment
* Capacity management
* Automatic creation

The following image is an example of the `Courier assignment` section:

- **Location accuracy in courier app:** determine the precision of the courier’s app identifying and transmitting the courier’s location. This configuration interferes with the battery duration of the mobile device, depending how often the location is updated. The options are described in the table below:

|  Option  |                                                                                     Description                                                                                     |
|:--------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   High   | The app refreshes the courier’s location every 3 seconds. This is the most precise option, but it consumes a lot of the courier’s mobile device battery.                            |
|  Medium  | The app refreshes the courier’s location every 30 seconds. This is an option with intermediary precision, and it consumes a moderate amount of the courier’s mobile device battery. |
|    Low   | The app refreshes the courier’s location every 60 seconds. This is the least precise option, but it consumes the minimum amount of the courier’s mobile device battery.             |
| Disabled | The app will refresh the courier’s location only when he updates his service status or when he opens the app.                                                                       |

* **Automatic courier assignment:** If the switch is enabled <i class="fas fa-toggle-on"></i>, the system will try to automatically assign a courier to every service created for _Last Mile_.
    * **Assignment strategy:** The automatic courier selection algorithm when a service is created can be based on one of the following rules:
        * `One at a time`: The task request notification is sent to the courier who is closest to where the package must be collected. If the first courier does not accept the task within the requested expiration time, the request is sent to the second closest courier, and so on. While no one accepts the task, it remains unassigned.  
        * `Send to All`: The task request notification is sent to all couriers available in the service time zone, up to the maximum limit of 500 couriers. The service is assigned to the courier that accepts it first, and the service remains unassigned until someone accepts it.  
        * `Round Robin`: Round Robin is an allocation algorithm based on parameters that can be configured. The task is assigned to the courier who is closest and considers how many active services he already has. You can customize the algorithm for assigning the task to couriers who are not connected, for example.  
        * `Nearest Available`: The task is automatically assigned to the courier based on their availability and distance. However, the courier still needs to accept the task.  
    * **Request expiration (in seconds):** Enter the desired number or click the buttons <i class="fas fa-minus"></i> and & <i class="fas fa-plus"></i> to determine:
        * Request expiration (in seconds) 
        * Number of retries  
    * The switches below appear only when the `Round Robin` Assignment strategy was chosen. They can be activated or deactivated independently of one another:
        * <i class="fas fa-toggle-off"></i>  Consider courier rating (higher rating will be prioritized)
        * <i class="fas fa-toggle-off"></i>  Assign task to offline couriers
        * <i class="fas fa-toggle-off"></i>  Restart assignment if the service is declined
        * <i class="fas fa-toggle-off"></i>  Prioritize idle couriers (couriers without tasks will be prioritized)
        * <i class="fas fa-toggle-off"></i>  Calculate courier ETA from current location to next pickup

The image below represents the `Capacity management` section:

* **Capacity calculation:** the courier’s shipping capacity will be calculated based on one of the following values:
    * `Item(s)`: The courier’s capacity will vary according to the number of items inside packages.
    * `Package(s)`: The courier’s capacity will vary according to the number of packages.
    * `Service(s)`: The courier’s capacity will vary according to the number of shipping services assigned to the courier.
* **Max. capacity:** Enter the desired value or click on the buttons <i class="fas fa-minus"></i> and <i class="fas fa-plus"></i>  to determine which number will apply to the previously configured rule.

#### Couriers section

In this section, you can add a new courier, edit an existing one or send a message to the courier. 

To add a courier, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Last Mile > Couriers**.
2. Click `Add`.
3. Fill in with the courier’s information:
    * Username
    * First name
    * Last name
    * Email
    * Phone
4. Enter a password for the courier to access the app. It must contain at least one uppercase letter, one lowercase letter, one number and one special character. Select the stores that will be associated with the carrier.
5. Click the type of vehicle, it can be one of the following:
    * Walk
    * Bike
    * Scooter
    * Car
    * Van
    * Truck
6. Enter the courier’s License.
7. If desired, add other information.
8. Slide the slider to determine the number of the courier’s delivery capacity; the range is the limit set on the [General section](#general-section). 
    > Whether the number in the slider represents items, packages or shipping services was set in the [General section](#general-section).
9. If you wish to associate the courier with a color, the vehicle color, for example, click on the color code and select the desired one.
10. Click `Create`.

To edit a courier, follow these steps:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Last Mile > Couriers.**
2. Locate the courier by scrolling the list or using the search bar. You can search by entering the courier's name or phone. 
    > When you search a courier using the search bar, you must enter a few characters of the name or phone, because the search does not return results for a single letter or number. 
3. Once you locate the courier, click on it.
4. Make the desired changes.
5. Click `Save`.

To send a message to the courier, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Last Mile > Couriers**.
2. Locate the courier and click on it.
3. In the top right corner of the edition window, click the envelope icon <i class="fas fa-envelope"></i>.
4. Enter your message.
5. Click `Send`. 

#### Field templates section

Create the fields for the task that will be sent to couriers. You can configure multiple fields for different actions. For example, a mandatory field for the courier to confirm the acceptance of the task, or a barcode field for scanning products.

To create a new field template, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Last Mile > Field templates**.
2. Click `Add Field Template`.
3. Fill in the fields and select the desired options —  each field is described in the table below.
4. Click `Add`.
5. Click `Save`.

|       Column      |                                                                                                   Description                                                                                                   | Mandatory or Optional |
|:-----------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------:|
|     Field Name    | Name that appears in the courier’s mobile device and identifies the field.                                                                                                                                      |       Mandatory       |
|    Permissions    | Type of permission given to the courier, it can be:<br>Read Only: View the information in the field.<br>Read & Write: Add new fields or modify the existing ones.                                               |       Mandatory       |
|     Field Type    | Field's data type. For Read & Write permission, it can be:<br>Number<br>Text<br>Image<br>Date<br>Barcode<br>Check<br>Email<br>For Read Only permission, it can be Number, Text and Email.                       |       Mandatory       |
|       Value       | Field for when there is a default value or a value for read-only fields.                                                                                                                                        |        Optional       |
|     Mandatory     | Click the checkbox to determine whether or not the field will be mandatory for the courier to start/complete the task.<br>Couriers can only start or finish the task if mandatory fields’ requirements are met. |        Optional       |
| Edit Before Start | Click the checkbox to determine whether or not the field must be edited before starting the task.<br>Couriers can only start or finish the task if mandatory fields’ requirements are met.                      |        Optional       |
|      Actions      | When you click on the <i class="fas fa-times"></i>, you delete the field. This action is permanent.                                                                                                             |        Optional       |

### External Carriers

In this tab, you see the available external carriers for your shipping services. They will only be valid once they are activated <i class="fas fa-toggle-on"></i>.

To activate an external carrier, follow these steps:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > External Carriers**.
2. Click on the desired carrier.
3. Fill in the fields.

    > Each external carrier has their own configuration fields, some of which you will need to get in touch with the carrier to get the information. If necessary, get in touch with your carrier’s support.

4. Click the switch <i class="fas fa-toggle-on"></i> `Active` on the top of the window.
5. Click `Confirm`.
6. Click `Save`.

### Users

The **VTEX Pick and Pack** concept of _user_ is different from the common meaning of the term in VTEX. In **Last Mile**, there is the _admin_ user, but it does not mean the [Sponsor user](https://help.vtex.com/en/tutorial/what-is-the-sponsor-user--3oPr7YuIkEYqUGmEqIMSEy) - also referred as _Admin Super_ and _Owner_.

<div class="alert alert-info">
 For more information, see the articles <a href="https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc">Roles</a> and <a href="https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3">License Manager</a> resources.
</div>

To become an admin user in the **Last Mile** module, you must have certain License Manager permissions. We recommend [creating a role](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) identified as “_Fulfillment admin”_, which must have at least the following products and resources associated with it:

|     Product     |                                                                                                                        Associated Resources                                                                                                                        |
|:---------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|     Insights    | Insights metrics                                                                                                                                                                                                                                                   |
| License Manager | Get account by identifier<br>Get applications<br>Find user by email<br>View users with account access<br>View all admin users<br>Get resource by key<br>Get role<br>Get paged roles<br>Get paged users<br>Get admin status<br>Get accounts<br>Get accounts by host |
|    Field Type   | Field's data type. For Read & Write permission, it can be:<br>Number<br>Text<br>Image<br>Date<br>Barcode<br>Check<br>Email<br>For Read Only permission, it can be Number, Text and Email.                                                                          |
<div class="alert alert-warning">
If you are an admin user in <a href="link">VTEX Fulfillment</a>, you will automatically be an admin user in Last Mile.
</div>

In **Users**, you can perform the following actions:

* [Search user](#search-user)
* [Filter user](#filter-list)
* [Create admin user](#create-admin-user)
* [Edit user](#edit-user)
* [Generate Api-Key](#generate-api--key)
* [Delete user](#delete-user)

#### Search user

On the top of the page, there is a search box with the magnifier icon  <i class="fas fa-search"></i> in which you can search for users using the following criteria:

* Username
* Name
* Email

#### Filter list

You can filter the list to display admin users only or all of the **VTEX Pick and Pack** users, which includes _pickers_ and _customer service_ created in [VTEX Fulfillment](link).

To filter the list, click the icon with bars <i class="fas fa-bars"></i> and choose between `All` and `Admin`. 

#### Create admin user

The only user profile that can configure **Last Mile** is the admin user. To create a new admin user, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Users**.
2. Click `Create`.
3. Click `Admin`.
4. In the box, search by typing the user’s name, email or ID.
5. Click `Create`.

#### Edit user

Although it is only possible to create admin users in **Last Mile**, an admin user can edit all of the users listed in the page, whether they are admins, pickers or customer services. To know more about these other users, see [VTEX Fulfillment](https://help.vtex.com/es/tutorial/vtex-pick-and-pack-fulfillment--1zGUEItEEVsal6cuBEBNcA).

You can edit the information listed below. 

* Name
* Password for the mobile application
* Categories
* Store

To edit a user, follow these steps:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Users**.
2. Click the row that corresponds to the user you want to edit.
3. Make the desired changes.
4. Enter the password meant for who is using the mobile application.
5. Click `Save`.

#### Generate Api-Key

Admin users can generate Api-Keys to use **VTEX Pick and Pack** APIs, and each user can have only one Api-Key. For more information, see our [documentation for developers](https://developers.vtex.com/docs/guides/vtex-pick-and-pack).

To generate an Api-Key, follow the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Users**.
2. Click the row that corresponds to the admin user you want to associate with the Api-Key.
3. Click `Generate`.
4. Save the Api-Key in a safe place.

  <div class="alert alert-danger">
You only see the Api-Key once, you will not be able to access this information again, so make sure it is in a safe place.
</div>

5. Enter the password meant for who is using the mobile application.
6. Click `Save`.

#### Delete user

Only admin users can delete other users, by following the steps below:

1. In your VTEX Admin, go to **Apps > Last Mile > Settings > Users**.
2. Click the row that corresponds to the user you want to delete.
3. Click `Delete User`.
4. Click `Yes`.
