---
title: 'Best practices for store access management'
id: MKR5OuTTAn90UTMcrHHsr
status: PUBLISHED
createdAt: 2025-03-19T16:20:54.370Z
updatedAt: 2025-03-19T16:22:33.155Z
publishedAt: 2025-03-19T16:22:33.155Z
firstPublishedAt: 2025-03-19T16:22:33.155Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: best-practices-for-store-access-management
legacySlug: best-practices-for-store-access-management
locale: en
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Properly managing store access is essential to ensuring security and operational continuity. User permissions must be handled carefully to minimize risks and ensure that each user only has the access needed to perform their tasks.

Allowing multiple users to access your store may be convenient, but inadequate permission management can lead to serious consequences, including data loss, process failures, integration disruptions, and impact on sales.

To mitigate these risks, follow these best practices for access management and keep your store secure.

## Restrict the use of the Admin Super role

The [Admin Super role](/en/docs/tutorials/roles) allows critical changes to the store. You should limit its use to as few users as possible. Additionally, restrict the number of users who can grant or revoke authorizations.

## Regularly review user and API key permissions

Review the administrative user and API key [roles](/en/docs/tutorials/roles) of the store at least once a year to ensure that only necessary users and keys have access permissions.

Follow the **principle of least privilege**, granting users only the permissions they strictly need. This minimizes the risk of improper access and reduces the impact of operational errors or malicious actions. 

Segregating responsibilities also enhances security, ensuring each user or key has permissions aligned with their role in the organization.

To do this, create different roles with access levels tailored to specific job responsibilities. Learn how to create custom roles in [Creating roles](/en/docs/tutorials/creating-roles#creating-custom-roles).

## Use single sign-on (SSO)

Using [single sign-on (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) simplifies access management, allowing automation for granting and revoking access as employees move within the company.

## Use corporate emails whenever possible

Avoid using personal emails from generic domains such as `@gmail` or `@hotmail`. Instead, use corporate emails , which provide greater control and security, as they follow company authentication policies.

## Don't share generic email accounts

Avoid using shared accounts, as when several users have the credentials of a generic email. Instead of `admin@company.com`, assign individual accounts such as `joana@company.com`, ensuring that each email is accessed exclusively by a single employee. Each user must have an account in the Admin, with permissions that match their access needs.

Shared accounts also make it difficult to use multifactor authentication (MFA) — a highly recommended security layer. MFA requires user confirmation, as the account is linked to a specific person or device. By assigning individual accounts and roles, MFA can be enabled per user without disrupting access. Learn how to activate MFA in [Enabling two-factor authentication (2FA)](/en/docs/tutorials/enabling-2-factor-authentication-login).

## Define a sponsor user for account security

Assign the [sponsor user](/en/docs/tutorials/what-is-the-sponsor-user) only to someone who actually oversees access management, or in other words, who constantly monitors user creation and updates. They should regularly review permissions and ensure that only authorized users have access.

## Require two-factor authentication (2FA) for Google login

If your store allows login via Google, require two-factor authentication (2FA). This extra layer of security significantly reduces unauthorized access risks. See [Enabling two-factor authentication (2FA)](/en/docs/tutorials/enabling-2-factor-authentication-login) to learn how to enable this feature.

## Learn more

* [Access control](/en/subcategory/access-control--1HSqkejwuYcQSMC400uY84) 
* [Roles](/en/docs/tutorials/roles)  
* [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)   
* [Enabling two-factor authentication login](/en/docs/tutorials/enabling-2-factor-authentication-login)
