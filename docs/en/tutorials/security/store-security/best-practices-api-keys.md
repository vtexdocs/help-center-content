---
title: 'Best practices for using API keys'
id: 7b6nD1VMHa49aI5brlOvJm
status: PUBLISHED
createdAt: 2022-10-04T21:36:57.185Z
updatedAt: 2025-10-02T14:55:39.240Z
publishedAt: 2025-10-02T14:55:39.240Z
firstPublishedAt: 2022-10-04T21:41:08.638Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-api-keys
legacySlug: best-practices-for-using-application-keys
locale: en
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---


VTEX has several APIs available for customers and partners to develop highly customizable integrations with the platform. [API keys](/en/docs/tutorials/api-keys) are used to provide secure access to data consumed by integrations without exposing your account to unauthorized users or apps.

> ℹ️ This type of credential is used to authenticate identities via API.

Improper handling of [API keys](/en/docs/tutorials/api-keys) can generate leaks, consequently leading to improper access scenarios. Below, you can see the best practices we recommend to manage the credentials you can implement to increase the security of your store.

## Rotate keys periodically

It is recommended that you disable old keys and create new ones over time. By doing so, you make sure your [API keys](/en/docs/tutorials/api-keys) will have a certain duration.

This practice is similar to defining a password policy with settings for periodic password changes.

## Renew API tokens regularly

Renew API tokens frequently to reduce exposure risks and keep your integrations secure. Configure alerts in **API Keys > Settings** to receive renewal reminders periodically (every 3 or 6 months) and securely save the new token using the one-time access link, deleting the old one after migration.

Learn more in [Renewing API tokens](/en/docs/tutorials/renewing-api-tokens).

## Reassess keys and access periodically

Review the existing [API keys](/en/docs/tutorials/api-keys) periodically. Check whether the integrations for each key are active and still needed. A proactive access review process allows each user or integration to access only the resources that are needed, decreasing the chances of improper access. 
If the previous recommendation is similar to changing the passwords periodically, you can compare this recommendation to reviewing access regularly.

## Create individual keys for each function and integration

Restrict each key's access to resources and information according to their respective function and need. By reducing the amount of information shared between users or integrations, you reduce the risk of leakage by insider threats.

Note that you can manage permissions for API keys by configuring [roles](/en/docs/tutorials/roles) and [License Manager features](/en/docs/tutorials/license-manager-resources).

## Maintain an awareness program

Conducting information security awareness campaigns is a sustainable and efficient practice to educate and change people's relationship with technology. Include the importance of responsible access management in the training and communication agenda, as well as the value of each company member's credentials.

## Never use client-side code for integrations

Note that part of the code that makes up your store is executed on the customer side, i.e., on the user's browser. So it's normal that this part of the code is exposed to people outside your operation.

Therefore, it's essential to instruct your development team not to use this code when doing integrations, as it often involves having [API keys](/en/docs/tutorials/api-keys) in the code.

## Don't share API tokens

Protect your API key and token pairs with the same level of confidentiality that you would apply to login credentials, such as usernames and passwords. To reduce risks, avoid sharing them via emails, tickets, chats or other communication channels.

