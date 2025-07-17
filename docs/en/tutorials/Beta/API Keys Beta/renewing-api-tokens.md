---
title: 'Renewing API tokens (Beta)'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2024-11-05T13:37:04.091Z
publishedAt: 2024-11-05T13:37:04.091Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
locale: en
legacySlug: renewing-api-tokens-beta
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

<div class="alert alert-info">
  <p>This feature is in closed beta, so only selected clients can access it now. If you are interested in implementing it in the future, please contact <a href="https://support.vtex.com/hc/en-us">our Support team</a>.</p>
</div>

The older the token, the greater the risk of exposure and potential damage to the operation. The token renewal procedure guarantees the continuity of your store security and minimizes potential vulnerabilities.  

Renew the API token before the [duration](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ) ends to maintain continuous access to resources and preserve security.  

Follow the steps below to renew the token of an API key:

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fa-sync"></i> `Renew Token`.  
4. Click `Copy` to copy the API token to the clipboard. This secret will only be displayed once. Save it in a safe place.  
5. In the section **Delete Old Token**, check one of the following options:

   * **Later:** You must [manually delete](#deleting-old-tokens) the old token once the new token is in use in the integrations. Both tokens will be valid and functional until the old one is deleted. In the list on the **Generated** tab, in the **Token Duration** column, the duration of both tokens will be displayed, until the old one is deleted.  
   * **Now:** The old token will be deleted from the system at the end of the renewal process and only the new token will be valid.

   <div class="alert alert-info">
      <p>If the page is closed before selecting a deletion method in this step, the <strong>Later</strong> option will be applied, meaning that you will need to delete the old token manually.</p>
    </div>

6. Click `Complete`.

## Deleting old tokens

<div class="alert alert-warning">
  <p>Ensure the API key is no longer in use by any integration before deleting it. This action cannot be undone.</p>
</div>

Follow the instructions below to manually delete an old token after renewal. This procedure is only possible when the **Later** option for deletion was selected during the token renewal process.  

1. In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2. Make sure you are in the **Generated** tab.  
3. In the row of the desired API key, click the kebab menu (⋮) and then <i class="far fa-trash-alt"></i> `Delete Old Token`.  
4. Click `Delete` to confirm.  

## Undoing token renewal

<div class="alert alert-warning">
  <p>This procedure is only possible if the old token has not been <a href="#deleting-old-tokens">deleted</a>. If the old token has been deleted, you will need to renew the token again or <a href="https://help.vtex.com/en/tutorial/generated-key--7fnU4iZdvZKbxCaT3Ymdjc#delete-key">delete the API key</a>.</p>
</div>

If you renewed your token by mistake or forgot to copy the newly generated token, follow the steps below to undo the renewal.  

1.	In the top bar of the VTEX Admin, click your **profile avatar** — indicated by the first letter of your email — and then click *Account Settings > API Keys*.  
2.	Make sure you are in the **Generated** tab.  
3.	In the row of the desired API key, click the kebab menu (⋮) and then <i class="fas fas fa-sync"></i> `Undo Renewal`.  
4.	Click `Undo` to confirm.

## Learn more

* [API Keys (Beta)](/en/tutorial/api-keys--4bFEmcHXgpNksoePchZyy6)
* [Configuring the duration of API keys (Beta)](/en/tutorial/configuring-the-duration-of-api-keys--kcGIFysFt02FDuhsfjQwZ)
* [Generated keys (Beta)](/en/tutorial/generated-keys--7fnU4iZdvZKbxCaT3Ymdjc)
