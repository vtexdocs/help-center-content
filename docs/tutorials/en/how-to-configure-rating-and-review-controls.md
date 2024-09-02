---
title: 'Configuring rating and review controls'
id: frequentlyAskedQuestions_585
status: DRAFT
createdAt: 2019-01-24T20:45:54.562Z
updatedAt: 2021-05-26T19:52:40.600Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:55.793Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: how-to-configure-rating-and-review-controls
locale: en
legacySlug: how-to-configure-rating-and-review-controls
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

This article is intended to show you how to use rating and review controls.

## Controls responsible

`vtex.cmc:evaluationRate` – Consumer rating (stars)

_Returns total classifications made by users_


`vtex.cmc:UserReview` – Ratings and comments

_Adds an option to rate and the results of ratings, a form for comments and a view of comments made_


`vtex.cmc:welcomeMessage` – User login

_Responsible for creating the IPI cookie used by the UserReview control. Without it, when trying to make a review, the login will be required in a loop.._

## Concepts and use

These controls are normally used in combination, since the ‘evaluationRate’ shows the average classification of the ratings entered in the ‘UserReview’.

These controls, unlike the others, will only work if specifically configured, as shown below:

In registering the Category, there is the option to configure the Rating feature, and this is normally done in the root category:

![avaliação-categoria EN](//images.ctfassets.net/alneenqid6w5/QRc6IqC0gMkGMGyuces2S/91d41a3275a79250d08d375ba86add28/avalia____o_en.png)

Click on **new rating** and fill in the Name and Text fields, then save.

![new-rating-categorias EN](//images.ctfassets.net/alneenqid6w5/k7zFwGh3bM8C6io8yicYU/7568bf49b49455acbf564e33146b2396/new_rating.png)

Now your Review and Rating controls are ready to be used.
