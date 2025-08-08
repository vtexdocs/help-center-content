---
title: 'SmartCheckout Security'
id: 3SrJuuhrqwePUg1rp1exfB
status: PUBLISHED
createdAt: 2022-05-12T21:08:03.866Z
updatedAt: 2022-11-14T18:27:54.308Z
publishedAt: 2022-11-14T18:27:54.308Z
firstPublishedAt: 2022-05-12T21:10:56.246Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: smartcheckout-security
legacySlug: smartcheckout-security
locale: en
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

SmartCheckout™ is a feature developed to increase your sales while maintaining the same level of security standards. This is possible because SmartCheckout™ allows the customer to make a purchase using only their email address.  The only details requested from the customer are the basic shipping, billing, and communication information.

VTEX stores can benefit from:
- Seamless and agile shopping experience.
- Increased repurchase rate.
- More conversions.
- Increased security and less worries about passwords.

## Is this feature safe?

To better explain how SmartCheckout™ works from a safety point of view, let's imagine two characters:
- A customer, whose information is already stored on the platform.
- A scammer, intending to make a purchase using another person's information.

The vulnerability assumption claims that if a scammer has a customer's email address it's enough to get hold of the customer's card and address details and, consequently, to start making purchases using the customer's information. However, this is not possible because authentication via email requires a temporary access code sent to the email address provided by the customer. Therefore, the person must have access to that email inbox.

This means that the scammer would have to authenticate via login or by using an email access code when trying to make a purchase using another person's email. Without authentication, it's not possible to access or edit the account details, such as shipping address, payment details, or email. For purchases using credit card payment, it's also necessary to insert the card security code (CVV).

Moreover, at checkout, the information is hidden using a certified payment security standard [PCI-DSS](https://help.vtex.com/pt/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E#). According to this standard, the last digits of a card do not need to be hidden. The displayed information allows recognizing the payment method, but it's not enough for making a purchase.

<div class = "alert alert-info">
<p>With VTEX SmartCheckout™, safety comes first. If an email address is recognized, the way the details are filled in ensures that only the email owner will recognize the information.</p><p>When accessing the store from the restricted domain <code>myvtex.com</code>, store operators can see the unmasked data in SmartCheckout to run tests. Access from this domain is restricted to store admins with the right access level and credentials.</p>
</div>

