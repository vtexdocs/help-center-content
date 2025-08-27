---
title: 'Installing Intelligent Search'
id: 4mwZGH252R3CCPRim8v0F3
status: PUBLISHED
createdAt: 2024-09-06T20:00:06.864Z
updatedAt: 2024-09-06T20:39:37.552Z
publishedAt: 2024-09-06T20:39:37.552Z
firstPublishedAt: 2024-09-06T20:07:32.752Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: installing-intelligent-search
locale: en
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugEN: vtex-intelligent-search
order: 2
---

To configure and start using Intelligent Search, you must have some search applications installed:

* `admin-search`: This application allows you to configure all the features available in the Admin by Intelligent Search.  
* `search-resolver`: The main backend application for Intelligent Search, which processes all search queries.

Some stores have these applications installed by default, while others require you to follow the installation steps. See below how to check if they are installed and, if necessary, proceed with the installation.

## Checking the Edition App

[Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) is a predefined set of essential applications that support the development of a store. Depending on your store's Edition App, you may have the Intelligent Search applications by default or need to install them, as detailed in the table below:

| Edition App | Description |
| :---- | :---- |
| `vtex.edition-store@5.x` | Intelligent Search is already included, so you don't need to install the applications in this guide. Proceed to [Start integration with the Catalog](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2wBsO1AKTQZ04idbTKszI4). |
| `vtex.edition-store@4.x` | You need to install search applications manually. Follow the instructions for [Installing search applications](#installing-search-applications). |
| `vtex.edition-store@3.x` | You need to install search applications manually. Follow the instructions for [Installing search applications](#installing-search-applications). |
| Previous versions of `vtex.edition-store` | Not compatible with Intelligent Search. If you want to migrate to a compatible version, please contact [Support](https://help.vtex.com/pt/support). |
| `vtex.edition-business@0.x` | Not compatible with Intelligent Search. If you want to migrate to a compatible version, please contact [Support](https://help.vtex.com/pt/support). |

To determine which Edition App your store is currently using, consult your development team. They can identify the Edition App by using the `vtex edition get` command in [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), as described in the [command reference](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference\#edition-get) available in the Developer Portal.

## Installing search applications

If your store uses `vtex.edition-store@3.x` or `vtex.edition-store@4.x`, ask your development team to install `admin-search` and `search-resolver`.

To install the applications, use the `vtex install vtex.admin-search vtex.search-resolver` command in [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) as described in the [Intelligent Search implementation guide](https://developers.vtex.com/docs/guides/vtex-io-documentation-2-prerequesites\#step-2-implementing-the-vtex-intelligent-search).
