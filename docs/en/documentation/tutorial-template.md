---
title: 'Tutorial'
id: edu0011
status: PUBLISHED
createdAt: 2025-02-06T15:00:00.388Z
updatedAt: 2025-02-06T15:00:00.388Z
publishedAt: 2025-02-06T15:00:00.388Z
firstPublishedAt: 2025-02-06T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugEN: tutorial-template
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: tutorial-template
---

A tutorial is a comprehensive and detailed guide that teaches users how to perform a series of tasks or understand concepts in depth.

In this guide, you’ll see the available template, general guidelines, and examples of tutorials.

> ℹ️ Make sure to review the guidelines from the [Best practices for writing documentation](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

## Differences between a tutorial and a how-to guide

While both tutorial and [how-to guide](https://contentguide.vtex.com/docs/documentation/how-to-guides-template) are instructional resources, they have some differences in their structure and purpose:

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

## Writing a tutorial

| **Topic** | **Tutorial** |
| --------- | ------------ |
| **Title** | Directly states the tutorial's goal with a verb in the gerund form. Consider your target audience and the specific action you want them to complete. For example: `Managing users in B2B organizations` |
| **Before you begin** (optional)  | Lists all necessary prerequisites the user must meet or complete before following the steps in the guide, including: <ol><li>Tools and software requirements: Specify the minimum system requirements, such as operating system versions, specific software installations, and hardware configurations.</li><li>Account creation or setup: If the user needs to create an account or set up specific configurations, it provides clear instructions or links to relevant resources.</li><li>Basic knowledge or skills: If the guide assumes a certain level of familiarity with specific concepts or tools, it briefly outlines those prerequisites or provides links to additional learning resources.</li></ol> |
| **Steps** | The steps will be presented as a list. The list is in the templates after the sentence `Here's an overview of the parts`. <ol><li>Provides detailed, step-by-step instructions for completing the task or achieving the goal.</li><li>Breaks the process into steps, ensuring each step is clear and actionable.</li><li>Considers what the user needs to accomplish by the end of the guide and outlines every necessary task to get there. For example, if the goal is to manage an Admin module, consider each step the user needs to complete to achieve that.</li></ol> |
| **Content of the steps**  | <ol><li>Each step should guide the user from one point to the next in a logical sequence. Where relevant, it includes examples, media, or warnings to help users.</li><li>Each line of the instructions must correspond to a step to be taken by the user.</li><li>Don’t assume user knowledge. For example, if the user must press `Enter` in a step, include that instruction as part of the step.</li><li>Use angle brackets (`>`) to break down complex steps or combine simple ones for sequential actions. For example: *1. In the VTEX Admin, go to _Storefront > Site Editor_*.</li><li>Maintain consistent verb tense throughout the instructions by using imperative verbs. For example: *1. Click File > New > Document.*.</li></ol>|

## Tutorial templates

<details>
<summary><b>Template 1</b></summary>

```md
# [Tutorial title]

[Provide a short description of the tutorial, including the skills or knowledge the user will acquire by the end of it.]

Here's an overview of the parts:

<Flex>

<WhatsNextCard
title="Step 1. title"
description="Provide a short description of the step."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="See more"
/>

<WhatsNextCard
title="Step 2. title"
description="Provide a short description of the step."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="See more"
/>

<WhatsNextCard
title="Step 3. title"
description="Provide a short description of the step."
linkTo="https://developers.vtex.com/docs/guides"
linkTitle="See more"
/>

...

## Before you begin

[Lists all prerequisites the user must meet or complete before following the steps in the guide.]
 
</Flex>
```

</details>

<br>

<details>
<summary><b>Template 2</b></summary>

```md
# [Tutorial title]

[Provide a short description of the tutorial, including the skills or knowledge the user will acquire by the end of it.]

Here's an overview of the parts:

- [Step 1. Title](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Step 2. Title](https://developers.vtex.com/docs/add-the-step-slug-here)
- [Step 3.](https://developers.vtex.com/docs/add-the-step-slug-here)
...

## Before you begin

[Lists all necessary prerequisites the user must have or complete before following the steps in the guide.]
 
</Flex>
```

</details>

## Tutorial examples

- [Getting started: Storefront apps](https://www.google.com/url?q=https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developing-storefront-apps-using-react-and-vtex-io&sa=D&source=docs&ust=1736199224966224&usg=AOvVaw0BptDzlbA0vq4Xi6GkqX1E)
- [Getting started: Pixel apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-1-developnativeintegrationswithpixelapps)
- [Getting started: FastStore](https://developers.vtex.com/docs/guides/faststore/getting-started-overview)
- [Getting started: Store Framework](https://developers.vtex.com/docs/guides/getting-started-3)
