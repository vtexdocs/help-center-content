---
title: Setting up the sales funnel on Google Analytics
id: 4yM6QJumWs6iaEQuO42mu2
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.554Z
updatedAt: 2021-10-04T18:45:21.795Z
publishedAt: 2021-10-04T18:45:21.795Z
firstPublishedAt: 2019-01-24T22:10:10.005Z
contentType: tutorial
productTeam: Shopping
author: authors_4
slug: setting-up-the-sales-funnel-on-google-analytics
legacySlug: setting-up-the-sales-funnel-on-google-analytics
subcategory: 1luKrYptdi8WoMYckakUaM
---

**Google Analytics** goals are meant to help you evaluate whether your site's goals are being met. This article will show you how to set up a conversion goal, known as __Sales Funnel__, in stores that use VTEX SmartCheckout. To learn more about goals, visit the conversion topic in Google Analytics Help.

With the sales funnel configured, you can track and analyze the customer's steps until the completion of an order. To set up the sales funnel, let's take into account that the purchase process starts on your product screen and goes through the shopping cart, checkout (personal data, shipping, payment) and reaches the goal, which is the order placed page.

<div class="alert alert-info">
To make it easier, the entire setup in this article can be <a href="https://support.google.com/analytics/answer/1032415?hl=en" target="_blank">imported directly into Google Analytics</a> with <a href="https://analytics.google.com/analytics/web/template?uid=tTp2GkIJRiGodszJbq8RsA" target="_blank">this template</a>.
</div>

For manual configuration or editing of an existing goal, the first step is to access Analytics and click on the __Administrator__ button in the lower left corner. Then go to the __Goals__ option, from the "View" column.

![image](//images.ctfassets.net/alneenqid6w5/2lSqr5sq9cEJqQ8OrYeMrO/8bb8294a785ec55c4bc812780d010377/Screenshot_2019-10-28_14.59.53.png)

In the goal administration screen, choose to create a new goal or to edit an existing one.

__In step 1__ you can follow with a custom type goal:

![image](//images.ctfassets.net/alneenqid6w5/5vv17y3LYwEZ99E531Rw8E/0e73bbfed92a27dbc893aa1ab3f6cb2e/Screenshot_2019-10-28_15.01.15.png)

__In step 2__ you can define the name you prefer for your goal and a position code (for internal Google Analytics use). In type, let's use "Destination":

![image](//images.ctfassets.net/alneenqid6w5/3TSWIxs5EPBQAfPYY4DKeD/f937330ad2fc5496c44a58acbc05f99d/Screenshot_2019-10-28_15.03.02.png)

__In step 3__ we have the most sensitive settings. In it we set the page that determines the completion of the goal and the path the clients will take to reach it.

In the "Destination" field select the regular expression option and enter the URL of the order placed page: `^/checkout/orderPlaced`

![image](//images.ctfassets.net/alneenqid6w5/7foRf9TbRzb0pUNlXpqATQ/593d9162dfe76f4f8ab6a59eadbb330e/Screenshot_2019-10-28_15.04.07.png)

Then configure the path that the client will go through until an order is finished. In such case, we're taking into account that the purchase process starts on the product screen; then my funnel will serve to measure the number of customers who access this screen, how many orders have been finished and at which step customers are giving up the purchase.

Still __in step 3__, enable the __Funnel__ option with the following steps:

1. __Product__ =  `/p($|\?)` (not required)
2. __Cart__ = `^/checkout/(\?.*)?(#/cart)$`
3. __Identification__ = `^/checkout/(\?.*)?#/email$`
4. __Personal data__ = `^/checkout/(\?.*)?#/profile$`
5. __Delivery__ = `^/checkout/(\?.*)?#/shipping$`
6. __Payment__ = `^/checkout/(\?.*)?#/payment$`

![image](//images.ctfassets.net/alneenqid6w5/6W1evwkmfds3ok1h8Hjzsx/da9bef2d395db2170446ebd7d1df1dda/Screenshot_2019-10-28_15.06.24.png)

One way to verify that the goal is set correctly is to use the "Check this goal" link. Google will generate a goal conversion simulation within the last 7 days.

Now just save the goal and wait for the time the system needs to start counting the data. Usually it takes 24 hours.

To view your funnel, see the Analytics reports and go to the __Conversions__ menu and then to the __Goals__ option.

<div class="alert alert-warning">
<p>If you have a multi-language store with languages as <a href="https://support.google.com/webmasters/answer/182192?hl=en#locale-specific-urls">subdirectories of the gTLD</a> you should replace every <a href="https://support.google.com/analytics/answer/1034376?hl=en&ref_topic=1034375">carret</a> (<code>^</code>) with a <a href="https://support.google.com/analytics/answer/1034324?hl=en">regex</a> that matches the different subdirectories. For instance, if your website is available in:</p>
  <ul>
    <li><strong>Italian: </strong><code>example.com/it</code></li>
    <li><strong>Spanish: </strong><code>example.com/es</code></li>
    <li><strong>French: </strong><code>example.com/fr</code></li>
  </ul>
  <p>You would have to change your destination:</p>
  <ul>
<li><strong>From: </strong><code>^/checkout/orderPlaced</code></li> 
<li><strong>To: </strong><code>^/(it|es|fr)/checkout/orderPlaced</code></li>
  </ul>
  <p>This needs to be done for every funnel step as well.</p>
</div>

<div class="alert alert-warning">
<p>The funnel settings in this article have been updated to follow the new version of <a href="http://help.vtex.com/en/tutorial/what-is-the-shared-cart">SmartCheckout shared cart</a>.</p>
<p>For comparison purposes, see below the old settings:</p>
<ol>
<li>Product: <code>/p($|\?)</code> (not required)</li>
<li>Cart: <code>^/checkout/(#/cart)?$</code></li>
<li>Identification: <code>^/checkout/#/email</code></li>
<li>Personal Data: <code>^/checkout/#/profile</code></li>
<li>Delivery: <code>^/checkout/#/shipping</code></li>
<li>Payment: <code>^/checkout/#/payment</code></li>
</ol>
</div>
