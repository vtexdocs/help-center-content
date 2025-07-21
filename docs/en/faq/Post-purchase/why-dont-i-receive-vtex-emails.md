---
title: "Why don't I receive VTEX emails?"
id: 18LsIyIBLuEmSOos4KUaI0
status: PUBLISHED
createdAt: 2018-01-22T21:49:50.299Z
updatedAt: 2023-03-20T20:09:32.556Z
publishedAt: 2023-03-20T20:09:32.556Z
firstPublishedAt: 2018-01-22T22:47:09.416Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slugEN: why-dont-i-receive-vtex-emails
locale: en
legacySlug: why-dont-I-receive-vtex-emails
---

VTEX sends emails to your store's users in some scenarios, like the confirmation of data export, sending a spreadsheet import with error logs, or sending a user's authentication token.

If you are not receiving VTEX emails, check these possible reasons:

1. Confirm if the sender is working. If you are using a custom sender, make a test in the sender list in your VTEX Admin, by accessing **Store Settings > Email Templates > Senders**. The module will try to send an email using the configured credencials and will return an image with the result.

2. If you are using a [SMTP server](/en/tutorial/customizing-the-vtex-smtp--tutorials_2733) of your own, we recommend to change it to the VTEX default.

3. Check your [SPF configuration](/en/tutorial/configuracao-de-spf) and your spam box. Emails may be dropping in it by your server mail rules.

4. Check if the email address field is correctly filled in the payments' settings. In your VTEX Admin, go to **Store Settings > Payment > Settings** and click the **Notifications** tab. If the field is empty, the emails will not be sent. 

5. Investigate if the email fell into the AWS suppression list.

## The AWS suppression list

Amazon SES maintains a suppression list of recipients that recently caused a sudden bounce leap for any Amazon SES customer. This is an automatic operation performed by Amazon and does not mean that the email will remain on a blacklist.

This can occur because the provider who sent the email is being used maliciously by other users. Read [here](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html) the information provided by AWS regarding this list.

If you have already tried all the possible reasons and still have no result, your email is probably on the AWS suppression list. In this case, please [contact our support](https://support.vtex.com/hc/en-us/requests) to request the removal of the email from this list.
