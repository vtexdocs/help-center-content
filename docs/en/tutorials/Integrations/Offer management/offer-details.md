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
slugEN: offer-details
locale: en
legacySlug: offer-details
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

>ℹ️ To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module **Offer Management**. As a result, the module will not receive new updates or maintenance.
> For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [Developer Portal's release notes section](https://developers.vtex.com/updates/release-notes) and [VTEX Help Center announcements page](https://help.vtex.com/pt/en/announcements).  

An offer is an SKU from a seller that has been sent to different sales channels and whose price and inventory have been configured. The [Offer Management](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) module allows sellers to supervise the sending of their offers to marketplaces and see their sync status.

In this module, the **Offer details** page is where you can view all the information about a specific offer, such as its interactions, [interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf), and errors detected. Interaction details will be available for ten days after registration.

To access the **Offer details** page, follow the instructions below: 

1. In the VTEX Admin, go to **Marketplace > Connections > Offer Management**.
2. Click on an offer.  

The **Offer details** page contains the following sections:
- [Header](#header)   
- [Offer status](#offer-status)  
- [List of interactions](#list-of-interactions) 

>ℹ️ In **Offer Management** , you can track offers using [Mercado Libre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic and Premium), [Netshoes](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) and VTEX marketplaces. For connectors to integrate via API, see [Offer Management Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Header

![Offer details EN cabecalho](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_1.jpg)

The header displays the main information about the offer for quick viewing, such as its image, channel, name, status, ID on VTEX, and ID on the channel. You can also make the following changes by clicking on the `Edit` button:

- Edit information  
- Edit price   
- Edit inventory     

By selecting one of these options, you will be redirected to the page corresponding to each change.  

## Offer status

The Status block shows details about the offer status, which can be Synched, Error, Unavailable, or Sending.   

### Status: Synched

![Offer details PT status sucesso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_2.jpg)

The *Synched* status indicates that the offer has been successfully received on a channel and is being updated by both the marketplace and the seller in real time.   

### Status: Error

![Offer details PT status erro](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_3.jpg)

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

![Offer details PT status indisponivel](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_4.jpg)

The *Unavailable* status indicates that the offer has been discarded for being inactive or not included in the [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) (or trade policy) determined for the channel.

### Status: Sending

![Offer details PT status enviando](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_5.jpg)

The *Sending* status indicates that the offer is being submitted to the channel. This status refers to offers that: are being submitted to the marketplace for the first time; are migrating to a new channel; or have been resent after being discarded in another channel.   

## List of interactions

![Offer details PT lista interacoes](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Integrations/Offer%20management/offer-details_6.jpg)

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

