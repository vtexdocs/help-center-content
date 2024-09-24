---
title: 'Unified commerce'
id: 5Qvw31yH2FPDBl14K5xXHA
status: PUBLISHED
createdAt: 2024-02-20T20:19:58.572Z
updatedAt: 2024-04-03T12:14:19.783Z
publishedAt: 2024-04-03T12:14:19.783Z
firstPublishedAt: 2024-02-22T14:08:56.252Z
contentType: trackArticle
productTeam: Others
slugEN: unified-commerce
locale: en
trackId: 3J7WFZyvTcoiwkcIVFVhIS
trackSlugEN: next-steps-after-the-go-live
---

[Unified commerce](https://help.vtex.com/pt/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv) is an evolution of omnichannel. This strategy involves data sharing and the unification of the order processing and management system. It means that every order placed in a store channel is visible to other sales channels and can also be processed within them. Operating with franchise accounts and [white label sellers](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) in an increasingly connected context can be very strategic for the business.

## Franchise accounts and white label sellers

[Franchise accounts](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) are accounts associated with a [main account](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). Companies with multiple physical stores, franchisees, or multi-brands can create franchise accounts associated with the brand's main account.

![main account](//images.ctfassets.net/alneenqid6w5/5LB8M0ZLnlb9dIQuZEQh3A/aaa2c7b886fb7a050c684465fb08c8f8/next_steps_image1_EN.png)

This model shares Catalog and [storefront](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ) information, allowing the franchise accounts' inventory to be available for sale in the main store. It also supports different unified commerce strategies, such as [ship from store](#ship-from-store), [physical stores as pickup points](#pickup-points), and [endless aisle](https://help.vtex.com/en/tracks/next-steps-after-the-go-live--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm).

Other advantages of working with franchise accounts are listed below:

- Exclusive accounts for each store, allowing better management of employee access.

- Better management and resource scalability by adding loading docks and warehouses for each store.

- Management of specific promotions per account without requesting a new [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV).

- Payment can be made in the main or franchise account environment ([split payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx)/order).

- [Seller regionalization](https://help.vtex.com/en/tutorial/configure-seller-regionalization--32t6wLpQCEnumoh8TjT5fw) (price and inventory).

- Increased operational performance by using multiple requests at the store checkout. In a standard account, where the [shipping strategy](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistics-required-settings) is added to the main account, requests are processed separately and queued, generating a potential backlog of requests and increased timeouts. Whenever a timeout occurs, an error message appears at checkout, and the customer has to click F5 or the refresh button to proceed with the purchase. This behavior has a negative impact on the customer experience and lowers the store's conversion rate.

>⚠️ [Franchise accounts](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) act as a [white label seller](https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) for the main account. When a customer adds products to the shopping cart and simulates shipping on the main account's website, the [white label seller selection algorithm](https://help.vtex.com/en/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) automatically determines which franchise account will [fulfill](https://help.vtex.com/en/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) the order. If one or more products in the cart are unavailable in the selected franchise account, the system will select another available account to ship the unavailable products, allowing more than one shipment for the same order. This process occurs internally on the platform, and the customer doesn't know the sellers involved.

## Ship from store

Physical stores can act as mini distribution centers by shipping products directly from their warehouse to customers. This type of operation reduces shipping costs and time, improving the company's logistics planning. Learn more in the [Ship From Store](https://help.vtex.com/en/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/50GAmxxFsJoLWqcnMysWdl) article.

## Pickup points

Configuring physical [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) contributes to operations that apply [unified commerce strategies](https://help.vtex.com/en/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3). This approach optimizes the customer's buying experience by centralizing sales and order management, and offering multiple shipping options. On VTEX, you can add the following pickup points:

- Distribution center (DC).
- Proprietary physical store.
- Franchised physical store.
- Physical store or third-party pickup point, using a secure storage system such as a locker.
