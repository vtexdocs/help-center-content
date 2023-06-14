---
title: 'Configure payment split'
id: 4EOhp8cdVXaHl68KykPG6
status: DRAFT
createdAt: 2020-11-05T20:01:18.593Z
updatedAt: 2021-06-28T19:50:56.234Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:51.014Z
contentType: trackArticle
productTeam: Financial
slug: configure-payment-split
locale: en
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugEN: payment-split
---

Currently, the payment split option is only supported by two acquirers:

- VTEX Payment
- [PagarMeV2][1]

Find out how to configure the payment split option for each of these below.

## Split configuration for PagarMe

Follow these steps:

1. Access the __Admin__.
2. Click on the __Payment__ module.
3. Then, click on __Settings__.
4. On the top of the page, go to the __Gateway Affiliations__ tab.
5. Click on the __"+" green button__.
6. In the __Others__ section, select the __PagarMeV2__ option. 
7. On the left side, fill in the __Affiliation Name field__.
8. Fill the __Application Key__ and __Application Token__ fields with the information provided by PagarMe
9.  In Auto Settlement, select one of the options below:
 - **Use Payment Processor Recommended Behavior**: - Payment capture is not automatic but rather scheduled according to the connector’s specific delay. In addition to confirming if the payment was authorized, the payment provider may designate or recommend a timeframe for the payment capture to take place once the Gateway authorizes the payment - this being the platform’s default behavior.
- **Immediately: Auto Settle Upon Payment Authorization**: payment capture is automatic and occurs right after payment authorization even if the transaction has an ongoing anti-fraud analysis.
- **Immediately: Auto Settle Once Risk Analysis Has Been Approved**: payment capture is automatic and takes place right after payment authorization and anti-fraud analysis (if you select this behavior and do not have an anti-fraud analysis option enabled, the payment capture will occur as it does when the **Immediately: Auto Capture Upon Payment Authorization**) behavior is selected.
- **Disabled: Do Not Auto Settle**: capture does not happen automatically.
10. In __Enable split and send recipients?__, select the option __Yes__. 
11. In __Responsibility for payment fees__, select which __payment processor__ will pay the fees.
12. In __Responsibility for chargebacks__, select which __payment processor__ will pay the chargeback. 
13. Click on the __Save button__.

If you have any additional questions, access our article on [how to configure the PagarMeV2 Gateway][1] for more details. 

## Split configuration for VTEX Payment

Follow these instructions:

1. Access the __Admin__.
2. Click on the __Payment__ module.
3. Then, click on __Settings__.
4. On the top of the page, go to the __Gateway Affiliations__ tab.
5. Click on the __"+" green button__.
6. In the Others section, select the __"VTEX Payment"__ option.
7. On the left side, fill in the __Affiliation Name__ field.
8. Fill in the __Application Key__ field with the information provided by VTEX. 
9.  In Auto Settlement, select one of the options below:
-  **Use Payment Processor Recommended Behavior**: - Payment capture is not automatic but rather scheduled according to the connector’s specific delay. In addition to confirming if the payment was authorized, the payment provider may designate or recommend a timeframe for the payment capture to take place once the Gateway authorizes the payment - this being the platform’s default behavior.
- **Immediately: Auto Settle Upon Payment Authorization**: payment capture is automatic and occurs right after payment authorization even if the transaction has an ongoing anti-fraud analysis.
- **Immediately: Auto Settle Once Risk Analysis Has Been Approved**: payment capture is automatic and takes place right after payment authorization and anti-fraud analysis (if you select this behavior and do not have an anti-fraud analysis option enabled, the payment capture will occur as it does when the **Immediately: Auto Capture Upon Payment Authorization**) behavior is selected.
- **Disabled: Do Not Auto Settle**: capture does not happen automatically.
11. In __Enable split and send recipients?__, select the __Yes__ option.
12. In __Responsibility for payment fees__, select which __payment processor__ will pay the fees.
13. In __Responsibility for chargebacks__, select which __payment processor__ will pay the chargeback.
14. Click on the __Save__ __button__.

[1]: https://help.vtex.com/en/tutorial/configurar-gateway-pagarmev2--5TugxXNMOs0Ocyg4uqussM?&utm_source=autocomplete "PagarMeV2"
