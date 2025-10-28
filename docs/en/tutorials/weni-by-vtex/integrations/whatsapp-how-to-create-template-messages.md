---
title: 'Whatsapp: How to create Template Messages'
id: 3KQizjNnrDY2K3DhPwiPim
status: PUBLISHED
createdAt: 2025-09-15T15:05:31.154Z
updatedAt: 2025-10-03T14:20:32.643Z
publishedAt: 2025-10-03T14:20:32.643Z
firstPublishedAt: 2025-10-03T14:20:32.643Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-how-to-create-template-messages
legacySlug: whatsapp-how-to-create-template-messages
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Template messages are used to initiate conversations with customers and are the only [type of message](https://developers.facebook.com/docs/whatsapp/conversation-types#message-types) that can be sent to customers who haven't started a conversation with you yet or haven't messaged you in the last 24 hours in an existing conversation.

Before being sent to customers, message templates need to be approved. Also, they can be automatically deactivated based on customer feedback. If disabled, the message template cannot be sent to customers until it improves the quality rating and no longer violates the [WhatsApp Business Policy](https://www.whatsapp.com/legal/business-policy/) or [WhatsApp Commerce Policy](https://www.whatsapp.com/legal/commerce-policy/) .

#### **Creation**

You can use the Weni platform to manually create message templates and submit them for approval.

To create a message template:

1. Access the **Integrations** Panel and go to the **My Apps** tab;
2. Click on the card that contains the whatsapp account you will get the Template.
3. Click on the **Template** tab on the right side.
4. A panel will open where you will click New Template to add the message:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/whatsapp-how-to-create-template-messages_1.png)

1. Fill in the form with the necessary information. Use the \+ **Add Variable button** if you want to enter placeholders for the variable content to be provided on template submission.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/whatsapp-how-to-create-template-messages_2.png)

1. Click Add Example to add example values ​​to the template. Doing this is optional, but highly recommended. See [Examples](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#samples) .
2. Click **Submit** to submit the template for approval.

#### **Approval Process (META Responsibility)**

After creating the template, you can submit it for approval. It may take up to 24 hours for an approval decision to be made. Once the decision is made, a notification will appear in the WhatsApp Manager. Additionally, an email will be sent to Business Manager admins. If you've signed up to receive updates on message template status changes, you'll also receive a webhook notification from Meta. See [How to Monitor Status Changes](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?locale=en_US) .

The message template will have the status **Active – Pending Quality** if approved. With that, you can start sending it out to customers. If rejected, the template can be [edited](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) and resubmitted for approval. Another possibility is to [appeal the decision.](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals)

#### **Examples**

We recommend that you include an example before submitting the template for approval. Examples allow you to provide sample media assets and text values for media or text variables required by the template. This makes it easier for Meta to visualize how the template will appear to your customers.

Additionally, if your submission is rejected and you decide to file an appeal, you will need to include an example in your appeal. Therefore, it's better to include it in the initial submission.

To include an example in the submission, first create your template by adding the necessary variables. Then, click the **Add Example** button. The preview panel will render the examples of media assets or text values provided.

If you experience message rejections and want to resolve or change your template message settings, go to [**WhatsApp Template Messages: Impediments and Configurations**](https://ilhasoft.helpdocs.io/l/en/weni-integrations/whats-app-template-messages-impediments-and-configurations) for more information.

#### **Learn more**

- [**WhatsApp Business Policy**](https://business.whatsapp.com/policy) : Learn more about the policies for businesses.
- [**WhatsApp Commerce Policy**](https://www.whatsapp.com/legal/commerce-policy/?fbclid=IwY2xjawGDfJMBHeEliiVkByMLSqVGgPfICfHEOpwV9lYL1yR8yyjCeUuaZM0yYJZQFEETBA) : Learn more about commerce-related policies.
- [**Policy Enforcement**](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) : Learn more about how policies are enforced.
