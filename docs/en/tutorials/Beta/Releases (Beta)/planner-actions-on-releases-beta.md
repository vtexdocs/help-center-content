---
title: 'Releases: Actions on releases (Beta)'
id: 1zsomdifPEQkdV6RW93JyW
status: PUBLISHED
createdAt: 2022-09-19T22:17:51.049Z
updatedAt: 2023-02-08T21:18:10.818Z
publishedAt: 2023-02-08T21:18:10.818Z
firstPublishedAt: 2022-09-19T23:00:29.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-actions-on-releases-beta
locale: en
legacySlug: planner-actions-on-releases-beta
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

<div class="alert alert-info">
  <p>The <strong>Releases</strong> is in beta version, which means we are working to improve it. This feature is only available for stores using <a href="https://www.faststore.dev/">FastStore</a>.</p>
</div>

The **Releases** module allows you to manage [releases](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ) so that you can coordinate the creation, schedule and publication of the changes in your store. A release is a change or a group of changes that can be published together.

In the **Releases**, you can view all the information about releases, follow the [status of the releases](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases) and perform a series of actions. In this article, we will present you those actions and how to perform them.

The feature can be accessed through the VTEX Admin **Releases** navigation menu, where you’ll find the following pages:

* [Calendar](/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw)

Each page displays a view of the releases and allows you to perform different actions depending on the [release status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases). The main actions are:

* [Create a release](#create-a-release)
* [Search for a release](#search-for-a-release)
* [Schedule, reschedule or unschedule a release](#schedule-reschedule-or-unschedule-a-release)
* [Publish a release](#publish-a-release)
* [Delete a release](#delete-a-release)

<div class="alert alert-warning">
  <p>In the beta version, releases must be <a href="https://help.vtex.com/en/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">CMS</a>-related, because other VTEX platform modules are not yet included. To use the <strong>Releases</strong>, you must configure the CMS as described in <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS">Installing Releases on VTEX Headless CMS</a>.</p>
</div>

## Create a release

To create a release through the **Releases**, follow these steps:

1. In the [Calendar](/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C) or [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) page, click on `Create Release`.
2. Fill in the **Name** field with a name for the release.
3. In **Publish date**, choose a date to publish the release (optional).
4. In **Time**, choose the time of the publication (optional).
5. Click on `Create`.

  > The following confirmation message will appear: _The release was created and scheduled_.

When you create a release, it is not mandatory to define the **Publish date** and **Time** because you can create a release with the `Unscheduled` [status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases) and it can be [Scheduled](#schedule) afterwards.

## Search for release

In the **Releases** page, you can search for releases using different tools:

* **Search bar:** Enter the name of the release you want to find. 
* **Filters**: To filter by [release status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases), click on `Filters`, then use the `All statuses` <i class="fas fa-angle-down"></i> button and choose the desired option. To filter by scheduled date, click use the `All periods` <i class="fas fa-angle-down"></i> to choose the desired date.

## Schedule, reschedule or unschedule a release

There are three possible actions you can perform when you set the publication date:

* [Schedule](#schedule): Define a publication date for the release when there is no one.
* [Unschedule](#unschedule): Cancel a publication date, which will move the release to the `Unscheduled` [status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases).
* [Reschedule](#reschedule): Define a new date for a release that already had a set date.

### Schedule

To schedule a release with the `Unscheduled` status, follow these steps:

1. In the [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) page, click on the three-dots menu icon <i class="fas fa-ellipsis-v"></i> of the desired release.
2. Choose the <i class="fal fa-calendar"></i> `Schedule` option.
3. In **Publish date**, choose a date to publish the release.
4. In **Time**, choose the time of the publication.
5. Click on `Schedule`.

   > Once you’ve scheduled a release, there will appear the following confirmation message: _Release scheduled_.

### Reschedule

When the release is in the `Scheduled` status, you can reschedule it. The steps to reschedule it are similar to the ones in the previous section. The only difference is that you'll see the option `Reschedule` instead of `Schedule.`

  > Once you've rescheduled a release, there will appear the following confirmation message: _Release scheduled_.

### Unschedule

To unschedule a release and move it to the `Unscheduled` status, follow these steps:

1. In the [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) page, click on the three-dots menu icon <i class="fas fa-ellipsis-v"></i> of the desired release.
2. Choose the <i class="fal fa-calendar"></i> `Unschedule` option.
3. Click on the `Unschedule` button.

## Publish a release

In order to publish a release, it needs to be in one of the following [status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases):

* `Unscheduled`
* `Scheduled`
* `Publish failed`

In order to publish a release and make the changes available in the storefront of your store, follow these step-by-step instructions:

1. In the [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) page, click on the three-dots menu icon <i class="fas fa-ellipsis-v"></i> of the desired release.
2. Click on <i class="far fa-cloud-upload"></i> `Publish Now.`
3. Click on `Publish.`

## Delete a release

A release can be deleted in every [release status](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-of-releases), i.e., it can be deleted permanently.

<div class="alert alert-info">
  <p>If instead of deleting a release you want to archive it, you should unpublish it so that it is not deleted and you can republish it at any time.</p>
</div>

When you delete a release in the `Published` status, its changes remain in the storefront of the store, the only thing that no longer exists is the release with the changes.

To delete a release, follow these step-by-step instructions:

1. In the [Releases](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw) page, click on the three-dots menu icon <i class="fas fa-ellipsis-v"></i> of the desired release.
2. Click on <i class="far fa-trash-alt"></i> `Delete`.
3. Click on `Delete` again.

## Learn more

* [Releases: Release concept](/en/tutorial/planner-release-concept-beta--4pWhQTXG0aIIsi2TYxxRkZ)
* [Releases: Calendar page](/en/tutorial/planner-calendar-page-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases: Releases page](/en/tutorial/planner-releases-page-beta--2p7IiVD6K8i1iRiwHph5sw)
