---
title: 'Offer Management: Buybox opportunities'
id: 1hO9eI1th47EGxQoTzGewC
status: DRAFT
createdAt: 2021-07-29T19:59:30.988Z
updatedAt: 2024-06-20T21:42:56.304Z
publishedAt: 
firstPublishedAt: 2021-07-29T20:20:39.780Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: sent-offers-buybox-opportunities
legacySlug: sent-offers-buybox-opportunities-beta
locale: en
subcategoryId: 
---

<div class="alert alert-info">
To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b>. As a result, the module will not receive new updates or maintenance.
For connectors and marketplaces already integrated into the module, please contact the development team by email <a href="taissa.araujo@vtex.com.br">taissa.araujo@vtex.com.br</a>.
For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the <a href="https://developers.vtex.com/updates/release-notes">Developer Portal's release notes section</a> and <a href="https://help.vtex.com/pt/en/announcements">VTEX Help Center announcements page</a>.
</div>  

An offer is a SKU from a seller that has been sent to a sales channel and whose price and inventory have been configured. The [Offer Management](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) module in the VTEX Admin allows sellers to monitor their offers’ submission and sync on marketplaces. Besides, it can lead to an increase in your product sales. 

The *Opportunities* feature identifies offers that can have an outstanding performance on the channels they are being sold and then performs actions to take those opportunities. 

An example of an opportunity is Mercado Libre’s *Buybox* feature. Buybox is a feature available at Mercado Libre checkout, which selects offers from different sellers for the same product and displays them to the customer. The **Offer Management** module evaluates offers for the same products available for sale on Mercado Libre to add them to the Buybox.

On the **Offer Management** page, *Opportunities* will be indicated in the offers listed, as illustrated in the next section.

<div class = "alert alert-info">
In <b>Offer Management</b> , you can track offers using <a href="https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Libre Classic</a>, <a href="https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Libre Premium</a>, <a href="https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm">Netshoes</a> and <a href="https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#being-a-vtex-marketplace">VTEX marketplaces</a>. For connectors to integrate via API, see <a href="https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors">Offer Management Integration Guide</a>.
</div>

## Offer list

On the [Offer Management](https://help.vtex.com/en/tutorial/offers-listing--7MRb9S78aBdZjFGpbuffpE) page, offers with Buybox opportunities will have a lightning icon <i class="fas fa-bolt"></i>  next to their title. When you click on an offer that is an `Opportunity`, you will be redirected to the following page.

## Offer details

![EN Oportunidades Offer details](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/uncategorized/unknown-subcategory/sent-offers-buybox-opportunities_1.jpg)

The [Offer details](https://help.vtex.com/en/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) page displays a message about the `Opportunity` at the top of the page. By clicking on `View opportunity`, you will be redirected to the following page.

## Offer opportunities

![EN Oportunidades oportunidades do anúncio](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/uncategorized/unknown-subcategory/sent-offers-buybox-opportunities_2.jpg)

The **Offer opportunities** page displays the Buybox-eligible offer next to the one already available for sale on the marketplace. On this page, you can compare the data of both offers, such as their brand information, specifications, and dimensions.

## Adding offers to the Buybox

Follow the steps below to add your offer to the Buybox:

1. In the VTEX Admin, go to **MARKETPLACE > Offer Management**.
> For the [Redesigned VTEX Admin](https://content.vtex.com/join-new-admin-beta-program-en/), you will find this page under **Marketplace > Connections**.
2. Select an offer with the lightning icon <i class="fas fa-bolt"></i>.
3. On the **Offer details** page, click on `View opportunity`.
4. On the **Offer opportunity** page, make sure your product is the same as the one already for sale on the marketplace. If they are the same, click on `Add to Buybox`. 
5. Click on `Add`. 

<div class="alert alert-warning">
This action cannot be undone, so make sure you are offering the correct product. If your offer is not for the same product listed on the marketplace, you must not add it to the Buybox. Adding offers for different products to the Buybox can damage your reputation in that marketplace.  
</div>

To be well-positioned on the Buybox, perform the configurations indicated in the [Winning or losing the Buybox](#winning-or-losing-the-buybox) section of this article.

## Winning or losing the Buybox

After [adding the offer to the Buybox](#adding-offers-to-the-buybox), your offer will become active in the Buybox for that product but will not necessarily be the featured one on the marketplace. There are two possible statuses for your offers in the Buybox:

- **Winning:** means you have activated the opportunity and that your offer is the first option in the Buybox. 
- **Losing:** means you have activated the opportunity but have not performed the necessary configurations to make your offer attractive enough to be the first option.

You can try to win the Buybox by following the instructions below:

1. On the **Offer opportunity** page, click on `See offer details`. 
2. Go to the **Active opportunities** section. 
3. Follow the instructions to complete the necessary configurations and list your offer in the Buybox.

In this section, you will see the following information:   

- **Buybox data:** information about the Buyboxes where the offer is listed.  
- **Opportunity status:** indicates if your offer is `Winning` or `Losing` the Buybox.  
- **List of settings:** actions required for your offer to win the Buybox. Instructions include offering a lower price, free shipping, fast delivery, or interest-free payment options, for example. Each item in the list has a suggested configuration to make the offer more attractive to win the Buybox.
