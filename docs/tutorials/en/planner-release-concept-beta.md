---
title: 'Releases: Release concept (Beta)'
id: 4pWhQTXG0aIIsi2TYxxRkZ
status: PUBLISHED
createdAt: 2022-09-19T20:49:52.633Z
updatedAt: 2023-02-08T21:13:19.140Z
publishedAt: 2023-02-08T21:13:19.140Z
firstPublishedAt: 2022-09-19T23:25:39.523Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slug: planner-release-concept-beta
locale: en
legacySlug: planner-release-concept-beta
subcategory: 3vXj7HrnYK8V5riTOwUuYv
---

>ℹ️ The **Releases** is in beta version, which means we are working to improve it. This feature is only available for stores using [FastStore](https://www.faststore.dev/).

Managing an ecommerce operation requires the retailer to perform a series of store updates to the store, which are often interconnected. For example, carrying out an advertising campaign in which different storefront elements need to be configured.

The **Releases** is the VTEX module that allows the retailers to [manage their releases](https://help.vtex.com/en/tutorial/planner-actions-on-releases-beta--1zsomdifPEQkdV6RW93JyW) in order to coordinate the planning, creation, scheduling and publication of changes to the store. 

A release means a change or a group of changes that can be published together. The main benefits of using releases are:

* The optimization of the platform performance: publishing grouped changes eliminates processing queues.
* Greater operational efficiency by simplifying the management of related changes.
* Greater control when testing and reviewing modifications prior to their publication.
* Ease in scheduling or deleting groups of modifications.

>⚠️ In the beta version, releases must be [CMS](https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2)-related, because other VTEX platform modules are not yet included. To use the **Releases**, you must configure the CMS as described in [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

The feature can be accessed through the VTEX Admin **Releases** navigation menu, where you'll find the following pages:

* [Calendar](https://help.vtex.com/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C): Allows you to manage scheduled releases, with a weekly or monthly view.
* [Releases](https://help.vtex.com/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw): Allows you to manage all releases, with a list view.

## Status of releases

A release can have different statuses from its creation to its publication or deletion, for example. On the [Calendar](https://help.vtex.com/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C) and [Releases](https://help.vtex.com/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) pages, the status of each release is displayed associated with a color, as shown in the table below:

| **Status** | **Color** | **Definition** |
|:---:|:---:|:---:|
| `Scheduled` | Blue | There is a date set for publishing the release. |
| `Not scheduled` | Gray | There is no date set for publishing the release. |
| `Queued` | Green (flashing) | The publication of the release is in the deployment stage and no action by the retailer is required for the release to get to the next status, which can be `Publishing` or `Publishing failed`. |
| `Publishing` | Green (flashing) | The VTEX platform is processing the release publication request. No action by the retailer is required for the release to get to the next status, which can be `Published`, `Publication failed` or `Unpublished`. |
| `Published` | Green | The release has been published and the changes are visible in the storefront. |
| `Unpublished` | Gray | The release is no longer published and, therefore, the changes are not visible in the storefront. The unpublished release is not deleted, it is archived and can be [published](https://help.vtex.com/en/tutorial/planner-actions-on-releases-beta--1zsomdifPEQkdV6RW93JyW#publish-a-release) again at any time.  |
| `Publication failed` | Red | An error occurred and the release has not been published. In these cases, the retailer may try [to publish the release](https://help.vtex.com/en/tutorial/planner-actions-on-releases-beta--1zsomdifPEQkdV6RW93JyW#publish-a-release) again or [schedule a new publication date](https://help.vtex.com/en/tutorial/planner-actions-on-releases-beta--1zsomdifPEQkdV6RW93JyW#reschedule). |

## Learn more

* [Releases: Actions on releases](https://help.vtex.com/en/tutorial/planner-actions-on-releases-beta--1zsomdifPEQkdV6RW93JyW)
* [Releases: Calendar page](https://help.vtex.com/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases: Releases page](https://help.vtex.com/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw)
