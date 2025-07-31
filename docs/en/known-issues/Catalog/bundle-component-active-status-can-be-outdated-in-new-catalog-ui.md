---
title: 'Bundle component "active" status can be outdated in new catalog UI'
id: cqjuO2Qjz20VHFjof3gOk
status: PUBLISHED
createdAt: 2025-03-11T15:13:09.422Z
updatedAt: 2025-03-12T16:42:43.207Z
publishedAt: 2025-03-12T16:42:43.207Z
firstPublishedAt: 2025-03-11T15:13:10.170Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: bundle-component-active-status-can-be-outdated-in-new-catalog-ui
locale: en
kiStatus: Backlog
internalReference: 1191983
---

## Summary


Currently, in the new catalog UI version, when a SKU is created as a bundle and it has components, there is a status listing of each component to show whether it is active or not

 ![](https://vtexhelp.zendesk.com/attachments/token/VFHwd92eJuxyRAtfRJeQmscou/?name=image.png)

However, if after the kit creating the said item is inactivate, the UI doesn't update it accordingly.


##

## Simulation


1 - create a new bundle item in the store
2 - associate it to 2+ components, in which 2+ of them are active.
3 - inactivate one of the components
4 - check, in the bundle UI, that the components that were inactivated are still listed as active


##

## Workaround


Use the legacy bundle UI https://myaccountname.vtexcommercestable.com.br/admin/Site/SkuKit.aspx?IdProduto=&IdSku=





