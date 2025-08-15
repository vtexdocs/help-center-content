---
title: 'Issuing sales receipts in Sales App via thermal printer'
id: 6GIUB1fVQVGZscsMoIsN1f
status: PUBLISHED
createdAt: 2025-08-01T19:46:33.357Z
updatedAt: 2025-08-01T20:19:18.600Z
publishedAt: 2025-08-01T20:19:18.600Z
firstPublishedAt: 2025-08-01T20:14:47.926Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: issuing-sales-receipts-in-sales-app-via-thermal-printer
legacySlug: issuing-sales-receipts-in-sales-app-via-thermal-printer
locale: en
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

> ℹ️ This feature is only available for Android and is compatible with specific thermal printers, as described in the [Requirements](#requirements) section.

[VTEX Sales App](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc) allows sales associates to print sales receipts using a thermal printer directly from a mobile device via a Bluetooth connection.

This feature eliminates the need for the sales associate to go to the cash register to generate a receipt, allowing it to be issued quickly within the **Sales App** sales flow. The result is a faster service and a better shopping experience for customers.

> ⚠️ Printing a sales receipt via thermal printer in **Sales App** doesn't interfere with the order invoice. The invoice or receipt is issued later, as it depends on integrations with payment connectors and logistical considerations, such as the warehouse used. 

If your store wants to issue receipts with automatic invoicing for local (OnHands) sales, we recommend contacting our partner Neomode.

## Requirements

To issue sales receipts in **Sales App** using a thermal printer, your store must meet the following criteria:

* Use Android devices.
* Have a thermal printer following the ESC/POS protocol.

The ESC/POS protocol (Epson Standard Code for Point of Sale) is a set of commands developed by Epson for use with point-of-sale printers and other devices.

To check if your thermal printer meets this requirement, look for the term "ESC/POS" in the product manual or on the manufacturer's website.

## Printing receipts via a thermal printer

To print the sales receipt using the **Sales App**, follow the steps below:

1. Turn on Bluetooth on your mobile phone.
2. Connect your phone to the thermal printer via Bluetooth.

  > ℹ️ If the printer is not automatically recognized, search for the driver on the manufacturer's website and follow the installation instructions.

3. In **Sales App**, on the final order screen or after selecting an order in the **Orders** section, click `Print order`.

  > ❗ The first time you use this feature, an error may occur at this step. Close the app and follow the instructions from the beginning. If the error persists, contact our [Support team](https://help.vtex.com/en/support).

4. Select the desired thermal printer, and the printing will start immediately.

The printed receipt includes the following information:

* Store name and details
* Customer identification
* Order details (per package)
* Order shipping information
* Payment details

For stores with integrations by partners like Neomode that immediately invoice OnHands sales, the invoice will appear on the receipt, as shown in the image below:

![thermic_printer_receipt_EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/unified-commerce/vtex-sales-app/issuing-sales-receipts-in-sales-app-via-thermal-printer_1.png)
