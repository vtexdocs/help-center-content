---
title: "Dynamic groups"
id: 51C5xzAp6Y00sK42SAGCSL
status: PUBLISHED
createdAt: 2025-09-12T17:30:05.020Z
updatedAt: 2025-10-03T14:21:49.200Z
publishedAt: 2025-10-03T14:21:49.200Z
firstPublishedAt: 2025-10-03T14:21:49.200Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: dynamic-groups
legacySlug: dynamic-groups
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Dynamic groups allow you to segment contacts according to criteria defined in a search. For example, you can use them to group contacts by age, location, or any other information stored in contact fields.

Unlike static groups, dynamic groups don't allow you to add or remove contacts manually. Group membership is determined by the search rule: only contacts that match the defined criteria are included.

## Creating a dynamic group

To create a dynamic group:

1. Go to the **Contacts** page.
2. In the search bar, enter an expression using contact fields and operators.
3. Review the contacts returned by the search.
4. Click the button to save the dynamic group.
5. In the window that appears, enter a name for the group and confirm.

## Defining a search rule

Rules combine contact fields, values, and operators. Available operators include:

- `AND`: requires both conditions to be met.
- `OR`: requires at least one condition to be met.
- `>`: greater than.
- `>=`: greater than or equal to.

For example, consider contacts that have the `age` and `gender` fields. To create a group containing male contacts over 18 years old, you can use the following expression:

`age > 18 AND (gender = "M" OR gender = "Male")`

In this example:

- `age > 18` selects contacts over 18 years old.
- `(gender = "M" OR gender = "Male")` accepts either of the specified values for the `gender` field.
- `AND` determines that both conditions must be met.

The field names and values in the expression must match the information stored in the contacts.

## Managing a dynamic group

After creating the group, you can:

- Edit its name.
- Export participating contacts.
- Delete the group.
- Change the membership rule.

These management options follow the same process used for static groups.
