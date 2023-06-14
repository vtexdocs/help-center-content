---
title: Shared information between a marketplace and a seller on VTEX
id: 3o7WGiBtfnKKZ3Ddug26k3
status: PUBLISHED
createdAt: 2022-04-07T13:32:06.199Z
updatedAt: 2023-04-17T21:51:10.740Z
publishedAt: 2023-04-17T21:51:10.740Z
firstPublishedAt: 2022-04-07T14:23:25.578Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: shared-information-between-a-marketplace-and-a-seller-on-vtex
legacySlug: shared-information-between-a-marketplace-and-a-seller-on-vtex
subcategory: 5tlIjp0ZkAU4EIk4OgyEmm
---

Selling on marketplaces is a collaborative commerce model that offers mutual advantages to sellers and marketplaces. The VTEX architecture allows stores to act both as a seller and as a marketplace. Learn more at [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).

In order to collaborate, a marketplace hosted on the VTEX platform and a seller, whether it is a VTEX seller or an external one, need to exchange information. This article describes the main information being shared and is divided into the following sections:

- [Connecting a marketplace and a seller](#connecting-a-marketplace-and-a-seller)
- [Connected marketplace and seller](#connected-marketplace-and-seller)
- [Sharing customer emails](#sharing-customer-emails)

<div class = "alert alert-info">
If you want to start selling your products on other marketplaces, use <a href="https://help.vtex.com/en/tutorial/encontre-marketplaces-e-sellers-no-ecossistema-vtex--2bzC7tXlVgLEEjxo4ixcAM">Marketplaces and Integrations</a>. This feature allows marketplaces and sellers operating in the VTEX ecosystem to identify and contact each another.
</div>

## Connecting a marketplace and a seller 

If a marketplace wants to connect to a seller, whether it is a VTEX seller or an external one, the two parties need to previously agree upon the following details:

- **Exchanges and returns:** the exchange and return policy adopted for the seller products on the marketplace.
- **Delivery policy:** the delivery policy for the seller products on the marketplace.
- **Privacy and security policy:** the security policy applicable to the seller products on the marketplace.
- **Commissions:** the sales value percentage made on the marketplace, which the seller will pass on to the marketplace. There are two types of commissions, _Product commissions_ and _Shipping commissions_.

Also, to [add the seller](https://help.vtex.com/en/tutorial/configurando-seller) to its operations, the marketplace will need more information, which will depend on the type of seller it will connect to: 

- [Connecting a VTEX marketplace to a VTEX seller](#connecting-a-vtex-marketplace-to-a-vtex-seller)
- [Connecting a VTEX marketplace to an external seller](#connecting-a-vtex-marketplace-to-an-external-seller)

You can integrate a VTEX marketplace with a VTEX seller or with an external seller either through the VTEX Admin or through API. In either case, the information shared between the marketplace and the seller will be the same.

<div class = "alert alert-info">
For more information on how to connect a VTEX marketplace to a VTEX seller using the VTEX Admin, please check out the article <a href="https://help.vtex.com/en/tutorial/configurando-seller">Adding a seller</a>. For integration via API use the call <a href="https://developers.vtex.com/vtex-rest-api/reference/upsertsellerrequest">Configure Seller Account</a>. For external sellers, check out the <a href="https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-guide">External Seller Integration Guide</a>.
</div>

### Connecting a VTEX marketplace to a VTEX seller

In order for a VTEX marketplace to connect to a VTEX seller, it will need access to the following information:

- **Seller ID (Account Name):** [account name](https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) is the seller identification code on VTEX.
- **Admin email:** email of the admin responsible for the seller.
- **Seller affiliate ID:** three digit identification code which identifies the [affiliate](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) created by the seller in their own VTEX Admin.
- **Description:** text describing the seller with a business tone. You can display this text in the marketplace window display when [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).
- **Trade policy:** identification code of the [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) the seller wants to use when selling on the marketplace.
- **Fulfillment SellerId:** identification code of the seller responsible for fulfilling the order. This information is optional, only required when the seller sells SKUs from another seller. It must not be filled in when the seller sells their own SKUs.
- **Catalog EndPoint:** endpoint URLfor the seller's catalog.
- **TaxCode:** seller's company registration number (CNPJ in Brazil) or corresponding code for other countries.

### Connecting a VTEX marketplace to an external seller

An external seller not hosted on the VTEX environment will have to provide the VTEX marketplace with the following information:

- **Description**: text describing the seller with a business tone. You can display this text in the marketplace window display when [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).
- **Admin email:** email of the admin responsible for the seller.
- **Fulfillment EndPoint:** Endpoint URL for the seller's order fulfillment that the marketplace will use to communicate with the seller.
- **TaxCode:** seller's company registration number (CNPJ in Brazil) or corresponding code for other countries.
- **User:** username, if you are using a hub to integrate with the external seller.
- **Password:** user password, if you are using a hub to integrate with the external seller.

## Connected marketplace and seller

Once the VTEX marketplace and the VTEX seller, or the external seller, are connected, the marketplace can access the seller information through the VTEX Admin, in **MARKETPLACE > Management**.

The information provided by the seller, whether it is a VTEX seller or an external one, can be requested via API, using the call [Get Seller data by ID](https://developers.vtex.com/vtex-rest-api/reference/getretrieveseller).

## Sharing customer emails

The marketplace can give the seller partial access to the email addresses of its customer base, in order to use them for query requests to commercial conditions and for order creation. This is not a standard configuration, and this information is managed via API using the following calls in the `trustPolicy` field:

- [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/upsertsellerrequest): this allows setting up the seller account, whether it is a VTEX seller or an external one.
- [Update Seller by Seller ID](https://developers.vtex.com/vtex-rest-api/reference/updateseller): this allows updating the seller information, whether it is a VTEX seller or an external one.

<div class = "alert alert-info">
For orders placed in the marketplace, the customer email is not displayed to the seller. The customer establishes a relationship with the marketplace. Therefore, the customer's consent would be necessary for sharing their information.
</div>

## Learn more

- [Marketplace strategies at VTEX](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)
- [Actions for a VTEX marketplace operation](https://help.vtex.com/en/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)
- [Adding a seller](https://help.vtex.com/en/tutorial/configurando-seller)
