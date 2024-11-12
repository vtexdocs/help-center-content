---
title: "I can't receive emails from VTEX"
id: 4M2uVZdtrJzgyAySuZ4OLg
status: PUBLISHED
createdAt: 2024-05-28T17:21:01.400Z
updatedAt: 2024-11-08T18:46:08.368Z
publishedAt: 2024-11-08T18:46:08.368Z
firstPublishedAt: 2024-05-29T13:14:04.884Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-receive-emails-from-vtex
locale: en
legacySlug: i-cant-receive-emails-from-vtex
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Message center, Email templates, Spreadsheet import, Authentication token

Through the [Message Center](https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84), VTEX allows merchants to customize email templates to be sent to users. These emails can be used to convey the following information:
- In-store authentication token
-	Notification for creating and paying orders
- Data export confirmation
- Spreadsheet import error logs

If your store's emails aren't being appropriately forwarded, preventing relevant information from being sent to your customers, see below the possible solutions to identify the source of this problem.

## Solution

To fix any disruption in sending emails from VTEX, see the following solutions:

- [Confirm sender](#confirming-sender)
- [Configure a mail server](#configuring-a-mail-server)
- [Configure order and payment notifications](#configuring-order-and-payment-notifications)
- [Remove email from the AWS suppression list](#aws-suppression-list)

### Confirming sender

If your store has a customized sender in addition to the standard __VTEX-DEFAULT__ sender, run a test message following the steps below:

1. In the VTEX Admin, go to __Store Settings > Email Templates > Senders__.
2. In the box with your sender's name, click `Test`. After a few seconds, an email confirmation message will display.
3. Check if an email from VTEX has been forwarded to the email address of the user logged into the Admin.
4. If you haven't received the email from VTEX, proceed to the next solution.

### Configuring a mail server

On VTEX, you can use the native mail server or [configure an external SMTP server](https://help.vtex.com/en/tutorial/customizing-the-vtex-smtp--tutorials_2733). If you are using an external SMTP server, see the scenarios below.

#### Configuring SMTP in the VTEX Admin

1. In the VTEX Admin, go to __Store Settings > Email Templates > Senders__.
2. Click the box with the name of your sender.
3. Under __SMTP Data__, make sure that all the data is correct.
4. Click `Save`.
5. In the box with the name of your sender, click `Test`. After a few seconds, an email confirmation message will be displayed.
6. Check if an email from VTEX has been forwarded to the email address of the user logged into the Admin.

After the test, if the message from VTEX has not been sent to the email address of the user logged into the Admin, we recommend using the VTEX sender (__VTEX-DEFAULT__) as the default and test sending the message again. If you still haven't received the email from VTEX, proceed to the next solution.

#### Configuring SPF (Sender Policy Framework)

Check if the external SMTP server is configured according to the [SPF system](https://help.vtex.com/en/tutorial/best-practices-on-spf--42t0lkl2VyC6Yewc4wA6wI), which prevents unauthorized servers from sending emails on behalf of a specific domain. You can configure [SPF](https://developers.vtex.com/docs/guides/setting-up-the-spf) and [DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails) (DomainKeys Identified Mail) on the server if necessary.

>⚠️ Check your spam folder to ensure that VTEX emails are not being sent there. This may be due to internal mail server rules.

### Configuring order and payment notifications

VTEX sends emails to users immediately after an order is created or a payment is made. Follow the steps below to check your payment notification settings:

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__.
2. Click the __Settings__ tab.
3. Make sure your email is in the field corresponding to the My VTEX email option. If you want, enter a secondary email in the Other email field and test sending the message as described in the [Confirming sender](#confirm-sender) section.
4. Check if an email from VTEX has been forwarded to the email address of the user logged into the Admin.
5. If you haven't received the email from VTEX, proceed to the next solution.

### AWS suppression list

Amazon (AWS) has an email platform called Amazon Simple Email Service ([Amazon SES](https://aws.amazon.com/pt/ses/)). Among the many features of this service, there is an email address suppression list containing recipients who may have shown suspicious behavior that affected an AWS customer.

Generally, an email can be added to the AWS suppression list and removed after approximately 12 hours. During this period, emails sent by VTEX will not be received by the email address added to the list.

>⚠️ AWS manages the suppression list, and VTEX has no control over the addresses on and off the list.

If you suspect AWS has blocked your email, wait 12 hours and try resending an email to the blocked address.

You can also check whether the email is registered as a copy in any of the store's transactional email templates. To check this, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Email Templates > Templates__.
2. Click the desired template card.
3. Check if the email does not appear in the template's __Cc:__ or __Bcc:__ fields. If it does, remove it and click `Save`.
4. Do this for each store's template card and test sending an email to the desired address.

![copia_email_en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
