---
title: 'How to use VTEX Predictor Bot'
id: 5meZHatpMQskKgoAAeyOkW
status: ARCHIVED
createdAt: 2017-09-19T14:56:16.378Z
updatedAt: 2020-07-22T16:03:52.128Z
publishedAt: 
firstPublishedAt: 2017-09-19T15:02:56.612Z
contentType: tutorial
productTeam: Others
author: authors_35
slugEN: how-to-use-vtex-predictor-bot
locale: en
legacySlug: how-to-use-vtex-predictor-bot
subcategoryId: 5zTyefbWFicMY2awMyU2SM
---

The VTEX Predictor Bot is a __FREE__ app designed by a team of developers from VTEX in an effort to turn raw data into insights that enable the store administration to increase performance in real time (😱).

For now __your store must have an average of at least 1 sale per hour__ to be able to use this bot. We are tweaking the parameters in order to add all VTEX stores.

_We demoed the beta version at VTEX Day 2017. If you missed it check out the [video](https://www.youtube.com/watch?v=axwfAHC99Zw "VTEX Predictor Bot @ VTEX Day 2017")._

Using time series analysis of your data to detect anomalies the algorithm creates different clusters. These can be separated in specific days of the week, then periods, holidays... in essence it identifies any kind of sasonalities, peaks or other behaviours that determine or even offset your average performance. 

By combining data from different sources it's able to predict how your sales should be at this very moment.

## How Predictor Bot works

We start off by getting an idea of how your store is performing.
![sales data](//images.contentful.com/alneenqid6w5/4LVuTVHevYw6eaykMwQY4M/8b9a06a17479a1595c05d879071ad320/sales_data.png)

As depicted by the image above, every typical store has a pattern - even on a daily basis, or hourly. We must identify that pattern to start any analysis.

But not all are sunshine and flowers. Many times we see something like this:
![crazy sales data](//images.contentful.com/alneenqid6w5/K7vwyviY4S6Q4CwSOSsaW/a644e1f182e82da152d69c661f3f44b7/crazy_sales_data.png)

So we must remove outliers and compare new sets of data against other periods. We keep iterating that way until our algorithm knows we have a safe set of data. At that point we can analyse and __identify events that offset the pattern__.

In the end our predicted graph is something like the curve below. The blue line is the result of our model. This curve is contained within a confidence interval (blue area).

![unnamed](//images.contentful.com/alneenqid6w5/4dyeHM6ycoSGs0kgMUSQqo/56ff4ea1a3478dfea3fc8c4d9860280c/unnamed.png)

Whenever we find something, we let you know! So if your current performance strays from our model but is within the intervals we only send a __WARNING__. If it goes beyond then you receive a __CRITICAL__ notice.

## What Predictor Bot does

We may send you three types of e-mails. Here is a sneak peek:

![Vtex Predictor Bot template](//images.contentful.com/alneenqid6w5/1Ft1I0ibI4g86okS4IYKy0/293929eb488252dabe8cdadee29c86e7/Vtex_Predictor_Bot_template.png)

As you may see this is an example of a notification sent when the anomaly has gone by and your store's sales are back on track.

Status __CRITICAL__ comes when sales dropped too much. 
Status __WARNING__ indicates a hiccup, but which is still worth the mention.

## How to install Predictor Bot

The installation is pretty straightforward. 

1. Access your store through `https://www.{AccountName}.myvtex.com/admin`.
2. Navigate to the __Extension Store__ tab and locate the __VTEX Predictor Bot__ app.
3. Hit the __Install__ button.

That´s all it takes.

With the app installed we will start monitoring your account. And whenever an anomaly is detected an e-mail will be sent to the store Master user.
_The Master user's e-mail is located in the __Account__ tab inside the __License Manager__ module._
