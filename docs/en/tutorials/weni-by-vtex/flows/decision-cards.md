---
title: 'Decision cards'
id: 3V6NZBfEuJpNQCumY3p5Sg
status: PUBLISHED
createdAt: 2025-09-16T16:52:15.475Z
updatedAt: 2025-10-03T14:20:03.824Z
publishedAt: 2025-10-03T14:20:03.824Z
firstPublishedAt: 2025-10-03T14:20:03.824Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: decision-cards
legacySlug: decision-cards
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Decision cards are a very important part of the logical constructions of our flows. In the [introduction](https://docs.weni.ai/l/en/flows-category/introdu-o-a-fluxos) of transfers we talked little about the concept of these cards, and now we will understand a little more about their anatomy and the types that exist within the platform.

To facilitate navigation through this article, if you want to go directly to a specific topic, just click on the name below:
  * Routes and decision rules
  * Flow results
  * Wait for the contact to respond
  * Split by custom expression
  * Split by contact field
  * Split by result in the flow
  * Split by random chance
  * Split by group membership
  * Split by URN type
  * Split by intent
  * Automatic Classify
  * Smartly wait for response

### Routes and decision rules

#### What are routes?

The biggest difference between decision cards and action cards is the creation of routes. These routes are possible paths that a conversation can take according to some response or some contact data. The purpose of all decision cards is to create routes for each rule and ramifications of our flow.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_1.png)

Each route has a **name / category** and follows a decision rule. You can see in the connections of your routes the number of contacts that have already followed that path through your flow.

The **Other** route is a standard route, which exists to the case the analyzed value does not correspond to any of the created decision rules. All decision cards, having a defined rule, also create the Other route.

#### Decision rules

Decision rules are a set of rules that we use to create routes, that is, parameters that will be checked to decide whether or not a contact should go through that path.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_2.png)

To use a decision rule, simply select the rule type, then enter the value for comparison and finally define the category / name of the route to which this rule belongs. Each different category name will generate a new route with the same name. If you create more than one rule, but name it with the same category, all rules will point to the route with that name.

The rules are tested by the platform in a stack form, from top to bottom. If you have more specific rules, but which can be encompassed by more generic options, it is important that you place your specific rules at the top and the most generic ones at the bottom of the list.

Currently, there are 24 decision rules on the platform, which can be grouped into 4 categories. Check it out below:

  1. **Words and phrases:**

These are the rules that analyze phrases and / or words, comparing the response / value of the contact with the chosen phrases / words:
  * **has any of the words:** If the answer / value has any of the chosen words, it will follow the indicated route. All words must be separated by a space.
  * **has all of the words:** If the answer / value has all the chosen words, it will follow the indicated route. All words must be separated by a space.
  * **has the phrase:** If the answer / value has that phrase at some point in your text, it will follow the indicated route
  * **has only the phrase:** If the answer / value is exactly that phrase, it will follow the indicated route.
  * **starts with:** If the answer / value starts with that sentence, it will follow the indicated route.
  * **has some text:** If the answer / value is filled (not empty), regardless of the information contained, it will follow the indicated route.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_3.png)

You can use these rules to check names of people, organizations, establishments, etc.
  1. **Numbers and operations:**

These are the rules that involve numbers and / or numerical operations, comparing the response / value of the contact with the chosen numbers / numerical rules:
  * **has a number:** If the answer / value is a number, regardless of the number, it will follow the indicated route.
  * **has a number between:** If the answer / value is between the 2 numbers chosen, it will follow the indicated route.
  * **has a number below:** If the answer / value is less than the chosen number, it will follow the indicated route.
  * **has a number at or below:** If the answer / value is less than or equal to the chosen number, it will follow the indicated route.
  * **has a number equal to:** If the answer / value is equal to the chosen number, it will follow the indicated route.
  * **has a number at or above:** If the answer / value is greater than or equal to the chosen number, it will follow the indicated route.
  * **has a number above:** If the answer / value is greater than the chosen number, it will follow the indicated route.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_4.png)

These rules can be useful for age filters.
  1. **Date and time:**

These are the rules that involve date and time, comparing the dates entered by the user or other events with the chosen dates.

An important detail about the date comparison rules (before, equal to and after) is that all comparisons are not made by an absolute date, but by a date in relation to the current day, in the format **(today + n)** where n is the number of days forward or backward.

The rules are:
  * **has a date:** If the response / value of the contact has a date, regardless of the date, it will follow the indicated route. The date must have a valid date format (example: DD / MM / YYYY).
  * **has a date before:** If the answer / value has a date before the chosen date, it will follow the indicated route.
  * **has a date equal to:** If the answer / value has a date equal to the chosen date, it will follow the indicated route.
  * **has a date after:** If the answer / value has a date after the chosen date, it will follow the indicated route.
  * **has a time:** If the answer / value has a time, regardless of the time, it will follow the indicated route. The time must have a valid time format (example: HH: MM).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_5.png)

Good way to check the date of purchase of your products.
  1. **Custom formats:**

These are rules used to validate personalized text formatting, to obey any rules for formatting numbers, documents, etc.

The platform supports us to use regular expressions, or regex, which is a pattern search language. We are able to create custom standards rules for various types of formatting, such as CPF, CNPJ, CNH, etc. A good site for creating your regex is <https://regex101.com/>.

The rules are:
  * **has a phone number:** If the answer / value has a valid cell phone format (example: 5582999999999), it will follow the indicated route.
  * **has an email:** If the answer / value has a valid email format (example: no-reply@ilhasoft.com.br), it will follow the indicated route.
  * **matches regex:** If the answer / value follows the chosen regular expression rule, it will follow the indicated route.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_6.png)

Do you want to validate your ID's format? These rules are the way.

### Flow results

Every decision card chooses a route at the end of its execution, and this generates a flow result for us. Each flow result contains information such as:
  * Value that was used for the decision;
  * Route category chosen after the rules;
  * Date and time that this result was saved;
  * Extra contents and attachments sent with the value;

You can access these flow values ​​using the platform variables (to learn more visit the article on [expressions and variables](/l/en/flows-category/expressions-and-variables-introduction)) and you can also see these results in the form of graphs in the results area in the flow editor (to learn more access the article about the [flow editor](/l/en/flows-category/flow-editor-tools) and tools.)

By default, the results' name will always be **(Result + n)** where n is the number of results that exist in your stream, however, this can be easily changed in the Result name field.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_7.png)

Always change the results' names to names that you can understand in a simple and intuitive way!

### Wait for the contact to respond

The first and most used decision card. Routes are decided from the text entered by a contact. In addition, it has the option to create a route if the user does not respond, by selecting the checkbox at the bottom of the letter and choosing the waiting time for the response.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_8.png)

Card widely used to handle answers to questions asked to the user

Advanced
If you are using this card to collect mandatory information in the flow, be cautious when selecting the option ""continue when no response."" If the ""No response"" option is not connected to another card, the flow will end when the waiting time expires. If you want to remind the contact to respond, you can create a loop, which will prevent the contact from moving to the next card without providing an answer.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_9.png)

### Split by custom expression

Here the routes are decided from a custom expression created by the user. This custom expression can be constructed from the use of variables and functions. (To learn more about [expression and functions](/l/en/flows-category/express-es) go to the article variables and expression section)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_10.png)

It allows customizing some treatments, such as checking the service's opening hours.

### Split by contact field

Here, all decision rules analyze a contact field. Just select which contact field you want to check, and define the rules in question.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_11.png)

Good way to classify contacts using their data.

### Split by result in the flow

The focus here is to create routes from the flow results, which can be either those created by other decision cards or those created manually by the responsible action card. Just select the name of the flow result to be analyzed.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_12.png)

This letter can be used to analyze any user responses before it be saved in a contact field.

### Split by random chance

Here, the chosen route is made at random, just choose the number of routes you want and wait for the result. In this case, there is no decision rule, and only the route's name can be customized, along with the number of routes that will exist.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_13.png)

You can create several greeting and goodbye messages that will be different with each execution by a contact.

### Split by group membership

Creates routes from groups in which the contact participates. To do this, simply select one of the contact groups existing in the organization.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_14.png)

It can be used to limit the access of certain groups to specific parts of flows.

### Split by URN type

Creates routes based on which channel the contact is currently using. Just select the type of channel that are among those available and save.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_15.png)

Do you want to do different treatments according to the contact channel? Use this card

### Split by intent

In the **Split** **by Intent** card, you will select the classification intelligence to be used, as described in the [Split by Intentions](/l/en/flows-category/split-by-intent) article. Based on the configured intent (1) and confidence level (2) in the card, the input/message will be appropriately classified.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_16.png)

### Automatic Classify

With the **Automatically Classify** card, you can use an expression or variables as input to classify the user's intent (Class). This card is typically used when you already have a text to process and don't need to wait for the user's response before querying Artificial Intelligence.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_17.png)

Use clear and objective command phrases to help classify correctly. Learn more in the article about [Zero Shot](/l/en/ai/zero-shot-learning).

### Smartly wait for response

With the **Smartly wait for response** card, you can wait for the user's response and send it directly to your AI Classification. This way, you can create your categories and handle each intent as desired.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/decision-cards_18.png)

Use clear and objective command phrases to help classify correctly. Learn more in the article about [Zero Shot](/l/en/ai/zero-shot-learning).
