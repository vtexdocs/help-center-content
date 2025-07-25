---
title: 'Printing an order summary'
id: 5UeqJA3sHp5goJacvHwPoS
status: PUBLISHED
createdAt: 2021-08-05T14:40:53.752Z
updatedAt: 2023-07-26T19:01:33.402Z
publishedAt: 2023-07-26T19:01:33.402Z
firstPublishedAt: 2021-08-05T14:47:18.680Z
contentType: trackArticle
productTeam: Shopping
slugEN: printing-an-order-summary
locale: en
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: instore-using-app
---

When an order is placed using VTEX Sales App, it is possible to print the order summary if this customization is enabled and if there is a correctly configured printing device.

To do this, the sales associate can click on the `Print order` button on the completed order screen, as illustrated below. Another option is to configure VTEX Sales App to print the order summary automatically as soon as an order is placed.

![15. Configurar impressão de resumo do pedido - 1 - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-using-app/printing-an-order-summary_1.png)

To enable order summary printing, follow the steps below.

## 1. Customizing VTEX Sales App

First, your store developers must follow the instructions in [Set up order summary printing](https://developers.vtex.com/vtex-rest-api/docs/set-up-the-order-summary-printing) to enable this customization.

## 2. Configuring the printer device in VTEX Sales App

Next, you must configure a printer connected to VTEX Sales App to print order summaries.

### Prerequisites

To pair VTEX Sales App with a printer, the following prerequisites must be met:

* Using computer with Windows 7 or higher operating system.
* Having VTEX Sales App installed on your computer. If you do not have it, you must install the app by following our [Installation](/en/tracks/instore-using-the-app--4BYzQIwyOHvnmnCYQgLzdr/2rPSJ8519UCCZo5uEBkqxh) guide.
* Obtaining a pair of credentials (AppKey and AppToken) with the corresponding access permissions. For more information, please refer to the article [Application keys](/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet).

<div class="alert alert-info">
<p>We recommend that the access profile associated with these credentials be the <strong>VTEX Sales App Sales Person</strong>. However, you can also use a profile with access to other Admin modules, such as <strong>Super Admin</strong>.</p>
</div>

### Step-by-step instructions

After obtaining the AppKey and AppToken, follow the steps below.

1. Connect your printer via Wi-Fi, Bluetooth, or USB to the computer on which VTEX Sales App is installed.
2. Open the VTEX Sales App app and enter the name of the store where you want to configure the printer.
3. In the VTEX Sales App main menu, go to **Settings** and click on the <i class="fas fa-cog"></i> **Configure device** option, as shown below.

![15. Configurar impressão de resumo do pedido - 2 - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-using-app/printing-an-order-summary_2.png)

<ol start="4">
  <li>You will see the summary of the configured device. If this is the first time this configuration is performed, the fields on the screen will be empty, as shown in the image below. If a device has been previously configured, you will see the <b>Device name</b> and <b>Default printer</b>. Click on the <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Edit</span> button.</li>
</ol>

![15. Configurar impressão de resumo do pedido - 4 - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/instore-using-app/printing-an-order-summary_3.png)

<ol start="5">
  <li>Fill out the form according to the descriptions below.
    <ul>
      <li><b>App Key:</b> name of the application key. For more information, please refer to the <a href="#prerequisites" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Prerequisites</a> section.</li>
      <li><b>App Token:</b>  token of the application key. For more information, please refer to the <a href="#prerequisites" rel="noopener noreferrer" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Prerequisites</a> section.</li>
      <li><b>Insert the device name:</b>  name you want to use to identify the device.</li>
      <li><b>Default printer:</b>  select the printer from the list of printers connected to your computer.</li></ul></li>
  <li>After entering this data, click on <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configure</span>.</li>
</ol>

Once this process is completed, the sales associates will be able to select the printer from the list of options to print order summaries in VTEX Sales App. The system identifies the printer via the Internet.
