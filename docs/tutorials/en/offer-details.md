---
title: 'Offer Management: offer details'
id: 4FF9QYAewqAn610mDHwb0P
status: DRAFT
createdAt: 2021-03-17T01:07:12.412Z
updatedAt: 2024-06-20T21:34:45.076Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:13:19.773Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: offer-details
locale: en
legacySlug: offer-details
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

<div class="alert alert-info">
To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b>. As a result, the module will not receive new updates or maintenance.
For connectors and marketplaces already integrated into the module, please contact the development team by email <a href="taissa.araujo@vtex.com.br">taissa.araujo@vtex.com.br</a>.
For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the <a href="https://developers.vtex.com/updates/release-notes">Developer Portal's release notes section</a> and <a href="https://help.vtex.com/pt/en/announcements">VTEX Help Center announcements page</a>.
</div>  

An offer is an SKU from a seller that has been sent to different sales channels and whose price and inventory have been configured. The [Offer Management](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) module allows sellers to supervise the sending of their offers to marketplaces and see their sync status.

In this module, the **Offer details** page is where you can view all the information about a specific offer, such as its interactions, [interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf), and errors detected. Interaction details will be available for ten days after registration.

To access the **Offer details** page, follow the instructions below: 

1. In the VTEX Admin, go to **Marketplace > Connections > Offer Management**.
2. Click on an offer.  

The **Offer details** page contains the following sections:
- [Header](#header)   
- [Offer status](#offer-status)  
- [List of interactions](#list-of-interactions) 

<div class = "alert alert-info">
In <b>Offer Management</b> , you can track offers using <a href="https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Libre</a> (Classic and Premium), <a href="https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm">Netshoes</a> and VTEX marketplaces. For connectors to integrate via API, see <a href="https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors">Offer Management Integration Guide</a>.
</div>

## Header

![Offer details EN cabecalho](https://images.ctfassets.net/alneenqid6w5/6XRh7RmJr7rfGUfVHER580/95810a56417e12b9296cd728ac3cb326/Offer_details_EN_cabecalho.jpg)

The header displays the main information about the offer for quick viewing, such as its image, channel, name, status, ID on VTEX, and ID on the channel. You can also make the following changes by clicking on the `Edit` button:

- Edit information  
- Edit price   
- Edit inventory     

By selecting one of these options, you will be redirected to the page corresponding to each change.  

## Offer status

The Status block shows details about the offer status, which can be Synched, Error, Unavailable, or Sending.   

### Status: Synched

![Offer details PT status sucesso](https://images.ctfassets.net/alneenqid6w5/6s1o33PAsB6H7X3Z0UJxaY/c2968ed1f70e475991cf6ab432099d7d/Offer_details_EN_status_sucesso.jpg)

The *Synched* status indicates that the offer has been successfully received on a channel and is being updated by both the marketplace and the seller in real time.   

### Status: Error

![Offer details PT status erro](https://images.ctfassets.net/alneenqid6w5/5M2tBMrTbrBloZ1093Jdjw/482919e396734cfdc6e1ccc0ba1a555b/Offer_details_EN_status_erro.jpg)

The *Error* status indicates that the system identified an issue that prevents an offer from being sent or updated on a channel, and the seller needs to take action to fix it. Errors can be generated on the VTEX seller side, such as product descriptions that exceed the character limit, and on the marketplace side, such as failed API calls.   

If the offer status is *Error*, a list of detected errors will be displayed on the status block. You can expand their information to understand what happened and how to solve it. Each error description contains the following information:  

- **Error name**: title that summarizes the identified error.  
- **Date**: date and time when the error was identified.  
- **Code**: the identifier number of this specific error, assigned by the _Offer Management_ system.  
- **Description**: a paragraph that gives more context about the failure and its solution.  
- **Origin**: the system in which the interaction occurred, such as  Catalog, Inventory, or Price.  
- **Edit price/Edit catalog/Edit inventory**: options that redirect you to the page corresponding to each change.  
- **View interaction**: access the [interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) page to investigate the error in a more granular way.  

If there are still errors to be fixed, or if all errors have been fixed but the offer is still being reprocessed, the offer status will remain  *Error* until the [interaction](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) has been completed.  

### Status: Unavailable

![Offer details PT status indisponivel](https://images.ctfassets.net/alneenqid6w5/5ASZDWJU36WcdTJPL4HyWh/5631d49b42f0b71ae84b5f6892657c7b/Offer_details_EN_status_indisponivel.jpg)

The *Unavailable* status indicates that the offer has been discarded for being inactive or not included in the [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) (or trade policy) determined for the channel.

### Status: Sending

![Offer details PT status enviando](https://images.ctfassets.net/alneenqid6w5/4sIUmJ2FxZ02SlOCPNYEi6/1f50f1f4b63b5a94ab6747fd70ab8df5/Offer_details_EN_status_enviando.jpg)

The *Sending* status indicates that the offer is being submitted to the channel. This status refers to offers that: are being submitted to the marketplace for the first time; are migrating to a new channel; or have been resent after being discarded in another channel.   

## List of interactions

![Offer details PT lista interacoes](https://images.ctfassets.net/alneenqid6w5/78sdw5zgXZJL8aM9wMKqVE/6a9970fc7c50d001f4bc1df358247641/Offer_details_EN_lista_interacoes.jpg)

The *Interactions* tab lists all `inventory`, `price` or `catalog` updates that that SKU has undergone. You can filter them by origin or status and adjust the number of items displayed per page. Each row corresponds to an interaction regarding that offer and includes the following data:

- **Date**: date and time when the interaction occurred.    
- **Origin**: the system in which the interaction occurred,  such as Catalog, Inventory, or Price.     
- **New value**: the price or number of items in stock that has been successfully updated.     
- **Result**: informs the outcome of the interaction with that offer. The status of an offer is determined by the result of its interactions. It indicates whether it was possible to send the offer to the channel and sync it. Possible results are:     
  - **Success**: when the interaction completes its life cycle correctly, resulting in a change in the offer's price, inventory, or catalog.     
  - **Failure**: indicates that the system could not complete the interaction due to an issue.     
  - **Notification**: when the interaction provides information about the process, making it easier for the seller to monitor it.  
  - **Processing**: when there is an ongoing interaction process, and you are yet to receive further details. This is a temporary status because once the interaction's process is completed, it can only result in `success`, `failure`, or `notification`.     

For more detailed information about, click on the interaction to access the [Interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) page.

## Learn more

-  [Offer Management module](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)          
-  [Offer Management: interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)  

