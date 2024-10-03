---
title: 'Warehouse data entry fields'
id: 3AvR9vXYIbiohz8yvtsn6a
status: ARCHIVED
createdAt: 2019-08-28T22:25:01.500Z
updatedAt: 2020-07-03T21:43:28.640Z
publishedAt: 
firstPublishedAt: 2019-09-09T19:48:16.996Z
contentType: tutorial
productTeam: Post-purchase
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: warehouse-data-entry-fields
locale: en
legacySlug: warehouse-data-entry-fields
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

To better understand each **warehouse** data entry field's meaning, read the full description below:

- _ID_: warehouse ID field, comprised solely of letters, numbers, hyphen and underline. Optional field which, if left blank, will be automatically filled in by the system.
- _Nome_: warehouse's name.
- _Delivering from_: link your new warehouse to loading docks that will use it. More than one loading dock can be selected and the _processing time_ and _extra fee_ can also be configured for each loading dock.
- _Processing time_: time taken into account when calculating delivery time. If left blank, the default value `0` will be given.
- _Extra fee_: value that will considered when choosing the most advantageous loading dock for a specific delivery. The lower the value, the more priority this loading dock will have for deliveries from the warehouse you are currently adding. This value is not used for calculating shipping costs.  
- _Pickup points_: field that's part of the _VTEX inStore settings_. Before selecting this options, you need to already have an existing _pickup point_ linked to your store. You can add one by selecting the _pickup points_ section from within _inventory & shipping_ in Admin. In case you're not using VTEX inStore, leave this field blank.
> for more on adding pickup points, read [this article](https://help.vtex.com/tutorial/Adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E "Adding Pickup Points").
