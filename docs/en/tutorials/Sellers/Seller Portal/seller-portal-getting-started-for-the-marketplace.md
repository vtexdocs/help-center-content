---
title: 'Seller Portal: Getting started for the marketplace'
id: 6ccErY3mCcfoW0qGXf167
status: PUBLISHED
createdAt: 2022-03-17T14:20:18.188Z
updatedAt: 2023-03-31T05:30:44.087Z
publishedAt: 2023-03-31T05:30:44.087Z
firstPublishedAt: 2022-03-17T15:53:14.973Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: seller-portal-getting-started-for-the-marketplace
locale: en
legacySlug: seller-portal-getting-started-for-the-marketplace
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

A [marketplace](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) is a collaborative business model that needs to define strategies to be successful. Onboarding new sellers, for example, poses challenges such as synchronizing catalogs and sending and receiving orders. 

VTEX has developed the Seller Portal, an edition of the VTEX platform designed for marketplaces and sellers to connect and sell their products to add speed and simplicity to the collaboration between marketplace and seller.

When you add on the Seller Portal, there is no fixed monthly fee for the marketplace or acquisition cost. The billing model is based on revenue share, and the marketplace is charged the B2C take rate described in the contract based on the [approved revenue](https://help.vtex.com/en/tutorial/compreenda-o-valor-da-receita-aprovada--tutorials_4322) in the VTEX marketplace for each third-party seller. For non-VTEX sellers, the take rate is charged only to the marketplace, and for VTEX sellers, the take rate is charged to both the seller and the marketplace. 

The Seller Portal enables marketplaces to:

- Easily expand the seller portfolio.  
- Decrease sales conversion time with self-service onboarding of new sellers, which is now faster and frictionless.  
- Easily share product assortment with the seller and quickly manage shared product offers.  

![Seller Portal gif 2022 launch](https://images.ctfassets.net/alneenqid6w5/48uQe9Gi0K9ZU8qyXXO8US/ff02b9c926398dcfa69683bcfbf5b02f/Seller_Portal.gif)

## Seller and marketplace interaction in the Seller Portal

Using the Seller Portal depends on the actions of the marketplace and the seller, as shown in the following image:

<img src="https://drive.google.com/uc?export=download&id=1O-PCwHCM8MioJBTkhCAGieJeGBHCi5db"/>

The steps shown in the image above are:

1. **Marketplace:** invites the seller.
2. **Seller:** accepts the invitation.
3. **Marketplace:** activates the seller.
4. **Seller:** configures products, prices, inventory, logistics, and payments (optional).
5. **Seller:** sends the offer.
6. **Marketplace:** approves the offer.
7. **Seller:** manages the orders.

The marketplace is responsible for onboarding new sellers. In other words, it is the role of the marketplace to support the seller's experience in the Seller Portal. For information about seller actions, see [Seller Portal: First Steps for the Seller](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK).

In the following sections, the marketplace steps have been organized into:

- [Inviting sellers](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#inviting-sellers)
- [Activating a seller](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#activating-a-seller)
- [Sharing the catalog (optional)](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#sharing-the-catalog-optional)
- [Cataloging offers](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#cataloging-offers)

### Inviting sellers

The **Invited Sellers** page is where marketplace operators [invite sellers](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A) to create an account on the Seller Portal. To access the page via the VTEX Admin, go to **MARKETPLACE > Sellers > Seller Invite**. 

Through the Seller Portal, marketplaces hosted on VTEX can connect with sellers who have a VTEX account, sellers hosted on other platforms, or sellers who are not hosted on any platform. Upon accepting the invitation, the seller chooses whether to integrate their existing VTEX account or create a new account to sell on the marketplace. 

>ℹ️ Once the [marketplace invites the seller](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A#convidar-seller), an email is sent to the seller containing a link to create an account on the Seller Portal. The link is valid for seven days. After opening it, the seller has six hours to complete the registration form, without interruption.

If the seller does not register within that period, the marketplace will have to resend the invitation. This can be done from the VTEX Admin through **MARKETPLACE > Sellers > Seller Invite**. You need to select the seller from the list and click the **Resend Invitation** button.

In the invitation step, the marketplace also decides whether it wants the seller to import the products and the category tree. This is done through the **Share marketplace catalog** flag.

To learn more, check the following articles:

- [Marketplace: Seller Invite](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A)
- [Seller: Creating an account in the Seller Portal](https://help.vtex.com/en/tutorial/seller-criar-conta-no-seller-portal-beta--3gn2Q5rMhgu0jjX7AiiHcs#creating-an-account-in-the-seller-portal)

### Activating a seller

Once the seller accepts the marketplace invitation and they register their Seller Portal account, the next step is activating them so they can connect to the marketplace. This changes the seller status from _Invited_ to _Active_ and adds them to **Seller Management**. Follow the instructions to activate the seller in [Connecting sellers](https://help.vtex.com/en/tutorial/marketplace-convite-de-sellers-beta--6rb2FkcslmDueJ689Ulb9A#connecting-sellers).

>ℹ️ The seller activation step is intended to provide more security for the marketplace, in case some alignment with the seller is required before they start selling on the marketplace.

#### Actions through REST APIs

In addition to inviting and activating sellers through the VTEX Admin, the marketplace can also complete these steps via the REST APIs. This is useful when the marketplace wants to create its own solutions or create an account on the Seller Portal on behalf of the seller. The following table shows the list of applicable APIs:

| **Call** | **Description** |
| ---------- | ---------- |
| [Invite Seller Lead](https://developers.vtex.com/vtex-rest-api/reference/createsellerlead) | Sends an email to the seller containing a unique link to connect to the marketplace. |
| [List Seller Leads](https://developers.vtex.com/vtex-rest-api/reference/listsellerleads) | Lists the sellers that have received an invitation from the marketplace. |
| [Accept Seller Lead](https://developers.vtex.com/vtex-rest-api/reference/acceptsellerlead) | Activates the seller. |
| [Get Seller Lead's Data by Id](https://developers.vtex.com/vtex-rest-api/reference/retrievesellerlead) | Provides information about a seller. |
| [Delete Seller Lead](https://developers.vtex.com/vtex-rest-api/reference/removesellerlead) | Permanently deletes the seller from marketplace connections. |
| [Create Seller From Lead](https://developers.vtex.com/vtex-rest-api/reference/createsellerfromsellerlead) | Allows the marketplace to create an account for the seller. The call only works for sellers with `Accepted` status, not `Invited` or `Connected`. |
| [Resend Seller Lead Invite](https://developers.vtex.com/vtex-rest-api/reference/resendsellerleadrequest) | Resends an invitation previously extended to a seller. |
| [Seller Commissions](https://developers.vtex.com/vtex-rest-api/reference/bulkupsertsellercommissions) | Allows the marketplace to query, grant, and remove commissions from sellers. |

### Sharing the catalog (optional)

This step is optional for the marketplace and will depend on the goal of your business model. Sharing the catalog was set in the [Inviting the seller](https://help.vtex.com/en/tutorial/seller-portal-primeiros-passos-para-o-marketplace--6ccErY3mCcfoW0qGXf167#inviting-sellers) step through the **Share marketplace catalog** flag.

When the marketplace decides to allow sharing, this is done through a [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). Then, the seller receives the list of products that are already available in the marketplace, which allows them to import and configure inventory and pricing in the Seller Portal, under **Products > Shared Products**.

>ℹ️ If the marketplace operator creates an additional trade policy to define the seller catalog assortment on the Seller Portal, the policy is charged as [requesting an additional trade policy](https://help.vtex.com/en/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X).

#### Sharing products

On the Seller Portal, the seller will find an interface that allows them to manage common products between their catalog and the marketplace catalog under **Prices > Catalog > Shared Products**. This feature makes it easier for the seller to sell products that the marketplace already has and allows them to start selling faster and seamlessly.

The **Shared Products** dashboard shows the seller which products the marketplace has made available for sale. These products are synced with the marketplace catalog. To learn more, check [Seller Portal: Shared Products](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu).

In addition to sharing products, the seller can also create their own products on the Seller Portal in order to complement the assortment offered by the marketplace. This is done in **Prices > Catalog > Products**.

Both shared products and products created by the seller are automatically sent to the marketplace approval flow. This is explained in more detail in the next section.

### Cataloging offers

On VTEX, an [offer](https://help.vtex.com/en/tutorial/anuncios-y-envio-de-productos-al-marketplace--3RwSj7AyBoPtFbXkS7REiu) is a product or seller variation that has been assigned price and stock settings and has been sent to the marketplace. To be able to create an offer from the seller product, the [product needs to be active](https://help.vtex.com/en/tutorial/seller-portal-detalhes-do-produto--K0WWsERWj7aQtmZinhYoP#activating-shared-products-in-the-marketplace).

When the seller creates a new product, the marketplace needs to review and approve the offer in a process called [cataloging offers](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396). Cataloging allows you to create new products and associate offers with SKUs or existing products to make them available for sale.

>ℹ️ Offers for [products that are shared](https://help.vtex.com/en/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu) between the marketplace and the seller are approved automatically, without requiring any manual action.

The cataloging process can be completed through the VTEX Admin, under **MARKETPLACE > Sellers > Received SKUs** or through the [Match Received SKUs](https://developers.vtex.com/vtex-rest-api/reference/match) API.

When approving an offer, the marketplace has to consider the quality of the information submitted by the seller, such as price, product description, and image. It is important that this information matches the business strategy of the marketplace.

To learn more, check the following articles:

- [Seller Portal: Offers and Sending Products to the Marketplace](https://help.vtex.com/en/tutorial/seller-portal-anuncios-e-o-envio-de-produtos-para-o-marketplace--3RwSj7AyBoPtFbXkS7REiu)
- [Cataloging received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396)

## Additional information

**Promotions:** only the marketplace can create and manage [promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR). 

**Payments:** when the marketplace is responsible for processing [payments](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG), the commissioning and transfer of seller billing are done outside the VTEX environment.

-	[Choosing between standard account, franchise account or Seller Portal](https://help.vtex.com/en/tutorial/escolher-entre-conta-padrao-conta-franquia-ou-seller-portal--4S90HzzhMyZESsHqrnUs78)
