---
title: 'Adding a sender'
id: 42LVaxtFb2VHX9xTZU58qC
status: PUBLISHED
createdAt: 2020-01-10T13:46:32.352Z
updatedAt: 2022-09-06T13:45:20.044Z
publishedAt: 2022-09-06T13:45:20.044Z
firstPublishedAt: 2020-01-13T14:38:27.693Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: adding-a-sender
locale: en
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: transactional-emails
---

Before configuring templates for your transactional emails, let's add the store's __sender__.

You can use VTEX's native mail server or your own store's server.

We recommend using __VTEX's native server__. Besides avoiding additional expenses for the store, it is the safest way to trigger emails.

Until you configure this, the default sender of your emails will be `noreply@vtexcommerce.com`.

To replace it with your store's email, follow the steps below:  

1. Access the Message Center.  
2. Click on the __Senders__ tab.  
3. Click on __New Sender__.  
4. Click on the __VTEX__ option (to use VTEX's native server).  
5. Fill in the __Sender ID__ field with a name for internal control.  
6. Fill in the __Name__ field with the name that will be associated with the sender.  
7. Fill in the __Email__ field with the email address that will be used for this sender.  
8. For now, *don't* check the "This is the default sender" box.   
9. Click on __Save__.

The system will confirm by email that the SMTP registration was successful.
  
Check your email for this message and click on the link included in it to make sure email sending from the added sender is really working.

Once that is done, go back to the Admin settings page and check the "This is the default sender" box. Finally, click on __Save__ again to update the information.

Whenever you deem it necessary, you can test if email sending is working by accessing the Senders section and clicking on the __Test__ button on the card with the desired sender.

>⚠️ Warning: Whenever you make a change to the sender and save it, an email confirming that the SMTP was successfully registered will be sent to the address you entered. In all cases, it is essential to click on the link received in the email to complete the confirmation.
  

