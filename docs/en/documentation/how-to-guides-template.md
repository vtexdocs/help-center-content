---
title: 'How-to guide'
id: edu0006
status: PUBLISHED
createdAt: 2025-02-06T15:00:00.388Z
updatedAt: 2025-02-06T15:00:00.388Z
publishedAt: 2025-02-06T15:00:00.388Z
firstPublishedAt: 2025-02-06T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugEN: how-to-guide-template
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: how-to-guide-template
---

A how-to guide is a type of documentation that provides specific instructions on how to perform a task. It's focused on the practical aspects of a process, often with step-by-step instructions and visual aids. How-to guides are for users who want to accomplish a specific goal and are familiar with the product or module.

In this guide, you’ll see the available template, general guidelines, and examples of how-to guides.

> ℹ️ Make sure to review the guidelines in the [Best practices for writing documentation](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

## Differences between a tutorial and a how-to guide

While both [tutorial](https://contentguide.vtex.com/docs/documentation/tutorial-template) and how-to guide are instructional resources, they have some differences in their structure and purpose:

<details>
<summary><b>Purpose</b></summary>

| **Tutorial** | **How-to guide** |
| ------------ | ---------------- |
| Learning-oriented. Teaches a broader concept, skill, or process in detail. | Task-oriented. Focus on helping the user complete a specific task or goal. |

</details>

<br>

<details>
<summary><b>Scope</b></summary>

| **Tutorial** | **How-to guide** |
| ------------ | ---------------- |
| Covers a series of steps or concepts, often related to learning a new skill. | Narrow in scope, typically covering one task or process divided into steps. |

</details>

<br>

<details>
<summary><b>Content</b></summary>

| **Tutorial** | **How-to guide** |
| ------------ | ---------------- |
| Educational, offering context, background, and explanations. | Practical, with direct, task-oriented instructions. |

</details>

<br>

<details>
<summary><b>Audience</b></summary>

| **Tutorial** | **How-to guide** |
| ------------ | ---------------- |
| Users who want to learn a skill or understand a concept deeply. | Users who need to quickly achieve a specific goal, usually with prior knowledge. |

</details>

<br>

## Writing a how-to guide

| **Topic** | **Tutorial** |
| --------- | ------------ |
| **Title** | Directly states the guide's goal and uses a verb in the gerund form. Consider your target audience and the specific action you want them to take. For example: `Setting up your development environment` |
| **Before you begin** (optional)  | Lists all necessary prerequisites the user must have or complete before following the steps in the guide, including: <ol><li>Tools and software requirements: Specifies the minimum system requirements, such as operating system versions, specific software installations, and hardware configurations.</li><li>Account creation or setup: If the user needs to create an account or set up specific configurations, it provides clear instructions or links to relevant resources.</li><li>Basic knowledge or skills: If the guide assumes a certain level of familiarity with specific concepts or tools, it briefly outlines those prerequisites or provides links to additional learning resources.</li></ol> |
| **Instructions** | <ol><li>Provides detailed instructions for completing the task or achieving the goal.</li><li>Breaks down the process into steps, ensuring each step is clear and actionable.</li><li>Considers what the user needs to accomplish by the end of the guide and outlines every necessary task to get there. For example, if the goal is to set up a development environment for building a storefront, consider each task the user needs to complete to achieve that.</li><li>If a guide requires only one step, omit the **Step 1 - Step title**, and in the section **Instructions**, list the action(s) in an ordered list.</li><li>Each step should guide the user from one point to the next in a logical sequence. Where relevant, it includes examples, media, or warnings to help users.</li><li>The last step should illustrate the outcome so the user can compare it with their results.</li></ol> |
| **Content of the instructions**  | <ol><li>Each line of the procedure must correspond to an action to be taken by the user.</li><li>Don’t assume user knowledge. For example, if the user must press `Enter` in a step, include that instruction as part of the step.</li><li>Use angle brackets (`>`) to break down complex steps or combine simple ones for sequential actions. For example: *1. In the VTEX Admin, go to __Storefront > Site Editor__*.</li><li>Maintain consistent verb tense throughout the instructions by using imperative verbs. For example: *1. Click File > New > Document.*.</li></ol> |

## How-to guide template

<details>
<summary><b>Announcement template</b></summary>

```md
# Title

[Describe in this section the goal of the guide and what the user will be able to do after following it.]

## Before you begin
[List any necessary tools, software, accounts, required knowledge or skills that the user must have before beginning to follow the guide.]

## Intructions

### Step 1 - Step 1 title
[Provide instructions for this step.]

### Step 2 - Step 2 title
[Provide instructions for this step.]

### Step 3 - Step 3 title
[Provide instructions for this step.]
```

</details>

## Examples of how-to guides

- [Overriding native component's props](https://developers.vtex.com/docs/guides/faststore/overrides-component-props)
- [Managing product images in specific contexts](https://developers.vtex.com/docs/guides/faststore/customization-managing-product-images-in-specific-contexts)
- [Building a search results page with multiple layouts](https://developers.vtex.com/docs/guides/vtex-io-documentation-building-a-search-results-page-with-multiple-layouts)
- [Running IO scripts in non-IO VTEX stores](https://developers.vtex.com/docs/guides/vtex-io-documentation-running-io-scripts-in-non-io-vtex-stores)
