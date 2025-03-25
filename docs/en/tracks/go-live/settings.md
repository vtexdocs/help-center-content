---
title: 'Settings'
id: 7wFsbWgN4rnZsbjhv8IItX
status: PUBLISHED
createdAt: 2022-12-09T19:31:06.005Z
updatedAt: 2023-05-31T21:45:56.828Z
publishedAt: 2023-05-31T21:45:56.828Z
firstPublishedAt: 2022-12-09T22:07:58.382Z
contentType: trackArticle
productTeam: Reliability
slugEN: settings
locale: en
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugEN: go-live
---

In this step, you have to adjust settings that do not depend on the go-live date. We recommend you do it before moving on to the next stages.

## Checking domain in CDNs

VTEX uses two CDN providers in the stores: **Cloudfront** and **Azion**. Your store's domain must not be registered with them by the time you perform the pointing. Otherwise, there will be a failure in the CDN provisioning for your store and, consequently, at go-live.

So, if you have the store domain registered on the **Cloudfront** or **Azion** platform, delete it before pointing the DNS to VTEX.

>⚠️ If you are unable to delete your store's domain registration on the **Cloudfront** or **Azion** platforms, please contact [VTEX support](https://help.vtex.com/en/support) to explain the situation. VTEX will help you ensure your store is running smoothly at go-live.

## Configuring CAA records

>⚠️ You will only need to configure CAA records, as described in this section if there is a CAA record in your DNS server. Otherwise, proceed to the next section of this guide.

CAA records indicate which certificate authorities (CAs) are entitled to generate and renew certificates to confirm your domain identity. Proper configuration of these records is necessary to generate [SSL certificates](https://help.vtex.com/en/tutorial/certificado-de-seguranca-ssl-a-que-se-refere-e-como-contratar--tutorials_1308) and use the VTEX CDN.

The CAA records must contain the following entry:

```
domain.com. CAA 0 issue letsencrypt.org
```

This means that the **Let's Encrypt** certificate authority can issue certificates for the domain `domain.com`. There is no conflict if any other certificate authority needs to be authorized. The important thing is that the certificate authority be authorized.

Although not recommended, another alternative would be not including CAA records in your DNS server, indicating that all certificate authorities are authorized to issue and renew certificates for your domain.

>ℹ️ These types of entries may not be available in the interface of your DNS manager, but you can usually manage them by calling the support of the specific tool.

To easily create/verify your CAA records, you can use [CAA Record Helper by SSLMate](https://sslmate.com/caa/). The [DiG](https://www.hostinger.com/tutorials/how-to-use-the-dig-command-in-linux/) program can also help you verify your records with the `dig domain.com CAA` command – a `SERVFAIL` status can indicate non-compliance of your DNS server.

>ℹ️ Learn more:
>
> *[CAA Record Helper by SSLMate](https://sslmate.com/caa/)
>
> *[Let's Encrypt: Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)
>
> *[SSL Mate: About CAA](https://sslmate.com/caa/about)
> 

## Putting your account into production

To put your store into production, first, your account must be in production. To do this, follow the steps below:

1. Log in to the VTEX Admin.
2. Click your **profile avatar.**
3. Click  **Account Settings** > **Account.**
4. Click **Activate in production** in the warning box.
5. Toggle the option **I understand the impact of this action** in the box that will be displayed.
6. Click the `Confirm` button.
