---
title: 'Configuring the store domain'
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2024-03-12T19:53:14.012Z
publishedAt: 2024-03-12T19:53:14.012Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slug: configuring-the-store-domain
locale: en
legacySlug: configuring-domains-in-license-manager
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Domain-related settings are necessary for a web address to be correctly routed to a VTEX store. This guide covers the following topics:

* [Store address structure](#store-address-structure)
* [Rules for main hosts](#rules-for-main-hosts)
* [How to register a new host](#registering-a-new-host)
* [How to change the host from an active store](#changing-host)

## Store address structure

The store's address is composed of the following elements:

![url-diagram-en](https://images.ctfassets.net/alneenqid6w5/kg98gTuZiMlewhPiRAyaF/ad84010eef6bab7fae5123f18ab0887d/url-diagram-en.png)

| Element | Description | Example |
|---|---|---|
| Protocol | Communication protocol used on the internet. | `https://` |
| Subdomain | Prefix added to the domain name. | `www` |
| Domain | Exclusive name used to locate and identify your store on the internet. | `mystore` |
| Top Level Domain (TLD) | Suffix after the period of a domain name. | `com` |
| Domain name / Pure domain / Root domain | Domain + top level domain. | `mystore.com` |
| Host | Subdomain + domain + top level domain. | `www.mystore.com` |

Once you have defined your store's domain, you need to configure the main host in the VTEX Admin to communicate between the address and the store's content.

## Rules for main hosts

Before proceeding with your store's address configuration, consider the following guidelines to ensure a successful implementation:

* **CDN providers:** VTEX uses two CDN providers for the stores: **Cloudfront** and **Azion**. Make sure that your store's domain is not registered with these services during the pointing process. Otherwise, the CDN provisioning for your store and, consequently, the go-live will fail. Therefore, if your store's domain is registered on the Cloudfront or Azion platform, remove this registration before pointing the DNS to VTEX.
* **Main address:** The store must have a single main host, which will point to the VTEX servers. This host **must contain a subdomain**, which can be `www` or others.
* **Additional addresses:** Any additional addresses, whether with a different domain or a version without subdomains, must be redirected to the single main host, as described in the Redirects section.

### Host examples

Check out the host examples below and see which ones can be used as the main host:

| Host example | Can be used as a host: yes (✔️) or not (❌) | Description |
|---|---|---|
| `www.mystore.com` | ✔️ | Contains the www subdomain. |
| `mystore.com` | ❌ | Does not contain a subdomain. To configure access via this address, you must set up a host with a subdomain such as `www.mystore.com` and then create a redirect. Read [Best practices for accessing the store without www](https://help.vtex.com/en/tutorial/configuring-access-without-www--tutorials_4278) for more details. |
| `store.mybrand.com` | ✔️ | Contains the store subdomain. |
| `www.store.mybrand.com` | ✔️ | Contains two subdomains: `www` and `store`. |

### Redirects

To ensure your store is accessible via different URLs, such as `www.mystore.com` and `mystore.com`, you should register a single main host and redirect the additional addresses to the main one. Learn more about redirects:

* [Redirection from other addresses](https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ)
* [Best practices for accessing the store without www](https://help.vtex.com/en/tutorial/configuring-access-without-www--tutorials_4278)

We recommend implementing a single host in your store.

## Registering a new host

To register a new host, they must comply with the guidelines specified in the [Rules for main hosts](#rules-for-main-hosts) section. Follow the instructions below:

1. In the top bar of the VTEX Admin, click your profile avatar, indicated by the initial letter of your email address.
2. Click the **Account settings** button.
3. Click **Account**.
4. Click the **Store** tab.
5. Click the actions button corresponding to the store where you want to register the host and click `Edit`.
6. Enter the host in the **Hosts** field. For example: `www.mystore.com`.
7. Click `Add`.
8. Click `Save`.

After completing these steps, you can [configure DNS pointing to VTEX](https://help.vtex.com/en/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

>⚠️ [FastStore](https://www.faststore.dev/) stores also need to configure an address with the `secure` subdomain. Refer to the[ Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns) guide for more details.

>❗ If your operation has more than one VTEX account or [sub-account](https://help.vtex.com/en/tutorial/como-criar-multiloja-multidominio--tutorials_510), don't change hosts from one account to another. This will cause failures in many aspects of your store.

## Changing host

The VTEX platform is designed to support host changes without adverse impacts. If you need to change your store's host, follow the steps below:

1. Create new host entries for the store you want by following the instructions in [Registering a new host](#registering-a-new-host). At this stage, the DNS of the new domain must not yet be pointed to VTEX.
2. In the VTEX Admin, check the Checkout settings in **Store Settings > Storefront > Checkout**, as described in the [Configure template in SmartCheckout](https://help.vtex.com/en/faq/configurar-template-no-smartcheckout/) article. Completing this step is crucial to ensure the Checkout will continue working after the change.

    You need to check if the sites configured are associated with the account registered in **Account settings > Accounts**. See the [Account management](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq) article for more details.

3. Point the new domain's DNS to VTEX. Learn more about [DNS pointing](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex/).
4. If your store uses [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) or [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), contact [VTEX support](https://help.vtex.com/en/support) and submit a request for internal pointing, specifying the new domain. Once the ticket has been opened, the support team has up to three business days to analyze the settings and complete the pointing process.
5. After confirming the new host's DNS propagation and internal pointing, delete the old hosts and keep only the new one.
