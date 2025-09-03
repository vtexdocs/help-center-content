---
title: 'Managing Projects'
id: 42IpDFqTVTESH8DCypJMPM
status: PUBLISHED
createdAt: 2023-11-01T13:45:57.091Z
updatedAt: 2025-04-25T13:31:33.762Z
publishedAt: 2025-04-25T13:31:33.762Z
firstPublishedAt: 2023-11-01T19:38:50.237Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-projects
legacySlug: managing-projects
locale: en
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Projects is a feature in the VTEX Headless CMS that simplifies the management of multiple frontend projects, such as mobile apps, websites, and email marketing, from one control panel.

![Projects pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/headless-cms/managing-projects_1.gif)

Each project is customized with its own settings, content, and branding according to specific audiences or purposes. 

In this guide, you will learn how to manage each frontend project of your store.

## Before you begin
For the Headless CMS management, make sure the [resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `See CMS menu on the top-bar`, `Settings*`, and `CMS GraphQL API` are associated with your [user role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). Otherwise, [create a custom user role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add these resources to it or add these resources to an existing user role.

## Overview
To access **Projects**, go to the VTEX Admin and access **Storefront > Headless CMS**.

![Projects overview](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/headless-cms/managing-projects_2.png)

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| Project card   | Opens the selected project, allowing you to create and edit pages for the project content.      |
| Settings (⚙️)  | Opens a modal that displays project configurations organized into three tabs: <ul><li>**General:** Edits the project ID and API settings or archives the project.</li> <li>**Content-Types:** Connects the Headless CMS project with your code source through webhooks by setting up the content types and sections.</li> <li>**Build:** Initiates and manages website builds. Set a webhook URL for build notifications and an endpoint to preview the page versions. </li></ul>       |
| Create new       | Opens a page to configure a new project from scratch. |

## Creating a new project

Create a new project for your store by setting general settings such as **Project ID**. To effectively connect a Headless CMS project with your project's source code, you will also need to set up webhooks and build settings such as *Build Webhook URL* and *Preview URL*. 

A webhook is an HTTP endpoint that enables automated communication between the VTEX Headless CMS and the project's source code. For example, it allows the CMS to notify a FastStore project of content changes or other events, triggering actions like real-time content synchronization.

1. In the **Projects** page, click `Create new`.
2. In the **New project** page, fill in the fields according to the [Project settings](#project-settings) section.
3. After setting each field of the page, click `Create` and a successful message will appear on the screen.

Once you have created a new project, you can create pages for it with all the URL routes and corresponding page templates of your store’s website, such as home, product, and login pages. 

To create a new page, follow the steps in [Managing Pages in the Headless CMS](https://help.vtex.com/tutorial/managing-pages--3DO6rBhZ1p3zndnFu5BgRt)

## Project settings
The Project settings allow you to configure your project according to three main categories:

- [General](#general): Edits the project ID, API settings and archives the project.
- [Content-Types](#content-types): Connects the Headless CMS project with your code source through webhooks by setting up the content types and sections. 
- [Build](#build): Initiates and manages website builds. Set a webhook URL for build notifications and an endpoint to preview the page versions.

### General

| Field name             | Description           | Value example     |
| ---------------------- | --------------------- | ----------------- |
| Project ID (mandatory) | ID of the project.    | E.g., `faststore`       |
| Storefront      | Defines the VTEX storefronts available (`FastStore` or `Custom`) and their purpose.  | See the [Storefront](#storefront) section for more information. |

#### Storefront

This field determines the [build](#build) configuration settings based on your chosen storefront. Options include:

- **VTEX Storefronts**:

Choose a storefront from your account (e.g., FastStore). [Build](#build) automatically adjusts based on the storefront chosen. You can still customize them later.

- **Custom**
   Choosing a `Custom` storefront gives you the flexibility to define your own [build](#build) settings.

### Content-Types

| Field name             | Description           | Value example     |
| ---------------------- | --------------------- | ----------------- |
| Sections URL | Webhook URL for receiving and saving the sections created in the source code in the Headless CMS. | E.g., `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{projectId}/sections`       |
| Content types URL       | Webhook URL for receiving and saving the content types created in the source code in the Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types`       |

### Build

| Field name             | Description           | Value example     |
| ---------- | ---------- | ---------- |
| Sections URL      | Webhook URL for receiving and saving the sections created in the source code in the Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/sections`      |
| Content types URL       | Webhook URL for receiving and saving the content types created in the source code in the Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types`       |
| Build Webhook URL      | Webhook URL for starting a new build in the Headless CMS when a page or content is added or edited.</br>[Known Issue – Headless CMS Data Mocking Between Workspaces](https://help.vtex.com/en/known-issues/headless-cms-is-not-mocking-data-between-workspaces--iDUOWMDKXPb6ZjO19kmO7): Due to a data-mocking issue, drafts created in any workspace currently appear in the master environment. This means changes that should be isolated to individual workspaces are visible in the master workspace. | `https://app.io.vtex.com/vtex.cms-builder-sf-jamstack/v1/{accountName}/master/build-releases` |
| Save Webhook* URL       | Webhook URL for enabling real-time previews of the project by notifying you to refresh the page to reflect the latest changes in the Headless CMS.      | -      |
| Preview URL      | Webhook URL that provides the preview for pages in the Headless CMS.       | `https://{accountName}.vtex.app/api/preview`      |

## Editing a project
After creating the project, you can also edit all the information you have set during the [creation of it](#creating-a-new-project).
have set during the [creation of it](#creating-a-new-project).
On the Projects main page, click Settings (⚙️), and a modal window will open with two tabs for [General](#general) and [Build](#build) settings.

### Restoring default Sections URL

Once you have [created the project](creating-a-new-project) and want to edit the [**Sections URL**](#content-types) field click `Edit`, add the new webhook URL and click `Save`. If you want to restore the default URL, click `Restore default`.

## Archiving a project
Archiving a project disables the API and access to the content within the project. 
To archive a project, follow the steps below:

1. Go to **Storefront > Projects**.
2. Choose the project you want to archive and click **Settings** (⚙️) to open a modal.
3. Click `Archive project` on the `General` page. A pop-up message will appear to confirm that you want to archive the project.
![Archive project](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/headless-cms/managing-projects_3.png)
4. Click `Archive`. A message informing that the project was successfully archived will appear.

If you want to restore an archived project, follow the steps in [Restoring a project](#restoring-the-project).

### Restoring a project
Restoring a project re-enables its API and allows the content within the project to be accessible once again.
To restore the project, follow the steps below:

1. Go to **Storefront > Projects**.
2. Click the archived project card.
3. Click `Restore project`. A pop-up message will appear to confirm if you want to restore the project.
4. Click `Restore`. A message informing that the project was successfully restored will appear.

