---
title: 'Setting up SMS password recovery'
id: 4MBZmPN2GSBNFooa9la555
status: ARCHIVED
createdAt: 2019-03-07T21:02:11.023Z
updatedAt: 2024-05-22T13:29:09.953Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:04:24.196Z
contentType: tutorial
productTeam: Post-purchase
author: 5mp4SUVpZYa02A8QOqYySu
slug: setting-up-sms-password-recovery
locale: en
legacySlug: 
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

In cases of [password loss](/tutorial/how-to-retrieve-the-access-password?locale=en), you must send a temporary code for the user to access the platform and create a new password. This message can be sent by email, but also by SMS.

In the Message Center module, you can customize SMS templates with content of the user's choice.

However, you should note that each type of template has its own specificities. SMS templates do not accept title, images, or line breaks.

That being said, check out the step-by-step on how to set it up:

1. Enter the __Message Center__.
2. Click __Templates__.

  ![5NrtBpFRTxInFl4aY2FrVz-en](https://images.ctfassets.net/alneenqid6w5/1l0OsDNW7teR6iaGoNgei0/588f1c7842ebdfce815de1890a561264/5NrtBpFRTxInFl4aY2FrVzt-en.png)

3. Click on the __Password Recovery__ template.
4. Click the __SMS__ tab.
5. Choose the option __"Enable SMS sending?"__.

  ![password-recovery-sms-tab-en](https://images.ctfassets.net/alneenqid6w5/6bGbc4Wo9IJcKld5wBXYoi/68638513852254018741915f68cfa795/password-recovery-sms-tab-en.gif)

  *After clicking on "Enable SMS sending", the platform presents the other sending settings.*

6. Choose the Movile SMS __sender__. 
7. Fill in the __Destination__ field with the variable `{{_accountInfo.Telephone}}`.
8. Fill in the __Message Text__ field with the message content. The information `Name: {{name}}`, `Login: {{login}}` and `Password: {{password}}` are essential.

  ![password-recovery-sms-fields-en](https://images.ctfassets.net/alneenqid6w5/7D17OjBCwC4FWnpMJ5hlys/ab09b49184ae0bc382ab26bc551d4b6e/password-recovery-sms-fields-en.png)

9. Review the SMS content in __Preview__.
10. Click __Save__.

OK, your SMS is set! Don't forget to click save to preserve the newly made changes.
