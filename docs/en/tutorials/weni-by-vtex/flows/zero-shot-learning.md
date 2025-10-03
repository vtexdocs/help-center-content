---
title: 'Zero Shot Learning'
id: 5Qk9g3o19n26jSz7cnbVL8
status: PUBLISHED
createdAt: 2025-09-16T16:48:11.308Z
updatedAt: 2025-10-03T14:20:03.861Z
publishedAt: 2025-10-03T14:20:03.861Z
firstPublishedAt: 2025-10-03T14:20:03.861Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zero-shot-learning
legacySlug: zero-shot-learning
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### Zero Shot

Zero Shot is a natural language processing technique that allows intelligent agents to recognize features that have not been previously trained. Zero Shot requires no training data, allowing you to shorten the AI ​​creation process and classify sentences quickly and accurately. Its biggest benefits are: increased customer adoption, better understanding during the conversation with the end user and greater ease in implementing AI in new projects.
Some important information about the model:
  * ZeroShot ranks higher in Portuguese, Spanish and English compared to the current market leaders:

Zero Shot| 78.4% Accuracy
---|---
GPT-4-Turbo| 76.8% Accuracy
Claude 3 (Sonnet)| 77.6% Accuracy
  * At least 3x faster in classification (inference);
  * Efficient model included in your Weni plan, without the need for API calls or additional costs;
  * Easy and quick implementation.

Watch a quick, explanatory video: [Video](https://youtu.be/RDRgSXIJRrM)

#### Application and Features

The way the Zero Shot application works consists of receiving as input a phrase, which will be categorized, and identifying which category this input belongs to according to the customer's context. Categories are defined through Command Phrases, which serve as context to identify and generate the correct classification. From the input data, the model is expected to return the category of the sentence.

When we talk about context, take into account that whenever you use Zero Shot, we must configure the Command Phrases. **Command phrases will instruct the intelligence to classify your intentions (called ""Classes"") according to rules defined by you.**

#### Zero Shot in Practice

There are two ways to create a Zero Shot classification AI on the Weni Platform: through the **Classify automatically** and **Smart Wait for response** flow cards.

##### Smart Wait for response

With the Smart Wait for response card, you can wait for the user's response and send that response directly to your AI Classification, so you can create your categories and treat each intention as you wish:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/zero-shot-learning_1.png)

In the example below, we create intentions and their appropriate contexts so that we can categorize and handle user requests:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/zero-shot-learning_2.png)

Remember, each category must have a Command Phrase. The command phrases will instruct the intelligence and you can use these examples:

- when the user wants to know what the delivery modalities and deadlines are > Delivery
- when the user wants to know why their order was delayed or if it will be delayed > Delay
- when the user wants to replace a product or talk about a product that has been replaced or change an item > Replacement

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/zero-shot-learning_3.png)

##### Automatic Classiffy

With the Automatic classify card, you can use an expression or variables as the input for classifying user intent (Class). This card is normally used when you already have a **text** to deal with and do not need to wait for a response from the user before consulting Artificial Intelligence:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/zero-shot-learning_4.png)

The difference between the **Smart Wait for response** card and the **Automatic Classify** card is that **Automatic Classify** will not cause a pause in the flow to receive a response from the contact.

##### Use Cases

Example use case for client context in the financial area:
**phrase:** ""I want to talk to an attendant""

**categories:** [{""class"":""HumanAssistance"",""context"":""When the user wants to speak with an attendant or human specialist.""},
{""class"":""Invoice"",""context"":""When the user wants to generate a new payment invoice""},
{""class"":""Statement"",""context"":""When the user wants to see their financial status""},
{""class"":""Debts"",""context"":""When the user wants to access or renegotiate their debts.""}]

**expected result:** ""HumanAssistance""
Example use case for client context in the educational area:
**phrase:** ""I would like to know my test score""

**categories:** [{""class"":""Calendar"",""context"":""When the user wants to know the class schedule.""},
{""class"":""Subjects"",""context"":""When the user needs to access information about the subjects.""},
{""class"":""Scores"",""context"":""When the user requests access to their scores""},
{""class"":""Teachers"",""context"":""When more information about the teachers is requested.""}]

**expected result:** ""Scores""
