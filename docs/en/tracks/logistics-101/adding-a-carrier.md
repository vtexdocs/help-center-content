---
title: 'Adding a carrier'
id: 55MezrFTw2limlgT7KUg6l
status: ARCHIVED
createdAt: 2019-08-22T12:48:28.695Z
updatedAt: 2022-03-08T18:43:37.944Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:51:47.591Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: adding-a-carrier
locale: en
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistics-101
---

The carriers, which are set up as **Shipping Policies** at VTEX, are the companies responsible for distributing the products sold through an e-commerce platform. It is common for a store to have multiple carriers associated with it. When adding shipping policies, you can configure different time frames, prices, modes of transportation and deliveries, enabling highly personalized logistics.

## How to add a carrier

1. Access the __Inventory & Shipping__ module.
2. Access the __Shipping strategy__ tab.
3. Click on __Create Shipping Policy__.
4. Fill out the fields listed below.
5. Click on __Save__.

## How to delete a carrier

1. Access the __Inventory & shipping__ module.
2. Access the __Shipping strategy__ tab.
3. Click on the trash can icon next to the shipping policy you want to delete.
4. Click on __Delete__.

## How to edit a carrier

1. Access the __Inventory & shipping__ module.
2. Access the __Shipping strategy__ tab.
3. Click on the pencil icon next to the shipping policy you want to edit.
4. Change settings. 

> *To edit shipping rates, download the spreadsheet and upload its updated version*.

5. Click on __Save changes__.

## Fields to add a carrier

To add a carrier, you need to fill in a number of fields. 
The following settings are available:

- __Active__: the flag that indicates whether this shipping policy is enabled.
- __Name__: the internal name of the carrier.
- __ID__: the identifier for internal use and for integrators. It must be completed with letters and numbers only. If not filled in, an ID will be created automatically.
- __Shipping method__: the type of shipping chosen by the customer. It separates the different shipping services provided by the same carrier. It is the name that will be displayed at checkout for the customer. Ex. Express vs. regular. [Learn more about shipping methods](/en/tutorial/how-does-the-type-of-delivery-work).

- __Upload shipping rates__: the spreadsheet with the shipping rates and times assumed by the carrier. [Learn more about shipping spreadsheets](/en/tutorial/building-a-freight-spreadsheet).

- __All dimensions sum__: the dimension limits accepted by the carrier. When reaching this value, the order will be split into packages or won’t be shipped by this carrier.
- __Largest edge__: the largest edge accepted by the carrier. When reaching this value, the order will be split into packages or won’t be shipped by this carrier.
- __Cubic weight factor__: the factor that will be used for calculating the cubed weight. It is the sum of the measures, divided by the cubic factor. Learn more about cubed weight calculation.
- __Minimum weight factor__: use the cubic weight only if it exceeds this value. It is the weight limit from which the calculation of the cubed weight will be considered for shipping.

- __Weekends and holidays__: check the flags to activate shipping in the following scenarios: `Saturday delivery`, `Sunday delivery`, `Holiday delivery`.

- **Active modals**: specifications of products that require special delivery. These are the carrier’s shipping limitations. Learn more about modals. Check the flags to activate shipping in the following scenarios: `chemical`, `electronic`, `furniture`, `glass`, `liquid`, `mattresses`, `refrigerated`, `tires`, `white line` and `firearms`.

- **Minimum of items**: the minimum number of items accepted per shipping.
- **Minimum value**: the minimum value per shipping.
- **Maximum value**: the maximum value accepted per shipping.

- **Link pickup points**: check this flag to enable the Pickup Points option. Click on the dropdown and select the `Tags`, `Pickup Points` and `Sellers` previously added.

- **Time Setup**: Select the day, opening and closing times in the following scenarios. You can add more than one time frame per scenario.

- **Business Hours**: the days and times in which the carrier will work. It is used to define the carrier's availability for your store’s logistics operation. [Learn more about how to configure a carrier's business hours](https://help.vtex.com/en/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS).
- **[Scheduled Delivery](https://help.vtex.com/en/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)**: it is a feature that allows you to define custom delivery times, including specific time frames and prices. Customers will be able to choose the time frame in which they wish to receive their orders. Learn more about scheduled delivery.
