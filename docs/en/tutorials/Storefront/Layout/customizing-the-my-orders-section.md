---
title: 'Customizing the My Orders section'
id: 4DXbgLL65iMKsW40kuaAwK
status: ARCHIVED
createdAt: 2017-05-02T18:59:18.106Z
updatedAt: 2021-04-05T21:34:01.967Z
publishedAt: 
firstPublishedAt: 2017-05-02T19:01:38.688Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_6
slugEN: customizing-the-my-orders-section
locale: en
legacySlug: customizing-the-my-orders-section
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

The new **My Orders** is a *major* update that changes all the layout and structure of the page, thus requiring that the customizations are remade.

It's already available in beta environment (`accountname.vtexcommercebeta.com.br`) for testing, and it's activated with an opt-in checkbox, as you can see in the [article presenting](http://help.vtex.com/en/tutorial/new-my-orders-area) the new section.

See below a list of the classes available to aid in the customization.

>⚠️ Interface customizations **are not officially supported by VTEX**.
>
>
> 
>
>
>  
> These classes and configurations can be changed or removed in future updates. As a best practice, we recommed treating javascript errors so your customization code won't break in case any class is removed in the future.

>ℹ️ If you already have a customization file for the previous version of the My Orders, we recommend you put the new customization in a separate file.

### Order list

![Order list with customization classes highlighted on top of the elements](https://images.contentful.com/alneenqid6w5/1P5JMzt3jGIAKIOmC4ka4e/d7511d7273f4a957acc6f7e1322a81e6/my-orders-doc-1.png) 

CSS:
```
.myo-toggle {  
 // Toggle that changes between order lists
}  

.myo-order-card {  
 // Order card
}  

.myo-order-header {
 // Header for the order card
}  

.myo-order-sku {
 // Element for the SKU (product)
}  

.myo-invoice-btn {
 // Invoice printing button
}  

.myo-details-btn {
 // Link to product details
}  

.myo-cancel-btn {
 // Link to cancel the order
}  
```

### Order detail

![Order details page with customization classes highlighted on top of the elements](//images.contentful.com/alneenqid6w5/5szHUT7x9CAOseYGkcEskS/e8a846072846d20648c65a1cd00059c4/my-orders-doc-2.png)

CSS:
```
.myo-workflow {
 // Order workflow
}  

.myo-product-row {
 // Row with the order product
}  
```

### Order cancellation

![Order cancellation page with customization classes highlighted on top of the elements](//images.contentful.com/alneenqid6w5/5mUVzR5n7aMScoSs4auem4/05bfeea119bb4fc42afe448c66c9674f/my-orders-doc-3.png)

CSS:
```
.myo-option-heading {
 // Heading for the reasons section
}  

.myo-option {
 // Row with cancellation option
}  

.myo-option-disclaimer {
 // Box with disclaimers about the order cancellation
}  

.myo-summary {
 // Sidebar with order summary
}

.myo-summary-header {
 // Header for the sidebar 
}

.myo-summary-product {
 // Row with order product in the sidebar
}
```
