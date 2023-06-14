---
title: Using the remarks field at checkout
id: tutorials_2726
status: DRAFT
createdAt: 2017-04-27T21:52:49.197Z
updatedAt: 2022-07-21T20:19:44.774Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:55.184Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: using-the-remarks-field-at-checkout
legacySlug: using-the-remarks-field-at-checkout
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

You can enable a __remarks field__ on the checkout page. Text entered in this field will be recorded on the order and may be used subsequently by the store. The text filled in this field will be registered in the order and can be used to add to any information that the store needs.

By default, this field will not be shown. For it to be shown, you must enter the following rule in the CSS:

`.note { display: block; }`

This field's content will be available via API, when an order is received, in the **openTextField** field.

And it will also be in the Message Center JSON, in the **openTextField** field**. This means that the field can be used in the store’s email template.
