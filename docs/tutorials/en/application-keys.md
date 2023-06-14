---
title: 'Application Keys'
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2022-11-25T18:39:48.683Z
publishedAt: 2022-11-25T18:39:48.683Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slug: application-keys
legacySlug: application-keys
subcategory: 5GYFjiMQg0qIKpnnQY2qjh
---

Each API integration used to connect your VTEX account with external systems will require the creation of an application key (or app key). These [authentication](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) credentials are used to give secure access to the data you wish to share with these integrations, without exposing your account to unauthorized users or applications.

The **Application Keys** screen is where you can manage the [internal](#internal-app-keys) and [external](#external-app-keys) app keys that have access to your account, including:

- [Generating app keys in your account](#generating-app-keys-in-your-account)
- [Managing app key permissions](#managing-app-key-permissions)
- [Enabling or disabling app keys](#enabling-and-disabling-app-keys)
- [Exporting app keys with access to your account](#exporting-app-keys-with-access-to-your-account)

You can find it by navigating to _Account settings > Account management > Application Keys_.

<div class = "alert alert-info">
  Learn more about <a href="https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm">Best practices for using application keys</a>.
</div>

## Types of application keys

### Internal app keys

Internal application keys are credentials generated in and managed by your VTEX account. This means you should have access to all app key and app token pairs – the equivalent of usernames and passwords for API integrations.

### External app keys

External application keys are credentials generated in and managed by other VTEX accounts. By adding [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) to application keys – the equivalent of usernames – provided by third parties, you can allow them to access specific resources in your account.

## Generating app keys in your account

To create application keys in your account, navigate to _Account settings > Account management > Application Keys_ and click on the **Manage my keys** button. This will take you to the **My Keys** page, which lists all [internal app keys](#internal-app-keys).

![My Keys](//images.contentful.com/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/1c98224b6f50673c4567f21e22de4978/image3.png)

These are the visible fields in the **My Keys** page:

- **Label:** text field describing the purpose of the app key.
- **Key:** text field containing the unique identifier for the app key.
- **Status:** boolean field indicating whether the app key is active or inactive.

Since application keys allow external systems to gain access to your account, their creation is restricted to users with the `License Manager / Services access control / Save user` resource included in their [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

To generate a new application key:

1. Click on the **⊕ Generate new** button.
2. (Optional) Fill in the **Label** with a description of the purpose of the app key. This field is immutable and can only be set when the app key is being generated. If left blank, the field will be set to the **Key** value of the generated app key.
3. (Optional) Click on the **+ Add roles** to [manage app key permissions](#managing-app-key-permissions).
4. Click on the **Generate** button.
5. Click on the <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> button to copy the Application Token. _This secret will only be displayed once. Save it in a safe place._

<div class="alert alert-warning">Secure your app key and app token pairs as you would with other credentials, such as usernames and passwords. If you suspect an application key is compromised, immediately disable the key in your account. See <a href="#enabling-and-disabling-app-keys">Enabling and disabling app keys</a> for details.</div>

## Managing app key permissions

For an application key to successfully make API requests to your account, it must both be active and have [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) specifying the account resources it is allowed to access. 

<div class="alert alert-danger">
<b>Warning!</b> Unrestricted use of very permissive roles increases the risk of attacks on stores by login credentials leakage.
</div>

Application keys are created, by default, with no permission to access any account resources.

There are three different paths to the page where you can edit the roles for an app key:

- **+ Add roles** button when [generating app keys](#generating-app-keys-in-your-account) in your account.
- **⊕ Add button** in the **Application Keys** page.
- **፧** button and selecting the **Edit** option in the **Application Keys** or **My Keys** pages.

When editing an app key you can: 

- Add roles by clicking on the **+ Add roles** button, selecting one or more roles and clicking on the **Add roles** button. 
- Remove roles by using the checkboxes to select and clicking on the **Remove roles** button.
- Save by clicking on the **Save** button.

Once you have added roles to an application key, it will show up in the **Application Keys** page.

![Application Keys](//images.contentful.com/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/da66ebc249dd18cbc709d872ce78719c/image2.png)

These are the visible fields in the **Application Keys** page:

- **Key:** text field containing the unique identifier for the app key.
- **Account:** text field indicating the VTEX account that manages the app key.
- **Status:** boolean field indicating whether the app key is active or inactive.

<div class="alert alert-info">Note that the <strong>Label</strong> field is not shown in the <strong>Application Keys</strong> page. To see a description of the purpose of an internal app key, you will have to use the <strong>Key</strong> value to find it in the <strong>My Keys</strong> page. It is not possible to add labels to external app keys.</div>

## Enabling and disabling app keys

If an application key that has access to your account is compromised, you should immediately revoke its access to your account. If you make a mistake, you can re-enable it to reestablish the impacted integration. The way to do this depends on the [type of application key](#types-of-application-keys).

<div class="alert alert-warning">You should only re-enable an app key if you are certain it has not been compromised. Anyone with the associated app token will regain privileged access to your account.</div>

To disable an internal app key: 

1. Navigate to _Account settings > Account management > Application Keys_.
2. Click on the **Manage my keys** button.
3. Find the app key you want to disable in the list and click on the ፧ button.
4. Select the **Deactivate** option.

To disable an external app key: 

1. Navigate to _Account settings > Account management > Application Keys_.
2. Find the app key you want to disable in the list and click on the **፧** button.
3. Select the **Remove** option.

To re-enable internal app keys that have been previously deactivated:

1. Navigate to _Account settings > Account management > Application Keys_.
2. Click on the **Manage my keys** button.
3. Find the app key you want to re-enable in the list and click on the **፧** button.
4. Select the **Activate** option.

To re-enable external app keys that have been previously deactivated:

1. Navigate to _Account settings > Account management > Application Keys_.
2. Click on the **⊕ Add button**.
3. Fill in the **Key** field with the app key provided by the third party.
4. Add roles to allow them to access the resources you desire.

## Exporting app keys with access to your account

If necessary for a security audit, you can export a CSV file containing the **Key** values for all internal and external app keys that currently have access to your account – that is, that have roles associated with them. This can be done by navigating to _Account settings > Account management > Application Keys_ and clicking on the <span style="display: inline-block;"><img src="//images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Export</strong></span> button.
