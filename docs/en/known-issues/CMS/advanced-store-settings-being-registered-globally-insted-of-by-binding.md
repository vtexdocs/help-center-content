---
title: 'Advanced store settings being registered globally insted of by binding'
id: 6RQtg8QEaaY25hdEh9KvBD
status: PUBLISHED
createdAt: 2023-04-04T03:15:55.537Z
updatedAt: 2023-04-04T03:15:56.015Z
publishedAt: 2023-04-04T03:15:56.015Z
firstPublishedAt: 2023-04-04T03:15:56.015Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: advanced-store-settings-being-registered-globally-insted-of-by-binding
locale: en
kiStatus: Backlog
internalReference: 783835
---

## Summary



When saving the advanced settings splitted by binding, the system is registering for all of them, but, when requesting these values for render runtime, we get the values from the binding and not from the global context:

https://github.com/vtex-apps/store/blob/46e3df3ecba20170fc3a6eebf12370969e3b5abf/react/components/ProductTitleAndPixel.tsx#L186


##

## Simulation



You will need a store with multi binding and enable binding for store settings at admin/cms/store:

 ![](https://vtexhelp.zendesk.com/attachments/token/CNgIedTpUI7LPWqCEfA10HIxz/?name=image.png)

Save your advanced settings and check your vtex store settings:

https://infra.io.vtex.com/apps/v0///apps/vtex.store/settings

You will notice that advanced settings will be outside bindings contexts



##

## Workaround



Add the settings that you want through a PUT into the settings key inside one of the binding's object:

 ![](https://vtexhelp.zendesk.com/attachments/token/JYKSnxOk9qHdm8RGGp9IutNB3/?name=image.png)




