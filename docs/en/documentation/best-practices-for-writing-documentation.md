---
title: "Best practices for writing documentation"
id: edu0001
status: PUBLISHED
createdAt: 2024-12-03T19:24:22.388Z
updatedAt: 2025-01-27T12:00:00.388Z
publishedAt: 2024-12-03T19:24:22.388Z
firstPublishedAt: 2024-12-03T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugEN: best-practices-for-writing-documentation
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: best-practices-for-writing-documentation
---

At VTEX, our goal for documentation is to make everything as simple and clear as possible for users working with or interested in VTEX solutions.

We welcome contributions to VTEX documentation and encourage you to help improve the user experience. There are several ways to contribute, depending on the documentation portal you're interested in and your preferred method. Check our [Contribution Guidelines](https://language-hub.netlify.app/docs/documentation/contribution-guidelines) for more information.

Before contributing to the documentation, make sure to:

-

## Define the documentation structure

Before you start writing, it’s important to understand your target audience and the specific goals of your documentation. To help you define the documentation objectives, answer the following questions:

- What do you want users to achieve after reading your documentation?
- What are the essential tasks or concepts they need to understand?
- What additional information could enhance user understanding?

### Identify the audience

To help you define the audience, answer the following questions:

- Who is the target audience for that information?
- What are they trying to do?

At VTEX, we have the following audience as our documentation readers:

| Audience type | Description   |
| :------------ | :------------ |
| **Beginner**  | New to ecommerce operations and VTEX, with little to no prior experience. Their main challenge is adapting to the platform and the ecommerce context. |
| **Operational**      | Handles daily ecommerce tasks, such as SKU registration and promotion management. Familiar with the ecommerce context but may encounter problems that they can’t solve by themselves. |
| **Highly Technical** | Builds or integrates technical solutions with VTEX. They work on store implementations, app development with our solutions, and integrations with partner systems via VTEX APIs. This audience requires in-depth technical documentation that describes the characteristics of all our features and indicates how to address business needs. |

### Checklist to define the documentation objectives

To help you define the documentation context, see the checklist below:

#### Audience

  <input type="checkbox" id="beginner" name="audience" value="Beginner">
  <label for="beginner">Beginner</label><br>
  <input type="checkbox" id="operational" name="audience" value="Operational">
  <label for="operational">Operational</label><br>
  <input type="checkbox" id="developer" name="audience" value="Developer">
  <label for="developer">Highly Technical</label><br><br>

#### Learning Category

  <input type="checkbox" id="awareness" name="learning_category" value="Awareness">
  <label for="awareness">Awareness - The audience can describe or paraphrase a concept or feature.</label><br>
  <input type="checkbox" id="comprehension" name="learning_category" value="Comprehension">
  <label for="comprehension">Comprehension - The audience can understand a concept to support decision-making.</label><br>
  <input type="checkbox" id="applicable_skill" name="learning_category" value="Applicable Skill">
  <label for="applicable_skill">Applicable Skill - The audience can follow instructions to complete a task.</label><br><br>

#### Learning Objective

  <input type="checkbox" id="tasks" name="learning_objective" value="tasks">
  <label for="tasks">Choose one or two tasks or concepts that the content will discuss.</label><br>
  What should someone be able to do or understand after reading this article? Choose one or two tasks or concepts that the content will discuss.
  Template example:
  
  ```md
  "Create a guide on {add the guide’s purpose}. The guide should emphasize clarity, structure, and user-friendliness. It's intended for {add the guide’s audience}."
  ```

## Documentation style guide

This guideline is the VTEX interpretation of stylistics as a discipline and explains particular language choices when creating functional and technical content about our platform.

### Style guide principles

| Principle  | Orientation  | Usage  |
| :--------- | :----------- | :----- |
| **Clarity and conciseness** | <ol><li>Use simple language and avoid jargon. Break down complex concepts into smaller, easier-to-understand steps.</li><li>Use clear and informative headings and subheadings to guide readers through the documentation.</li></ol>| <ol><li>Instead of *Utilize the API endpoint for product creation.* write, *Create a new product using the API.*</li><li>Use headings like *Getting started*, *Instructions*, and *Advanced features*.</li></ol>   |
| **Consistency**             | Maintain consistency in terminology, style, and formatting throughout the documentation. | Use the same terminology for similar concepts referring to the same subject/reader consistently from the beginning to the end of the text (example: *customer* instead of *client*, and stick to *you* instead of alternating with *user* or *member*).  |
| **Completeness**            | Make sure the documentation is both comprehensive and concise, covering all relevant topics with enough detail. | If you’re documenting a feature, include information on how to use it, common use cases, and potential troubleshooting steps. |
| **Usability**               | Consider the user's perspective and write the documentation in a way that is easy to navigate and use. | Use clear headings, subheadings, and bullet points to organize the content. |
| **Logical flow**            | Organize the content in a logical sequence that is easy to follow. | Start with an introduction, followed by detailed sections on specific topics. |
| **Media and code examples** | Use media such as diagrams, screenshots, and code examples to enhance understanding. | Use screenshots, diagrams, and code snippets to illustrate examples and ensure accuracy. *Tip:* Diagrams, like platform or product architecture diagrams, can help illustrate complex processes or relationships. |

For more details about these principles, see the [style guide section](LINK).
