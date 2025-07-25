---
title: 'Offer Management module'
id: 7MRb9S78aBdZjFGpbuffpE
status: DRAFT
createdAt: 2021-03-17T00:44:49.452Z
updatedAt: 2024-06-20T21:34:27.585Z
publishedAt: 
firstPublishedAt: 2021-03-17T01:05:49.343Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: offer-management
locale: en
legacySlug: offers-listing
subcategoryId: 2zVauFUkYn8vgS0y0MfWeK
---

>ℹ️ To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module **Offer Management**. As a result, the module will not receive new updates or maintenance.
> For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [Developer Portal's release notes section](https://developers.vtex.com/updates/release-notes) and [VTEX Help Center announcements page](https://help.vtex.com/pt/en/announcements).  

The **Offer Management** module allows sellers to track the sending and syncing of their offers on all sales channels integrated with the store. On the VTEX platform, an offer is a SKU from a seller that has been sent to a sales channel and whose price and inventory information have been configured.

![Offer Management gif](https://images.ctfassets.net/alneenqid6w5/39zPddPF6cBtI1QZn7GSDz/d270dd62f2b92f6100de71836279b195/Offer_Management_gif.gif)

In **Offer Management**, you can track offers sent to the following channels: [Mercado Libre](https://help.vtex.com/en/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq) (Classic and Premium), [Netshoes](https://help.vtex.com/en/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) and VTEX marketplaces. For connectors to integrate via API, see [Offer Management Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

To access the module, in the VTEX Admin go to **Marketplace > Connections > Offer Management**. The following interface is displayed:

![sent-offers-en_2](//images.ctfassets.net/alneenqid6w5/4NEuTkSW9kSb6SQa3I7QPc/ab112c902aff07dd90b1271dbac0cfae/sent-offers-en_2.png)

The **Offer Management** interface displays a list of your offers, and you can click on any of the offers to access the [offer details](https://help.vtex.com/en/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) and check the [interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf). Interactions are the offer logs when sending and syncing them with the sales channel and are available for consultation for ten days.

![diagrama ju meyer sent offers en](//images.ctfassets.net/alneenqid6w5/1v1nQSOtb5hekGMB4sQCiW/4537ebb6b68838ee6ee4d1bc03dd87c8/diagrama_ju_meyer_sent_offers_en.png)

On the **Offer Management** page, you can perform the following actions:

- [Search and filter offers](#search-and-filter-offers)
- [View offer information](#viewing-offer-information)
- [Export offer list](#exporting-offer-list)
- [Consult discarded offers](#consulting-discarded-offers)

## Search and filter offers 

At the top of the page, there is a search field with a <i class="fas fa-search"></i> magnifying glass icon. You can search for an offer by:

- Offer name
- SKU ID
- EAN Code 

![IMAGEM 2](https://drive.google.com/uc?export=download&id=10Jjhe-ILfdm-KI6ip1wWCOPE_IGjDQ0T)

Furthermore, you can filter the search result by the following criteria:

- **Channel:** The sales channel to which the offer has been sent.
- **Category:** The [categories](https://help.vtex.com/en/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) available in the VTEX seller's store.
- **Brand:** The brands added by the VTEX seller.
- **Status:** The status of the offer sent to the sales channel, which can be:
  - `Sending`: Offers being sent to the sales channel for the first time; offers being migrated to a new channel or offers being resent.
  - `Synched`: Offers successfully added to the sales channel. These offers are being updated in real time both by the marketplace and the seller.
  - `Error`: Offers with an issue preventing the syncing with the sales channel and in which a manual review is required.

To search by **Channel**, click the  <i class="fa-solid fa-angle-down"></i> down arrow next to the term, select the flag of the desired sales channel and then click **APPLY**.

To search by **Category**, **Brand **or **Status**, click the <i class="fa-solid fa-angle-down"></i> down arrow next to the desired filter and then click the <i class="fa-solid fa-angle-down"></i> down arrow next to **All**. Select the desired option for filtering the search and then click **APPLY**.

You can use a single filter or combine different filters within the same search. The filters are set by default to the **All** option, so that the start page displays the entire quantity of existing offers.

## Viewing offer information

At the top of the page, there is a general presentation of the seller's offers, with the following information:

- The total number of created offers.
- Percentage of successfully synched offers.

![IMAGEM 3](https://drive.google.com/uc?export=download&id=1U5XfQG1K8zjddwwM-R0bDAzpJZW0ky48)

There is also a colored bar illustrating the number of offers for each of the following statuses: 

- `Synched`: In green.
- `Sending`: In grey.
- `Containing errors`: In red.

In the offer list, there are columns with the following information:

| **Column** | **Description** |
|---------- |---------- |
| Offer | The list displays the SKU image, the offer name on the sales channel, the SKU ID on the VTEX platform and the offer ID (an automatically generated code that identifies the offer on the platform). |
| Channel | Sales channel  to where the offer was sent.  |
| Price  | SKU offer price. |
| Inventory | Number of items in [stock](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) for the offer SKU. |
| Status | Offer syncing situation, which can be `Synched`, `Sending` or `Error`. |

You can click on a column name to sort the offers in ascending or descending order. For example, by clicking on the **Price** column, you can sort the list by the lowest or the highest offer price.

## Exporting offer list

To export the offer list in XLSX format, click the <i class="fa-solid fa-arrow-down-to-line"></i> down arrow icon at the top of the interface. The file will be sent to the email of the logged-in user. The export time depends on the volume of offers exported and on the processing circumstances of the VTEX platform.

>ℹ️ The exported content refers to all items in the offer list at the moment of exporting. If any of the filters are active, only the selected offers will be exported.

## Consulting discarded offers

Discarded offers are SKUs and products which are currently inactive in your catalog or have been removed from the [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) the sales channel uses. By clicking `Discarded offers` on the top right of the **Offer Management** page, you can access the **Discarded SKUs** page.

The **Discarded SKUs** page contains a list of inactive offers and displays the following information:

- **Offer:** Displays the SKU image, offer name and SKU ID on the VTEX platform.
- **Channel:** The sales channel to which the offer has been sent.
- **Sending cancellation date:** The date when the SKU was deactivated. By clicking the arrow, the user is redirected to the [interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf) page.
- **Product:** Link to the SKU page in your VTEX store [catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ), where you can [activate the SKU](https://help.vtex.com/en/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY) or include it in the trade policy used for integration with the sales channel.

On the **Discarded offers** page, you can search for offers by name, SKU ID or EAN using the search field and filter offers by channel, category or brand.

## Learn more

- [Offer Management: offer details](https://help.vtex.com/en/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P)
- [Offer Management: interaction details](https://help.vtex.com/en/tutorial/detalhes-da-interacao--5qC6XPkyUsYPd0dqKHQNlf)
- [Offer Management: Buybox opportunities](https://help.vtex.com/en/tutorial/anuncios-enviados-oportunidades-de-buybox-beta--1hO9eI1th47EGxQoTzGewC)
