---
title: 'Configuring the duration of API keys (Beta)'
id: kcGIFysFt02FDuhsfjQwZ
status: PUBLISHED
createdAt: 2024-09-30T18:38:54.891Z
updatedAt: 2024-11-05T13:36:39.778Z
publishedAt: 2024-11-05T13:36:39.778Z
firstPublishedAt: 2024-10-08T18:42:01.264Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-the-duration-of-api-keys
locale: en
legacySlug: configuring-the-duration-of-api-keys-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

>ℹ️ This feature is in closed beta, so only selected clients can access it now. If you are interested in implementing it in the future, please contact [our Support team](https://support.vtex.com/hc/en-us).

The **API Keys** page allows you to configure the duration of the API tokens generated when you create a key. Setting the duration of API keys is important to guarantee security, limit exposure to risks, control access to resources, and minimize the impact of compromised keys.  

By default, the duration applied to API keys is three months unless another option is selected.  

When the set deadline is reached, the API key will appear as *Outdated* in the **Generated** tab.

>⚠️ During the beta phase, the duration only changes the status in the VTEX Admin interface without preventing the use of the key. We recommend [manually renewing the token](https://help.vtex.com/en/tutorial/renew-api-token--7r4AzptYjXErGHadg9LnJ3) of outdated keys.

To configure the duration of API tokens, follow the steps below:  

1.	In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2.	Click <i class="fas fa-cog"></i> `Settings`.  
3.	Select the option for the desired duration:  

    * **3 months** (recommended)  
    * **6 months**  
4.	Click `Apply`.  

This period will apply to all new and existing keys, using the created date as the reference for calculating the duration.  

## Learn more

* [API Keys (Beta)](https://help.vtex.com/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Generated keys (Beta)](https://help.vtex.com/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)
* [External keys (Beta)](https://help.vtex.com/en/tutorial/external-keys--1isU0HfKkeg0atlxRha14Q)
