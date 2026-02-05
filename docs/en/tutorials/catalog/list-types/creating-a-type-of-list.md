---
title: 'Creating a list type'
id: tutorials_254
status: PUBLISHED
createdAt: 2017-04-27T22:11:52.502Z
updatedAt: 2025-05-15T17:58:10.792Z
publishedAt: 2025-05-15T17:58:10.792Z
firstPublishedAt: 2017-04-27T23:03:11.198Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-type-of-list
legacySlug: creating-a-type-of-list
locale: en
subcategoryId: 6aeeWirCBUwwCmeIWOgIWs
---

> ⚠️ The [List](/en/docs/tutorials/what-is-a-list) feature is exclusive to stores that use Legacy CMS Portal.

Creating a type of list is configuring the lists to appear on the site. For example: Lista de Casamento and Lista de Aniversário. Each of these is a different type of list, with specific configurations. The purpose of this article is to show you how to create a type of list.

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __List Types__.
  All types of list configured will be shown.
3. Click on `New List Type`.
4. Complete the fields as described in the [Form fields section](#form-fields).
5. Click on `Save`.

After creating the types of list, clients can add their lists to the site.

> ⚠️ It is not possible to delete a list once it has been created.

## Form fields

- **Name**: Name of the type of list.
- **Description**: Description of the type of list. For example: intended for the bride and groom, a wedding list is the most common type…
- **Ative**: Activate to make this option available on the site.

### Setting

**Visibility**

- **Public**: Allows any user to view the list, and the list is shown in searches;
- **Private**: Only participants can view the list, and it is not shown in searches by non-participating users;
- **List Creator decides**: Allows a decision on visibility to be taken by the client who is creating a particular type of list;
- **Single Share** : Lets the user participate in only one list of a particular type, if the option Sim is selected; or in more than one, if Não is selected.

**Delivery**

- **Products purchased will be delivered to the buyer's list**: In this model, products purchased are physically delivered to the purchaser, thus affecting the store inventory. If this type of list is selected, the list owner does not need to select the delivery address, as this will be done by the purchaser. Examples: Shopping list, Wish list.
- **Products purchased will be delivered to the creator of the list**: In this model, products purchased are physically delivered to the owner of the list, thus affecting the store inventory. On selecting this type of list, the owner must choose which of the addresses registered should be used for delivery. Examples: Wedding list, Baby shower.
- **Value of products purchased will be converted into a gift card voucher**:  In this list model the products purchased are not physically sent to the owner, but instead a credit is generated through a Gift Voucher, for the value of the purchase, for the owner of the list. The owner can use the voucher for purchases from the store. Each voucher is associated with a list of this type, and is credited with the total value of purchases made from the list. If the owner of the list has two types of the same list, two vouchers will be created.

### Registration Required

Used when a user has to supply an identity document to create a list. Example: situations where a gift voucher must be issued with the client’s details.

### Event

The store owner decides if a list will be related to an event. Once the type of list has been saved this information cannot be changed.

When **Have an event** is selected, the form offers other configuration options for the event, including all the deadlines for creating this type of list, as shown below.

![eventos.en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/list-types/creating-a-type-of-list_1.png)

The events area must determine whether a list has a fixed date for the event. Wish lists and purchases lists do not require a fixed date. On the other hand, wedding lists or baby showers must take the date of the event into account, with all the products purchased being delivered in advance.

### Participants

The following options are available:

- **Minumum Participants**: minimum number of participants for a list to be possible. For example: 2 for wedding lists.
- **Maximum Participants**: Maximum number for creating a list. For example: 1 for a baby shower. 
- **Title Options for Participants**: The names to go in the registration fields of the list. For example: Birthday boy/girl, Baby, Bride.
- **Free Field 1**: Additional field (optional)
- **Free Field 2**: Additional field (optional)

### The listing

After creating the type of list, you will be directed to the screen showing the types of list already registered in the store. This screen provides the following information and functions:

![listagem.en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/catalog/list-types/creating-a-type-of-list_2.png)

- **Export to Excel**: Allows data for list types to be exported to Excel;
- **Version**: Identifies lists created in a previous version, with limited functions. The latest version is the “V2”;
- **Delivery**: Indicates where the product is to be delivered: to the owner of the list, the purchaser, or [if the purchase amount is to be credited to a voucher for the owner ](/en/tutorial/setting-up-the-voucher-list);
- **Visibility**: Indicates the type of visibility configured;
- **Unique**: Indicates whether more than one list of the same type can be created;
- **Participants**: Shows the maximum and minimum numbers of participants configured for the list;
- **Status**: Indicates whether the list is active or inactive;
- **Lists**: Shows the number of lists of that type created by users on the site.
- **See Details**: Permit editable fields to be amended;
- **"Arrow"**: Allows lists of that type and purchases made from lists of that type to be shown, and lists of that type to be deleted.
