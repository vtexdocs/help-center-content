---
title: 'Best practices for using application keys'
id: 7b6nD1VMHa49aI5brlOvJm
status: PUBLISHED
createdAt: 2022-10-04T21:36:57.185Z
updatedAt: 2024-10-23T00:04:22.825Z
publishedAt: 2024-10-23T00:04:22.825Z
firstPublishedAt: 2022-10-04T21:41:08.638Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-application-keys
locale: en
legacySlug: best-practices-for-using-application-keys
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

VTEX has several APIs available for customers and partners to develop highly customizable integrations with the platform. [Application keys](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) are used to provide secure access to data consumed by integrations without exposing your account to unauthorized users or apps.

<div class = "alert alert-info">
This type of credential is used to authenticate identities via API.
</div>

Improper handling of [application keys](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) can generate leaks, consequently leading to improper access scenarios. Below, you can see the best practices we recommend to manage the credentials you can implement to increase the security of your store.

## Rotate keys periodically

It is recommended that you disable old keys and create new ones over time. By doing so, you make sure your [application keys](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) will have a certain duration.

This practice is similar to defining a password policy with settings for periodic password changes.

## Reassess keys and access periodically

Review the existing [application keys](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) periodically. Check whether the integrations for each key are active and still needed. A proactive access review process allows each user or integration to access only the resources that are needed, decreasing the chances of improper access. 
If the previous recommendation is similar to changing the passwords periodically, you can compare this recommendation to reviewing access regularly.

## Create individual keys for each function and integration

Restrict each key's access to resources and information according to their respective function and need. By reducing the amount of information shared between users or integrations, you reduce the risk of leakage by insider threats.

Note that you can manage permissions for application keys by configuring [roles](/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) and [License Manager features](/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## Maintain an awareness program

Conducting information security awareness campaigns is a sustainable and efficient practice to educate and change people's relationship with technology. Include the importance of responsible access management in the training and communication agenda, as well as the value of each company member's credentials.

## Never use client-side code for integrations

Note that part of the code that makes up your store is executed on the customer side, i.e., on the user's browser. So it's normal that this part of the code is exposed to people outside your operation.

Therefore, it's essential to instruct your development team not to use this code when doing integrations, as it often involves having [application keys](/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) in the code.

## Don't share application key tokens

Protect your application key and token pairs with the same level of confidentiality that you would apply to login credentials, such as usernames and passwords. To reduce risks, avoid sharing them via emails, tickets, chats or other communication channels.

