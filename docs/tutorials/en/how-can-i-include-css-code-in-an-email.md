---
title: Which style of CSS should be used in emails?
id: frequentlyAskedQuestions_5390
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.325Z
updatedAt: 2019-12-31T15:29:01.217Z
publishedAt: 2019-12-31T15:29:01.217Z
firstPublishedAt: 2019-01-24T22:16:01.974Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: how-can-i-include-css-code-in-an-email
legacySlug: how-can-i-include-css-code-in-an-email
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

This rule is valid for any type of email, whether marketing, a Message Center template or Master Data: in emails, use **CSS inline**.

This is because various email servers ignore a CSS code in the heading, the style or any file external to the HTML. You must therefore enter the CSS in the **body** of the HTML, so that the code is read and acted on.

__Tip!__ Whenever you want to hide any feature of an element that the VTEX control shows automatically, change its color to the background color of your email. E.g.: In an abandoned shopping cart, the shelf of items is assembled in the structure `ul` &gt; `li`.  This structure shows dots (•) in the HTML. To hide these dots, just change this property.

Before calling up the shelf, indicate that everything must be white (or the background color of your email). In the shelf template, apply the color again (black, or whatever color you use for text) in the content. In this way, the `ul` and  `li` will be white (invisible), but inside them the texts will appear in color (visible).
