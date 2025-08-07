---
title: 'Managing B2B organizations'
id: 1UwNCWhML3BsV6anpoUvVZ
status: PUBLISHED
createdAt: 2024-06-12T17:24:48.991Z
updatedAt: 2024-06-12T17:36:48.744Z
publishedAt: 2024-06-12T17:36:48.744Z
firstPublishedAt: 2024-06-12T17:36:48.744Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: managing-b2b-organizations
locale: en
legacySlug: managing-b2b-organizations
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

The **B2B Organizations** app allows you to group B2B users into organizations. You can assign specific payment methods, price lists, and product collections to each organization, allowing all users in the organization to share the same commercial conditions. Each organization is segmented into one or more cost centers, each with its own shipping address.

## Accessing a buyer organization

To access a buyer organization in the VTEX Admin, go to **Apps > B2B Organizations and Cost Centers > Organizations**, or type **Organizations** in the search bar at the top of the page.

To access an organization, follow these steps:

1.	Click the **Organizations** tab.

2.	Click the name of the desired buyer organization.

This section lists all the organizations created in your store, their status, and allow store admins to:

- Add new organizations.

- Access the organization details page, which comprises organization data, cost centers, collections, payment terms, price lists, and users.

## Organization Status

In the **Status** column in the Organizations tab, you can see the status of the organization.

You can use the search bar to find organizations by name or filter organizations by status.

Each organization can have one of the following status:

- **Active:** The organization has been approved by store admins and is currently active.

- **On hold:** The organization is currently paused, which means that its users cannot complete purchases.

- **Inactive:** Store admins have deactivated the organization, so your users won't be able to log in.

![Status- EN](https://images.ctfassets.net/alneenqid6w5/2UywOtrYrvizJEY5LjQgau/075f575659ca723e1fd8ac6f1400eb5c/Status-_EN.gif)

## Adding a new organization

To add a new organization in the VTEX Admin, go to **Apps > B2B Organizations and Cost Centers > Organizations**, or type **Organizations** in the search bar at the top of the page.

To add a new organization, follow the steps below:

1. Click the Organizations tab.
2. Click the `New` button, and select the Add Individually option.
3. Complete the necessary information about the new organization:
    - **Organization name:** Name of the organization you want to create.
    - **Cost center name:** Name of the initial cost center associated with the organization.
    - **Country:** The country where the cost center is located.
    - **Postal code:** Postal code of the cost center address.
    - **Address:** Name of the street where the cost center is located.
    - **Number:** Address number where the cost center is located.
    - **Additional information:** Information that can be added to the cost center's address information.
    - **Neighborhood:** Name of the neighborhood where the cost center is located.
    - **City:** City where the cost center is located. This is completed automatically based on the postal code entered.
    - **State:** State where the cost center is located. This is completed automatically based on the postal code entered.
    - **Recipient:** Name of the person who will receive the orders at the address provided.
4. Click the `Add` button.

![Adiconar organização- EN](https://images.ctfassets.net/alneenqid6w5/7vp9NX3NLvSWErVBlYzbNI/9f298b8d96c542d3c45aadef5cc67b80/Adiconar_organiza__o-_EN.gif)

## Email notifications

The **B2B Organizations** app provides a set of email templates that are automatically triggered based on specific changes and sent to the organization's users.

| Template name               | Recipient                             | Trigger                                                 |
|-----------------------------|---------------------------------------|---------------------------------------------------------|
| Organization Created        | Users with Sales Admin profile        | When the organization is created.                       |
| Organization Approved       | Users with Organization Admin profile | When the request to create an organization is approved. |
| Organization Declined       | Users with Organization Admin profile | When the request to create an organization is denied.   |
| Organization Status Changed | Users with Organization Admin profile | When the organization's status changes.                 |

To view or customize any of these templates, follow the steps below:

1. In the VTEX Admin, go to Store Settings > Email Templates > Templates.

2. In the search bar, type Organization.

3. Click the template you want to view or edit.

4. Make the desired changes to the template.

5. Click `Save`.

To learn more about editing email templates, see [How to create and edit transactional email templates](/en/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO).

