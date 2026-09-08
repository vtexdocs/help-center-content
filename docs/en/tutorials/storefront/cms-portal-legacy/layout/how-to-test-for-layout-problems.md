---
title: 'How to test for layout problems'
id: tutorials_545
status: PUBLISHED
createdAt: 2017-04-27T22:01:40.228Z
updatedAt: 2024-09-24T14:38:10.328Z
publishedAt: 2024-09-24T14:38:10.328Z
firstPublishedAt: 2017-04-27T23:03:38.289Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5S2MYtrgEoSGaGMqsICaEC
slugEN: how-to-test-for-layout-problems
legacySlug: how-to-test-for-layout-problems
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Tutorial valid only for Legacy CMS Stores.

When we encounter scenarios where there is strange behavior on the website, there are certain procedures that we can adopt to track the origin of the doubt.

The first test is to disable JS in tools; if you have any doubt about how to do this [click here to learn how to disable it](/en/docs/tutorials/how-to-identify-layout-errors-caused-by-javascript-files)

If even after disabling the tools you still are not sure whether it refers to a JS on the page, try to get a practically clean template and do the test using the LID of the registered template.

1. To do so, in the VTEX Admin, access **Storefront > Layout > CMS** and create a new template on **Templates de Página** and add only the information you need to test.

2. Next, access the Layouts area and go to the folder of the page you want to test and click on **Novo Layout**.

3. Now enter the Layout Name and select the template you created previously

4. Access the website and go the page you are testing and after that, enter the Layout Lid you created followed as a QueryString (with ? or &).
