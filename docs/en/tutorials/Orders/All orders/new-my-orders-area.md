---
title: 'New My Orders area'
id: 2WYPDPojbaAWmqSiqAyewg
status: ARCHIVED
createdAt: 2017-05-03T20:07:13.624Z
updatedAt: 2021-03-24T22:27:19.597Z
publishedAt: 
firstPublishedAt: 2017-05-03T20:41:22.681Z
contentType: tutorial
productTeam: Post-purchase
author: authors_6
slugEN: new-my-orders-area
locale: en
legacySlug: new-my-orders-area
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

>⚠️ This update is a *major* and **not compatible with the customizations of the current My Orders section**. 
>
>
> 
>
>
> 
> Because the new page structure is completely different, it will be necessary to remake the customizations to migrate to this version. See details on how to update your customization in [Customizando a Seção Meus Pedidos](http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos).

VTEX is always looking to use a modern stack to create products that deliver more value to the ecosystem. For this reason, we started using the React JS library in our most recent systems and features: the new **My Orders** feature is one example. The newest version comes with new features and design, and was created from scratch using React.

![Order listing in the new My Orders](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

### New navigation experience

React wasn't chosen only so this release was aligned with the remaining of the VTEX platform — because it's a single-page application loaded within the store, the new orders area has a fluid navigation, improving the user experience.

![My Orders navigation with instant loading between pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.gif)

### Features

This update in the My Orders will be the starting point for new features, but this one already brings improvements, like a mobile-ready layout and order timeline — a feature lots of agencies implemented on their own.

![Mobile & desktop My Orders](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png) 

![Order details](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png) 


Another new feature are the pre-defined cancelling reasions that the client can choose when cancelling an order. These reasons can be easily customized and translated in Portal v2:

![Cancelamento do pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png) 

![Customizando razões de cancelamento](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

For the first time, we're also supporting native translation of the My Orders to french, right from the interface!

### How to activate

To avoid compatibility issues and reduce the chance of breaking customizations, the new My Orders comes with an opt-in, that allows stores to migrate on the speed they wish. This opt-in checkbox is in the Portal v2, in the same section as the cancelling reasons:

![Opt-in to activate the new version](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

Before activating the new version, you can see it accessing your store through the beta environment: `accountname.vtexcommercestable.com.br/account/orders`.

This opt-in will be available until **July 24 2017**. After this, all stores will be migrated to the new version in stable, and the old one will be discontinued.

It's important to note customizations must be re-done, as the new structure of the page is completely different. To see more details about how to update your customization, see the [tutorial about customizing the My Orders](http://help.vtex.com/pt/tutorial/customizando-a-secao-meus-pedidos).
