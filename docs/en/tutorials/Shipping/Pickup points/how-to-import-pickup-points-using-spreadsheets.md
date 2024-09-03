---
title: 'How to import pickup points using spreadsheets'
id: 6jqlX7MFOga6cMoWKqiugU
status: ARCHIVED
createdAt: 2018-12-18T12:12:03.208Z
updatedAt: 2020-07-03T20:09:24.814Z
publishedAt: 
firstPublishedAt: 2018-12-27T18:17:55.655Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: how-to-import-pickup-points-using-spreadsheets
locale: en
legacySlug: how-to-import-pickup-points-using-spreadsheets
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Pickup points are a very important aspect of any [omnichannel](/en/announcement/shift-your-business-with-vtexs-omnichannel-experience) strategy.

You can [setup pickup points one by one](/en/tutorial/registering-pickup-points) or in bulk, through an XLS spreadsheet [(like this example file)](https://assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). By choosing to upload an XLS file, you can register all your pickup points at once (as long as it doesn't exceed 10 MB).

>ℹ️ A **10 MB** XLS file allows you to register an average **50.000 pickup points**. If you have more pickup points to import, you'll need to split them into different spreadsheets and upload them separately.



## How to upload the spreadsheet
1. Click on __Inventory & shipping__, on the __Orders__ section of the sidebar.
2. On the options that open up, click on __Pickup points__.
3. Click on the __Upload an XLS__ link, located on the top-right corner of the page. ![Upload XLS](https://images.ctfassets.net/alneenqid6w5/4rUkTvzcqso46aGcsOYwMc/e8cf57f6c1ee560062dc8c1bfd7767ba/Upload_XLS.png)
4. A modal window will appear, allowing you to upload your `.xls` extension file or to download the [example spreadsheet](https://assets.ctfassets.net/alneenqid6w5/2QZFVRKdaoOkykE4AUkw6m/bdf62b6d028819b5b8c08ef7a27eadc6/pickups_example.xls). Remember that it comes with lines filled with example values, so you must replace them with your pickup points' actual data. ![modal (EN)](https://images.ctfassets.net/alneenqid6w5/52EN8SmteU0kQK4U0YKy8a/1129dc87228d86800e06b455d5ccddf2/modal__EN_.png)
5. With all set, your new pickup points will be available to your clients.



## How to fill in the spreadsheet correctly
For the spreadsheet to fulfill its role, you need to fill in each column as expected. Otherwise, the system will not be able to process the provided information, and the pickup points won't be imported.


### Mandatory data

&bull; Columns `Name`, `PostalCode`, `Latitude`, `Longitude`, and `CountryAcronym` have to be filled. All pickup points need to have these data entered correctly.


### BusinessHours column

&bull; This column indicates the working schedule for a given pickup point. It needs to be filled in following the format `WeekDay,BeginningHour,EndHour`, with no spaces and using commas to separate each piece of information.

&bull; You must fill each working day as an independent entry.  In other words, for each day you wish a given pickup point is available to your clients,  you must enter the data as follows: `WeekDay,BeginningHour,EndHour`.

&bull; The days of the week must be referred to as the follows:
> 0 = Sunday
> 
> 1 = Monday
> 
> 2 = Tuesday
> 
> 3 = Wednesday
> 
> 4 = Thursday
> 
> 5 = Friday
> 
> 6 = Saturday

&bull; You must enter hours using the __24h standard__, following the `hh:mm` format, where `hh` indicates hours and `mm`, minutes. 

&bull; You must enter, one by one, the pickup points' working days and hours, always separated by semicolons and no spaces.


### PickupHolidays column

&bull; If you want to give your clients the possibility to pick up their orders during a holiday, you must add an entry into the `PickupHolidays` column. There, you must inform the holiday's exact date, beginning and end hour (with no spaces and using commas to separate each piece of information).

&bull; You must enter the holidays one by one. If you want to add more of them, use semicolons (`;`) and no spaces.

&bull; You must enter the date using the ISO format: `yyyy-mm-dd`, where `yyyy` indicates the year, `mm` refers to the month, and `dd` points out the day.

&bull; You must enter hours using the __24h standard__, following the `hh:mm` format, where `hh` indicates hours and `mm`, minutes.
