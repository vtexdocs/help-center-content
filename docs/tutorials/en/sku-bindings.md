---
title: 'SKU Bindings'
id: 1SmrVgNwjJX17hdqwLa0TX
status: CHANGED
createdAt: 2022-05-27T17:27:26.963Z
updatedAt: 2023-05-25T15:51:50.053Z
publishedAt: 2023-03-31T19:05:52.334Z
firstPublishedAt: 2022-05-31T17:14:23.589Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: sku-bindings
locale: en
legacySlug: sku-bindings
subcategory: FTLNAWyLmuaIiAq4CQKS6
---

As part of the [collaborative commerce](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) promoted by VTEX, the architecture of a VTEX store allows it to act both as a [seller](https://help.vtex.com/en/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP) and as a [marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb). 

Every time a seller sends its products to a VTEX marketplace, the marketplace [catalogs the received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396) and creates a binding between the seller’s SKUs and the marketplace SKUs. This means that there is a connection between the seller’s catalog and the marketplace catalog. 

Once the marketplace has cataloged the SKUs, either via the **Received SKUs** page or by using the [VTEX Matcher](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424), the bindings between the seller’s SKUs and the marketplace SKUs appear on the **SKU Bindings** page. Bindings will automatically have the _Bind_ status.

<div class = "alert alert-info">
By default, <a href="https://help.vtex.com/en/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa">white label sellers</a> do not have that binding between their SKUs and the ones from the marketplace.
</div>

The **SKU Bindings** page allows the marketplace to track and manage the binding relationship between the seller’s SKUs and the ones from the marketplace. To access the page, go to the VTEX Admin, **Marketplace > Sellers > SKU Bindings**. You'll see the following interface:

![sku-bindings-en](https://images.ctfassets.net/alneenqid6w5/3TrV8m2JLKuPjhKTtkY2Yl/9a76d4471db1707286f7464e19cadcb8/sku-bindings-en.png)

The following table contains a description of the columns in the SKU binding list:

| **Column** | **Description** |
| ---------- | ---------- |
| SKU | A numerical code that identifies the [SKU](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) of the marketplace catalog. |
| Seller | [Seller’s](https://help.vtex.com/en/tutorial/adicionar-seller--tutorials_392) name and ID in the marketplace. |
| Seller SKU | An alphanumeric code that identifies the SKU of the seller’s catalog to which the marketplace SKU is bound to. |
| Status | The status of the binding between the seller’s SKU and the ones from the marketplace may be of two types: <ul><li><b>Bound:</b> There is a connection between the seller’s SKU and the marketplace SKU.</li><li><b>Unbound:</b> There is no connection between the seller’s SKU and the marketplace SKU.</li></ul> If a SKU binding is changed from <b>Bind</b> to <b>Unbind</b>, then the seller’s SKU will become unavailable in the marketplace catalog. |

The **SKU Bindings** page allows the VTEX marketplace to:

- [Search](#searching)
- [Unbind SKU](#unbinding-a-sku)
- [Link to another SKU](#linking-to-another-sku)
- [Remove](#removing)
- [Export](#exporting)

## Searching

On the top part of the page, there is a search box with the magnifier icon <i class="fas fa-search"></i> in which you can search for SKU bindings by using the following criteria:

- Marketplace SKU ID
- Seller ID
- Seller SKU ID

The search will be automatic when you write a character in the search box. To clear the search, click on the x icon <i class="far fa-times-circle"></i>. 

You can also search through the list by filtering per binding status. To do this, follow the steps below:

1. On the VTEX Admin, go to **Marketplace > Sellers > SKU Bindings**.
2. On the `Binding status` button, click on the down arrow  <i class="fas fa-angle-down"></i>.
3. Choose the desired status, either _Bound_ or _Unbound_.
4. Click on the `Apply` button.

To return to the list with all the binding statuses, click on the `Clear all` button. This button will only clear the status filter, not the terms you have entered into the search boxes.

<div class = "alert alert-info">
If the search returns no results, check the spelling of the words you have written or check the combination of filters you have used.
</div>

## Unbinding a SKU

To undo a SKU binding, click on the _switch_ <i class="fas fa-toggle-on"></i> option and confirm the option `Unbind SKU`. 

<div class = "alert alert-info">
When you unbind the seller's SKU, the SKU will no longer receive price and stock updates, and it will be shown as unavailable in the marketplace catalog. You may rebind the SKU at any time. To do so, you do not have to catalog the seller's SKU again.
</div>

If you want to reestablish the binding between the seller’s SKU and the marketplace SKU, select the _switch_ option <i class="fas fa-toggle-on"></i> again by clicking on it.

## Linking to another SKU

To link the seller’s SKU to a new one from the marketplace, follow the steps below:

1. On the VTEX Admin, go to **Marketplace > Sellers > SKU Bindings**.
2. On the row where you may find the desired item, click on the menu icon <i class="fas fa-ellipsis-v"></i>.
3. Click <i class="fas fa-link"></i> `Link to another SKU`.
4. Fill in the dialog box with a marketplace SKU ID. The ID you enter cannot be bound to another seller's SKU.
5. Click <i class="fas fa-link"></i> `Link to another SKU`.

## Removing

To remove the binding between the seller’s SKU and the marketplace SKU, follow the steps below:

1. On the VTEX Admin, go to **Marketplace > Sellers > SKU Bindings**.
2. On the row where you may find the desired item, click on the menu icon <i class="fas fa-ellipsis-v"></i>.
3. Click on the <i class="far fa-trash-alt"></i> `Remove` button.

<div class="alert alert-warning">
When you remove a binding, the seller's SKU will no longer be part of the marketplace catalog. Therefore, it'll disappear from the list on the <b>SKU Bindings</b> page. You cannot recover a removed binding. However, the seller can resend the SKU to the marketplace, which will <a href="https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396">catalog</a> the SKU again and make it available.
</div>

## Exporting

To export the SKU binding list in XLSX format, follow the steps below:

1. On the VTEX Admin, go to **Marketplace > Sellers > SKU Bindings**.
2. To do a search, you may use the [search](#searching) box or the filters of the bindings you want to export.
3. In the top part of the page, click the <i class="far fa-arrow-to-top"></i> `Export` button.

The spreadsheet will be sent to the email of the user that is currently logged in. Export time depends on processing factors of the VTEX platform and on the size of the file.

<div class = "alert alert-info">
When exporting, the exported file will have a list with the bindings of the SKUs. If there's an active search or filter, only the selected bindings will be exported.
</div>

## Learn more

- [Configuring a VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)
- [Configuring a seller on VTEX marketplace](https://help.vtex.com/en/tutorial/configurar-seller-para-vender-em-marketplace-vtex--6g045OkRSjNpqhkExbQRlP)
- [Cataloging received SKUs](https://help.vtex.com/en/tutorial/sugerindo-e-aprovando-skus--tutorials_396)
- [How VTEX Matcher scoring works](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424)
