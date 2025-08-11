---
title: 'New Google and Yahoo requirements for bulk email senders'
id: 4Tb5eIYJVnKHAK2hPHY1uZ
status: PUBLISHED
createdAt: 2024-01-25T21:37:28.950Z
updatedAt: 2024-01-26T00:23:10.235Z
publishedAt: 2024-01-26T00:23:10.235Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: new-google-and-yahoo-requirements-for-bulk-email-senders
locale: en
legacySlug: new-google-and-yahoo-requirements-for-bulk-email-senders
announcementImageID: ''
announcementSynopsisEN: 'Google and Yahoo new requirements for bulk email senders.'
---

Google and Yahoo are implementing new requirements for bulk email senders. They aim to ensure greater security for recipients, reduce the number of spam messages, and provide a better user experience.

As of February 2024, based on its [Email sender guidelines](https://support.google.com/mail/answer/81126?hl=pt-BR&sjid=15077216349840152409-SA), Google will demand new requirements for senders who send 5,000 or more messages a day to Gmail accounts. Similarly, Yahoo has also defined new [practices for bulk email deliverability](https://senders.yahooinc.com/best-practices/). The requirements stipulated by the companies are:

* Authentication of the sender's email.
* Making it easy to unsubscribe.
* Limiting the rate of emails marked as spam.

If senders do not comply with these guidelines, their emails may be rejected or delivered to the recipient's spam box.

## What has changed?

As of February 2024, Google and Yahoo will require bulk email senders to meet the following requirements:

| **Requirements** | **Description** |
| :---: | :--- |
| Sender email authentication | Senders must authenticate their emails using the following protocols:<ul><li>[SPF](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) (Sender Policy Framework)</li><li>[DKIM](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) (DomainKeys Identified Mail)</li><li>[DMARC](https://support.google.com/a/answer/2466580?sjid=4150033421619503412-SA) (Domain-based Message Authentication, Reporting & Conformance)</li></ul>By implementing these settings, you protect yourself against spoofing (fake messages sent on behalf of your domain) and prevent your outgoing messages from being marked as spam.Learn more in the [Prevent spam, spoofing & phishing with Gmail authentication](https://support.google.com/a/answer/10583557) article. |
| Make it easy to unsubscribe | Recipients must be able to unsubscribe from an email with a single click, and the unsubscribe request must be processed within two days.Learn more about [Subscriptions](https://support.google.com/mail/answer/81126#subscriptions) (Google) and [Support one click unsubscribe](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click) (Yahoo). |
| Spam rate limit | Recipients must consider the emails as desirable, so the rate of emails marked as spam must be less than 0.1%, and the sender must prevent it from reaching 0.3% or more. This rate refers to the number of emails marked as spam by recipients divided by the total number of emails received.You can use [Postmaster Tools](https://support.google.com/mail/answer/14289100) to track data on large numbers of Gmail emails and [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/) for Yahoo. |

The aforementioned requirements are considered fundamental in maintaining email deliverability. For more detailed information on email deliverability best practices, see [Email sender guidelines](https://support.google.com/mail/answer/81126) for Google-related practices, and for Yahoo, see [Email deliverability best practices](https://senders.yahooinc.com/best-practices/).

## What needs to be done?

To be a bulk email sender compliant with Google and Yahoo's requirements, you must:

* [Configure sender email authentication](#configuring-sender-email-authentication)
* [Allow recipients to easily unsubscribe](#allowing-recipients-to-easily-unsubscribe)
* [Control the spam rate limit](#controling-the-spam-rate-limit)

If you don't follow these guidelines, your emails may be rejected or delivered to the recipient's spam box. You can check whether you comply with Google's requirements through [Postmaster Tools](https://support.google.com/mail/answer/14289100).

### Configuring sender email authentication

* Configure [SPF authentication](https://support.google.com/a/answer/33786?sjid=4150033421619503412-SA) for your sending domain.
* Configure [DKIM authentication](https://support.google.com/a/answer/174124?sjid=4150033421619503412-SA) for your sending domain.
* Configure [DMARC authentication](https://support.google.com/a/topic/2759254?hl=pt-BR&ref_topic=9061731&sjid=8809025610711525699-SA) for your sending domain (you can check if you have a [valid DMARC record](https://dmarcian.com/dmarc-inspector/)).
* Define a DMARC policy for your domain (check out Google's [recommended rollout](https://support.google.com/a/answer/10032473?hl=pt-BR&ref_topic=2759254&sjid=8809025610711525699-SA)).

### Allowing recipients to easily unsubscribe

* Give recipients the option to unsubscribe from emails with [a single click](https://blog.postmaster.yahooinc.com/post/182917670818/dont-want-to-be-marked-as-spam-support-one-click).
* Include a visible unsubscribe link in the message body.
* Process the unsubscribe request within 2 days.

### Controling the spam rate limit

* Ideally, keep reported spam rates below 0.1%.
* Avoid reaching a spam rate of 0.3% or more.
* Monitor spam rates reported in Gmail using [Postmaster Tools](https://gmail.com/postmaster) and in Yahoo using the [Complaint Feedback Loop](https://senders.yahooinc.com/complaint-feedback-loop/).

## Related articles

| **VTEX** | **Google** | **Yahoo** |
| :--- | :--- | :--- |
| <ul><li>[Best Practices on Sender Policy Framework (SPF)](https://help.vtex.com/pt/tutorial/best-practices-on-spf--42t0lkl2VyC6Yewc4wA6wI)</li><li>[Setting up the SPF](https://developers.vtex.com/docs/guides/setting-up-the-spf)</li><li>[Setting up DKIM for transactional emails](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails)</li></ul> | <ul><li>[Generate DKIM keys](https://developers.vtex.com/docs/api-reference/message-center-api#post-/api/mail-service/pvt/providers/-EmailProvider-/dkim)</li><li>[Email sender guidelines](https://support.google.com/mail/answer/81126?hl=pt-BR&sjid=15077216349840152409-SA)</li><li>[Email sender guidelines FAQ](https://support.google.com/a/answer/14229414?hl=pt-BR&ref_topic=7279058&sjid=15077216349840152409-SA#zippy=%2Co-que-acontece-quando-os-remetentes-n%C3%A3o-atendem-aos-requisitos-nas-diretrizes%2Co-que-acontece-quando-a-taxa-de-spam-do-remetente-excede-o-m%C3%A1ximo-permitido-pelas-diretrizes)</li><li>[Prevent spam, spoofing & phishing with Gmail authentication](https://support.google.com/a/answer/10583557?hl=pt-BR&sjid=8809025610711525699-SA)</li></ul> | <ul><li>[Google's announcement](https://blog.google/products/gmail/gmail-security-authentication-spam-protection/)</li><li>[Best practices - Deliverability](https://senders.yahooinc.com/best-practices/)</li><li>[FAQs - Deliverability](https://senders.yahooinc.com/faqs/)</li><li>[Yahoo's announcement](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)</li></ul> |

