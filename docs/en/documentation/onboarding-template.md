---
title: 'Onboarding'
id: edu0008
status: PUBLISHED
createdAt: 2024-12-03T19:24:22.388Z
updatedAt: 2025-02-03T11:11:00.388Z
publishedAt: 2024-12-03T19:24:22.388Z
firstPublishedAt: 2024-12-03T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugEN: onboarding-template
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: onboarding-template
---

Onboarding articles introduce new users to a specific technology, tool, or system to facilitate the learning curve and enable them to become proficient and productive.

In this guide, you'll see the available template, general guidelines, and examples of Onboarding articles in this guide.

> ℹ️ Make sure to review the guidelines from the [Best practices for writing documentation](https://contentguide.vtex.com/docs/documentation/documentation-overview#best-practices-for-writing-documentation).

## Writing an onboarding article

| Topic | Description |
| :---- | :---- |
| **Focus on Fundamentals** | Emphasize the core elements a user needs to understand to get started, such as critical dependencies, initial configurations, and key setup steps. Avoid overwhelming users with advanced configurations unless they're necessary for the initial usage.  |
| **Assets** | Whenever possible, include visuals such as diagrams, screenshots, or flowcharts. These can clarify complex processes and provide users with a quick reference. In the architecture section, a well-labeled diagram helps illustrate system components and interactions. |
| **Instructions** | For sections like **Quickstart**, make sure each step is actionable and, if needed, link to additional resources for deeper understanding. |
| **Links to Prerequisites and Further Learning** | Use links to redirect users to related technologies, documentation, and guides. For example, in the Next steps section, suggest related configurations or customizations and link to resources that expand on or complement the basic onboarding content. |

## Onboarding template

<details>
<summary><b>Onboarding template</b></summary>

```md
# Title
[Describe what the technology is in this section.]

Ex.: To work with {technology name}, you should be familiar with the following technologies:
[Add here the technologies that the user should know before starting to work with it.]
[Technology 1](#)
[Technology 2](#)
[Technology 3](#)
… 
## {technology name} architecture
[Add here a diagram illustrating the technology architecture and provide an explanation.]

## Quickstart
[Describe the instructions for developing a project using the technology, from installing the requirements to running the project locally. The steps below can vary depending on the technology used.]

### 1. Initial settings
[Describe the requirements and initial configuration needed before developing the project.]

### 2.  Setting up the project
[Provide instructions for setting up the development environment to kickstart the project and run it locally.]

### 3. Customizing the storefront
[After running the project locally, describe the customization options available.]

## Next steps
[Suggest additional initial configurations or steps for those who have completed the quickstart section, and include the card component along with links to suggestions.]
```

</details>

## Examples of Onboarding articles

- [FastStore - Overview](https://developers.vtex.com/docs/guides/faststore)  
- [Store Framework - Overview](https://developers.vtex.com/docs/guides/store-framework)
