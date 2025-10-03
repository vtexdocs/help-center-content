---
title: 'WhatsApp Template Messages: Impediments and Configurations'
id: 4bc7imLyUicKHtCIJVGNSE
status: PUBLISHED
createdAt: 2025-09-15T15:07:41.131Z
updatedAt: 2025-10-03T14:20:32.609Z
publishedAt: 2025-10-03T14:20:32.609Z
firstPublishedAt: 2025-10-03T14:20:32.609Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-template-messages-impediments-and-configurations
legacySlug: whatsapp-template-messages-impediments-and-configurations
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Here you will find solutions for potential obstacles, rejections, and errors in the creation, sending, and modification of WhatsApp Template Messages. Follow the topics below for more information.

​

#### **Approval Process (Meta’s Responsibility)**

Once you create a template, you can submit it for approval. It may take up to 24 hours for a decision to be made. Once a decision is reached, a notification will appear in the WhatsApp Manager. Additionally, Meta will send an email to the Business Manager administrators. If you have subscribed to updates on message template status changes, Meta will also send a notification via webhook. Refer to [**How to Monitor Status Changes**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) for more details.

If approved, the message template will have the status ""Active – Quality Pending,"" allowing you to begin sending it to customers. If rejected, the template can be [**edited**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) and resubmitted for approval. Another option is to [**appeal**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) the decision.

​

#### **Common Reasons for Rejection**

These are the most common errors leading to rejection and should be avoided:

- Variable parameters are missing or have incompatible keys. The correct variable format is **{{1}}**.
- Variable parameters contain special characters, such as **\#**, **$**, or **%**.
- Variable parameters are not sequential. For example, **{{1}}, {{2}}, {{4}}**, and **{{5}}** are defined, but the parameter **{{3}}** is missing.
- The message template contains content that violates WhatsApp’s [**Commerce Policy**](https://www.whatsapp.com/legal/commerce-policy/) : when promoting the sale of goods and services, all media and messages related to your products are considered transactions. This includes descriptions, prices, fees, taxes, and/or required legal disclosures. Transactions must comply with WhatsApp's Commerce Policy.
- The message template contains content that violates WhatsApp’s [**Business Policy**](https://business.whatsapp.com/policy) : do not request sensitive identifiers from users. For example, do not ask customers to share full individual credit and debit card numbers, financial account numbers, national identification numbers, or other confidential information. This includes not requesting documents that may contain sensitive identifiers. Requesting partial identifiers (e.g., the last 4 digits of a CPF) is acceptable.
- The content is potentially abusive or threatening, such as threatening legal action or public embarrassment for the customer.
- The message template is a duplicate of an existing one. If a template is submitted with the same body and footer text as an existing one, the duplicate will be rejected. A rejection notification, including the reason, will appear in the Account Quality section of WhatsApp Manager and be sent via email. In the Account Quality notification, you can review the name and language of the existing template with the same content as the rejected duplicate. You can also edit and resubmit the template. Note that this verification does not apply to OTP templates.

#### **Editing**

You can edit the template through the WhatsApp Manager or the [**Message Template Endpoint**](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates#edit-a-message-template) . If edited and resubmitted for approval, the message template will have the status **In Review** and cannot be sent to customers until it is **Active**.

#### **How to Send Message Templates**

Once the template is approved, you can send it to customers. For instructions on sending message templates, refer to [**Sending Message Templates**](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates) for Cloud API users or [**How to Send Message Templates**](https://developers.facebook.com/docs/whatsapp/message-templates/creation) for Local API users.

Only templates with the **Active** status (e.g., **Active – Quality Pending**, **Active – High Quality**) can be sent to customers.

The status may automatically change from **Active** to **Paused** or **Disabled** based on customer feedback. Therefore, we recommend you [**monitor status changes**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) and take appropriate action when a template you depend on is paused or disabled, or is at risk of being paused or disabled.

#### **Status**

Templates can have the following statuses:

- **In Review**: Indicates that the template is still under review. The review may take up to 24 hours.
- **Rejected**: The template was rejected during the review process. See [**Appeals**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .
- **Active – Quality Pending**: The message template still needs to receive customer feedback on quality. Templates with this status can be sent to customers. See [**Quality Rating**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Active – High Quality**: The template has received little or no negative feedback from customers. Templates with this status can be sent to customers. See [**Quality Rating**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Active – Medium Quality**: The template has received negative feedback from several customers and may soon be paused or disabled. Templates with this status can be sent to customers. See [**Quality Rating**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Active – Low Quality**: The template has received negative feedback from several customers. Templates with this status can be sent to customers, but they may be suspended or disabled soon. We recommend resolving the issues reported by customers. See [**Quality Rating**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) .
- **Paused**: The template was paused due to recurring negative customer feedback. Templates with this status cannot be sent to customers. See [**Template Pause**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#template-pausing) .
- **Disabled**: The template was disabled due to recurring negative feedback or a violation of one or more of our policies. Templates with this status cannot be sent to customers. It may be possible to edit a disabled message template and file an appeal. See [**Appeals**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .
- **Appeal Requested**: Indicates that an appeal has been made. See [**Appeals**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) .

You can check the status of a template in **WhatsApp Manager > Overview**. Then hover over the suitcase icon (Account Tools) and click **Message Templates**. If you have more than one WhatsApp Business account, select the account whose template status you want to check from the list of accounts in the top-right drop-down menu.

#### **How to Monitor Status Changes**

A template's status can automatically change based on review decisions, appeal outcomes, or changes in the [**quality rating**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#quality-rating) . If the status of a template changes, you will receive a notification via email, in the Business Manager, and through the webhook.

Since you can only send message templates with an **Active** status, we recommend subscribing to the **message\_template\_status\_update** webhook to receive notifications about status changes in templates. Refer to [**Webhook Setup**](https://developers.facebook.com/docs/whatsapp/business-management-api/guides/set-up-webhooks) for how to subscribe to this field, and **Message Template Updates** for webhook payload examples.

If you have webhooks set up and notice that a template’s quality is dropping, access **WhatsApp Manager > Message Templates** and hover over the relevant template. A tooltip will display details about the issue. Based on this information, you can choose to [**edit the template**](https://developers.facebook.com/docs/whatsapp/business-management-api/webhooks/components#message-template-updates) and resubmit it for approval, use a different template, or change your app’s business logic. If you edit the message template and it’s approved, its quality rating will gradually improve as long as it doesn’t receive frequent negative feedback.

#### **Quality Rating**

Message templates are rated based on usage and customer feedback. When the status is **Active**, the template’s quality rating will appear in WhatsApp Manager alongside the status:

- **Active – Quality Pending** (green highlight)
- **Active – High Quality** (green highlight)
- **Active – Medium Quality** (yellow highlight)
- **Active – Low Quality** (red highlight)

Initially, approved templates are rated as **Quality Pending**. If a template continually receives negative feedback, its status will change. While the template remains **Active**, it can still be sent to customers regardless of its quality rating. However, if the status changes, the template can no longer be sent until it becomes **Active** again.

While webhooks for template status changes exist, webhooks for customer feedback or quality rating changes are not provided. We recommend setting up webhooks and monitoring status changes closely to take corrective actions before the template is paused or deactivated. Refer to [**How to Monitor Status Changes**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) for more information.

#### **Template Pauses**

Available for businesses in Brazil, Mexico, and Colombia from September 7, 2022, and globally from October 6, 2022\.

If a message template reaches the lowest quality rating (**Active – Low Quality**), it will automatically be paused for a period to protect the phone number's quality rating. The pauses are as follows:

1. First instance: Paused for 3 hours.
2. Second instance: Paused for 6 hours.
3. Third instance: Disabled.

When a message template is paused (**Paused** status), it cannot be sent to customers. Therefore, you must stop automated messaging campaigns that rely on that template. Even though attempts to send a paused template are not charged and do not count against the [**message limit**](https://developers.facebook.com/docs/whatsapp/messaging-limits) , the API will reject them. Resume these campaigns only when the template status returns to **Active**.

You may edit a paused template if you believe it will receive less negative feedback. However, after editing, the template will be marked **In Review** and cannot be sent until it’s approved and becomes **Active** again.

It’s also possible to adjust your business logic (target audience, delivery parameters, etc.) if you believe this is influencing negative feedback.

Initially, the pause will not affect the business phone number or reduce the message limit. Other high-quality message templates can still be sent from the phone number. However, if the business continues to use low-quality templates after they are paused, the phone number may eventually be affected.

#### **Pause Notifications**

When a message template is paused, a notification will be sent in WhatsApp Manager, via email, and through the webhook (if you subscribed to the template status change webhooks). Refer to [**How to Monitor Status Changes**](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) for webhook setup information, and see [**Examples – Paused Template**](https://developers.facebook.com/docs/whatsapp/business-management-api/webhooks/components#template-paused) for an example of a webhook payload.

#### **Resumption**

The template will automatically resume after the pause period described above. Once resumed, the template will have the **Active** status and can be sent to customers again. If you did not stop automated messaging campaigns that relied on the paused template, they will start functioning again. However, we recommend stopping these campaigns while the template is paused, as the API will reject requests.

The template’s quality rating will also be updated based on recent feedback.

Similar to pause notifications, notifications will be sent via WhatsApp Manager, email, and webhook when the template status changes to **Active**.

#### **Appeals**

If the template submission is rejected, you can file an appeal. It’s important to note that appeals must include an example. If an approved template is later deactivated, you can also **edit** it and resubmit it for approval.

In **WhatsApp Manager**:

1. Hover over the suitcase icon (Account Tools) and click **Message Templates**.
2. If you have multiple WhatsApp Business accounts, use the drop-down menu in the top-right corner to select the account whose templates you want to manage.
3. Find the template you want to edit and click on it.
4. Edit the content of the template.
5. Click **Add Example** to include variable values and images.
6. Click **Submit**.

Meta reviews and makes a decision within 24 hours.

#### **Learn More**

- [**WhatsApp Business Policy**](https://business.whatsapp.com/policy) : Learn about policies for businesses.
- [**WhatsApp Commerce Policy**](https://www.whatsapp.com/legal/commerce-policy/?fbclid=IwY2xjawGDLzsBHeEliiVkByMLSqVGgPfICfHEOpwV9lYL1yR8yyjCeUuaZM0yYJZQFEETBA) : Learn about commerce-related policies.
- [**Policy Enforcement**](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) : Learn about how policies are enforced.
