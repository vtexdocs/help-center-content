---
title: 'Procedures'
id: formatting0004
status: PUBLISHED
createdAt: 2025-12-27T15:00:00.388Z
publishedAt: 2025-12-27T15:00:00.388Z
firstPublishedAt: 2025-12-27T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugEN: procedures
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: procedures
---

A procedure is a sequence of numbered steps for accomplishing a task. 

## Introductory sentences

Begin a procedure with an introductory sentence to provide context that isn't part of the section heading. Introductory sentences help the reader understand the purpose, scope, and prerequisites of a procedure before they begin.

> ⚠️ If the heading explains the procedure, and no additional context is needed, don't include an introductory statement.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| Before starting, make sure you have admin access to the dashboard. | This section explains how to configure the dashboard. |
| Follow the instructions below to troubleshoot errors in the payment workflow. | Here are the steps for the payment workflow. |
| Install the VTEX IO CLI to manage and deploy your store project. | This section explains how to install the CLI. |

Don't use **step-by-step** as a noun when talking about the steps the user should follow. Use the word **instructions**.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| To create a redirect, follow the instructions below. | To create a redirect, follow the step-by-step below. |

When introducing a procedure, use the imperative to give clear commands and help the user scan for actions. Avoid starting with a partial sentence that depends on subsequent steps to complete it.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| To customize the buttons, follow these instructions: | To customize the buttons: |
| Before deploying, make sure the app has already been published and tested. | Steps for deploying: |

The sentence can end with a colon or a period.

* Use a colon if the introductory sentence immediately precedes the procedure.  
* Use a period if there's more content (example: a callout or a screenshot) between the introduction and the procedure.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| To manage store product categories, follow these steps: | Steps to manage your store's product categories.
| 1. Access the VTEX Admin. | First, access the VTEX Admin.
| 2. …   … | 2. …
| Install project dependencies to run it locally by following the instructions below. | Install the project's dependencies:
| ⚠️ Make sure your project has all the prerequisites described in the [Before you begin] section. | ⚠️ You must check that your project has all the prerequisites described in the [Before you begin] section.
| 1. Open the terminal and run `yarn install`. | Run `yarn install`. … |
| 2. ... | 2. ...


## Content

When starting a procedure, use **Before you begin** as the title. 

| ✅ Do | ❌ Don't |
| :---- | :---- |
| Before you begin | Before you start |

Each line of the procedure must correspond to an action to be taken by the user.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Add the category name. | 1. Add the category name, click `Save`, and go back to the **Categories** page. |
| 2. Click `Save`. |
| 3.Go back to the **Categories** page. | 

Explain concepts separately (example: in callouts or introductory text) and avoid using steps in the procedure exclusively to explain concepts.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| Development workspaces allow you to link, publish, and install apps. To create a development workspace, follow these steps: | 1. Development workspaces allow you to link, publish, and install apps. To create a Development workspace, log in to a VTEX account. |
| 1. Log in to the desired VTEX account. | Create a development workspace by running the `vtex use {workspaceName}` command. |
| 2. Create a development workspace by running the `vtex use {workspaceName}` command.  

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Open a terminal. | 1. Open a terminal.
| 2. Start a local development server to serve your website by running `faststore dev`. | Start a local development server to serve your website by running `faststore dev`.|
| ℹ️ The `faststore dev` command, part of the [FastStore CLI](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), updates the store project with the `@faststore/core` package. | 3. The `faststore dev` command, part of the [FastStore CLI](https://developers.vtex.com/docs/guides/faststore/getting-started-3-faststore-cli), updates your store's project with the `@faststore/core` package. |

Include every required action. Don't skip steps or assume the user is already familiar with a particular step.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Type **install**. Press `Enter` on your keyboard to start the installation. | 1. Type **install**. *(Assumes user knows to press `Enter`)* |

If a step is too long, consider splitting it into multiple steps. You can also combine small actions into one step by using angle brackets (>) for sequential menu selections.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Go to **Catalog > Custom Product Attributes > Service Types**. | 1.Go to **Catalog**. 
|  | 2. Go to **Custom Product Attributes**. |
|  | 3. Go to **Service Types**. |

Keep the verbal tense consistent throughout procedures.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Configure inventory. | 1. Configuring inventory. |
| 2. Enter your name. | 2. To fill in your name. |
| 3. Click `Save`. | 3. Click `Save`. |

State the purpose of the action and its location before declaring the action.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| To create a new document in the software, click **File > New > Document**. | Click **File > New > Document** to create a new document in the software. |

If there's more than one way to complete a task, do the following:

* Write the most accessible procedure for all users.  
* If all procedures need to be documented, make it clear to the reader that this is an alternative way to complete the same task.  
* Use separate headings, pages, or tabs to separate alternative procedures.

<details>

<summary><b>✅ Do</b></summary>

```md  
## Uploading files

1. Click **Upload**.  
2. Select the file.  
3. …

### Alternative method: Uploading files (CLI)

1. Open the terminal.  
2. Run `upload --file=<path>`.  
3. …
```

</details>

<details>

<summary><b>❌ Don't</b></summary>

```md  
## Uploading files

1. Click Upload or run `upload --file=<path>` in the terminal.  
//(Mixes methods without clear separation.)
```

</details>

For an optional step, add *(Optional)* as the first word of the step. 

| ✅ Do | ❌ Don't |
| :---- | :---- |
| (Optional) Type an arbitrary string. | (Optional): Type an arbitrary string. |

Avoid using directional language that references the visual layout (example: "above," "below," "to the right") to orient the reader. This type of language is not effective for accessibility or localization, as it relies on sight and a specific screen layout. Instead, use descriptive text that names UI elements by their function or title. 

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Click the ☰ menu.  | 1. Click the button with three lines.|
| 2. In the following diagram, ...  | In the diagram below, ...|

> ⚠️ When mentioning elements of the Admin UI that contain text, reproduce the text as it appears in the Admin, including its capitalization. For more information, see [Computer interfaces](/TBD).

### Sub-steps in numbered procedures

Sub-steps break down complex instructions into smaller, sequential actions that must be completed in a specific order. They use hierarchical labeling (letters, Roman numerals) to show the dependency between actions, guiding users through dependent steps while maintaining clarity.

#### Labeling and punctuation

* Main steps: Numbers (`1.`, `2.`).  
* Sub-steps: Lowercase letters (`a.`, `b.`).  
* Sub-sub-steps: Lowercase Roman numerals (`i.`, `ii.`)  
* If a step introduces sub-steps, end it with a colon (`:`).  
* If it's a standalone step, use a period (`.`).

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. To add a VM instance, do the following: | 1. To add a VM instance, do the following: |
| a. Click `Create instance`. |   a. Click `Create instance`.|
| b. Enter a *Name* for the VM instance, and then: |   b. Enter a *Name* for the VM instance, and then:|
| i. Select the *Region* where you want to deploy the VM instance. | c. Select the *Region* where you want to deploy the VM instance.|
| ii. Select the *Machine type.* | d. Select the *Machine type.*|
| c. Click `Create`. | e. Click `Create`.|
| 2. To connect to the VM instance using SSH, click `SSH`. | 2. To connect to the VM instance using SSH, click `SSH`.

#### Non-sequential actions

For independent items that don't require a specific sequential order, use a bullet list. 

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Go to **Settings**.| 1. Go to **Settings**.|
| Complete the screen fields listed below as needed. |  Fill in the screen fields listed below according to your needs.|
| • ... | a. ... |
| • ... | b. ... |
| • ... | c. ... |
| Click `Save`. | 3. Click `Save`. |

### Formatting

When creating a procedure, it's crucial to maintain continuous numbering. This means your steps should flow uninterrupted (example: 1., 2., 3., etc.).

To ensure clarity and maintain the flow, always check that the inserted content — such as screenshots, diagrams, or notes — doesn't break the logical progression of the steps. Inserting these items incorrectly can accidentally restart the numbered list, making it seem like a new procedure begins from `1.`, even if you intend to continue the same sequence of instructions.

| ✅ Do | ❌ Don't |
| :---- | :---- |
| 1. Open the VTEX Admin.| 1. Open the VTEX Admin.
| 2. Go to **Catalog > Products and SKUs**. | 2. Navigate to **Catalog > Products and SKUs**.
| `Screenshot of the Products and SKUs interface.` | `Screenshot of the Products and SKUs interface.`
|3. Click `Add product`. | 1. Click `Add Product.` |
