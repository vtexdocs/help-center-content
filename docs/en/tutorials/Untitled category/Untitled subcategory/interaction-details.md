---
title: 'Offer Management: interaction details'
id: 5qC6XPkyUsYPd0dqKHQNlf
status: DRAFT
createdAt: 2021-03-17T01:16:13.273Z
updatedAt: 2024-06-20T21:43:33.011Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:20:58.901Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: interaction-details
locale: en
legacySlug: interaction-details
subcategoryId: unknown-subcategory
---

>ℹ️ To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module **Offer Management**. As a result, the module will not receive new updates or maintenance.
> For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [Developer Portal's release notes section](https://developers.vtex.com/updates/release-notes) and [VTEX Help Center announcements page](https://help.vtex.com/pt/en/announcements).  

The **Interaction details** page in the [Offer Management](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) module allows sellers to view all interactions of an offer regarding its sending and syncing processes in a comprehensive manner. Interaction details will be available for ten days after registration.

To access the **Interaction details** page, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Connections > Offer Managemen**.
2. Select an offer.    
3. In the list of interactions, select an interaction.    

On the **Interaction details** page, you will see the following sections:  
- [Header](#header)      
- [Interaction result](#interaction-result)      
- [Timeline](#timeline)

>ℹ️ In **Offer Management** , you can track offers using [Mercado Libre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic and Premium), [Netshoes](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) and VTEX marketplaces. For connectors to integrate via API, see [Offer Management Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Header
![Interaction details PT cabeçalho](//images.ctfassets.net/alneenqid6w5/7zEocS2MW5dSRzZaaqNDUc/d28534c5926b61794e3b16ac91636f86/Interaction_details_EN_cabe__alho.jpg)
The *header* summarizes the offer’s main information for quick viewing, such as the SKU name, the logo of the channel it was sent to, its ID on the VTEX platform and on the channel.

## Interaction result
[Offer](https://help.vtex.com/en/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) interactions or updates, which can be in the `Catalog`, `Price` or `Inventory`, consist of a series of system events called logs. Each log contains details of what occurred during the offer’s sending and syncing processes, which provides technical context for monitoring and fixing errors.

The *Interaction result* block provides information on the effect of the interaction on the offer, based on the combination of logs in the interaction. The status of an offer is determined by the result of its interactions. It indicates whether it was possible to send the offer to the channel and sync it. Here are possible interaction results: 

### Result: Success
![Interaction details PT resultado sucesso](//images.ctfassets.net/alneenqid6w5/72PZOesROTjIZbmFOTQ8jk/e0f5c0733c6ad25cc3eda476500bcd6a/Interaction_details_EN_resultado_sucesso.jpg)
The *Success* result indicates that the interaction fulfilled its expected effect. It means that the offer has been sent to the channel correctly, or that the offer’s price, inventory, or catalog information has been updated. 

### Result: Failure
![Interaction details PT resultado falha](//images.ctfassets.net/alneenqid6w5/1ZR16rSnDEVY0812xY4XFZ/c7dce5355ca57a597664740779478344/Interaction_details_ES_resultado_falha.jpg)
The *Failure* result indicates that the system could not complete the interaction due to an issue. This result leads to the *Error* status in the offer, preventing it from being sent or updated on the channel. When the interaction result is *Failure*, the issues detected will be listed and you can expand them for more information.

### Result: Notification
![Interaction details PT resultado aviso](//images.ctfassets.net/alneenqid6w5/7kwwswW5m4kVL3fXWzxKSV/f9983790af5371a5412ba1127390655e/Interaction_details_EN_resultado_aviso.jpg)
The *Notification* result provides information about the offer’s sending and syncing processes, making it easier for the seller to monitor it.

### Result: Processing
![Interaction details PT resultado processing](//images.ctfassets.net/alneenqid6w5/1gilFQQUmLVzTznTQDNv7G/e9a13da08b1a3e1b572c6363182d15e9/Interaction_details_EN_resultado_processing.jpg)
The *Processing* result means the interaction has not been completed and is still in progress. This is a temporary status because once the interaction's process is completed, it can only result in `success`, `failure`, or `notification`. 

## Timeline
![Interaction details EN linha do tempo](//images.ctfassets.net/alneenqid6w5/6rLi24P5ltS8XFIEBIn6hb/67355b2fccc741b3774e3789a17773e5/Interaction_details_EN_linha_do_tempo.jpg)
The system generates interactions to update information, and they use logs to make the necessary actions during the process. 

The timeline on the **Interaction details** page displays the logs generated for the interaction in chronological order, and the information is available for consultation for ten days. Once the interaction objective is achieved and no further logs are to be generated, the interaction is automatically closed. The timeline displays the following data:

- **Logs**: events generated in an interaction. Possible logs are:    
  - *Success*: indicates that the objective of the interaction was successfully achieved. For example, when price, catalog, or inventory updates have been completed.    
  - *Info*: shows the actions in an interaction, providing information and context to technical analysis. These logs may indicate internal processes within a system or calls between two systems. For example, they can show that an offer was added to the queue or is being processed, or that a call has been made to the catalog.  
  - *Warning*: indicates that the communication between two systems failed and there are no actions the user can perform to resolve it. These are usually cases where the system makes an automatic reattempt. For example: services not available, throttling, etc.  
  - *Failure*: logs that detect errors that prevent an offer from being sent and synced correctly on the channel and require manual review from the user. Errors can be generated on the VTEX seller side, such as product descriptions that exceed the character limit, and on the marketplace side, such as failed API calls.  
- **Date**: date on which the log was generated.  
- **Description**: text containing details about the event.  
- **Agent**: the system or agent responsible for the activity.   
- **Evidence**: `cURL` of the API call made between two systems. Click on the magnifying glass icon to see evidences for each log.   

## Learn more

-  [Offer Management module](https://help.vtex.com/en/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE)       
-  [Offer Management: offer details](https://help.vtex.com/en/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)
