---
title: 'Application Keys'
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2023-10-17T20:17:39.441Z
publishedAt: 2023-10-17T20:17:39.441Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: application-keys
locale: en
legacySlug: application-keys
subcategoryId: 5GYFjiMQg0qIKpnnQY2qjh
---

Each API integration used to connect your VTEX account with external systems will require the creation of an application key, also known as an _app key_.

These [authentication](https://developers.vtex.com/docs/guides/authentication) credentials are used to ensure secure access to the data you want to share with these integrations, without exposing your account to unauthorized users or applications.

## Types of application keys

There are two types of application keys: [internal](#internal-app-keys) or [external](#external-app-keys). This definition depends on which account creates, manages, and uses the credential.

### Internal app keys

Internal application keys are credentials generated in and managed by your VTEX account. This means you should have access to all pairs of application keys and tokens, which is akin to usernames and passwords for API integrations.

### External app keys

External application keys are credentials generated in and managed by other VTEX accounts. By adding [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) to application keys — which are equivalent to usernames — provided by third parties, you can allow them to access specific resources in your account.

## Managing application keys

>⚠️ A [role](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) with the **Save User** [resource](https://help.vtex.com/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) is required to manage users and application keys. The default role for this purpose is [User Administrator - RESTRICTED](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted), but it is also possible to [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with this resource.

On the **Application Keys** page, you can manage the [internal](#internal-app-keys) and [external](#external-app-keys) app keys that have access to your account, including:

- [Generate internal application keys](#generating-internal-application-keys)
- [Add external application keys](#adding-external-application-keys)
- [Manage application key permissions](#managing-application-key-permissions)
- [Activate or deactivate application keys](#activating-or-deactivating-application-keys)
- [Export application keys with access to your account](#exporting-application-keys-with-access-to-your-account)

To view this page, at the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.

>ℹ️ Learn more about [best practices for using application keys](https://help.vtex.com/en/tutorial/boas-praticas-chaves-de-aplicacao--7b6nD1VMHa49aI5brlOvJm).

## Generating internal application keys

As application keys allow external systems to access your account, they can only be created by users who have the `License Manager / Services access control / Save user` feature in their [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

To create internal app keys in your account, follow the steps below:

1. At the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.
2. Click the `Manage My Keys` button.

	You will be redirected to the **My Keys** page, as shown below. This page lists all [internal app keys](#internal-application-keys).

    ![My Keys](//images.ctfassets.net/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/1c98224b6f50673c4567f21e22de4978/image3.png)

    These are the visible fields on the **My Keys** page:

	- **Label:** Text field describing the purpose of the app key.
	- **Key:** Unique identifier for the app key.
	- **Status:** Current status of the app key, which can be active or inactive.

3. Click the `+ Generate New` button.
4. (Optional) Complete the **Label** with a description of the purpose of the app key. This field is set only when creating the app key and cannot be changed afterward. If left blank, it will default to the **Key** value of the generated app key.
5. (Optional) Click `+ Add Roles` to [manage application key permissions](#managing-application-key-permissions).
6. Click the `Generate` button.
7. Click <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> to copy the **Application token**. _This secret will only be displayed once. Save it in a safe place._

>⚠️ Secure your application keys and token pairs as you would with other credentials, such as usernames and passwords. If you suspect an application key is compromised, immediately deactivate the key in your account. To learn more, read the [Activating or deactivating application keys](#activating-or-deactivating-application-keys) section of this article.

## Adding external application keys

To add third-party application keys, follow the steps below:

1. At the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.
2. Click the `+ Add 3rd Party Key` button.
3. Complete the **Key** field with the app key provided by the third party.
4. Click `+ Add Roles` to [manage application key permissions](#managing-application-key-permissions). Add roles to allow them to access the resources you desire.
5. Click `Save`.

## Managing application key permissions

For an application key to successfully make API requests to your account, it must both be active and have [roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) specifying the account resources it is allowed to access.

>❗ Unrestricted use of overly permissive roles increases the risk of store attacks through leaked login credentials.

Application keys are created, by default, with no permission to access any account resources.

There are three different paths to the page where you can edit the roles for an app key:

- Use the `+ Add Roles` button to [generate application keys](#generating-application-keys-in-your-account) in your account.
- Use the `+ Add 3rd Party Key` button on the **Application keys** page.
- Use the `፧` button and select the **Edit** option on the **Application Keys** or **My Keys** pages.

When editing an application key, you can:

- Add roles by clicking the `+ Add Roles` button, selecting one or more roles, and clicking the `Add Roles` button.
- Remove roles by selecting them using the checkboxes and then clicking the `Remove Roles` button.
- Save the changes by clicking the `Save` button.

Once you have added roles to an application key, it will be displayed on the **Application Keys** page.

![Application Keys](//images.ctfassets.net/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/4ca25e35b379a4a71370c1e07221cf1a/appkeys-en.png)

These are the visible fields on the **Application Keys** page:

- **Key:** Unique identifier for the app key.
- **Account:** VTEX account managing the app key.
- **Status:** Current status of the app key, which can be active or inactive.

>ℹ️ Note that the **Label** field is not displayed on the **Application Keys**page. To see a description of the purpose of an internal app key, you will have to use the**Key** value to find it on the **My Keys** page. It is not possible to add labels to external app keys.

## Activating or deactivating application keys

If an application key that has access to your account is compromised, you should immediately revoke its access to your account. If you make a mistake, you can reactivate it to reestablish the impacted integration. This can be done in various ways depending on the [type of application key](#types-of-application-keys).

>⚠️ You should only reactivate an app key if you are certain it has not been compromised. Anyone with the associated app token will regain privileged access to your account.

### Deactivating internal application keys

To deactivate an internal app key, follow the steps below:

1. At the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.
2. Click the `Manage My Keys` button.
3. Find the app key you want to deactivate in the list and click the `፧` button.
4. Click the **Deactivate** option.

### Deactivating external application keys

To deactivate an external application key, follow the steps below:

1. At the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.
2. Find the app key you want to deactivate in the list and click the `፧` button.
3. Click the **Remove** option.

### Activating internal application keys

To reactivate internal application keys that have previously been deactivated, follow the steps below:

1. At the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click **Account settings** > **Application Keys**.
2. Click the `Manage My Keys` button.
3. Find the app key you want to reactivate in the list and click the `፧` button.
4. Click the **Activate** option.

### Activating external application keys

To reactivate external application keys that have previously been deactivated, you will need to follow the instructions again as described in the [Adding external application keys](#adding-external-application-keys) section.

## Exporting application keys with access to your account

If necessary for a security audit, you can export a CSV file containing the **Key** values for all internal and external app keys that currently have access to your account — that is, that have roles associated with them.

To export the keys, go to _Account settings > Application keys_ and click the <span style="display: inline-block;"><img src="//images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Export</strong></span> button.
