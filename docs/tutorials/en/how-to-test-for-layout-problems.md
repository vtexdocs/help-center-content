---
title: 'How to test for layout problems'
id: tutorials_545
status: PUBLISHED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2023-03-29T13:52:48.907Z
publishedAt: 2023-03-29T13:52:48.907Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slug: how-to-test-for-layout-problems
locale: en
legacySlug: how-to-test-for-layout-problems
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

When we encounter scenarios where there is strange behavior on the website, there are certain procedures that we can adopt to track the origin of the doubt.

The first test is to disable JS in tools; if you have any doubt about how to do this [click here to learn how to disable it](http://help.vtex.com/en/faq/how-to-identify-layout-errors-caused-by-javascript-files "click here to learn how to disable it")[.](/hc/pt-br/articles/208925948 ".")

If even after disabling the tools you still are not sure whether it refers to a JS on the page, try to get a practically clean template and do the test using the LID of the registered template.

1. To do so, in the VTEX Admin, access **Storefront > Layout > CMS** and create a new template on **Templates de Página** and add only the information you need to test.

2. Next, access the Layouts area and go to the folder of the page you want to test and click on **Novo Layout**.

3. Now enter the Layout Name and select the template you created previously

4. Access the website and go the page you are testing and after that, enter the Layout Lid you created followed as a QueryString (with ? or &).
