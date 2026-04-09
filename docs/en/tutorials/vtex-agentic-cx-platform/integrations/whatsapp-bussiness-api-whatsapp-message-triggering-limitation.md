---
title: 'Whatsapp Bussiness API: WhatsApp message triggering limitation'
id: 1mMpu05SPvb9ZDJTSSkTEp
status: PUBLISHED
createdAt: 2025-09-15T15:32:11.616Z
updatedAt: 2025-10-03T14:20:32.366Z
publishedAt: 2025-10-03T14:20:32.366Z
firstPublishedAt: 2025-10-03T14:20:32.366Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-bussiness-api-whatsapp-message-triggering-limitation
legacySlug: whatsapp-bussiness-api-whatsapp-message-triggering-limitation
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### WhatsApp Rate Limiting

After completing the approval and integration process, your phone number with Weni will be activated for WhatsApp. Even after the approval and activation of your number, WhatsApp has a message progression policy that imposes a limitation.

Message limits refer to the maximum number of conversations initiated by the business (opened due to sending a marketing, utility, or authentication template to a WhatsApp user) that a business phone number can open within a 24-hour period.

Initially, business phone numbers are limited to 250 conversations initiated by the business within 24 hours, but this limit can be increased.

Due to this limitation, businesses looking to send messages to more than 1,000 unique users (which Weni refers to as active contacts) are advised to send them gradually over the course of a week.

#### WhatsApp Message Limitations

There are different levels of message rate limiting on WhatsApp:

1. Level 1: Limited to 1,000 unique recipients (active contacts) per day.
2. Level 2: Limited to 10,000 unique recipients (active contacts) per day.
3. Level 3: Limited to 100,000 unique recipients (active contacts) per day.
4. Level 4: No limitations.

Newly enabled WhatsApp numbers start at **Level 1**. WhatsApp monitors the volume and quality of messages and automatically updates the client’s level based on the total number of active contacts in the past 7 days.

If, within this 7-day period, a WhatsApp-enabled phone number communicates with twice the number of active contacts of its current level's limit per day, and maintains a good ""quality rating"" with WhatsApp, it will automatically move to the next level the following day.

A number may be prevented from advancing to the next level, or even downgraded, if WhatsApp's internal ""quality rating"" for the number is low. Weni cannot influence this rating or display it to clients on the platform. More details on quality ratings will be discussed later.If you exceed your daily level limit, your messages will not be delivered.Weni cannot manually move or request clients to be moved between message limit levels. Additionally, WhatsApp will not start a number at a higher level or manually increase the limit.

**Example 1:**

A WhatsApp-approved phone number starts at Level 1\. On Day 1, the number sends messages to 1,000 active contacts. On Day 2, another 1,000 messages are sent to new active contacts. At the end of Day 2, the number would be upgraded to Level 2 based on sending 2,000 messages to unique active contacts over 2 days.

**Example 2:**

A WhatsApp-approved phone number starts at Level 1\. On Day 1, the number sends messages to 50 active contacts. On Day 2, the number sends messages to 150 active contacts. On Day 3, the number sends messages to 200 active contacts. From Days 4 to 7, the number sends messages to 400 active contacts each day. At the end of Day 7, the number would be upgraded to Level 2 based on sending messages to 2,000 active contacts over the past 7 days.

This limitation **does not** apply to messages sent in response to a user-initiated message within a 24-hour period.It’s possible to increase the message limit to 1,000 on your own through the following methods. However, higher limits will only be achieved through automatic adjustment after the limit reaches 1,000\.**WhatsApp Quality Rating**

Since WhatsApp encrypts messages, it relies on user feedback to measure message quality. WhatsApp uses this feedback to define an internal ""quality rating"" that can affect how users move between the rate limiting levels. Factors like how frequently your number is marked as ""report spam"" and ""block"" can influence the quality rating. Senders with a low quality rating may not be eligible to advance to higher levels.

**To maintain high quality, WhatsApp recommends the following:**

- If your business or identity verification is rejected, ensure you are sending high-quality messages. We will periodically reassess your activity and message quality. Based on this, we may approve the increase.
- Here are some guidelines for sending high-quality messages:
- Ensure that your messages comply with the [WhatsApp Business Messaging Policy](https://www.whatsapp.com/legal/business-policy).
- Send messages only to users who have opted in to receive contact from your business.
- Craft highly personalized and useful messages for users. Avoid sending introductory or welcome messages that are too vague.
- Consider frequency: avoid sending too many messages per day to customers. When drafting informative messages, focus on content and conciseness.
