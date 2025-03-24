---
title: 'Web Page Performance'
id: 4cRiiTByzNMulixZec5YaG
status: ARCHIVED
createdAt: 2023-03-29T21:07:26.003Z
updatedAt: 2024-05-29T20:37:59.664Z
publishedAt: 
firstPublishedAt: 2023-03-29T21:11:57.287Z
contentType: tutorial
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: web-page-performance
locale: en
legacySlug: web-page-performance
subcategoryId: 1TIJqw8kV2Yok4iQe4SAkq
---

<div class="info info-alert">
The Web Page Performance module has been discontinued. Learn more at <a href="https://help.vtex.com/en/announcements/descontinuacao-performance-de-paginas-web--4zrnpCSC8R8OFpahiaf2sE">Web Page Performance module discontinuation</a> 
</div>  

[PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) is a tool developed by Google to report on the performance of a page on both mobile and desktop devices, providing suggestions on how its performance may be improved. It uses [Google's Core Web Vitals](https://web.dev/vitals/#core-web-vitals) as metrics to assess online performance. 

Web Page Performance brings Google's [PageSpeed Insights](https://developers.google.com/speed/docs/insights/v5/about) tool to your VTEX Admin, allowing you to track the performance of your ecommerce's URLs. It helps merchants track the performance experience of the main pages of their e-commerce, while also finding out the reasons behind a slower performance. 

Although the Web Page Performance dashboard offers the same features as Google's PageSpeed Insights tool, it is only on the VTEX Admin that merchants will be able to add multiple URLs and assess them constantly. 

![Web page performance Dash EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Dashboards/Dashboards%20in%20the%20VTEX%20Admin/web-page-performance_1.png)

## Why should you track a web page's performance?

In the digital commerce market, providing an experience that does not allow the shopper to wait too long to find the information they need or to conclude an order, can be the competitive advantage between brands, competing for the same user's attention.

Optimizing the speed of the digital store is an important exercise that companies are encouraged to do, in order to become even more competitive in a market where seconds of page loading time matter. 

Google's PageSpeed Insight tool establishes a way to measure good user experience on the web, making sure that web pages are fast, responsive and delightful to use. 

Good user experience often leads to better business outcomes and sales conversions. [Google's Core Web Vitals](https://web.dev/vitals/#core-web-vitals) are also a part of page experience ranking signals in Google Search, so improving your scores in those metrics is another way to make your website more discoverable to users.

## Data

Performance metrics can be measured by two types of data:

* **Field data:** monitoring real users, who are actually loading and interacting with the page. This type of data is useful to know your website's performance in varying conditions, like network capabilities and how real people experience your page. Field data can be seen in the  Core Web Vitals section of the page. The field data comes from [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report). This data comes from a 28 day average of data collected from the URLs added. This means that the improvements you do on the web page will take some time to reflect on the field data numbers. To measure results in the short term, we recommend using Lab Data.
* **Lab data:** using tools to simulate a page load in a consistent, controlled environment in real-time. This type of data is useful when developing new features, to test performance before releasing it to the public. Lab data can be seen in the Performance section of the page. The lab data comes from simulations using [Lightouse](https://github.com/GoogleChrome/lighthouse) for diagnostic purposes. It is also possible to manually refresh the report, to get near-real time data on these sections.

Note that you should not compare results from the two data types. They are not comparable, since they come from different sources, and serve different purposes. Know more about how each data type can be applied in Google's [How metrics are measured](https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured) documentation.

>ℹ️ To make sure your website is reaching the recommended target for all metrics, PageSpeed Insights measures the activity of the 75th percentile of page loads, segmented across mobile and desktop devices.

  ### How to use field and lab data to improve Core Web Vitals

You can switch between lab and field data to test different hypotheses, and ultimately improve your webpage's Core Web Vitals. We suggest following these general steps in your project:

1. Measure the current state field data.  
2. Pick a goal for improving user experience.  
3. Create a hypothesis on how to get there.   
4. Gather evidence with Core Web Vitals.  
5. Test possible solutions with lab data.  
6. Release new version.  
7. Validate the version using field data over time.  
8. Repeat.  

## List of URLs

Web Page Performance allows you to add multiple URLs to constantly assess the performance of each webpage. 

The URL is displayed in a card, along with:
- __Assessment:__ result of the URL's performance assessment, including the Core Web Vitals assessments of *Failed, Good, Not applicable*  and *Not enough data*. Know more in the Core Web Vitals section of this article.   
- __Impressions:__ number of times the top 10 URLs of your ecommerce website were accessed in the last 28 days.

You can browse through the added links and select which one to display on Web Page Performance, and analyze its performance metrics. By clicking on the <i class='fa-solid fa-ellipsis-vertical'></i> menu icon, it is also possible to `Copy URL` and `Visit Page` by clicking on the corresponding buttons on the URL's card.

>ℹ️ Google's PageSpeed Insights also shows metrics for the whole domain of the URL inserted, in case there is not enough data to show for a specific page. Meanwhile, Web Page Performance indicates data for the URL only, to make your assessment more actionable.

  ### Which URLs should you track? 

If your storefront is built within VTEX, the page displays by default the top 10 most visited pages in your store. 

If your storefront is not built with VTEX, we recommend that you track those URLs that have the most impact on your business. For example those present on your sales funnel, like  shopping cart, checkout or payment pages.

It is also possible to edit the list by adding and deleting URLs. You can add URLs from recent campaigns, promotions, or even competitors in your store's segment. 

### How to add a URL

1. In your VTEX Admin, access **Dashboards > Web Page Performance**, or type *Web Page Performance* in the search bar at the top of the page.  
2. On the top of the page, click on + **Add**.  
3. Fill in the field with the desired link.   

    > It should follow the format: `https://www.example.com/`.

4. To add more than one URL, click on + Add URL, and paste the desired link.    
5. To delete an inserted URL, click on the <i class=’fa-solid fa-trash-can’></i> trash can icon.    
6. Click on **Add**.    

### How to delete a URL

Note that the top 10 most accessed pages in your ecommerce cannot be deleted. You can only delete pages added by yourself.

1. In your VTEX Admin, access **Dashboards > Web Page Performance**, or type *Web Page Performance* in the search bar at the top of the page.   
2. If the URL displayed on the page is not the one you wish to delete, click on it and browse through the list of added URLs.  
3. Select the chosen URL by clicking on it.  
4. Click on the `Delete` button.  

## Core Web Vitals

![Core web vitals EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Dashboards/Dashboards%20in%20the%20VTEX%20Admin/web-page-performance_2.png)

 For each URL, the Web Page Performance page displays the score of [Google's Core Web Vitals](https://web.dev/vitals/#core-web-vitals) for that web page. 

Core Web Vitals are the subset of [Web Vitals](https://web.dev/vitals/) that apply to all web pages by measuring metrics related to page user experience. Each of the Core Web Vitals represents a distinct facet of the user experience, and is measurable in the field.

Each Core Web Vital is associated with usability, aimed at diagnosing whether the web page showcases an optimal experience for users. Know more about each Core Web Vital, by accessing Google's documentation linked below:

<table>
  <tr>
   <td><strong>Core Web Vital</strong>
   </td>
   <td><strong>User Experience</strong>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/lcp/">Largest Contentful Paint (LCP)</a>
   </td>
   <td>Loading: <em>is it happening?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/fid/">First Input Delay (FID)</a>
   </td>
   <td>Interactivity: <em>is it responsive?</em>
   </td>
  </tr>
  <tr>
   <td><a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a>
   </td>
   <td>Visual Stability: <em>is it delightful?</em>
   </td>
  </tr>
</table>

### Core Web Vital Thresholds and Assessments

Each Core Web Vital has a numerical interval that defines its **[Threshold](https://web.dev/defining-core-web-vitals-thresholds/)**. The thresholds are categorized as either:

* **Good:** the color code is green.   
* **Needs improvement:** the color code is orange.  
* **Bad:** the color code is red.   

Once you click on the `See details` button, the card expands, showcasing the thresholds for each Core Web Vital, like shown in the image below. For each threshold, the page shows the percentage of data that has decreased for each category.

There is also a general assessment of all Core Web Vital's thresholds, or a "result" of their combination. The **Core Web Vital's assessment** can be categorized as either:

* **Good:** achieved when three Core Web Vitals are within the "good" threshold.  
* **Failed:** achieved if at least one of the Core Web Vitals are out of the "good" threshold.   
* **Not enough data:** achieved if the page had not enough accesses in the last 28 days to have valid assessment.  
* **Not applicable:** if some Core Web Vitals had enough accesses to be measured, but others didn't.  

In the Web Page Performance page, you can see both Thresholds and assessments.

## Opportunities

The Opportunities card indicates the number of opportunities of improvement found by PageSpeed Insights, based on [Performance Audits](https://web.dev/lighthouse-performance/). When clicking on `See details`, a modal pops up, listing Lighthouse Performance Scoring diagnostics. On the modal, you can click on the arrow icon, to  expand each line. Then, you will see a brief description and a link to Google's documentation by clicking on `Learn More`. 

## Performance Scoring/Diagnostic Metrics

The Performance section of Web Page Performance includes a score which summarizes the page’s simulated performance. This score is determined by running [Google's Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to collect lab data and analyze diagnostic information about the page. The scores are considered:

* **Good**: 90 or above. The color code is green.
* **Needs improvement:** from 50 to 90. The color code is orange.
* **Poor**: below 50. The color code is red.

>⚠️ Note that performance varies a lot between stores, and is dependent on how your storefront's architecture was built. Complex storefronts, with multiple external scripts and features tend to perform with lower scores. For stores built on VTEX IO, check out [VTEX IO: Debugging Performance Issues](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-debugging-performance-issues). For stores using [FastStore](https://www.faststore.dev/), there is an [automated Lighthouse report for deploy previews](https://www.faststore.dev/releases/2022/04/22/webops).

Below the score you will see the individual scores achieved by a list of Web Vitals, along with a color code that indicates its threshold. You can manually update the score, by clicking on the <i class='fa fa-refresh'></i> refresh icon.

## Know more

* [VTEX IO: Getting Started with Lighthouse](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-getting-started-with-lighthouse)
* [Tracking Changes in Lighthouse Performance Score](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-tracking-changes-in-lighthouse-performance-score)

