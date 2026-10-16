---
title: 'What is 3D Secure?'
id: 1eWPdop8mECuaEomQgkAIa
status: PUBLISHED
createdAt: 2018-03-02T13:13:14.436Z
updatedAt: 2026-09-29T13:20:00.000Z
publishedAt: 2021-03-30T14:56:15.059Z
firstPublishedAt: 2018-03-02T14:22:05.892Z
contentType: tutorial
productTeam: Identity
author: 245tA425AIeioKAk2eaiwS
slugEN: what-is-3d-secure
legacySlug: what-is-3d-secure
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

**3D Secure** (3DS) is a security protocol that adds a layer of protection to online credit and debit card transactions. The current generation, EMV 3-D Secure (EMV 3DS), is also known as 3DS 2.

In 3DS 2, the [issuing bank](/docs/tutorials/what-is-the-issuing-bank) analyzes the transaction data and decides how to authenticate the buyer:

- **Frictionless authentication:** The bank considers the transaction low risk and completes authentication without requiring any action from the buyer.
- **Challenge:** The bank asks the buyer to confirm their identity, for example, with a password, biometrics, or a code sent via SMS or email.

The protocol requires authentication but doesn't define the method: each bank uses its own verification system.

Chargeback is the cancellation of an online purchase made with a credit or debit card. When authentication is complete, liability for fraud-related chargebacks shifts from the merchant to the issuing bank, according to the criteria set by card networks and issuing banks. In modes that only send risk data to the issuing bank without authenticating the buyer, such as Adyen's Data Only, fraud liability may remain with the merchant. The liability shift also doesn't apply to chargebacks unrelated to fraud.

## 3D Secure versions

3DS 2 is maintained by [EMVCo](https://www.emvco.com/) and has more than one specification version:

- **2.1.0:** Card networks stopped processing transactions authenticated with this version in September 2024.
- **2.2.0 and 2.3.1:** Versions currently in use.

The version used in each transaction depends on the payment provider and the issuing bank.

The first generation, 3D Secure 1.0, was XML-based and redirected the buyer to the bank's environment after they entered their card details. Card networks discontinued this version as of October 2022.

## 3D Secure on VTEX

On VTEX, the payment provider implements 3DS 2 via [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2). This way, the buyer stays in checkout and authenticates in a modal window, without being redirected to the bank's site. To activate 3DS 2 and learn about its limitations, see [Setting up 3DS 2 authentication flow](/docs/tutorials/setting-up-3ds-2-authentication-flow).

3D Secure and the [anti-fraud solution](/docs/tutorials/what-is-anti-fraud) serve different purposes: 3DS confirms the buyer's identity with the issuing bank, and the anti-fraud solution evaluates the order's risk. To configure the anti-fraud solution, see [Configuring the anti-fraud](/docs/tutorials/how-to-configure-the-anti-fraud). To understand the credit card authorization flow, see [Credit Card - Basic payment flow](/docs/tutorials/credit-card-basic-payment-flow).

### Related articles

- [Setting up 3DS 2 authentication flow](/docs/tutorials/setting-up-3ds-2-authentication-flow)
- [Credit Card - Basic payment flow](/docs/tutorials/credit-card-basic-payment-flow)
- [What is anti-fraud?](/docs/tutorials/what-is-anti-fraud)
- [Configuring the anti-fraud](/docs/tutorials/how-to-configure-the-anti-fraud)
