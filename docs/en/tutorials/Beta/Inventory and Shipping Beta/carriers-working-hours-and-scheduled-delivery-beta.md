---
title: "Carriers' working hours and scheduled delivery (Beta)"
id: 5QjTT3ICL2HdEcVIguJiMI
status: ARCHIVED
createdAt: 2021-01-13T19:28:43.514Z
updatedAt: 2021-05-24T17:44:03.764Z
publishedAt: 
firstPublishedAt: 2021-01-13T22:14:49.093Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: carriers-working-hours-and-scheduled-delivery-beta
locale: en
legacySlug: carriers-working-hours-and-scheduled-delivery-beta
subcategoryId: 32vrn4K2ZscjUaIBe6w5fm
---

In the *Inventory & shipping* module you are able to manage all the logistics of your store.
In the tab *Shipping strategy* you can register your logistics route, including its **Shipping policies** or carriers. Thinking about improving your experience in this module, some features have been updated. 

The new features on the **Shipping policy** registration page give you more flexibility when setting up your delivery strategy. In the previous version, there was the section *Time setup*, in which you could select the *Working hours*, *Cut-off times* or *Scheduled Delivery* for a carrier. 

**Previous version**
![EN Configurações de tempo versão antiga](https://images.ctfassets.net/alneenqid6w5/2n9RGrhtYEYrGsnsBN3Qlj/5c6dfcad4a2511c33c6f2a5a0f0d358a/EN_Configura____es_de_tempo_vers__o_antiga.jpg)

In the new version, we’ve:  
- Changed option names to make it more clear to users.  
- Dedicated a section for the Scheduled Delivery configuration. Now you can set up this feature for your end-customer, regardless of the carrier’s time configuration.  
- Added an option to define your delivery capacity, in order to schedule deliveries based on your operation reality.   

**Beta version**
![EN Horário de funcionamento transportadora beta](//images.ctfassets.net/alneenqid6w5/7p1pOc8ng4KJCVIUUOZMtJ/f4883976b951e19591b4b75b228f9a10/EN_Hor__rio_de_funcionamento_transportadora_beta.jpg)

## Pickup time

This section was previously called *Cut-off times*. Despite the name change, the feature remains the same – it’s where you register the carrier timetable to collect the packages in your inventory or distribution center, and then send them to the end-customers.

## Delivery time window

In the previous version of this module, this configuration option was called *Business hours*. Despite the name change, the feature remains the same – it’s where you register the carrier’s working hours, in other words, the times that the carrier ships the packages to clients.

Just like in the previous version, you can't set up the “Shipping time window” and “Pickup time” options simultaneously. Please select the option which best suits the registered carrier operation and your shipping strategy.

## Scheduled Delivery

Previously, you could only choose the *Scheduled Delivery* function deprived of the *Business hours*. You can now set up the *Scheduled Delivery* option together with *Business hours* for your client to choose the most suitable shipping method during the order checkout. Please check the fields to fill-in when setting up this option.

**Beta version**
![EN entrega agendada](//images.ctfassets.net/alneenqid6w5/5NEf2aJHHPmQTIFgvDt19H/7165d0778182cb771f137637ef8e2a2b/EN_entrega_agendada.jpg)

- **Max. range of delivery**: this field must be filled according to your logistics operation. Please define the time period that the carrier takes to do a scheduled delivery, from the order to the delivery confirmation.  
- **Set operational capacity**: depending on the characteristics of your operation, and on how the carrier sends its products, you might prefer to define a delivery capacity in the number of items or number of orders. For example, if your store is in the supermarket sector, and the means of transportation for the scheduled delivery is by motorcycle, only a limited number of items will fit into the motorcycle storage. For this reason, we recommend that you select “items” as units. However, if your operation already has a few items per order, you might prefer to define `orders` as units, for example.  
- **Weekday:** the field where select the weekday of your scheduled delivery. The following fields will apply to the selected weekday.    
- **Delivery Capacity**: the field where you define the maximum number of items or orders that can be delivered on that weekday.  
- **Additional value**: the field where you define the extra logistics costs that apply to this weekday.   
- **Start:** the time that scheduled deliveries start on that weekday.   
- **End:** the time that scheduled deliveries end on that weekday.  

