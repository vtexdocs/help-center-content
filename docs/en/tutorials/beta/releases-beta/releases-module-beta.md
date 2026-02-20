---
title: 'Releases Module (Beta)'
id: n2tN0WX5I6MJMbrJrS0Kb
status: PUBLISHED
createdAt: 2022-06-13T17:20:32.280Z
updatedAt: 2025-08-29T17:00:05.064Z
publishedAt: 2025-08-29T17:00:05.064Z
firstPublishedAt: 2022-06-13T18:10:50.488Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: releases-module-beta
legacySlug: releases-module-beta
locale: en
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

> ℹ️ The **Releases** module is currently in beta version, which means we are working to improve it. This feature is only available for stores using FastStore.

Managing an ecommerce operation requires the retailer to perform several updates and changes in the store, which are often interconnected — for example, carrying out a publicity campaign in which different storefront elements need to be configured.

The **Releases** module allows the retailer to manage connected groups of changes to coordinate the stores changes’ planning, creating, scheduling and publishing. In the beta phase, the changes that can be grouped together must be related to the [CMS](/en/docs/tracks/cms-vtex-io). Other modules of the VTEX platform are not yet included.

The main benefits of the module are:

- Optimizing the platform performance: publishing grouped changes eliminates processing queues.
- Simplifying the experience of managing connected changes, which increases the operation's efficiency.
- Better control when testing and reviewing changes before publishing.
- Easier scheduling or deleting grouped changes.

> ℹ️ To use the **Releases** module, you must configure the CMS. Learn more in [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

This article will cover the following topics:

- [Create releases](#creating-releases)
- [View releases](#viewing-releases)
- [Search releases](#searching-releases)
- [Schedule releases](#scheduling-releases)
- [Publish releases](#publishing-releases)
- [Delete releases](#deleting-releases)

## Creating releases

There are two ways to create a new release:

- Using the **Pages** section.
- Using the **Releases** module.

### How to create a release using the Pages section

To create a release, follow the step-by-step instructions below: 

1. In the VTEX Admin, access **Store Settings > CMS (beta) > Pages (beta)**.
2. Click on the `CREATE NEW` button. 
3. Click the desired type of change:
    - Home page 
    - PLP
    - Global SEO Settings
    - Institutional page
4. After making the desired changes on the page you created, click the `PUBLISH` button.
5. Select the option `Add a release`.
6. Click `Create a release`.
7. In the _Name_ field, write a name for the release.

  > ℹ️ In this stage, the fields **Day to publish** and **Time** are not required. This information can be decided upon later, as described in [Scheduling releases](/en/docs/tutorials/releases-module-beta#scheduling-releases).

8. Click `Create`.

![print_cms_beta_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/releases-beta/releases-module-beta_1.png)

### How to create a release using the Releases module

To create a release, follow the step-by-step instructions below: 

1. In the VTEX Admin, access **Store Settings > Releases**.
2. Click the `Create` button.
3. In the _Name_ field, write a name for the release.

  > ℹ️ In this stage, the fields **Day to publish** and *Time* are not required. This information can be decided upon later, as described in Scheduling releases.

4. Click `Create`.

## Viewing releases

All the releases are listed in the VTEX Admin, in **Store Settings > Releases**. The page displays two tabs, `SCHEDULED` and `UNSCHEDULED`, depending on whether the release has been created with a set publish date. 

![print_releases_en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/releases-beta/releases-module-beta_2.png)

On the `SCHEDULED` tab, each column is described as follows:

| **Column** | **Description** |
| ---------- | ---------- |
| Name | Name identifying the release, set in the creation stage. You can edit the name anytime since the release has not already been published. |
| Last modified | The amount of time since the last change was made to the release, such as updating, adding, or deleting content. |
| Created by | Identification of the user who created the release. |
| Publish date | Date and time set for publishing the release. |
| End date | When a release has an end date scheduled, the date will be displayed in this column. After the end date, the release updates are undone. |
| Status | There are five possible statuses for a release: <ul><li>**Scheduled:** A date is set for publishing the release.</li><li>**Queued:** This means the release publishing is being deployed. No action is needed for the release to get to the next status, *Publishing*.</li><li>**Publishing:** The VTEX platform is processing the release publishing request.</li><li>**Published:** The release’s content is published and available to the customer in the storefront.</li><li>**Publish failed:** An error occurred and the release has not been published. When you click on the release name, a page with the release details is displayed, showing more information on the error type and how to fix it.</li></ul> |

In the `UNSCHEDULED` tab, there are only three columns with the same meaning as the ones previously described:

- Name
- Last modified
- Created by

For more information on a specific release, you can simply click it.

## Searching releases

On the **Releases** page, you can find a release by its name using the search field. The results appear as you type. A misspelled name will return no search results.

Another way to search for releases is to use the filters available only in the `SCHEDULED` tab. To do that, click **Filters** and select the desired combination between a release status and/or the time set for publishing.

## Scheduling releases

When creating a release, you can set the publish date or not, which is why there are three possible actions for scheduling:

- **Schedule:** Set a publish date for a release in case it is not specified.
- **Unschedule:** Cancel the publish date, which will put the release in the `Unscheduled` status.
- **Reschedule:** Set a new date for a release with a date defined.

> ℹ️ When you schedule or reschedule a release publication, you can select the option **Add end date** to set a deadline for the release to be unpublished. The end date does not mean deleting the release but archiving it to be republished at any time.

### Scheduling

When the release is in the `Unscheduled` status, you can set a publish date in two ways. Scheduling via the **Releases** module:

1. In the VTEX Admin, access **Store Settings > Releases**.
2. Click `UNSCHEDULED` or [search](#searching-releases) using the search bar and the filters to find the desired release.
3. On the line corresponding to the release, click the <i class="fas fa-ellipsis-v"></i> menu icon. 
4. Select the `Schedule` option.
5. Set a date using the calendar and an hour for the release.
6. If you wish, select a date to unpublish the release by clicking `Add end date`.
7. Click `Schedule`.

Scheduling using the release details page:

1. On the **Releases** page, click the name of the release you want to schedule.
2. On the release details page, click the `Schedule` button.
3. Set a date using the calendar and an hour for the release.
4. If you wish, select a date to unpublish the release by clicking `Add end date`.
5. Click `Schedule`.

### Unscheduling or rescheduling

When the release is `Scheduled`, you can:

- Reschedule and set a new publish date.
- Unschedule and put the release in the `Unscheduled` status. 

For each of these options, follow the instructions in the [Scheduling](#scheduling-releases) section. The only difference being that the available configuration options will be `reschedule` or `Unschedule`.

## Publishing releases

Releases with the following statuses allow publication:

- `Unscheduled`
- `Scheduled`
- `Publish failed`

To publish a release using the **Releases** module and make the changes visible in the storefront, follow the step-by-step instructions below: 

1. In the VTEX Admin, access **Store Settings > Releases.**
2. On the line corresponding to the desired release, click the <i class="fas fa-ellipsis-v"></i> menu icon.
3. Click `Publish now`.
4. Click `Publish`.

Another way to publish is to go to the release details page, following the steps below:

1. On the **Releases** page, click the name of the release you want to publish.
2. On the release details page, click <i class="fas fa-ellipsis-v"></i> `More`.
3. Click `Publish now`.
4. Click `Publish`.

## Deleting releases

To delete a release, follow the step-by-step instructions below: 

> ❗ Deleted releases cannot be recovered. The updates included in the release remain, but they are no longer grouped together.

1. In the VTEX Admin, access **Store Settings > Releases**.
2. On the line corresponding to the desired release, click the <i class="fas fa-ellipsis-v"></i> menu icon. 
3. Click `Delete`.
4. Click `Delete`.

Another way to delete a release is to go to the release details page, following the steps below:

1. On the **Releases** page, click the name of the release you want to delete.
2. On the release details page, click <i class="fas fa-ellipsis-v"></i> **More**.
3. Click `Delete`.
4. Click `Delete`.
