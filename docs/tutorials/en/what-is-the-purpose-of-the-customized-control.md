---
title: What is the purpose of the Customized Control?
id: frequentlyAskedQuestions_627
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.169Z
updatedAt: 2023-03-29T17:53:50.202Z
publishedAt: 2023-03-29T17:53:50.202Z
firstPublishedAt: 2019-01-24T22:01:30.892Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: what-is-the-purpose-of-the-customized-control
legacySlug: what-is-the-purpose-of-the-customized-control
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Some projects require the use of a banner, a shop window display, or even an HTML code that will be used on different pages of the site. A typical example is the free delivery and discounts banner located on the header, right below the menu.

In order to avoid manually adding the same content several times on each page, we have created the Custom Elements area.

Customized controls are very useful for development, and they facilitate the update of contents created for this purpose. They can be used on Page Templates and Subtemplates.

## Creating a customized control

To create a Customized Control, go to the Admin and access the **Storefront menu**. Click **Layout** and on the CMS folder and then on **Custom Elements**.

In the Custom Elements area, you can create up to four types of characteristics to customize the Tag.

The types include Banner, BannerDHTML Collection or HTML.

To create a customized control tag, click on Add, enter a name, a tag name, and select the type.

![cms-custom-elements EN / ES](https://images.ctfassets.net/alneenqid6w5/6pGE6dFRJuawKcMWce0Gem/87bbe6dfb66e75a8402b4be8935eeb18/custom_elements_EN_E_ES.png)

<div class="alert alert-warning">
  <p><b>Warning:</b> do not create an HTML type control with an element <code>title</code>. This may interfere with your store operation.</p>
</div>

## Application of customized controls on a page template

The application of a customized control tag is similar to the use of the element. The tag should be placed where you want the content to be loaded.

In order to differentiate the customized control created that will be used, enter the tag name that was added together with the control syntax.

See the syntaxes for each type of control below:

1. Banner Type: `<vtex:tagname />`
2. HTML Type: `<vtex.cmc:tagname />`
3. Collection Type: `<vtex.cmc:tagname />`
